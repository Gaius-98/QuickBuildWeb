<template>
  <div class="container" ref="container" @dragover.prevent.stop @drop.stop="onDrop">
    <grid-layout :list="dgList" class="layout" @item:click="selectItem">
      <template #layout-item="{ item }">
        <component :is="item.component" :attrs="item.props" :style-config="item.style"> </component>
      </template>
    </grid-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted, watch } from 'vue'
import { useDgDesignStore } from '../stores/dgDesign'
import { storeToRefs } from 'pinia'
const COLNUM = 12
const ROWHEIGHT = 8
const dgStore = useDgDesignStore()
const { dgList } = storeToRefs(dgStore)
const { initDgItem, add, selectItem, updateItem } = dgStore

const container = ref()
const clientWidth = ref(0)
const onDrop = (e: DragEvent) => {
  const dgItem = initDgItem(e.dataTransfer!.getData('material'))
  const colStart = e.x / (clientWidth.value / COLNUM)
  const rowStart = e.y / ROWHEIGHT
  dgItem.colStart = Math.floor(colStart)
  dgItem.rowStart = Math.floor(rowStart)
  add(dgItem)
}

window.addEventListener('message', (event) => {
  console.log(event.data)
  if (event.data.type === 'refresh') {
    updateItem(event.data.data)
  }
})
onMounted(() => {
  clientWidth.value = container.value.clientWidth
})
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: rgba($color: #fafafa, $alpha: 0.5);
  .layout {
    height: 100vh;
  }
  :deep(.dg-layout-item) {
    background-color: #fff;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
