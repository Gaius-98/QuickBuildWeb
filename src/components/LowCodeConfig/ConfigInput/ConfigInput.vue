<template>
  <a-input-group :size="size" :compact="compact">
    <a-input
      :value="isSelected ? data._dynExp : data._value"
      @change="onChangeValue"
      style="width: calc(100% - 35px)"
      :prefix="isSelected ? '{' : ''"
      :suffix="isSelected ? '}' : ''"
      v-bind="$attrs"
    >
    </a-input>
    <a-button
      :title="isSelected ? `绑定中:${data._dynExp}` : '变量绑定'"
      :type="isSelected ? 'primary' : ''"
      @click="onToggleMode()"
    >
      <template #icon>
        <div class="iconfont icon-brackets-curly"></div>
      </template>
    </a-button>
  </a-input-group>
</template>

<script lang="ts" setup name="ConfigInput">
import { reactive, toRefs, ref, computed } from 'vue'
interface Props {
  compact: boolean
  size: 'large' | 'default' | 'small'
}
interface DataProps {
  _value: string
  _mode: 'static' | 'dynamic'
  _dynExp: string
}
const data = defineModel<DataProps>('data', {
  required: true,
  default: {
    _value: '',
    _mode: 'static',
    _dynExp: ''
  }
})
const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  compact: true
})
const { size, compact } = toRefs(props)
const isSelected = computed(() => {
  return data.value._mode === 'dynamic'
})
const onToggleMode = () => {
  data.value._mode = data.value._mode === 'dynamic' ? 'static' : 'dynamic'
}
const onChangeValue = (e: InputEvent) => {
  if (data.value._mode === 'dynamic') {
    data.value._dynExp = (e.target as HTMLInputElement).value
  } else {
    data.value._value = (e.target as HTMLInputElement).value
  }
}
</script>
<style scoped lang="scss"></style>
