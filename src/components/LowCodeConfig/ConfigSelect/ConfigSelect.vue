<template>
  <div class="config-select">
    <a-select
      v-if="!isSelected"
      style="width: calc(100% - 35px)"
      v-bind="$attrs"
      v-model:value="data.staticValue"
    >
    </a-select>
    <a-input
      v-else
      v-model:value="data.dynExp"
      style="width: calc(100% - 35px)"
      prefix="{"
      suffix="}"
    >
    </a-input>
    <a-button
      :title="isSelected ? `绑定中:${data.dynExp}` : '变量绑定'"
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
  staticValue: string
  mode: 'static' | 'dynamic'
  dynExp: string
}
const data = defineModel<DataProps>('data', {
  required: true
})
const isSelected = computed(() => {
  return data.value.mode === 'dynamic'
})
const onToggleMode = () => {
  data.value.mode = data.value.mode === 'dynamic' ? 'static' : 'dynamic'
}
</script>
<style scoped lang="scss">
.config-select {
  display: flex;
  align-items: center;
}
</style>
