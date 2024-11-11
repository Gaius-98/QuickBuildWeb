<template>
  <a-row :gutter="schema.controlProp.gutter">
    <a-col
      class="gutter-col"
      :span="colSpan"
      :key="index"
      v-for="(item, index) in schema.controlProp.children"
    >
      <low-code-form-item :schema="item" :formData="formData" />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
import type { Obj } from '@/model'
import LowCodeFormItem from './LowCodeFormItem.vue'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
const colSpan = computed(() => {
  return 24 / schema.value.controlProp.colNumber
})
</script>
<style scoped lang="scss"></style>
