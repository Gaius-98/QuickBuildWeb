function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LayoutView-qLKRH8SO.js","assets/.pnpm-N12a7SWa.js","assets/.pnpm-DwxpVVSv.css","assets/SchemaForm--bVHqSGl.js","assets/SchemaForm-qY4A0LYZ.css","assets/HomeView-BL7Xr2UZ.js","assets/CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-hjBcYnAl.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/HomeView-CERzkK2S.css","assets/BlankView-CurWEywj.js","assets/MenuView-DFHe3um_.js","assets/menu-DQ-vC2xo.js","assets/MenuView-rXxR8W4j.css","assets/UserView-De5yQtlK.js","assets/ImagePicker-Dj0S5PoD.js","assets/resource-DH_da9_l.js","assets/ImagePicker-Dp2wxzWC.css","assets/UserView-C6xecwhv.css","assets/OrgView-B_vAAbTg.js","assets/OrgView-CUA0qZVm.css","assets/DictView-B09s_R1B.js","assets/dict-DwCEqTXf.js","assets/DictView-DaMQuQEk.css","assets/RoleView-Co6_Mcwj.js","assets/RoleView-CvIrPAlo.css","assets/ResourceView-D27psFP7.js","assets/ResourceView-CfpMkg0T.css","assets/SettingView-DvxjI7Xl.js","assets/SettingView-lU1IFRVo.css","assets/LoginLog-BZ4fOwvO.js","assets/LoginLog-B7BbWtEY.css","assets/OptLog-B_arRWvx.js","assets/OptLog-sMB-3Fzy.css","assets/NoticeView-CQVliJQo.js","assets/notice-cQS0ZTRY.js","assets/NoticeView-TUseHoGF.css","assets/NotifyMessage-O2FnmV_9.js","assets/NotifyMessage-DSKm87cU.css","assets/SystemInfo-BO4lX46R.js","assets/SystemInfo-DP8rGWJV.css","assets/index-D9WybT-F.js","assets/api-DegE89rY.js","assets/api-MVF68r34.js","assets/index-2Zf0ogH1.css","assets/index-COmy56ho.js","assets/index-CAAU6-CP.css","assets/FormList-CBIT4ooY.js","assets/LowCodeForm.vue_vue_type_script_setup_true_lang-SKLJIUx_.js","assets/LowCodeFormId.vue_vue_type_script_setup_true_lang-wUg-uZu1.js","assets/FormList-DB7py4Zd.css","assets/TableList-BaUi8SOy.js","assets/table-Ce_BM8Bs.js","assets/FlowExecutor-BVw3K0vZ.js","assets/TableList-CrOg8SDF.css","assets/index-BsZSVIWH.js","assets/IframeView-DVOMoSKQ.js","assets/NotFound-D2iAfLgV.js","assets/LoginView-Bd1VoZ_M.js","assets/LoginView-tGAvJOUF.css","assets/FormEditor-BK4JbDNr.js","assets/useReminder-C9eAgdVn.js","assets/FormEditor-3Im8US8X.css","assets/TableDesign-Kb01eVWJ.js","assets/FlowView-ag_cgq8V.js","assets/FlowView-DcafxjZ4.css","assets/TableDesign-CuYbU_0E.css","assets/index-BezQe7cn.js","assets/index-CuY_yl5v.css","assets/CodeEditor-B80mZOPu.js","assets/ColorPicker-CIinLWch.js","assets/ColorPicker-xKG6x5AH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as D,c as z,b as x,d as F,e as b,f as $,r as d,u as C,g as K,s as k,o as W,h as Z,w as H,i as E,j as Q,z as G,k as J,_ as X,l as Y,m as S,n as ee,S as te,Z as oe,p as re,q as I}from"./.pnpm-N12a7SWa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const ne="modulepreload",se=function(e){return"/"+e},V={},n=function(t,o,s){let r=Promise.resolve();if(o&&o.length>0){const i=document.getElementsByTagName("link");r=Promise.all(o.map(c=>{if(c=se(c),c in V)return;V[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const _=i[m];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":ne,u||(l.as="script",l.crossOrigin=""),l.href=c,document.head.appendChild(l),u)return new Promise((m,_)=>{l.addEventListener("load",m),l.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>t()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})},ae=(e,t,o=1)=>{D.set(e,t.toString(),{expires:o})},ie=e=>D.get(e),ce=e=>{D.remove(e)};function q(){const e="QUICK_ADMIN_TOKEN";return{setToken:r=>{ae(e,r)},getToken:()=>ie(e),removeToken:()=>{ce(e)}}}const{getToken:le}=q(),ue=[{path:"/",name:"layout",component:()=>n(()=>import("./LayoutView-qLKRH8SO.js"),__vite__mapDeps([0,1,2,3,4])),redirect:{path:"/home"},children:[{path:"/home",name:"home",component:()=>n(()=>import("./HomeView-BL7Xr2UZ.js"),__vite__mapDeps([5,6,1,2,7,8]))},{path:"/system",name:"system",component:()=>n(()=>import("./BlankView-CurWEywj.js"),__vite__mapDeps([9,7,1,2])),children:[{path:"menu",name:"menu",component:()=>n(()=>import("./MenuView-DFHe3um_.js"),__vite__mapDeps([10,11,1,2,7,12]))},{path:"user",name:"user",component:()=>n(()=>import("./UserView-De5yQtlK.js"),__vite__mapDeps([13,14,15,1,2,7,16,17]))},{path:"org",name:"org",component:()=>n(()=>import("./OrgView-B_vAAbTg.js"),__vite__mapDeps([18,1,2,7,19]))},{path:"dict",name:"dict",component:()=>n(()=>import("./DictView-B09s_R1B.js"),__vite__mapDeps([20,21,1,2,7,22]))},{path:"role",name:"role",component:()=>n(()=>import("./RoleView-Co6_Mcwj.js"),__vite__mapDeps([23,11,1,2,7,24]))},{path:"resource",name:"resource",component:()=>n(()=>import("./ResourceView-D27psFP7.js"),__vite__mapDeps([25,15,1,2,7,26]))},{path:"setting",name:"setting",component:()=>n(()=>import("./SettingView-DvxjI7Xl.js"),__vite__mapDeps([27,1,2,7,28,16]))},{path:"login-log",name:"loginLog",component:()=>n(()=>import("./LoginLog-BZ4fOwvO.js"),__vite__mapDeps([29,1,2,7,30]))},{path:"opt-log",name:"optLog",component:()=>n(()=>import("./OptLog-B_arRWvx.js"),__vite__mapDeps([31,1,2,7,32]))},{path:"notice",name:"notice",component:()=>n(()=>import("./NoticeView-CQVliJQo.js"),__vite__mapDeps([33,34,1,2,7,35]))},{path:"notice-message",name:"noticeMessage",component:()=>n(()=>import("./NotifyMessage-O2FnmV_9.js"),__vite__mapDeps([36,34,1,2,7,37]))},{path:"system-info",name:"systemInfo",component:()=>n(()=>import("./SystemInfo-BO4lX46R.js"),__vite__mapDeps([38,1,2,7,39]))}]},{path:"/data",name:"data",component:()=>n(()=>import("./BlankView-CurWEywj.js"),__vite__mapDeps([9,7,1,2])),children:[{path:"dataset",name:"dataset",component:()=>n(()=>import("./index-D9WybT-F.js"),__vite__mapDeps([40,41,42,1,2,7,43]))},{path:"datasource",name:"datasource",component:()=>n(()=>import("./index-COmy56ho.js"),__vite__mapDeps([44,42,1,2,7,45]))}]},{path:"/lowcode",name:"lowcode",component:()=>n(()=>import("./BlankView-CurWEywj.js"),__vite__mapDeps([9,7,1,2])),children:[{path:"form",name:"form",component:()=>n(()=>import("./FormList-CBIT4ooY.js"),__vite__mapDeps([46,47,1,2,48,7,49]))},{path:"table",name:"table",component:()=>n(()=>import("./TableList-BaUi8SOy.js"),__vite__mapDeps([50,51,1,2,48,47,52,7,53]))},{path:"dashboard",name:"dashboard",component:()=>n(()=>import("./index-BsZSVIWH.js"),__vite__mapDeps([54,1,2]))}]},{path:"/apply",name:"apply",children:[{path:"iframe",name:"iframe",component:()=>n(()=>import("./IframeView-DVOMoSKQ.js"),__vite__mapDeps([55,1,2])),props:e=>e.query}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>n(()=>import("./NotFound-D2iAfLgV.js"),__vite__mapDeps([56,7,1,2]))}]},{path:"/login",name:"login",component:()=>n(()=>import("./LoginView-Bd1VoZ_M.js"),__vite__mapDeps([57,1,2,7,58]))},{path:"/design",name:"design",component:()=>n(()=>import("./BlankView-CurWEywj.js"),__vite__mapDeps([9,7,1,2])),children:[{path:"form",name:"form-design",component:()=>n(()=>import("./FormEditor-BK4JbDNr.js"),__vite__mapDeps([59,1,2,7,47,3,4,21,60,61])),props:e=>e.query},{path:"table",name:"table-design",component:()=>n(()=>import("./TableDesign-Kb01eVWJ.js"),__vite__mapDeps([62,1,2,7,3,4,51,63,6,52,48,47,64,60,65])),props:e=>e.query},{path:"dataset",name:"dataset-design",component:()=>n(()=>import("./index-BezQe7cn.js"),__vite__mapDeps([66,42,1,2,41,7,67,4])),props:e=>e.query},{path:"flow",name:"flow",component:()=>n(()=>import("./FlowView-ag_cgq8V.js"),__vite__mapDeps([63,6,1,2,7,52,48,47,64])),props:e=>e.query}]}],T=z({history:x("/"),routes:ue});T.beforeEach((e,t,o)=>{e.path=="/login"||le()?o():o("/login")});const me=e=>{const{type:t,address:o,openType:s}=e;switch(t){case"front":s=="_self"?T.push({path:o,query:{menuId:e.id}}):s=="_blank"&&window.open(o,"_blank");break;case"iframe":T.push({path:"/apply/iframe",query:{id:encodeURIComponent(o),menuId:e.id}});break}},{getToken:pe}=q(),P=F.create({baseURL:"/prod",timeout:6e4});P.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${pe()}`,e),e=>e);P.interceptors.response.use(e=>{const{code:t,msg:o}=e.data;return t!=200&&b.error(o),e.data},e=>{var t,o;return b.error(((t=e.response)==null?void 0:t.data).msg||e.message),((o=e.response)==null?void 0:o.data).code==403&&me({type:"front",openType:"_self",address:"/login"}),Promise.reject(e)});const a=e=>new Promise((t,o)=>{P.request(e).then(s=>{t(s)},s=>{o(s)})}),de={getMenu:()=>a({url:"/menu",method:"get"})},_e={getList:e=>a({method:"get",url:"user/list",params:e}),getDetail:e=>a({method:"get",url:"user/detail",params:{userId:e}}),getUserInfo:()=>a({method:"get",url:"auth/userInfo"}),remove:e=>a({method:"get",url:"user/remove",params:{userId:e}}),add:e=>a({method:"post",url:"user/register",data:e}),update:e=>a({method:"post",url:"user/update",data:e}),getRoleDict:()=>a({method:"get",url:"role/dict"})},N={getDict:e=>a({method:"get",url:"/dict/dictByType",params:{dictType:e}}),getSetting:e=>a({method:"get",url:"/setting/byType",params:{type:e}}),getOrgTree:e=>a({url:"org/orgTree",method:"get",params:{keyword:e}}),getNotice:()=>a({url:"notice/list/ByUser/limit",method:"get"}),getDatasetDict:()=>a({url:"dataset/dict",method:"get"}),getFieldByDatasetId:e=>a({url:"dataset/getField",method:"get",params:{id:e}}),getPreviewByDatasetId:e=>a({method:"get",url:"dataset/runById",params:{id:e}}),getDataSourceDict:()=>a({method:"get",url:"datasource/list",params:{keyword:""}}),getTableInfo:e=>a({method:"get",url:"datasource/getAllTable",params:{id:e}}),getColumnInfo:(e,t)=>a({method:"get",url:"datasource/getColumnByTable",params:{id:e,tableName:t}}),getSourceData:(e,t)=>a({method:"get",url:"datasource/run",params:{id:e,tableName:t}}),getFormDict:()=>a({method:"get",url:"/form/dict"}),getDictTypeList:()=>a({method:"get",url:"dict/dictTypeList"}),getLowCodeTableDetail:e=>a({method:"get",url:"table/detail",params:{id:e}}),getLowCodeTableList:e=>a({method:"get",url:"table/lowcode/list",params:e}),insertLowCodeTable:e=>a({method:"post",url:"table/lowcode/insert",data:e}),updateLowCodeTable:e=>a({method:"post",url:"table/lowcode/update",data:e}),removeLowCodeTable:e=>a({method:"post",url:"table/lowcode/remove",data:e}),getLowCodeColData:e=>a({method:"post",url:"table/lowcode/getColData",data:e}),getProxyData:e=>a({method:"post",url:"datasource/proxy",data:e})},B=$("system",()=>{const e=d([]),t=d(!1),o=()=>{t.value=!0},s=()=>{t.value=!1},r=d("zh"),i=()=>{r.value=="en"?r.value="zh":r.value="en"},c=C("gaius-theme-json",{projectName:"quick-build",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"quick-build"}),u=d({}),p=d({}),f=d([]),l=d({name:"",status:"",sortNum:0}),m=d({list:[],total:0}),_=C("gaius-permissions",[]),L=d(!1),U=()=>{L.value=!L.value},M=g=>{u.value=g},A=async()=>{const{data:g}=await de.getMenu();e.value=g},O=async()=>{const{data:{user:g,roles:v,permissions:R,org:j}}=await _e.getUserInfo();p.value=g,f.value=v,l.value=j,_.value=R},w=async()=>{const{code:g,data:v,msg:R}=await N.getNotice();g==200&&(m.value.list=v.data,m.value.total=v.total)};return{menuTree:e,isConfigVisible:t,local:r,onOpenConfigDrawer:o,onCloseConfigDrawer:s,onToggleLocal:i,themeCfg:c,collapsed:L,onToggleCollapsed:U,startUp:async()=>{await A(),await O(),await w()},getMenu:A,userInfo:p,getUserInfo:O,permissionInfo:_,systemSetting:u,setSystemSetting:M,orgInfo:l,roleInfo:f,getNoticeList:w,noticeInfo:m}}),ge=K({__name:"App",setup(e){const t=d("middle");N.getSetting("system").then(c=>{const{code:u,data:p,msg:f}=c;if(u==200){let l=document.querySelector('link[rel="icon"]');l.href=p.projectLogo;let m=document.querySelector("title");m.innerText=p.projectName,s(p)}else b.error("获取系统配置失败")});const o=B(),{setSystemSetting:s}=o,{local:r,themeCfg:i}=k(o);return(c,u)=>{const p=J("router-view"),f=X;return W(),Z(f,{locale:E(r)=="en"?E(Q):E(G),"component-size":t.value,theme:{token:{colorPrimary:E(i).colorPrimary}}},{default:H(()=>[Y(p)]),_:1},8,["locale","component-size","theme"])}}}),fe=()=>{const e=document.querySelector(".pre-loading");e&&e.remove()},Ae=(e,t)=>t.split(".").reduce((s,r)=>{if(s!=null)return s[r]||null},e),Oe=(e,t,o)=>{const s=t.split(".");s.reduce((r,i,c)=>(c===s.length-1?r[i]=o||void 0:r[i]||(r[i]={}),r[i]),e)},we=e=>{if(typeof e=="string")return Number(e)!==0;if(typeof e=="number")return e!==0},he={install:(e,t)=>{e.provide("sfProvideEL",t)}},ye={name:"has-perm",options:{beforeMount(e,t){const o=B(),{permissionInfo:s}=k(o);!s.value.includes(t.value)&&!s.value.includes("*")&&(e.style.display="none")}}},ve={render:e=>ee(te)},Ee=()=>{const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",zIndex:2e3,top:0,left:0,right:0,bottom:0,backgroudColor:"rgba(0,0,0,.2)",display:"flex",alignItems:"center",justifyContent:"center"}),e},h=Ee(),Te=S(ve);Te.mount(h);const Le={name:"loading",options:{beforeMount(e,t){const{value:o,modifiers:s}=t;s.fullscreen?e=document.body:(e.setAttribute("old-position",e.style.position),e.style.position="relative"),o&&e.appendChild(h)},updated(e,t){const{value:o,modifiers:s}=t;if(s.fullscreen&&(e=document.body),o)e.setAttribute("old-position",e.style.position),e.style.position="relative",e.appendChild(h);else{const r=e.getAttribute("old-position");r?e.style.position=r:Reflect.deleteProperty(e.style,"position"),e.contains(h)&&e.removeChild(h)}}}},Ie=[ye,oe,Le],be=e=>{Ie.map(t=>{e.directive(t.name,t.options)})},y=S(ge);y.use(re());y.use(be);y.use(T);y.use(he,{"code-editor":I(()=>n(()=>import("./CodeEditor-B80mZOPu.js"),__vite__mapDeps([68,6,1,2]))),"color-picker":I(()=>n(()=>import("./ColorPicker-CIinLWch.js"),__vite__mapDeps([69,1,2,7,70]))),"image-picker":I(()=>n(()=>import("./ImagePicker-Dj0S5PoD.js"),__vite__mapDeps([14,15,1,2,7,16])))});y.mount("#app");fe();export{n as _,_e as a,q as b,N as c,Ae as g,we as i,me as j,a as r,Oe as s,B as u};
