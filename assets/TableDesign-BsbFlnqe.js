import{b3 as We,f as Le,r as g,aP as He,g as F,s as Y,v as V,o as d,y as C,l as t,i as l,aw as qe,J as S,L as O,w as n,az as je,aW as fe,A as Ge,aH as be,a1 as Z,D as _e,F as z,K as Q,b4 as X,ab as ee,B as R,b5 as Je,b6 as Ke,V as E,h as N,a9 as Qe,t as re,x as Xe,b7 as Ye,ar as Ze,P as me,U as et,aZ as pe,b0 as tt,H as lt,T as ot,b8 as ve,b9 as at,ba as nt,e as st,W as ut,N as it,X as dt,Y as ct,b2 as rt,aE as mt,a3 as pt,a4 as vt,aT as ft,$ as bt}from"./.pnpm-BrZBTk42.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as A}from"./index-CWlnBvbJ.js";import{S as J}from"./SchemaForm-m29k_Bsk.js";import{a as K}from"./table-Cc42EYq8.js";/* empty css                   */const _t=new We,M=_t,W=Le("tableDesign",()=>{const I=g([]),f=g({name:"",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),i=g([]),h=g({});return{tableCfg:f,setTableCfg:a=>{f.value=a},currentColumn:h,onSelectColumn:(a,r)=>{const b=r.findIndex(T=>T.id===a);b!=-1&&(h.value=r[b])},onRemoveColumn:(a,r)=>{const b=r.findIndex(T=>T.id===a);b!=-1&&r.splice(b,1)},onAddColumn:()=>{const a=new Date().getTime().toString().slice(-4);f.value.columns.push({id:He(),dataIndex:"field"+a,title:"列"+a,width:200})},tableData:I,onRefreshData:async a=>{},columnFields:i,onSetColumns:a=>{i.value=a},onAddBtn:a=>{f.value.action.push({id:new Date().getTime().toString(),name:"测试",position:a,eventFlowId:"",customEvent:!1,builtInEvents:"add",formId:""})},onRemoveBtn:a=>{const r=f.value.action.findIndex(b=>b.id==a);r!=-1&&f.value.action.splice(r,1)},onRemoveWidget:a=>{const r=f.value.filter.findIndex(b=>b.id==a);r!=-1&&f.value.filter.splice(r,1)}}}),gt={class:"custom-header-label",style:{flex:"1"}},yt=F({__name:"CustomColumnHeader",props:{params:{}},emits:["onRemove"],setup(I,{emit:f}){const i=W(),{currentColumn:h}=Y(i),w=I,{params:y}=V(w),D=()=>{M.onPublish("removeEvent",y.value)};return(s,x)=>{const k=Z;return d(),C("div",{class:Ge(["custom-header-item",l(h).dataIndex==l(y).column.getColId()?"active":""]),style:be([{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},{border:l(h).dataIndex==l(y).column.getColId()?"1px dashed #1677ff":"1px solid transparent"}])},[t(l(qe),{class:"move",style:{width:"20px",cursor:"move"}}),S("div",gt,O(l(y).displayName),1),t(k,{title:"确定要删除此列配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:x[0]||(x[0]=B=>D())},{default:n(()=>[t(l(je),{class:"remove",style:{width:"20px"},onClick:fe(()=>{},["stop"])})]),_:1})],6)}}}),Ct={class:"custom-opt-cell"},ht=["onClick"],wt=F({__name:"CustomOptCell",setup(I){const f=W(),{tableCfg:i}=Y(f),h=_e(()=>{var x;return(x=i.value.action)==null?void 0:x.filter(k=>k.position=="row")}),{onAddBtn:w,onRemoveBtn:y}=f,D=x=>{M.onPublish("open-btn-modal",x)},s=()=>{w("row")};return(x,k)=>{const B=Z;return d(),C("div",Ct,[(d(!0),C(z,null,Q(h.value,$=>(d(),C("div",{class:"btn",key:$.id},[S("a",{onClick:c=>D($)},O($.name),9,ht),t(B,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:c=>l(y)($.id)},{default:n(()=>[t(l(X),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),t(l(ee),{style:{cursor:"pointer"},onClick:k[0]||(k[0]=$=>s())})])}}}),xt={class:"custom-header-label",style:{flex:"1"}},It=F({__name:"CustomAddColumn",setup(I){const f=W(),{onAddColumn:i}=f;return(h,w)=>{const y=Ke;return d(),C("div",{class:"custom-header-item add-column",style:{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},onClick:w[0]||(w[0]=D=>l(i)())},[S("div",xt,[t(l(ee)),R(" 新增列 "),t(y,null,{title:n(()=>[R("用于新增列配置")]),default:n(()=>[t(l(Je))]),_:1})])])}}}),kt={class:"cell"},St={key:0},Dt=["href"],$t=F({__name:"CustomCellRender",props:{params:{}},setup(I){const f=I,{params:i}=V(f);return(h,w)=>{const y=Qe;return d(),C("div",kt,[l(i).colDef.cellRendererParams.type=="text"?(d(),C("span",St,O(l(i).value),1)):E("",!0),l(i).colDef.cellRendererParams.type=="image"?(d(),N(y,{key:1,src:l(i).value},null,8,["src"])):E("",!0),l(i).colDef.cellRendererParams.type=="link"?(d(),C("a",{key:2,href:l(i).value},O(l(i).value),9,Dt)):E("",!0)])}}}),Nt=F({__name:"AgTable",props:re({columnId:{default:"id"},tableData:{},height:{default:400}},{columns:{required:!0},columnsModifiers:{}}),emits:re(["onRemove","onClick"],["update:columns"]),setup(I,{emit:f}){M.onSubscribe("removeEvent",c=>{let a=c.column.getColId(),r=i.value.find(b=>b.dataIndex==a);r&&B(r)});const i=Xe(I,"columns"),h=I,{columnId:w,tableData:y}=V(h),D=_e(()=>{let c=i.value.map(a=>({field:a.dataIndex,colId:a.dataIndex,headerName:a.title,pinned:a.fixed=="none"?void 0:a.fixed,lockVisible:!0,headerComponent:yt,cellRenderer:$t,cellRendererParams:{type:a.type}}));return c.push({field:"_plus_",colId:"_plus",headerName:"新增列",lockVisible:!0,headerComponent:It}),c.push({field:"_opt_",colId:"_opt_",headerName:"操作",pinned:"right",lockVisible:!0,cellRenderer:wt}),c}),s=c=>{if(!c.finished)return;let a=[];c.api.getColumnState().forEach(r=>{let b=i.value.find(T=>T.dataIndex==r.colId);b&&a.push(b)}),i.value=a},x=c=>{if(!c.finished)return;let a=c.column.getColId(),r=i.value.findIndex(b=>b.dataIndex==a);r!=-1&&(i.value[r].width=c.column.getActualWidth())},k=f,B=c=>{k("onRemove",c)},$=c=>{let a=c.column.getId(),r=i.value.find(b=>b.dataIndex==a);k("onClick",r)};return(c,a)=>(d(),N(l(Ye),{rowData:l(y),columnDefs:D.value,style:be({height:c.height+"px"}),class:"ag-theme-quartz",onColumnMoved:s,onColumnResized:x,onColumnHeaderClicked:$},null,8,["rowData","columnDefs","style"]))}}),Rt=ge(Nt,[["__scopeId","data-v-5dd2184c"]]),Bt={class:"table-design"},Tt={class:"table-design-container"},At={class:"main-part"},Et={class:"filter-part"},Ft={class:"filter-container"},Pt=["onClick"],Ot={class:"add widget-item"},Ut={class:"tools-part"},zt={class:"tools-container"},Vt={class:"add button-item"},Mt={class:"table-part"},Wt=F({__name:"TableDesign",props:{id:{}},setup(I){const f=Ze();M.onSubscribe("open-btn-modal",u=>{ue(u)});const i=g([]);me(()=>{A.getDataSourceDict().then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(i.value=_)})});const h=I,{id:w}=V(h),y=g(!1),D=W(),{tableCfg:s,currentColumn:x}=Y(D),{onSelectColumn:k,onRemoveBtn:B,onRemoveColumn:$,onSetColumns:c,onRemoveWidget:a,onAddBtn:r,setTableCfg:b}=D;w.value?(y.value=!0,K.getDetail(w.value).then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(b(_),ae(),le(),y.value=!1)})):b({name:"未命名列表",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),window.name="table-design";const T=g([{label:"新增",value:"add"},{label:"编辑",value:"edit"},{label:"删除",value:"delete"}]),ye=()=>{var u;(u=s.value.filter)==null||u.push({id:new Date().getTime().toString(),type:"input",label:"文本",field:"field"})},Ce=()=>{window.open("/lowcode/table","quick-build")},he=u=>{k(u.id,s.value.columns),q.value=!0},we=u=>{$(u.id,s.value.columns)};g([]);const te=g([]),le=()=>{A.getSourceData(s.value.dataSource.sourceId,s.value.dataSource.tableName).then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(te.value=_)})},oe=g([]),ae=()=>{A.getTableInfo(s.value.dataSource.sourceId).then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(oe.value=_)})},ne=async()=>{const{code:u,data:e,msg:_}=await A.getColumnInfo(s.value.dataSource.sourceId,s.value.dataSource.tableName);return u==200?e.map(p=>({label:p.columnComment?`${p.columnComment}(${p.columnName})`:p.columnName,value:p.columnName})):[]},xe=()=>{A.getColumnInfo(s.value.dataSource.sourceId,s.value.dataSource.tableName).then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(s.value.columns=_.map(v=>({dataIndex:v.columnName,title:v.columnComment||v.columnName,id:v.columnName,width:200,type:"text",align:"left",fixed:"none"})),c(_.map(v=>({label:v.columnComment?`${v.columnComment}(${v.columnName})`:v.columnName,value:v.columnName}))))}),le()},Ie=()=>{r("header")},se=g([]),ke=()=>{A.getFormDict().then(u=>{const{code:e,data:_,msg:p}=u;e==200&&(se.value=_)})};me(()=>{ke()});const m=g({id:"",name:"",eventFlowId:"",position:"header",customEvent:!1,builtInEvents:"add",formId:""}),L=g(!1),Se=g([{label:"默认新增事件流",value:"add"},{label:"默认编辑事件流",value:"edit"},{label:"默认批量编辑事件流",value:"batchEdit"}]),ue=u=>{m.value=u,L.value=!0},De=u=>{f.push({path:"/design/flow",query:{id:u}})},$e=()=>{f.push({path:"/design/flow"})},ie=g({}),H=g(!1),Ne=g({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{id:{type:"string",label:"控件标识",component:{disabled:!0}},field:{type:"select",label:"字段名称",component:{asyncData:ne}},label:{type:"string",label:"文本标签"},type:{type:"radio",label:"控件类型",component:{dataSource:[{label:"输入框",value:"input"},{label:"选择框",value:"select"},{label:"日期框",value:"date"}],buttonStyle:"solid"}},dictType:{type:"radio",label:"字典类型",show:'"${formData.type}" == "select"',tooltip:"字典为系统的字典配置数据，列数据为当前配置字段的列数据",component:{dataSource:[{label:"字典",value:"dict"},{label:"列数据",value:"col"}],buttonStyle:"solid"}},dict:{type:"select",label:"字典",tooltip:"可以在系统配置自定义字典",show:'"${formData.type}" == "select" && "${formData.dictType}" == "builtIn"',component:{asyncData:async()=>{const{code:u,data:e,msg:_}=await A.getDictTypeList();return u==200?e.map(p=>({label:p.dictTypeDesc,value:p.dictType})):[]}}},defaultValue:{type:"string",label:"默认值"}}}),Re=g({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"80px"}}},properties:{dataIndex:{type:"select",label:"字段名",component:{asyncData:ne}},title:{type:"string",label:"列名"},width:{type:"number",label:"列宽"},align:{type:"radio",label:"对齐方式",component:{dataSource:[{value:"left",label:"左"},{value:"center",label:"居中"},{value:"right",label:"右"}],buttonStyle:"solid"}},fixed:{type:"radio",label:"固定列",component:{dataSource:[{value:"left",label:"左"},{value:"right",label:"右"},{value:"none",label:"不固定"}],buttonStyle:"solid"}},type:{type:"select",label:"列类型",component:{dataSource:[{value:"link",label:"链接"},{value:"image",label:"图片"},{value:"text",label:"文本"}]}}}}),Be=u=>{ie.value=u,H.value=!0},q=g(!1),j=g(!1),Te=g({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"120px"}}},properties:{showFilter:{type:"switch",label:"显示筛选面板"},showPagination:{type:"switch",label:"显示分页器"},showBordered:{type:"switch",label:"显示边框"},size:{type:"radio",label:"表格尺寸",component:{dataSource:[{label:"紧凑",value:"small"},{label:"默认",value:"middle"},{label:"宽松",value:"large"}],buttonStyle:"solid"}}}}),Ae=()=>{j.value=!0},Ee=()=>{y.value=!0,(w.value?K.update:K.add)(s.value).then(e=>{const{code:_,data:p,msg:v}=e;_==200&&st.success("保存成功"),y.value=!1})};return(u,e)=>{const _=ut,p=it,v=dt,P=ct,Fe=rt,Pe=tt,Oe=mt,de=Z,ce=pt,Ue=vt,ze=ft,Ve=bt,U=lt,Me=ot("loading");return d(),C(z,null,[et((d(),C("div",Bt,[t(Pe,{onBack:Ce,ghost:!1,style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"}},{title:n(()=>[t(_,{value:l(s).name,"onUpdate:value":e[0]||(e[0]=o=>l(s).name=o),bordered:!1,class:"table-name"},null,8,["value"])]),extra:n(()=>[t(Fe,{class:"extra"},{default:n(()=>[t(v,{label:"选择数据源"},{default:n(()=>[t(p,{value:l(s).dataSource.sourceId,"onUpdate:value":e[1]||(e[1]=o=>l(s).dataSource.sourceId=o),options:i.value,style:{width:"180px"},fieldNames:{label:"datasourceName",value:"id"},onChange:e[2]||(e[2]=o=>ae())},null,8,["value","options"])]),_:1}),t(v,{label:"选择表名"},{default:n(()=>[t(p,{value:l(s).dataSource.tableName,"onUpdate:value":e[3]||(e[3]=o=>l(s).dataSource.tableName=o),options:oe.value,style:{width:"180px"},fieldNames:{label:"tableName",value:"tableName"},onChange:e[4]||(e[4]=o=>xe())},null,8,["value","options"])]),_:1}),t(P,{type:"primary",onClick:Ae},{default:n(()=>[R("全局配置")]),_:1}),t(P,{onClick:e[5]||(e[5]=o=>Ee()),type:"primary",class:"save-btn"},{default:n(()=>[R(" 保存 ")]),_:1})]),_:1})]),_:1}),S("div",Tt,[S("div",At,[S("div",Et,[S("div",Ft,[t(l(pe),{list:l(s).filter,"onUpdate:list":e[7]||(e[7]=o=>l(s).filter=o),class:"widget-container",animation:"300",group:{name:"widget",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:n(()=>[(d(!0),C(z,null,Q(l(s).filter,o=>(d(),C("div",{class:"widget-item",key:o.id,onClick:G=>Be(o)},[t(l(ve),{class:"move-handle",style:{cursor:"pointer"}}),t(v,{label:o.label,name:o.field},{default:n(()=>[o.type=="input"?(d(),N(_,{key:0})):o.type=="select"?(d(),N(p,{key:1})):(d(),N(Oe,{key:2}))]),_:2},1032,["label","name"]),t(de,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:G=>l(a)(o.id)},{default:n(()=>[t(l(X),{class:"remove-btn",onClick:fe(()=>{},["stop"])})]),_:2},1032,["onConfirm"])],8,Pt))),128)),S("div",Ot,[t(P,{type:"primary",onClick:e[6]||(e[6]=o=>ye())},{default:n(()=>[R(" 添加控件 ")]),_:1})])]),_:1},8,["list"])])]),S("div",Ut,[S("div",zt,[t(l(pe),{list:l(s).action,"onUpdate:list":e[9]||(e[9]=o=>l(s).action=o),class:"button-container",animation:"300",group:{name:"button",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:n(()=>[(d(!0),C(z,null,Q(l(s).action.filter(o=>o.position=="header"),o=>(d(),C("div",{class:"button-item",key:o.id},[t(l(ve),{class:"move-handle",style:{cursor:"pointer"}}),t(P,{onClick:G=>ue(o)},{default:n(()=>[R(O(o.name),1)]),_:2},1032,["onClick"]),t(de,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:G=>l(B)(o.id)},{default:n(()=>[t(l(X),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),S("div",Vt,[t(P,{type:"primary",onClick:e[8]||(e[8]=o=>Ie())},{default:n(()=>[R(" 添加按钮 ")]),_:1})])]),_:1},8,["list"])])]),S("div",Mt,[t(Rt,{columns:l(s).columns,"onUpdate:columns":e[10]||(e[10]=o=>l(s).columns=o),tableData:te.value,height:550,onOnRemove:we,onOnClick:he},null,8,["columns","tableData"])])])])])),[[Me,y.value,void 0,{fullscreen:!0}]]),t(U,{title:"按钮配置",placement:"right",closable:!1,open:L.value,onClose:e[20]||(e[20]=o=>L.value=!1)},{default:n(()=>[t(Ve,{model:m.value},{default:n(()=>[t(v,{prop:"id",label:"按钮标识"},{default:n(()=>[t(_,{value:m.value.id,"onUpdate:value":e[11]||(e[11]=o=>m.value.id=o)},null,8,["value"])]),_:1}),t(v,{prop:"name",label:"按钮名称"},{default:n(()=>[t(_,{value:m.value.name,"onUpdate:value":e[12]||(e[12]=o=>m.value.name=o)},null,8,["value"])]),_:1}),t(v,{prop:"name",label:"按钮位置"},{default:n(()=>[t(Ue,{value:m.value.position,"onUpdate:value":e[13]||(e[13]=o=>m.value.position=o),"button-style":"solid"},{default:n(()=>[t(ce,{value:"header"},{default:n(()=>[R("表头")]),_:1}),t(ce,{value:"row"},{default:n(()=>[R("行内")]),_:1})]),_:1},8,["value"])]),_:1}),t(v,{prop:"customEvent",label:"是否启用自定义"},{default:n(()=>[t(ze,{checked:m.value.customEvent,"onUpdate:checked":e[14]||(e[14]=o=>m.value.customEvent=o)},null,8,["checked"])]),_:1}),m.value.customEvent?E("",!0):(d(),N(v,{key:0,prop:"builtInEvents",label:"内置事件"},{default:n(()=>[t(p,{value:m.value.builtInEvents,"onUpdate:value":e[15]||(e[15]=o=>m.value.builtInEvents=o),options:T.value,allowClear:""},null,8,["value","options"])]),_:1})),["add","edit"].includes(m.value.builtInEvents)&&!m.value.customEvent?(d(),N(v,{key:1,prop:"formId",label:"关联表单"},{default:n(()=>[t(p,{value:m.value.formId,"onUpdate:value":e[16]||(e[16]=o=>m.value.formId=o),options:se.value,fieldNames:{label:"name",value:"id"}},null,8,["value","options"])]),_:1})):E("",!0),m.value.customEvent?(d(),N(v,{key:2,prop:"event",label:"自定义事件流"},{default:n(()=>[t(p,{value:m.value.eventFlowId,"onUpdate:value":e[19]||(e[19]=o=>m.value.eventFlowId=o),options:Se.value,allowClear:""},{suffixIcon:n(()=>[t(l(at),{style:{color:"#000"},title:"刷新"}),m.value.eventFlowId?(d(),N(l(nt),{key:0,onClick:e[17]||(e[17]=o=>De(m.value.eventFlowId)),style:{color:"#000"},title:"编辑事件流"})):(d(),N(l(ee),{key:1,style:{color:"#000"},title:"新增事件流",onClick:e[18]||(e[18]=o=>$e())}))]),_:1},8,["value","options"])]),_:1})):E("",!0)]),_:1},8,["model"])]),_:1},8,["open"]),t(U,{title:"筛选控件配置",placement:"right",closable:!1,open:H.value,onClose:e[21]||(e[21]=o=>H.value=!1)},{default:n(()=>[t(l(J),{formData:ie.value,schema:Ne.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(U,{title:"列配置",placement:"right",closable:!1,open:q.value,onClose:e[22]||(e[22]=o=>q.value=!1)},{default:n(()=>[t(l(J),{formData:l(x),schema:Re.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(U,{title:"全局配置",placement:"right",closable:!1,open:j.value,onClose:e[23]||(e[23]=o=>j.value=!1)},{default:n(()=>[t(l(J),{formData:l(s).global,schema:Te.value},null,8,["formData","schema"])]),_:1},8,["open"])],64)}}}),Kt=ge(Wt,[["__scopeId","data-v-a9801519"]]);export{Kt as default};
