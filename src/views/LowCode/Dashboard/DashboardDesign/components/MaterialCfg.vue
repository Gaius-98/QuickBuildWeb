<template>
  <div class="material-cfg">
    <a-tabs size="small">
      <a-tab-pane key="prop" tab="属性">
        <a-empty v-if="!curComp.id"></a-empty>
        <config-form
          class="material-cfg-contain"
          :key="curComp.id"
          :data="data"
          :schema="configSchema"
          v-else-if="curComp.component != 'qb-chart'"
        >
        </config-form>
        <a-form v-else-if="curComp.component == 'qb-chart'">
          <a-form-item label="数据集">
            <a-select
              v-model:value="data.dataset"
              :options="datasetOptions"
              @change="onChangeDataset"
            >
            </a-select>
          </a-form-item>
          <a-form-item label="维度">
            <a-select v-model:value="data.dimension" :options="fieldOptions" mode="tags">
            </a-select>
          </a-form-item>
          <a-form-item label="指标">
            <a-select v-model:value="data.target" :options="fieldOptions" mode="tags"> </a-select>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="style" tab="样式">
        <schema-form :schema="styleSchema" size="small" :formData="styleConfig" :key="curComp.id">
        </schema-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useDgDesignStore } from '@/stores/dgDesign'
import ConfigForm from '@/components/LowCodeConfig/ConfigForm/ConfigForm.vue'
import { reactive, toRefs, ref, watch, onMounted, toRaw } from 'vue'
import compCfgSchema from '@/assets/components/compCfgSchema'
import { useDashboardDesignStore } from '@/stores/dashboardDesign'
import { storeToRefs } from 'pinia'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import ChartStyleSchema from '@/assets/components/compCfgSchema/ChartStyleSchema'
import type { SchemaProp } from '@/model'
import StyleSchema from '@/assets/components/compCfgSchema/StyleSchema'
import common, { type DictItem } from '@/api/common'
const dgStore = useDashboardDesignStore()
const { customCompSchema } = storeToRefs(dgStore)
const dgDesignStore = useDgDesignStore()
const { curComp } = storeToRefs(dgDesignStore)
const { updateItem } = dgDesignStore
const data = ref<any>({})
const configSchema = ref({})
const styleConfig = ref({})
const styleSchema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      style: {
        width: '100px'
      }
    }
  },
  properties: StyleSchema
})
const datasetOptions = ref<DictItem[]>([])
common.getDatasetDict().then((res) => {
  const { code, data, msg } = res
  if (code == 200) {
    datasetOptions.value = data
  }
})
const fieldOptions = ref<DictItem[]>([])
const onChangeDataset = () => {
  data.value.dimension = []
  data.value.target = []
  common.getFieldByDatasetId(data.value.dataset).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      fieldOptions.value = data.map((e) => ({
        value: e,
        label: e
      }))
    }
  })
}

watch(
  () => curComp.value.id,
  () => {
    styleSchema.value.properties = StyleSchema
    if (curComp.value?.type === 'custom') {
      if (customCompSchema.value) {
        //@ts-ignore
        configSchema.value = JSON.parse(customCompSchema.value[curComp.value.component])
      }
    } else {
      //@ts-ignore
      //chart图表
      if (curComp.value.component == 'qb-chart') {
        styleSchema.value.properties = ChartStyleSchema
      } else {
        //@ts-ignore
        configSchema.value = compCfgSchema[curComp.value.component]
      }
    }

    data.value = curComp.value.props
    if (curComp.value.component == 'qb-chart') {
      common.getFieldByDatasetId(data.value.dataset).then((res) => {
        const { code, data, msg } = res
        if (code == 200) {
          fieldOptions.value = data.map((e) => ({
            value: e,
            label: e
          }))
        }
      })
    }
    styleConfig.value = curComp.value.style
  },
  {
    deep: true
  }
)
</script>
<style scoped lang="scss">
.material-cfg {
  display: flex;
  flex-direction: column;
  :deep(.ant-tabs) {
    flex: 1;
    overflow-y: auto;
  }
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
