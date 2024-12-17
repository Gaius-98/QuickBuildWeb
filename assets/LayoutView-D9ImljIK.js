function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HorizontalSplitLayout-CIB8zCux.js","assets/.pnpm-Btz5KtF6.js","assets/.pnpm-Zb8q9_k-.css","assets/LayoutOpt-BDZmXImA.js","assets/index-BAc6hcjb.js","assets/index-Ciuqiyus.css","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LayoutOpt-B509qZBO.css","assets/HorizontalSplitLayout-XuvMTpnk.css","assets/VerticalStackLayout-D_RRj06O.js","assets/VerticalStackLayout-CGIqMD1j.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as k,i as B,_ as g}from"./index-BAc6hcjb.js";import{g as w,r as _,s as x,o as f,y as D,l as t,w as s,B as d,i as o,F,C as L,D as v,h as C,E as O,G as P,q as S,H as j}from"./.pnpm-Btz5KtF6.js";import{S as h}from"./SchemaForm-Inut6R1d.js";/* empty css                   */var z=(e=>(e.horizontal="horizontal",e.vertical="vertical",e))(z||{}),T=(e=>(e.light="light",e.dark="dark",e))(T||{});const I=w({__name:"LayoutThemeCfg",setup(e){const c=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{colorPrimary:{type:"string",label:"主题色",component:{name:"color-picker"}},layoutMode:{type:"radio",label:"布局方式",component:{buttonStyle:"solid",dataSource:Object.entries(z).map(([a,n])=>({value:n,label:a}))}}}}),m=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{headerBgColor:{type:"string",label:"背景色",component:{name:"color-picker"}},headerFontColor:{type:"string",label:"字体颜色",component:{name:"color-picker"}}}}),i=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{menuTheme:{type:"radio",label:"主题",component:{buttonStyle:"solid",dataSource:Object.entries(T).map(([a,n])=>({value:n,label:a}))}}}}),u=k(),{themeCfg:l}=x(u);return(a,n)=>{const r=L;return f(),D(F,null,[t(r,null,{default:s(()=>[d("主题配置")]),_:1}),t(o(h),{schema:c.value,"form-data":o(l),size:"small"},null,8,["schema","form-data"]),t(r,null,{default:s(()=>[d("顶栏配置")]),_:1}),t(o(h),{schema:m.value,"form-data":o(l)},null,8,["schema","form-data"]),t(r,null,{default:s(()=>[d("菜单配置")]),_:1}),t(o(h),{schema:i.value,"form-data":o(l)},null,8,["schema","form-data"])],64)}}}),q=w({__name:"LayoutView",setup(e){const c=k(),{isConfigVisible:m,themeCfg:i,systemSetting:u,userInfo:l}=x(c),{onCloseConfigDrawer:a,startUp:n}=c,r=v(()=>E[i.value.layoutMode]),A=v(()=>{const{projectWatermark:y}=u.value,{username:b,name:p}=l.value;return B(y)?`${b}(${p})`:""}),E={horizontal:S(()=>g(()=>import("./HorizontalSplitLayout-CIB8zCux.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),vertical:S(()=>g(()=>import("./VerticalStackLayout-D_RRj06O.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,10])))};return n(),(y,b)=>{const p=j,V=O;return f(),C(V,{content:A.value},{default:s(()=>[(f(),C(P(r.value))),t(p,{width:300,placement:"right",open:o(m),onClose:o(a),closable:!1,bodyStyle:{padding:"0 12px"}},{default:s(()=>[t(I)]),_:1},8,["open","onClose"])]),_:1},8,["content"])}}});export{q as default};
