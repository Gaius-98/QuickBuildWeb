<template>
  <a-collapse v-model:activeKey="activeKey" :bordered="bordered" :ghost="ghost">
    <a-collapse-panel :key="key" :header="title" :showArrow="showArrow">
      <MaterialView v-model="children"> </MaterialView>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import MaterialView from './MaterialView.vue'
import { v4 as uuid } from 'uuid'
import { reactive, toRefs, ref } from 'vue'
interface Props {
  bordered: boolean
  ghost: boolean
  title: string
  showArrow: boolean
  defaultExpanded: boolean
  children: any[]
}
const props = defineProps<Props>()
const { title, showArrow, bordered, ghost, defaultExpanded, children } = toRefs(props)
const activeKey = ref('')
const key = ref(uuid())
if (defaultExpanded.value) {
  activeKey.value = key.value
}
</script>
<style scoped lang="scss"></style>
