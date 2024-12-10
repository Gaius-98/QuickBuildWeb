<template>
  <div class="table-design" v-loading.fullscreen="saveLoading">
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
          <a-form-item label="选择数据源">
            <a-select
              v-model:value="tableCfg.datasource.sourceId"
              :options="dataSourceList"
              style="width: 180px"
              :fieldNames="{ label: 'datasourceName', value: 'id' }"
              @change="getTableInfo()"
            >
            </a-select>
          </a-form-item>
          <a-form-item label="选择表名">
            <a-select
              v-model:value="tableCfg.datasource.tableName"
              :options="tableNameList"
              style="width: 180px"
              :fieldNames="{ label: 'tableName', value: 'tableName' }"
              @change="getFieldInfo()"
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
              v-model:list="tableCfg.filter.widgetList"
              class="widget-container"
              animation="300"
              :group="{ name: 'widget', pull: true, put: true }"
              ghost-class="ghost"
              filter=".add"
              handle=".move-handle"
            >
              <div
                class="widget-item"
                v-for="item in tableCfg.filter.widgetList"
                :key="item.id"
                @click="onOpenWidget(item)"
              >
                <DragOutlined class="move-handle" style="cursor: pointer" />
                <a-form-item :label="item.label" :name="item.field">
                  <a-input v-if="item.type == 'input'"></a-input>
                  <a-select v-else-if="item.type == 'select'"></a-select>
                  <a-date-picker v-else></a-date-picker>
                </a-form-item>
                <a-popconfirm
                  title="确定要删除此按钮的配置吗?"
                  ok-text="确定"
                  cancel-text="取消"
                  @confirm="onRemoveWidget(item.id!)"
                >
                  <CloseCircleOutlined class="remove-btn" @click.stop="() => {}" />
                </a-popconfirm>
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
              v-model:list="tableCfg.action"
              class="button-container"
              animation="300"
              :group="{ name: 'button', pull: true, put: true }"
              ghost-class="ghost"
              filter=".add"
              handle=".move-handle"
            >
              <div
                class="button-item"
                v-for="item in tableCfg.action.filter((e) => e.position == 'header')"
                :key="item.id"
              >
                <DragOutlined class="move-handle" style="cursor: pointer" />
                <a-button @click="onOpenBtnModal(item)">
                  {{ item.name }}
                </a-button>
                <a-popconfirm
                  title="确定要删除此按钮的配置吗?"
                  ok-text="确定"
                  cancel-text="取消"
                  @confirm="onRemoveBtn(item.id!)"
                >
                  <CloseCircleOutlined class="remove-btn" />
                </a-popconfirm>
              </div>
              <div class="add button-item">
                <a-button type="primary" @click="onClickAddBtn()"> 添加按钮 </a-button>
              </div>
            </vue-draggable-next>
          </div>
        </div>
        <div class="table-part">
          <ag-table
            v-model:columns="tableCfg.columns"
            :tableData="tableData"
            :height="550"
            @onRemove="onRemove"
            @onClick="onClickColumn"
          >
          </ag-table>
        </div>
      </div>
    </div>
  </div>
  <a-drawer
    title="按钮配置"
    placement="right"
    :closable="false"
    :open="btnCfgShow"
    @close="btnCfgShow = false"
  >
    <a-form :model="currentBtnCfg">
      <a-form-item prop="id" label="按钮标识">
        <a-input v-model:value="currentBtnCfg.id"></a-input>
      </a-form-item>
      <a-form-item prop="name" label="按钮名称">
        <a-input v-model:value="currentBtnCfg.name"></a-input>
      </a-form-item>
      <a-form-item prop="name" label="按钮位置">
        <a-radio-group v-model:value="currentBtnCfg.position" button-style="solid">
          <a-radio-button value="header">表头</a-radio-button>
          <a-radio-button value="row">行内</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item prop="event" label="事件流">
        <a-select v-model:value="currentBtnCfg.eventFlowId" :options="evnetFlows">
          <template #suffixIcon>
            <SyncOutlined style="color: #000" title="刷新" />
            <ExportOutlined
              @click="onClickEditFlow()"
              style="color: #000"
              title="编辑事件流"
              v-if="currentBtnCfg.eventFlowId"
            />
            <PlusOutlined style="color: #000" title="新增事件流" v-else />
          </template>
        </a-select>
      </a-form-item>
    </a-form>
  </a-drawer>
  <a-drawer
    title="筛选控件配置"
    placement="right"
    :closable="false"
    :open="widgetShow"
    @close="widgetShow = false"
  >
    <schema-form :formData="currentWidgetCfg" :schema="widgetSchema"> </schema-form>
  </a-drawer>
  <a-drawer
    title="列配置"
    placement="right"
    :closable="false"
    :open="columnShow"
    @close="columnShow = false"
  >
    <table-cfg></table-cfg>
  </a-drawer>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import AgTable from './AgTable/AgTable.vue'
import { VueDraggableNext } from 'vue-draggable-next'
import {
  DragOutlined,
  ExportOutlined,
  SyncOutlined,
  PlusOutlined,
  CloseCircleOutlined
} from '@ant-design/icons-vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { DataSourceTable, LCTableColumnCfg, LowCodeDataSource, Obj } from '@/model'
import commonApi, { type DictItem } from '@/api/common'
import TableCfg from './TableCfg.vue'
import type { LCTableInteractionCfg } from '@/model'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { SchemaProp } from '@/model'
import agPubSub from './AgTable/utils/AgPubSub'

agPubSub.onSubscribe('open-btn-modal', (data: any) => {
  onOpenBtnModal(data)
})
const dataSourceList = ref<LowCodeDataSource[]>([])
onMounted(() => {
  commonApi.getDataSourceDict().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      dataSourceList.value = data
    }
  })
})
const tableStore = useTableDesignStore()
const { tableCfg, columnFields, saveLoading } = storeToRefs(tableStore)

const {
  onSelectColumn,
  onRemoveBtn,
  onRemoveColumn,
  onSetColumns,
  onRemoveWidget,
  onAddBtn,
  onSave
} = tableStore
window.name = 'table-design'

const onClickAddWidget = () => {
  tableCfg.value.filter.widgetList?.push({
    id: new Date().getTime().toString(),
    type: 'input',
    label: '文本',
    field: 'field'
  })
}

const goBack = () => {
  window.open('/lowcode/table', 'quick-build')
}

const onClickColumn = (columnData: LCTableColumnCfg) => {
  onSelectColumn(columnData.id, tableCfg.value.columns)
  columnShow.value = true
}
const onRemove = (columnData: LCTableColumnCfg) => {
  onRemoveColumn(columnData.id, tableCfg.value.columns)
}
const fields = ref<string[]>([])
const tableData = ref<Obj<any>[]>([])
const getPreviewData = () => {
  commonApi
    .getSourceData(tableCfg.value.datasource.sourceId, tableCfg.value.datasource.tableName)
    .then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableData.value = data
      }
    })
}
const tableNameList = ref<DataSourceTable[]>([])
const getTableInfo = () => {
  commonApi.getTableInfo(tableCfg.value.datasource.sourceId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableNameList.value = data
    }
  })
}
const getFieldInfo = () => {
  commonApi
    .getColumnInfo(tableCfg.value.datasource.sourceId, tableCfg.value.datasource.tableName)
    .then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableCfg.value.columns = data.map((e) => ({
          dataIndex: e.columnName,
          title: e.columnComment || e.columnName,
          id: e.columnName,
          width: 200,
          type: 'text',
          align: 'left',
          fixed: 'none'
        }))
        onSetColumns(
          data.map((e) => ({
            label: e.columnComment ? `${e.columnComment}(${e.columnName})` : e.columnName,
            value: e.columnName
          }))
        )
      }
    })
  getPreviewData()
}
const onClickAddBtn = () => {
  onAddBtn('header')
}

const currentBtnCfg = ref<LCTableInteractionCfg>({
  id: '',
  name: '',
  eventFlowId: '',
  position: 'header'
})
const btnCfgShow = ref(false)
const evnetFlows = ref([
  {
    label: '默认新增事件流',
    value: 'add'
  },
  {
    label: '默认编辑事件流',
    value: 'edit'
  },
  {
    label: '默认批量编辑事件流',
    value: 'batchEdit'
  }
])
const onOpenBtnModal = (btnCfg: any) => {
  currentBtnCfg.value = btnCfg
  btnCfgShow.value = true
}
const onClickEditFlow = () => {
  console.log('click')
}

const currentWidgetCfg = ref({})
const widgetShow = ref(false)
const widgetSchema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      style: {
        width: '80px'
      }
    }
  },
  properties: {
    id: {
      type: 'string',
      label: '控件标识',
      component: {
        disabled: true
      }
    },
    field: {
      type: 'string',
      label: '字段名称'
    },
    label: {
      type: 'string',
      label: '文本标签'
    },
    type: {
      type: 'radio',
      label: '控件类型',
      component: {
        dataSource: [
          {
            label: '输入框',
            value: 'input'
          },
          {
            label: '选择框',
            value: 'select'
          },
          {
            label: '日期框',
            value: 'date'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    dict: {
      type: 'select',
      label: '字典',
      show: '"${formData.type}" == "select"'
    },

    defaultValue: {
      type: 'string',
      label: '默认值'
    }
  }
})

const onOpenWidget = (cfg: any) => {
  currentWidgetCfg.value = cfg
  widgetShow.value = true
}
const columnShow = ref(false)
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
            &:not(.add) {
              border: 1px solid transparent;
              margin-right: 5px;
              cursor: pointer;
              &:hover {
                border: 1px dashed #4096ff;
              }
            }
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
            align-items: center;
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
            &:first-child {
              margin-left: 5px;
            }
            &:not(.add) {
              border: 1px solid transparent;
              margin-right: 5px;
              &:hover {
                border: 1px dashed #4096ff;
              }
            }
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
