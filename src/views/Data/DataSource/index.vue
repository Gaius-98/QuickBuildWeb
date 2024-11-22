<template>
  <div class="container">
    <div class="search-tree">
      <div class="tree-top">
        <a-input-search
          v-model:value="searchValue"
          style="margin-bottom: 8px; width: 170px"
          placeholder="请输入数据源名称"
          @search="getTree"
        />
        <a-button
          :icon="h(PlusOutlined)"
          @click="onOpenDataSourceModal('add')"
          v-has-perm="'lowcode:datasource:add'"
        >
        </a-button>
      </div>

      <a-tree
        v-model:selectedKeys="selectKeys"
        :tree-data="treeData"
        selectable
        :fieldNames="{
          title: 'datasourceName',
          key: 'id',
          children: 'children'
        }"
        style="height: calc(100% - 30px); overflow-y: auto"
        @select="getList"
      >
        <template #title="item">
          <div style="width: 160px; display: flex; justify-content: space-between">
            <span>
              <span v-if="item.dbType === 'mysql'" class="iconfont icon-Mysql"></span>
              {{ item.datasourceName }}</span
            >
            <a-dropdown :trigger="['click']">
              <EllipsisOutlined style="transform: rotate(90deg)" />
              <template #overlay>
                <a-menu @click="({ key }: any) => onContextMenuClick(item.id, key)">
                  <a-menu-item key="view" v-has-perm="'lowcode:datasource:detail'"
                    >查看</a-menu-item
                  >
                  <a-menu-item key="edit" v-has-perm="'lowcode:datasource:update'"
                    >编辑</a-menu-item
                  >
                  <a-menu-item key="remove" v-has-perm="'lowcode:datasource:remove'"
                    >删除</a-menu-item
                  >
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </template>
      </a-tree>
    </div>
    <div class="datasource">
      <a-card>
        <a-table
          :loading="loading"
          :columns="columns"
          :data-source="tableData"
          :scroll="{ y: 740 }"
          :pagination="false"
          rowKey="tableName"
          class="ant-table-striped"
          @expand="onExpand"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key == 'action'">
              <a-button type="link" @click="onAddDataSet(record.tableName)">创建数据集</a-button>
            </template>
          </template>
          <template #expandedRowRender="{ record }">
            <a-card>
              <a-table
                :loading="record.loading"
                class="ant-table-striped"
                :columns="fieldColumns"
                :pagination="false"
                :data-source="record.fieldList"
                :row-class-name="
                  (_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)
                "
                style="margin: 5px"
              >
              </a-table>
            </a-card>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>

  <a-modal :title="modalTitle" v-model:open="modalOpen" @ok="onConfirm" @cancel="resetForm">
    <a-form
      :model="formData"
      :label-col="{ span: 8 }"
      ref="modalFormRef"
      :disabled="modalSourceType === 'view'"
    >
      <a-form-item label="创建源类型" required prop="sourceType">
        <a-select
          disabled
          v-model:value="formData.sourceType"
          :options="[
            {
              label: '数据库',
              value: 'db'
            }
          ]"
        >
        </a-select>
      </a-form-item>
      <a-form-item label="数据库类型" required prop="dbType">
        <a-select
          v-model:value="formData.dbType"
          :options="[
            {
              label: 'mysql',
              value: 'mysql'
            }
          ]"
        >
        </a-select>
      </a-form-item>
      <a-form-item label="数据源名称" required prop="datasourceName">
        <a-input v-model:value="formData.datasourceName"></a-input>
      </a-form-item>
      <a-form-item label="数据库地址" required prop="dbHost">
        <a-input v-model:value="formData.dbHost"></a-input>
      </a-form-item>
      <a-form-item label="端口" required prop="dbPort">
        <a-input v-model:value="formData.dbPort"></a-input>
      </a-form-item>
      <a-form-item label="数据库名称" required prop="dbName">
        <a-input v-model:value="formData.dbName"></a-input>
      </a-form-item>
      <a-form-item label="用户名" required prop="dbUsername">
        <a-input v-model:value="formData.dbUsername"></a-input>
      </a-form-item>
      <a-form-item label="密码" required prop="dbPwd">
        <a-input-password v-model:value="formData.dbPwd"></a-input-password>
      </a-form-item>
    </a-form>
    <template #footer>
      <div v-if="modalSourceType != 'view'">
        <a-button @click="testConnect" v-has-perm="'lowcode:datasource:connection'"
          >测试连接</a-button
        >
        <a-button @click="resetForm">取消</a-button>
        <a-button type="primary" :loading="loading" @click="onConfirm">确定</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed, defineComponent, h } from 'vue'
import { message, type FormInstance, type PaginationProps, Modal } from 'ant-design-vue'
import type { DataSourceTable, LowCodeDataSource, SystemDictTypeItem } from '@/model'
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
import api from './api'
import { useRouter } from 'vue-router'
const router = useRouter()
const treeData = ref<LowCodeDataSource[]>([])
const tableData = ref<DataSourceTable[]>([])
const columns = ref([
  {
    title: '表名称',
    key: 'tableName',
    dataIndex: 'tableName',
    width: '300px'
  },
  {
    title: '表注释',
    key: 'tableComment',
    dataIndex: 'tableComment',
    width: '300px'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    width: '250px'
  }
])
const loading = ref(false)

const searchValue = ref('')
const getTree = () => {
  api.getList(searchValue.value).then((res) => {
    const { code, data } = res
    loading.value = false
    if (code == 200) {
      treeData.value = data
    }
  })
}
const getList = () => {
  loading.value = true
  api.getTableInfo(selectKeys.value[0]).then((res) => {
    loading.value = false
    const { code, data, msg } = res
    if (code == 200) {
      tableData.value = data
    }
  })
}

const selectKeys = ref([])

const onContextMenuClick = (treeKey: string, command: string) => {
  if (command == 'view') {
    onOpenDataSourceModal(command, treeKey)
  } else if (command == 'edit') {
    onOpenDataSourceModal(command, treeKey)
  } else if (command == 'remove') {
    Modal.confirm({
      title: '删除数据源',
      content: '确定要删除吗?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        api.remove(treeKey).then((res) => {
          const { code, data, msg } = res
          if (code == 200) {
            message.success('删除成功')
            getList()
          }
        })
      }
    })
  }
}
const modalSourceType = ref<'add' | 'edit' | 'view'>('add')
const modalTitle = computed(() => {
  let title = '新增数据源'
  switch (modalSourceType.value) {
    case 'add':
      title = '新增数据源'
      break
    case 'edit':
      title = '编辑数据源'
      break
    case 'view':
      title = '查看数据源'
      break
    default:
      break
  }
  return title
})
const modalOpen = ref(false)
const modalFormRef = ref()
const formData = ref<LowCodeDataSource>({
  datasourceName: '',
  dbHost: '',
  dbName: '',
  dbPort: 3306,
  dbPwd: '',
  dbType: 'mysql',
  dbUsername: '',
  sourceType: 'db',
  status: '',
  remark: ''
})
const onConfirm = () => {
  modalFormRef.value?.validate().then(() => {
    if (modalSourceType.value == 'add') {
      api.add(formData.value).then((res) => {
        const { code, data, msg } = res

        if (code == 200) {
          message.success('新增成功')
        }
        getTree()
        modalOpen.value = false
      })
    } else if (modalSourceType.value == 'edit') {
      api.update(formData.value).then((res) => {
        const { code, data, msg } = res
        if (code == 200) {
          message.success('编辑成功')
        }
        getTree()
        modalOpen.value = false
      })
    } else {
      modalOpen.value = false
    }
  })
}
const resetForm = () => {
  modalFormRef.value?.resetFields()
}
const onOpenDataSourceModal = (type: 'add' | 'edit' | 'view', id?: string) => {
  modalSourceType.value = type
  if (type === 'add') {
    formData.value = {
      datasourceName: '',
      dbHost: '',
      dbName: '',
      dbPort: 3306,
      dbPwd: '',
      dbType: 'mysql',
      dbUsername: '',
      sourceType: 'db',
      status: '',
      remark: ''
    }
    modalOpen.value = true
  } else {
    api.getDetail(id!).then((res) => {
      const { code, data } = res
      if (code == 200) {
        formData.value = data
        modalOpen.value = true
      }
    })
  }
}
const testConnect = () => {
  modalFormRef.value?.validate().then(() => {
    api.connect(formData.value).then((res) => {
      const { code, msg } = res
      if (code == 200) {
        message.success('连接成功')
      }
    })
  })
}
const fieldColumns = ref([
  {
    title: '字段名称',
    key: 'columnName',
    dataIndex: 'columnName',
    width: '300px'
  },
  {
    title: '字段类型',
    key: 'columnType',
    dataIndex: 'columnType',
    width: '300px'
  },
  {
    title: '字段注释',
    key: 'columnComment',
    dataIndex: 'columnComment',
    width: '300px'
  }
])
const onExpand = (expanded: boolean, record: any) => {
  if (!expanded) return
  record.loading = true
  api.getColumnInfo(selectKeys.value[0], record.tableName).then((res) => {
    record.loading = false
    const { code, data, msg } = res
    if (code == 200) {
      record.fieldList = data
    }
  })
}
onMounted(() => {
  getTree()
})
const onAddDataSet = (tableName: string) => {
  const urlCfg = router.resolve({
    path: '/design/dataset',
    query: {
      type: 'add',
      datasourceId: selectKeys.value[0],
      tableName
    }
  })
  window.open(urlCfg.href, '_blank')
}
</script>
<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  .search-tree {
    width: 240px;
    height: 100%;
    background-color: #fff;
    margin-right: 10px;
    padding: 10px;
    .tree-top {
      display: flex;
      justify-content: space-between;
    }
  }
  .datasource {
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
}
</style>
