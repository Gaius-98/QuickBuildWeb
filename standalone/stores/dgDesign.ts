import { defineStore } from "pinia"
import { ref,toRaw } from "vue"
import componentsSchema from "@/assets/components/componentsSchema"
import { cloneDeep } from "lodash-es"

export const useDgDesignStore = defineStore('dgDesign', () => { 

    const dashboardData = ref({})
    const dgList = ref<any[]>([])
    const curComp = ref<any>({})
    const add = (item:any) =>{
      dgList.value.push(item)
    }
    const remove  = (item:any) =>{
      const { id } = item
      const idx = dgList.value.findIndex((item) => item.id === id)
      if(idx !== -1){
        dgList.value.splice(idx,1)
      }
    }
    const initDgItem = (compName:string) =>{
      const compIdx = componentsSchema.findIndex((item) => item.name === compName)
      if(compIdx === -1){
        throw new Error('组件不存在')
      }
      const comp = cloneDeep(componentsSchema[compIdx])
      comp.id = new Date().getTime().toString()
      return comp
    }
    const selectItem = (item:any) =>{
      curComp.value = item
      window.parent.postMessage({type:'select',data:toRaw(item)},window.location.origin)
    }
    const updateItem = (item:any)=>{
       const { id } = item
       const idx = dgList.value.findIndex((item) => item.id === id)
       if(idx !== -1){
         dgList.value.splice(idx,1,item)
       }
    }
   return {
         dashboardData,
         add,
         remove,
         dgList,
         initDgItem,
         selectItem,
         curComp,
         updateItem  
   }
})