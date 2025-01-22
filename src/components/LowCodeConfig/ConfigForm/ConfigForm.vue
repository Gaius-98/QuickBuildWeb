<template>
  <a-form :model="data">
    <template v-for="(config, field) in schema" :key="field">
      <a-form-item :label="config.label" :name="field" v-if="config.type !== 'object'">
        <config-array
          v-if="config.type === 'array'"
          :schema="(config as ConfigSchemaArray).items"
          :data="data[field]"
        >
        </config-array>
        <component :is="getComponent(config.type)" v-model:data="data[field]" v-else> </component>
      </a-form-item>
      <config-object
        v-if="config.type === 'object'"
        :schema="(config as ConfigSchemaObject).properties"
        :data="data[field]"
        :title="config.label"
      >
      </config-object>
    </template>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { DynamicConfig } from '@/utils/DynamicConfig'
import type { ConfigSchema, ConfigSchemaType, ConfigSchemaArray, ConfigSchemaObject } from '@/model'
import ConfigArray from '../ConfigArray/ConfigArray.vue'
import ConfigInput from '../ConfigInput/ConfigInput.vue'
import ConfigRadio from '../ConfigRadio/ConfigRadio.vue'
import ConfigSelect from '../ConfigSelect/ConfigSelect.vue'
import ConfigSwitch from '../ConfigSwitch/ConfigSwitch.vue'
import ConfigObject from '../ConfigObject/ConfigObject.vue'

interface Props {
  schema: ConfigSchema
  data: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  schema: () => ({}),
  data: () => ({})
})
const { schema, data } = toRefs(props)
const handleDataValue = () => {
  Object.keys(schema.value).forEach((key) => {
    if (!data.value[key]) {
      data.value[key] = getInitData(schema.value[key].type)
    }else{
      if(typeof data.value[key] !== 'object'){
        data.value[key] = getInitData(schema.value[key].type,data.value[key])
      }
    }
  })
}
const getInitData = (type: string,defaultData?:any) => {
  switch (type) {
    case 'array':
      return []
    case 'object':
      return {}
    case 'input':
    case 'select':
    case 'radio':
      return {
        _value: defaultData||'',
        _mode: 'static',
        _dynExp: ''
      }
    case 'switch':
      return {
        _value:  typeof defaultData == 'boolean' ? defaultData: false,
        _mode: 'static',
        _dynExp: ''
      }
    default:
      return {
        _value: defaultData||'',
        _mode: 'static',
        _dynExp: ''
      }
  }
}
handleDataValue()

const getComponent = (type: keyof typeof ConfigSchemaType) => {
  switch (type) {
    case 'input':
      return ConfigInput
    case 'radio':
      return ConfigRadio
    case 'select':
      return ConfigSelect
    case 'switch':
      return ConfigSwitch
    default:
      return ConfigInput
  }
}
</script>
<style scoped lang="scss"></style>
