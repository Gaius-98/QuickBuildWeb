export interface LowCodeTable {
  name: string
  description?: string
  createTime?: string
  id?: string
  status: number
  columns: Partial<LCTableColumnCfg>[]
  global: Partial<LCTableGlobalCfg>,
  filter:Partial<LowCodeFilterCfg>,
  action:Partial<LCTableInteractionCfg>[],
  datasetId: string
}

export interface LowCodeWidget{
   id:string
   type:keyof typeof WidgetType
   field:string
   dict?:string 
   defaultValue?:string
}
export interface LowCodeFilterCfg {
    show:boolean
    widgetList:LowCodeWidget[]
}
export interface LowCodeBtn {
    id:string
    type:string
    name:string
}

export enum WidgetType {
    input='input',
    select='select',
    date='date',
}
export enum AlignType {
  left = 'left',
  center = 'center',
  right = 'right'
}
export enum FixedType {
  left = 'left',
  right = 'right'
}
export enum ColumnType {
  text = 'text',
  link = 'link',
  image = 'image'
}
export interface LCTableColumnCfg {
  id: string
  dataIndex: string
  title: string
  type: keyof typeof ColumnType
  width: number
  align: keyof typeof AlignType
  fixed: keyof typeof FixedType
  children: LCTableColumnCfg[]
}
export interface LCTablePaginationCfg {
  current: number
  pageSize: number
  pageSizeOptions: string[] | number[]
  total: number
}

export interface LCTableInteractionCfg  {
  //按钮标识
  id: string
  //按钮名称
  name: string
  //按钮位置
  position: 'row' | 'header'
  // 点击是否请求接口
  request: boolean
  //接口地址
  interfaceUrl: string
  //处理函数
  AfterHandleFunc: string
  //点击事件类型
  event: 'modal' | 'link'
  //链接地址
  linkUrl: string
}
export interface LCTableGlobalCfg {
  bordered: boolean
 
}
export enum DataSourceType {
  static = 'static',
  dynamic = 'dynamic'
}


