<template>
  <div class="material-area">
    <div class="material-layout-area">
      <div class="title">内置组件</div>
      <div class="content">
        <div
          v-for="item in materials.internalComp"
          :key="item.name"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.name"
          class="material-item"
        >
          <span class="iconfont material-icon" :class="item.icon"> </span>
          <span class="material-label"> {{ item.label }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="material-data-area">
      <div class="title">自定义组件</div>
      <div class="content">
        <div
          type="dashed"
          v-for="item in materials.customComp"
          :key="item.value"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.value"
          class="material-item"
        >
          {{ item.label }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import componentsSchema from '@/assets/components/componentsSchema'
const materials = ref({
  internalComp: componentsSchema,
  customComp: []
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
      .material-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        border: 1px dashed #f0f0f0;
        .material-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .material-label {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
