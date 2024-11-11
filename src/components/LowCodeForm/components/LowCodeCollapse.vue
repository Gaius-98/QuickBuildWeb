<template>
  <a-collapse
    v-model:activeKey="activeKey"
    :bordered="schema.controlProp.bordered"
    :ghost="schema.controlProp.ghost"
  >
    <a-collapse-panel
      :key="key"
      :header="schema.controlProp.title"
      :showArrow="schema.controlProp.showArrow"
    >
      <low-code-form-item :schema="schema.controlProp.children" :formData="formData">
      </low-code-form-item>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import type { Obj } from '@/model'
import { v4 as uuid } from 'uuid'
import LowCodeFormItem from './LowCodeFormItem.vue'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
const activeKey = ref('')
const key = ref(uuid())
if (schema.value.controlProp.defaultExpanded.value) {
  activeKey.value = key.value
}
</script>
<style scoped lang="scss"></style>
