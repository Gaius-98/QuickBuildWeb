<template>
  <div class="dashboard-preview" v-loading.fullscreen="loading">
    <iframe
      width="100%"
      height="100%"
      src="/standalone/standalone.html"
      style="border: 0"
      class="standalone-iframe"
    ></iframe>
  </div>
</template>
<script lang="ts" setup>
import { useDashboardDesignStore } from '@/stores/dashboardDesign'
import { storeToRefs } from 'pinia'
import { onMounted, toRefs } from 'vue'
const dgStore = useDashboardDesignStore()
const { loading } = storeToRefs(dgStore)
const { getContentWindow, getDetail } = dgStore
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
onMounted(() => {
  if (id.value) {
    getDetail(id.value)
  }
})
onMounted(() => {
  // getContentWindow().then((contentWindow) => {
  //   // contentWindow.postMessage({ type: 'preview' })
  // })
})
</script>
<style scoped lang="scss">
.dashboard-preview {
  width: 100%;
  height: 100vh;
}
</style>
