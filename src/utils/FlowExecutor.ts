import type { FlowData,PropExtraData,FlowNode, Obj,QueryProxyDataDto } from "@/model"
import type { IBaseEdgeModel, IBaseNodeModel } from "@logicflow/core"
import { Modal } from "ant-design-vue"
import {h} from 'vue'
import LowCodeFormId from "@/components/LowCodeForm/LowCodeFormId.vue"
import common from "@/api/common"
/**
 * The `FlowExecutor` class is responsible for executing a flow of nodes based on the provided flow data.
 * It manages the state, handles the flow data, and executes specific functions for different types of nodes.
 */
export class FlowExecutor {

    /**
     * The state object that holds various state data.
     */
    private state: {
        [key: string]: any
    } = {};

    /**
     * A map that associates node types with their corresponding execution functions.
     */
    InternalMapping = new Map<string, Function>();

    /**
     * The raw flow data.
     */
    rawData?: FlowData;

    /**
     * The list of flow nodes.
     */
    flowNodeList?: FlowNode[];

    /**
     * Constructs a new `FlowExecutor` instance.
     * @param data - The flow data to be processed.
     */
    constructor(data: FlowData) {
        this.rawData = data;
        this.flowNodeList = [];
        this.handleData();
        this.InternalMapping = new Map(
            [
                ['func-node', this.executeFunction],
                ['request-node', this.requestData],
                ['link-node', this.onOpenLink],
                ['modal-node', this.onOpenModal]
            ]
        );
    }

    /**
     * Sets the modal form data in the state.
     * @param data - The data to be set in the modal form.
     */
    setModalFormData(data:Record<string,any>){
        this.state['modalFormData'] = data
    }    
    /**
     * Handles the flow data by finding the first and last nodes and recursively pushing nodes to the flow node list.
     * @returns The list of flow nodes.
     */
    private handleData() {
        const firstNode = this.findFirstNode();
        this.findLastNode();
        this.flowNodeList?.push(firstNode);
        this.recPushNode();
        return this.flowNodeList;
    }

    /**
     * Gets the list of flow nodes.
     * @returns The list of flow nodes.
     */
    getFlowList() {
        return this.flowNodeList;
    }

    /**
     * Gets flow state.
     * @returns The data of flow state.
     */
    getState() {
        return this.state;
    }
    /**
     * Recursively pushes nodes to the flow node list until the last node is reached.
     * @returns The result of the recursive push operation.
     */
    private recPushNode(): any {
        //@ts-ignore
        const latestNode = this.flowNodeList?.at(-1);
        if (this.isLast(latestNode)) {
            return;
        } else {
            const nextNode = this.findNextNode(latestNode);
            this.flowNodeList?.push(nextNode);
            return this.recPushNode();
        }
    }

    /**
     * Finds the first node in the flow data.
     * @returns The first node.
     * @throws If the workflow has no data or does not have a start node.
     */
    private findFirstNode() {
        if (!this.rawData) {
            throw ('The workflow has no data');
        }
        const firstNode = this.rawData.nodes.find((e) => {
            return this.isFirst(e);
        });
        if (!firstNode) {
            throw ('The workflow does not have a start node');
        }
        return firstNode;
    }

    /**
     * Finds the next node in the flow data based on the source node.
     * @param sourceNode - The source node.
     * @returns The next node.
     * @throws If the next edge or next node is not found in the workflow data.
     */
    private findNextNode(sourceNode: IBaseNodeModel<PropExtraData>) {
        const nextEdge = this.rawData!.edges.find(e => (e.sourceNodeId == sourceNode.id));
        if (!nextEdge) {
            throw ('The next edge was not found in the workflow data, please check the data!');
        }
        const targetNodeId = nextEdge.targetNodeId;
        const nextNode = this.rawData!.nodes.find(e => (e.id == targetNodeId));
        if (!nextNode) {
            throw ('The next node was not found in the workflow data, please check the data!');
        }
        return nextNode;
    }

    /**
     * Finds the last node in the flow data.
     * @throws If the workflow does not have a last node.
     */
    private findLastNode() {
        const isOverLast = this.rawData?.nodes.some(e => (this.isLast(e)));
        if (!isOverLast) {
            throw ('The workflow does not have a last node');
        }
    }

    /**
     * Checks if the given node is the first node.
     * @param node - The node to check.
     * @returns `true` if the node is the first node, otherwise `false`.
     */
    private isFirst(node: IBaseNodeModel<PropExtraData>) {
        if (node.properties.nodeType == 'start-node') {
            return true;
        }
        return false;
    }

    /**
     * Checks if the given node is the last node.
     * @param node - The node to check.
     * @returns `true` if the node is the last node, otherwise `false`.
     */
    private isLast(node: IBaseNodeModel<PropExtraData>) {
        if (node.properties.nodeType == 'end-node') {
            return true;
        }
        return false;
    }

    /**
     * Opens a modal based on the given node's properties.
     * @param node - The node containing modal properties.
     * @returns A promise that resolves with the modal form data or rejects on cancel.
     */
    private onOpenModal(node: FlowNode) {
      const { size, formId } = node.properties.extraData;
      this.state.modalFormData =   this.state['modalFormData'] ? this.state['modalFormData']: {} 
        const widthObject: Obj<string> = {
            small: '600px',
            middle: '1200px',
            large: '1800px'
        };
        return new Promise((resolve, reject) => {
            Modal.confirm({
                content: h(LowCodeFormId, {
                    id: formId,
                    formData: this.state.modalFormData,
                }),
                icon:null,
                title: '表单',
                width: widthObject[size],
                onCancel: () => {
                    reject();
                },
                onOk: () => {
                    resolve(this.state.modalFormData);
                }
            });
        });
    }

    /**
     * Opens a link based on the given node's properties.
     * @param node - The node containing link properties.
     */
    private onOpenLink(node: FlowNode) {
        const { url, openType } = node.properties.extraData;
        window.open(url, openType);
    }

    /**
     * Requests data based on the given node's properties.
     * @param node - The node containing request properties.
     * @returns A promise that resolves with the requested data.
     */
    private async requestData(node: FlowNode) {
        const requestFn = new Promise((resolve, reject) => {
            common.getProxyData(node.properties.extraData as QueryProxyDataDto).then((res) => {
                 resolve(res.data);
            })
        });
        let data 
        try {
            data = await requestFn;
        } catch (error) {
            console.error(error)
        }
        this.state['requestData'] = data;
    }

    /**
     * Executes a function based on the given node's properties.
     * @param node - The node containing function properties.
     * @returns The result of the executed function.
     */
    private executeFunction(node: FlowNode) {
        const { code } = node.properties.extraData;
        const fn = new Function(`return  ()=>{${code}}`);
        const _this = this;
        try {
            return fn.call(_this)();
        } catch (error) {
            console.error(error)
        }
        
    }

    /**
     * Runs the flow by executing the functions for each node in the flow node list.
     */
    async run() {
        if (!this.flowNodeList) return;
        try {
            for (let index = 1; index < this.flowNodeList.length - 1; index++) {
                const current = this.flowNodeList[index];
                const type = current.properties.nodeType as string;
                if (this.InternalMapping.get(type))
                    await this.InternalMapping.get(type)?.call(this, current);
            }
        } catch (error) {
            return error
        }

    }
}
