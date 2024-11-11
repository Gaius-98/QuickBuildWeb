import type { Obj } from '@/model'

export interface SchemaLayout {
  labelAlign?: 'left' | 'right'
  labelCol?: {
    span?: number
    offset?: number
    style?: Obj<any>
  }
  wrapperCol?: {
    span?: number
    offset?: number
    style?: Obj<any>
  }
  layout?: 'horizontal' | 'vertical' | 'inline'
}
export type ControlType =
  | 'string'
  | 'date'
  | 'number'
  | 'select'
  | 'tree'
  | 'radio'
  | 'switch'
  | 'textarea'
export interface SchemaProperties {
  label: string
  required?: boolean
  rules?: any[] | Obj<any>
  tooltip?: string
  type: ControlType
  show?: boolean | string
  component?: {
    name?: string
    dataSource?: any[]
    asyncData?: (formData: Obj<any>, field: string) => Promise<any>
    [key: string]: any
  }
}
export interface SchemaProp {
  layout?: SchemaLayout
  properties: Obj<SchemaProperties>
}
export interface Schema {
  schema:SchemaProp
  formData?: Obj<any>
  size:Size
}
export interface FormFieldInfo {
  formData: Obj<any>
  field: string
  value: any
}

export type Size = 'large'|'middle'|'small'