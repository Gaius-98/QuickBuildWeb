function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LayoutView-BWmlU-Jy.js","assets/.pnpm-Bqj5ZitX.js","assets/.pnpm-DxkFTwjz.css","assets/SchemaForm-T2B-CJGP.js","assets/SchemaForm-jQfF6YcI.css","assets/HomeView-QTl6KNSK.js","assets/CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-CQpl3N5c.js","assets/BlankView-CzJzaJuc.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/MenuView-CKAjDpHr.js","assets/menu-Cq83xy6w.js","assets/MenuView-C-lAJoZ-.css","assets/UserView-DlD0gZNZ.js","assets/ImagePicker-HGwSlBkh.js","assets/resource-DMa99rkk.js","assets/ImagePicker-BymuNb7A.css","assets/UserView-B-rC9g3J.css","assets/OrgView-C_5_bk3U.js","assets/OrgView-CauDlU9N.css","assets/DictView-BnsGfCbC.js","assets/dict-B8wzmY-C.js","assets/DictView-CS-YSwt_.css","assets/RoleView-BOQQo-6h.js","assets/RoleView-DRAH-v6M.css","assets/ResourceView-dPEFaor8.js","assets/ResourceView-DNv5c5j5.css","assets/SettingView-SayQ-kIJ.js","assets/SettingView-B6rrPwn_.css","assets/LoginLog-iFYicFeU.js","assets/LoginLog-CwrlciHu.css","assets/OptLog-KmVCSVpI.js","assets/OptLog-CPYCv5Kw.css","assets/NoticeView-aRmmWMDJ.js","assets/notice-CqYeBWpf.js","assets/NoticeView-CmygozyV.css","assets/NotifyMessage-Dcs86ULh.js","assets/NotifyMessage-D0v_j2tx.css","assets/SystemInfo-Bka8-jWD.js","assets/SystemInfo-D-UYu0oL.css","assets/index-C3LMcwt5.js","assets/api-CiGUpLO4.js","assets/api-D3ji7G46.js","assets/index-2Nc_zoV2.css","assets/index-JtInn9Mv.js","assets/index-Co5mZu65.css","assets/FormList-CwDFKEc2.js","assets/form-Dcbtzh_u.js","assets/FormList-C7RBvqZE.css","assets/index-B_72K3kq.js","assets/index-BC9c2EC0.js","assets/IframeView-B8F-cu5k.js","assets/NotFound-CbgxbG5X.js","assets/LoginView-DjfK0o-c.js","assets/LoginView-BV5eXu7I.css","assets/FormEditor-FWbkFPDN.js","assets/FormEditor-DwTeWvEH.css","assets/index-TcAeIdvA.js","assets/index-uepKQG6o.css","assets/CodeEditor-DQbda5FN.js","assets/ColorPicker-D03TwEg2.js","assets/ColorPicker-DW5i1AY4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var $=Object.defineProperty;var x=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var w=(e,t,o)=>(x(e,typeof t!="symbol"?t+"":t,o),o);import{a as b,c as F,b as W,d as Z,e as T,f as H,r as d,u as k,g as K,s as S,o as G,h as J,w as Q,i as y,j as X,z as Y,k as ee,_ as te,l as oe,v as ne,m as U,n as re,S as se,Z as ie,p as ae,q as P}from"./.pnpm-Bqj5ZitX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const ce="modulepreload",le=function(e){return"/"+e},C={},s=function(t,o,r){let n=Promise.resolve();if(o&&o.length>0){const i=document.getElementsByTagName("link");n=Promise.all(o.map(a=>{if(a=le(a),a in C)return;C[a]=!0;const m=a.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const _=i[u];if(_.href===a&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${p}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":ce,m||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),m)return new Promise((u,_)=>{c.addEventListener("load",u),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},me=(e,t,o=1)=>{b.set(e,t.toString(),{expires:o})},ue=e=>b.get(e),pe=e=>{b.remove(e)};class de{constructor(){w(this,"_token","");const t=ue("admin-token");t&&(this._token=t)}set(t){me("admin-token",t),this._token=t}get(){return this._token}remove(){pe("admin-token"),this._token=null}}const q=new de,_e=[{path:"/",name:"layout",component:()=>s(()=>import("./LayoutView-BWmlU-Jy.js"),__vite__mapDeps([0,1,2,3,4])),redirect:{path:"/home"},children:[{path:"/home",name:"home",component:()=>s(()=>import("./HomeView-QTl6KNSK.js"),__vite__mapDeps([5,3,1,2,4,6]))},{path:"/system",name:"system",component:()=>s(()=>import("./BlankView-CzJzaJuc.js"),__vite__mapDeps([7,8,1,2])),children:[{path:"menu",name:"menu",component:()=>s(()=>import("./MenuView-CKAjDpHr.js"),__vite__mapDeps([9,10,1,2,8,11]))},{path:"user",name:"user",component:()=>s(()=>import("./UserView-DlD0gZNZ.js"),__vite__mapDeps([12,13,14,1,2,8,15,16]))},{path:"org",name:"org",component:()=>s(()=>import("./OrgView-C_5_bk3U.js"),__vite__mapDeps([17,1,2,8,18]))},{path:"dict",name:"dict",component:()=>s(()=>import("./DictView-BnsGfCbC.js"),__vite__mapDeps([19,20,1,2,8,21]))},{path:"role",name:"role",component:()=>s(()=>import("./RoleView-BOQQo-6h.js"),__vite__mapDeps([22,10,1,2,8,23]))},{path:"resource",name:"resource",component:()=>s(()=>import("./ResourceView-dPEFaor8.js"),__vite__mapDeps([24,14,1,2,8,25]))},{path:"setting",name:"setting",component:()=>s(()=>import("./SettingView-SayQ-kIJ.js"),__vite__mapDeps([26,1,2,8,27,15]))},{path:"login-log",name:"loginLog",component:()=>s(()=>import("./LoginLog-iFYicFeU.js"),__vite__mapDeps([28,1,2,8,29]))},{path:"opt-log",name:"optLog",component:()=>s(()=>import("./OptLog-KmVCSVpI.js"),__vite__mapDeps([30,1,2,8,31]))},{path:"notice",name:"notice",component:()=>s(()=>import("./NoticeView-aRmmWMDJ.js"),__vite__mapDeps([32,33,1,2,8,34]))},{path:"notice-message",name:"noticeMessage",component:()=>s(()=>import("./NotifyMessage-Dcs86ULh.js"),__vite__mapDeps([35,33,1,2,8,36]))},{path:"system-info",name:"systemInfo",component:()=>s(()=>import("./SystemInfo-Bka8-jWD.js"),__vite__mapDeps([37,1,2,8,38]))}]},{path:"/data",name:"data",component:()=>s(()=>import("./BlankView-CzJzaJuc.js"),__vite__mapDeps([7,8,1,2])),children:[{path:"dataset",name:"dataset",component:()=>s(()=>import("./index-C3LMcwt5.js"),__vite__mapDeps([39,40,41,1,2,8,42]))},{path:"datasource",name:"datasource",component:()=>s(()=>import("./index-JtInn9Mv.js"),__vite__mapDeps([43,41,1,2,8,44]))}]},{path:"/lowcode",name:"lowcode",component:()=>s(()=>import("./BlankView-CzJzaJuc.js"),__vite__mapDeps([7,8,1,2])),children:[{path:"form",name:"form",component:()=>s(()=>import("./FormList-CwDFKEc2.js"),__vite__mapDeps([45,46,1,2,8,47]))},{path:"table",name:"table",component:()=>s(()=>import("./index-B_72K3kq.js"),__vite__mapDeps([48,1,2]))},{path:"dashboard",name:"dashboard",component:()=>s(()=>import("./index-BC9c2EC0.js"),__vite__mapDeps([49,1,2]))}]},{path:"/apply",name:"apply",children:[{path:"iframe",name:"iframe",component:()=>s(()=>import("./IframeView-B8F-cu5k.js"),__vite__mapDeps([50,1,2])),props:e=>e.query}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>s(()=>import("./NotFound-CbgxbG5X.js"),__vite__mapDeps([51,8,1,2]))}]},{path:"/login",name:"login",component:()=>s(()=>import("./LoginView-DjfK0o-c.js"),__vite__mapDeps([52,1,2,8,53]))},{path:"/design",name:"design",component:()=>s(()=>import("./BlankView-CzJzaJuc.js"),__vite__mapDeps([7,8,1,2])),children:[{path:"form",name:"form-design",component:()=>s(()=>import("./FormEditor-FWbkFPDN.js"),__vite__mapDeps([54,1,2,8,46,3,4,20,55]))},{path:"dataset",name:"dataset-design",component:()=>s(()=>import("./index-TcAeIdvA.js"),__vite__mapDeps([56,41,1,2,40,8,57])),props:e=>e.query}]}],L=F({history:W("/"),routes:_e});L.beforeEach((e,t,o)=>{e.path=="/login"||q.get()?o():o("/login")});const fe=e=>{const{type:t,address:o,openType:r}=e;switch(t){case"front":r=="_self"?L.push({path:o,query:{menuId:e.id}}):r=="_blank"&&window.open(o,"_blank");break;case"iframe":L.push({path:"/apply/iframe",query:{id:encodeURIComponent(o),menuId:e.id}});break}},R=Z.create({baseURL:"/prod",timeout:6e4});R.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${q.get()}`,e),e=>e);R.interceptors.response.use(e=>{const{code:t,msg:o}=e.data;return t!=200&&T.error(o),e.data},e=>{var t,o;return T.error(((t=e.response)==null?void 0:t.data).msg||e.message),((o=e.response)==null?void 0:o.data).code==403&&fe({type:"front",openType:"_self",address:"/login"}),Promise.reject(e)});const l=e=>new Promise((t,o)=>{R.request(e).then(r=>{t(r)},r=>{o(r)})}),he={getMenu:()=>l({url:"/menu",method:"get"})},ge={getList:e=>l({method:"get",url:"user/list",params:e}),getDetail:e=>l({method:"get",url:"user/detail",params:{userId:e}}),getUserInfo:()=>l({method:"get",url:"auth/userInfo"}),remove:e=>l({method:"get",url:"user/remove",params:{userId:e}}),add:e=>l({method:"post",url:"user/register",data:e}),update:e=>l({method:"post",url:"user/update",data:e}),getRoleDict:()=>l({method:"get",url:"role/dict"})},j={getDict:e=>l({method:"get",url:"/dict/dictByType",params:{dictType:e}}),getSetting:e=>l({method:"get",url:"/setting/byType",params:{type:e}}),getOrgTree:e=>l({url:"org/orgTree",method:"get",params:{keyword:e}}),getNotice:()=>l({url:"notice/list/ByUser/limit",method:"get"})},B=H("system",()=>{const e=d([]),t=d(!1),o=()=>{t.value=!0},r=()=>{t.value=!1},n=d("zh"),i=()=>{n.value=="en"?n.value="zh":n.value="en"},a=k("gaius-theme-json",{projectName:"gaius-admin",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"gaius-admin"}),m=d({}),p=d({}),h=d([]),c=d({name:"",status:"",sortNum:0}),u=d({list:[],total:0}),_=k("gaius-permissions",[]),I=d(!1),N=()=>{I.value=!I.value},z=f=>{m.value=f},A=async()=>{const{data:f}=await he.getMenu();e.value=f},O=async()=>{const{data:{user:f,roles:v,permissions:V,org:M}}=await ge.getUserInfo();p.value=f,h.value=v,c.value=M,_.value=V},D=async()=>{const{code:f,data:v,msg:V}=await j.getNotice();f==200&&(u.value.list=v.data,u.value.total=v.total)};return{menuTree:e,isConfigVisible:t,local:n,onOpenConfigDrawer:o,onCloseConfigDrawer:r,onToggleLocal:i,themeCfg:a,collapsed:I,onToggleCollapsed:N,startUp:async()=>{await A(),await O(),await D()},getMenu:A,userInfo:p,getUserInfo:O,permissionInfo:_,systemSetting:m,setSystemSetting:z,orgInfo:c,roleInfo:h,getNoticeList:D,noticeInfo:u}}),ve=K({__name:"App",setup(e){const t=d("middle");j.getSetting("system").then(a=>{const{code:m,data:p,msg:h}=a;if(m==200){let c=document.querySelector('link[rel="icon"]');c.href=p.projectLogo;let u=document.querySelector("title");u.innerText=p.projectName,r(p)}else T.error("获取系统配置失败")});const o=B(),{setSystemSetting:r}=o,{local:n,themeCfg:i}=S(o);return(a,m)=>{const p=ee("router-view"),h=te;return G(),J(h,{locale:y(n)=="en"?y(X):y(Y),"component-size":t.value,theme:{token:{colorPrimary:y(i).colorPrimary}}},{default:Q(()=>[oe(p)]),_:1},8,["locale","component-size","theme"])}}}),we=(e,t,o="json")=>{const r=document.createElement("a"),n=new Blob([e]);t=`${decodeURI(encodeURI(t||ne()))}.${o}`,r.href=URL.createObjectURL(n),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)},ye=()=>{const e=document.querySelector(".pre-loading");e&&e.remove()},ke=(e,t)=>t.split(".").reduce((r,n)=>{if(r!=null)return r[n]||null},e),Ce=(e,t,o)=>{const r=t.split(".");r.reduce((n,i,a)=>(a===r.length-1?n[i]=o||void 0:n[i]||(n[i]={}),n[i]),e)},Se=e=>{if(typeof e=="string")return Number(e)!==0;if(typeof e=="number")return e!==0},Ee={install:(e,t)=>{e.provide("sfProvideEL",t)}},Le={name:"has-perm",options:{beforeMount(e,t){const o=B(),{permissionInfo:r}=S(o);!r.value.includes(t.value)&&!r.value.includes("*")&&(e.style.display="none")}}},Ie={render:e=>re(se)},Pe=()=>{const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",zIndex:2e3,top:0,left:0,right:0,bottom:0,backgroudColor:"rgba(0,0,0,.2)",display:"flex",alignItems:"center",justifyContent:"center"}),e},E=Pe(),Te=U(Ie);Te.mount(E);const be={name:"loading",options:{beforeMount(e,t){const{value:o,modifiers:r}=t;r.fullscreen?e=document.body:(e.setAttribute("old-position",e.style.position),e.style.position="relative"),o&&e.appendChild(E)},update(e,t){const{value:o,modifiers:r}=t;if(r.fullscreen&&(e=document.body),o)e.setAttribute("old-position",e.style.position),e.style.position="relative",e.appendChild(E);else{const n=e.getAttribute("old-position");n?e.style.position=n:Reflect.deleteProperty(e.style,"position"),e.removeChild(E)}}}},Re=[Le,ie,be],Ae=e=>{Re.map(t=>{e.directive(t.name,t.options)})},g=U(ve);g.use(ae());g.use(Ae);g.use(L);g.use(Ee,{"code-editor":P(()=>s(()=>import("./CodeEditor-DQbda5FN.js"),__vite__mapDeps([58,6,1,2]))),"color-picker":P(()=>s(()=>import("./ColorPicker-D03TwEg2.js"),__vite__mapDeps([59,1,2,8,60]))),"image-picker":P(()=>s(()=>import("./ImagePicker-HGwSlBkh.js"),__vite__mapDeps([13,14,1,2,8,15])))});g.mount("#app");ye();export{s as _,ge as a,q as b,j as c,we as d,ke as g,Se as i,fe as j,l as r,Ce as s,B as u};
