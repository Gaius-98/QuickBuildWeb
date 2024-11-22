<template>
  <div class="cell">
    <span v-if="params.colDef.cellRendererParams.type == 'text'">{{ params.value }}</span>
    <a-image :src="params.value" v-if="params.colDef.cellRendererParams.type == 'image'"> </a-image>
    <a :href="params.value" v-if="params.colDef.cellRendererParams.type == 'link'"
      >{{ params.value }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import type { CellClassParams } from 'ag-grid-community'
interface Props {
  params: CellClassParams
}
const props = defineProps<Props>()
const { params } = toRefs(props)
</script>
<style scoped lang="scss"></style>
