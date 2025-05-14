<template>
  <div class="editor-container" ref="container" @dragover.prevent.stop @drop.stop="onDrop">
    <grid-layout
      :list="dgList"
      class="layout"
      :class="{
        readonly: readonly
      }"
      :readonly="readonly"
      @item:click="selectItem"
    >
      <template #layout-item="{ item }">
        <div class="comp-container" :style="item.style">
          <component
            v-if="item.type && item.type === 'custom'"
            :is="customComp[item.component]"
            v-bind="transformProps(item.props)"
            :key="item.id"
          >
          </component>
          <component
            :is="item.component"
            :style-config="item.style"
            :attrs="transformProps(item.props)"
            :key="item.id"
            v-else
          >
          </component>
        </div>
      </template>
    </grid-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted, watch } from 'vue'
import { useDgDesignStore } from '@/stores/dgDesign'
import { storeToRefs } from 'pinia'
import { DynamicLoader } from '@/utils/DynamicLoader'
const COLNUM = 12
const ROWHEIGHT = 8
const dgStore = useDgDesignStore()
const { dgList } = storeToRefs(dgStore)
const { initDgItem, add, selectItem, transformProps } = dgStore
const readonly = ref(false)
const container = ref()
const clientWidth = ref(0)
const onDrop = (e: DragEvent) => {
  const dgType = e.dataTransfer!.getData('material-type')
  let dgItem
  if (dgType == 'custom') {
    dgItem = {
      name: e.dataTransfer!.getData('material'),
      id: new Date().getTime().toString(),
      label: '自定义组件',
      icon: '',
      type: 'custom',
      component: e.dataTransfer!.getData('material'),
      props: {},
      style: {},
      rowStart: 1,
      colStart: 1,
      rowSpan: 5,
      colSpan: 2
    }
  } else {
    dgItem = initDgItem(e.dataTransfer!.getData('material'))
  }

  const colStart = e.x / (clientWidth.value / COLNUM)
  const rowStart = e.y / ROWHEIGHT
  dgItem.colStart = Math.floor(colStart)
  dgItem.rowStart = Math.floor(rowStart)
  add(dgItem)
}
const customComp = ref<Record<string, any>>({})
// window.addEventListener('message', (event) => {
//   console.log(event, 'event')
//   if (event.data.type === 'refresh') {
//     updateItem(event.data.data)
//   } else if (event.data.type === 'add-custom-comp') {
//     const dyLoader = new DynamicLoader([event.data.data])
//     dyLoader.load().then((res) => {
//       Object.keys(res).forEach((compName) => {
//         customComp.value[compName] = res[compName]
//       })
//       console.log('-----------加载完成!---------')
//     })
//   } else if (event.data.type === 'refresh-var') {
//     setVarPools(event.data.data)
//   } else if (event.data.type === 'get-dg') {
//     sendDgList()
//   } else if (event.data.type === 'refresh-all') {
//     init(event.data.data)
//   } else if (event.data.type === 'preview') {
//     readonly.value = true
//   }
// })
onMounted(() => {
  clientWidth.value = container.value.clientWidth
})
</script>
<style scoped lang="scss">
.editor-container {
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
  .comp-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
