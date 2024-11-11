<template>
  <a-page-header
    :title="title"
    :subTitle="desc"
    @back="goBack"
    :ghost="false"
    style="padding: 10px 24px"
  >
    <template #extra>
      <a-space>
        <a-button @click="onDownload" v-if="id"> 导出 </a-button>
        <a-button @click="onOpenPreviewModal" class="preview-btn"> 预览 </a-button>
        <a-button @click="onOpenSaveModal" type="primary" class="save-btn"> 保存 </a-button>
      </a-space>
    </template>
    <template #tags>
      <a-tag color="#87d068" v-if="extraFormConfig.status">启用</a-tag>
      <a-tag color="#f50" v-else>停用</a-tag>
    </template>
  </a-page-header>
  <div class="form-design" v-loading.fullscreen="saveLoading">
    <material-area class="left-part"></material-area>
    <div class="middle-part">
      <a-form v-bind="formConfig" class="middle-part-content">
        <material-view v-model="formCfgItemList"></material-view>
      </a-form>
    </div>
    <material-cfg class="right-part"></material-cfg>
  </div>
  <a-modal v-model:open="show" title="保存" @ok="onConfirm">
    <schema-form :schema="schema" :form-data="extraFormConfig"></schema-form>
  </a-modal>
  <a-modal v-model:open="previewShow" title="预览">
    <low-code-form :formData="formData" :schema="{ formCfgItemList, formConfig }"></low-code-form>
  </a-modal>
  <a-tour v-model:current="current" :open="open" :steps="steps" @close="open = false" />
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialView from './components/MaterialView.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import { reactive, toRefs, ref, computed } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema, SchemaProp } from '@/model'
import LowCodeForm from '@/components/LowCodeForm/LowCodeForm.vue'
import api from '../api/form'
import { useRouter } from 'vue-router'
import { downloadFile } from '@/utils/tools'
import common from '@/api/common'
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

const current = ref(0)
const steps = [
  {
    title: '物料区',
    description: '选择您需要的表单控件',
    target: () => document.querySelector('.left-part')
  },
  {
    title: '设计区',
    description: '将物料区的表单控件拖拽到此区域,可以按照你需要的方式进行布局。',
    target: () => document.querySelector('.middle-part')
  },
  {
    title: '配置区',
    description: '对设计区选中的控件进行配置',
    target: () => document.querySelector('.right-part')
  },
  {
    title: '查看实际效果',
    description: '对已经配置完成的表单进行预览',
    target: () => document.querySelector('.preview-btn')
  },
  {
    title: '最后',
    description: '保存您刚刚的配置',
    target: () => document.querySelector('.save-btn')
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
    name: '',
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
const title = computed(() => {
  return id.value ? extraFormConfig.value.name : '新建表单'
})
const desc = computed(() => {
  return id.value ? extraFormConfig.value.description : ''
})
const show = ref(false)
const schema = ref<SchemaProp>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      span: 4
    }
  },
  properties: {
    name: {
      type: 'string',
      label: '表单名称'
    },
    description: {
      type: 'string',
      label: '备注'
    },
    belong: {
      type: 'radio',
      label: '归属',
      component: {
        buttonStyle: 'solid',
        asyncData: async () => {
          const { code, data, msg } = await common.getDict(['belong'])
          if (code == 200) {
            return data['belong']
          } else {
            return []
          }
        }
      }
    },
    status: {
      type: 'radio',
      label: '状态',
      component: {
        buttonStyle: 'solid',
        dataSource: [
          {
            label: '启用',
            value: 1
          },
          {
            label: '停用',
            value: 0
          }
        ]
      }
    }
  }
})
const onOpenSaveModal = () => {
  show.value = true
}
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
const onConfirm = () => {
  onSave().then(() => {
    goBack()
  })
  show.value = false
}
const previewShow = ref(false)
const formData = ref({})
const onOpenPreviewModal = () => {
  previewShow.value = true
}
const onDownload = () => {
  api.getTemplate(id.value!).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      downloadFile(data, extraFormConfig.value.name, 'vue')
    }
  })
}
</script>
<style scoped lang="scss">
.form-design {
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  gap: 10px;
  height: calc(100vh - 70px);
  margin-top: 10px;
  background-color: #ccc;
  .left-part {
    padding: 20px;
    background-color: #fff;
  }
  .middle-part {
    display: flex;
    flex-direction: column;
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
  }
}
</style>
