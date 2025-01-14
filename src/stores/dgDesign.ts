import { defineStore } from "pinia"
import { ref } from "vue"
import componentsSchema from "@/assets/components/componentsSchema"
import { cloneDeep } from "lodash-es"
export const useDgDesignStore = defineStore('dgDesign', () => { 
    const dashboardData = ref({})
    const dgList = ref<any[]>([])
    const add = (item:any) =>{
      dgList.value.push(item)
    }
    const remove  = (item:any) =>{
      
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
   return {
         dashboardData,
         add,
         remove,
         dgList,
         initDgItem
   }
})