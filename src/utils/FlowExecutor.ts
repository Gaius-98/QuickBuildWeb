import type { FlowData,PropExtraData,FlowNode, Obj } from "@/model"
import type { IBaseEdgeModel, IBaseNodeModel } from "@logicflow/core"
import { Modal } from "ant-design-vue"
import {h} from 'vue'
import LowCodeFormId from "@/components/LowCodeForm/LowCodeFormId.vue"
export class FlowExecutor {

    private state:{
        [key:string]:any
    } = {

    }

    rawData?:FlowData 
    flowNodeList?:FlowNode[]
   
    constructor(data:FlowData){
        this.rawData = data
        this.flowNodeList = []
        this.handleData()
    }

    private handleData(){
        const firstNode = this.findFirstNode()
        this.findLastNode()
        this.flowNodeList?.push(firstNode)
        this.recPushNode()
        return this.flowNodeList
    }

    getFlowList(){
        return this.flowNodeList
    }

    private recPushNode():any{
        //@ts-ignore
       const latestNode =  this.flowNodeList?.at(-1)
       if(this.isLast(latestNode)){
            return
       }else{
            const nextNode = this.findNextNode(latestNode)
            this.flowNodeList?.push(nextNode)
            return this.recPushNode()
       }
    }

    private findFirstNode(){
        if(!this.rawData) {
            throw('The workflow has no data')
        }
        const firstNode = this.rawData.nodes.find((e)=>{
           return  this.isFirst(e)
        })
        if(!firstNode){
            throw('The workflow does not have a start node')
        }
        return firstNode
    }

    private findNextNode(sourceNode:IBaseNodeModel<PropExtraData>){
        const nextEdge = this.rawData!.edges.find(e=>(e.sourceNodeId == sourceNode.id))
        if(!nextEdge){
            throw('The next edge was not found in the workflow data,please check the data!')
        }
        const targetNodeId = nextEdge.targetNodeId
        const nextNode = this.rawData!.nodes.find(e=>(e.id == targetNodeId))
        if(!nextNode){
            throw('The next node was not found in the workflow data,please check the data!')
        }
        return nextNode
    }

    private findLastNode(){
        const isOverLast =  this.rawData?.nodes.some(e=>(this.isLast(e)))
        if(!isOverLast){
            throw('The workflow does not have a last node')
        }
    }

    private isFirst(node:IBaseNodeModel<PropExtraData>){
        if(node.properties.nodeType == 'start-node'){
            return true
        }
        return false
    }

    private isLast(node:IBaseNodeModel<PropExtraData>){
        if(node.properties.nodeType == 'end-node'){
            return true
        }
        return false
    }

    private onOpenModal(node:FlowNode){
        const {size,formId} = node.properties.extraData
        this.state['modalFormData'] = {}
        const widthObject:Obj<string> = {
            small:'600px',
            middle:'1200px',
            large:'1800px'
        }
        return new Promise((resolve,reject)=>{
             Modal.confirm({
                content:h(LowCodeFormId,{
                    id:formId,
                    formData:this.state.modalFormData,
                }),
                title:'表单',
                width:widthObject[size],
                onCancel:()=>{
                    reject()
                },
                onOk:()=>{
                    resolve(this.state.modalFormData)
                }
            })
        })

    }

    private onOpenLink(node:FlowNode){
        const { url,openType } = node.properties.extraData
        window.open(url,openType)
    }

    private async requestData(node:FlowNode){
        const requestFn = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(2000)
            }, 1000);
        })
       const data =  await requestFn
       this.state['test'] = data
    }

    private executeFunction(node:FlowNode){
        const { code,async } = node.properties.extraData
        const fn = new Function(`return ()=>{${code}}`)
        const _this = this
        fn.call(_this)()

    }

    async run(){
        if(!this.flowNodeList) return
        for (let index = 1; index < this.flowNodeList.length - 1; index++) {
            const current  = this.flowNodeList[index]
            const type = current.properties.nodeType
            switch (type) {
                case 'func-node':
                    await this.executeFunction(current)
                    break;
                case 'request-node':
                    await this.requestData(current)
                    break;
                case 'link-node':
                    this.onOpenLink(current)   
                    break;
                case  'modal-node':
                    await this.onOpenModal(current)
                    break;
                default:
                    break;
            }
        }
    }
}