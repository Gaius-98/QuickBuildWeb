<template>
  <div class="qb-text" :style="styleConfig">{{ attrs.text }}</div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
interface Props {
  attrs: {
    text: string
  }
  styleConfig: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ text: '' }),
  styleConfig: () => ({})
})
const { attrs } = toRefs(props)
</script>
<style scoped lang="scss">
.qb-text {
  width: 100%;
  height: 100%;
}
</style>
