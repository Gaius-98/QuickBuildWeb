import type { Obj,SchemaProperties } from '@/model'
import dictApi from '@/views/System/api/dict'
export interface ControlCfgSchema {
  type: string
  properties: Obj<SchemaProperties>
}
export default [
  {
    type: 'input',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.allowClear': {
        type: 'switch',
        label: '可清除'
      },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.maxlength': {
        type: 'number',
        label: '最大长度'
      }
    }
  },
  {
    type: 'textarea',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.allowClear': {
        type: 'switch',
        label: '可清除'
      },
      'controlProp.autosize': {
        type: 'switch',
        label: '自适应内容高度'
      },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.maxlength': {
        type: 'number',
        label: '最大长度'
      }
    }
  },
  {
    type: 'select',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.allowClear': {
        type: 'switch',
        label: '可清除'
      },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.virtual': {
        type: 'switch',
        label: '虚拟滚动'
      },
      'controlProp.mode': {
        type: 'select',
        label: '模式',
        component: {
          dataSource: [
            {
              label: '多选',
              value: 'multiple'
            },
            {
              label: '标签',
              value: 'tag'
            }
          ],
          allowClear: true
        }
      },
      'controlProp.dict': {
        type: 'select',
        label: '字典',
        component: {
          asyncData: async () => {
            const { code, data, msg } = await dictApi.getDictTypeList()
            if (code == 200) {
              return data.map((item) => {
                return {
                  label: item.dictTypeDesc,
                  value: item.dictType
                }
              })
            } else {
              return []
            }
          }
        }
      }
    }
  },
  {
    type: 'switch',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      }
    }
  },
  {
    type: 'radio',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.buttonStyle': {
        type: 'radio',
        label: '样式',
        component: {
          dataSource: [
            {
              label: '描边',
              value: 'outline'
            },
            {
              label: '填色',
              value: 'solid'
            }
          ]
        }
      },
      'controlProp.optionType': {
        type: 'radio',
        label: '类型',
        component: {
          dataSource: [
            {
              label: '默认',
              value: 'default'
            },
            {
              label: '按钮',
              value: 'button'
            }
          ]
        }
      },
      'controlProp.dict': {
        type: 'select',
        label: '字典',
        component: {
          asyncData: async () => {
            const { code, data, msg } = await dictApi.getDictTypeList()
            if (code == 200) {
              return data.map((item) => {
                return {
                  label: item.dictTypeDesc,
                  value: item.dictType
                }
              })
            } else {
              return []
            }
          }
        }
      }
    }
  },
  {
    type: 'checkbox',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.dict': {
        type: 'select',
        label: '字典',
        component: {
          asyncData: async () => {
            const { code, data, msg } = await dictApi.getDictTypeList()
            if (code == 200) {
              return data.map((item) => {
                return {
                  label: item.dictTypeDesc,
                  value: item.dictType
                }
              })
            } else {
              return []
            }
          }
        }
      }
    }
  },
  {
    type: 'number',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.controls': {
        type: 'switch',
        label: '控件'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.max': {
        type: 'number',
        label: '最大值'
      },
      'controlProp.min': {
        type: 'number',
        label: '最小值'
      },
      'controlProp.precision': {
        type: 'number',
        label: '精度'
      },
      'controlProp.step': {
        type: 'number',
        label: '步长'
      }
    }
  },
  {
    type: 'date',
    properties: {
      'formItemProp.label': {
        type: 'string',
        label: '标签文本'
      },
      'formItemProp.name': {
        type: 'string',
        label: '字段名'
      },
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.disabled': {
        type: 'switch',
        label: '禁用'
      },
      'controlProp.format': {
        type: 'string',
        label: '显示格式化'
      },
      'controlProp.valueFormat': {
        type: 'string',
        label: '值格式化'
      },
      'controlProp.size': {
        type: 'radio',
        label: '大小',
        component: {
          dataSource: [
            {
              label: '大',
              value: 'large'
            },
            {
              label: '中',
              value: 'middle'
            },
            {
              label: '小',
              value: 'small'
            }
          ]
        }
      },
      'controlProp.mode': {
        type: 'radio',
        label: '面板',
        component: {
          dataSource: [
            {
              label: '时间',
              value: 'time'
            },
            {
              label: '日期',
              value: 'date'
            },

            {
              label: '月',
              value: 'month'
            },
            {
              label: '年',
              value: 'year'
            }
          ]
        }
      },
      'controlProp.picker': {
        type: 'radio',
        label: '类型',
        component: {
          dataSource: [
            {
              label: '日期',
              value: 'date'
            },
            {
              label: '周',
              value: 'week'
            },
            {
              label: '月',
              value: 'month'
            },
            {
              label: '年',
              value: 'year'
            }
          ]
        }
      }
    }
  },
  {
    type: 'grid',
    properties: {
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.gutter': {
        type: 'number',
        label: '栅格间距'
      },
      'controlProp.colNumber': {
        type: 'radio',
        label: '列配置',
        component: {
          dataSource: [
            {
              label: '一',
              value: 1
            },
            {
              label: '二',
              value: 2
            },
            {
              label: '三',
              value: 3
            },
            {
              label: '四',
              value: 4
            }
          ]
        }
      }
    }
  },
  {
    type: 'card',
    properties: {
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.title': {
        type: 'string',
        label: '标题'
      },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.hoverable': {
        type: 'switch',
        label: '悬浮效果'
      }
    }
  },
  {
    type: 'divider',
    properties: {
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.title': {
        type: 'string',
        label: '标题'
      },
      'controlProp.orientation': {
        type: 'radio',
        label: '标题位置',
        component: {
          dataSource: [
            {
              label: '左',
              value: 'left'
            },
            {
              label: '中',
              value: 'center'
            },
            {
              label: '右',
              value: 'right'
            }
          ]
        }
      },
      'controlProp.dashed': {
        type: 'switch',
        label: '虚线'
      },
      'controlProp.plain': {
        type: 'switch',
        label: '普通正文'
      }
    }
  },
  {
    type: 'collapse',
    properties: {
      // show: {
      //   type: 'string',
      //   label: '显隐条件'
      // },
      'controlProp.title': {
        type: 'string',
        label: '标题'
      },
      'controlProp.bordered': {
        type: 'switch',
        label: '边框'
      },
      'controlProp.ghost': {
        type: 'switch',
        label: '透明效果'
      },
      'controlProp.defaultExpanded': {
        type: 'switch',
        label: '默认展开'
      },
      'controlProp.showArrow': {
        type: 'switch',
        label: '显示箭头'
      }
    }
  }
] as ControlCfgSchema[]
