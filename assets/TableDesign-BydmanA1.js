import{b3 as Me,f as We,r as _,aP as Le,g as A,s as M,v as W,o as d,y as w,l as t,i as l,aw as He,J as D,L as O,w as s,az as qe,aW as ve,A as je,aH as fe,a1 as Z,D as _e,F as V,K as Q,b4 as X,ab as ee,B as R,b5 as Ge,b6 as Je,V as E,h as $,a9 as Ke,t as ce,x as Qe,b7 as Xe,aN as Ye,ar as Ze,P as re,U as et,aZ as me,b0 as tt,H as lt,T as ot,b8 as pe,b9 as at,ba as nt,e as st,W as ut,N as it,X as dt,Y as ct,b2 as rt,aE as mt,a3 as pt,a4 as vt,aT as ft,$ as _t}from"./.pnpm-BrZBTk42.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as F}from"./index-BApoTjYZ.js";import{S as Y}from"./SchemaForm-BrRZqcqO.js";import{a as K}from"./table-CxZ-RVrn.js";/* empty css                   */const bt=new Me,L=bt,U=We("tableDesign",()=>{const x=_([]),c=_({name:"",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),i=_([]),y=_({});return{tableCfg:c,setTableCfg:n=>{c.value=n},currentColumn:y,onSelectColumn:(n,m)=>{const g=m.findIndex(T=>T.id===n);g!=-1&&(y.value=m[g])},onRemoveColumn:(n,m)=>{const g=m.findIndex(T=>T.id===n);g!=-1&&m.splice(g,1)},onAddColumn:()=>{const n=new Date().getTime().toString().slice(-4);c.value.columns.push({id:Le(),dataIndex:"field"+n,title:"列"+n,width:200})},tableData:x,onRefreshData:async n=>{},columnFields:i,onSetColumns:n=>{i.value=n},onAddBtn:n=>{c.value.action.push({id:new Date().getTime().toString(),name:"测试",position:n,eventFlowId:"",customEvent:!1,builtInEvents:"add",formId:""})},onRemoveBtn:n=>{const m=c.value.action.findIndex(g=>g.id==n);m!=-1&&c.value.action.splice(m,1)},onRemoveWidget:n=>{const m=c.value.filter.findIndex(g=>g.id==n);m!=-1&&c.value.filter.splice(m,1)}}}),gt={class:"custom-header-label",style:{flex:"1"}},ht=A({__name:"CustomColumnHeader",props:{params:{}},emits:["onRemove"],setup(x,{emit:c}){const i=U(),{currentColumn:y}=M(i),C=x,{params:b}=W(C),I=()=>{L.onPublish("removeEvent",b.value)};return(a,k)=>{const S=Z;return d(),w("div",{class:je(["custom-header-item",l(y).dataIndex==l(b).column.getColId()?"active":""]),style:fe([{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},{border:l(y).dataIndex==l(b).column.getColId()?"1px dashed #1677ff":"1px solid transparent"}])},[t(l(He),{class:"move",style:{width:"20px",cursor:"move"}}),D("div",gt,O(l(b).displayName),1),t(S,{title:"确定要删除此列配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:k[0]||(k[0]=B=>I())},{default:s(()=>[t(l(qe),{class:"remove",style:{width:"20px"},onClick:ve(()=>{},["stop"])})]),_:1})],6)}}}),Ct={class:"custom-opt-cell"},yt=["onClick"],wt=A({__name:"CustomOptCell",setup(x){const c=U(),{tableCfg:i}=M(c),y=_e(()=>{var k;return(k=i.value.action)==null?void 0:k.filter(S=>S.position=="row")}),{onAddBtn:C,onRemoveBtn:b}=c,I=k=>{L.onPublish("open-btn-modal",k)},a=()=>{C("row")};return(k,S)=>{const B=Z;return d(),w("div",Ct,[(d(!0),w(V,null,Q(y.value,N=>(d(),w("div",{class:"btn",key:N.id},[D("a",{onClick:r=>I(N)},O(N.name),9,yt),t(B,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:r=>l(b)(N.id)},{default:s(()=>[t(l(X),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),t(l(ee),{style:{cursor:"pointer"},onClick:S[0]||(S[0]=N=>a())})])}}}),xt={class:"custom-header-label",style:{flex:"1"}},It=A({__name:"CustomAddColumn",setup(x){const c=U(),{onAddColumn:i}=c;return(y,C)=>{const b=Je;return d(),w("div",{class:"custom-header-item add-column",style:{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},onClick:C[0]||(C[0]=I=>l(i)())},[D("div",xt,[t(l(ee)),R(" 新增列 "),t(b,null,{title:s(()=>[R("用于新增列配置")]),default:s(()=>[t(l(Ge))]),_:1})])])}}}),kt={class:"cell"},St={key:0},Dt=["href"],$t=A({__name:"CustomCellRender",props:{params:{}},setup(x){const c=x,{params:i}=W(c);return(y,C)=>{const b=Ke;return d(),w("div",kt,[l(i).colDef.cellRendererParams.type=="text"?(d(),w("span",St,O(l(i).value),1)):E("",!0),l(i).colDef.cellRendererParams.type=="image"?(d(),$(b,{key:1,src:l(i).value},null,8,["src"])):E("",!0),l(i).colDef.cellRendererParams.type=="link"?(d(),w("a",{key:2,href:l(i).value},O(l(i).value),9,Dt)):E("",!0)])}}}),Nt=A({__name:"AgTable",props:ce({columnId:{default:"id"},tableData:{},height:{default:400}},{columns:{required:!0},columnsModifiers:{}}),emits:ce(["onRemove","onClick"],["update:columns"]),setup(x,{emit:c}){L.onSubscribe("removeEvent",r=>{let n=r.column.getColId(),m=i.value.find(g=>g.dataIndex==n);m&&B(m)});const i=Qe(x,"columns"),y=x,{columnId:C,tableData:b}=W(y),I=_e(()=>{let r=i.value.map(n=>({field:n.dataIndex,colId:n.dataIndex,headerName:n.title,pinned:n.fixed=="none"?void 0:n.fixed,lockVisible:!0,headerComponent:ht,cellRenderer:$t,cellRendererParams:{type:n.type}}));return r.push({field:"_plus_",colId:"_plus",headerName:"新增列",lockVisible:!0,headerComponent:It}),r.push({field:"_opt_",colId:"_opt_",headerName:"操作",pinned:"right",lockVisible:!0,cellRenderer:wt}),r}),a=r=>{if(!r.finished)return;let n=[];r.api.getColumnState().forEach(m=>{let g=i.value.find(T=>T.dataIndex==m.colId);g&&n.push(g)}),i.value=n},k=r=>{if(!r.finished)return;let n=r.column.getColId(),m=i.value.findIndex(g=>g.dataIndex==n);m!=-1&&(i.value[m].width=r.column.getActualWidth())},S=c,B=r=>{S("onRemove",r)},N=r=>{let n=r.column.getId(),m=i.value.find(g=>g.dataIndex==n);S("onClick",m)};return(r,n)=>(d(),$(l(Xe),{rowData:l(b),columnDefs:I.value,style:fe({height:r.height+"px"}),class:"ag-theme-quartz",onColumnMoved:a,onColumnResized:k,onColumnHeaderClicked:N},null,8,["rowData","columnDefs","style"]))}}),Rt=be(Nt,[["__scopeId","data-v-5dd2184c"]]),Bt=A({__name:"TableCfg",setup(x){const c=U(),{tableCfg:i,columnFields:y,currentColumn:C}=M(c),b=_({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"80px"}}},properties:{dataIndex:{type:"select",label:"字段名",component:{asyncData:async()=>await new Promise(a=>{setTimeout(()=>{a(y.value)},100)})}},title:{type:"string",label:"列名"},width:{type:"number",label:"列宽"},align:{type:"radio",label:"对齐方式",component:{dataSource:[{value:"left",label:"左"},{value:"center",label:"居中"},{value:"right",label:"右"}],buttonStyle:"solid"}},fixed:{type:"radio",label:"固定列",component:{dataSource:[{value:"left",label:"左"},{value:"right",label:"右"},{value:"none",label:"不固定"}],buttonStyle:"solid"}},type:{type:"select",label:"列类型",component:{dataSource:[{value:"link",label:"链接"},{value:"image",label:"图片"},{value:"text",label:"文本"}]}}}}),I=_();return Ye(()=>C.value,()=>{I.value.refreshOption("dataIndex")}),(a,k)=>(d(),$(l(Y),{formData:l(C),schema:b.value,ref_key:"schemaRef",ref:I,size:"small"},null,8,["formData","schema"]))}}),Tt={class:"table-design"},Ft={class:"table-design-container"},At={class:"main-part"},Et={class:"filter-part"},Pt={class:"filter-container"},Ot=["onClick"],Ut={class:"add widget-item"},zt={class:"tools-part"},Vt={class:"tools-container"},Mt={class:"add button-item"},Wt={class:"table-part"},Lt=A({__name:"TableDesign",props:{id:{}},setup(x){const c=Ze();L.onSubscribe("open-btn-modal",u=>{se(u)});const i=_([]);re(()=>{F.getDataSourceDict().then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(i.value=h)})});const y=x,{id:C}=W(y),b=_(!1),I=U(),{tableCfg:a,columnFields:k}=M(I),{onSelectColumn:S,onRemoveBtn:B,onRemoveColumn:N,onSetColumns:r,onRemoveWidget:n,onAddBtn:m,setTableCfg:g}=I;C.value?(b.value=!0,K.getDetail(C.value).then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(g(h),oe(),ae(),b.value=!1)})):g({name:"未命名列表",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),window.name="table-design";const T=_([{label:"新增",value:"add"},{label:"编辑",value:"edit"},{label:"删除",value:"delete"}]),ge=()=>{var u;(u=a.value.filter)==null||u.push({id:new Date().getTime().toString(),type:"input",label:"文本",field:"field"})},he=()=>{window.open("/lowcode/table","quick-build")},Ce=u=>{S(u.id,a.value.columns),j.value=!0},ye=u=>{N(u.id,a.value.columns)};_([]);const te=_([]),we=()=>{F.getSourceData(a.value.dataSource.sourceId,a.value.dataSource.tableName).then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(te.value=h)})},le=_([]),oe=()=>{F.getTableInfo(a.value.dataSource.sourceId).then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(le.value=h)})},xe=async()=>{const{code:u,data:e,msg:h}=await F.getColumnInfo(a.value.dataSource.sourceId,a.value.dataSource.tableName);return u==200?e.map(v=>({label:v.columnComment?`${v.columnComment}(${v.columnName})`:v.columnName,value:v.columnName})):[]},ae=()=>{F.getColumnInfo(a.value.dataSource.sourceId,a.value.dataSource.tableName).then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(a.value.columns=h.map(f=>({dataIndex:f.columnName,title:f.columnComment||f.columnName,id:f.columnName,width:200,type:"text",align:"left",fixed:"none"})),r(h.map(f=>({label:f.columnComment?`${f.columnComment}(${f.columnName})`:f.columnName,value:f.columnName}))))}),we()},Ie=()=>{m("header")},ne=_([]),ke=()=>{F.getFormDict().then(u=>{const{code:e,data:h,msg:v}=u;e==200&&(ne.value=h)})};re(()=>{ke()});const p=_({id:"",name:"",eventFlowId:"",position:"header",customEvent:!1,builtInEvents:"add",formId:""}),H=_(!1),Se=_([{label:"默认新增事件流",value:"add"},{label:"默认编辑事件流",value:"edit"},{label:"默认批量编辑事件流",value:"batchEdit"}]),se=u=>{p.value=u,H.value=!0},De=u=>{c.push({path:"/design/flow",query:{id:u}})},$e=()=>{c.push({path:"/design/flow"})},ue=_({}),q=_(!1),Ne=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{id:{type:"string",label:"控件标识",component:{disabled:!0}},field:{type:"select",label:"字段名称",component:{asyncData:xe}},label:{type:"string",label:"文本标签"},type:{type:"radio",label:"控件类型",component:{dataSource:[{label:"输入框",value:"input"},{label:"选择框",value:"select"},{label:"日期框",value:"date"}],buttonStyle:"solid"}},dict:{type:"select",label:"字典",show:'"${formData.type}" == "select"',component:{asyncData:async()=>{const{code:u,data:e,msg:h}=await F.getDictTypeList();return u==200?e.map(v=>({label:v.dictTypeDesc,value:v.dictType})):[]}}},defaultValue:{type:"string",label:"默认值"}}}),Re=u=>{ue.value=u,q.value=!0},j=_(!1),G=_(!1),Be=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"120px"}}},properties:{showFilter:{type:"switch",label:"显示筛选面板"},showPagination:{type:"switch",label:"显示分页器"},showBordered:{type:"switch",label:"显示边框"},size:{type:"radio",label:"表格尺寸",component:{dataSource:[{label:"紧凑",value:"small"},{label:"默认",value:"middle"},{label:"宽松",value:"large"}],buttonStyle:"solid"}}}}),Te=()=>{G.value=!0},Fe=()=>{b.value=!0,(C.value?K.update:K.add)(a.value).then(e=>{const{code:h,data:v,msg:f}=e;h==200&&st.success("保存成功"),b.value=!1})};return(u,e)=>{const h=ut,v=it,f=dt,P=ct,Ae=rt,Ee=tt,Pe=mt,ie=Z,de=pt,Oe=vt,Ue=ft,ze=_t,z=lt,Ve=ot("loading");return d(),w(V,null,[et((d(),w("div",Tt,[t(Ee,{onBack:he,ghost:!1,style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"}},{title:s(()=>[t(h,{value:l(a).name,"onUpdate:value":e[0]||(e[0]=o=>l(a).name=o),bordered:!1,class:"table-name"},null,8,["value"])]),extra:s(()=>[t(Ae,{class:"extra"},{default:s(()=>[t(f,{label:"选择数据源"},{default:s(()=>[t(v,{value:l(a).dataSource.sourceId,"onUpdate:value":e[1]||(e[1]=o=>l(a).dataSource.sourceId=o),options:i.value,style:{width:"180px"},fieldNames:{label:"datasourceName",value:"id"},onChange:e[2]||(e[2]=o=>oe())},null,8,["value","options"])]),_:1}),t(f,{label:"选择表名"},{default:s(()=>[t(v,{value:l(a).dataSource.tableName,"onUpdate:value":e[3]||(e[3]=o=>l(a).dataSource.tableName=o),options:le.value,style:{width:"180px"},fieldNames:{label:"tableName",value:"tableName"},onChange:e[4]||(e[4]=o=>ae())},null,8,["value","options"])]),_:1}),t(P,{type:"primary",onClick:Te},{default:s(()=>[R("全局配置")]),_:1}),t(P,{onClick:e[5]||(e[5]=o=>Fe()),type:"primary",class:"save-btn"},{default:s(()=>[R(" 保存 ")]),_:1})]),_:1})]),_:1}),D("div",Ft,[D("div",At,[D("div",Et,[D("div",Pt,[t(l(me),{list:l(a).filter,"onUpdate:list":e[7]||(e[7]=o=>l(a).filter=o),class:"widget-container",animation:"300",group:{name:"widget",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:s(()=>[(d(!0),w(V,null,Q(l(a).filter,o=>(d(),w("div",{class:"widget-item",key:o.id,onClick:J=>Re(o)},[t(l(pe),{class:"move-handle",style:{cursor:"pointer"}}),t(f,{label:o.label,name:o.field},{default:s(()=>[o.type=="input"?(d(),$(h,{key:0})):o.type=="select"?(d(),$(v,{key:1})):(d(),$(Pe,{key:2}))]),_:2},1032,["label","name"]),t(ie,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:J=>l(n)(o.id)},{default:s(()=>[t(l(X),{class:"remove-btn",onClick:ve(()=>{},["stop"])})]),_:2},1032,["onConfirm"])],8,Ot))),128)),D("div",Ut,[t(P,{type:"primary",onClick:e[6]||(e[6]=o=>ge())},{default:s(()=>[R(" 添加控件 ")]),_:1})])]),_:1},8,["list"])])]),D("div",zt,[D("div",Vt,[t(l(me),{list:l(a).action,"onUpdate:list":e[9]||(e[9]=o=>l(a).action=o),class:"button-container",animation:"300",group:{name:"button",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:s(()=>[(d(!0),w(V,null,Q(l(a).action.filter(o=>o.position=="header"),o=>(d(),w("div",{class:"button-item",key:o.id},[t(l(pe),{class:"move-handle",style:{cursor:"pointer"}}),t(P,{onClick:J=>se(o)},{default:s(()=>[R(O(o.name),1)]),_:2},1032,["onClick"]),t(ie,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:J=>l(B)(o.id)},{default:s(()=>[t(l(X),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),D("div",Mt,[t(P,{type:"primary",onClick:e[8]||(e[8]=o=>Ie())},{default:s(()=>[R(" 添加按钮 ")]),_:1})])]),_:1},8,["list"])])]),D("div",Wt,[t(Rt,{columns:l(a).columns,"onUpdate:columns":e[10]||(e[10]=o=>l(a).columns=o),tableData:te.value,height:550,onOnRemove:ye,onOnClick:Ce},null,8,["columns","tableData"])])])])])),[[Ve,b.value,void 0,{fullscreen:!0}]]),t(z,{title:"按钮配置",placement:"right",closable:!1,open:H.value,onClose:e[20]||(e[20]=o=>H.value=!1)},{default:s(()=>[t(ze,{model:p.value},{default:s(()=>[t(f,{prop:"id",label:"按钮标识"},{default:s(()=>[t(h,{value:p.value.id,"onUpdate:value":e[11]||(e[11]=o=>p.value.id=o)},null,8,["value"])]),_:1}),t(f,{prop:"name",label:"按钮名称"},{default:s(()=>[t(h,{value:p.value.name,"onUpdate:value":e[12]||(e[12]=o=>p.value.name=o)},null,8,["value"])]),_:1}),t(f,{prop:"name",label:"按钮位置"},{default:s(()=>[t(Oe,{value:p.value.position,"onUpdate:value":e[13]||(e[13]=o=>p.value.position=o),"button-style":"solid"},{default:s(()=>[t(de,{value:"header"},{default:s(()=>[R("表头")]),_:1}),t(de,{value:"row"},{default:s(()=>[R("行内")]),_:1})]),_:1},8,["value"])]),_:1}),t(f,{prop:"customEvent",label:"是否启用自定义"},{default:s(()=>[t(Ue,{checked:p.value.customEvent,"onUpdate:checked":e[14]||(e[14]=o=>p.value.customEvent=o)},null,8,["checked"])]),_:1}),p.value.customEvent?E("",!0):(d(),$(f,{key:0,prop:"builtInEvents",label:"内置事件"},{default:s(()=>[t(v,{value:p.value.builtInEvents,"onUpdate:value":e[15]||(e[15]=o=>p.value.builtInEvents=o),options:T.value,allowClear:""},null,8,["value","options"])]),_:1})),["add","edit"].includes(p.value.builtInEvents)&&!p.value.customEvent?(d(),$(f,{key:1,prop:"formId",label:"关联表单"},{default:s(()=>[t(v,{value:p.value.formId,"onUpdate:value":e[16]||(e[16]=o=>p.value.formId=o),options:ne.value,fieldNames:{label:"name",value:"id"}},null,8,["value","options"])]),_:1})):E("",!0),p.value.customEvent?(d(),$(f,{key:2,prop:"event",label:"自定义事件流"},{default:s(()=>[t(v,{value:p.value.eventFlowId,"onUpdate:value":e[19]||(e[19]=o=>p.value.eventFlowId=o),options:Se.value,allowClear:""},{suffixIcon:s(()=>[t(l(at),{style:{color:"#000"},title:"刷新"}),p.value.eventFlowId?(d(),$(l(nt),{key:0,onClick:e[17]||(e[17]=o=>De(p.value.eventFlowId)),style:{color:"#000"},title:"编辑事件流"})):(d(),$(l(ee),{key:1,style:{color:"#000"},title:"新增事件流",onClick:e[18]||(e[18]=o=>$e())}))]),_:1},8,["value","options"])]),_:1})):E("",!0)]),_:1},8,["model"])]),_:1},8,["open"]),t(z,{title:"筛选控件配置",placement:"right",closable:!1,open:q.value,onClose:e[21]||(e[21]=o=>q.value=!1)},{default:s(()=>[t(l(Y),{formData:ue.value,schema:Ne.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(z,{title:"列配置",placement:"right",closable:!1,open:j.value,onClose:e[22]||(e[22]=o=>j.value=!1)},{default:s(()=>[t(Bt)]),_:1},8,["open"]),t(z,{title:"全局配置",placement:"right",closable:!1,open:G.value,onClose:e[23]||(e[23]=o=>G.value=!1)},{default:s(()=>[t(l(Y),{formData:l(a).global,schema:Be.value},null,8,["formData","schema"])]),_:1},8,["open"])],64)}}}),Qt=be(Lt,[["__scopeId","data-v-11f1378e"]]);export{Qt as default};
