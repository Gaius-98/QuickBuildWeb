<template>
  <div class="config-array">
    <a-tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      @edit="onEdit"
      class="config-array-tab"
      size="small"
    >
      <a-tab-pane
        v-for="(pane, idx) in data"
        :key="idx + 1"
        :tab="`${title}${idx + 1}`"
        :closable="closable"
      >
        <config-form :schema="schema" v-model:data="data[idx]"> </config-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
import type { ConfigSchema } from '@/model'
import ConfigForm from '../ConfigForm/ConfigForm.vue'

interface Props {
  title: string
  closable: boolean
  schema: ConfigSchema
  data: Record<string, any>[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  closable: true,
  schema: () => ({})
})
const { title, closable, data } = toRefs(props)
const activeKey = ref(0)

const add = () => {
  activeKey.value = data.value.length || 0
  data.value.push({})
}

const remove = (targetKey: number) => {
  let lastIndex = 0
  data.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1
    }
  })
  data.value = data.value.filter((pane) => pane.key !== targetKey)
  if (data.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = data.value[lastIndex].key
    } else {
      activeKey.value = data.value[0].key
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
