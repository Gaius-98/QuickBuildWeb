<template>
  <code v-show="prepend">{{ prepend }}</code>
  <codemirror
    :style="{ height: `${height}px` }"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    v-bind="$attrs"
    v-model="value"
    @ready="handleReady"
    ref="codeEditorRef"
  />
  <code v-show="append">{{ append }}</code>
</template>

<script lang="ts" setup name="EvCode">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { reactive, toRefs, ref, onMounted } from 'vue'
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode'
interface Props {
  height: number
  prepend?: string
  append?: string
  theme: 'dark' | 'light'
  mode?: 'func'
}
const props = withDefaults(defineProps<Props>(), {
  height: 400,
  theme: 'dark'
})
const { height, prepend, append, theme } = toRefs(props)
const value = defineModel<string>('value', { required: true })
const code = ref()

const handleReady = (value: any) => {
  code.value = value
}

const extensions = [javascript(), theme.value == 'dark' ? vscodeDark : vscodeLight]
</script>
<style scoped lang="scss"></style>
