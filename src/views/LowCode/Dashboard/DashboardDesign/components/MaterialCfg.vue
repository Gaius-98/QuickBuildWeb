<template>
  <div class="material-cfg">
    <config-form class="material-cfg-contain" :key="rawData.id" :data="data" :schema="configSchema">
    </config-form>
    <div class="material-cfg-btn">
      <a-button @click="onRefresh">刷新</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ConfigForm from '@/components/LowCodeConfig/ConfigForm/ConfigForm.vue'
import { reactive, toRefs, ref, watch, onMounted, toRaw } from 'vue'
import compCfgSchema from '@/assets/components/compCfgSchema'
import { useDashboardDesignStore } from '@/stores/dashboardDesign'
import { storeToRefs } from 'pinia'
const dgStore = useDashboardDesignStore()
const { customCompSchema } = storeToRefs(dgStore)
const { getContentWindow } = dgStore
const data = ref<any>({})
const rawData = ref<any>({})
const configSchema = ref({})

window.addEventListener('message', (e) => {
  if (e.data.type === 'select') {
    //@ts-ignore
    rawData.value = e.data.data
    if (rawData.value.type === 'custom') {
      if (customCompSchema.value) {
        //@ts-ignore
        configSchema.value = JSON.parse(customCompSchema.value[rawData.value.component])
      }
    } else {
      //@ts-ignore
      if (typeof compCfgSchema[rawData.value.component] == 'function') {
        //@ts-ignore
        configSchema.value = compCfgSchema[rawData.value.component]([])
      } else {
        //@ts-ignore
        configSchema.value = compCfgSchema[rawData.value.component]
      }
    }

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
const onRefresh = () => {
  refreshData(toRaw(rawData.value))
}
onMounted(() => {
  contentWindow = getContentWindow()
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
