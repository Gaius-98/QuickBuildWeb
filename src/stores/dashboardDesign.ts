import { defineStore, storeToRefs } from "pinia"
import { ref,computed, onMounted, toRaw,nextTick } from 'vue'
import dashboard from "@/views/LowCode/Dashboard/api/dashboard"
import type { DashboardInfo,DgCompItem,DgVarPool,DgExtraModuleInfo } from "@/model"
import { message } from "ant-design-vue"
import {useDgDesignStore} from './dgDesign'
const dgStore = useDgDesignStore()
const { dgList } = storeToRefs(dgStore)
const { createPreviewImg } = dgStore
export const useDashboardDesignStore = defineStore('dashboardDesign',() =>{
   // #region 增加自定义模块
   const customModules = ref<DgExtraModuleInfo[]>([])
   const onAddModules = (moduleInfo:any) =>{
    customModules.value.push(moduleInfo)
   }
   const customCompSchema = computed(()=>{
     const schemaCfg:Record<string,any> = {}
     customModules.value.map(customModule=>{
        customModule.children.forEach((e:any)=>{
            schemaCfg[e.componentName] = e.schema
        })
     })
     return schemaCfg
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

   const getContentWindow = async () =>{
    // const iframe =   (document.querySelector('.standalone-iframe') as HTMLIFrameElement)
    // const p = new Promise((resolve,reject)=>{
    //     iframe.addEventListener('load',()=>{
    //         resolve(iframe.contentWindow)
    //     })
    // }) 
    // const contentWindow = await p
    // return contentWindow as Window
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
   const loading = ref(false)
   const onSave = () =>{
    loading.value = true
    createPreviewImg().then(res=>{
        dgInfo.value.list = dgList.value as DgCompItem[]
        dgInfo.value.img = res
        dgInfo.value.customModules = customModules.value
        dgInfo.value.varPools = varPools.value
        const http = dgInfo.value.id ? dashboard.update : dashboard.add
        if(!dgInfo.value.id){
            delete dgInfo.value.id
        }
       
        http(dgInfo.value).then(res=>{
            const {code,data,msg} = res
             loading.value = false
            if(code == 200){
                message.success('保存成功')
            }else{
                message.error('保存失败')
            }
        })
    })

   }
   const getDetail = (id:string) =>{
    loading.value = true
    dashboard.getDetail(id).then(res=>{
        const {code,data,msg} = res
        if(code == 200){
            dgInfo.value = data
            const { customModules:customs,varPools:vars } = dgInfo.value
            customModules.value = customs
            varPools.value = vars
            dgStore.init(dgInfo.value.list)
            loading.value = false
            // setTimeout(()=>{
            //      getContentWindow().then(res=>{
            //         res.postMessage({ type: 'refresh-all', data:toRaw(dgInfo.value.list) })
            //         loading.value = false
            //     })
                
            // })
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
        getDetail,
        loading
   }
})