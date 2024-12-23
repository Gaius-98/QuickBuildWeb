import { defineStore } from 'pinia'
import type { LowCodeTable, LCTableColumnCfg, Obj } from '@/model'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

import { message } from 'ant-design-vue'
export const useTableDesignStore = defineStore('tableDesign', () => {
  const tableData = ref<Obj<any>[]>([])
  const tableCfg = ref<LowCodeTable>({
    name: '',
    description: '',
    status: 1,
    columns: [],
    global: {
      showFilter:true,
      showPagination:true,
      showBordered:false,
      size:'middle'
    },
    datasource:{
      tableName:'',
      sourceId:''
    },
    filter:[],
    action:[]
  })
  const columnFields = ref<{ label: string; value: string }[]>([])
  const currentColumn = ref<Partial<LCTableColumnCfg>>({})
  const onAddColumn = () => {
    const randomStr = new Date().getTime().toString().slice(-4)
    tableCfg.value.columns.push({
      id: uuid(),
      dataIndex: 'field' + randomStr,
      title: '列' + randomStr,
      width:200
    })
  }
  const onSelectColumn = (id: string, data: Partial<LCTableColumnCfg>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      currentColumn.value = data[idx]
    }
  }
  const onRemoveColumn = (id: string, data: Partial<LCTableColumnCfg>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      data.splice(idx, 1)
    }
  }
  const onAddBtn = (position?:"row"|"header") =>{
    tableCfg.value.action.push({
      id: new Date().getTime().toString(),
      name: '测试',
      position: position,
      eventFlowId: '',
      customEvent:false,
      builtInEvents:'add'
    })
  }
  const onRemoveBtn = (id:string) =>{
   const idx =   tableCfg.value.action.findIndex(e=>(e.id == id))
   if(idx != -1){
    tableCfg.value.action.splice(idx,1)
   }
  }

  const onRemoveWidget = (id:string) =>{
   const idx =   tableCfg.value.filter!.findIndex(e=>(e.id == id))
   if(idx != -1){
    tableCfg.value.filter!.splice(idx,1)
   }
  }
  const onRefreshData = async (handlerFunc?: string) => {
    
  }
  const saveLoading = ref(false)
  const onSave = async () => {
    saveLoading.value = true

    setTimeout(() => {
      console.log(tableCfg.value)
      saveLoading.value = false
      
    }, 2000);
  }
  const onSetColumns = (data:{ label: string; value: string }[]) =>{
    columnFields.value = data
  }
  return {
    tableCfg,
    currentColumn,
    onSelectColumn,
    onRemoveColumn,
    onAddColumn,
    tableData,
    onRefreshData,
    saveLoading,
    onSave,
    columnFields,
    onSetColumns,
    onAddBtn,
    onRemoveBtn,
    onRemoveWidget
  }
})