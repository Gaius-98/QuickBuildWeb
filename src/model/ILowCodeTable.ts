export interface LowCodeTable {
  name: string
  description?: string
  createTime?: string
  id?: string
  status: number
  columns: Partial<LCTableColumnCfg>[]
  global: Partial<LCTableGlobalCfg>,
  filter:Partial<LowCodeWidget>[],
  action:Partial<LCTableInteractionCfg>[],
  dataSource:{
    sourceId:string,
    tableName:string
  }
}

export interface LowCodeWidget{
   id:string
   type:keyof typeof WidgetType
   field:string
   dict?:string 
   defaultValue?:string
   label:string
   dictType:'dict'|'col'
}
export interface LowCodeFilterCfg {

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
  right = 'right',
  none = 'none'
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
export enum BuiltInEventEnum {
  //新增
  add = 'add',
  //编辑
  edit = 'edit',
  //删除
  delete = 'delete',
  view = 'view',
  export = 'export',
  import = 'import',

}
export interface LCTableInteractionCfg  {
  //按钮标识
  id: string
  //按钮名称
  name: string
  //按钮位置
  position: 'row' | 'header'
  // 是否开启自定义事件
  customEvent:boolean
  //内置事件
  builtInEvents:keyof typeof BuiltInEventEnum
  //自定义工作流id
  eventFlow:EventFlow
  //表单
  formId?:string
}


export interface EventFlow {
  nodes:any[]
  edges:any[]
}
export interface LCTableGlobalCfg {
  showFilter:boolean
  showPagination:boolean
  showBordered:boolean
  size: 'large' | 'middle' | 'small'
}
export enum DataSourceType {
  static = 'static',
  dynamic = 'dynamic'
}

export interface LowCodeTableQueryParams {
  sourceId:string
  tableName:string
  pageNumber:number
  pageSize:number
  paramsData:Record<string,string|number>
}

export interface LowCodeTableParamsData{
  sourceId:string
  tableName:string
  data:Record<string,any>
}
export interface LowCodeTableColParamsData{
  sourceId:string
  tableName:string
  field:string
}

export interface ProxyData {
  key: string;
  value: string;
  var: string;
}
export interface QueryProxyDataDto {
  method: 'get' | 'post';
  url: string;
  headers: ProxyData[];
  body: ProxyData[];
  params: ProxyData[];
  state: Record<string, any>;
}
