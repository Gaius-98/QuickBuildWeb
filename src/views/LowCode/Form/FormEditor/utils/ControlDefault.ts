const formDefault = {
  formItemProp: {
    label: '',
    name: '',
    required: false
  },
  show: undefined
}
const inputDefault = {
  ...formDefault,
  controlProp: {
    allowClear: true,
    bordered: true,
    disabled: false,
    maxlength: null,
    size: 'middle'
  },
  type: 'input',
  id: ''
}
const textareaDefault = {
  ...formDefault,
  controlProp: {
    allowClear: true,
    autosize: false,
    disabled: false,
    maxlength: null,
    size: 'middle'
  },
  type: 'textarea',
  id: ''
}
const selectDefault = {
  ...formDefault,
  controlProp: {
    allowClear: true,
    bordered: true,
    disabled: false,
    mode: null,
    size: 'middle',
    virtual: true
  },
  type: 'select',
  id: ''
}

const switchDefault = {
  ...formDefault,
  controlProp: {
    disabled: false,
    size: 'middle'
  },
  type: 'switch',
  id: ''
}

const radioDefault = {
  ...formDefault,
  controlProp: {
    disabled: false,
    size: 'middle',
    buttonStyle: 'solid',
    optionType: 'button'
  },
  type: 'radio',
  id: ''
}
const checkboxDefault = {
  ...formDefault,
  controlProp: {
    disabled: false
  },
  type: 'checkbox',
  id: ''
}
const dateDefault = {
  ...formDefault,
  controlProp: {
    allowClear: false,
    bordered: true,
    disabled: false,
    format: 'YYYY-MM-DD',
    mode: '',
    valueFormat: 'YYYY-MM-DD',
    size: 'middle',
    picker: ''
  },
  type: 'date',
  id: ''
}
const numberDefalt = {
  ...formDefault,
  controlProp: {
    disabled: false,
    size: 'middle',
    bordered: true,
    controls: true,
    max: null,
    min: null,
    precision: null,
    step: 1
  },
  type: 'number',
  id: ''
}

const gridDefault = {
  type: 'grid',
  controlProp: {
    gutter: 0,
    colNumber: 2,
    children: []
  },
  id: '',
  show: undefined
}
const cardDefault = {
  type: 'card',
  controlProp: {
    title: '',
    bordered: true,
    hoverable: false,
    children: []
  },
  id: '',
  show: undefined
}

const dividerDefault = {
  type: 'divider',
  controlProp: {
    type: 'horizontal',
    plain: false,
    orientation: 'left',
    dashed: false,
    title: ''
  },
  id: '',
  show: undefined
}

const collapseDefault = {
  type: 'collapse',
  controlProp: {
    bordered: true,
    ghost: false,
    header: '折叠面板',
    showArrow: true,
    defaultExpanded: true,
    children: []
  },
  id: '',
  show: undefined
}

const controlDefault: any[] = [
  inputDefault,
  switchDefault,
  selectDefault,
  radioDefault,
  checkboxDefault,
  gridDefault,
  cardDefault,
  dateDefault,
  numberDefalt,
  dividerDefault,
  collapseDefault,
  textareaDefault
]

export default controlDefault
