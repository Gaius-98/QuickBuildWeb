<template>
  <div class="table-design">
    <a-page-header
      @back="goBack"
      :ghost="false"
      style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px"
    >
      <template #title>
        <a-input v-model:value="tableCfg.name" :bordered="false" class="table-name"></a-input>
      </template>
      <template #extra>
        <a-space class="extra">
          <a-form-item label="选择数据集">
            <a-select
              v-model:value="tableCfg.datasetId"
              :options="datasetList"
              style="width: 180px"
              @change="onChangeDataset()"
            >
            </a-select>
          </a-form-item>
          <a-button @click="onSave()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="table-design-container">
      <div class="main-part">
        <div class="filter-part">
          <div class="filter-container">
            <vue-draggable-next
              v-model:list="widgetList"
              class="widget-container"
              animation="300"
              :group="{ name: 'widget', pull: true, put: true }"
              ghost-class="ghost"
              filter=".add"
              handle=".move-handle"
            >
              <div class="widget-item" v-for="item in widgetList" :key="item.prop">
                <DragOutlined class="move-handle" style="cursor: pointer" />
                <a-form-item :label="item.label" :name="item.prop">
                  <a-input v-if="item.type == 'text'"></a-input>
                  <a-select v-else></a-select>
                </a-form-item>
              </div>
              <div class="add widget-item">
                <a-button type="primary" @click="onClickAddWidget()"> 添加控件 </a-button>
              </div>
            </vue-draggable-next>
          </div>
        </div>
        <div class="tools-part">
          <div class="tools-container">
            <vue-draggable-next
              v-model:list="btnList"
              class="button-container"
              animation="300"
              :group="{ name: 'button', pull: true, put: true }"
              ghost-class="ghost"
              filter=".add"
              handle=".move-handle"
            >
              <div class="button-item" v-for="item in btnList" :key="item.name">
                <a-button>
                  <DragOutlined class="move-handle" style="cursor: pointer" />
                  {{ item.name }}
                </a-button>
              </div>
              <div class="add button-item">
                <a-button type="primary" @click="onClickAddWidget()"> 添加按钮 </a-button>
              </div>
            </vue-draggable-next>
          </div>
        </div>
        <div class="table-part">
          <ag-table
            v-model:columns="tableCfg.columns"
            :tableData="tableData"
            :height="300"
            @onRemove="onRemove"
            @onClick="onClickColumn"
          >
          </ag-table>
        </div>
      </div>
      <div class="right-part"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { reactive, toRefs, ref, onMounted } from 'vue'
import AgTable from './AgTable/AgTable.vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { DragOutlined } from '@ant-design/icons-vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { LCTableColumnCfg, Obj } from '@/model'
import commonApi, { type DictItem } from '@/api/common'

const datasetList = ref<DictItem[]>([])
onMounted(() => {
  commonApi.getDatasetDict().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      datasetList.value = data
    }
  })
})
const tableStore = useTableDesignStore()
const { tableCfg, columnFields } = storeToRefs(tableStore)
const { onSelectColumn, onRemoveColumn, onAddColumn, onRefreshData } = tableStore
window.name = 'table-design'

const widgetList = ref([
  {
    label: '测试1',
    prop: 'test1',
    type: 'input'
  },
  {
    label: '测试2',
    prop: 'test2',
    type: 'select'
  },
  {
    label: '测试3',
    prop: 'test3',
    type: 'input'
  },
  {
    label: '测试4',
    prop: 'test4',
    type: 'select'
  },
  {
    label: '测试5',
    prop: 'tes5',
    type: 'input'
  },
  {
    label: '测试6',
    prop: 'test6',
    type: 'select'
  }
])
const btnList = ref([
  {
    name: '新增',
    type: 'add'
  },
  {
    name: '批量编辑',
    type: 'edit'
  }
])
const onClickAddWidget = () => {}
const onSave = () => {}

const goBack = () => {
  window.open('/lowcode/table', 'quick-build')
}

const onClickColumn = (columnData: LCTableColumnCfg) => {
  onSelectColumn(columnData.id, tableCfg.value.columns)
}
const onRemove = (columnData: LCTableColumnCfg) => {
  onRemoveColumn(columnData.id, tableCfg.value.columns)
}
const fields = ref<string[]>([])
const tableData = ref<Obj<any>[]>([])
const getPreviewData = () => {
  commonApi.getPreviewByDatasetId(tableCfg.value.datasetId).then((res) => {
    const { code, data, msg } = res

    if (code == 200) {
      tableData.value = data
    }
  })
}
const onChangeDataset = () => {
  commonApi.getFieldByDatasetId(tableCfg.value.datasetId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      fields.value = data
      tableCfg.value.columns = fields.value.map((e) => ({
        dataIndex: e,
        id: e,
        title: e
      }))
    }
  })
  getPreviewData()
}
</script>
<style scoped lang="scss">
.table-design {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .table-name {
    &:hover {
      background-color: #e0f7fa;
    }
  }
  .extra {
    .ant-form-item {
      margin-bottom: 0;
    }
  }
  .table-design-container {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: $gap;
    height: calc(100vh - 80px);
    padding: 10px 10px 0;
    .main-part {
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      .filter-part {
        margin-bottom: $gap;
        .filter-container {
          height: 150px;
          overflow-y: auto;
          .widget-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            height: 100%;
            width: 100%;
          }
          .ghost {
            background-color: #e0f7fa;
            opacity: 0.7;
          }
          .widget-item {
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            padding: 5px;

            .ant-form-item {
              flex: 1;
              margin-bottom: 0;
            }
          }
        }
      }
      .tools-part {
        border: 1px dashed #ccc;
        margin-bottom: $gap;
        .tools-container {
          height: 40px;
          line-height: 40px;
          overflow-x: auto;
          .button-container {
            display: flex;
            height: 100%;
            width: 100%;
          }
          .ghost {
            background-color: #e0f7fa;
            opacity: 0.7;
          }
          .button-item {
            display: flex;
            align-items: center;
            height: 30px;
            line-height: 30px;
            padding: 5px;
          }
        }
      }
      .table-part {
        border: 1px dashed #ccc;
      }
    }
    .right-part {
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
