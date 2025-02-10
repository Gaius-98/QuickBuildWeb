import { defineStore } from "pinia"
import { ref,computed } from 'vue'
export const useDashboardDesignStore = defineStore('dashboardDesign',() =>{
   const customModules = ref<any[]>([])

   const onAddModules = (moduleInfo:any) =>{
    customModules.value.push(moduleInfo)
   }

   const customCompSchema = computed(()=>{
     const schema:Record<string,any> = {}
     customModules.value.map(customModule=>{
        customModule.children.forEach((e:any)=>{
            schema[e.componentName] = e.schema
        })
     })
     return schema
   })
   const customComps = computed(()=>{
    let comps:{
        label:string,
        value:string
    }[] = []
    customModules.value.forEach((customModule)=>{
       const childComps =  customModule.children.map((e:any)=>{
            return {
                label:e.componentName,
                value:e.exportName
            }
        })
        comps = comps.concat(childComps)
    })
    return comps
   })
   return {
        customModules,
        customCompSchema,
        onAddModules,
        customComps
   }
})