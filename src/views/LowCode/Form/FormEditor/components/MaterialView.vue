<template>
  <vue-draggable-next
    v-model:list="data"
    class="material-view"
    @dragover.prevent.stop
    @drop.stop="onDrop"
    animation="300"
    :group="{ name: 'form', pull: true, put: true }"
    ghost-class="ghost"
  >
    <div
      v-for="item in data"
      :key="item"
      @click.stop="onSelectControlItem(item.id, data)"
      class="material-item"
      :class="{ active: item.id === curControlCfg.id }"
    >
      <a-form-item
        v-if="item.formItemProp"
        :label="item.formItemProp.label"
        :name="item.formItemProp.name"
      >
        <component
          :is="getComponentNameByType(item.type)"
          v-bind="getComponentProp(item.controlProp, item.type)"
          :key="item.id"
        ></component>
      </a-form-item>
      <component
        v-else
        :is="getComponentNameByType(item.type)"
        v-bind="getComponentProp(item.controlProp, item.type)"
        v-model:children="item.controlProp.children"
        :key="item.id"
      ></component>
      <div class="material-util">
        <div class="icon-btn" @click="copyControlItem" title="复制">
          <CopyFilled />
        </div>
        <div class="icon-btn" @click="removeControlItem(item.id, data)" title="删除">
          <DeleteFilled />
        </div>
      </div>
    </div>
  </vue-draggable-next>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next'
import initFormControl from '../utils/FormUI'
import ControlMappingType from '../utils/ControlMappingType'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/stores/system'
import { CopyFilled, DeleteFilled } from '@ant-design/icons-vue'
import commonApi from '@/api/common'
import { cloneDeep } from 'lodash-es'
const systemStore = useSystemStore()
const { themeCfg } = storeToRefs(systemStore)
const formStore = useFormDesignStore()
const { curControlCfg } = storeToRefs(formStore)
const { onSelectControlItem, copyControlItem, removeControlItem } = formStore
const data = defineModel<any[]>({ required: true })
const getComponentNameByType = (type: string) => {
  return ControlMappingType[type]
}
const getComponentProp = (prop: any, type: string) => {
  const cloneProp = cloneDeep(prop)
  switch (type) {
    case 'radio':
      cloneProp.options = [
        { label: '1', value: '1' },
        { label: '2', value: '2' }
      ]
      break
    case 'checkbox':
      cloneProp.options = [
        { label: '1', value: '1' },
        { label: '2', value: '2' }
      ]
      break
    case 'select':
      cloneProp.options = [
        { label: '1', value: '1' },
        { label: '2', value: '2' }
      ]
      break
    default:
      break
  }
  return cloneProp
}
const onDrop = (e: DragEvent) => {
  if (e.dataTransfer!.getData('material')) {
    const initData = initFormControl(e.dataTransfer!.getData('material'))
    data.value.push(initData)
  }
}
</script>
<style scoped lang="scss">
.material-view {
  height: 100%;
  min-height: 30px;
  .material-item {
    position: relative;
    padding: 5px;
    border-radius: 4px;
    .material-util {
      display: none;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 99;

      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        background-color: #f0f0f0;
        color: v-bind('themeCfg.colorPrimary');
        & + .icon-btn {
          margin-left: 5px;
        }
      }
    }
    &.active {
      border: 1px solid v-bind('themeCfg.colorPrimary');
      & > .material-util {
        display: flex;
      }
    }
  }
  .ghost {
    background-color: v-bind('themeCfg.colorPrimary');
    opacity: 0.3;
  }
}
</style>
