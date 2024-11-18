<template>
  <a-tabs v-model:activeKey="activeKey" size="small">
    <a-tab-pane key="item" tab="控件配置">
      <schema-form
        v-if="curControlCfg.id"
        :schema="schema"
        :formData="curControlCfg"
        size="small"
        :key="curControlCfg.id"
      >
      </schema-form>
      <div v-else>
        <a-empty />
      </div>
    </a-tab-pane>
    <a-tab-pane key="form" tab="表单配置">
      <schema-form :schema="formSchema" :formData="formConfig" size="small"> </schema-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema, SchemaProp } from '@/model'
import { ref, watch } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import ControlSchema from '../utils/ControlSchema'
import { cloneDeep } from 'lodash-es'
import type { SchemaItemChangeEventData } from '@/model'
const formStore = useFormDesignStore()
const { curControlCfg, formConfig } = storeToRefs(formStore)
const schema = ref<SchemaProp>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  properties: {}
})
const formSchema = ref<SchemaProp>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  properties: {
    labelAlign: {
      label: '对齐方式',
      type: 'radio',
      component: {
        dataSource: [
          {
            label: '左对齐',
            value: 'left'
          },
          {
            label: '右对齐',
            value: 'right'
          }
        ]
      }
    },
    layout: {
      label: '布局方式',
      type: 'radio',
      component: {
        dataSource: [
          {
            label: '响应式',
            value: 'resLayout'
          },
          {
            label: '固定',
            value: 'fixedLayout'
          }
        ],
        onChange({ field, formData, value }: SchemaItemChangeEventData) {
          if (value == 'fixedLayout') {
            Reflect.deleteProperty(formData.labelCol, 'span')
            Reflect.deleteProperty(formData.labelCol, 'offset')
          } else {
            Reflect.deleteProperty(formData.labelCol, 'style')
          }
        }
      }
    },
    'labelCol.span': {
      label: '标签宽度',
      type: 'number',
      show: "'${formData.layout}' == 'resLayout'"
    },
    'labelCol.offset': {
      label: '偏移量',
      type: 'number',
      show: "'${formData.layout}' == 'resLayout'"
    },
    'labelCol.style.width': {
      label: '宽度',
      type: 'string',
      show: "'${formData.layout}' == 'fixedLayout'",
      tooltip: '单位为百分比或px,如: 100% 或 100px'
    }
  }
})
const activeKey = ref('item')
watch(
  () => curControlCfg.value.type,
  () => {
    if (curControlCfg.value.type) {
      let cfg = ControlSchema.find((e) => e.type === curControlCfg.value.type)
      if (cfg) {
        schema.value.properties = cloneDeep(cfg.properties)
      }
    }
  },
  {
    immediate: true
  }
)
</script>
<style scoped lang="scss"></style>
