<template>
  <div class="config-switch">
    <a-switch v-if="!isSelected" v-bind="$attrs" v-model:checked="data._value"></a-switch>
    <a-input
      v-else
      v-model:value="data._dynExp"
      style="width: calc(100% - 35px)"
      prefix="{"
      suffix="}"
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
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
interface DataProps {
  _value: boolean
  _mode: 'static' | 'dynamic'
  _dynExp: string
}
const data = defineModel<DataProps>('data', {
  required: true,
  default: {
    __value: false,
    _mode: 'static',
    _dynExp: ''
  }
})
const isSelected = computed(() => {
  return data.value._mode === 'dynamic'
})
const onToggleMode = () => {
  data.value._mode = data.value._mode === 'dynamic' ? 'static' : 'dynamic'
}
</script>
<style scoped lang="scss">
.config-switch {
  display: flex;
  align-items: center;
}
</style>
