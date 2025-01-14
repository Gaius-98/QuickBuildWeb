<template>
  <div class="qb-iframe">
    <iframe
      :class="preview ? '' : 'no-effect'"
      :src="attrs.src"
      style="width: 100%; height: 100%; border: none"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
interface Props {
  attrs: {
    src: string
  }
  preview: boolean
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ src: '' }),
  preview: false
})
const { attrs, preview } = toRefs(props)
</script>
<style scoped lang="scss">
.qb-iframe {
  width: 100%;
  height: 100%;
}
.no-effect {
  pointer-events: none;
}
</style>
