<template>
  <div class="custom-opt-cell">
    <div class="btn" v-for="btn in rowBtnList" :key="btn.id">
      <a @click="onClickRowBtn(btn)">
        {{ btn.name }}
      </a>
      <a-popconfirm
        title="确定要删除此按钮的配置吗?"
        ok-text="确定"
        cancel-text="取消"
        @confirm="onRemoveBtn(btn.id!)"
      >
        <CloseCircleOutlined class="remove-btn" />
      </a-popconfirm>
    </div>
    <PlusOutlined style="cursor: pointer" @click="onAddRowBtn()" />
  </div>
</template>

<script lang="ts" setup>
import { CloseCircleOutlined } from '@ant-design/icons-vue'
import { computed } from 'vue'
import type { LCTableInteractionCfg } from '@/model'
import { PlusOutlined } from '@ant-design/icons-vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import agPubSub from '../utils/AgPubSub'
const store = useTableDesignStore()
const { tableCfg } = storeToRefs(store)
const rowBtnList = computed(() => tableCfg.value.action?.filter((e) => e.position == 'row'))

const { onAddBtn, onRemoveBtn } = store
const onClickRowBtn = (data?: Partial<LCTableInteractionCfg>) => {
  agPubSub.onPublish('open-btn-modal', data)
}
const onAddRowBtn = () => {
  onAddBtn('row')
}
</script>
<style scoped lang="scss"></style>
