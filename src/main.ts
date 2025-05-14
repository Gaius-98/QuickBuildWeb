import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import { uninstallPreLoad } from './utils/tools'
import registerSFEl from './components/SchemaForm/registerSFEl'
import './assets/iconfont/iconfont.css'
import directiveInstall from './directives'
import {GridLayout} from 'drag-grid-layout-v3'
import 'drag-grid-layout-v3/lib/style.css'
import commonComps from '@common/install'
const app = createApp(App)
app.use(createPinia())
app.use(directiveInstall)
app.use(router)
app.component('GridLayout', GridLayout)
app.use(commonComps)
app.use(registerSFEl, {
  'code-editor': defineAsyncComponent(() => import('@/components/CodeEditor.vue')),
  'color-picker': defineAsyncComponent(() => import('@/components/ColorPicker.vue')),
  'image-picker': defineAsyncComponent(() => import('@/components/ImagePicker.vue'))
})
app.mount('#app')
uninstallPreLoad()
