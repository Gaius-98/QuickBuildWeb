<template>
  <div class="material-area">
    <div class="material-layout-area">
      <div class="title">内置组件</div>
      <div class="content">
        <div
          v-for="item in materials.internalComp"
          :key="item.name"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.name"
          data-material-type="internal"
          class="material-item"
        >
          <span class="iconfont material-icon" :class="item.icon"> </span>
          <span class="material-label"> {{ item.label }}</span>
        </div>
      </div>
    </div>
    <div class="material-data-area">
      <div class="title">自定义组件</div>
      <div class="content">
        <div
          type="dashed"
          v-for="item in materials.customComp"
          :key="item.value"
          draggable="true"
          @dragstart="onDrag"
          :data-material="item.value"
          data-material-type="custom"
          class="material-item"
        >
          {{ item.label }}
        </div>
        <div type="dashed" @click="onOpenCustomCompModal" class="material-item">
          <span>
            <PlusOutlined />
            添加组件
          </span>
        </div>
      </div>
    </div>
    <a-modal
      title="添加自定义组件"
      width="800px"
      v-model:open="open"
      @ok="onConfirm"
      @cancel="onCancel"
    >
      <div style="height: 650px">
        <a-form :model="customCompInfo" :label-col="{ style: { width: '150px' } }">
          <a-form-item label="名称">
            <a-input v-model:value="customCompInfo.title"></a-input>
          </a-form-item>
          <a-form-item label="组件库名称">
            <a-input v-model:value="customCompInfo.package"></a-input>
          </a-form-item>
          <a-form-item label="版本">
            <a-input v-model:value="customCompInfo.version"></a-input>
          </a-form-item>
          <a-form-item label="导出名称">
            <a-input v-model:value="customCompInfo.exportName"></a-input>
          </a-form-item>
          <a-form-item label="CDN地址">
            <div style="height: 80px; overflow-y: auto">
              <div
                v-for="(url, index) in customCompInfo.urls"
                :key="url"
                style="display: flex; margin-bottom: 8px"
                align="baseline"
              >
                <a-input v-model:value="customCompInfo.urls[index]"></a-input>
                <MinusCircleOutlined @click="removeCDNUrl(url)" style="padding: 0 10px" />
              </div>
            </div>

            <a-form-item>
              <a-button type="dashed" block @click="addCDNUrl">
                <PlusOutlined />
                增加CDN地址
              </a-button>
            </a-form-item>
          </a-form-item>
          <a-form-item label="子组件">
            <div style="height: 200px; overflow-y: auto">
              <div
                v-for="(child, index) in customCompInfo.children"
                :key="child.id"
                style="display: flex; margin-bottom: 8px; border-bottom: 1px solid #ccc"
                align="baseline"
              >
                <a-space>
                  <div>
                    <a-space>
                      <a-form-item
                        label="组件名"
                        :rules="{
                          required: true
                        }"
                      >
                        <a-input v-model:value="child.componentName"></a-input>
                      </a-form-item>
                      <a-form-item
                        label="导出名称"
                        :name="['sights', index, 'price']"
                        :rules="{
                          required: true
                        }"
                      >
                        <a-input v-model:value="child.exportName" />
                      </a-form-item>
                    </a-space>
                    <a-form-item
                      label="配置Schema"
                      :rules="{
                        required: true
                      }"
                    >
                      <code-editor v-model:value="child.schema" theme="light" height="110">
                      </code-editor>
                    </a-form-item>
                  </div>
                  <MinusCircleOutlined @click="removeComponent(child)" />
                </a-space>
              </div>
            </div>
            <a-form-item>
              <a-button type="dashed" block @click="addComponent">
                <PlusOutlined />
                增加子组件
              </a-button>
            </a-form-item>
          </a-form-item>
        </a-form>
      </div>
      <!-- <template #footer>
        <a-button @click="onConfirm" type="primary">完成</a-button>
        <a-button @click="onCancel">取消</a-button>
      </template> -->
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRaw } from 'vue'
import type { LibItem, LibTree } from '@/model'
import componentsSchema from '@/assets/components/componentsSchema'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'
import { cloneDeep } from 'lodash-es'
const materials = ref<{
  internalComp: any[]
  customComp: any[]
}>({
  internalComp: componentsSchema,
  customComp: []
})

const onDrag = (e: DragEvent) => {
  const target = e.target as HTMLElement
  e.dataTransfer?.setData('material', target.dataset.material!)
  e.dataTransfer?.setData('material-type', target.dataset.materialType!)
}
const open = ref(false)
const onOpenCustomCompModal = () => {
  open.value = true
  customCompInfo.value = cloneDeep(defaultCompInfo.value)
}
const defaultCompInfo = ref<any>({
  title: 'element',
  package: 'element-plus',
  version: '2.9.2',
  exportName: 'ElementPlus',
  urls: [
    'https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.full.min.js',
    'https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.min.css'
  ],
  children: [
    {
      componentName: 'ElButton',
      exportName: 'ElButton',
      id: '1',
      schema: '{\n    "type": {\n        "type": "input",\n        "label": "按钮类型"\n    }\n}'
    }
  ]
})
const customCompInfo = ref<any>({})
const onCancel = () => {
  open.value = false
}
const onConfirm = () => {
  const comps = customCompInfo.value.children.map((e: any) => ({
    label: e.componentName,
    value: e.exportName
  }))
  materials.value.customComp = materials.value.customComp.concat(comps)
  const compMap = localStorage.getItem('qb-custom-data')
    ? JSON.parse(localStorage.getItem('qb-custom-data')!)
    : {}
  customCompInfo.value.children.forEach((e: any) => {
    compMap[e.componentName] = e.schema
  })
  localStorage.setItem('qb-custom-data', JSON.stringify(compMap))
  contentWindow?.postMessage({ type: 'add-custom-comp', data: toRaw(customCompInfo.value) })
  onCancel()
}
const addComponent = () => {
  customCompInfo.value.children.push({
    componentName: '',
    exportName: '',
    id: new Date().getTime().toString()
  })
}
const removeComponent = (data: any) => {
  const idx = customCompInfo.value.children.findIndex((e: any) => {
    return e.id == data.id
  })
  if (idx != -1) {
    customCompInfo.value.children.splice(idx, 1)
  }
}
const addCDNUrl = () => {
  customCompInfo.value.urls.push('')
}
const removeCDNUrl = (url: string) => {
  const idx = customCompInfo.value.urls.findIndex((e: string) => e == url)
  if (idx != -1) {
    customCompInfo.value.urls.splice(idx, 1)
  }
}
let contentWindow: null | Window = null
onMounted(() => {
  contentWindow = (document.querySelector('.standalone-iframe') as HTMLIFrameElement).contentWindow
})
</script>
<style scoped lang="scss">
.material-area {
  display: flex;
  flex-direction: column;
  .material-layout-area,
  .material-data-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      .material-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        border: 1px dashed #f0f0f0;
        .material-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        .material-label {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
