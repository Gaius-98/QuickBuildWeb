<template>
  <div class="custom-opt-cell">
    <div class="btn" v-for="btn in rowBtnList" :key="btn.id">
      <a @click="onClickRowBtn('row', btn)">
        {{ btn.name }}
      </a>
      <a-popconfirm
        title="确定要删除此按钮的配置吗?"
        ok-text="确定"
        cancel-text="取消"
        @confirm="onRemoveBtn(btn)"
      >
        <CloseCircleOutlined class="remove-btn" />
      </a-popconfirm>
    </div>
    <PlusOutlined style="cursor: pointer" @click="onClickRowBtn('row')" />
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

const onClickRowBtn = (position: 'row' | 'header', data?: Partial<LCTableInteractionCfg>) => {
  agPubSub.onPublish('action', {
    position,
    data
  })
}
const onRemoveBtn = (btn: Partial<LCTableInteractionCfg>) => {
  agPubSub.onPublish('remove-btn', btn)
}
</script>
<style scoped lang="scss"></style>
