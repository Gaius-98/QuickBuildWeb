<template>
  <code-editor :value="JSON.stringify(state, null, 4)" disabled> </code-editor>
  <a-form>
    <a-form-item label="输入框">
      <config-input v-model:data="data.input"></config-input>
    </a-form-item>
    <a-form-item label="选择框">
      <config-select v-model:data="data.select" :options="options"></config-select>
    </a-form-item>
    <a-form-item label="单选框">
      <config-radio v-model:data="data.radio" :options="iconOptions" :icon="true"></config-radio>
    </a-form-item>
    <a-form-item label="数组">
      <config-array v-model:data="data.arr" title="数组" closable></config-array>
    </a-form-item>
  </a-form>
  <a-button @click="onGetConfig">配置项</a-button>
  <a-button @click="onGetData">数据</a-button>
  <component :is="ElButton" type="success">el</component>
  <component :is="ElInput" placeholder="请输入内容" :Value="text"></component>
  <component :is="GridLayout" placeholder="请输入内容" :list="list">
    <template #layout-item="{ item }">
      <div
        :style="{
          backgroundColor: item.extra.color,
          width: '100%',
          height: '100%'
        }"
      >
        {{ item }}
      </div>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineComponent, ref, watchEffect, onMounted } from 'vue'
import type { DynamicConfigData } from '@/model'
import { DynamicConfig } from '@/utils/DynamicConfig'
import ConfigInput from '@/components/LowCodeConfig/ConfigInput/ConfigInput.vue'
import ConfigSelect from '@/components/LowCodeConfig/ConfigSelect/ConfigSelect.vue'
import ConfigRadio from '@/components/LowCodeConfig/ConfigRadio/ConfigRadio.vue'
import { DynamicLoader } from '@/utils/DynamicLoader'
import ConfigArray from '@/components/LowCodeConfig/ConfigArray/ConfigArray.vue'
import type { LibItem, LibTree } from '@/model'
const data = ref<Record<string, DynamicConfigData | any>>({
  input: {
    _value: '',
    _mode: 'static',
    _dynExp: ''
  },
  select: {
    _value: '',
    _mode: 'static',
    _dynExp: ''
  },
  test: '123',
  radio: {},
  arr: {
    _value: [
      {
        title: '测试'
      }
    ],
    _mode: 'static',
    _dynExp: ''
  }
})
const state = ref({
  string: '配置表单',
  arr: [1, 2, 3, 4],
  number: 125654
})
console.log(state)
const options = ref([
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  }
])
const iconOptions = ref([
  {
    label: 'icon-lock1',
    value: '1',
    title: '锁定'
  },
  {
    label: 'icon-unlock1',
    value: '2',
    title: '解锁'
  }
])
const showBtn = ref(false)
const onGetConfig = () => {
  console.log(data.value)
  showBtn.value = true
}
const onGetData = () => {
  const dc = new DynamicConfig(state.value)
  console.log(dc.processObject(data.value))
}
const text = ref('测试')
const componentInfo = ref({
  package: 'ConfigInput',
  version: '',
  exportName: '',
  main: '',
  cdn: '',
  componentName: ''
})
const schema: Array<LibItem | LibTree> = [
  {
    title: 'element',
    package: 'element-plus',
    version: '1.0.2',
    exportName: 'ElementPlus',
    urls: [
      'https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.full.min.js',
      'https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.min.css'
    ],
    children: [
      {
        componentName: 'ElButton',
        exportName: 'ElButton'
      },
      {
        componentName: 'ElInput',
        exportName: 'ElInput'
      }
    ]
  },
  {
    title: '',
    package: 'drag-grid-layout-v3',
    version: '1.0.0',
    exportName: 'drag-grid-layout-v3',
    children: [
      {
        componentName: 'GridLayout',
        exportName: 'GridLayout'
      }
    ],
    urls: [
      'https://cdn.jsdelivr.net/npm/drag-grid-layout-v3@0.0.4/lib/drag-grid-layout-v3.umd.js',
      'https://cdn.jsdelivr.net/npm/drag-grid-layout-v3@0.0.4/lib/style.css'
    ]
  }
]
const ElButton = ref()
const ElInput = ref()
const GridLayout = ref()
const dLoad = new DynamicLoader(schema)
const list = ref([
  {
    key: 1,
    id: 1,
    rowStart: 1,
    colStart: 1,
    rowSpan: 20,
    colSpan: 3,
    extra: {
      color: 'red'
    }
  },
  {
    key: 1,
    id: 2,
    rowStart: 2,
    colStart: 4,
    rowSpan: 40,
    colSpan: 2,
    extra: {
      color: 'blue'
    }
  },
  {
    key: 1,
    id: 3,
    rowStart: 4,
    colStart: 6,
    rowSpan: 10,
    colSpan: 5,
    extra: {
      color: 'pink'
    }
  },
  {
    key: 1,
    id: 4,
    rowStart: 5,
    colStart: 1,
    rowSpan: 30,
    colSpan: 6,
    extra: {
      color: 'green'
    }
  }
])
dLoad.load().then((res) => {
  console.log(res)
  ElButton.value = res['ElButton']
  ElInput.value = res['ElInput']
  GridLayout.value = res['GridLayout']
})
</script>

<style scoped lang="scss"></style>
