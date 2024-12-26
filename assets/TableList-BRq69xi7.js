import{a as te}from"./table-CohuIgF0.js";import{g as oe,v as ge,r as i,e as z,P as le,o,y as g,l as e,w as t,F as E,K as Q,h as y,B as v,J as se,L as X,V as F,aD as ke,R as ae,n as ne,az as ie,W as ue,N as he,aE as Ce,X as ce,ap as re,Y as de,aq as _e,$ as pe,Q as me,a9 as fe,a2 as ve,ar as be,O as xe,H as we,T as Ie,i as P,aw as $e,ax as Ne,ay as De,U as Se,aj as Te,aA as Fe,a1 as Le,aB as Oe,a0 as ze,C as Ee,aC as Ue}from"./.pnpm-BrZBTk42.js";import{c as O}from"./index-Bhz39haW.js";import{_ as Ve}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-BdDWr2qk.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-B0YUtAbg.js";const Re={class:"low-code-table"},Ae={class:"tools"},Be=["href"],Pe=oe({__name:"LowCodeTable",props:{id:{default:""}},setup(ee){const q=ee,{id:M}=ge(q);i();const k=i(),L=i(),D=i(),U=i(),h=i();if(M.value)O.getLowCodeTableDetail(M.value).then(c=>{const{code:a,data:n,msg:_}=c;a==200?(k.value=n.filter,Y(k.value),W(k.value),L.value=n.global,D.value=n.action,U.value=A(n.columns,D.value),h.value=n.dataSource,w()):z.error(_)});else throw new Error("id is required");const V=i(!1),j=i([]),u=i({pageNumber:1,pageSize:10}),J=i(),$=i(0),Y=c=>{c.forEach(a=>{a.defaultValue&&(u.value[a.field]=a.defaultValue)})},R=i({}),W=c=>{const a=c.filter(n=>{if(n.type=="select")return n}).map(n=>n.dict);a.length>0&&O.getDict(a).then(n=>{const{code:_,data:d,msg:S}=n;_==200?R.value=d:z.error(S)})},A=(c,a)=>{const n=a.filter(d=>d.position=="row"),_=c.map(d=>({title:d.title,key:d.id,dataIndex:d.dataIndex,width:d.width,align:d.align,fixed:d.fixed,type:d.type}));return n.length>0&&_.push({title:"操作",key:"_action_",dataIndex:"_action_",width:250,fixed:"right"}),_},w=()=>{V.value=!0,O.getLowCodeTableList({sourceId:h.value.sourceId,tableName:h.value.tableName,pageNumber:u.value.pageNumber,pageSize:u.value.pageSize,paramsData:u.value}).then(c=>{const{code:a,data:n,msg:_}=c;V.value=!1,a==200?(j.value=n.data,$.value=n.total):z.error(_)})},H=()=>{var c;(c=J.value)==null||c.resetFields(),w()},m=c=>{const{current:a,pageSize:n}=c;u.value.pageNumber=a,u.value.pageSize=n,w()},s=i({}),C=()=>{s.value={}},K=(c,a)=>{const{customEvent:n,builtInEvents:_,eventFlowId:d,formId:S}=c;if(a&&(s.value=ke(a)),!n){if(["add","edit"].includes(_)){let I=_=="add"?O.insertLowCodeTable:O.updateLowCodeTable;ae.confirm({title:_=="add"?"新增":"编辑",content:ne(Ve,{id:S,formData:s.value}),onOk(){I({sourceId:h.value.sourceId,tableName:h.value.tableName,data:s.value}).then(b=>{const{code:N,data:T,msg:B}=b;C(),N==200&&(z.success(T),w())})},onCancel(){C()}})}_=="delete"&&ae.confirm({title:"您确定要删除该数据吗?",icon:ne(ie),content:"该操作无法还原！",onOk(){O.removeLowCodeTable({sourceId:h.value.sourceId,tableName:h.value.tableName,data:s.value}).then(I=>{const{code:b,data:N,msg:T}=I;C(),b==200&&(z.success(N),w())})},onCancel(){}})}};return le(()=>{}),(c,a)=>{const n=ue,_=he,d=Ce,S=ce,I=re,b=de,N=_e,T=pe,B=me,G=fe,Z=ve;return o(),g("div",Re,[e(B,{class:"search-area"},{default:t(()=>[e(T,{ref_key:"searchFormRef",ref:J,model:u.value,onFinish:w},{default:t(()=>[e(N,{gutter:24},{default:t(()=>[(o(!0),g(E,null,Q(k.value,p=>(o(),y(I,{span:6,key:p.id},{default:t(()=>[e(S,{label:p.label,name:p.field},{default:t(()=>[p.type=="input"?(o(),y(n,{key:0,allowClear:!0,value:u.value[p.field],"onUpdate:value":r=>u.value[p.field]=r},null,8,["value","onUpdate:value"])):p.type=="select"?(o(),y(_,{key:1,value:u.value[p.field],"onUpdate:value":r=>u.value[p.field]=r,options:R.value[p.dict],allowClear:!0},null,8,["value","onUpdate:value","options"])):(o(),y(d,{key:2,value:u.value[p.field],"onUpdate:value":r=>u.value[p.field]=r},null,8,["value","onUpdate:value"]))]),_:2},1032,["label","name"])]),_:2},1024))),128)),e(I,{span:6,style:{"text-align":"right"}},{default:t(()=>[e(b,{type:"primary","html-type":"submit"},{default:t(()=>[v("搜索")]),_:1}),e(b,{style:{margin:"0 8px"},onClick:H},{default:t(()=>[v(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(B,null,{default:t(()=>{var p;return[se("div",Ae,[(o(!0),g(E,null,Q((p=D.value)==null?void 0:p.filter(r=>r.position=="header"),r=>(o(),y(b,{key:r.id,onClick:l=>K(r)},{default:t(()=>[v(X(r.name),1)]),_:2},1032,["onClick"]))),128))]),e(Z,{loading:V.value,columns:U.value,"data-source":j.value,scroll:{y:500},onChange:m,pagination:{current:u.value.pageNumber,total:$.value,showSizeChanger:!0,pageSize:u.value.pageSize}},{bodyCell:t(({column:r,record:l})=>{var f;return[r.type==="image"?(o(),y(G,{key:0,src:l[r.dataIndex]},null,8,["src"])):F("",!0),r.type==="link"?(o(),g("a",{key:1,href:l[r.dataIndex]},X(l[r.dataIndex]),9,Be)):F("",!0),r.key=="_action_"?(o(!0),g(E,{key:2},Q((f=D.value)==null?void 0:f.filter(x=>x.position=="row"),x=>(o(),y(b,{type:"link",key:x.id,onClick:Qe=>K(x,l),danger:x.builtInEvents==="delete"},{default:t(()=>[v(X(x.name),1)]),_:2},1032,["onClick","danger"]))),128)):F("",!0)]}),_:1},8,["loading","columns","data-source","pagination"])]}),_:1})])}}}),qe=ye(Pe,[["__scopeId","data-v-4d5164f2"]]),Me={class:"lowcode-table"},je={class:"tools"},Je={key:1},We={key:0,class:"contain"},He={key:0},Ke=oe({__name:"TableList",setup(ee){const q=be(),M=i([{title:"列表id",key:"id",dataIndex:"id",ellipsis:!0},{title:"列表名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"备注",key:"remark",dataIndex:"remark",ellipsis:!0},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),k=xe({keyword:"",pageNumber:1,pageSize:10}),L=i([]),D=i(0),U=i(!1),h=i(),V=()=>{var m;(m=h.value)==null||m.resetFields(),$()},j=()=>{z.success("复制成功！")},u=i("table"),J=()=>{u.value=="table"?u.value="visual":u.value="table"},$=()=>{U.value=!0,te.getList(k).then(m=>{const{code:s,data:C}=m;s==200&&(L.value=C.data,D.value=C.total),U.value=!1})},Y=()=>{const m=q.resolve({path:"/design/table"});window.open(m.href,"_blank")},R=m=>{const s=q.resolve({path:"/design/table",query:{id:m}});window.open(s.href,"_blank")},W=m=>{te.remove(m).then(s=>{const{code:C}=s;C==200&&$()})},A=i(!1);i({});const w=i(""),H=m=>{A.value=!0,w.value=m};return le(()=>{$()}),(m,s)=>{const C=ue,K=ce,c=re,a=de,n=_e,_=pe,d=me,S=Fe,I=Le,b=Oe,N=ze,T=Ee,B=fe,G=ve,Z=Ue,p=we,r=Ie("copy");return o(),g("div",Me,[e(d,{class:"search-area"},{default:t(()=>[e(_,{ref_key:"searchFormRef",ref:h,model:k,onFinish:$},{default:t(()=>[e(n,{gutter:24},{default:t(()=>[e(c,{span:4},{default:t(()=>[e(K,{label:"列表名称",name:"keyword"},{default:t(()=>[e(C,{value:k.keyword,"onUpdate:value":s[0]||(s[0]=l=>k.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(c,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(a,{type:"primary","html-type":"submit"},{default:t(()=>[v("搜索")]),_:1}),e(a,{style:{margin:"0 8px"},onClick:V},{default:t(()=>[v(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(d,null,{default:t(()=>[se("div",je,[e(a,{type:"primary",onClick:Y},{default:t(()=>[v("新增")]),_:1}),e(a,{onClick:J,type:"link",style:{float:"right"}},{default:t(()=>[e(P($e))]),_:1})]),L.value.length===0?(o(),y(S,{key:0})):(o(),g("div",Je,[u.value=="visual"?(o(),g("div",We,[(o(!0),g(E,null,Q(L.value,l=>(o(),y(d,{hoverable:!0,key:l.id},{actions:t(()=>[e(P(Ne),{key:"view",title:"预览",onClick:f=>H(l.id)},null,8,["onClick"]),e(P(De),{key:"edit",title:"编辑",onClick:f=>R(l.id)},null,8,["onClick"]),e(I,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:f=>W(l.id)},{default:t(()=>[e(P(ie),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(b,{title:l.name,description:l.description},null,8,["title","description"])]),_:2},1024))),128))])):(o(),y(G,{key:1,columns:M.value,"data-source":L.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:l,record:f})=>[l.key=="id"?Se((o(),g("span",He,[v(X(f.id)+" ",1),e(P(Te),{style:{cursor:"pointer"},onClick:s[1]||(s[1]=x=>j())})])),[[r,f.id]]):F("",!0),l.key=="status"?(o(),g(E,{key:1},[f.status?(o(),y(N,{key:0,color:"#87d068"},{default:t(()=>[v("启用")]),_:1})):(o(),y(N,{key:1,color:"#f50"},{default:t(()=>[v("停用")]),_:1}))],64)):F("",!0),l.key=="action"?(o(),g(E,{key:2},[e(a,{type:"link",onClick:x=>H(f.id)},{default:t(()=>[v("预览")]),_:2},1032,["onClick"]),e(T,{type:"vertical"}),e(a,{type:"link",onClick:x=>R(f.id)},{default:t(()=>[v("编辑")]),_:2},1032,["onClick"]),e(T,{type:"vertical"}),e(I,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:x=>W(f.id)},{default:t(()=>[e(a,{type:"link",danger:""},{default:t(()=>[v("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):F("",!0),l.key=="img"?(o(),y(B,{key:3,src:f.img,height:"100px",width:"100%"},null,8,["src"])):F("",!0)]),_:1},8,["columns","data-source"]))])),e(Z,{style:{display:"flex","justify-content":"flex-end"},current:k.pageNumber,"onUpdate:current":s[2]||(s[2]=l=>k.pageNumber=l),total:D.value,"show-less-items":"",onChange:s[3]||(s[3]=l=>$())},null,8,["current","total"])]),_:1}),e(p,{open:A.value,"onUpdate:open":s[4]||(s[4]=l=>A.value=l),placement:"right",title:"预览",width:"1920px",height:"900px",footer:null},{default:t(()=>[e(qe,{id:w.value},null,8,["id"])]),_:1},8,["open"])])}}}),at=ye(Ke,[["__scopeId","data-v-28a95be8"]]);export{at as default};
