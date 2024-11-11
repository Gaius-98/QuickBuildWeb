<template>
  <a-card
    v-bind="$attrs"
    :bodyStyle="{
      padding: 0,
      'min-height': '40px'
    }"
  >
    <material-view v-model="children" />
  </a-card>
</template>

<script lang="ts" setup>
import MaterialView from './MaterialView.vue'

const children = defineModel<any[]>('children', { required: true })
</script>
<style scoped lang="scss"></style>
