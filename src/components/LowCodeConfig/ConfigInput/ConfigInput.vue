<template>
  <a-input-group :size="size" :compact="compact">
    <a-input
      :value="isSelected ? data.dynExp : data.staticValue"
      @change="onChangeValue"
      style="width: calc(100% - 35px)"
      :prefix="isSelected ? '{' : ''"
      :suffix="isSelected ? '}' : ''"
    >
    </a-input>
    <a-button
      :title="isSelected ? '使用变量中' : '是否引用变量'"
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
  staticValue: string
  mode: 'static' | 'dynamic'
  dynExp: string
}
const data = defineModel<DataProps>('data', {
  required: true
})
const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  compact: true
})
const { size, compact } = toRefs(props)
const isSelected = computed(() => {
  return data.value.mode === 'dynamic'
})
const onToggleMode = () => {
  data.value.mode = data.value.mode === 'dynamic' ? 'static' : 'dynamic'
}
const onChangeValue = (e: InputEvent) => {
  if (data.value.mode === 'dynamic') {
    data.value.dynExp = (e.target as HTMLInputElement).value
  } else {
    data.value.staticValue = (e.target as HTMLInputElement).value
  }
}
</script>
<style scoped lang="scss"></style>
