<template>
  <button @click="onclick()">查看数据</button>
  <event-flow :data="data" style="width: 100%; height: 500px" ref="flow"></event-flow>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { SchemaProp } from '@/model'
import EventFlow from '@/components/EventFlow/EventFlow.vue'
import CodeEditor from './../../components/CodeEditor.vue'
const flow = ref()
const data = ref({
  nodes: [
    {
      id: '1',
      type: 'rect',
      x: 100,
      y: 100,
      test: {
        a: 1
      },
      properties: {
        test: '1'
      }
    },
    {
      id: '2',
      type: 'circle',
      x: 300,
      y: 200
    }
  ],
  edges: [
    {
      sourceNodeId: '1',
      targetNodeId: '2',
      type: 'polyline'
    }
  ]
})
const validatePass2 = async (_rule: any, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value == '1') {
    return Promise.reject("Two inputs don't match!")
  } else {
    return Promise.resolve()
  }
}

const form = ref()
const schema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      span: 2
    }
  },
  properties: {
    field: {
      type: 'string',
      label: '字段名'
    },
    test: {
      type: 'string',
      label: '测试',
      tooltip: '字段名等于test时不显示此项',
      show: "'${formData.field}' != 'test'",
      rules: [
        {
          validator: validatePass2,
          trigger: 'change'
        }
      ]
    },
    asyncData: {
      label: '异步加载数据',
      type: 'select',
      component: {
        dataSource: [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          }
        ]
      }
    }
  }
})
const scheamStr = ref('')
scheamStr.value = JSON.stringify(schema.value, null, 4)
const errmsg = ref('')
watchEffect(() => {
  try {
    schema.value = JSON.parse(scheamStr.value)
  } catch (error) {
    errmsg.value = JSON.stringify(error)
  }
})
const formData = ref({
  field: '1',
  test: '测试',
  asyncData: 1
})
const onclick = () => {
  console.log(flow.value.getRawData())
}
</script>

<style scoped lang="scss"></style>
