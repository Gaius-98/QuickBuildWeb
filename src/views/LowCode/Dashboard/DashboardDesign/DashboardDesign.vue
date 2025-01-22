<template>
  <div class="dg-design">
    <a-page-header
      :subTitle="desc"
      :ghost="false"
      style="border: 1px solid rgb(235, 237, 240); padding: 10px 24px"
    >
      <template #title>
        <a-input :bordered="false" class="form-name"></a-input>
      </template>
      <template #extra>
        <a-space>
          <a-button class="preview-btn"> 预览 </a-button>
          <a-button @click="onConfirm()" type="primary" class="save-btn"> 保存 </a-button>
        </a-space>
      </template>
    </a-page-header>
    <div class="dg-design-container">
      <material-area class="left-part"></material-area>
      <div class="middle-part">
        <iframe
          width="100%"
          height="100%"
          src="/standalone/standalone.html"
          style="border: 0"
          class="standalone-iframe"
        ></iframe>
      </div>
      <material-cfg class="right-part"></material-cfg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import { reactive, toRefs, ref, computed, onMounted } from 'vue'
import { useReminder } from '@/hooks'

window.name = 'dg-design'
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)

const desc = computed(() => {
  return id.value
})

const onConfirm = () => {}
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
