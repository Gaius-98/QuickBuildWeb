<template>
  <a-image style="width: 100%; height: 100%" :src="attrs.src" :style="style" />
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
interface Props {
  attrs: {
    src: string
  }
  style: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ src: '' }),
  style: () => ({})
})
const { attrs, style } = toRefs(props)
</script>
<style scoped lang="scss"></style>
