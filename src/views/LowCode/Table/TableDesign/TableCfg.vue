<template>
  <schema-form :formData="currentColumn" :schema="schema" ref="schemaRef" size="small">
  </schema-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, watch } from 'vue'
import type { SchemaProp } from '@/model'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
const tableStore = useTableDesignStore()
const { tableCfg, columnFields, currentColumn } = storeToRefs(tableStore)
const schema = ref<SchemaProp>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { style: { width: '80px' } }
  },
  properties: {
    dataIndex: {
      type: 'select',
      label: '字段名',
      component: {
        asyncData: async () => {
          return await new Promise((resolve) => {
            setTimeout(() => {
              resolve(columnFields.value)
            }, 100)
          })
        }
      }
    },
    title: {
      type: 'string',
      label: '列名'
    },
    width: {
      type: 'number',
      label: '列宽'
    },
    align: {
      type: 'radio',
      label: '对齐方式',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'center',
            label: '居中'
          },
          {
            value: 'right',
            label: '右'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    fixed: {
      type: 'radio',
      label: '固定列',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'right',
            label: '右'
          },
          {
            value: 'none',
            label: '不固定'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    type: {
      type: 'select',
      label: '列类型',
      component: {
        dataSource: [
          {
            value: 'link',
            label: '链接'
          },
          {
            value: 'image',
            label: '图片'
          },
          {
            value: 'text',
            label: '文本'
          }
        ]
      }
    }
  }
})
const schemaRef = ref()
watch(
  () => currentColumn.value,
  () => {
    schemaRef.value.refreshOption('dataIndex')
  }
)
</script>
<style scoped lang="scss"></style>
