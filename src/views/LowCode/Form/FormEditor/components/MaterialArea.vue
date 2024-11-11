<template>
  <div class="material-area">
    <div class="material-layout-area">
      <div class="title">布局组件</div>
      <div class="content">
        <a-button
          type="dashed"
          v-for="item in materials.layoutMaterials"
          :key="item.value"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.value"
        >
          {{ item.label }}
        </a-button>
      </div>
    </div>
    <div class="material-data-area">
      <div class="title">基础组件</div>
      <div class="content">
        <a-button
          type="dashed"
          v-for="item in materials.dataMaterials"
          :key="item.value"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.value"
        >
          {{ item.label }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const materials = ref({
  layoutMaterials: [
    {
      label: '栅格',
      value: 'grid'
    },
    {
      label: '卡片',
      value: 'card'
    },
    {
      label: '分割线',
      value: 'divider'
    },
    {
      label: '折叠框',
      value: 'collapse'
    }
  ],
  dataMaterials: [
    {
      label: '输入框',
      value: 'input'
    },
    {
      label: '选择器',
      value: 'select'
    },
    {
      label: '日期选择器',
      value: 'date'
    },
    {
      label: '数字输入框',
      value: 'number'
    },
    {
      label: '开关',
      value: 'switch'
    },
    {
      label: '单选框',
      value: 'radio'
    },
    {
      label: '多选框',
      value: 'checkbox'
    },
    {
      label: '文本域',
      value: 'textarea'
    }
  ]
})
const onDrag = (e: DragEvent) => {
  const target = e.target as HTMLElement
  e.dataTransfer?.setData('material', target.dataset.material!)
}
</script>
<style scoped lang="scss">
.material-area {
  display: flex;
  flex-direction: column;
  .material-layout-area,
  .material-data-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
}
</style>
