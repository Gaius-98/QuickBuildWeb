<template>
  <div class="dataset">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="datasetParamsForm" layout="inline" @finish="onSearch">
        <a-form-item label="数据集名称" name="keyword">
          <a-input v-model:value="datasetParamsForm.keyword"> </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools">
        <a-button type="primary" @click="onAddDataset()" v-has-perm="'lowcode:dataset:add'"
          >新增</a-button
        >
      </div>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :scroll="{ y: 600 }"
        @change="onChangePagination"
        :pagination="{
          current: datasetParamsForm.pageNumber,
          total: total,
          showSizeChanger: true,
          pageSize: datasetParamsForm.pageSize
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'datasourceId'">
            <div>
              {{ getSourceName(record.datasourceId) }}
            </div>
          </template>

          <template v-if="column.key == 'status'">
            <a-tag color="#87d068" v-if="record.status == '1'">启用</a-tag>
            <a-tag color="#f50" v-else>停用</a-tag>
          </template>
          <template v-if="column.key == 'action'">
            <a-button
              type="link"
              @click="onOpenEditDataset(record)"
              v-has-perm="'lowcode:dataset:update'"
              >编辑</a-button
            >
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeleteDateset(record)"
            >
              <a-button type="link" danger v-has-perm="'lowcode:dataset:remove'">删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api'
import datasourceApi from '../DataSource/api'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { PageParams, LowCodeDataset, LowCodeDataSource } from '@/model'
import { useRouter } from 'vue-router'
const router = useRouter()
const datasetParamsForm = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 20
})
const tableData = ref<LowCodeDataset[]>([])
const columns = ref([
  {
    title: '数据集名称',
    key: 'datasetName',
    dataIndex: 'datasetName'
  },
  {
    title: '关联数据源',
    key: 'datasourceId',
    dataIndex: 'datasourceId'
  },

  {
    title: '状态',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark'
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    width: '250px'
  }
])
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()

  getList()
}
const total = ref(0)
const onSearch = () => {
  datasetParamsForm.pageNumber = 1
  datasetParamsForm.pageSize = 20
  getList()
}

const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  datasetParamsForm.pageNumber = current!
  datasetParamsForm.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(datasetParamsForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const sourceList = ref<LowCodeDataSource[]>([])
const getSourceName = (id: string) => {
  return sourceList.value.find((e) => e.id === id)?.datasourceName
}
const onDeleteDateset = async (record: LowCodeDataSource) => {
  const { code, msg, data } = await api.remove(record.id!)
  if (code == 200) {
    message.success(data)
    getList()
  }
}
const onOpenEditDataset = async (record: LowCodeDataSource) => {
  const { id } = record
  const type = 'edit'
  const urlCfg = router.resolve({
    path: '/design/dataset',
    query: {
      type,
      id
    }
  })
  window.open(urlCfg.href, '_blank')
}
onMounted(() => {
  getList()
  datasourceApi.getList('').then((res) => {
    const { code, data, msg } = res

    if (code == 200) {
      sourceList.value = data
    }
  })
})
const onAddDataset = () => {
  const urlCfg = router.resolve({
    path: '/design/dataset',
    query: {
      type: 'add'
    }
  })
  window.open(urlCfg.href, '_blank')
}
</script>
<style scoped lang="scss">
.dataset {
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
