<template>
  <ag-grid-vue
    :rowData="tableData"
    :columnDefs="colDefs"
    :style="{
      height: height + 'px'
    }"
    class="ag-theme-quartz"
    @column-moved="afterColumnMoved"
    @column-resized="afterResized"
    @column-header-clicked="onClickTableHeader"
  >
  </ag-grid-vue>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed, compile, defineComponent } from 'vue'
import type { LCTableColumnCfg } from '@/model'
import './styles/custom.scss'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the Data Grid
import { AgGridVue } from 'ag-grid-vue3' // Vue Data Grid Component
import type {
  ColDef,
  ColumnMovedEvent,
  ColumnResizedEvent,
  ColumnHeaderClickedEvent,
  IHeaderParams
} from 'ag-grid-community'
import CustomTableHeader from './components/CustomColumnHeader.vue'
import agPubSub from './utils/AgPubSub'
import CustomOptCell from './components/CustomOptCell.vue'
import CustomAddColumnHeader from './components/CustomAddColumn.vue'
agPubSub.onSubscribe('removeEvent', (params: IHeaderParams) => {
  let colId = params.column.getColId()
  let column = columns.value.find((col) => col.dataIndex == colId)
  if (column) {
    removeColumn(column)
  }
})
const columns = defineModel<Partial<LCTableColumnCfg>[]>('columns', {
  required: true
})
interface Props {
  columnId: string
  tableData: Record<string, any>[]
  height: number
}
const props = withDefaults(defineProps<Props>(), {
  columnId: 'id',
  height: 400
})
const { columnId, tableData } = toRefs(props)
const colDefs = computed<ColDef[]>(() => {
  let cols = columns.value.map((col) => {
    return {
      field: col.dataIndex,
      colId: col.dataIndex,
      headerName: col.title,
      pinned: col.fixed,
      lockVisible: true,
      headerComponent: CustomTableHeader
    } as ColDef
  })
  cols.push({
    field: '_plus_',
    colId: '_plus',
    headerName: '新增列',
    lockVisible: true,
    headerComponent: CustomAddColumnHeader
  })
  cols.push({
    field: '_opt_',
    colId: '_opt_',
    headerName: '操作',
    pinned: 'right',
    lockVisible: true,
    cellRenderer: CustomOptCell
  } as ColDef)
  return cols
})

const afterColumnMoved = (ev: ColumnMovedEvent) => {
  if (!ev.finished) return
  let newColumns = ev.api.getColumnState().map((e) => {
    return columns.value.find((col) => {
      return col.dataIndex == e.colId
    })
  }) as Partial<LCTableColumnCfg>[]
  columns.value = newColumns
}
const afterResized = (ev: ColumnResizedEvent) => {
  if (!ev.finished) return
  let colId = ev.column!.getColId()
  let idx = columns.value.findIndex((col) => {
    return col.dataIndex == colId
  })
  if (idx != -1) {
    columns.value[idx].width = ev.column!.getActualWidth()
  }
}
const emit = defineEmits(['onRemove', 'onClick'])
const removeColumn = (column: Partial<LCTableColumnCfg>) => {
  emit('onRemove', column)
}
const onClickTableHeader = (ev: ColumnHeaderClickedEvent) => {
  let colId = ev.column.getId()
  let column = columns.value.find((col) => col.dataIndex == colId)
  emit('onClick', column)
}
</script>
<style scoped lang="scss">
.ag-header-cell-comp-wrapper {
  width: 100%;
}
</style>
