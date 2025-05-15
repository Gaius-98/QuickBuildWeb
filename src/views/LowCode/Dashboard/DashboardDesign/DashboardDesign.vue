<template>
  <div class="dg-design" v-loading.fullscreen="loading">
    <a-page-header :ghost="false" style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px">
      <template #title>
        <a-input :bordered="false" class="form-name" v-model:value="dgInfo.name"></a-input>
      </template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="onOpenVarPools()">变量池</a-button>
          <a-button class="preview-btn" @click="onPreview()"> 预览 </a-button>
          <a-button @click="onConfirm()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="dg-design-container">
      <material-area class="left-part"></material-area>
      <div class="middle-part">
        <dashboard-design></dashboard-design>
        <!-- <iframe
          width="100%"
          height="100%"
          src="/standalone/standalone.html"
          style="border: 0"
          class="standalone-iframe"
        ></iframe> -->
      </div>
      <material-cfg class="right-part"></material-cfg>
    </div>
  </div>
  <a-modal title="变量池" v-model:open="varOpen" width="800px" :footer="null">
    <a-form>
      <div style="height: 300px; overflow-y: auto">
        <a-space
          v-for="(variable, index) in varPools.vars"
          :key="index"
          style="display: flex; margin-bottom: 8px"
          align="baseline"
        >
          <a-form-item label="变量名" :required="true">
            <a-input v-model:value="variable.name" />
          </a-form-item>
          <a-form-item label="变量类型" :required="true">
            <a-select
              style="width: 150px"
              v-model:value="variable.type"
              :options="typeList"
            ></a-select>
          </a-form-item>
          <a-form-item label="默认值" :required="true">
            <a-input v-model:value="variable.defaultValue" />
          </a-form-item>
          <MinusCircleOutlined @click="onRemoveVar(variable)" />
        </a-space>
      </div>
      <a-form-item>
        <a-button type="dashed" block @click="onAddVar">
          <PlusOutlined />
          添加变量
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal
    title="预览"
    v-model:open="previewShow"
    width="100%"
    wrap-class-name="full-modal"
    :footer="null"
  >
    <dashboard-design style="height: 500px" :readonly="true"></dashboard-design>
  </a-modal>
</template>

<script lang="ts" setup>
import { useDgDesignStore } from '@/stores/dgDesign'
import MaterialArea from './components/MaterialArea.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import DashboardDesign from './components/DashboardDesign.vue'
import { reactive, toRefs, ref, computed, onMounted, toRaw, watch } from 'vue'
import { useReminder } from '@/hooks'
import { useDashboardDesignStore } from '@/stores/dashboardDesign'
import { storeToRefs } from 'pinia'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
const dgStore = useDashboardDesignStore()
const { varPools, dgInfo, loading } = storeToRefs(dgStore)
const { onSave, getDetail } = dgStore
window.name = 'dg-design'
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
const varOpen = ref(false)
const onOpenVarPools = () => {
  varOpen.value = true
}
const onConfirm = () => {
  onSave()
}
onMounted(() => {})

const onAddVar = () => {
  varPools.value.vars.push({
    name: '',
    type: '',
    defaultValue: ''
  })
}
const typeList = ref([
  {
    label: '字符串',
    value: 'string'
  },
  {
    label: '数字',
    value: 'number'
  },
  {
    label: '布尔',
    value: 'boolean'
  },
  {
    label: '数组',
    value: 'array'
  },
  {
    label: '对象',
    value: 'object'
  }
])
const onRemoveVar = (variable: { name: string; type: string; defaultValue: any }) => {
  const idx = varPools.value.vars.findIndex((e) => e.name === variable.name)
  if (idx != -1) {
    varPools.value.vars.splice(idx, 1)
  }
}
const onPreview = () => {
  if (!dgInfo.value.id) {
    message.warning('请保存后再预览')
  }
  previewShow.value = true
  // const urlCfg = router.resolve({
  //   path: '/preview-dashboard',
  //   query: {
  //     id: dgInfo.value.id!
  //   }
  // })
  // window.open(urlCfg.href, '_blank')
}
const previewShow = ref(false)
</script>
<style scoped lang="scss">
.dg-design {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .form-name {
    &:hover {
      background-color: #e0f7fa;
    }
  }
}
.dg-design-container {
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  gap: $gap;
  height: calc(100vh - 80px);
  padding: 10px 10px 0;
  .left-part {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .middle-part {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    .middle-part-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
      background-color: #fff;
    }
    .middle-part-content {
      flex: 1;
      background-color: #fff;
    }
  }
  .right-part {
    padding: 0 20px 0 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
