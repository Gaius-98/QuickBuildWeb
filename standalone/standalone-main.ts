import { createApp } from 'vue'
import StandalonePage from './views/StandalonePage.vue'
import {GridLayout} from 'drag-grid-layout-v3'
import 'drag-grid-layout-v3/lib/style.css'
import commonComps from '@common/install'
import '../src/assets/iconfont/iconfont.css'
import { createPinia } from 'pinia'
import 'normalize.css'
const app = createApp(StandalonePage)
app.use(createPinia())
app.use(commonComps)

app.component('GridLayout', GridLayout)
app.mount('#standalone-app')