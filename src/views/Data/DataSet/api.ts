import request from "@/utils/request";
import type { LowCodeDataset,PageParams,ResPage,LowCodeDatasetLog,DataSourceTable,DataSourceTableField, Obj } from "@/model";
export default {
    getList:(params:PageParams)=>{
        return request<ResPage<LowCodeDataset[]>>({
            method: 'get',
            url: 'dataset/list',
            params
        })
    },
    add:(data:LowCodeDataset)=>{
        return request({
            method: 'post',
            url: 'dataset/add',
            data
        })
    },
    update:(data:LowCodeDataset)=>{
        return request({
            method: 'post',
            url: 'dataset/update',
            data
        })
    },
    remove:(id:string)=>{
        return request<string>({
            method: 'get',
            url: 'dataset/remove',
            params: {
                id
            }
        })
    },
    run:(data:LowCodeDataset)=>{
        return request<Obj<any>[]>({
            method: 'post',
            url: 'dataset/run',
            data
        })
    },
    getDetail:(id:string)=>{
        return request<LowCodeDataset>({
            method: 'get',
            url: 'dataset/detail',
            params: {
                id
            }
        })
    },
    getLogList:(params:PageParams)=>{
        return request<ResPage<LowCodeDatasetLog[]>>({
            method: 'get',
            url: 'dataset/getLog',
            params
        })
    }

}