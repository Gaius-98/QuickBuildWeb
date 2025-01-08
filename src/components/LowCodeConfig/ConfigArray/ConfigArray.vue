<template>
  <div class="config-array">
    <a-tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      class="config-array-tab"
      v-if="!isSelected"
    >
      <a-tab-pane
        v-for="(pane, idx) in data._value"
        :key="idx + 1"
        :tab="`${title}${idx + 1}`"
        :closable="closable"
      >
        #TODO 表单渲染组件
      </a-tab-pane>
      <template #rightExtra>
        <a-button
          :title="isSelected ? `绑定中:${data._dynExp}` : '变量绑定'"
          :type="isSelected ? 'primary' : ''"
          @click="onToggleMode()"
        >
          <template #icon>
            <div class="iconfont icon-brackets-curly"></div>
          </template>
        </a-button>
      </template>
    </a-tabs>
    <a-input
      v-if="isSelected"
      v-model:value="data._dynExp"
      style="width: calc(100% - 35px)"
      prefix="{"
      suffix="}"
    >
    </a-input>
    <a-button
      v-if="isSelected"
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
  _value: Record<string, any>[]
  _mode: 'static' | 'dynamic'
  _dynExp: string
}
interface Props {
  title: string
  closable: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  closable: true
})
const { title, closable } = toRefs(props)
const activeKey = ref(0)
const data = defineModel<DataProps>('data', {
  required: true,
  default: {
    _value: [],
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
const newTabIndex = ref(0)
const add = () => {
  activeKey.value = ++newTabIndex.value
  data.value._value.push({})
}

const remove = (targetKey: number) => {
  let lastIndex = 0
  data.value._value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1
    }
  })
  data.value._value = data.value._value.filter((pane) => pane.key !== targetKey)
  if (data.value._value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = data.value._value[lastIndex].key
    } else {
      activeKey.value = data.value._value[0].key
    }
  }
}

const onEdit = (targetKey: number | MouseEvent, action: string) => {
  if (action === 'add') {
    add()
  } else {
    remove(targetKey as number)
  }
}
</script>
<style scoped lang="scss"></style>
