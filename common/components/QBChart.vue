<template>
  <div ref="QBChart" class="qb-chart"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, toRaw, onMounted, watch } from 'vue'
import { init } from 'echarts'
import type { EChartsType } from 'echarts'
import { cloneDeep } from 'lodash-es'
interface Props {
  attrs: {
    dataset: string
    dimension: string[]
    target: string[]
  }
  styleConfig: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  attrs: () => ({ dataset: '', dimension: [], target: [] }),
  styleConfig: () => ({})
})
const { attrs, styleConfig } = props

const loading = ref(true)
const QBChart = ref()
let evChartInstance: EChartsType
const timer = ref(0)
const lastDataset = ref('')
const chartData = ref()
const getData = async () => {
  lastDataset.value = attrs.dataset
  chartData.value = [
    {
      title: 'title1',
      value: 100
    },
    {
      title: 'title2',
      value: 200
    },
    {
      title: 'title3',
      value: 300
    }
  ]
}
const transformOption = () => {
  const { dimension, target } = attrs
  const options = toRaw(styleConfig.option)
  const series = toRaw(styleConfig.series)
  console.log(styleConfig)
  const newSeries: any = []
  target.forEach((item) => {
    newSeries.push(cloneDeep(series))
  })
  options.series = newSeries
  return {
    ...options,
    dataset: {
      source: toRaw(chartData.value),
      dimensions: [...dimension, ...target]
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
  () => [props.attrs, props.styleConfig],
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
