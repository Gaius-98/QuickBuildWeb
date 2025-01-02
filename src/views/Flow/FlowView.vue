<template>
  <a-divider>配置区</a-divider>
  <event-flow
    ref="eventFlowRef"
    :data="data"
    :dndList="dndList"
    style="height: 450px"
    @onClickEle="onOpenDraw"
  >
  </event-flow>
  <a-button @click="onRun()" type="primary" style="margin-top: 10px">执行</a-button>
  <a-divider>运行结果</a-divider>

  <div v-if="flowError" style="color: red">错误日志: {{ flowErrorMsg }}</div>
  <code-editor v-model:value="flowResult" height="200" readOnly v-else></code-editor>
  <a-drawer v-model:open="open" title="节点配置" placement="right" @close="onClose()" width="400px">
    <a-form :model="currentData.properties.extraData">
      <template v-if="currentData.properties.nodeType == 'func-node'">
        <a-form-item label="函数">
          <code-editor
            v-model:value="currentData.properties.extraData.code"
            prepend="()=>{"
            append="}"
            theme="light"
          ></code-editor>
        </a-form-item>
      </template>
      <template v-if="currentData.properties.nodeType == 'modal-node'">
        <a-form-item label="弹窗大小">
          <a-radio-group v-model:value="currentData.properties.extraData.size" button-style="solid">
            <a-radio-button value="small">小</a-radio-button>
            <a-radio-button value="middle">中</a-radio-button>
            <a-radio-button value="large">大</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="表单">
          <a-select
            v-model:value="currentData.properties.extraData.formId"
            :options="formListData"
            :fieldNames="{
              label: 'name',
              value: 'id'
            }"
          >
          </a-select>
        </a-form-item>
      </template>
      <template v-if="currentData.properties.nodeType == 'link-node'">
        <a-form-item label="链接地址">
          <a-textarea v-model:value="currentData.properties.extraData.url"></a-textarea>
        </a-form-item>
        <a-form-item label="打开方式">
          <a-radio-group
            v-model:value="currentData.properties.extraData.openType"
            button-style="solid"
          >
            <a-radio-button value="_selef">当前页</a-radio-button>
            <a-radio-button value="_blank">新窗口</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </template>
      <template v-if="currentData.properties.nodeType == 'request-node'">
        <a-input v-model:value="currentData.properties.extraData.url">
          <template #addonBefore>
            <a-select
              v-model:value="currentData.properties.extraData.method"
              :options="methodOptions"
            ></a-select>
          </template>
        </a-input>
        <div>
          <a-tabs>
            <a-tab-pane key="params" tab="params">
              <edit-table
                :columns="paramsColumns"
                v-model="currentData.properties.extraData.params"
              >
              </edit-table>
            </a-tab-pane>
            <a-tab-pane key="headers" tab="headers">
              <edit-table
                :columns="headersColumns"
                v-model="currentData.properties.extraData.headers"
              >
              </edit-table>
            </a-tab-pane>
            <a-tab-pane key="body" tab="body">
              <edit-table :columns="paramsColumns" v-model="currentData.properties.extraData.body">
              </edit-table>
            </a-tab-pane>
          </a-tabs>
        </div>
      </template>
      <template v-if="['start-node', 'end-node'].includes(currentData.properties.nodeType)">
        <a-empty description="起止节点暂无配置项"></a-empty>
      </template>
    </a-form>
  </a-drawer>
</template>

<script lang="ts" setup>
import commonApi from '@/api/common'
import type { FormListItem } from '@/api/common'
import { reactive, toRefs, ref, onMounted } from 'vue'
import type { FlowData } from '@/model'
import EditTable from '@/components/EditTable.vue'
import { FlowExecutor } from '@/utils/FlowExecutor'
interface Props {
  data: {
    nodes: any
    edges: any
  }
}
const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    nodes: [],
    edges: []
  })
})
const { data } = toRefs(props)

const dndList = ref([
  {
    type: 'circle',
    text: '开始',
    label: '开始节点',
    icon: '/src/assets/images/flow/开始.png',
    properties: {
      nodeType: 'start-node',
      extraData: {}
    }
  },
  {
    type: 'circle',
    text: '结束',
    label: '结束节点',
    icon: '/src/assets/images/flow/结束.png',
    properties: {
      nodeType: 'end-node',
      extraData: {}
    }
  },
  {
    type: 'rect',
    text: '处理函数',
    label: '处理函数',
    icon: '/src/assets/images/flow/js函数.png',
    properties: {
      nodeType: 'func-node',
      extraData: {
        code: ''
      }
    }
  },
  {
    type: 'rect',
    text: '打开弹窗',
    label: '弹窗',
    icon: '/src/assets/images/flow/弹窗.png',
    properties: {
      nodeType: 'modal-node',
      extraData: {
        size: 'small',
        formId: ''
      }
    }
  },
  {
    type: 'rect',
    text: '跳转外部链接',
    label: '链接',
    icon: '/src/assets/images/flow/链接.png',
    properties: {
      nodeType: 'link-node',
      extraData: {
        url: '',
        openType: '_blank'
      }
    }
  },
  {
    type: 'diamond',
    text: '请求数据',
    label: '请求数据',
    icon: '/src/assets/images/flow/发起请求.png',
    properties: {
      nodeType: 'request-node',
      extraData: {
        url: '',
        method: 'get',
        params: [],
        headers: [],
        body: []
      }
    }
  }
])
const open = ref(false)
const currentData = ref<any>({})
const eventFlowRef = ref()
const formListData = ref<FormListItem[]>([])
const methodOptions = ref([
  {
    value: 'get',
    label: 'GET'
  },
  {
    value: 'post',
    label: 'POST'
  }
])
const paramsColumns = ref<any[]>([
  {
    title: 'Key',
    dataIndex: 'key',
    type: 'input'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    type: 'input'
  },
  {
    title: '引用变量',
    dataIndex: 'var',
    type: 'input'
  }
])
const headersColumns = ref<any[]>([
  {
    title: 'Key',
    dataIndex: 'key',
    type: 'input'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    type: 'input'
  },
  {
    title: '引用变量',
    dataIndex: 'var',
    type: 'input'
  }
])
const onSave = () => {
  console.log(eventFlowRef.value.getRawData())
}
const flowResult = ref('')
const onOpenDraw = (data: any) => {
  open.value = true
  currentData.value = data.data
}
commonApi.getFormDict().then((res) => {
  const { code, data, msg } = res
  if (code == 200) {
    formListData.value = data
  }
})
const onClose = () => {
  eventFlowRef.value.updateNodeData(currentData.value)
}
const flowError = ref(false)
const flowErrorMsg = ref('')

const getData = () => {
  return eventFlowRef.value.getRawData() as FlowData
}
defineExpose({ getData })
const onRun = async () => {
  flowError.value = false
  flowErrorMsg.value = ''
  try {
    const rawData = eventFlowRef.value.getRawData() as FlowData
    const flowExecutor = new FlowExecutor(rawData)
    await flowExecutor.run()
    flowResult.value = JSON.stringify(flowExecutor.getState(), null, 4)
  } catch (error) {
    flowError.value = true
    flowErrorMsg.value = error as string
    console.log(error)
  }
}
</script>
<style scoped lang="scss">
:deep(.ant-card) {
  .ant-card-body {
    padding: $gap;
  }
}
</style>
