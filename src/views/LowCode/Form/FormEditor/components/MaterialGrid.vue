<template>
  <a-row :gutter="gutter">
    <a-col class="gutter-col" :span="colSpan" :key="index" v-for="(item, index) in children">
      <material-view v-model="children[index]" :key="index" />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import MaterialView from './MaterialView.vue'
import { reactive, toRefs, ref, computed, type ModelRef, watch } from 'vue'
interface Props {
  gutter: number
  colNumber: number
}
const props = defineProps<Props>()
const { gutter, colNumber } = toRefs(props)
const children = defineModel<any[]>('children', { required: true })
const colSpan = computed(() => {
  return 24 / colNumber.value
})
watch(
  () => colNumber.value,
  () => {
    if (children.value) {
      if (children.value.length > colNumber.value) {
        children.value = children.value.slice(0, colNumber.value)
      } else {
        children.value = children.value.concat(
          Array.from({ length: colNumber.value - children.value.length }).map(() => [])
        )
      }
    } else {
      children.value = Array.from({ length: colNumber.value }).map(() => [])
    }
  },
  {
    immediate: true
  }
)
</script>
<style scoped lang="scss">
.gutter-col {
  min-height: 40px;
  border: 1px dashed;
}
.gutter-col + .gutter-col {
  border-left: none;
}
</style>
