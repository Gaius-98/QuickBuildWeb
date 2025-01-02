import request from '@/utils/request'
import type { Obj,SystemOrgTree,SystemUserNotice,QueryProxyDataDto,LowCodeTable,LowCodeTableQueryParams,LowCodeTableParamsData,LowCodeTableColParamsData,SystemDictTypeItem,ResPage,LowCodeDataSource,DataSourceTable,DataSourceTableField } from '@/model'
export type DictTypes = string[]
export interface DictItem {
  value: string
  label: string
}
export interface FormListItem {
  name:string
  id:string
}
export default {
  getDict: (data: DictTypes) => {
    return request<Obj<DictItem[]>>({
      method: 'get',
      url: '/dict/dictByType',
      params: {
        dictType: data
      }
    })
  },
  getSetting:(type:string)=>{
    return request<Obj<string>>({
      method: 'get',
      url: '/setting/byType',
      params: {
        type
      }
    })
  },
  getOrgTree:(keyword?:string)=>{
    return request<SystemOrgTree[]>({
      url: 'org/orgTree',
      method: 'get',
        params:{
          keyword
        }
    })
  },
  getNotice:() =>{
    return request<ResPage<SystemUserNotice[]>>({
      url: 'notice/list/ByUser/limit',
      method: 'get',

    })
  },
  getDatasetDict:()=>{
    return request<DictItem[]>({
      url: 'dataset/dict',
      method: 'get',
    })
  },
  getFieldByDatasetId:(id:string)=>{
    return request<string[]>({
      url: 'dataset/getField',
      method: 'get',
      params:{
        id
      }
    })
  },
  getPreviewByDatasetId:(id:string)=>{
        return request<Obj<any>[]>({
            method: 'get',
            url: 'dataset/runById',
            params:{
              id
            }
        })
  },
  getDataSourceDict:()=>{
        return request<LowCodeDataSource[]>({
            method: 'get',
            url: 'datasource/list',
            params:{
                keyword:''
            }
        })
    },
     getTableInfo:(id:string)=>{
        return request<DataSourceTable[]>({
            method: 'get',
            url: 'datasource/getAllTable',
            params: {
                id
            }
        })
    },
    getColumnInfo:(id:string,tableName:string)=>{
        return request<DataSourceTableField[]>({
            method: 'get',
            url: 'datasource/getColumnByTable',
            params: {
                id,
                tableName
            }
        })
    },
    getSourceData:(id:string,tableName:string)=>{
        return request<Obj<any>[]>({
            method: 'get',
            url: 'datasource/run',
            params: {
                id,
                tableName
            }
        })
    },
    getFormDict:()=>{
      return request<FormListItem[]>({
        method:'get',
        url:'/form/dict',
      })
    },
    getDictTypeList: () => {
      return request<SystemDictTypeItem[]>({
        method: 'get',
        url: 'dict/dictTypeList'
      })
    },
    
    getLowCodeTableDetail: (id: string) => {
      return request<LowCodeTable>({
        method: 'get',
        url: 'table/detail',
        params: {
          id
        }
      })
    },
    getLowCodeTableList:(params:LowCodeTableQueryParams)=>{
        return request<ResPage<Record<string,any>[]>>({
          method: 'get',
          url: 'table/lowcode/list',
          params
        })
    },
    insertLowCodeTable:(data:LowCodeTableParamsData)=>{
      return request({
        method: 'post',
        url: 'table/lowcode/insert',
        data
      })
    },
    updateLowCodeTable:(data:LowCodeTableParamsData)=>{
      return request({
        method: 'post',
        url: 'table/lowcode/update',
        data
      })
    },
    removeLowCodeTable:(data:LowCodeTableParamsData)=>{
      return request({
        method: 'post',
        url: 'table/lowcode/remove',
        data
      })
    },
    getLowCodeColData:(data:LowCodeTableColParamsData) =>{
      return request<DictItem[]>({
        method: 'post',
        url: 'table/lowcode/getColData',
        data
      })
    },
    getProxyData:(data:QueryProxyDataDto)=>{
      return request<any>({
        method:'post',
        url:'datasource/proxy',
        data
      })
    }

}
