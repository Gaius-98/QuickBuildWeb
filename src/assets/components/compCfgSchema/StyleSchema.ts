import type { SchemaProperties,Obj } from '@/model'
export default {
    title1:{
        type:'divider',
        label:'布局',
        component:{
            title:'布局'
        },
        formLayout:false
    },
    paddingLeft:{
        type:'string',
        label:'左边距',
        tooltip: '请注明单位，一般为：px'
    },
    paddingTop:{
        type:'string',
        label:'上边距',
        tooltip: '请注明单位，一般为：px'
    },
    paddingRight:{
        type:'string',
        label:'右边距',
        tooltip: '请注明单位，一般为：px'
    },
    paddingBottom:{
        type:'string',
        label:'下边距',
        tooltip: '请注明单位，一般为：px'
    },
    title2:{
        type:'divider',
        label:'背景',
        component:{
            title:'背景'
        },
        formLayout:false
    },
    backgroundColor:{
        type:'string',
        label:'背景色',
        component:{
            name:'color-picker'
        }
    },
    title3:{
        type:'divider',
        label:'边框',
        component:{
            title:'边框'
        },
        formLayout:false
    },
    borderWidth:{
        type:'string',
        label:'边框宽度',
        tooltip: '请注明单位，一般为：px'
    },
    borderColor:{
        type:'string',
        label:'边框颜色',
        component:{
            name:'color-picker'
        }
    },
    borderStyle:{
        type:'radio',
        label:'边框样式',
        component:{
            dataSource:[
                {
                    label:'无边框',
                    value:'none'
                },
                {
                    label:'虚线',
                    value:'dashed'
                },
                {
                    label:'实线',
                    value:'solid'
                }
            ],
            buttonStyle:"solid"
        }
    },
    borderRadius:{
        type:'string',
        label:'边框圆角',
        tooltip: '请注明单位，可以为%或者px'
    }
} as Obj<SchemaProperties>