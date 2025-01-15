<template>
  <img class="qb-image" style="width: 100%; height: 100%" :src="attrs.src" :style="styleConfig" />
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
interface Props {
  attrs: {
    src: string
  }
  styleConfig: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ src: '' }),
  styleConfig: () => ({})
})
const { attrs, styleConfig } = toRefs(props)
</script>
<style scoped lang="scss">
.qb-image {
  width: 100%;
  height: 100%;
}
</style>
