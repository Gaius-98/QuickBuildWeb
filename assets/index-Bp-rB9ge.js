import{a as S}from"./api-CtdN3pmO.js";import{d as P}from"./api-18TOfXOm.js";import{g as K,at as O,$ as U,r as l,a0 as W,o as d,y as f,l as s,w as a,a1 as X,a3 as j,B as r,K as G,a4 as k,h as p,T as H,a5 as v,F as D,e as J,L as Q,X as Y,M as Z,W as ee,a6 as te,a7 as ae,a8 as oe}from"./.pnpm-CdxUtEZU.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C-JjtMWW.js";const se={class:"dataset"},de={class:"tools"},ce={key:0},re=K({__name:"index",setup(ie){const h=O(),n=U({keyword:"",pageNumber:1,pageSize:20}),w=l([]),F=l([{title:"数据集名称",key:"datasetName",dataIndex:"datasetName"},{title:"关联数据源",key:"datasourceId",dataIndex:"datasourceId"},{title:"状态",key:"status",dataIndex:"status"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),g=l(!1),x=l(),z=()=>{var e;(e=x.value)==null||e.resetFields(),u()},C=l(0),B=()=>{n.pageNumber=1,n.pageSize=20,u()},L=e=>{const{current:t,pageSize:o}=e;n.pageNumber=t,n.pageSize=o,u()},u=()=>{g.value=!0,S.getList(n).then(e=>{const{code:t,data:o}=e;t==200&&(w.value=o.data,C.value=o.total),g.value=!1})},b=l([]),$=e=>{var t;return(t=b.value.find(o=>o.id===e))==null?void 0:t.datasourceName},T=async e=>{const{code:t,msg:o,data:c}=await S.remove(e.id);t==200&&(J.success(c),u())},V=async e=>{const{id:t}=e,c=h.resolve({path:"/design/dataset",query:{type:"edit",id:t}});window.open(c.href,"_blank")};W(()=>{u(),P.getList("").then(e=>{const{code:t,data:o,msg:c}=e;t==200&&(b.value=o)})});const R=()=>{const e=h.resolve({path:"/design/dataset",query:{type:"add"}});window.open(e.href,"_blank")};return(e,t)=>{const o=Q,c=Y,_=Z,q=ee,I=X,N=te,A=ae,E=oe,y=j("has-perm");return d(),f("div",se,[s(I,{class:"search-area"},{default:a(()=>[s(q,{ref_key:"searchFormRef",ref:x,model:n,layout:"inline",onFinish:B},{default:a(()=>[s(c,{label:"数据集名称",name:"keyword"},{default:a(()=>[s(o,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=i=>n.keyword=i)},null,8,["value"])]),_:1}),s(c,null,{default:a(()=>[s(_,{type:"primary","html-type":"submit"},{default:a(()=>[r("搜索")]),_:1}),s(_,{style:{margin:"0 8px"},onClick:z},{default:a(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s(I,null,{default:a(()=>[G("div",de,[k((d(),p(_,{type:"primary",onClick:t[1]||(t[1]=i=>R())},{default:a(()=>[r("新增")]),_:1})),[[y,"lowcode:dataset:add"]])]),s(E,{loading:g.value,columns:F.value,"data-source":w.value,scroll:{y:600},onChange:L,pagination:{current:n.pageNumber,total:C.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:a(({column:i,record:m})=>[i.key=="datasourceId"?(d(),f("div",ce,H($(m.datasourceId)),1)):v("",!0),i.key=="status"?(d(),f(D,{key:1},[m.status=="1"?(d(),p(N,{key:0,color:"#87d068"},{default:a(()=>[r("启用")]),_:1})):(d(),p(N,{key:1,color:"#f50"},{default:a(()=>[r("停用")]),_:1}))],64)):v("",!0),i.key=="action"?(d(),f(D,{key:2},[k((d(),p(_,{type:"link",onClick:M=>V(m)},{default:a(()=>[r("编辑")]),_:2},1032,["onClick"])),[[y,"lowcode:dataset:update"]]),s(A,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:M=>T(m)},{default:a(()=>[k((d(),p(_,{type:"link",danger:""},{default:a(()=>[r("删除")]),_:1})),[[y,"lowcode:dataset:remove"]])]),_:2},1032,["onConfirm"])],64)):v("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),fe=ne(re,[["__scopeId","data-v-ce51cd70"]]);export{fe as default};
