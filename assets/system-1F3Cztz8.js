import{d as k}from"./nodemodule-pinia@2.1.7_typescript@5.4.2_vue@3.4.21-DRg4DShQ.js";import{a as M,c as N}from"./iconfont-BCn86eVw.js";import{a as U}from"./user-mylcbu45.js";import{u as w}from"./nodemodule-@vueuse_core@10.9.0_vue@3.4.21-CS6n5tIH.js";import{r as e}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";const q={getMenu:()=>M({url:"/menu",method:"get"})},V=k("system",()=>{const l=e([]),s=e(!1),y=()=>{s.value=!0},h=()=>{s.value=!1},t=e("zh"),C=()=>{t.value=="en"?t.value="zh":t.value="en"},b=w("gaius-theme-json",{projectName:"quick-build",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"quick-build"}),i=e({}),c=e({}),u=e([]),f=e({name:"",status:"",sortNum:0}),n=e({list:[],total:0}),m=w("gaius-permissions",[]),r=e(!1),I=()=>{r.value=!r.value},S=o=>{i.value=o},g=async()=>{const{data:o}=await q.getMenu();l.value=o},p=async()=>{const{data:{user:o,roles:a,permissions:v,org:T}}=await U.getUserInfo();c.value=o,u.value=a,f.value=T,m.value=v},d=async()=>{const{code:o,data:a,msg:v}=await N.getNotice();o==200&&(n.value.list=a.data,n.value.total=a.total)};return{menuTree:l,isConfigVisible:s,local:t,onOpenConfigDrawer:y,onCloseConfigDrawer:h,onToggleLocal:C,themeCfg:b,collapsed:r,onToggleCollapsed:I,startUp:async()=>{await g(),await p(),await d()},getMenu:g,userInfo:c,getUserInfo:p,permissionInfo:m,systemSetting:i,setSystemSetting:S,orgInfo:f,roleInfo:u,getNoticeList:d,noticeInfo:n}});export{V as u};
