<template>
  <LowCodeForm :formData="formData" :schema="cfg" v-if="show"></LowCodeForm>
  <a-skeleton v-else />
</template>

<script lang="ts" setup>
import LowCodeForm from './LowCodeForm.vue'
import { reactive, toRefs, ref, watch } from 'vue'
import formApi from '@/views/LowCode/Form/api/form'
import type { Obj } from '@/model'
interface Props {
  id: string
  formData: Obj<any>
}
const props = withDefaults(defineProps<Props>(), {
  formData: () => ({})
})
const { id } = toRefs(props)
const cfg = ref()
const show = ref(false)

watch(
  () => id.value,
  () => {
    show.value = false
    formApi.getDetail(id.value).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        cfg.value = data.schema
        show.value = true
      }
    })
  },
  {
    immediate: true
  }
)
</script>
<style scoped lang="scss"></style>
