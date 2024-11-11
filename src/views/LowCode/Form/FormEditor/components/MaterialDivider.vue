<template>
  <a-divider :dashed="dashed" :orientation="orientation" :plain="plain" :type="type">
    {{ title }}
  </a-divider>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
interface Props {
  type: 'horizontal' | 'vertical'
  plain: boolean
  orientation: 'left' | 'right' | 'center'
  dashed: boolean
  title: string
}
const props = defineProps<Props>()
const { title, dashed, orientation, plain, type } = toRefs(props)
</script>
<style scoped lang="scss"></style>
