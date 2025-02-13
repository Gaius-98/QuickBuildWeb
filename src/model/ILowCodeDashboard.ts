import type { LibTree,LibTreeChild } from "@/model"
export interface DashboardInfo {
    list:DgCompItem[]
    name:string
    id?:string
    status?:number
    img:string
    varPools:DgVarPool
    customModules:DgExtraModuleInfo[]
}

export interface DgCompItem {
    id:string
    props:Record<string,any>
    style:Record<string,any>
    component:string
    [key:string]:any
    icon?:string
    label?:string
}

export interface DgVarPool {
    datasets:string[];
    vars:{
        name:string;
        type:string;
        defaultValue:any
    }[]
}
export interface DgChildModuleInfo extends LibTreeChild {
    schema:string
}
export interface DgExtraModuleInfo extends LibTree {
    children:DgChildModuleInfo[]
}
