<template>
  <div
    class="custom-header-item add-column"
    style="
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    "
    @click="onAddColumn()"
  >
    <div class="custom-header-label" style="flex: 1">
      <PlusOutlined /> 新增列
      <a-tooltip>
        <template #title>用于新增列配置</template>
        <QuestionCircleTwoTone />
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined, QuestionCircleTwoTone } from '@ant-design/icons-vue'
import { reactive, toRefs, ref } from 'vue'
import { useTableDesignStore } from '@/stores/tableDesign'
const store = useTableDesignStore()
const { onAddColumn } = store
</script>
<style scoped lang="scss"></style>
