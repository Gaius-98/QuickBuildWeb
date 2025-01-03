<template>
  <div class="form-design">
    <a-page-header
      :subTitle="desc"
      @back="goBack"
      :ghost="false"
      style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px"
    >
      <template #title>
        <a-input v-model:value="extraFormConfig.name" :bordered="false" class="form-name"></a-input>
      </template>
      <template #extra>
        <a-space>
          <a-button @click="onOpenPreviewModal" class="preview-btn"> 预览 </a-button>
          <a-button @click="onConfirm()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="form-design-container" v-loading.fullscreen="saveLoading">
      <material-area class="left-part"></material-area>
      <div class="middle-part">
        <a-form v-bind="formConfig" class="middle-part-content">
          <material-view v-model="formCfgItemList"></material-view>
        </a-form>
      </div>
      <material-cfg class="right-part"></material-cfg>
    </div>
  </div>
  <a-modal v-model:open="previewShow" title="预览" width="1000px" height="800px" :footer="null">
    <low-code-form
      :formData="formData"
      :schema="{ formCfgItemList, formConfig }"
      v-if="previewShow"
    ></low-code-form>
  </a-modal>
  <a-tour
    v-model:current="current"
    :open="shouldShowReminder"
    :steps="steps"
    @close="shouldShowReminder = false"
  />
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialView from './components/MaterialView.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import { reactive, toRefs, ref, computed } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import { useReminder } from '@/hooks'
import LowCodeForm from '@/components/LowCodeForm/LowCodeForm.vue'
import api from '../api/form'

window.name = 'form-design'
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)

const formStore = useFormDesignStore()
const { formCfgItemList, extraFormConfig, saveLoading, formConfig } = storeToRefs(formStore)
const { onSave, setFormDetail } = formStore
// 引导
const open = ref<boolean>(false)
const { shouldShowReminder } = useReminder('low-code-form-design')
const current = ref(0)
const steps = [
  {
    title: '物料区',
    description: '选择您需要的表单控件',
    target: () => document.querySelector('.left-part'),
    placement: 'right'
  },
  {
    title: '设计区',
    description: '将物料区的表单控件拖拽到此区域,可以按照你需要的方式进行布局。',
    target: () => document.querySelector('.middle-part-content'),
    placement: 'top'
  },
  {
    title: '配置区',
    description: '对设计区选中的控件进行配置',
    target: () => document.querySelector('.right-part'),
    placement: 'left'
  },
  {
    title: '查看实际效果',
    description: '对已经配置完成的表单进行预览',
    target: () => document.querySelector('.preview-btn'),
    placement: 'left'
  },
  {
    title: '最后',
    description: '保存您刚刚的配置',
    target: () => document.querySelector('.save-btn'),
    placement: 'left'
  }
]

if (id.value) {
  api.getDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      setFormDetail(data)
    }
  })
} else {
  setFormDetail({
    id: '',
    name: '未命名',
    description: '',
    schema: {
      formCfgItemList: [],
      formConfig: {
        labelCol: {
          span: undefined,
          offset: undefined
        },
        labelAlign: 'left'
      }
    },
    img: '',
    status: 1,
    belong: 'private'
  })
  open.value = true
}

const desc = computed(() => {
  return id.value ? extraFormConfig.value.description : ''
})

const goBack = () => {
  window.open('/lowcode/form', 'quick-build')
}
const onConfirm = () => {
  onSave().then(() => {
    goBack()
  })
}
const previewShow = ref(false)
const formData = ref({})
const onOpenPreviewModal = () => {
  previewShow.value = true
}
</script>
<style scoped lang="scss">
.form-design {
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
.form-design-container {
  display: grid;
  grid-template-columns: 1fr 9fr 2fr;
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
