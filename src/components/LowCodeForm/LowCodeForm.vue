<template>
  <a-form :model="formData" v-bind="schema.formConfig">
    <low-code-form-item :formData="formData" :schema="schema.formCfgItemList"></low-code-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'

import LowCodeFormItem from './components/LowCodeFormItem.vue'
import type { Obj } from '@/model'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
</script>
<style scoped lang="scss"></style>
