import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Obj, LCFormItemCfg, ControlType, LCGridCfg, LCCardCfg, LCCollapseCfg } from '@/model'
import { cloneDeep } from 'lodash-es'
import LowCodeForm from '@/components/LowCodeForm/LowCodeForm.vue'
import { createApp } from 'vue'
import html2canvas from 'html2canvas'
import formApi from '@/views/LowCode/Form/api/form'
import type { LCFormCfg, FormCfg } from '@/model'
import { message } from 'ant-design-vue'
import { v4 as uuid } from 'uuid'
export const useFormDesignStore = defineStore('formDesign', () => {
  const formCfgItemList = ref<LCFormItemCfg<ControlType>[]>([])
  const formConfig = ref<Partial<FormCfg>>({})
  const curControlCfg = ref<LCFormItemCfg<ControlType>>({})
  const id = ref('')
  const setFormDetail = (data: LCFormCfg) => {
    const { id: formId, schema, name, description, status,belong } = data
    id.value = formId!
    extraFormConfig.value = {
      name,
      description,
      status,
      belong
    }
    formCfgItemList.value = schema.formCfgItemList
    formConfig.value = schema.formConfig
  }
  const onSelectControlItem = (id: string, data: LCFormItemCfg<ControlType>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      curControlCfg.value = data[idx]
    }
  }
  const extraFormConfig = ref<Obj<any>>({
    name: '',
    description: '',
    status: 1
  })

  const removeControlItem = (id: string, data: LCFormItemCfg<ControlType>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      data.splice(idx, 1)
    }
  }
  const copyControlItem = () => {
    const copyCfg = cloneDeep(curControlCfg.value)
    changeControlItemId(copyCfg)
    const copyControl = copyCfg
    formCfgItemList.value.push(copyControl)
  }
  const changeControlItemId = (data: LCFormItemCfg<ControlType>) => {
    data.id = uuid()
    if (data.type == 'grid') {
      (data.controlProp as LCGridCfg).children.forEach((item: LCFormItemCfg<ControlType>[]) => {
        item.forEach((e) => {
          changeControlItemId(e)
        })
      })
    } else if (data.type == 'card') {
      (data.controlProp as LCCardCfg).children.forEach((item: LCFormItemCfg<ControlType>) => {
        changeControlItemId(item)
      })
    } else if (data.type == 'collapse') {
      (data.controlProp as LCCollapseCfg).children.forEach((item: LCFormItemCfg<ControlType>) => {
        changeControlItemId(item)
      })
    }
  }
  const saveLoading = ref(false)
  const AddPreviewForm = () => {
    const vNode = document.createElement('div')
    vNode.className = 'preview-form'
    vNode.style.width = '720px'
    vNode.style.height = '500px'
    vNode.style.overflowY = 'auto'
    vNode.style.padding = '10px'
    const FormComp = createApp(LowCodeForm, {
      schema: {
        formCfgItemList: formCfgItemList.value,
        formConfig: formConfig.value
      },
      formData: {}
    })
    FormComp.mount(vNode).$el
    document.body.appendChild(vNode)
  }
  const onSave = async () => {
    saveLoading.value = true
    let img = ''
    AddPreviewForm()
    if (document.querySelector('.preview-form')) {
      const canvas = await html2canvas(document.querySelector('.preview-form') as HTMLElement)
      if (canvas) {
        img = canvas.toDataURL('image/png')
        document.body.removeChild(document.querySelector('.preview-form') as Node)
      }
    }
    let api = formApi.add
    const req = <LCFormCfg>{
      schema: {
        formCfgItemList: formCfgItemList.value,
        formConfig: formConfig.value
      },
      ...extraFormConfig.value,
      img
    }
    if (id.value) {
      api = formApi.update
      req.id = id.value
    }
    const { code, msg } = await api(req)
    if (code == 200) {
      message.success(msg)
    }
    saveLoading.value = false
  }
  return {
    curControlCfg,
    formCfgItemList,
    onSelectControlItem,
    copyControlItem,
    removeControlItem,
    extraFormConfig,
    onSave,
    id,
    saveLoading,
    setFormDetail,
    formConfig
  }
})
