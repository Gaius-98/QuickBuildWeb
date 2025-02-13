<template>
  <div ref="QBChart" class="qb-chart"></div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, toRaw, onMounted, watch } from 'vue'
import { init } from 'echarts'
import type { EChartsType } from 'echarts'
import { cloneDeep } from 'lodash-es'
import common from '@/api/common'
import type { Obj } from '@/model'

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
const { attrs, styleConfig } = toRefs(props)
const loading = ref(true)
const QBChart = ref()
let evChartInstance: EChartsType
const timer = ref(0)
const lastDataset = ref('')
const chartData = ref<Obj<any>[]>([
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
])
const getData = async () => {
  lastDataset.value = attrs.value.dataset
  const { data, code, msg } = await common.getPreviewByDatasetId(lastDataset.value)
  if (code == 200) {
    chartData.value = data
  } else {
    chartData.value = []
  }
}
const transformOption = () => {
  const { dimension, target } = attrs.value
  const options = toRaw(styleConfig.value.option)
  const series = toRaw(styleConfig.value.series)
  const newSeries: any = []
  target.forEach((item) => {
    newSeries.push(cloneDeep(series))
  })
  options.series = newSeries
  return {
    ...options,
    dataset: {
      source: toRaw(chartData.value) || [],
      dimensions: [...dimension, ...target]
    }
  }
}
const initEchart = () => {
  if (attrs.value.dataset && lastDataset.value != attrs.value.dataset) {
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
  }, 100)
})
onMounted(() => {
  initEchart()
  setTimeout(() => {
    rsOb.observe(QBChart.value)
  }, 100)
})

watch(
  () => [props.styleConfig],
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
