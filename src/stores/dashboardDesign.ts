import { defineStore } from "pinia"
import { ref,computed, onMounted } from 'vue'
import dashboard from "@/views/LowCode/Dashboard/api/dashboard"
import type { DashboardInfo,DgCompItem,DgVarPool,DgExtraModuleInfo } from "@/model"
import { message } from "ant-design-vue"
export const useDashboardDesignStore = defineStore('dashboardDesign',() =>{
   // #region 增加自定义模块
   const customModules = ref<DgExtraModuleInfo[]>([])
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
   const varPools = ref<DgVarPool>({
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
   
   // #region 仪表板信息
   const dgInfo = ref<DashboardInfo>({
        list:[],
        customModules:[],
        varPools:{
            datasets:[],
            vars:[]
        },
        img:'',
        name:'未命名仪表板',
        id:''
   })
   const onSave = (data:any) =>{
        dgInfo.value.list = data.list as DgCompItem[]
        dgInfo.value.img = data.img
        dgInfo.value.customModules = customModules.value
        dgInfo.value.varPools = varPools.value
        const http = dgInfo.value.id ? dashboard.update : dashboard.add
        http(dgInfo.value).then(res=>{
            const {code,data,msg} = res
            if(code == 200){
                message.success('保存成功')
            }else{
                message.error('保存失败')
            }
        })
   }
   const getDetail = (id:string) =>{
    dashboard.getDetail(id).then(res=>{
        const {code,data,msg} = res
        if(code == 200){
            dgInfo.value = data
        }
    })
   }
   // #endregion
   return {
        customModules,
        customCompSchema,
        onAddModules,
        customComps,
        varPools,
        getContentWindow,
        onSave,
        dgInfo,
        getDetail
   }
})