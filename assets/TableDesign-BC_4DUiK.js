import{b3 as $e,f as Re,r as f,aO as Ne,g as T,s as z,v as Q,o as m,y as C,l as o,i as e,aw as Be,J as S,L,w as a,az as Fe,aW as ue,A as Te,aF as de,a1 as X,D as ce,F as V,K as J,b4 as K,ab as Y,B,b5 as Ae,b6 as Le,V as G,h as F,a9 as Oe,t as ae,x as Pe,b7 as Ue,aM as Ve,ar as ze,P as Me,U as We,aZ as se,b0 as Ee,H as qe,T as He,b8 as ie,b9 as je,ba as Ge,W as Je,N as Ke,X as Qe,Y as Xe,b2 as Ye,aU as Ze,a3 as et,a4 as tt,$ as ot}from"./.pnpm-Cl1qeBT1.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as U}from"./index-DVrQM2Lg.js";import{S as me}from"./SchemaForm-BCsHY2CV.js";/* empty css                   */const nt=new $e,M=nt,O=Re("tableDesign",()=>{const I=f([]),u=f({name:"",description:"",status:1,columns:[],global:{bordered:!1},datasource:{tableName:"",sourceId:""},filter:{show:!0,widgetList:[]},action:[]}),s=f([]),b=f({}),l=()=>{const i=new Date().getTime().toString().slice(-4);u.value.columns,u.value.columns.push({id:Ne(),dataIndex:"field"+i,title:"列"+i,width:200})},_=(i,r)=>{const x=r.findIndex(A=>A.id===i);x!=-1&&(b.value=r[x])},h=(i,r)=>{const x=r.findIndex(A=>A.id===i);x!=-1&&r.splice(x,1)},$=i=>{u.value.action.push({id:new Date().getTime().toString(),name:"测试",position:i,eventFlowId:""})},g=i=>{const r=u.value.action.findIndex(x=>x.id==i);r!=-1&&u.value.action.splice(r,1)},y=i=>{const r=u.value.filter.widgetList.findIndex(x=>x.id==i);r!=-1&&u.value.filter.widgetList.splice(r,1)},R=async i=>{},w=f(!1);return{tableCfg:u,currentColumn:b,onSelectColumn:_,onRemoveColumn:h,onAddColumn:l,tableData:I,onRefreshData:R,saveLoading:w,onSave:async()=>{w.value=!0,setTimeout(()=>{u.value,w.value=!1},2e3)},columnFields:s,onSetColumns:i=>{s.value=i},onAddBtn:$,onRemoveBtn:g,onRemoveWidget:y}}),lt={class:"custom-header-label",style:{flex:"1"}},at=T({__name:"CustomColumnHeader",props:{params:{}},emits:["onRemove"],setup(I,{emit:u}){const s=O(),{currentColumn:b}=z(s),l=I,{params:_}=Q(l),h=()=>{M.onPublish("removeEvent",_.value)};return($,g)=>{const y=X;return m(),C("div",{class:Te(["custom-header-item",e(b).dataIndex==e(_).column.getColId()?"active":""]),style:de([{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},{border:e(b).dataIndex==e(_).column.getColId()?"1px dashed #1677ff":"1px solid transparent"}])},[o(e(Be),{class:"move",style:{width:"20px",cursor:"move"}}),S("div",lt,L(e(_).displayName),1),o(y,{title:"确定要删除此列配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:g[0]||(g[0]=R=>h())},{default:a(()=>[o(e(Fe),{class:"remove",style:{width:"20px"},onClick:ue(()=>{},["stop"])})]),_:1})],6)}}}),st={class:"custom-opt-cell"},it=["onClick"],ut=T({__name:"CustomOptCell",setup(I){const u=O(),{tableCfg:s}=z(u),b=ce(()=>{var g;return(g=s.value.action)==null?void 0:g.filter(y=>y.position=="row")}),{onAddBtn:l,onRemoveBtn:_}=u,h=g=>{M.onPublish("open-btn-modal",g)},$=()=>{l("row")};return(g,y)=>{const R=X;return m(),C("div",st,[(m(!0),C(V,null,J(b.value,w=>(m(),C("div",{class:"btn",key:w.id},[S("a",{onClick:d=>h(w)},L(w.name),9,it),o(R,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:d=>e(_)(w.id)},{default:a(()=>[o(e(K),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),o(e(Y),{style:{cursor:"pointer"},onClick:y[0]||(y[0]=w=>$())})])}}}),dt={class:"custom-header-label",style:{flex:"1"}},ct=T({__name:"CustomAddColumn",setup(I){const u=O(),{onAddColumn:s}=u;return(b,l)=>{const _=Le;return m(),C("div",{class:"custom-header-item add-column",style:{width:"100%",height:"100%",display:"flex","justify-content":"space-between","align-items":"center",cursor:"pointer"},onClick:l[0]||(l[0]=h=>e(s)())},[S("div",dt,[o(e(Y)),B(" 新增列 "),o(_,null,{title:a(()=>[B("用于新增列配置")]),default:a(()=>[o(e(Ae))]),_:1})])])}}}),rt={class:"cell"},mt={key:0},pt=["href"],vt=T({__name:"CustomCellRender",props:{params:{}},setup(I){const u=I,{params:s}=Q(u);return(b,l)=>{const _=Oe;return m(),C("div",rt,[e(s).colDef.cellRendererParams.type=="text"?(m(),C("span",mt,L(e(s).value),1)):G("",!0),e(s).colDef.cellRendererParams.type=="image"?(m(),F(_,{key:1,src:e(s).value},null,8,["src"])):G("",!0),e(s).colDef.cellRendererParams.type=="link"?(m(),C("a",{key:2,href:e(s).value},L(e(s).value),9,pt)):G("",!0)])}}}),ft=T({__name:"AgTable",props:ae({columnId:{default:"id"},tableData:{},height:{default:400}},{columns:{required:!0},columnsModifiers:{}}),emits:ae(["onRemove","onClick"],["update:columns"]),setup(I,{emit:u}){M.onSubscribe("removeEvent",d=>{let p=d.column.getColId(),i=s.value.find(r=>r.dataIndex==p);i&&R(i)});const s=Pe(I,"columns"),b=I,{columnId:l,tableData:_}=Q(b),h=ce(()=>{let d=s.value.map(p=>({field:p.dataIndex,colId:p.dataIndex,headerName:p.title,pinned:p.fixed=="none"?void 0:p.fixed,lockVisible:!0,headerComponent:at,cellRenderer:vt,cellRendererParams:{type:p.type}}));return d.push({field:"_plus_",colId:"_plus",headerName:"新增列",lockVisible:!0,headerComponent:ct}),d.push({field:"_opt_",colId:"_opt_",headerName:"操作",pinned:"right",lockVisible:!0,cellRenderer:ut}),d}),$=d=>{if(!d.finished)return;let p=[];d.api.getColumnState().forEach(i=>{let r=s.value.find(x=>x.dataIndex==i.colId);r&&p.push(r)}),s.value=p},g=d=>{if(!d.finished)return;let p=d.column.getColId(),i=s.value.findIndex(r=>r.dataIndex==p);i!=-1&&(s.value[i].width=d.column.getActualWidth())},y=u,R=d=>{y("onRemove",d)},w=d=>{let p=d.column.getId(),i=s.value.find(r=>r.dataIndex==p);y("onClick",i)};return(d,p)=>(m(),F(e(Ue),{rowData:e(_),columnDefs:h.value,style:de({height:d.height+"px"}),class:"ag-theme-quartz",onColumnMoved:$,onColumnResized:g,onColumnHeaderClicked:w},null,8,["rowData","columnDefs","style"]))}}),_t=re(ft,[["__scopeId","data-v-5dd2184c"]]),bt=T({__name:"TableCfg",setup(I){const u=O(),{tableCfg:s,columnFields:b,currentColumn:l}=z(u),_=f({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"80px"}}},properties:{dataIndex:{type:"select",label:"字段名",component:{asyncData:async()=>await new Promise($=>{setTimeout(()=>{$(b.value)},100)})}},title:{type:"string",label:"列名"},width:{type:"number",label:"列宽"},align:{type:"radio",label:"对齐方式",component:{dataSource:[{value:"left",label:"左"},{value:"center",label:"居中"},{value:"right",label:"右"}],buttonStyle:"solid"}},fixed:{type:"radio",label:"固定列",component:{dataSource:[{value:"left",label:"左"},{value:"right",label:"右"},{value:"none",label:"不固定"}],buttonStyle:"solid"}},type:{type:"select",label:"列类型",component:{dataSource:[{value:"link",label:"链接"},{value:"image",label:"图片"},{value:"text",label:"文本"}]}}}}),h=f();return Ve(()=>l.value,()=>{h.value.refreshOption("dataIndex")}),($,g)=>(m(),F(e(me),{formData:e(l),schema:_.value,ref_key:"schemaRef",ref:h,size:"small"},null,8,["formData","schema"]))}}),gt={class:"table-design"},Ct={class:"table-design-container"},ht={class:"main-part"},yt={class:"filter-part"},wt={class:"filter-container"},xt=["onClick"],kt={class:"add widget-item"},It={class:"tools-part"},Dt={class:"tools-container"},St={class:"add button-item"},$t={class:"table-part"},Rt=T({__name:"TableDesign",setup(I){const u=ze();M.onSubscribe("open-btn-modal",c=>{te(c)});const s=f([]);Me(()=>{U.getDataSourceDict().then(c=>{const{code:t,data:k,msg:N}=c;t==200&&(s.value=k)})});const b=O(),{tableCfg:l,columnFields:_,saveLoading:h}=z(b),{onSelectColumn:$,onRemoveBtn:g,onRemoveColumn:y,onSetColumns:R,onRemoveWidget:w,onAddBtn:d,onSave:p}=b;window.name="table-design";const i=()=>{var c;(c=l.value.filter.widgetList)==null||c.push({id:new Date().getTime().toString(),type:"input",label:"文本",field:"field"})},r=()=>{window.open("/lowcode/table","quick-build")},x=c=>{$(c.id,l.value.columns),q.value=!0},A=c=>{y(c.id,l.value.columns)};f([]);const Z=f([]),pe=()=>{U.getSourceData(l.value.datasource.sourceId,l.value.datasource.tableName).then(c=>{const{code:t,data:k,msg:N}=c;t==200&&(Z.value=k)})},ee=f([]),ve=()=>{U.getTableInfo(l.value.datasource.sourceId).then(c=>{const{code:t,data:k,msg:N}=c;t==200&&(ee.value=k)})},fe=()=>{U.getColumnInfo(l.value.datasource.sourceId,l.value.datasource.tableName).then(c=>{const{code:t,data:k,msg:N}=c;t==200&&(l.value.columns=k.map(v=>({dataIndex:v.columnName,title:v.columnComment||v.columnName,id:v.columnName,width:200,type:"text",align:"left",fixed:"none"})),R(k.map(v=>({label:v.columnComment?`${v.columnComment}(${v.columnName})`:v.columnName,value:v.columnName}))))}),pe()},_e=()=>{d("header")},D=f({id:"",name:"",eventFlowId:"",position:"header"}),W=f(!1),be=f([{label:"默认新增事件流",value:"add"},{label:"默认编辑事件流",value:"edit"},{label:"默认批量编辑事件流",value:"batchEdit"}]),te=c=>{D.value=c,W.value=!0},ge=c=>{u.push({path:"/design/flow",query:{id:c}})},Ce=()=>{u.push({path:"/design/flow"})},oe=f({}),E=f(!1),he=f({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{id:{type:"string",label:"控件标识",component:{disabled:!0}},field:{type:"string",label:"字段名称"},label:{type:"string",label:"文本标签"},type:{type:"radio",label:"控件类型",component:{dataSource:[{label:"输入框",value:"input"},{label:"选择框",value:"select"},{label:"日期框",value:"date"}],buttonStyle:"solid"}},dict:{type:"select",label:"字典",show:'"${formData.type}" == "select"'},defaultValue:{type:"string",label:"默认值"}}}),ye=c=>{oe.value=c,E.value=!0},q=f(!1);return(c,t)=>{const k=Je,N=Ke,v=Qe,P=Xe,we=Ye,xe=Ee,ke=Ze,ne=X,le=et,Ie=tt,De=ot,H=qe,Se=He("loading");return m(),C(V,null,[We((m(),C("div",gt,[o(xe,{onBack:r,ghost:!1,style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"}},{title:a(()=>[o(k,{value:e(l).name,"onUpdate:value":t[0]||(t[0]=n=>e(l).name=n),bordered:!1,class:"table-name"},null,8,["value"])]),extra:a(()=>[o(we,{class:"extra"},{default:a(()=>[o(v,{label:"选择数据源"},{default:a(()=>[o(N,{value:e(l).datasource.sourceId,"onUpdate:value":t[1]||(t[1]=n=>e(l).datasource.sourceId=n),options:s.value,style:{width:"180px"},fieldNames:{label:"datasourceName",value:"id"},onChange:t[2]||(t[2]=n=>ve())},null,8,["value","options"])]),_:1}),o(v,{label:"选择表名"},{default:a(()=>[o(N,{value:e(l).datasource.tableName,"onUpdate:value":t[3]||(t[3]=n=>e(l).datasource.tableName=n),options:ee.value,style:{width:"180px"},fieldNames:{label:"tableName",value:"tableName"},onChange:t[4]||(t[4]=n=>fe())},null,8,["value","options"])]),_:1}),o(P,{onClick:t[5]||(t[5]=n=>e(p)()),type:"primary",class:"save-btn"},{default:a(()=>[B(" 保存 ")]),_:1})]),_:1})]),_:1}),S("div",Ct,[S("div",ht,[S("div",yt,[S("div",wt,[o(e(se),{list:e(l).filter.widgetList,"onUpdate:list":t[7]||(t[7]=n=>e(l).filter.widgetList=n),class:"widget-container",animation:"300",group:{name:"widget",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:a(()=>[(m(!0),C(V,null,J(e(l).filter.widgetList,n=>(m(),C("div",{class:"widget-item",key:n.id,onClick:j=>ye(n)},[o(e(ie),{class:"move-handle",style:{cursor:"pointer"}}),o(v,{label:n.label,name:n.field},{default:a(()=>[n.type=="input"?(m(),F(k,{key:0})):n.type=="select"?(m(),F(N,{key:1})):(m(),F(ke,{key:2}))]),_:2},1032,["label","name"]),o(ne,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:j=>e(w)(n.id)},{default:a(()=>[o(e(K),{class:"remove-btn",onClick:ue(()=>{},["stop"])})]),_:2},1032,["onConfirm"])],8,xt))),128)),S("div",kt,[o(P,{type:"primary",onClick:t[6]||(t[6]=n=>i())},{default:a(()=>[B(" 添加控件 ")]),_:1})])]),_:1},8,["list"])])]),S("div",It,[S("div",Dt,[o(e(se),{list:e(l).action,"onUpdate:list":t[9]||(t[9]=n=>e(l).action=n),class:"button-container",animation:"300",group:{name:"button",pull:!0,put:!0},"ghost-class":"ghost",filter:".add",handle:".move-handle"},{default:a(()=>[(m(!0),C(V,null,J(e(l).action.filter(n=>n.position=="header"),n=>(m(),C("div",{class:"button-item",key:n.id},[o(e(ie),{class:"move-handle",style:{cursor:"pointer"}}),o(P,{onClick:j=>te(n)},{default:a(()=>[B(L(n.name),1)]),_:2},1032,["onClick"]),o(ne,{title:"确定要删除此按钮的配置吗?","ok-text":"确定","cancel-text":"取消",onConfirm:j=>e(g)(n.id)},{default:a(()=>[o(e(K),{class:"remove-btn"})]),_:2},1032,["onConfirm"])]))),128)),S("div",St,[o(P,{type:"primary",onClick:t[8]||(t[8]=n=>_e())},{default:a(()=>[B(" 添加按钮 ")]),_:1})])]),_:1},8,["list"])])]),S("div",$t,[o(_t,{columns:e(l).columns,"onUpdate:columns":t[10]||(t[10]=n=>e(l).columns=n),tableData:Z.value,height:550,onOnRemove:A,onOnClick:x},null,8,["columns","tableData"])])])])])),[[Se,e(h),void 0,{fullscreen:!0}]]),o(H,{title:"按钮配置",placement:"right",closable:!1,open:W.value,onClose:t[17]||(t[17]=n=>W.value=!1)},{default:a(()=>[o(De,{model:D.value},{default:a(()=>[o(v,{prop:"id",label:"按钮标识"},{default:a(()=>[o(k,{value:D.value.id,"onUpdate:value":t[11]||(t[11]=n=>D.value.id=n)},null,8,["value"])]),_:1}),o(v,{prop:"name",label:"按钮名称"},{default:a(()=>[o(k,{value:D.value.name,"onUpdate:value":t[12]||(t[12]=n=>D.value.name=n)},null,8,["value"])]),_:1}),o(v,{prop:"name",label:"按钮位置"},{default:a(()=>[o(Ie,{value:D.value.position,"onUpdate:value":t[13]||(t[13]=n=>D.value.position=n),"button-style":"solid"},{default:a(()=>[o(le,{value:"header"},{default:a(()=>[B("表头")]),_:1}),o(le,{value:"row"},{default:a(()=>[B("行内")]),_:1})]),_:1},8,["value"])]),_:1}),o(v,{prop:"event",label:"事件流"},{default:a(()=>[o(N,{value:D.value.eventFlowId,"onUpdate:value":t[16]||(t[16]=n=>D.value.eventFlowId=n),options:be.value},{suffixIcon:a(()=>[o(e(je),{style:{color:"#000"},title:"刷新"}),D.value.eventFlowId?(m(),F(e(Ge),{key:0,onClick:t[14]||(t[14]=n=>ge(D.value.eventFlowId)),style:{color:"#000"},title:"编辑事件流"})):(m(),F(e(Y),{key:1,style:{color:"#000"},title:"新增事件流",onClick:t[15]||(t[15]=n=>Ce())}))]),_:1},8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]),o(H,{title:"筛选控件配置",placement:"right",closable:!1,open:E.value,onClose:t[18]||(t[18]=n=>E.value=!1)},{default:a(()=>[o(e(me),{formData:oe.value,schema:he.value},null,8,["formData","schema"])]),_:1},8,["open"]),o(H,{title:"列配置",placement:"right",closable:!1,open:q.value,onClose:t[19]||(t[19]=n=>q.value=!1)},{default:a(()=>[o(bt)]),_:1},8,["open"])],64)}}}),Lt=re(Rt,[["__scopeId","data-v-ba91ecea"]]);export{Lt as default};
