import{b3 as Ge,f as Ke,r as p,aP as Xe,g as O,s as ee,v as z,o as f,y as S,l as t,i as o,ay as Ze,K as a,T as P,w as n,aB as Je,aW as ge,A as Ye,aI as he,a7 as te,D as ye,F as M,R as J,b4 as Y,af as Ce,B as d,b5 as et,b6 as we,a5 as E,h as R,ad as tt,t as ve,x as lt,b7 as ot,at as nt,a0 as fe,a4 as at,aZ as _e,b0 as st,H as ut,a2 as it,a3 as dt,b8 as be,b9 as ct,e as rt,L as mt,O as pt,X as vt,M as ft,b2 as _t,aF as bt,U as gt,V as ht,aT as yt,W as Ct,P as wt,Q as xt}from"./.pnpm-_yJTuZUr.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as T}from"./index-Up6rnNvx.js";import{S as X}from"./SchemaForm-CQUnNtPy.js";import{a as Z}from"./table-BN7PAvuI.js";import It from"./FlowView-CHkUWruh.js";/* empty css                   */import"./CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-BL1_qp6H.js";import"./FlowExecutor-DOERAbdm.js";import"./LowCodeFormId.vue_vue_type_script_setup_true_lang-Ba-459Th.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-BD-XJPt7.js";const St=new Ge,W=St,L=Ke("tableDesign",()=>{const C=p([]),_=p({name:"",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),c=p([]),x=p({});return{tableCfg:_,setTableCfg:s=>{_.value=s},currentColumn:x,onSelectColumn:(s,r)=>{const h=r.findIndex(F=>F.id===s);h!=-1&&(x.value=r[h])},onRemoveColumn:(s,r)=>{const h=r.findIndex(F=>F.id===s);h!=-1&&r.splice(h,1)},onAddColumn:()=>{const s=new Date().getTime().toString().slice(-4);_.value.columns.push({id:Xe(),dataIndex:"field"+s,title:"列"+s,width:200})},tableData:C,onRefreshData:async s=>{},columnFields:c,onSetColumns:s=>{c.value=s},onAddBtn:s=>{_.value.action.push({id:new Date().getTime().toString(),name:"测试",position:s,eventFlow:{nodes:[],edges:[]},customEvent:!1,builtInEvents:"add",formId:""})},onRemoveBtn:s=>{const r=_.value.action.findIndex(h=>h.id==s);r!=-1&&_.value.action.splice(r,1)},onRemoveWidget:s=>{const r=_.value.filter.findIndex(h=>h.id==s);r!=-1&&_.value.filter.splice(r,1)}}}),kt={class:"custom-header-label",style:{flex:"1"}},Dt=O({__name:"CustomColumnHeader",props:{params:{}},emits:["onRemove"],setup(C,{emit:_}){const c=L(),{currentColumn:x}=ee(c),I=C,{params:w}=z(I),u=()=>{W.onPublish("removeEvent",w.value)};return(N,k)=>{const D=te;return f(),S("div",{class:Ye(["custom-header-item",o(x).dataIndex==o(w).column.getColId()?"active":""]),style:he([{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},{border:o(x).dataIndex==o(w).column.getColId()?"1px dashed #1677ff":"1px solid transparent"}])},[t(o(Ze),{class:"move",style:{width:"20px",cursor:"move"}}),a("div",kt,P(o(w).displayName),1),t(D,{title:"确定要删除此列配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:k[0]||(k[0]=B=>u())},{default:n(()=>[t(o(Je),{class:"remove",style:{width:"20px"},onClick:ge(()=>{},["stop"])})]),_:1})],6)}}}),$t={class:"custom-opt-cell"},Rt=["onClick"],Nt=O({__name:"CustomOptCell",setup(C){const _=L(),{tableCfg:c}=ee(_),x=ye(()=>{var k;return(k=c.value.action)==null?void 0:k.filter(D=>D.position=="row")}),{onAddBtn:I,onRemoveBtn:w}=_,u=k=>{W.onPublish("open-btn-modal",k)},N=()=>{I("row")};return(k,D)=>{const B=te;return f(),S("div",$t,[(f(!0),S(M,null,J(x.value,$=>(f(),S("div",{class:"btn",key:$.id},[a("a",{onClick:m=>u($)},P($.name),9,Rt),t(B,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:m=>o(w)($.id)},{default:n(()=>[t(o(Y),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),t(o(Ce),{style:{cursor:"pointer"},onClick:D[0]||(D[0]=$=>N())})])}}}),Bt={class:"custom-header-label",style:{flex:"1"}},Ft=O({__name:"CustomAddColumn",setup(C){const _=L(),{onAddColumn:c}=_;return(x,I)=>{const w=we;return f(),S("div",{class:"custom-header-item add-column",style:{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},onClick:I[0]||(I[0]=u=>o(c)())},[a("div",Bt,[t(o(Ce)),d(" 新增列 "),t(w,null,{title:n(()=>[d("用于新增列配置")]),default:n(()=>[t(o(et))]),_:1})])])}}}),Tt={class:"cell"},At={key:0},Et=["href"],Ot=O({__name:"CustomCellRender",props:{params:{}},setup(C){const _=C,{params:c}=z(_);return(x,I)=>{const w=tt;return f(),S("div",Tt,[o(c).colDef.cellRendererParams.type=="text"?(f(),S("span",At,P(o(c).value),1)):E("",!0),o(c).colDef.cellRendererParams.type=="image"?(f(),R(w,{key:1,src:o(c).value},null,8,["src"])):E("",!0),o(c).colDef.cellRendererParams.type=="link"?(f(),S("a",{key:2,href:o(c).value},P(o(c).value),9,Et)):E("",!0)])}}}),Pt=O({__name:"AgTable",props:ve({columnId:{default:"id"},tableData:{},height:{default:400}},{columns:{required:!0},columnsModifiers:{}}),emits:ve(["onRemove","onClick"],["update:columns"]),setup(C,{emit:_}){W.onSubscribe("removeEvent",m=>{let s=m.column.getColId(),r=c.value.find(h=>h.dataIndex==s);r&&B(r)});const c=lt(C,"columns"),x=C,{columnId:I,tableData:w}=z(x),u=ye(()=>{let m=c.value.map(s=>({field:s.dataIndex,colId:s.dataIndex,headerName:s.title,pinned:s.fixed=="none"?void 0:s.fixed,lockVisible:!0,headerComponent:Dt,cellRenderer:Ot,cellRendererParams:{type:s.type}}));return m.push({field:"_plus_",colId:"_plus",headerName:"新增列",lockVisible:!0,headerComponent:Ft}),m.push({field:"_opt_",colId:"_opt_",headerName:"操作",pinned:"right",lockVisible:!0,cellRenderer:Nt}),m}),N=m=>{if(!m.finished)return;let s=[];m.api.getColumnState().forEach(r=>{let h=c.value.find(F=>F.dataIndex==r.colId);h&&s.push(h)}),c.value=s},k=m=>{if(!m.finished)return;let s=m.column.getColId(),r=c.value.findIndex(h=>h.dataIndex==s);r!=-1&&(c.value[r].width=m.column.getActualWidth())},D=_,B=m=>{D("onRemove",m)},$=m=>{let s=m.column.getId(),r=c.value.find(h=>h.dataIndex==s);D("onClick",r)};return(m,s)=>(f(),R(o(ot),{rowData:o(w),columnDefs:u.value,style:he({height:m.height+"px"}),class:"ag-theme-quartz",onColumnMoved:N,onColumnResized:k,onColumnHeaderClicked:$},null,8,["rowData","columnDefs","style"]))}}),Ut=xe(Pt,[["__scopeId","data-v-5dd2184c"]]),Ie=C=>(wt("data-v-3c535b45"),C=C(),xt(),C),Vt={class:"table-design"},Mt={class:"table-design-container"},zt={class:"main-part"},Wt={class:"filter-part"},Lt={class:"filter-container"},qt=["onClick"],Ht={class:"add widget-item"},Qt={class:"tools-part"},jt={class:"tools-container"},Gt={class:"add button-item"},Kt={class:"table-part"},Xt=Ie(()=>a("h3",null,[d(" 工作流配置注意事项"),a("strong",{style:{color:"red"}},"(目前只支持线性工作流,没有条件判断或并行执行的能力)")],-1)),Zt=Ie(()=>a("ul",null,[a("li",null,[a("strong",null,"工作流节点不能为空："),d(" 每个工作流"),a("strong",null,"必须"),d("包含有效的节点配置。 ")]),a("li",null,[a("strong",null,"包含开始与结束节点："),d(" 每个工作流"),a("strong",null,"必须"),d("包含一个“开始节点”和一个“结束节点”。 ")]),a("li",null,[a("strong",{style:{color:"red"}},"重要参数："),a("code",null,"this.state.modalFormData"),d("为弹窗表单数据， "),a("code",null,"this.state.requestData"),d("为请求数据， 两者既可以作为输入也可以作为输出，搭配"),a("strong",null,"处理函数"),d("节点使用，可以实现数据的填充或者数据的保存。 ")]),a("li",null,[a("strong",null,"节点内变量引用："),d(" 在"),a("strong",null,"处理函数"),d("节点中，可以通过 "),a("code",null,"this.state.xxx"),d(" 的方式引用当前工作流中的变量。 在"),a("strong",null,"请求配置"),d("节点中，在"),a("strong",null,"引用变量"),d("列中可以通过"),a("code",null,"state.xxx"),d("引用变量数据，也可以配置"),a("strong",null,"Value"),d("列使用静态数据。 ")]),a("li",null,[a("strong",null,"预览结果："),d(" 执行后，预览结果仅显示当前工作流的 "),a("code",null,"state"),d(" 属性，其他信息不可见。 ")])],-1)),Jt=O({__name:"TableDesign",props:{id:{}},setup(C){nt(),W.onSubscribe("open-btn-modal",i=>{ie(i)});const _=p([]);fe(()=>{T.getDataSourceDict().then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(_.value=b)})});const c=C,{id:x}=z(c),I=p(!1),w=L(),{tableCfg:u,currentColumn:N}=ee(w),{onSelectColumn:k,onRemoveBtn:D,onRemoveColumn:B,onSetColumns:$,onRemoveWidget:m,onAddBtn:s,setTableCfg:r}=w;x.value?(I.value=!0,Z.getDetail(x.value).then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(r(b),ae(),oe(),I.value=!1)})):r({name:"未命名列表",description:"",status:1,columns:[],global:{showFilter:!0,showPagination:!0,showBordered:!1,size:"middle"},dataSource:{tableName:"",sourceId:""},filter:[],action:[]}),window.name="table-design";const h=p([{label:"新增",value:"add"},{label:"编辑",value:"edit"},{label:"删除",value:"delete"}]),F=()=>{var i;(i=u.value.filter)==null||i.push({id:new Date().getTime().toString(),type:"input",label:"文本",field:"field"})},Se=()=>{window.open("/lowcode/table","quick-build")},ke=i=>{k(i.id,u.value.columns),Q.value=!0},De=i=>{B(i.id,u.value.columns)};p([]);const le=p([]),oe=()=>{T.getSourceData(u.value.dataSource.sourceId,u.value.dataSource.tableName).then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(le.value=b)})},ne=p([]),ae=()=>{T.getTableInfo(u.value.dataSource.sourceId).then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(ne.value=b)})},se=async()=>{const{code:i,data:e,msg:b}=await T.getColumnInfo(u.value.dataSource.sourceId,u.value.dataSource.tableName);return i==200?e.map(g=>({label:g.columnComment?`${g.columnComment}(${g.columnName})`:g.columnName,value:g.columnName})):[]},$e=()=>{T.getColumnInfo(u.value.dataSource.sourceId,u.value.dataSource.tableName).then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(u.value.columns=b.map(v=>({dataIndex:v.columnName,title:v.columnComment||v.columnName,id:v.columnName,width:200,type:"text",align:"left",fixed:"none"})),$(b.map(v=>({label:v.columnComment?`${v.columnComment}(${v.columnName})`:v.columnName,value:v.columnName}))))}),oe()},Re=()=>{s("header")},ue=p([]),Ne=()=>{T.getFormDict().then(i=>{const{code:e,data:b,msg:g}=i;e==200&&(ue.value=b)})};fe(()=>{Ne()});const y=p({id:"",name:"",eventFlow:{nodes:[],edges:[]},position:"header",customEvent:!1,builtInEvents:"add",formId:""}),q=p(!1),ie=i=>{y.value=i,q.value=!0},de=p({}),H=p(!1),Be=p({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{id:{type:"string",label:"控件标识",component:{disabled:!0}},field:{type:"select",label:"字段名称",component:{asyncData:se}},label:{type:"string",label:"文本标签"},type:{type:"radio",label:"控件类型",component:{dataSource:[{label:"输入框",value:"input"},{label:"选择框",value:"select"},{label:"日期框",value:"date"}],buttonStyle:"solid"}},dictType:{type:"radio",label:"字典类型",show:'"${formData.type}" == "select"',tooltip:"字典为系统的字典配置数据，列数据为当前配置字段的列数据",component:{dataSource:[{label:"字典",value:"dict"},{label:"列数据",value:"col"}],buttonStyle:"solid"}},dict:{type:"select",label:"字典",tooltip:"可以在系统配置自定义字典",show:'"${formData.type}" == "select" && "${formData.dictType}" == "dict"',component:{asyncData:async()=>{const{code:i,data:e,msg:b}=await T.getDictTypeList();return i==200?e.map(g=>({label:g.dictTypeDesc,value:g.dictType})):[]}}},defaultValue:{type:"string",label:"默认值"}}}),Fe=p({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"80px"}}},properties:{dataIndex:{type:"select",label:"字段名",component:{asyncData:se}},title:{type:"string",label:"列名"},width:{type:"number",label:"列宽"},align:{type:"radio",label:"对齐方式",component:{dataSource:[{value:"left",label:"左"},{value:"center",label:"居中"},{value:"right",label:"右"}],buttonStyle:"solid"}},fixed:{type:"radio",label:"固定列",component:{dataSource:[{value:"left",label:"左"},{value:"right",label:"右"},{value:"none",label:"不固定"}],buttonStyle:"solid"}},type:{type:"select",label:"列类型",component:{dataSource:[{value:"link",label:"链接"},{value:"image",label:"图片"},{value:"text",label:"文本"}]}}}}),Te=i=>{de.value=i,H.value=!0},Q=p(!1),j=p(!1),Ae=p({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"120px"}}},properties:{showFilter:{type:"switch",label:"显示筛选面板"},showPagination:{type:"switch",label:"显示分页器"},showBordered:{type:"switch",label:"显示边框"},size:{type:"radio",label:"表格尺寸",component:{dataSource:[{label:"紧凑",value:"small"},{label:"默认",value:"middle"},{label:"宽松",value:"large"}],buttonStyle:"solid"}}}}),Ee=()=>{j.value=!0},Oe=()=>{I.value=!0,(x.value?Z.update:Z.add)(u.value).then(e=>{const{code:b,data:g,msg:v}=e;b==200&&rt.success("保存成功"),I.value=!1})},U=p(!1),G=p({nodes:[],edges:[]}),Pe=i=>{G.value=i.eventFlow,U.value=!0},ce=p(),Ue=()=>{y.value.eventFlow=ce.value.getData(),re()},re=()=>{G.value={nodes:[],edges:[]},U.value=!1};return(i,e)=>{const b=mt,g=pt,v=vt,A=ft,Ve=_t,Me=st,ze=bt,me=te,pe=gt,We=ht,Le=yt,qe=Ct,V=ut,He=we,Qe=it,je=dt("loading");return f(),S(M,null,[at((f(),S("div",Vt,[t(Me,{onBack:Se,ghost:!1,style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"}},{title:n(()=>[t(b,{value:o(u).name,"onUpdate:value":e[0]||(e[0]=l=>o(u).name=l),bordered:!1,class:"table-name"},null,8,["value"])]),extra:n(()=>[t(Ve,{class:"extra"},{default:n(()=>[t(v,{label:"选择数据源"},{default:n(()=>[t(g,{value:o(u).dataSource.sourceId,"onUpdate:value":e[1]||(e[1]=l=>o(u).dataSource.sourceId=l),options:_.value,style:{width:"180px"},fieldNames:{label:"datasourceName",value:"id"},onChange:e[2]||(e[2]=l=>ae())},null,8,["value","options"])]),_:1}),t(v,{label:"选择表名"},{default:n(()=>[t(g,{value:o(u).dataSource.tableName,"onUpdate:value":e[3]||(e[3]=l=>o(u).dataSource.tableName=l),options:ne.value,style:{width:"180px"},fieldNames:{label:"tableName",value:"tableName"},onChange:e[4]||(e[4]=l=>$e())},null,8,["value","options"])]),_:1}),t(A,{type:"primary",onClick:Ee},{default:n(()=>[d("全局配置")]),_:1}),t(A,{onClick:e[5]||(e[5]=l=>Oe()),type:"primary",class:"save-btn"},{default:n(()=>[d(" 保存 ")]),_:1})]),_:1})]),_:1}),a("div",Mt,[a("div",zt,[a("div",Wt,[a("div",Lt,[t(o(_e),{list:o(u).filter,"onUpdate:list":e[7]||(e[7]=l=>o(u).filter=l),class:"widget-container",animation:"300",group:{name:"widget",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:n(()=>[(f(!0),S(M,null,J(o(u).filter,l=>(f(),S("div",{class:"widget-item",key:l.id,onClick:K=>Te(l)},[t(o(be),{class:"move-handle",style:{cursor:"pointer"}}),t(v,{label:l.label,name:l.field},{default:n(()=>[l.type=="input"?(f(),R(b,{key:0})):l.type=="select"?(f(),R(g,{key:1})):(f(),R(ze,{key:2}))]),_:2},1032,["label","name"]),t(me,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:K=>o(m)(l.id)},{default:n(()=>[t(o(Y),{class:"remove-btn",onClick:ge(()=>{},["stop"])})]),_:2},1032,["onConfirm"])],8,qt))),128)),a("div",Ht,[t(A,{type:"primary",onClick:e[6]||(e[6]=l=>F())},{default:n(()=>[d(" 添加控件 ")]),_:1})])]),_:1},8,["list"])])]),a("div",Qt,[a("div",jt,[t(o(_e),{list:o(u).action,"onUpdate:list":e[9]||(e[9]=l=>o(u).action=l),class:"button-container",animation:"300",group:{name:"button",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:n(()=>[(f(!0),S(M,null,J(o(u).action.filter(l=>l.position=="header"),l=>(f(),S("div",{class:"button-item",key:l.id},[t(o(be),{class:"move-handle",style:{cursor:"pointer"}}),t(A,{onClick:K=>ie(l)},{default:n(()=>[d(P(l.name),1)]),_:2},1032,["onClick"]),t(me,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:K=>o(D)(l.id)},{default:n(()=>[t(o(Y),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),a("div",Gt,[t(A,{type:"primary",onClick:e[8]||(e[8]=l=>Re())},{default:n(()=>[d(" 添加按钮 ")]),_:1})])]),_:1},8,["list"])])]),a("div",Kt,[t(Ut,{columns:o(u).columns,"onUpdate:columns":e[10]||(e[10]=l=>o(u).columns=l),tableData:le.value,height:550,onOnRemove:De,onOnClick:ke},null,8,["columns","tableData"])])])])])),[[je,I.value,void 0,{fullscreen:!0}]]),t(V,{title:"按钮配置",placement:"right",closable:!1,open:q.value,onClose:e[18]||(e[18]=l=>q.value=!1)},{default:n(()=>[t(qe,{model:y.value},{default:n(()=>[t(v,{prop:"id",label:"按钮标识"},{default:n(()=>[t(b,{value:y.value.id,"onUpdate:value":e[11]||(e[11]=l=>y.value.id=l)},null,8,["value"])]),_:1}),t(v,{prop:"name",label:"按钮名称"},{default:n(()=>[t(b,{value:y.value.name,"onUpdate:value":e[12]||(e[12]=l=>y.value.name=l)},null,8,["value"])]),_:1}),t(v,{prop:"name",label:"按钮位置"},{default:n(()=>[t(We,{value:y.value.position,"onUpdate:value":e[13]||(e[13]=l=>y.value.position=l),"button-style":"solid"},{default:n(()=>[t(pe,{value:"header"},{default:n(()=>[d("表头")]),_:1}),t(pe,{value:"row"},{default:n(()=>[d("行内")]),_:1})]),_:1},8,["value"])]),_:1}),t(v,{prop:"customEvent",label:"是否启用自定义"},{default:n(()=>[t(Le,{checked:y.value.customEvent,"onUpdate:checked":e[14]||(e[14]=l=>y.value.customEvent=l)},null,8,["checked"])]),_:1}),y.value.customEvent?E("",!0):(f(),R(v,{key:0,prop:"builtInEvents",label:"内置事件"},{default:n(()=>[t(g,{value:y.value.builtInEvents,"onUpdate:value":e[15]||(e[15]=l=>y.value.builtInEvents=l),options:h.value,allowClear:""},null,8,["value","options"])]),_:1})),["add","edit"].includes(y.value.builtInEvents)&&!y.value.customEvent?(f(),R(v,{key:1,prop:"formId",label:"关联表单"},{default:n(()=>[t(g,{value:y.value.formId,"onUpdate:value":e[16]||(e[16]=l=>y.value.formId=l),options:ue.value,fieldNames:{label:"name",value:"id"}},null,8,["value","options"])]),_:1})):E("",!0),y.value.customEvent?(f(),R(v,{key:2,prop:"event",label:"自定义事件流"},{default:n(()=>[t(A,{onClick:e[17]||(e[17]=l=>Pe(y.value))},{default:n(()=>[d(" 自定义事件流 ")]),_:1})]),_:1})):E("",!0)]),_:1},8,["model"])]),_:1},8,["open"]),t(V,{title:"筛选控件配置",placement:"right",closable:!1,open:H.value,onClose:e[19]||(e[19]=l=>H.value=!1)},{default:n(()=>[t(o(X),{formData:de.value,schema:Be.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(V,{title:"列配置",placement:"right",closable:!1,open:Q.value,onClose:e[20]||(e[20]=l=>Q.value=!1)},{default:n(()=>[t(o(X),{formData:o(N),schema:Fe.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(V,{title:"全局配置",placement:"right",closable:!1,open:j.value,onClose:e[21]||(e[21]=l=>j.value=!1)},{default:n(()=>[t(o(X),{formData:o(u).global,schema:Ae.value},null,8,["formData","schema"])]),_:1},8,["open"]),t(Qe,{width:"100%","wrap-class-name":"full-modal",open:U.value,"onUpdate:open":e[22]||(e[22]=l=>U.value=l),onOk:Ue,onCancel:re},{title:n(()=>[d(" 事件流配置 "),t(He,{overlayInnerStyle:{width:"600px",color:"#000"},color:"#ffffff",arrow:!1,placement:"rightBottom"},{title:n(()=>[Xt,Zt]),default:n(()=>[t(o(ct))]),_:1})]),default:n(()=>[t(It,{data:G.value,ref_key:"flowRef",ref:ce},null,8,["data"])]),_:1},8,["open"])],64)}}}),cl=xe(Jt,[["__scopeId","data-v-3c535b45"]]);export{cl as default};
