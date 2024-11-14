export enum DbTypeEnum {
  mysql,
}
export interface LowCodeDataSource {
  id?:string
  datasourceName: string;
  sourceType: string;
  dbName: string;
  dbType: keyof typeof DbTypeEnum;
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPwd: string;
  status: string;
  remark: string;
  createTime?:string
}

export interface DataSourceTable{
    tableName:string
    tableComment:string
}
export interface DataSourceTableField {
  columnType: string;
  columnName: string;
  columnComment: string;
}