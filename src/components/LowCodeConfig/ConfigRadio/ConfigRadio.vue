<template>
  <div class="config-radio">
    <a-radio-group
      v-if="!isSelected"
      v-bind="$attrs"
      style="width: calc(100% - 35px)"
      v-model:value="data.staticValue"
      button-style="solid"
    >
      <a-radio-button
        v-for="item in options"
        :key="item[fields.value]"
        :title="item[fields.title] || item[fields.label]"
        :value="item[fields.value]"
      >
        <template v-if="icon">
          <div class="iconfont" :class="item.label"></div>
        </template>
        <template v-else>
          {{ item[fields.label] }}
        </template>
      </a-radio-button>
    </a-radio-group>
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
interface Props {
  options: Record<string, string>[]
  fields: {
    label: string
    value: string
    title: string
  }
  icon: boolean
}
const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  fields: () => ({ label: 'label', value: 'value', title: 'title' }),
  icon: false
})
const { options, fields } = toRefs(props)
const isSelected = computed(() => {
  return data.value.mode === 'dynamic'
})
const onToggleMode = () => {
  data.value.mode = data.value.mode === 'dynamic' ? 'static' : 'dynamic'
}
</script>
<style scoped lang="scss">
.config-radio {
  display: flex;
  align-items: center;
}
</style>
