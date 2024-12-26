<template>
  <div class="lowcode-table">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="paramsForm" @finish="getList">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="列表名称" name="keyword">
              <a-input v-model:value="paramsForm.keyword"> </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4" style="text-align: right">
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools">
        <a-button type="primary" @click="onOpenAdd">新增</a-button>
        <a-button @click="onToggleType" type="link" style="float: right"><SwapOutlined /></a-button>
      </div>
      <a-empty v-if="tableData.length === 0" />
      <div v-else>
        <div class="contain" v-if="type == 'visual'">
          <a-card :hoverable="true" v-for="item in tableData" :key="item.id">
            <template #actions>
              <EyeOutlined key="view" title="预览" @click="onOpenPreviewModal(item.id!)" />
              <EditOutlined key="edit" title="编辑" @click="onJumpEdit(item.id!)" />
              <a-popconfirm
                title="确定要删除吗?"
                ok-text="确定"
                cancel-text="取消"
                @confirm="onDelete(item.id!)"
              >
                <DeleteOutlined key="delete" title="删除" />
              </a-popconfirm>
            </template>
            <a-card-meta :title="item.name" :description="item.description"> </a-card-meta>
          </a-card>
        </div>
        <a-table
          v-else
          :columns="columns"
          :data-source="tableData"
          :pagination="false"
          :scroll="{ y: 470 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key == 'id'">
              <span v-copy="record.id">
                {{ record.id }}
                <CopyOutlined style="cursor: pointer" @click="onCopy()" />
              </span>
            </template>
            <template v-if="column.key == 'status'">
              <a-tag color="#87d068" v-if="record.status">启用</a-tag>
              <a-tag color="#f50" v-else>停用</a-tag>
            </template>
            <template v-if="column.key == 'action'">
              <a-button type="link" @click="onOpenPreviewModal(record.id!)">预览</a-button>
              <a-divider type="vertical" />
              <a-button type="link" @click="onJumpEdit(record.id!)">编辑</a-button>
              <a-divider type="vertical" />
              <a-popconfirm
                title="确定要删除吗?"
                ok-text="确定"
                cancel-text="取消"
                @confirm="onDelete(record.id!)"
              >
                <a-button type="link" danger>删除</a-button>
              </a-popconfirm>
            </template>
            <template v-if="column.key == 'img'">
              <a-image :src="record.img" height="100px" width="100%" />
            </template>
          </template>
        </a-table>
      </div>
      <a-pagination
        style="display: flex; justify-content: flex-end"
        v-model:current="paramsForm.pageNumber"
        :total="total"
        show-less-items
        @change="getList()"
      />
    </a-card>
    <a-drawer
      v-model:open="previewShow"
      placement="right"
      title="预览"
      width="1920px"
      height="900px"
      :footer="null"
    >
      <low-code-table-vue :id="currentId" :key="currentId"></low-code-table-vue>
    </a-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, h } from 'vue'
import { EditOutlined, DeleteOutlined, CopyOutlined, EyeOutlined } from '@ant-design/icons-vue'
import api from '../api/table'
import { message, type FormInstance } from 'ant-design-vue'
import type { LowCodeTable, PageParams } from '@/model'
import { useRouter } from 'vue-router'
import { SwapOutlined } from '@ant-design/icons-vue'
import LowCodeTableVue from '@/components/LowCodeTable/LowCodeTable.vue'
const router = useRouter()
const columns = ref([
  {
    title: '列表id',
    key: 'id',
    dataIndex: 'id',
    ellipsis: true
  },
  {
    title: '列表名称',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    width: 100
  },

  {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark',
    ellipsis: true
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
const paramsForm = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10
})
const tableData = ref<LowCodeTable[]>([])
const total = ref(0)
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  getList()
}
const onCopy = () => {
  message.success('复制成功！')
}
const type = ref<'visual' | 'table'>('table')
const onToggleType = () => {
  type.value == 'table' ? (type.value = 'visual') : (type.value = 'table')
}
const getList = () => {
  loading.value = true
  api.getList(paramsForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const onOpenAdd = () => {
  const urlCfg = router.resolve({
    path: '/design/table'
  })
  window.open(urlCfg.href, '_blank')
}
const onJumpEdit = (id: string) => {
  const urlCfg = router.resolve({
    path: '/design/table',
    query: {
      id
    }
  })
  window.open(urlCfg.href, '_blank')
}
const onDelete = (id: string) => {
  api.remove(id).then((res) => {
    const { code } = res
    if (code == 200) {
      getList()
    }
  })
}
const previewShow = ref(false)
const formData = ref({})
const currentId = ref('')
const onOpenPreviewModal = (id: string) => {
  previewShow.value = true
  currentId.value = id
}
onMounted(() => {
  getList()
})
</script>
<style scoped lang="scss">
.lowcode-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: 10px;
  }
  .tools {
    margin-bottom: 5px;
  }
  .contain {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 10px 0;
    .item {
      position: relative;
      width: 100%;
      height: 250px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #c3d1e1;
      padding: 2px;
      .top {
        display: flex;
        background-color: #f2f7ff;
        padding: 2px 5px;
        .title {
          font-weight: 600;
          font-size: 16px;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
