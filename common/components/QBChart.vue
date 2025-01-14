<template>
  <div ref="QBChart" class="qb-chart"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted, watch } from 'vue'
import { init } from 'echarts'
import type { EChartsType } from 'echarts'
interface Props {
  attrs: {
    dataset: string
    dimension: string[]
    target: string[]
  }
  style: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ dataset: '', dimension: [], target: [] }),
  style: () => ({})
})
const { attrs, style } = props
const loading = ref(true)
const QBChart = ref()
let evChartInstance: EChartsType
const timer = ref(0)
const lastDataset = ref('')
const chartData = ref()
const getData = async () => {
  lastDataset.value = attrs.dataset
  chartData.value = []
}
const transformOption = () => {
  const { dimension, target } = attrs
  return {
    ...style.value,
    dataset: {
      source: chartData.value,
      dimension: [...dimension, ...target]
    }
  }
}
const initEchart = () => {
  if (lastDataset.value != attrs.dataset) {
    getData().then(() => {
      if (evChartInstance) {
        evChartInstance.clear()
        evChartInstance.setOption(transformOption())
      } else if (QBChart.value) {
        evChartInstance = init(QBChart.value)
        evChartInstance.setOption(transformOption())
      }
    })
  } else {
    if (evChartInstance) {
      evChartInstance.clear()
      evChartInstance.setOption(transformOption())
    } else if (QBChart.value) {
      evChartInstance = init(QBChart.value)
      evChartInstance.setOption(transformOption())
    }
  }

  loading.value = false
}
const rsOb = new ResizeObserver((e) => {
  if (timer.value) clearTimeout(timer.value)
  timer.value = window.setTimeout(() => {
    try {
      evChartInstance.resize()
    } catch (error) {
      console.warn(`chart重新设置大小失败,失败原因：${error}`)
    }
  }, 50)
})
onMounted(() => {
  initEchart()
  rsOb.observe(QBChart.value)
})

watch(
  () => [props.attrs, props.style],
  () => {
    initEchart()
  },
  { deep: true }
)
</script>
<style scoped lang="scss">
.qb-chart {
  width: 100%;
  height: 100%;
}
</style>
