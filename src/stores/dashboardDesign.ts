import { defineStore } from "pinia"
import { ref,computed, onMounted } from 'vue'
export const useDashboardDesignStore = defineStore('dashboardDesign',() =>{
   // #region 增加自定义模块
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
   // #endregion

   // #region 变量池
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

   
   // #endregion

   // #region 公共部分

   const getContentWindow = () =>{
    return (document.querySelector('.standalone-iframe') as HTMLIFrameElement).contentWindow as Window
   }
   // #endregion 
   return {
        customModules,
        customCompSchema,
        onAddModules,
        customComps,
        varPools,
        getContentWindow
   }
})