<template>
  <div class="table-design" v-loading.fullscreen="loading">
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
              v-model:value="tableCfg.dataSource.sourceId"
              :options="dataSourceList"
              style="width: 180px"
              :fieldNames="{ label: 'datasourceName', value: 'id' }"
              @change="getTableInfo()"
            >
            </a-select>
          </a-form-item>
          <a-form-item label="选择表名">
            <a-select
              v-model:value="tableCfg.dataSource.tableName"
              :options="tableNameList"
              style="width: 180px"
              :fieldNames="{ label: 'tableName', value: 'tableName' }"
              @change="getFieldInfo()"
            >
            </a-select>
          </a-form-item>
          <a-button type="primary" @click="onOpenGlobalModal">全局配置</a-button>

          <a-button @click="onSave()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="table-design-container">
      <div class="main-part">
        <div class="filter-part">
          <div class="filter-container">
            <vue-draggable-next
              v-model:list="tableCfg.filter"
              class="widget-container"
              animation="300"
              :group="{ name: 'widget', pull: true, put: true }"
              ghost-class="ghost"
              filter=".add"
              handle=".move-handle"
            >
              <div
                class="widget-item"
                v-for="item in tableCfg.filter"
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
      <a-form-item prop="customEvent" label="是否启用自定义">
        <a-switch v-model:checked="currentBtnCfg.customEvent"> </a-switch>
      </a-form-item>
      <a-form-item prop="builtInEvents" label="内置事件" v-if="!currentBtnCfg.customEvent">
        <a-select v-model:value="currentBtnCfg.builtInEvents" :options="buildInOptions" allowClear>
        </a-select>
      </a-form-item>
      <a-form-item
        prop="formId"
        label="关联表单"
        v-if="['add', 'edit'].includes(currentBtnCfg.builtInEvents) && !currentBtnCfg.customEvent"
      >
        <a-select
          v-model:value="currentBtnCfg.formId"
          :options="formList"
          :fieldNames="{
            label: 'name',
            value: 'id'
          }"
        ></a-select>
      </a-form-item>
      <a-form-item prop="event" label="自定义事件流" v-if="currentBtnCfg.customEvent">
        <a-button @click="onOpenEventFlow(currentBtnCfg)"> 自定义事件流 </a-button>
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
    <schema-form :formData="currentColumn" :schema="columnSchema"> </schema-form>
  </a-drawer>
  <a-drawer
    title="全局配置"
    placement="right"
    :closable="false"
    :open="globalShow"
    @close="globalShow = false"
  >
    <schema-form :formData="tableCfg.global" :schema="globalSchema"> </schema-form>
  </a-drawer>
  <a-modal
    width="100%"
    wrap-class-name="full-modal"
    v-model:open="eventFlowOpen"
    @ok="onSaveEventFlow"
    @cancel="onCancelFlowMaol"
  >
    <template #title>
      事件流配置
      <a-tooltip
        :overlayInnerStyle="{
          width: '600px',
          color: '#000'
        }"
        color="#ffffff"
        :arrow="false"
        placement="rightBottom"
      >
        <template #title>
          <h3>
            工作流配置注意事项<strong style="color: red"
              >(目前只支持线性工作流,没有条件判断或并行执行的能力)</strong
            >
          </h3>
          <ul>
            <li>
              <strong>工作流节点不能为空：</strong>
              每个工作流<strong>必须</strong>包含有效的节点配置。
            </li>
            <li>
              <strong>包含开始与结束节点：</strong>
              每个工作流<strong>必须</strong>包含一个“开始节点”和一个“结束节点”。
            </li>
            <li>
              <strong style="color: red">重要参数：</strong>
              <code>this.state.modalFormData</code>为弹窗表单数据，
              <code>this.state.requestData</code>为请求数据，
              两者既可以作为输入也可以作为输出，搭配<strong>处理函数</strong>节点使用，可以实现数据的填充或者数据的保存。
            </li>
            <li>
              <strong>节点内变量引用：</strong> 在<strong>处理函数</strong>节点中，可以通过
              <code>this.state.xxx</code> 的方式引用当前工作流中的变量。
              在<strong>请求配置</strong>节点中，在<strong>引用变量</strong>列中可以通过<code>state.xxx</code>引用变量数据，也可以配置<strong>Value</strong>列使用静态数据。
            </li>
            <li>
              <strong>预览结果：</strong> 执行后，预览结果仅显示当前工作流的
              <code>state</code> 属性，其他信息不可见。
            </li>
          </ul>
        </template>
        <QuestionCircleOutlined />
      </a-tooltip>
    </template>
    <flow-view :data="eventFlowData" ref="flowRef"></flow-view>
  </a-modal>
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
  CloseCircleOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons-vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { DataSourceTable, EventFlow, LCTableColumnCfg, LowCodeDataSource, Obj } from '@/model'
import commonApi, { type DictItem, type FormListItem } from '@/api/common'
import type { LCTableInteractionCfg } from '@/model'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { SchemaProp } from '@/model'
import { useRouter } from 'vue-router'
import agPubSub from './AgTable/utils/AgPubSub'
import api from '../api/table'
import { message } from 'ant-design-vue'
import FlowView from '@/views/Flow/FlowView.vue'
const router = useRouter()
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
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const loading = ref(false)
const tableStore = useTableDesignStore()
const { tableCfg, currentColumn } = storeToRefs(tableStore)
const {
  onSelectColumn,
  onRemoveBtn,
  onRemoveColumn,
  onSetColumns,
  onRemoveWidget,
  onAddBtn,
  setTableCfg
} = tableStore

if (id.value) {
  loading.value = true
  api.getDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      setTableCfg(data)
      getTableInfo()
      getPreviewData()
      loading.value = false
    }
  })
} else {
  setTableCfg({
    name: '未命名列表',
    description: '',
    status: 1,
    columns: [],
    global: {
      showFilter: true,
      showPagination: true,
      showBordered: false,
      size: 'middle'
    },
    dataSource: {
      tableName: '',
      sourceId: ''
    },
    filter: [],
    action: []
  })
}

window.name = 'table-design'
const buildInOptions = ref([
  {
    label: '新增',
    value: 'add'
  },
  {
    label: '编辑',
    value: 'edit'
  },
  {
    label: '删除',
    value: 'delete'
  }
])
const onClickAddWidget = () => {
  tableCfg.value.filter?.push({
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
    .getSourceData(tableCfg.value.dataSource.sourceId, tableCfg.value.dataSource.tableName)
    .then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableData.value = data
      }
    })
}
const tableNameList = ref<DataSourceTable[]>([])
const getTableInfo = () => {
  commonApi.getTableInfo(tableCfg.value.dataSource.sourceId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableNameList.value = data
    }
  })
}
const getFieldList = async () => {
  const { code, data, msg } = await commonApi.getColumnInfo(
    tableCfg.value.dataSource.sourceId,
    tableCfg.value.dataSource.tableName
  )
  if (code == 200) {
    return data.map((e) => ({
      label: e.columnComment ? `${e.columnComment}(${e.columnName})` : e.columnName,
      value: e.columnName
    }))
  } else {
    return []
  }
}
const getFieldInfo = () => {
  commonApi
    .getColumnInfo(tableCfg.value.dataSource.sourceId, tableCfg.value.dataSource.tableName)
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
const formList = ref<FormListItem[]>([])
const getFormDict = () => {
  commonApi.getFormDict().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      formList.value = data
    }
  })
}
onMounted(() => {
  getFormDict()
})
const currentBtnCfg = ref<LCTableInteractionCfg>({
  id: '',
  name: '',
  eventFlow: {
    nodes: [],
    edges: []
  },
  position: 'header',
  customEvent: false,
  builtInEvents: 'add',
  formId: ''
})
const btnCfgShow = ref(false)

const onOpenBtnModal = (btnCfg: any) => {
  currentBtnCfg.value = btnCfg
  btnCfgShow.value = true
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
      type: 'select',
      label: '字段名称',
      component: {
        asyncData: getFieldList
      }
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
    dictType: {
      type: 'radio',
      label: '字典类型',
      show: '"${formData.type}" == "select"',
      tooltip: '字典为系统的字典配置数据，列数据为当前配置字段的列数据',
      component: {
        dataSource: [
          {
            label: '字典',
            value: 'dict'
          },
          {
            label: '列数据',
            value: 'col'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    dict: {
      type: 'select',
      label: '字典',
      tooltip: '可以在系统配置自定义字典',
      show: '"${formData.type}" == "select" && "${formData.dictType}" == "dict"',
      component: {
        asyncData: async () => {
          const { code, data, msg } = await commonApi.getDictTypeList()
          if (code == 200) {
            return data.map((item) => {
              return {
                label: item.dictTypeDesc,
                value: item.dictType
              }
            })
          } else {
            return []
          }
        }
      }
    },

    defaultValue: {
      type: 'string',
      label: '默认值'
    }
  }
})
const columnSchema = ref<SchemaProp>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { style: { width: '80px' } }
  },
  properties: {
    dataIndex: {
      type: 'select',
      label: '字段名',
      component: {
        asyncData: getFieldList
      }
    },
    title: {
      type: 'string',
      label: '列名'
    },
    width: {
      type: 'number',
      label: '列宽'
    },
    align: {
      type: 'radio',
      label: '对齐方式',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'center',
            label: '居中'
          },
          {
            value: 'right',
            label: '右'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    fixed: {
      type: 'radio',
      label: '固定列',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'right',
            label: '右'
          },
          {
            value: 'none',
            label: '不固定'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    type: {
      type: 'select',
      label: '列类型',
      component: {
        dataSource: [
          {
            value: 'link',
            label: '链接'
          },
          {
            value: 'image',
            label: '图片'
          },
          {
            value: 'text',
            label: '文本'
          }
        ]
      }
    }
  }
})
const onOpenWidget = (cfg: any) => {
  currentWidgetCfg.value = cfg
  widgetShow.value = true
}
const columnShow = ref(false)

const globalShow = ref(false)
const globalSchema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      style: {
        width: '120px'
      }
    }
  },
  properties: {
    showFilter: {
      type: 'switch',
      label: '显示筛选面板'
    },
    showPagination: {
      type: 'switch',
      label: '显示分页器'
    },
    showBordered: {
      type: 'switch',
      label: '显示边框'
    },
    size: {
      type: 'radio',
      label: '表格尺寸',
      component: {
        dataSource: [
          {
            label: '紧凑',
            value: 'small'
          },
          {
            label: '默认',
            value: 'middle'
          },
          {
            label: '宽松',
            value: 'large'
          }
        ],
        buttonStyle: 'solid'
      }
    }
  }
})
const onOpenGlobalModal = () => {
  globalShow.value = true
}
const onSave = () => {
  loading.value = true
  let httpApi = id.value ? api.update : api.add
  httpApi(tableCfg.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      message.success('保存成功')
    }
    loading.value = false
  })
}
const eventFlowOpen = ref(false)
const eventFlowData = ref<EventFlow>({
  nodes: [],
  edges: []
})

const onOpenEventFlow = (data: LCTableInteractionCfg) => {
  eventFlowData.value = data.eventFlow
  eventFlowOpen.value = true
}
const flowRef = ref()
const onSaveEventFlow = () => {
  currentBtnCfg.value.eventFlow = flowRef.value.getData()
  onCancelFlowMaol()
}
const onCancelFlowMaol = () => {
  eventFlowData.value = { nodes: [], edges: [] }
  eventFlowOpen.value = false
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
