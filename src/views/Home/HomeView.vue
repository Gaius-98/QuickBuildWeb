<template>
  <code-editor :value="JSON.stringify(state, null, 4)" disabled> </code-editor>
  <a-form>
    <a-form-item label="输入框">
      <config-input v-model:data="data.input"></config-input>
    </a-form-item>
    <a-form-item label="选择框">
      <config-select v-model:data="data.select" :options="options"></config-select>
    </a-form-item>
  </a-form>
  <a-button @click="onGetConfig">配置项</a-button>
  <a-button @click="onGetData">数据</a-button>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { DynamicConfigData } from '@/model'
import { DynamicConfig } from '@/utils/DynamicConfig'
import ConfigInput from '@/components/LowCodeConfig/ConfigInput/ConfigInput.vue'
import ConfigSelect from '@/components/LowCodeConfig/ConfigInput/ConfigSelect.vue'
const data = ref<Record<string, DynamicConfigData | any>>({
  input: {
    staticValue: '',
    mode: 'static',
    dynExp: ''
  },
  select: {
    staticValue: '',
    mode: 'static',
    dynExp: ''
  },
  test: '123'
})
const state = ref({
  string: '配置表单',
  arr: [1, 2, 3, 4],
  number: 125654
})
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
const onGetConfig = () => {
  console.log(data.value)
}
const onGetData = () => {
  console.log('----')
  const dc = new DynamicConfig(state.value)
  console.log(dc.processObject(data.value))
}
</script>

<style scoped lang="scss"></style>
