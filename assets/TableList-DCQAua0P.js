import{a as ce}from"./table-u6ZV_K0d.js";import{g as _e,v as Ie,r as i,D as ee,e as z,P as pe,o as s,y,h as p,w as t,l as e,F as A,K as te,B as f,V as N,L as ae,aD as De,R as re,n as de,az as me,W as ve,N as Ne,aE as $e,X as fe,ap as ye,Y as ge,aq as ke,$ as he,Q as Ce,a9 as be,a2 as xe,ar as Te,O as Fe,H as Se,T as Ee,J as Le,i as Q,aw as Oe,ax as ze,ay as Ue,U as Ve,aj as Pe,aA as Be,a1 as Re,aB as Ae,a0 as qe,C as Me,aC as We}from"./.pnpm-BowExx5l.js";import{c as O}from"./index-CF0l1GTJ.js";import{_ as je}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-Bv8lnjPX.js";import{F as He}from"./FlowExecutor-2WvtH4zx.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-bBjVr7rH.js";const Je={class:"low-code-table"},Ke={key:0,class:"tools"},Qe=["href"],Xe=_e({__name:"LowCodeTable",props:{id:{default:""}},setup(se){const X=se,{id:Y}=Ie(X);i();const v=i(),x=i(),$=i(),q=i(),g=i(),ne=ee(()=>{var a;return(a=x.value)==null?void 0:a.showPagination}),oe=ee(()=>{var a;return((a=x.value)==null?void 0:a.showFilter)&&v.value&&v.value.length>0}),U=ee(()=>{var l;const a=(l=$.value)==null?void 0:l.filter(n=>n.position=="header");return a&&a.length>0}),le=ee(()=>{var l;const a=(l=$.value)==null?void 0:l.filter(n=>n.position=="row");return a&&a.length>0});if(Y.value)O.getLowCodeTableDetail(Y.value).then(a=>{const{code:l,data:n,msg:o}=a;l==200?(v.value=n.filter,x.value=n.global,$.value=n.action,g.value=n.dataSource,W(v.value),r(v.value),q.value=T(n.columns),F()):z.error(o)});else throw new Error("id is required");const w=i(!1),G=i([]),c=i({pageNumber:1,pageSize:10}),M=i(),V=i(0),W=a=>{a.forEach(l=>{l.defaultValue&&(c.value[l.field]=l.defaultValue)})},j=i({}),_=i({}),r=a=>{const l=a.filter(o=>{if(o.type=="select"&&o.dictType=="dict")return o}).map(o=>o.dict),n=a.filter(o=>{if(o.type=="select"&&o.dictType=="col")return o}).map(o=>o.field);l.length>0&&O.getDict(l).then(o=>{const{code:b,data:D,msg:m}=o;b==200?j.value=D:z.error(m)}),n.length>0&&n.forEach(o=>{O.getLowCodeColData({sourceId:g.value.sourceId,tableName:g.value.tableName,field:o}).then(b=>{const{code:D,data:m,msg:k}=b;D==200?_.value[o]=m:z.error(k)})})},T=a=>{const l=a.map(n=>({title:n.title,key:n.id,dataIndex:n.dataIndex,width:n.width,align:n.align,fixed:n.fixed,type:n.type}));return le.value&&l.push({title:"操作",key:"_action_",dataIndex:"_action_",width:250,fixed:"right"}),l},F=()=>{w.value=!0,O.getLowCodeTableList({sourceId:g.value.sourceId,tableName:g.value.tableName,pageNumber:c.value.pageNumber,pageSize:c.value.pageSize,paramsData:c.value}).then(a=>{const{code:l,data:n,msg:o}=a;w.value=!1,l==200?(G.value=n.data,V.value=n.total):z.error(o)})},Z=()=>{var a;(a=M.value)==null||a.resetFields(),F()},I=a=>{const{current:l,pageSize:n}=a;c.value.pageNumber=l,c.value.pageSize=n,F()},E=i({}),H=()=>{E.value={}},P=(a,l)=>{const{customEvent:n,builtInEvents:o,eventFlow:b,formId:D}=a;if(l&&(E.value=De(l)),n)try{if(!b)return console.log("未配置工作流");new He(b).run()}catch{}else{if(["add","edit"].includes(o)){let m=o=="add"?O.insertLowCodeTable:O.updateLowCodeTable;re.confirm({title:o=="add"?"新增":"编辑",content:de(je,{id:D,formData:E.value}),onOk(){m({sourceId:g.value.sourceId,tableName:g.value.tableName,data:E.value}).then(k=>{const{code:L,data:B,msg:u}=k;H(),L==200&&(z.success(B),F())})},onCancel(){H()}})}o=="delete"&&re.confirm({title:"您确定要删除该数据吗?",icon:de(me),content:"该操作无法还原！",onOk(){O.removeLowCodeTable({sourceId:g.value.sourceId,tableName:g.value.tableName,data:E.value}).then(m=>{const{code:k,data:L,msg:B}=m;H(),k==200&&(z.success(L),F())})},onCancel(){}})}};return pe(()=>{}),(a,l)=>{const n=ve,o=Ne,b=$e,D=fe,m=ye,k=ge,L=ke,B=he,u=Ce,h=be,J=xe;return s(),y("div",Je,[oe.value?(s(),p(u,{key:0,class:"search-area"},{default:t(()=>[e(B,{ref_key:"searchFormRef",ref:M,model:c.value,onFinish:F},{default:t(()=>[e(L,{gutter:24},{default:t(()=>[(s(!0),y(A,null,te(v.value,d=>(s(),p(m,{span:6,key:d.id},{default:t(()=>[e(D,{label:d.label,name:d.field},{default:t(()=>[d.type=="input"?(s(),p(n,{key:0,allowClear:!0,value:c.value[d.field],"onUpdate:value":S=>c.value[d.field]=S},null,8,["value","onUpdate:value"])):d.type=="select"?(s(),p(o,{key:1,value:c.value[d.field],"onUpdate:value":S=>c.value[d.field]=S,options:d.dictType=="dict"?j.value[d.dict]:_.value[d.field],allowClear:!0},null,8,["value","onUpdate:value","options"])):(s(),p(b,{key:2,value:c.value[d.field],"onUpdate:value":S=>c.value[d.field]=S},null,8,["value","onUpdate:value"]))]),_:2},1032,["label","name"])]),_:2},1024))),128)),e(m,{span:6,style:{"text-align":"right"}},{default:t(()=>[e(k,{type:"primary","html-type":"submit"},{default:t(()=>[f("搜索")]),_:1}),e(k,{style:{margin:"0 8px"},onClick:Z},{default:t(()=>[f(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})):N("",!0),e(u,null,{default:t(()=>{var d,S,ie;return[U.value?(s(),y("div",Ke,[(s(!0),y(A,null,te((d=$.value)==null?void 0:d.filter(C=>C.position=="header"),C=>(s(),p(k,{key:C.id,onClick:K=>P(C)},{default:t(()=>[f(ae(C.name),1)]),_:2},1032,["onClick"]))),128))])):N("",!0),e(J,{loading:w.value,columns:q.value,"data-source":G.value,scroll:{y:500},onChange:I,pagination:ne.value&&{current:c.value.pageNumber,total:V.value,showSizeChanger:!0,pageSize:c.value.pageSize},bordered:(S=x.value)==null?void 0:S.showBordered,size:(ie=x.value)==null?void 0:ie.size},{bodyCell:t(({column:C,record:K})=>{var ue;return[C.type==="image"?(s(),p(h,{key:0,src:K[C.dataIndex]},null,8,["src"])):N("",!0),C.type==="link"?(s(),y("a",{key:1,href:K[C.dataIndex]},ae(K[C.dataIndex]),9,Qe)):N("",!0),C.key=="_action_"?(s(!0),y(A,{key:2},te((ue=$.value)==null?void 0:ue.filter(R=>R.position=="row"),R=>(s(),p(k,{type:"link",key:R.id,onClick:ot=>P(R,K),danger:R.builtInEvents==="delete"},{default:t(()=>[f(ae(R.name),1)]),_:2},1032,["onClick","danger"]))),128)):N("",!0)]}),_:1},8,["loading","columns","data-source","pagination","bordered","size"])]}),_:1})])}}}),Ye=we(Xe,[["__scopeId","data-v-f4a293d1"]]),Ge={class:"lowcode-table"},Ze={class:"tools"},et={key:1},tt={key:0,class:"contain"},at={key:0},nt=_e({__name:"TableList",setup(se){const X=Te(),Y=i([{title:"列表id",key:"id",dataIndex:"id",ellipsis:!0},{title:"列表名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"备注",key:"remark",dataIndex:"remark",ellipsis:!0},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),v=Fe({keyword:"",pageNumber:1,pageSize:10}),x=i([]),$=i(0),q=i(!1),g=i(),ne=()=>{var _;(_=g.value)==null||_.resetFields(),w()},oe=()=>{z.success("复制成功！")},U=i("table"),le=()=>{U.value=="table"?U.value="visual":U.value="table"},w=()=>{q.value=!0,ce.getList(v).then(_=>{const{code:r,data:T}=_;r==200&&(x.value=T.data,$.value=T.total),q.value=!1})},G=()=>{const _=X.resolve({path:"/design/table"});window.open(_.href,"_blank")},c=_=>{const r=X.resolve({path:"/design/table",query:{id:_}});window.open(r.href,"_blank")},M=_=>{ce.remove(_).then(r=>{const{code:T}=r;T==200&&w()})},V=i(!1);i({});const W=i(""),j=_=>{V.value=!0,W.value=_};return pe(()=>{w()}),(_,r)=>{const T=ve,F=fe,Z=ye,I=ge,E=ke,H=he,P=Ce,a=Be,l=Re,n=Ae,o=qe,b=Me,D=be,m=xe,k=We,L=Se,B=Ee("copy");return s(),y("div",Ge,[e(P,{class:"search-area"},{default:t(()=>[e(H,{ref_key:"searchFormRef",ref:g,model:v,onFinish:w},{default:t(()=>[e(E,{gutter:24},{default:t(()=>[e(Z,{span:4},{default:t(()=>[e(F,{label:"列表名称",name:"keyword"},{default:t(()=>[e(T,{value:v.keyword,"onUpdate:value":r[0]||(r[0]=u=>v.keyword=u)},null,8,["value"])]),_:1})]),_:1}),e(Z,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(I,{type:"primary","html-type":"submit"},{default:t(()=>[f("搜索")]),_:1}),e(I,{style:{margin:"0 8px"},onClick:ne},{default:t(()=>[f(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,null,{default:t(()=>[Le("div",Ze,[e(I,{type:"primary",onClick:G},{default:t(()=>[f("新增")]),_:1}),e(I,{onClick:le,type:"link",style:{float:"right"}},{default:t(()=>[e(Q(Oe))]),_:1})]),x.value.length===0?(s(),p(a,{key:0})):(s(),y("div",et,[U.value=="visual"?(s(),y("div",tt,[(s(!0),y(A,null,te(x.value,u=>(s(),p(P,{hoverable:!0,key:u.id},{actions:t(()=>[e(Q(ze),{key:"view",title:"预览",onClick:h=>j(u.id)},null,8,["onClick"]),e(Q(Ue),{key:"edit",title:"编辑",onClick:h=>c(u.id)},null,8,["onClick"]),e(l,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:h=>M(u.id)},{default:t(()=>[e(Q(me),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(n,{title:u.name,description:u.description},null,8,["title","description"])]),_:2},1024))),128))])):(s(),p(m,{key:1,columns:Y.value,"data-source":x.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:u,record:h})=>[u.key=="id"?Ve((s(),y("span",at,[f(ae(h.id)+" ",1),e(Q(Pe),{style:{cursor:"pointer"},onClick:r[1]||(r[1]=J=>oe())})])),[[B,h.id]]):N("",!0),u.key=="status"?(s(),y(A,{key:1},[h.status?(s(),p(o,{key:0,color:"#87d068"},{default:t(()=>[f("启用")]),_:1})):(s(),p(o,{key:1,color:"#f50"},{default:t(()=>[f("停用")]),_:1}))],64)):N("",!0),u.key=="action"?(s(),y(A,{key:2},[e(I,{type:"link",onClick:J=>j(h.id)},{default:t(()=>[f("预览")]),_:2},1032,["onClick"]),e(b,{type:"vertical"}),e(I,{type:"link",onClick:J=>c(h.id)},{default:t(()=>[f("编辑")]),_:2},1032,["onClick"]),e(b,{type:"vertical"}),e(l,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:J=>M(h.id)},{default:t(()=>[e(I,{type:"link",danger:""},{default:t(()=>[f("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):N("",!0),u.key=="img"?(s(),p(D,{key:3,src:h.img,height:"100px",width:"100%"},null,8,["src"])):N("",!0)]),_:1},8,["columns","data-source"]))])),e(k,{style:{display:"flex","justify-content":"flex-end"},current:v.pageNumber,"onUpdate:current":r[2]||(r[2]=u=>v.pageNumber=u),total:$.value,"show-less-items":"",onChange:r[3]||(r[3]=u=>w())},null,8,["current","total"])]),_:1}),e(L,{open:V.value,"onUpdate:open":r[4]||(r[4]=u=>V.value=u),placement:"right",title:"预览",width:"1920px",height:"900px",footer:null},{default:t(()=>[(s(),p(Ye,{id:W.value,key:W.value},null,8,["id"]))]),_:1},8,["open"])])}}}),_t=we(nt,[["__scopeId","data-v-2643fd94"]]);export{_t as default};
