import{d as N}from"./api-deybZKYD.js";import{g as Te,r as u,x as qe,D as De,a2 as $e,o as p,z as ee,m as t,w as o,K as r,p as S,i as v,be as ze,bf as Oe,bg as Ue,bh as ae,bi as Le,bj as Ve,bk as Be,M as Pe,b1 as Me,O as Ke,_ as je,ad as Ae,ae as Re,a$ as Ee,a4 as Fe,a5 as Qe,B as d,T as M,a6 as He,an as Ge,bl as Je,h as m,F as We,a7 as b,ah as Xe,e as te,aQ as Ye,L as Ze,b3 as ea,aa,aE as ta,b0 as la,a8 as oa,a9 as na,ap as sa,aq as ua,P as ia,Q as da}from"./.pnpm-Eyap3iyz.js";import{a as h}from"./api-DMzYay4L.js";/* empty css                   */import{_ as ca}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BK8uOyW8.js";const pa=y=>(ia("data-v-9f081024"),y=y(),da(),y),ra={class:"dataset-design"},ma={class:"container"},va={class:"left-part"},_a={class:"search-tree"},fa=["title"],ya={style:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},ga=pa(()=>r("span",{class:"iconfont icon-table"},null,-1)),xa={style:{width:"36px"}},ba={class:"right-part"},ha={class:"tools-area"},ka={class:"sql-area"},Ca={class:"result"},Ia={style:{color:"red"}},wa=Te({__name:"index",props:{type:{default:"add"},id:{},datasourceId:{},tableName:{}},setup(y){const K=u([]),j=u({}),T=u([]),le=()=>{n.value.execSql=Le(n.value.execSql,{language:"mysql"})},n=u({datasetName:"",datasourceId:"",execSql:"",status:"1",paramsConfig:[]}),oe=y,q=u(!1),{type:D,id:A,datasourceId:R,tableName:E}=qe(oe),$=()=>{N.getTableInfo(n.value.datasourceId).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(K.value=s)}),N.getSchema(n.value.datasourceId).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(j.value=s,T.value=[Ve({schema:j.value}),Be])})};n.value.datasetName=n.value.datasetName||"未命名",R.value&&(n.value.datasourceId=R.value,$(),E.value&&(n.value.execSql=`select * from ${E.value}`)),D.value==="edit"&&A.value&&h.getDetail(A.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(n.value=s,$())});const ne=De(()=>K.value.filter(l=>l.tableName.includes(z.value))),F=u([]),se=()=>{let l;D.value=="add"?l=h.add:D.value=="edit"&&(l=h.update),l(n.value).then(e=>{const{code:s,data:i,msg:f}=e;s==200&&te.success("保存成功")})},z=u("");$e(()=>{N.getList("").then(l=>{const{code:e,data:s}=l;e==200&&(F.value=s)})});const O=u(!1),Q=u([]),U=u(!1),ue=u([{title:"字段名称",key:"columnName",dataIndex:"columnName",width:"200px"},{title:"字段类型",key:"columnType",dataIndex:"columnType",width:"200px"},{title:"字段注释",key:"columnComment",dataIndex:"columnComment",width:"200px"}]),H=u(""),ie=l=>{U.value=!0,H.value=l,N.getColumnInfo(n.value.datasourceId,l).then(e=>{const{code:s,data:i}=e;U.value=!1,s==200&&(Q.value=i)}),O.value=!0},de=()=>{window.open("/data/dataset","quick-build")},ce=()=>{te.success("复制成功")},k=u([]),G=u([]),pe=()=>{V.value="result",h.run(n.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(k.value=s,G.value=Object.keys(s[0]).map(f=>({title:f,key:f,dataIndex:f,ellipsis:!0,width:200})))})},re=l=>{const{current:e,pageSize:s}=l;_.value.pageNumber=e,_.value.pageSize=s,X()},me=l=>{l==="history"&&X()},_=u({keyword:n.value.datasourceId,pageSize:10,pageNumber:1}),J=u([]),W=u(0),ve=u([{title:"执行sql",key:"execSql",dataIndex:"execSql",ellipsis:!0},{title:"耗时",key:"executionTime",dataIndex:"executionTime"},{title:"执行结果",key:"status",dataIndex:"status"},{title:"操作",key:"action",dataIndex:"action",wdith:"100px"}]);u({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{execSql:{type:"string",label:"执行语句",component:{name:"code-editor"}},status:{type:"select",label:"执行结果",component:{dataSource:[{label:"成功",value:"1"},{label:"失败",value:"0"}]}},errMsg:{type:"textarea",label:"错误日志"}}});const X=()=>{_.value.keyword=n.value.datasourceId,h.getLogList(_.value).then(l=>{const{code:e,data:s,msg:i}=l;e==200&&(J.value=s.data,W.value=s.total)})},L=u(!1),g=u({}),_e=l=>{L.value=!0,g.value=l},V=u("result"),fe=()=>{q.value=!0},ye=u([{title:"参数名",key:"paramsName",dataIndex:"paramsName"},{title:"参数类型",key:"paramsType",dataIndex:"paramsType"},{title:"参数默认值",key:"paramsDefaultValue",dataIndex:"paramsDefaultValue"},{title:"操作",key:"action",dataIndex:"action"}]),ge=()=>{let l=Ye();n.value.paramsConfig.push({id:l,paramsDefaultValue:"",paramsType:"string",paramsName:""})},xe=l=>{let e=n.value.paramsConfig.findIndex(s=>s.id==l.id);n.value.paramsConfig.splice(e,1)};return(l,e)=>{const s=Ze,i=Pe,f=ea,be=Me,Y=Ke,B=je,he=Ae,ke=Re,C=aa,Ce=ta,Z=la,I=oa,Ie=Ee,P=Fe,we=na,w=sa,Ne=ua,Se=Qe("copy");return p(),ee("div",ra,[t(be,{style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"},onBack:e[2]||(e[2]=a=>de())},{title:o(()=>[t(s,{value:n.value.datasetName,"onUpdate:value":e[0]||(e[0]=a=>n.value.datasetName=a),bordered:!1,class:"dataset-name"},null,8,["value"])]),extra:o(()=>[t(f,null,{default:o(()=>[t(i,{onClick:e[1]||(e[1]=a=>se()),type:"primary",class:"save-btn"},{default:o(()=>[d(" 保存 ")]),_:1})]),_:1})]),_:1}),r("div",ma,[r("div",va,[r("div",_a,[t(Y,{value:n.value.datasourceId,"onUpdate:value":e[3]||(e[3]=a=>n.value.datasourceId=a),options:F.value,fieldNames:{label:"datasourceName",value:"id"},style:{width:"100%"},onChange:e[4]||(e[4]=a=>$())},null,8,["value","options"]),t(B,{style:{margin:"8px 0"}}),t(he,{value:z.value,"onUpdate:value":e[5]||(e[5]=a=>z.value=a),style:{"margin-bottom":"8px"},placeholder:"请输入表名称",allowClear:""},null,8,["value"]),t(ke,{"tree-data":ne.value,selectable:"",fieldNames:{title:"tableName",key:"tableName",children:"children"},height:"740"},{title:o(a=>[r("div",{style:{width:"200px",display:"flex","justify-content":"space-between"},title:a.tableName},[r("span",ya,[ga,d(" "+M(a.tableName),1)]),r("span",xa,[He(t(v(Ge),{title:"复制表名",style:{cursor:"pointer","margin-right":"5px"},onClick:e[6]||(e[6]=c=>ce())},null,512),[[Se,a.tableName]]),t(v(Je),{title:"查看字段信息",style:{cursor:"pointer"},onClick:c=>ie(a.tableName)},null,8,["onClick"])])],8,fa)]),_:1},8,["tree-data"])])]),r("div",ba,[r("div",ha,[t(i,{onClick:e[7]||(e[7]=a=>pe()),type:"text",icon:S(v(ze))},{default:o(()=>[d("运行")]),_:1},8,["icon"]),t(B,{type:"vertical"}),t(i,{onClick:e[8]||(e[8]=a=>le()),type:"text",icon:S(v(Oe))},{default:o(()=>[d("美化")]),_:1},8,["icon"]),t(B,{type:"vertical"}),t(i,{onClick:e[9]||(e[9]=a=>fe()),type:"text",icon:S(v(Ue))},{default:o(()=>[d("参数")]),_:1},8,["icon"])]),r("div",ka,[t(v(ae),{style:{height:"350px"},"indent-with-tab":!0,"tab-size":2,extensions:T.value,modelValue:n.value.execSql,"onUpdate:modelValue":e[10]||(e[10]=a=>n.value.execSql=a)},null,8,["extensions","modelValue"])]),r("div",Ca,[t(Ie,{activeKey:V.value,"onUpdate:activeKey":e[11]||(e[11]=a=>V.value=a),onChange:me},{default:o(()=>[t(Z,{key:"result",tab:"执行结果"},{default:o(()=>[k.value&&k.value.length>0?(p(),m(C,{key:0,style:{width:"100%"},size:"small",scroll:{x:"max-content",y:"280px"},"data-source":k.value,columns:G.value},null,8,["data-source","columns"])):(p(),m(Ce,{key:1}))]),_:1}),t(Z,{key:"history",tab:"历史记录"},{default:o(()=>[t(C,{scroll:{y:"280px"},size:"small","data-source":J.value,columns:ve.value,onChange:re,pagination:{current:_.value.pageNumber,total:W.value,showSizeChanger:!1,pageSize:_.value.pageSize}},{bodyCell:o(({column:a,record:c})=>[a.key=="status"?(p(),ee(We,{key:0},[c.status=="1"?(p(),m(I,{key:0,color:"#87d068"},{default:o(()=>[d("成功")]),_:1})):(p(),m(I,{key:1,color:"#f50"},{default:o(()=>[d("失败")]),_:1}))],64)):b("",!0),a.key=="action"?(p(),m(i,{key:1,type:"link",onClick:x=>_e(c)},{default:o(()=>[d("查看")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["data-source","columns","pagination"])]),_:1})]),_:1},8,["activeKey"])])])]),t(P,{width:"600px",title:`${H.value}字段明细`,footer:null,open:O.value,"onUpdate:open":e[12]||(e[12]=a=>O.value=a)},{default:o(()=>[t(C,{size:"small",class:"ant-table-striped","data-source":Q.value,columns:ue.value,loading:U.value,"row-class-name":(a,c)=>c%2===1?"table-striped":null,pagination:!1,scroll:{x:"auto",y:"500px"}},null,8,["data-source","columns","loading","row-class-name"])]),_:1},8,["title","open"]),t(P,{title:"参数配置",open:q.value,"onUpdate:open":e[14]||(e[14]=a=>q.value=a),width:"800px",height:"400px",footer:null},{default:o(()=>[t(i,{type:"primary",style:{"margin-bottom":"5px"},onClick:e[13]||(e[13]=a=>ge()),icon:S(v(Xe))},{default:o(()=>[d("新增")]),_:1},8,["icon"]),t(C,{columns:ye.value,"data-source":n.value.paramsConfig,scroll:{y:"300px"},pagination:!1},{bodyCell:o(({column:a,record:c})=>[["paramsName","paramsDefaultValue"].includes(a.key)?(p(),m(s,{key:0,value:c[a.dataIndex],"onUpdate:value":x=>c[a.dataIndex]=x},null,8,["value","onUpdate:value"])):b("",!0),a.key=="paramsType"?(p(),m(Y,{key:1,style:{width:"100%"},value:c[a.dataIndex],"onUpdate:value":x=>c[a.dataIndex]=x,options:[{label:"字符串",value:"string"}]},null,8,["value","onUpdate:value"])):b("",!0),a.key=="action"?(p(),m(we,{key:2,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:x=>xe(c)},{default:o(()=>[t(i,{type:"link",danger:""},{default:o(()=>[d("删除")]),_:1})]),_:2},1032,["onConfirm"])):b("",!0)]),_:1},8,["columns","data-source"])]),_:1},8,["open"]),t(P,{title:"日志明细",open:L.value,"onUpdate:open":e[15]||(e[15]=a=>L.value=a),width:"900px",footer:null},{default:o(()=>[t(Ne,{size:"small",column:2,style:{width:"800px"}},{default:o(()=>[t(w,{label:"执行结果",span:1},{default:o(()=>[g.value.status=="1"?(p(),m(I,{key:0,color:"#87d068"},{default:o(()=>[d("成功")]),_:1})):(p(),m(I,{key:1,color:"#f50"},{default:o(()=>[d("失败")]),_:1}))]),_:1}),t(w,{label:"执行耗时",span:1},{default:o(()=>[d(M(g.value.executionTime),1)]),_:1}),t(w,{label:"执行语句",span:2},{default:o(()=>[t(v(ae),{style:{height:"200px",width:"100%"},"indent-with-tab":!0,"tab-size":2,extensions:T.value,"model-value":g.value.execSql,disabled:!0},null,8,["extensions","model-value"])]),_:1}),t(w,{label:"错误日志",span:2},{default:o(()=>[r("span",Ia,M(g.value.errMsg),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),za=ca(wa,[["__scopeId","data-v-9f081024"]]);export{za as default};
