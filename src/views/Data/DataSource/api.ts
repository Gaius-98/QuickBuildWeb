import request from "@/utils/request";
import type { LowCodeDataSource,PageParams,ResPage,DataSourceTable,DataSourceTableField } from "@/model";
export default {
    getList:(keyword:string)=>{
        return request<ResPage<LowCodeDataSource[]>>({
            method: 'get',
            url: 'datasource/list',
            params:{
                keyword
            }
        })
    },
    add:(data:LowCodeDataSource)=>{
        return request({
            method: 'post',
            url: 'datasource/add',
            data
        })
    },
    update:(data:LowCodeDataSource)=>{
        return request({
            method: 'post',
            url: 'datasource/update',
            data
        })
    },
    remove:(id:string)=>{
        return request<string>({
            method: 'get',
            url: 'datasource/remove',
            params: {
                id
            }
        })
    },
    connect:(data:LowCodeDataSource)=>{
        return request<string>({
            method: 'post',
            url: 'datasource/connection',
            data
        })
    },
    getDetail:(id:string)=>{
        return request<LowCodeDataSource>({
            method: 'get',
            url: 'datasource/detail',
            params: {
                id
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
    }
}