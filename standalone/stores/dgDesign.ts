import { defineStore } from "pinia"
import { ref,toRaw } from "vue"
import componentsSchema from "@/assets/components/componentsSchema"
import { cloneDeep } from "lodash-es"
import { DynamicConfig } from "@/utils/DynamicConfig"
import html2canvas from "html2canvas"
export const useDgDesignStore = defineStore('dgDesign', () => { 

    const dashboardData = ref({})
    const dgList = ref<any[]>([])
    const curComp = ref<any>({})
    const img = ref<string>('')
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
    const init = (data:any[]) =>{
      dgList.value = data
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
      if(curComp.value.id === item.id) return
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
    const updateDgItem = (data:any) =>{
      window.parent.postMessage({type:'update-item',data:toRaw(data)},window.location.origin)
    }
    const transformProps = (props:any) =>{
      const dc = new DynamicConfig(AssemblingVariables.value)
      return dc.processObject(props)
    }
    const sendDgList = ()=>{
      createPreviewImg().then((img)=>{
        window.parent.postMessage({type:'save',data:{
          list:toRaw(dgList.value),
          img:img
        }},window.location.origin)
      })
    }
    const varPools = ref<{
    datasets:string[];
    vars:{
        name:string;
        type:string;
        defaultValue:any
    }[]
   }>({
        datasets:[],
        vars:[
            {
                name:'test',
                type:'string',
                defaultValue:'这是一段测试文本'
            }
        ]
   })
   const setVarPools = (data:any) =>{
    varPools.value = data
    updateVariables()
   }
   const AssemblingVariables = ref({})
 
   const transformVar = (rawData:{
        name:string;
        type:string;
        defaultValue:any
    }[]) =>{
        const transformData:Record<string,any> = {}
        const getValue = (type:string,defaultValue:any) =>{
            switch(type){
                case 'string':
                    return defaultValue;
                case 'number':
                    return Number(defaultValue);
                case 'boolean':
                    return Boolean(defaultValue);
                case 'array':
                case 'object':    
                    return JSON.parse(defaultValue);
                default:
                    return defaultValue          
            }
        }
        rawData.reduce((p:Record<string,any>,c:{
            name:string;
            type:string;
            defaultValue:any
        })=>{
            p[c.name] = getValue(c.type,c.defaultValue)
            return p
        },transformData)
        return transformData
   }
   const updateVariables = () =>{
     AssemblingVariables.value = transformVar(varPools.value.vars)
    
   }
   const createPreviewImg = async () =>{ 
      const dom =  document.querySelector('.dg-design-container') as HTMLElement
      const canvas = await html2canvas(dom)
      return canvas.toDataURL('image/png')
   }
   return {
         dashboardData,
         add,
         remove,
         dgList,
         initDgItem,
         selectItem,
         curComp,
         updateItem,
         transformProps,
         updateVariables,
         setVarPools,
         updateDgItem,
         sendDgList,
         createPreviewImg,
         init  
   }
})