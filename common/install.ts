import QBChart from "./components/QBChart.vue";
import QBIframe from "./components/QBIframe.vue";
import QBImage from "./components/QBImage.vue";
import QBText from "./components/QBText.vue";
import type { App } from "vue";
const install = (app: App) => {
    app.component('qb-chart', QBChart);
    app.component('qb-iframe', QBIframe);
    app.component('qb-image', QBImage);
    app.component('qb-text', QBText);
}
export default install;