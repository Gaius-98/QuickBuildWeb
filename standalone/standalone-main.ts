import { createApp } from 'vue'
import StandalonePage from './views/StandalonePage.vue'
import {GridLayout} from 'drag-grid-layout-v3'
import 'drag-grid-layout-v3/lib/style.css'
import QBChart from '../common/components/QBChart.vue'
import QBIframe from '../common/components/QBIframe.vue'
import QBImage from '../common/components/QBImage.vue'
import QBText from '../common/components/QBText.vue'
import { createPinia } from 'pinia'
import 'normalize.css'
const app = createApp(StandalonePage)
app.use(createPinia())
app.component('qb-chart', QBChart)
app.component('qb-iframe', QBIframe)
app.component('qb-image', QBImage)
app.component('qb-text', QBText)
app.component('GridLayout', GridLayout)
app.mount('#standalone-app')