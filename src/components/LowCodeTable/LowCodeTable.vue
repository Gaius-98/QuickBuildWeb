<template>
  <div class="low-code-table">
    <a-card class="search-area" v-if="showWidgetPanel">
      <a-form ref="searchFormRef" :model="paramsData" @finish="onSearch">
        <a-row :gutter="24">
          <a-col :span="6" v-for="widget in widgetCfg" :key="widget.id">
            <a-form-item :label="widget.label" :name="widget.field">
              <a-input
                v-if="widget.type == 'input'"
                :allowClear="true"
                v-model:value="paramsData[widget.field!]"
              ></a-input>
              <a-select
                v-else-if="widget.type == 'select'"
                v-model:value="paramsData[widget.field!]"
                :options="
                  widget.dictType == 'dict'
                    ? dictOptions[widget.dict!]
                    : colDictOptions[widget.field!]
                "
                :allowClear="true"
              ></a-select>
              <a-date-picker v-else v-model:value="paramsData[widget.field!]"></a-date-picker>
            </a-form-item>
          </a-col>
          <a-col :span="6" style="text-align: right">
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools" v-if="showHeaderBtnPanel">
        <a-button
          v-for="headerBtn in actionCfg?.filter((e) => e.position == 'header')"
          :key="headerBtn.id"
          @click="onClickBtn(headerBtn)"
        >
          {{ headerBtn.name }}
        </a-button>
      </div>
      <a-table
        :loading="loading"
        :columns="columnsCfg"
        :data-source="tableData"
        :scroll="{ y: 500 }"
        @change="onChangePagination"
        :pagination="
          showPagination && {
            current: paramsData.pageNumber,
            total: total,
            showSizeChanger: true,
            pageSize: paramsData.pageSize
          }
        "
        :bordered="globalCfg?.showBordered"
        :size="globalCfg?.size"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.type === 'image'">
            <a-image :src="record[column.dataIndex]"></a-image>
          </template>
          <template v-if="column.type === 'link'">
            <a :href="record[column.dataIndex]">
              {{ record[column.dataIndex] }}
            </a>
          </template>
          <template v-if="column.key == '_action_'">
            <a-button
              type="link"
              :key="rowBtn.id"
              v-for="rowBtn in actionCfg?.filter((e) => e.position == 'row')"
              @click="onClickBtn(rowBtn, record)"
              :danger="rowBtn.builtInEvents === 'delete'"
            >
              {{ rowBtn.name }}
            </a-button>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup name="LowCodeTable">
import { reactive, toRefs, ref, onMounted, h, computed } from 'vue'
import commonApi, { type DictItem } from '@/api/common'
import type { LowCodeTable } from '@/model'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { Modal } from 'ant-design-vue'
import { DeleteOutlined } from '@ant-design/icons-vue'
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'

interface Props {
  id: string
}
const props = withDefaults(defineProps<Props>(), {
  id: ''
})
const { id } = toRefs(props)
const lowcodeTableCfg = ref<LowCodeTable>()
const widgetCfg = ref<LowCodeTable['filter']>()
const globalCfg = ref<LowCodeTable['global']>()
const actionCfg = ref<LowCodeTable['action']>()
const columnsCfg = ref<any[]>()
const dataSourceCfg = ref<LowCodeTable['dataSource']>()

const showPagination = computed(() => {
  return globalCfg.value?.showPagination
})
const showWidgetPanel = computed(() => {
  return globalCfg.value?.showFilter && widgetCfg.value && widgetCfg.value.length > 0
})
const showHeaderBtnPanel = computed(() => {
  const headerBtns = actionCfg.value?.filter((e) => e.position == 'header')
  return headerBtns && headerBtns.length > 0
})
const showTableOptColumn = computed(() => {
  const rowBtns = actionCfg.value?.filter((e) => e.position == 'row')
  return rowBtns && rowBtns.length > 0
})
if (!id.value) {
  throw new Error('id is required')
} else {
  commonApi.getLowCodeTableDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      widgetCfg.value = data.filter

      globalCfg.value = data.global
      actionCfg.value = data.action

      dataSourceCfg.value = data.dataSource
      handleWidgetDefaultValue(widgetCfg.value)
      getSelectOptions(widgetCfg.value)
      columnsCfg.value = handleColumns(data.columns)
      onSearch()
    } else {
      message.error(msg)
    }
  })
}
const loading = ref(false)
const tableData = ref<Record<string, any>[]>([])
const paramsData = ref<Record<string, any>>({
  pageNumber: 1,
  pageSize: 10
})
const searchFormRef = ref()
const total = ref(0)
const handleWidgetDefaultValue = (widgetList: LowCodeTable['filter']) => {
  widgetList.forEach((widget) => {
    if (widget.defaultValue) {
      paramsData.value[widget.field!] = widget.defaultValue
    }
  })
}
const dictOptions = ref<Record<string, DictItem[]>>({})
const colDictOptions = ref<Record<string, DictItem[]>>({})
const getSelectOptions = (widgetList: LowCodeTable['filter']) => {
  const dicts = widgetList
    .filter((widget) => {
      if (widget.type == 'select' && widget.dictType == 'dict') {
        return widget
      }
    })
    .map((e) => e.dict)
  const colDicts = widgetList
    .filter((widget) => {
      if (widget.type == 'select' && widget.dictType == 'col') {
        return widget
      }
    })
    .map((e) => e.field as string)
  if (dicts.length > 0) {
    commonApi.getDict(dicts as string[]).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        dictOptions.value = data
      } else {
        message.error(msg)
      }
    })
  }
  if (colDicts.length > 0) {
    colDicts.forEach((field) => {
      commonApi
        .getLowCodeColData({
          sourceId: dataSourceCfg.value!.sourceId,
          tableName: dataSourceCfg.value!.tableName,
          field: field
        })
        .then((res) => {
          const { code, data, msg } = res
          if (code == 200) {
            colDictOptions.value[field] = data
          } else {
            message.error(msg)
          }
        })
    })
  }
}
const handleColumns = (columns: LowCodeTable['columns']) => {
  const newColumns = columns.map((column) => {
    return {
      title: column.title,
      key: column.id,
      dataIndex: column.dataIndex,
      width: column.width,
      align: column.align,
      fixed: column.fixed,
      type: column.type
    }
  })
  if (showTableOptColumn.value) {
    newColumns.push({
      title: '操作',
      key: '_action_',
      dataIndex: '_action_',
      width: 250,
      fixed: 'right'
    } as any)
  }
  return newColumns
}
const onSearch = () => {
  loading.value = true
  commonApi
    .getLowCodeTableList({
      sourceId: dataSourceCfg.value!.sourceId,
      tableName: dataSourceCfg.value!.tableName,
      pageNumber: paramsData.value.pageNumber,
      pageSize: paramsData.value.pageSize,
      paramsData: paramsData.value
    })
    .then((res) => {
      const { code, data, msg } = res
      loading.value = false
      if (code == 200) {
        tableData.value = data.data
        total.value = data.total
      } else {
        message.error(msg)
      }
    })
}
const onClear = () => {
  searchFormRef.value?.resetFields()
  onSearch()
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  paramsData.value.pageNumber = current!
  paramsData.value.pageSize = pageSize!
  onSearch()
}
const formData = ref<Record<string, any>>({})
const resetFormData = () => {
  formData.value = {}
}
const onClickBtn = (btn: LowCodeTable['action'][0], rowData?: Record<string, any>) => {
  const { customEvent, builtInEvents, eventFlowId, formId } = btn
  if (rowData) {
    formData.value = cloneDeep(rowData)
  }
  if (customEvent) {
    // customEvent
  } else {
    if (['add', 'edit'].includes(builtInEvents!)) {
      let httpApi =
        builtInEvents == 'add' ? commonApi.insertLowCodeTable : commonApi.updateLowCodeTable
      Modal.confirm({
        title: builtInEvents == 'add' ? '新增' : '编辑',
        content: h(LowCodeFormId, {
          id: formId!,
          formData: formData.value
        }),
        onOk() {
          httpApi({
            sourceId: dataSourceCfg.value!.sourceId,
            tableName: dataSourceCfg.value!.tableName,
            data: formData.value
          }).then((res) => {
            const { code, data, msg } = res
            resetFormData()
            if (code == 200) {
              message.success(data as string)
              onSearch()
            }
          })
        },
        onCancel() {
          resetFormData()
        }
      })
    }
    if (builtInEvents == 'delete') {
      Modal.confirm({
        title: '您确定要删除该数据吗?',
        icon: h(DeleteOutlined),
        content: '该操作无法还原！',
        onOk() {
          commonApi
            .removeLowCodeTable({
              sourceId: dataSourceCfg.value!.sourceId,
              tableName: dataSourceCfg.value!.tableName,
              data: formData.value
            })
            .then((res) => {
              const { code, data, msg } = res
              resetFormData()
              if (code == 200) {
                message.success(data as string)
                onSearch()
              }
            })
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {}
      })
    }
  }
}
onMounted(() => {})
</script>
<style scoped lang="scss">
.low-code-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: $gap;
  }
  .tools {
    margin-bottom: $half-gap;
  }
}
</style>
