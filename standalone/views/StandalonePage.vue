<template>
  <div class="container" ref="container" @dragover.prevent.stop @drop.stop="onDrop">
    <grid-layout :list="dgList" class="layout">
      <template #layout-item="{ item }">
        <component :is="item.component" :attrs="item.props" :style-config="item.style"></component>
      </template>
    </grid-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import { useDgDesignStore } from '../../src/stores/dgDesign'
import { storeToRefs } from 'pinia'
const COLNUM = 12
const GAP = 8
const dgStore = useDgDesignStore()
const { initDgItem, add } = dgStore
const { dgList } = storeToRefs(dgStore)
const container = ref()
const clientWidth = ref(0)
const onDrop = (e: DragEvent) => {
  const dgItem = initDgItem(e.dataTransfer!.getData('material'))
  console.log(e.dataTransfer!.getData('material'))
  const colStart = e.x / (clientWidth.value / COLNUM)
  const rowStart = e.y / GAP
  dgItem.colStart = Math.floor(colStart)
  dgItem.rowStart = Math.floor(rowStart)
  add(dgItem)
}
onMounted(() => {
  clientWidth.value = container.value.clientWidth
})
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  .layout {
    height: 100vh;
  }
  :deep(.dg-layout-item) {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
