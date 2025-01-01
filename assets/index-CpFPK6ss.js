import{d as c}from"./api-18TOfXOm.js";import{g as te,at as le,r as u,D as oe,a0 as ne,o as p,y as I,K as f,l as t,a4 as k,n as se,i as K,af as de,w as o,F as ue,e as h,ab as ie,M as re,ac as ce,a1 as pe,a2 as $,a3 as me,a5 as P,B as m,T as ve,h as x,au as _e,av as fe,aw as be,ax as ye,a8 as ge,O as we,X as ke,L as xe,ae as Ce,W as Ne}from"./.pnpm-CdxUtEZU.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C-JjtMWW.js";const he={class:"container"},Ue={class:"search-tree"},qe={class:"tree-top"},De={style:{width:"160px",display:"flex","justify-content":"space-between"}},Ie={key:0,class:"iconfont icon-Mysql"},Pe={class:"datasource"},Fe={key:0},Me=te({__name:"index",setup(Oe){const E=le(),F=u([]),M=u([]),A=u([{title:"表名称",key:"tableName",dataIndex:"tableName",width:"300px"},{title:"表注释",key:"tableComment",dataIndex:"tableComment",width:"300px"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),b=u(!1),U=u(""),C=()=>{c.getList(U.value).then(l=>{const{code:e,data:s}=l;b.value=!1,e==200&&(F.value=s)})},O=()=>{b.value=!0,c.getTableInfo(y.value[0]).then(l=>{b.value=!1;const{code:e,data:s,msg:d}=l;e==200&&(M.value=s)})},y=u([]),j=(l,e)=>{e=="view"||e=="edit"?q(e,l):e=="remove"&&$.confirm({title:"删除数据源",content:"确定要删除吗?",okText:"确认",cancelText:"取消",onOk:()=>{c.remove(l).then(s=>{const{code:d,data:i,msg:D}=s;d==200&&(h.success("删除成功"),O())})}})},_=u("add"),W=oe(()=>{let l="新增数据源";switch(_.value){case"add":l="新增数据源";break;case"edit":l="编辑数据源";break;case"view":l="查看数据源";break}return l}),v=u(!1),N=u(),n=u({datasourceName:"",dbHost:"",dbName:"",dbPort:3306,dbPwd:"",dbType:"mysql",dbUsername:"",sourceType:"db",status:"",remark:""}),B=()=>{var l;(l=N.value)==null||l.validate().then(()=>{_.value=="add"?c.add(n.value).then(e=>{const{code:s,data:d,msg:i}=e;s==200&&h.success("新增成功"),C(),v.value=!1}):_.value=="edit"?c.update(n.value).then(e=>{const{code:s,data:d,msg:i}=e;s==200&&h.success("编辑成功"),C(),v.value=!1}):v.value=!1})},S=()=>{var l;(l=N.value)==null||l.resetFields()},q=(l,e)=>{_.value=l,l==="add"?(n.value={datasourceName:"",dbHost:"",dbName:"",dbPort:3306,dbPwd:"",dbType:"mysql",dbUsername:"",sourceType:"db",status:"",remark:""},v.value=!0):c.getDetail(e).then(s=>{const{code:d,data:i}=s;d==200&&(n.value=i,v.value=!0)})},X=()=>{var l;(l=N.value)==null||l.validate().then(()=>{c.connect(n.value).then(e=>{const{code:s,msg:d}=e;s==200&&h.success("连接成功")})})},z=u([{title:"字段名称",key:"columnName",dataIndex:"columnName",width:"300px"},{title:"字段类型",key:"columnType",dataIndex:"columnType",width:"300px"},{title:"字段注释",key:"columnComment",dataIndex:"columnComment",width:"300px"}]),G=(l,e)=>{l&&(e.loading=!0,c.getColumnInfo(y.value[0],e.tableName).then(s=>{e.loading=!1;const{code:d,data:i,msg:D}=s;d==200&&(e.fieldList=i)}))};ne(()=>{C()});const J=l=>{const e=E.resolve({path:"/design/dataset",query:{type:"add",datasourceId:y.value[0],tableName:l}});window.open(e.href,"_blank")};return(l,e)=>{const s=ie,d=re,i=fe,D=be,Q=ye,Y=ce,H=ge,L=pe,R=we,r=ke,g=xe,Z=Ce,ee=Ne,ae=$,w=me("has-perm");return p(),I(ue,null,[f("div",he,[f("div",Ue,[f("div",qe,[t(s,{value:U.value,"onUpdate:value":e[0]||(e[0]=a=>U.value=a),style:{"margin-bottom":"8px",width:"170px"},placeholder:"请输入数据源名称",onSearch:C},null,8,["value"]),k(t(d,{icon:se(K(de)),onClick:e[1]||(e[1]=a=>q("add"))},null,8,["icon"]),[[w,"lowcode:datasource:add"]])]),t(Y,{selectedKeys:y.value,"onUpdate:selectedKeys":e[2]||(e[2]=a=>y.value=a),"tree-data":F.value,selectable:"",fieldNames:{title:"datasourceName",key:"id",children:"children"},style:{height:"calc(100% - 30px)","overflow-y":"auto"},onSelect:O},{title:o(a=>[f("div",De,[f("span",null,[a.dbType==="mysql"?(p(),I("span",Ie)):P("",!0),m(" "+ve(a.datasourceName),1)]),t(Q,{trigger:["click"]},{overlay:o(()=>[t(D,{onClick:({key:T})=>j(a.id,T)},{default:o(()=>[k((p(),x(i,{key:"view"},{default:o(()=>[m("查看")]),_:1})),[[w,"lowcode:datasource:detail"]]),k((p(),x(i,{key:"edit"},{default:o(()=>[m("编辑")]),_:1})),[[w,"lowcode:datasource:update"]]),k((p(),x(i,{key:"remove"},{default:o(()=>[m("删除")]),_:1})),[[w,"lowcode:datasource:remove"]])]),_:2},1032,["onClick"])]),default:o(()=>[t(K(_e),{style:{transform:"rotate(90deg)"}})]),_:2},1024)])]),_:1},8,["selectedKeys","tree-data"])]),f("div",Pe,[t(L,null,{default:o(()=>[t(H,{loading:b.value,columns:A.value,"data-source":M.value,scroll:{y:740},pagination:!1,rowKey:"tableName",class:"ant-table-striped",onExpand:G},{bodyCell:o(({column:a,record:T})=>[a.key=="action"?(p(),x(d,{key:0,type:"link",onClick:V=>J(T.tableName)},{default:o(()=>[m("创建数据集")]),_:2},1032,["onClick"])):P("",!0)]),expandedRowRender:o(({record:a})=>[t(L,null,{default:o(()=>[t(H,{loading:a.loading,class:"ant-table-striped",columns:z.value,pagination:!1,"data-source":a.fieldList,"row-class-name":(T,V)=>V%2===1?"table-striped":null,style:{margin:"5px"}},null,8,["loading","columns","data-source","row-class-name"])]),_:2},1024)]),_:1},8,["loading","columns","data-source"])]),_:1})])]),t(ae,{title:W.value,open:v.value,"onUpdate:open":e[11]||(e[11]=a=>v.value=a),onOk:B,onCancel:S},{footer:o(()=>[_.value!="view"?(p(),I("div",Fe,[k((p(),x(d,{onClick:X},{default:o(()=>[m("测试连接")]),_:1})),[[w,"lowcode:datasource:connection"]]),t(d,{onClick:S},{default:o(()=>[m("取消")]),_:1}),t(d,{type:"primary",loading:b.value,onClick:B},{default:o(()=>[m("确定")]),_:1},8,["loading"])])):P("",!0)]),default:o(()=>[t(ee,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:N,disabled:_.value==="view"},{default:o(()=>[t(r,{label:"创建源类型",required:"",prop:"sourceType"},{default:o(()=>[t(R,{disabled:"",value:n.value.sourceType,"onUpdate:value":e[3]||(e[3]=a=>n.value.sourceType=a),options:[{label:"数据库",value:"db"}]},null,8,["value"])]),_:1}),t(r,{label:"数据库类型",required:"",prop:"dbType"},{default:o(()=>[t(R,{value:n.value.dbType,"onUpdate:value":e[4]||(e[4]=a=>n.value.dbType=a),options:[{label:"mysql",value:"mysql"}]},null,8,["value"])]),_:1}),t(r,{label:"数据源名称",required:"",prop:"datasourceName"},{default:o(()=>[t(g,{value:n.value.datasourceName,"onUpdate:value":e[5]||(e[5]=a=>n.value.datasourceName=a)},null,8,["value"])]),_:1}),t(r,{label:"数据库地址",required:"",prop:"dbHost"},{default:o(()=>[t(g,{value:n.value.dbHost,"onUpdate:value":e[6]||(e[6]=a=>n.value.dbHost=a)},null,8,["value"])]),_:1}),t(r,{label:"端口",required:"",prop:"dbPort"},{default:o(()=>[t(g,{value:n.value.dbPort,"onUpdate:value":e[7]||(e[7]=a=>n.value.dbPort=a)},null,8,["value"])]),_:1}),t(r,{label:"数据库名称",required:"",prop:"dbName"},{default:o(()=>[t(g,{value:n.value.dbName,"onUpdate:value":e[8]||(e[8]=a=>n.value.dbName=a)},null,8,["value"])]),_:1}),t(r,{label:"用户名",required:"",prop:"dbUsername"},{default:o(()=>[t(g,{value:n.value.dbUsername,"onUpdate:value":e[9]||(e[9]=a=>n.value.dbUsername=a)},null,8,["value"])]),_:1}),t(r,{label:"密码",required:"",prop:"dbPwd"},{default:o(()=>[t(Z,{value:n.value.dbPwd,"onUpdate:value":e[10]||(e[10]=a=>n.value.dbPwd=a)},null,8,["value"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["title","open"])],64)}}}),Re=Te(Me,[["__scopeId","data-v-7d66461f"]]);export{Re as default};
