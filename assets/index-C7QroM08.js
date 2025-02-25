import{a as S}from"./api-BCXOVTOy.js";import{d as O}from"./api-BtlMa35g.js";import{u as P}from"./nodemodule-vue-router@4.3.0_vue@3.4.21-BC_007Jj.js";import{g as j,F as G,h as K,I as U,B as H,i as J,T as Q,j as W,a as X}from"./nodemodule-ant-design-vue@4.1.2_vue@3.4.21-DQ6gDd-0.js";import{d as Y,b as Z,K as f,c as s,aI as a,G as d,M as ee,y as k,a2 as u,N as v,F,z as te,L as r}from"./nodemodule-@vue_runtime-core@3.4.21-Cnn673wu.js";import{a as ae,r as l}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";import{O as oe}from"./nodemodule-@vue_shared@3.4.21-Ctf17_ps.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./iconfont-BCn86eVw.js";import"./nodemodule-axios@1.6.8-BZ84_VUH.js";import"./nodemodule-js-cookie@3.0.5-Cz0CWeBA.js";import"./nodemodule-@babel_runtime@7.26.9-Bq4_u9L9.js";import"./nodemodule-@vue_runtime-dom@3.4.21-CDjXREoQ.js";import"./nodemodule-@ant-design_icons-vue@7.0.1_vue@3.4.21-CO80cFpd.js";import"./nodemodule-@ant-design_icons-svg@4.4.2-C9VH68wD.js";import"./nodemodule-@ant-design_colors@6.0.0-CBJ--Aym.js";import"./nodemodule-@ctrl_tinycolor@3.6.1-DOFZgDuz.js";import"./nodemodule-lodash-es@4.17.21-DcfALcKD.js";import"./nodemodule-resize-observer-polyfill@1.5.1-B1PUzC5B.js";import"./nodemodule-dayjs@1.11.13-B6I98uus.js";import"./nodemodule-classnames@2.5.1-BK5ccKcQ.js";import"./nodemodule-throttle-debounce@5.0.2-CUWDS_la.js";import"./nodemodule-async-validator@4.2.5-9PlIezaS.js";import"./nodemodule-scroll-into-view-if-needed@2.2.31-CLVC0ehY.js";import"./nodemodule-compute-scroll-into-view@1.0.20-1gs_hJI2.js";import"./nodemodule-vue-types@3.0.2_vue@3.4.21-CF28atMM.js";import"./nodemodule-dom-align@1.12.4-CRCehRfe.js";import"./nodemodule-@emotion_hash@0.9.2-WldOFDRm.js";import"./nodemodule-@emotion_unitless@0.8.1-sScrWPmR.js";import"./nodemodule-stylis@4.3.6-D5iaQeiq.js";const se={class:"dataset"},re={class:"tools"},ie={key:0},de=Y({__name:"index",setup(ce){const h=P(),n=ae({keyword:"",pageNumber:1,pageSize:20}),x=l([]),z=l([{title:"数据集名称",key:"datasetName",dataIndex:"datasetName"},{title:"关联数据源",key:"datasourceId",dataIndex:"datasourceId"},{title:"状态",key:"status",dataIndex:"status"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),g=l(!1),C=l(),D=()=>{var e;(e=C.value)==null||e.resetFields(),m()},w=l(0),B=()=>{n.pageNumber=1,n.pageSize=20,m()},L=e=>{const{current:t,pageSize:o}=e;n.pageNumber=t,n.pageSize=o,m()},m=()=>{g.value=!0,S.getList(n).then(e=>{const{code:t,data:o}=e;t==200&&(x.value=o.data,w.value=o.total),g.value=!1})},I=l([]),T=e=>{var t;return(t=I.value.find(o=>o.id===e))==null?void 0:t.datasourceName},V=async e=>{const{code:t,msg:o,data:i}=await S.remove(e.id);t==200&&(X.success(i),m())},$=async e=>{const{id:t}=e,i=h.resolve({path:"/design/dataset",query:{type:"edit",id:t}});window.open(i.href,"_blank")};Z(()=>{m(),O.getList("").then(e=>{const{code:t,data:o,msg:i}=e;t==200&&(I.value=o)})});const R=()=>{const e=h.resolve({path:"/design/dataset",query:{type:"add"}});window.open(e.href,"_blank")};return(e,t)=>{const o=U,i=K,p=H,q=G,b=j,N=Q,A=W,E=J,y=te("has-perm");return r(),f("div",se,[s(b,{class:"search-area"},{default:a(()=>[s(q,{ref_key:"searchFormRef",ref:C,model:n,layout:"inline",onFinish:B},{default:a(()=>[s(i,{label:"数据集名称",name:"keyword"},{default:a(()=>[s(o,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=c=>n.keyword=c)},null,8,["value"])]),_:1}),s(i,null,{default:a(()=>[s(p,{type:"primary","html-type":"submit"},{default:a(()=>[d("搜索")]),_:1}),s(p,{style:{margin:"0 8px"},onClick:D},{default:a(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s(b,null,{default:a(()=>[ee("div",re,[k((r(),u(p,{type:"primary",onClick:t[1]||(t[1]=c=>R())},{default:a(()=>[d("新增")]),_:1})),[[y,"lowcode:dataset:add"]])]),s(E,{loading:g.value,columns:z.value,"data-source":x.value,scroll:{y:600},onChange:L,pagination:{current:n.pageNumber,total:w.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:a(({column:c,record:_})=>[c.key=="datasourceId"?(r(),f("div",ie,oe(T(_.datasourceId)),1)):v("",!0),c.key=="status"?(r(),f(F,{key:1},[_.status=="1"?(r(),u(N,{key:0,color:"#87d068"},{default:a(()=>[d("启用")]),_:1})):(r(),u(N,{key:1,color:"#f50"},{default:a(()=>[d("停用")]),_:1}))],64)):v("",!0),c.key=="action"?(r(),f(F,{key:2},[k((r(),u(p,{type:"link",onClick:M=>$(_)},{default:a(()=>[d("编辑")]),_:2},1032,["onClick"])),[[y,"lowcode:dataset:update"]]),s(A,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:M=>V(_)},{default:a(()=>[k((r(),u(p,{type:"link",danger:""},{default:a(()=>[d("删除")]),_:1})),[[y,"lowcode:dataset:remove"]])]),_:2},1032,["onConfirm"])],64)):v("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),Me=ne(de,[["__scopeId","data-v-ce51cd70"]]);export{Me as default};
