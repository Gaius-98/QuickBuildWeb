<template>
  <div class="config-array">
   <a-collapse >
    <a-collapse-panel :key="colKey" :header="title">
      <config-form :schema="schema" v-model:data="data"> </config-form>
    </a-collapse-panel>
  </a-collapse>
    
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
import type { ConfigSchema } from '@/model'
import ConfigForm from '../ConfigForm/ConfigForm.vue'
import {v4 as uuid} from 'uuid'
interface Props {
  title: string
  field: string
  schema: ConfigSchema
  data: Record<string, any>[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  field:'',  
  schema: () => ({})
})
const { title, field, data } = toRefs(props)
const colKey = uuid()+field.value







</script>
<style scoped lang="scss"></style>