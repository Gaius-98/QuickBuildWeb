import textPropsSchema from "./propsSchema/textPropsSchema"
import imgPropsSchema from "./propsSchema/imgPropsSchema"
import iframePropsSchema from "./propsSchema/iframePropsSchema"
import { getChartPropsSchema } from "./propsSchema/chartPropsSchema"
export default {
    'qb-text':textPropsSchema,
    'qb-image':imgPropsSchema,
    'qb-iframe':iframePropsSchema,
    'qb-chart':getChartPropsSchema,
}