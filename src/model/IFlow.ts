import type { IBaseNodeModel,  IBaseEdgeModel } from "@logicflow/core"

export interface PropExtraData {
    [key:string]:any
    nodeType:FlowNodeType
    extraData:{
        [key:string]:any
    }
}
export enum FlowNodeEnum {
    'start-node',
    'end-node',
    'func-node',
    'modal-node',
    'link-node',
    'request-node'
}
export type FlowNodeType = keyof typeof FlowNodeEnum

export type FlowNode  = IBaseNodeModel<PropExtraData>

export interface FlowData {
    nodes:FlowNode[]
    edges:IBaseEdgeModel<any>[]
}