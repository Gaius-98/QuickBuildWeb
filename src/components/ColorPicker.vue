<template>
  <input
    type="color"
    :value="value"
    @change="onChangeColor"
    class="gaius-color-picker"
    :class="[size]"
  />
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
interface Props {
  size: string
}
const props = withDefaults(defineProps<Props>(), {
  size: 'middle'
})
const { size } = toRefs(props)
const value = defineModel('value')
const emits = defineEmits(['change'])
const onChangeColor = (ev: Event) => {
  value.value = (ev.target as HTMLInputElement).value
  emits('change', (ev.target as HTMLInputElement).value)
}
</script>
<style scoped lang="scss">
.gaius-color-picker {
  padding: 0;
  block-size: 32px;
  width: 30px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  &.small {
    width: 25px;
    block-size: 27px;
  }
  &.large {
    width: 40px;
    block-size: 40px;
  }
}
</style>
