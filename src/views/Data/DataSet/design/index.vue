<template>
  <div class="dataset-design">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px"
      @back="() => null"
    >
      <template #title>
        <a-input
          v-model:value="formData.datasetName"
          :bordered="false"
          class="dataset-name"
          size="small"
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
          <div class="tree-top">
            <a-select
              v-model:value="formData.datasourceId"
              :options="datasourceList"
              :fieldNames="{ label: 'datasourceName', value: 'id' }"
              style="width: 100%"
              @change="onChangeDatasource()"
            >
            </a-select>
            <a-divider />
          </div>
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
            style="height: calc(100% - 100px); overflow-y: auto"
          >
            <template #title="item">
              <div
                style="width: 160px; display: flex; justify-content: space-between"
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
          <a-button @click="onRun()">运行</a-button>
        </div>
        <div class="sql-area">
          <codemirror
            :style="{ height: '300px' }"
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
                v-if="resultData && resultData.length > 0"
                size="small"
                :scroll="{
                  x: '1200px',
                  y: '300px'
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
                  x: '1200px',
                  y: '300px'
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
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted, computed } from 'vue'
import datasourceApi from '../../DataSource/api'
import { Codemirror } from 'vue-codemirror'
import api from '../api'
import { sql, type SQLConfig } from '@codemirror/lang-sql'
import type {
  DataSourceTable,
  DataSourceTableField,
  LowCodeDataset,
  LowCodeDatasetLog,
  LowCodeDataSource,
  Obj
} from '@/model'
import { message, type PaginationProps } from 'ant-design-vue'
import { InfoCircleOutlined, CopyOutlined } from '@ant-design/icons-vue'
interface Props {
  type: 'edit' | 'add'
  id?: string
  datasourceId?: string
  tableName?: string
}
const tableList = ref<DataSourceTable[]>([])

const extensions = [
  sql({
    tables: [
      {
        label: 'sy'
      }
    ]
  })
]
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
const { type, id, datasourceId, tableName } = toRefs(props)
const onChangeDatasource = () => {
  datasourceApi.getTableInfo(formData.value.datasourceId).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableList.value = data
    }
  })
}
if (datasourceId.value) {
  formData.value.datasourceId = datasourceId.value
  onChangeDatasource()
  formData.value.datasetName = formData.value.datasetName || '未命名'
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
          dataIndex: key
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
    width: '200px',
    ellipsis: true
  },
  {
    title: '耗时',
    key: 'executionTime',
    dataIndex: 'executionTime',
    width: '200px'
  },
  {
    title: '执行结果',
    key: 'status',
    dataIndex: 'status',
    width: '200px'
  }
])
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
const activeKey = ref('result')
</script>
<style scoped lang="scss">
.dataset-design {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .dataset-name {
    &:hover {
      background-color: #ccc;
    }
  }
  .container {
    flex: 1;
    display: flex;

    .left-part {
      flex: 1;
      .search-tree {
        width: 240px;
        height: 100%;
        background-color: #fff;
        margin-right: 10px;
        padding: 10px;
      }
    }
    .right-part {
      flex: 5;
    }
  }
}
</style>
