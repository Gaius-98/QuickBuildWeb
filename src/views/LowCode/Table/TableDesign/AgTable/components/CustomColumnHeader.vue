<template>
  <div
    class="custom-header-item"
    :class="currentColumn.dataIndex == params.column.getColId() ? 'active' : ''"
    style="
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    "
    :style="{
      border:
        currentColumn.dataIndex == params.column.getColId()
          ? '1px dashed #1677ff'
          : '1px solid transparent'
    }"
  >
    <SwapOutlined class="move" style="width: 20px; cursor: move" />
    <div class="custom-header-label" style="flex: 1">{{ params.displayName }}</div>
    <a-popconfirm
      title="确定要删除此列配置吗?"
      ok-text="确定"
      cancel-text="取消"
      @confirm="onPushRemove()"
    >
      <DeleteOutlined class="remove" style="width: 20px" />
    </a-popconfirm>
  </div>
</template>

<script lang="ts" setup>
import { SwapOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { reactive, toRefs, ref } from 'vue'
import agPubSub from '../utils/AgPubSub'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { IHeaderParams } from 'ag-grid-community'
const store = useTableDesignStore()
const { currentColumn } = storeToRefs(store)
interface Props {
  params: IHeaderParams
}
const props = defineProps<Props>()
const { params } = toRefs(props)
const emit = defineEmits(['onRemove'])
const onPushRemove = () => {
  agPubSub.onPublish('removeEvent', params.value)
}
</script>
<style scoped lang="scss"></style>
