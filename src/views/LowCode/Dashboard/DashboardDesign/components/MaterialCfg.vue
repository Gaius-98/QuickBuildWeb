<template>
  <div class="material-cfg">
    <config-form class="material-cfg-contain" :key="rawData.id" :data="data" :schema="configSchema">
    </config-form>
    <div class="material-cfg-btn">
      <a-button @click="onConfirm">刷新</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ConfigForm from '@/components/LowCodeConfig/ConfigForm/ConfigForm.vue'
import { reactive, toRefs, ref, watch, onMounted, toRaw } from 'vue'
import compCfgSchema from '@/assets/components/compCfgSchema'
import { DynamicConfig } from '@/utils/DynamicConfig'
const data = ref<any>({})
const rawData = ref<any>({})
const configSchema = ref({})
const dc = new DynamicConfig()
window.addEventListener('message', (e) => {
  if (e.data.type === 'select') {
    //@ts-ignore
    rawData.value = e.data.data
    //@ts-ignore
    configSchema.value = compCfgSchema[e.data.data.name]
    data.value = e.data.data.props
  }
})
let contentWindow: null | Window = null
const refreshData = (data: any) => {
  if (contentWindow) {
    contentWindow.postMessage({ type: 'refresh', data })
  } else {
    throw new Error('contentWindow is null')
  }
}
const onConfirm = () => {
  rawData.value['props'] = dc.processObject(data.value)
  localStorage.setItem(`dg-raw-config-${rawData.value.id}`, JSON.stringify(data.value))
  rawData.value.props = dc.processObject(data.value)
  refreshData(toRaw(rawData.value))
}
onMounted(() => {
  contentWindow = (document.querySelector('.standalone-iframe') as HTMLIFrameElement).contentWindow
})
</script>
<style scoped lang="scss">
.material-cfg {
  display: flex;
  flex-direction: column;
  .material-cfg-contain {
    flex: 1;
    overflow-y: auto;
  }
  .material-cfg-btn {
    height: 40px;
    border-top: 1px solid #f0f0f0;
    padding-top: 5px;
  }
}
</style>
