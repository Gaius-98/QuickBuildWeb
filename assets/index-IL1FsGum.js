import{d as N}from"./api-BkMGpLW8.js";import{g as Te,r as u,v as De,D as $e,W as ze,o as p,y as ee,l as t,w as n,J as r,n as S,i as v,b7 as Oe,b8 as Ue,b9 as Ve,T as ae,ba as te,bb as Le,bc as Be,a3 as Me,b4 as Pe,U as Ke,C as Ae,ac as Re,ad as je,b2 as Fe,Y as He,$ as Ee,B as d,O as P,M as Je,ao as We,bd as Ye,h as m,F as Ge,a0 as b,ag as Qe,e as le,aS as Xe,a1 as Ze,b6 as ea,a7 as aa,aH as ta,b3 as la,a5 as na,a6 as oa,aq as sa,ar as ua,al as ia,am as da}from"./.pnpm-BIJ-Bq4G.js";import{a as h}from"./api-DX8_l51s.js";import"./SchemaForm-Bu-owNqb.js";import{_ as ca}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BiCObBSq.js";const pa=f=>(ia("data-v-3e858ede"),f=f(),da(),f),ra={class:"dataset-design"},ma={class:"container"},va={class:"left-part"},_a={class:"search-tree"},ya=["title"],fa={style:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},ga=pa(()=>r("span",{class:"iconfont icon-table"},null,-1)),xa={style:{width:"36px"}},ba={class:"right-part"},ha={class:"tools-area"},ka={class:"sql-area"},Ca={class:"result"},Ia={style:{color:"red"}},wa=Te({__name:"index",props:{type:{default:"add"},id:{},datasourceId:{},tableName:{}},setup(f){const K=u([]),A=u({}),q=u([]),ne=()=>{o.value.execSql=te(o.value.execSql,{language:"mysql"})},o=u({datasetName:"",datasourceId:"",execSql:"",status:"1",paramsConfig:[]}),oe=f,T=u(!1),{type:D,id:R,datasourceId:j,tableName:F}=De(oe),$=()=>{N.getTableInfo(o.value.datasourceId).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(K.value=s)}),N.getSchema(o.value.datasourceId).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(A.value=s,q.value=[Le({schema:A.value}),Be])})};o.value.datasetName=o.value.datasetName||"未命名",j.value&&(o.value.datasourceId=j.value,$(),F.value&&(o.value.execSql=`select * from ${F.value}`)),D.value==="edit"&&R.value&&h.getDetail(R.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(o.value=s,$())});const se=$e(()=>K.value.filter(l=>l.tableName.includes(z.value))),H=u([]),ue=()=>{let l;D.value=="add"?l=h.add:D.value=="edit"&&(l=h.update),l(o.value).then(e=>{const{code:s,data:i,msg:y}=e;s==200&&le.success("保存成功")})},z=u("");ze(()=>{N.getList("").then(l=>{const{code:e,data:s}=l;e==200&&(H.value=s.data)})});const O=u(!1),E=u([]),U=u(!1),ie=u([{title:"字段名称",key:"columnName",dataIndex:"columnName",width:"200px"},{title:"字段类型",key:"columnType",dataIndex:"columnType",width:"200px"},{title:"字段注释",key:"columnComment",dataIndex:"columnComment",width:"200px"}]),J=u(""),de=l=>{U.value=!0,J.value=l,N.getColumnInfo(o.value.datasourceId,l).then(e=>{const{code:s,data:i}=e;U.value=!1,s==200&&(E.value=i)}),O.value=!0},ce=()=>{window.open("/data/dataset","quick-build")},pe=()=>{le.success("复制成功")},k=u([]),W=u([]),re=()=>{L.value="result",h.run(o.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(k.value=s,W.value=Object.keys(s[0]).map(y=>({title:y,key:y,dataIndex:y,ellipsis:!0,width:200})))})},me=l=>{const{current:e,pageSize:s}=l;_.value.pageNumber=e,_.value.pageSize=s,Q()},ve=l=>{l==="history"&&Q()},_=u({keyword:o.value.datasourceId,pageSize:10,pageNumber:1}),Y=u([]),G=u(0),_e=u([{title:"执行sql",key:"execSql",dataIndex:"execSql",ellipsis:!0},{title:"耗时",key:"executionTime",dataIndex:"executionTime"},{title:"执行结果",key:"status",dataIndex:"status"},{title:"操作",key:"action",dataIndex:"action",wdith:"100px"}]);u({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{execSql:{type:"string",label:"执行语句",component:{name:"code-editor"}},status:{type:"select",label:"执行结果",component:{dataSource:[{label:"成功",value:"1"},{label:"失败",value:"0"}]}},errMsg:{type:"textarea",label:"错误日志"}}});const Q=()=>{_.value.keyword=o.value.datasourceId,h.getLogList(_.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(Y.value=s.data,G.value=s.total)})},V=u(!1),g=u({}),ye=l=>{V.value=!0,g.value=l},L=u("result"),fe=()=>{T.value=!0},ge=u([{title:"参数名",key:"paramsName",dataIndex:"paramsName"},{title:"参数类型",key:"paramsType",dataIndex:"paramsType"},{title:"参数默认值",key:"paramsDefaultValue",dataIndex:"paramsDefaultValue"},{title:"操作",key:"action",dataIndex:"action"}]),xe=()=>{let l=Xe();o.value.paramsConfig.push({id:l,paramsDefaultValue:"",paramsType:"string",paramsName:""})},be=l=>{let e=o.value.paramsConfig.findIndex(s=>s.id==l.id);o.value.paramsConfig.splice(e,1)};return(l,e)=>{const s=Ze,i=Me,y=ea,he=Pe,X=Ke,B=Ae,ke=Re,Ce=je,C=aa,Ie=ta,Z=la,I=na,we=Fe,M=He,Ne=oa,w=sa,Se=ua,qe=Ee("copy");return p(),ee("div",ra,[t(he,{style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"},onBack:e[2]||(e[2]=a=>ce())},{title:n(()=>[t(s,{value:o.value.datasetName,"onUpdate:value":e[0]||(e[0]=a=>o.value.datasetName=a),bordered:!1,class:"dataset-name"},null,8,["value"])]),extra:n(()=>[t(y,null,{default:n(()=>[t(i,{onClick:e[1]||(e[1]=a=>ue()),type:"primary",class:"save-btn"},{default:n(()=>[d(" 保存 ")]),_:1})]),_:1})]),_:1}),r("div",ma,[r("div",va,[r("div",_a,[t(X,{value:o.value.datasourceId,"onUpdate:value":e[3]||(e[3]=a=>o.value.datasourceId=a),options:H.value,fieldNames:{label:"datasourceName",value:"id"},style:{width:"100%"},onChange:e[4]||(e[4]=a=>$())},null,8,["value","options"]),t(B,{style:{margin:"8px 0"}}),t(ke,{value:z.value,"onUpdate:value":e[5]||(e[5]=a=>z.value=a),style:{"margin-bottom":"8px"},placeholder:"请输入表名称",allowClear:""},null,8,["value"]),t(Ce,{"tree-data":se.value,selectable:"",fieldNames:{title:"tableName",key:"tableName",children:"children"},style:{height:"calc(100%)","overflow-y":"auto"}},{title:n(a=>[r("div",{style:{width:"200px",display:"flex","justify-content":"space-between"},title:a.tableName},[r("span",fa,[ga,d(" "+P(a.tableName),1)]),r("span",xa,[Je(t(v(We),{title:"复制表名",style:{cursor:"pointer","margin-right":"5px"},onClick:e[6]||(e[6]=c=>pe())},null,512),[[qe,a.tableName]]),t(v(Ye),{title:"查看字段信息",style:{cursor:"pointer"},onClick:c=>de(a.tableName)},null,8,["onClick"])])],8,ya)]),_:1},8,["tree-data"])])]),r("div",ba,[r("div",ha,[t(i,{onClick:e[7]||(e[7]=a=>re()),type:"text",icon:S(v(Oe))},{default:n(()=>[d("运行")]),_:1},8,["icon"]),t(B,{type:"vertical"}),t(i,{onClick:e[8]||(e[8]=a=>ne()),type:"text",icon:S(v(Ue))},{default:n(()=>[d("美化")]),_:1},8,["icon"]),t(B,{type:"vertical"}),t(i,{onClick:e[9]||(e[9]=a=>fe()),type:"text",icon:S(v(Ve))},{default:n(()=>[d("参数")]),_:1},8,["icon"])]),r("div",ka,[t(v(ae),{style:{height:"350px"},"indent-with-tab":!0,"tab-size":2,extensions:q.value,modelValue:o.value.execSql,"onUpdate:modelValue":e[10]||(e[10]=a=>o.value.execSql=a)},null,8,["extensions","modelValue"])]),r("div",Ca,[t(we,{activeKey:L.value,"onUpdate:activeKey":e[11]||(e[11]=a=>L.value=a),onChange:ve},{default:n(()=>[t(Z,{key:"result",tab:"执行结果"},{default:n(()=>[k.value&&k.value.length>0?(p(),m(C,{key:0,style:{width:"100%"},size:"small",scroll:{x:"max-content",y:"280px"},"data-source":k.value,columns:W.value},null,8,["data-source","columns"])):(p(),m(Ie,{key:1}))]),_:1}),t(Z,{key:"history",tab:"历史记录"},{default:n(()=>[t(C,{scroll:{y:"280px"},size:"small","data-source":Y.value,columns:_e.value,onChange:me,pagination:{current:_.value.pageNumber,total:G.value,showSizeChanger:!1,pageSize:_.value.pageSize}},{bodyCell:n(({column:a,record:c})=>[a.key=="status"?(p(),ee(Ge,{key:0},[c.status=="1"?(p(),m(I,{key:0,color:"#87d068"},{default:n(()=>[d("成功")]),_:1})):(p(),m(I,{key:1,color:"#f50"},{default:n(()=>[d("失败")]),_:1}))],64)):b("",!0),a.key=="action"?(p(),m(i,{key:1,type:"link",onClick:x=>ye(c)},{default:n(()=>[d("查看")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["data-source","columns","pagination"])]),_:1})]),_:1},8,["activeKey"])])])]),t(M,{width:"600px",title:`${J.value}字段明细`,footer:null,open:O.value,"onUpdate:open":e[12]||(e[12]=a=>O.value=a)},{default:n(()=>[t(C,{size:"small",class:"ant-table-striped","data-source":E.value,columns:ie.value,loading:U.value,"row-class-name":(a,c)=>c%2===1?"table-striped":null,pagination:!1,scroll:{x:"auto",y:"500px"}},null,8,["data-source","columns","loading","row-class-name"])]),_:1},8,["title","open"]),t(M,{title:"参数配置",open:T.value,"onUpdate:open":e[14]||(e[14]=a=>T.value=a),width:"800px",height:"400px",footer:null},{default:n(()=>[t(i,{type:"primary",style:{"margin-bottom":"5px"},onClick:e[13]||(e[13]=a=>xe()),icon:S(v(Qe))},{default:n(()=>[d("新增")]),_:1},8,["icon"]),t(C,{columns:ge.value,"data-source":o.value.paramsConfig,scroll:{y:"300px"},pagination:!1},{bodyCell:n(({column:a,record:c})=>[["paramsName","paramsDefaultValue"].includes(a.key)?(p(),m(s,{key:0,value:c[a.dataIndex],"onUpdate:value":x=>c[a.dataIndex]=x},null,8,["value","onUpdate:value"])):b("",!0),a.key=="paramsType"?(p(),m(X,{key:1,style:{width:"100%"},value:c[a.dataIndex],"onUpdate:value":x=>c[a.dataIndex]=x,options:[{label:"字符串",value:"string"}]},null,8,["value","onUpdate:value"])):b("",!0),a.key=="action"?(p(),m(Ne,{key:2,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:x=>be(c)},{default:n(()=>[t(i,{type:"link",danger:""},{default:n(()=>[d("删除")]),_:1})]),_:2},1032,["onConfirm"])):b("",!0)]),_:1},8,["columns","data-source"])]),_:1},8,["open"]),t(M,{title:"日志明细",open:V.value,"onUpdate:open":e[15]||(e[15]=a=>V.value=a),width:"900px",footer:null},{default:n(()=>[t(Se,{size:"small",column:2,style:{width:"800px"}},{default:n(()=>[t(w,{label:"执行结果",span:1},{default:n(()=>[g.value.status=="1"?(p(),m(I,{key:0,color:"#87d068"},{default:n(()=>[d("成功")]),_:1})):(p(),m(I,{key:1,color:"#f50"},{default:n(()=>[d("失败")]),_:1}))]),_:1}),t(w,{label:"执行耗时",span:1},{default:n(()=>[d(P(g.value.executionTime)+"ms",1)]),_:1}),t(w,{label:"执行语句",span:2},{default:n(()=>[t(v(ae),{style:{height:"200px",width:"100%"},"indent-with-tab":!0,"tab-size":2,extensions:q.value,"model-value":v(te)(g.value.execSql,{language:"mysql"}),disabled:!0},null,8,["extensions","model-value"])]),_:1}),t(w,{label:"错误日志",span:2},{default:n(()=>[r("span",Ia,P(g.value.errMsg),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),za=ca(wa,[["__scopeId","data-v-3e858ede"]]);export{za as default};
