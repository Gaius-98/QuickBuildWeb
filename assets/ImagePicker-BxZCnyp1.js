import{a as w}from"./resource-ab5IlvRN.js";import{g as R,t as U,x as F,r as u,P as V,o as d,y as p,l as t,i as m,ab as q,ac as A,w as b,B as D,J as g,n as I,ad as E,F as J,K,A as T,ae as Y,e as j,a9 as G,Y as H,af as Q,R as W,ag as X,ah as Z}from"./.pnpm-Btz5KtF6.js";/* empty css                                                                    */import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BAc6hcjb.js";const ae=i=>(X("data-v-678baa60"),i=i(),Z(),i),te={class:"image-picker"},se=ae(()=>g("div",{class:"select-image-text"},"选择图片",-1)),oe={key:1,class:"preview-image"},ne={class:"image-container"},le={class:"image-list"},ie=["src","onClick"],ce=R({__name:"ImagePicker",props:{value:{type:String,required:!0},valueModifiers:{}},emits:U(["change"],["update:value"]),setup(i,{emit:N}){const _=F(i,"value"),v=u([]),o=u({pageSize:3,pageNumber:1,keyword:""}),C=u(0),P="/prod",r=u(""),L=e=>{r.value=e},M=()=>{o.value.pageNumber++,h()},h=()=>{w.getList(o.value).then(e=>{const{code:a,data:n,msg:l}=e;a==200&&(v.value=n.data,C.value=n.total)})},O=()=>{o.value.pageNumber--,h()},S=e=>{const a=new FormData;a.append("file",e.file,encodeURIComponent(e.file.name)),w.add(a).then(n=>{const{code:l,data:k,msg:x}=n;l==200&&(f(`${P}/${k.path}`),j.success(x),c.value=!1)})},c=u(!1),B=()=>{c.value=!0},$=N,f=e=>{_.value=e,$("change",e)},z=()=>{f(r.value),y()},y=()=>{r.value="",c.value=!1};return V(()=>{h()}),(e,a)=>{const n=G,l=H,k=Q,x=W;return d(),p("div",te,[_.value?(d(),p("div",oe,[t(m(A),{onClick:a[0]||(a[0]=s=>f("")),style:{position:"absolute",top:"5px",right:"5px",color:"#999","z-index":"99"}}),t(n,{src:_.value,width:"100px",height:"100px"},null,8,["src"])])):(d(),p("div",{key:0,class:"select-image",onClick:B},[t(m(q)),se])),t(x,{open:c.value,"onUpdate:open":a[1]||(a[1]=s=>c.value=s),title:"选择图片",onOk:z,onCancel:y},{default:b(()=>[t(k,{name:"file",accept:"image/*",customRequest:S,maxCount:"1",showUploadList:!1},{default:b(()=>[t(l,{type:"primary"},{default:b(()=>[D("自定义")]),_:1})]),_:1}),g("div",ne,[t(l,{type:"ghost",icon:I(m(E)),onClick:O,disabled:o.value.pageNumber==1},null,8,["icon","disabled"]),g("div",le,[(d(!0),p(J,null,K(v.value,s=>(d(),p("div",{key:s.id,class:T(["image-item",{selected:r.value==s.path}])},[g("img",{src:s.path,onClick:ue=>L(s.path),height:"100px",width:"100px"},null,8,ie)],2))),128))]),t(l,{type:"ghost",icon:I(m(Y)),onClick:M,disabled:o.value.pageSize*(o.value.pageNumber-1)+v.value.length==C.value},null,8,["icon","disabled"])])]),_:1},8,["open"])])}}}),_e=ee(ce,[["__scopeId","data-v-678baa60"]]);export{_e as default};
