<template>
  <div class="dataset-design">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px"
      @back="goBack()"
    >
      <template #title>
        <a-input
          v-model:value="formData.datasetName"
          :bordered="false"
          class="dataset-name"
        ></a-input>
      </template>
      <template #extra>
        <a-space>
          <a-button @click="onSave()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="container">
      <div class="left-part">
        <div class="search-tree">
          <a-select
            v-model:value="formData.datasourceId"
            :options="datasourceList"
            :fieldNames="{ label: 'datasourceName', value: 'id' }"
            style="width: 100%"
            @change="onChangeDatasource()"
          >
          </a-select>
          <a-divider style="margin: 8px 0" />
          <a-input-search
            v-model:value="keyword"
            style="margin-bottom: 8px"
            placeholder="请输入表名称"
            allowClear
          />
          <a-tree
            :tree-data="filterTable"
            selectable
            :fieldNames="{
              title: 'tableName',
              key: 'tableName',
              children: 'children'
            }"
            style="height: calc(100%); overflow-y: auto"
          >
            <template #title="item">
              <div
                style="width: 200px; display: flex; justify-content: space-between"
                :title="item.tableName"
              >
                <span style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis">
                  <span class="iconfont icon-table"></span>
                  {{ item.tableName }}
                </span>
                <span style="width: 36px">
                  <CopyOutlined
                    title="复制表名"
                    style="cursor: pointer; margin-right: 5px"
                    v-copy="item.tableName"
                    @click="onCopy()"
                  />
                  <InfoCircleOutlined
                    title="查看字段信息"
                    style="cursor: pointer"
                    @click="onOpenColumnInfo(item.tableName)"
                  />
                </span>
              </div>
            </template>
          </a-tree>
        </div>
      </div>
      <div class="right-part">
        <div class="tools-area">
          <a-button @click="onRun()" type="text" :icon="h(PlayCircleOutlined)">运行</a-button>
          <a-divider type="vertical" />
          <a-button @click="formatSql()" type="text" :icon="h(HighlightOutlined)">美化</a-button>
          <a-divider type="vertical" />
          <a-button @click="onOpenParamsModal()" type="text" :icon="h(SettingOutlined)"
            >参数</a-button
          >
        </div>
        <div class="sql-area">
          <codemirror
            :style="{ height: '350px' }"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="extensions"
            v-model="formData.execSql"
          />
        </div>
        <div class="result">
          <a-tabs v-model:activeKey="activeKey" @change="onChangeTable">
            <a-tab-pane key="result" tab="执行结果">
              <a-table
                style="width: 100%"
                v-if="resultData && resultData.length > 0"
                size="small"
                :scroll="{
                  x: 'max-content',
                  y: '280px'
                }"
                :data-source="resultData"
                :columns="resultColumns"
              >
              </a-table>
              <a-empty v-else> </a-empty>
            </a-tab-pane>
            <a-tab-pane key="history" tab="历史记录">
              <a-table
                :scroll="{
                  y: '280px'
                }"
                size="small"
                :data-source="logData"
                :columns="logColumns"
                @change="onChangePagination"
                :pagination="{
                  current: logParams.pageNumber,
                  total: logTotal,
                  showSizeChanger: false,
                  pageSize: logParams.pageSize
                }"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key == 'status'">
                    <a-tag color="#87d068" v-if="record.status == '1'">成功</a-tag>
                    <a-tag color="#f50" v-else>失败</a-tag>
                  </template>
                  <template v-if="column.key == 'action'">
                    <a-button type="link" @click="onOpenLogDetail(record)">查看</a-button>
                  </template>
                </template>
              </a-table>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>

    <a-modal
      width="600px"
      :title="`${curretTableName}字段明细`"
      :footer="null"
      v-model:open="modalOpen"
    >
      <a-table
        size="small"
        class="ant-table-striped"
        :data-source="columnTable"
        :columns="fieldColumns"
        :loading="columnLoading"
        :row-class-name="
          (_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)
        "
        :pagination="false"
        :scroll="{
          x: 'auto',
          y: '500px'
        }"
      ></a-table>
    </a-modal>
    <a-modal
      title="参数配置"
      v-model:open="paramsModal"
      width="800px"
      height="400px"
      :footer="null"
    >
      <a-button
        type="primary"
        style="margin-bottom: 5px"
        @click="onAddParams()"
        :icon="h(PlusOutlined)"
        >新增</a-button
      >
      <a-table
        :columns="paramsColumns"
        :data-source="formData.paramsConfig"
        :scroll="{
          y: '300px'
        }"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="['paramsName', 'paramsDefaultValue'].includes(column.key)">
            <a-input v-model:value="record[column.dataIndex]" />
          </template>
          <template v-if="column.key == 'paramsType'">
            <a-select
              style="width: 100%"
              v-model:value="record[column.dataIndex]"
              :options="[
                {
                  label: '字符串',
                  value: 'string'
                }
              ]"
            />
          </template>
          <template v-if="column.key == 'action'">
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onRemoveParams(record)"
            >
              <a-button type="link" danger>删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </a-modal>
    <a-modal title="日志明细" v-model:open="logOpen" width="900px" :footer="null">
      <a-descriptions size="small" :column="2" style="width: 800px">
        <a-descriptions-item label="执行结果" :span="1">
          <a-tag color="#87d068" v-if="logDetail.status == '1'">成功</a-tag>
          <a-tag color="#f50" v-else>失败</a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="执行耗时" :span="1"
          >{{ logDetail.executionTime }}ms</a-descriptions-item
        >
        <a-descriptions-item label="执行语句" :span="2">
          <codemirror
            :style="{ height: '200px', width: '100%' }"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="extensions"
            :model-value="logDetail.execSql"
            :disabled="true"
          />
        </a-descriptions-item>

        <a-descriptions-item label="错误日志" :span="2">
          <span style="color: red">
            {{ logDetail.errMsg }}
          </span>
        </a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted, computed, h } from 'vue'
import datasourceApi from '../../DataSource/api'
import { Codemirror } from 'vue-codemirror'
import { vscodeLight } from '@uiw/codemirror-theme-vscode'
import { v4 as uuid } from 'uuid'
import api from '../api'
import { sql, type SQLConfig } from '@codemirror/lang-sql'
import { format } from 'sql-formatter'
import type {
  DataSourceTable,
  DataSourceTableField,
  LowCodeDataset,
  LowCodeDatasetLog,
  LowCodeDataSource,
  Obj,
  DatasetParamsConfig
} from '@/model'
import { message, type PaginationProps } from 'ant-design-vue'
import {
  InfoCircleOutlined,
  CopyOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  PlusOutlined
} from '@ant-design/icons-vue'

import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { SchemaProp } from '@/model'
interface Props {
  type: 'edit' | 'add'
  id?: string
  datasourceId?: string
  tableName?: string
}
const tableList = ref<DataSourceTable[]>([])
const schema = ref<Record<string, string[]>>({})
const extensions = ref<any[]>([])
const formatSql = () => {
  formData.value.execSql = format(formData.value.execSql, { language: 'mysql' })
}
const formData = ref<LowCodeDataset>({
  datasetName: '',
  datasourceId: '',
  execSql: '',
  status: '1',
  paramsConfig: []
})
const props = withDefaults(defineProps<Props>(), {
  type: 'add'
})
const paramsModal = ref(false)
const { type, id, datasourceId, tableName } = toRefs(props)
const onChangeDatasource = () => {
  datasourceApi.getTableInfo(formData.value.datasourceId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableList.value = data
    }
  })
  datasourceApi.getSchema(formData.value.datasourceId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      schema.value = data
      extensions.value = [
        sql({
          schema: schema.value
        }),
        vscodeLight
      ]
    }
  })
}
formData.value.datasetName = formData.value.datasetName || '未命名'
if (datasourceId.value) {
  formData.value.datasourceId = datasourceId.value
  onChangeDatasource()

  if (tableName.value) {
    formData.value.execSql = `select * from ${tableName.value}`
  }
}
if (type.value === 'edit' && id.value) {
  api.getDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      formData.value = data
      onChangeDatasource()
    }
  })
}
const filterTable = computed(() => {
  return tableList.value.filter((e) => e.tableName.includes(keyword.value))
})
const datasourceList = ref<LowCodeDataSource[]>([])
const onSave = () => {
  let http
  if (type.value == 'add') {
    http = api.add
  } else if (type.value == 'edit') {
    http = api.update
  }
  http!(formData.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      message.success('保存成功')
    }
  })
}
const keyword = ref('')

onMounted(() => {
  datasourceApi.getList('').then((res) => {
    const { code, data } = res
    if (code == 200) {
      datasourceList.value = data.data
    }
  })
})
const modalOpen = ref(false)
const columnTable = ref<DataSourceTableField[]>([])
const columnLoading = ref(false)
const fieldColumns = ref([
  {
    title: '字段名称',
    key: 'columnName',
    dataIndex: 'columnName',
    width: '200px'
  },
  {
    title: '字段类型',
    key: 'columnType',
    dataIndex: 'columnType',
    width: '200px'
  },
  {
    title: '字段注释',
    key: 'columnComment',
    dataIndex: 'columnComment',
    width: '200px'
  }
])
const curretTableName = ref('')
const onOpenColumnInfo = (tableName: string) => {
  columnLoading.value = true
  curretTableName.value = tableName
  datasourceApi.getColumnInfo(formData.value.datasourceId, tableName).then((res) => {
    const { code, data } = res
    columnLoading.value = false
    if (code == 200) {
      columnTable.value = data
    }
  })
  modalOpen.value = true
}

const goBack = () => {
  window.open('/data/dataset', 'quick-build')
}
const onCopy = () => {
  message.success('复制成功')
}

const resultData = ref<Obj<any>[]>([])
const resultColumns = ref<Obj<any>[]>([])
const onRun = () => {
  activeKey.value = 'result'
  api.run(formData.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      resultData.value = data
      resultColumns.value = Object.keys(data[0]).map((key) => {
        return {
          title: key,
          key,
          dataIndex: key,
          ellipsis: true,
          width: 200
        }
      })
    }
  })
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  logParams.value.pageNumber = current!
  logParams.value.pageSize = pageSize!
  getLogList()
}
const onChangeTable = (activeKey: string) => {
  if (activeKey === 'history') {
    getLogList()
  }
}
const logParams = ref({
  keyword: formData.value.datasourceId,
  pageSize: 10,
  pageNumber: 1
})
const logData = ref<LowCodeDatasetLog[]>([])
const logTotal = ref(0)
const logColumns = ref([
  {
    title: '执行sql',
    key: 'execSql',
    dataIndex: 'execSql',
    ellipsis: true
  },
  {
    title: '耗时',
    key: 'executionTime',
    dataIndex: 'executionTime'
  },
  {
    title: '执行结果',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    wdith: '100px'
  }
])
const logSchema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      style: {
        width: '100px'
      }
    }
  },
  properties: {
    execSql: {
      type: 'string',
      label: '执行语句',
      component: {
        name: 'code-editor'
      }
    },
    status: {
      type: 'select',
      label: '执行结果',
      component: {
        dataSource: [
          {
            label: '成功',
            value: '1'
          },
          {
            label: '失败',
            value: '0'
          }
        ]
      }
    },
    errMsg: {
      type: 'textarea',
      label: '错误日志'
    }
  }
})
const getLogList = () => {
  logParams.value.keyword = formData.value.datasourceId
  api.getLogList(logParams.value).then((res) => {
    const { code, data, msg } = res

    if (code == 200) {
      logData.value = data.data
      logTotal.value = data.total
    }
  })
}
const logOpen = ref(false)
const logDetail = ref<Partial<LowCodeDatasetLog>>({})
const onOpenLogDetail = (record: LowCodeDatasetLog) => {
  ;(logOpen.value = true), (logDetail.value = record)
}
const activeKey = ref('result')
const onOpenParamsModal = () => {
  paramsModal.value = true
}
const paramsColumns = ref([
  {
    title: '参数名',
    key: 'paramsName',
    dataIndex: 'paramsName'
  },
  {
    title: '参数类型',
    key: 'paramsType',
    dataIndex: 'paramsType'
  },
  {
    title: '参数默认值',
    key: 'paramsDefaultValue',
    dataIndex: 'paramsDefaultValue'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
])
const onAddParams = () => {
  let id = uuid()
  formData.value.paramsConfig.push({
    id,
    paramsDefaultValue: '',
    paramsType: 'string',
    paramsName: ''
  })
}
const onRemoveParams = (record: DatasetParamsConfig) => {
  let idx = formData.value.paramsConfig.findIndex((e) => e.id == record.id)
  formData.value.paramsConfig.splice(idx, 1)
}
</script>
<style scoped lang="scss">
.dataset-design {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .dataset-name {
    &:hover {
      background-color: #e0f7fa;
    }
  }
  .container {
    height: calc(100vh - 80px);
    display: flex;
    padding: 10px 10px 0;

    .left-part {
      width: 240px;
      margin-right: 10px;
      padding: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      .search-tree {
        width: 100%;
        height: calc(100% - 10px);
        background-color: #fff;
      }
    }
    .right-part {
      flex: 1;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      padding: 10px;

      height: calc(100% - 20px);
      .tools-area {
        margin-bottom: $gap;
      }
      .result {
        width: auto;
        overflow: hidden;
        max-width: 1620px;
      }
    }
  }
}
</style>
;
