function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LayoutView-CWYPLcjX.js","assets/.pnpm-Dxr3w8Wl.js","assets/.pnpm-Zb8q9_k-.css","assets/SchemaForm-D0X6zbl5.js","assets/SchemaForm-qY4A0LYZ.css","assets/HomeView-CrO9bept.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/HomeView-BZVYe-oM.css","assets/BlankView-EXMC-o2X.js","assets/MenuView-BOZIq7NI.js","assets/menu-DgXy12dB.js","assets/MenuView-C-lAJoZ-.css","assets/UserView-CPaUJXYC.js","assets/ImagePicker-DonJIlb2.js","assets/resource-CT9A_B_7.js","assets/ImagePicker-BymuNb7A.css","assets/UserView-B-rC9g3J.css","assets/OrgView-lkoXTz-l.js","assets/OrgView-CauDlU9N.css","assets/DictView-BOXhPmZK.js","assets/dict-DLC_qMc5.js","assets/DictView-CS-YSwt_.css","assets/RoleView-jhW-xVcd.js","assets/RoleView-DRAH-v6M.css","assets/ResourceView-DioBm7b8.js","assets/ResourceView-DNv5c5j5.css","assets/SettingView-DMyCCdzP.js","assets/SettingView-B6rrPwn_.css","assets/LoginLog-BC2MguiF.js","assets/LoginLog-CwrlciHu.css","assets/OptLog-DsKWkrTX.js","assets/OptLog-CPYCv5Kw.css","assets/NoticeView-COoNAhqX.js","assets/notice-oW2A0Ip_.js","assets/NoticeView-CmygozyV.css","assets/NotifyMessage-DdcJvO7f.js","assets/NotifyMessage-D0v_j2tx.css","assets/SystemInfo-Cumti8af.js","assets/SystemInfo-D-UYu0oL.css","assets/index-CPQZr2Py.js","assets/api-_Ifj3eiO.js","assets/api-HP53acZf.js","assets/index-ruL9Oq-g.css","assets/index-D4ZrgM4m.js","assets/index-BW-cck-c.css","assets/FormList-B3QJ62Jm.js","assets/LowCodeForm.vue_vue_type_script_setup_true_lang-YHi4o9OI.js","assets/FormList-b5LwEYh2.css","assets/index-JTdHG_t3.js","assets/index-DxKfFVKR.js","assets/IframeView-Dz_DnN_C.js","assets/NotFound-D3WZAhX5.js","assets/LoginView-CTbx8nHQ.js","assets/LoginView-BV5eXu7I.css","assets/FormEditor-Bw_u5pTs.js","assets/FormEditor-3nrNq0UR.css","assets/TableDesign-Dzi60FEj.js","assets/TableDesign-CpQkMALf.css","assets/index-l08n1uAR.js","assets/index-WUpSjRVe.css","assets/CodeEditor-CGUkjVZ2.js","assets/ColorPicker-DR-ttA0J.js","assets/ColorPicker-DW5i1AY4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var x=Object.defineProperty;var F=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var k=(e,t,o)=>(F(e,typeof t!="symbol"?t+"":t,o),o);import{a as D,c as $,b as W,d as Z,e as L,f as H,r as d,u as w,g as K,s as S,o as G,h as J,w as Q,i as E,j as X,z as Y,k as ee,_ as te,l as oe,m as q,n as ne,S as re,Z as se,p as ae,q as T}from"./.pnpm-Dxr3w8Wl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const ie="modulepreload",ce=function(e){return"/"+e},C={},r=function(t,o,s){let n=Promise.resolve();if(o&&o.length>0){const a=document.getElementsByTagName("link");n=Promise.all(o.map(i=>{if(i=ce(i),i in C)return;C[i]=!0;const m=i.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(!!s)for(let l=a.length-1;l>=0;l--){const _=a[l];if(_.href===i&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":ie,m||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),m)return new Promise((l,_)=>{u.addEventListener("load",l),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>t()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},ue=(e,t,o=1)=>{D.set(e,t.toString(),{expires:o})},me=e=>D.get(e),le=e=>{D.remove(e)};class pe{constructor(){k(this,"_token","");const t=me("admin-token");t&&(this._token=t)}set(t){ue("admin-token",t),this._token=t}get(){return this._token}remove(){le("admin-token"),this._token=null}}const B=new pe,de=[{path:"/",name:"layout",component:()=>r(()=>import("./LayoutView-CWYPLcjX.js"),__vite__mapDeps([0,1,2,3,4])),redirect:{path:"/home"},children:[{path:"/home",name:"home",component:()=>r(()=>import("./HomeView-CrO9bept.js"),__vite__mapDeps([5,1,2,6,7,4]))},{path:"/system",name:"system",component:()=>r(()=>import("./BlankView-EXMC-o2X.js"),__vite__mapDeps([8,6,1,2])),children:[{path:"menu",name:"menu",component:()=>r(()=>import("./MenuView-BOZIq7NI.js"),__vite__mapDeps([9,10,1,2,6,11]))},{path:"user",name:"user",component:()=>r(()=>import("./UserView-CPaUJXYC.js"),__vite__mapDeps([12,13,14,1,2,6,15,16]))},{path:"org",name:"org",component:()=>r(()=>import("./OrgView-lkoXTz-l.js"),__vite__mapDeps([17,1,2,6,18]))},{path:"dict",name:"dict",component:()=>r(()=>import("./DictView-BOXhPmZK.js"),__vite__mapDeps([19,20,1,2,6,21]))},{path:"role",name:"role",component:()=>r(()=>import("./RoleView-jhW-xVcd.js"),__vite__mapDeps([22,10,1,2,6,23]))},{path:"resource",name:"resource",component:()=>r(()=>import("./ResourceView-DioBm7b8.js"),__vite__mapDeps([24,14,1,2,6,25]))},{path:"setting",name:"setting",component:()=>r(()=>import("./SettingView-DMyCCdzP.js"),__vite__mapDeps([26,1,2,6,27,15]))},{path:"login-log",name:"loginLog",component:()=>r(()=>import("./LoginLog-BC2MguiF.js"),__vite__mapDeps([28,1,2,6,29]))},{path:"opt-log",name:"optLog",component:()=>r(()=>import("./OptLog-DsKWkrTX.js"),__vite__mapDeps([30,1,2,6,31]))},{path:"notice",name:"notice",component:()=>r(()=>import("./NoticeView-COoNAhqX.js"),__vite__mapDeps([32,33,1,2,6,34]))},{path:"notice-message",name:"noticeMessage",component:()=>r(()=>import("./NotifyMessage-DdcJvO7f.js"),__vite__mapDeps([35,33,1,2,6,36]))},{path:"system-info",name:"systemInfo",component:()=>r(()=>import("./SystemInfo-Cumti8af.js"),__vite__mapDeps([37,1,2,6,38]))}]},{path:"/data",name:"data",component:()=>r(()=>import("./BlankView-EXMC-o2X.js"),__vite__mapDeps([8,6,1,2])),children:[{path:"dataset",name:"dataset",component:()=>r(()=>import("./index-CPQZr2Py.js"),__vite__mapDeps([39,40,41,1,2,6,42]))},{path:"datasource",name:"datasource",component:()=>r(()=>import("./index-D4ZrgM4m.js"),__vite__mapDeps([43,41,1,2,6,44]))}]},{path:"/lowcode",name:"lowcode",component:()=>r(()=>import("./BlankView-EXMC-o2X.js"),__vite__mapDeps([8,6,1,2])),children:[{path:"form",name:"form",component:()=>r(()=>import("./FormList-B3QJ62Jm.js"),__vite__mapDeps([45,46,1,2,6,47]))},{path:"table",name:"table",component:()=>r(()=>import("./index-JTdHG_t3.js"),__vite__mapDeps([48,1,2]))},{path:"dashboard",name:"dashboard",component:()=>r(()=>import("./index-DxKfFVKR.js"),__vite__mapDeps([49,1,2]))}]},{path:"/apply",name:"apply",children:[{path:"iframe",name:"iframe",component:()=>r(()=>import("./IframeView-Dz_DnN_C.js"),__vite__mapDeps([50,1,2])),props:e=>e.query}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>r(()=>import("./NotFound-D3WZAhX5.js"),__vite__mapDeps([51,6,1,2]))}]},{path:"/login",name:"login",component:()=>r(()=>import("./LoginView-CTbx8nHQ.js"),__vite__mapDeps([52,1,2,6,53]))},{path:"/design",name:"design",component:()=>r(()=>import("./BlankView-EXMC-o2X.js"),__vite__mapDeps([8,6,1,2])),children:[{path:"form",name:"form-design",component:()=>r(()=>import("./FormEditor-Bw_u5pTs.js"),__vite__mapDeps([54,1,2,6,46,3,4,20,55])),props:e=>e.query},{path:"table",name:"table-design",component:()=>r(()=>import("./TableDesign-Dzi60FEj.js"),__vite__mapDeps([56,1,2,6,3,4,57])),props:e=>e.query},{path:"dataset",name:"dataset-design",component:()=>r(()=>import("./index-l08n1uAR.js"),__vite__mapDeps([58,41,1,2,40,6,59,4])),props:e=>e.query}]}],I=$({history:W("/"),routes:de});I.beforeEach((e,t,o)=>{e.path=="/login"||B.get()?o():o("/login")});const _e=e=>{const{type:t,address:o,openType:s}=e;switch(t){case"front":s=="_self"?I.push({path:o,query:{menuId:e.id}}):s=="_blank"&&window.open(o,"_blank");break;case"iframe":I.push({path:"/apply/iframe",query:{id:encodeURIComponent(o),menuId:e.id}});break}},A=Z.create({baseURL:"/prod",timeout:6e4});A.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${B.get()}`,e),e=>e);A.interceptors.response.use(e=>{const{code:t,msg:o}=e.data;return t!=200&&L.error(o),e.data},e=>{var t,o;return L.error(((t=e.response)==null?void 0:t.data).msg||e.message),((o=e.response)==null?void 0:o.data).code==403&&_e({type:"front",openType:"_self",address:"/login"}),Promise.reject(e)});const c=e=>new Promise((t,o)=>{A.request(e).then(s=>{t(s)},s=>{o(s)})}),ge={getMenu:()=>c({url:"/menu",method:"get"})},fe={getList:e=>c({method:"get",url:"user/list",params:e}),getDetail:e=>c({method:"get",url:"user/detail",params:{userId:e}}),getUserInfo:()=>c({method:"get",url:"auth/userInfo"}),remove:e=>c({method:"get",url:"user/remove",params:{userId:e}}),add:e=>c({method:"post",url:"user/register",data:e}),update:e=>c({method:"post",url:"user/update",data:e}),getRoleDict:()=>c({method:"get",url:"role/dict"})},N={getDict:e=>c({method:"get",url:"/dict/dictByType",params:{dictType:e}}),getSetting:e=>c({method:"get",url:"/setting/byType",params:{type:e}}),getOrgTree:e=>c({url:"org/orgTree",method:"get",params:{keyword:e}}),getNotice:()=>c({url:"notice/list/ByUser/limit",method:"get"}),getDatasetDict:()=>c({url:"dataset/dict",method:"get"}),getFieldByDatasetId:e=>c({url:"dataset/getField",method:"get",params:{id:e}}),getPreviewByDatasetId:e=>c({method:"get",url:"dataset/runById",params:{id:e}}),getDataSourceDict:()=>c({method:"get",url:"datasource/list",params:{keyword:""}}),getTableInfo:e=>c({method:"get",url:"datasource/getAllTable",params:{id:e}}),getColumnInfo:(e,t)=>c({method:"get",url:"datasource/getColumnByTable",params:{id:e,tableName:t}}),getSourceData:(e,t)=>c({method:"get",url:"datasource/run",params:{id:e,tableName:t}})},U=H("system",()=>{const e=d([]),t=d(!1),o=()=>{t.value=!0},s=()=>{t.value=!1},n=d("zh"),a=()=>{n.value=="en"?n.value="zh":n.value="en"},i=w("gaius-theme-json",{projectName:"gaius-admin",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"gaius-admin"}),m=d({}),p=d({}),f=d([]),u=d({name:"",status:"",sortNum:0}),l=d({list:[],total:0}),_=w("gaius-permissions",[]),P=d(!1),j=()=>{P.value=!P.value},z=g=>{m.value=g},b=async()=>{const{data:g}=await ge.getMenu();e.value=g},O=async()=>{const{data:{user:g,roles:y,permissions:V,org:M}}=await fe.getUserInfo();p.value=g,f.value=y,u.value=M,_.value=V},R=async()=>{const{code:g,data:y,msg:V}=await N.getNotice();g==200&&(l.value.list=y.data,l.value.total=y.total)};return{menuTree:e,isConfigVisible:t,local:n,onOpenConfigDrawer:o,onCloseConfigDrawer:s,onToggleLocal:a,themeCfg:i,collapsed:P,onToggleCollapsed:j,startUp:async()=>{await b(),await O(),await R()},getMenu:b,userInfo:p,getUserInfo:O,permissionInfo:_,systemSetting:m,setSystemSetting:z,orgInfo:u,roleInfo:f,getNoticeList:R,noticeInfo:l}}),he=K({__name:"App",setup(e){const t=d("middle");N.getSetting("system").then(i=>{const{code:m,data:p,msg:f}=i;if(m==200){let u=document.querySelector('link[rel="icon"]');u.href=p.projectLogo;let l=document.querySelector("title");l.innerText=p.projectName,s(p)}else L.error("获取系统配置失败")});const o=U(),{setSystemSetting:s}=o,{local:n,themeCfg:a}=S(o);return(i,m)=>{const p=ee("router-view"),f=te;return G(),J(f,{locale:E(n)=="en"?E(X):E(Y),"component-size":t.value,theme:{token:{colorPrimary:E(a).colorPrimary}}},{default:Q(()=>[oe(p)]),_:1},8,["locale","component-size","theme"])}}}),ve=()=>{const e=document.querySelector(".pre-loading");e&&e.remove()},Ve=(e,t)=>t.split(".").reduce((s,n)=>{if(s!=null)return s[n]||null},e),ke=(e,t,o)=>{const s=t.split(".");s.reduce((n,a,i)=>(i===s.length-1?n[a]=o||void 0:n[a]||(n[a]={}),n[a]),e)},we=e=>{if(typeof e=="string")return Number(e)!==0;if(typeof e=="number")return e!==0},ye={install:(e,t)=>{e.provide("sfProvideEL",t)}},Ee={name:"has-perm",options:{beforeMount(e,t){const o=U(),{permissionInfo:s}=S(o);!s.value.includes(t.value)&&!s.value.includes("*")&&(e.style.display="none")}}},Ie={render:e=>ne(re)},Pe=()=>{const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",zIndex:2e3,top:0,left:0,right:0,bottom:0,backgroudColor:"rgba(0,0,0,.2)",display:"flex",alignItems:"center",justifyContent:"center"}),e},h=Pe(),Te=q(Ie);Te.mount(h);const Le={name:"loading",options:{beforeMount(e,t){const{value:o,modifiers:s}=t;s.fullscreen?e=document.body:(e.setAttribute("old-position",e.style.position),e.style.position="relative"),o&&e.appendChild(h)},updated(e,t){const{value:o,modifiers:s}=t;if(s.fullscreen&&(e=document.body),o)e.setAttribute("old-position",e.style.position),e.style.position="relative",e.appendChild(h);else{const n=e.getAttribute("old-position");n?e.style.position=n:Reflect.deleteProperty(e.style,"position"),e.contains(h)&&e.removeChild(h)}}}},De=[Ee,se,Le],Ae=e=>{De.map(t=>{e.directive(t.name,t.options)})},v=q(he);v.use(ae());v.use(Ae);v.use(I);v.use(ye,{"code-editor":T(()=>r(()=>import("./CodeEditor-CGUkjVZ2.js"),__vite__mapDeps([60,1,2]))),"color-picker":T(()=>r(()=>import("./ColorPicker-DR-ttA0J.js"),__vite__mapDeps([61,1,2,6,62]))),"image-picker":T(()=>r(()=>import("./ImagePicker-DonJIlb2.js"),__vite__mapDeps([13,14,1,2,6,15])))});v.mount("#app");ve();export{r as _,fe as a,B as b,N as c,Ve as g,we as i,_e as j,c as r,ke as s,U as u};
