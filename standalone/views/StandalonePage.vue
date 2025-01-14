<template>
  <div class="container" @dragover.prevent.stop @drop.stop="onDrop">
    <grid-layout :list="dgList" class="layout">
      <template #layout-item="{ item }">
        <component :is="item.name" :attrs="item.props"></component>
      </template>
    </grid-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { useDgDesignStore } from '../../src/stores/dgDesign'
import { storeToRefs } from 'pinia'

window.onmessage = (e) => {
  console.log(e, 'message')
}
const dgStore = useDgDesignStore()
const { initDgItem, add } = dgStore
const { dgList } = storeToRefs(dgStore)
const onDrop = (e: DragEvent) => {
  const dgItem = initDgItem(e.dataTransfer!.getData('material'))
  add(dgItem)
  console.log(dgList)
  // if (e.dataTransfer!.getData('material')) {
  // }
}
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
