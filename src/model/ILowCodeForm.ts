import type { Obj } from './ICommon'
export enum Size {
  middle = '中',
  large = '大',
  small = '小'
}
export enum SelectMode {
  tag = 'tag',
  multiple = 'multiple'
}

export enum RadioStyle {
  outline = 'outline',
  solid = 'solid'
}
export type ControlType =
  | 'input'
  | 'select'
  | 'switch'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'number'
  | 'grid'
  | 'card'
  | 'collapse'
  | 'divider'
export type ControlCfg<T extends ControlType> = T extends 'input'
  ? LCInputCfg
  : T extends 'select'
  ? LCSelectCfg
  : T extends 'switch'
  ? LCSwitchCfg
  : T extends 'radio'
  ? LCRadioCfg
  : T extends 'checkbox'
  ? LCCheckCfg
  : T extends 'date'
  ? LCDateCfg
  : T extends 'number'
  ? LCNumberCfg
  : T extends 'grid'
  ? LCGridCfg
  : T extends 'card'
  ? LCCardCfg
  : T extends 'collapse'
  ? LCCollapseCfg
  : T extends 'divider'
  ? {}
  : never
export interface LCBaseCfg {
  allowClear: boolean
  bordered: boolean
  disabled: boolean
  size: keyof typeof Size
  dict: string
}
export interface LCInputCfg extends Partial<LCBaseCfg> {
  maxLength?: number | null
}
export interface LCSelectCfg
  extends Partial<Pick<LCBaseCfg, 'allowClear' | 'bordered' | 'disabled' | 'dict'>> {
  mode?: keyof typeof SelectMode | null
  virtual?: boolean
}
export interface LCSwitchCfg extends Partial<Pick<LCBaseCfg, 'disabled' | 'size'>> {}

export interface LCRadioCfg extends Partial<Pick<LCBaseCfg, 'disabled' | 'size' | 'dict'>> {
  buttonStyle: keyof typeof RadioStyle
}
export interface LCGridCfg {
  gutter: number
  colNumber: number
  children: Array<LCFormItemCfg<ControlType>[]>
}
export interface LCCardCfg {
  title: string
  bordered: boolean
  hoverable: boolean
  children: LCFormItemCfg<ControlType>[]
}
export interface LCCollapseCfg {
  title: string
  bordered: boolean
  children: LCFormItemCfg<ControlType>[]
  showArrow: true
  defaultExpanded: true
  header: string
}
export interface LCDividerCfg {
  dashed: boolean
  orientation: 'left' | 'right' | 'center'
  plain: boolean
  type: 'horizontal' | 'vertical'
  title: string
}
export interface LCCheckCfg extends Partial<Pick<LCBaseCfg, 'disabled' | 'dict'>> {}

export interface LCDateCfg extends Partial<LCBaseCfg> {
  format?: string
  valueFormat?: string
}

export interface LCNumberCfg extends Partial<Pick<LCBaseCfg, 'disabled' | 'size' | 'bordered'>> {
  controls?: boolean
  max?: number
  min?: number
  precision?: number
  step?: number
}

export interface LCFormItemCfg<T extends ControlType> {
  id?: string
  type?: string
  controlProp?: ControlCfg<T>
  formItemProp?: {
    label: string
    name: string
    required: boolean
  }
}
export interface FormCfg {
  labelAlign: 'left' | 'right'
  labelCol: {
    span?: number
    offset?: number
  }
}
export interface LCFormSchema {
  formConfig: Partial<FormCfg>
  formCfgItemList: LCFormItemCfg<ControlType>[]
}
export interface LCFormCfg {
  name: string
  id?: string
  schema: LCFormSchema
  img: string
  description?: string
  status?: number
  belong:'private'|'public'
}
export interface SchemaItemChangeEventData {
  formData: Obj<any>
  field: string
  value: any
}
