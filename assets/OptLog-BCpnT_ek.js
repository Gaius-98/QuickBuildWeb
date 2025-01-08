import{r as A,c as Q}from"./index-DM3yB3WX.js";import{g as j,a4 as G,r as p,a5 as J,o as c,z as D,m as a,w as e,a6 as K,a7 as W,B as t,h as f,Q as o,aa as x,F as X,N as Z,a1 as ee,ar as ae,O as te,a0 as le,ab as oe,ad as ne,as as se,at as ue}from"./.pnpm-0Rj9Ahsw.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ie={getList:C=>A({method:"get",url:"operationlog/list",params:C})},pe={class:"optLog"},de=j({__name:"OptLog",setup(C){const s=G({keyword:"",startTime:"",endTime:"",pageNumber:1,pageSize:20}),v=p(""),w=p([]),B=p([{title:"操作用户",key:"username",dataIndex:"username"},{title:"ip地址",key:"ip",dataIndex:"ip"},{title:"地址",key:"location",dataIndex:"location"},{title:"操作模块",key:"optModule",dataIndex:"optModule"},{title:"操作类型",key:"optType",dataIndex:"optType"},{title:"操作结果",key:"resStatus",dataIndex:"resStatus"},{title:"响应时间",key:"resTime",dataIndex:"resTime"},{title:"操作时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),h=p(!1),M=p(),P=()=>{var i;(i=M.value)==null||i.resetFields(),k()},N=p(0),q=()=>{s.pageNumber=1,s.pageSize=20,k()},O=()=>{v.value?(s.startTime=v.value[0],s.endTime=v.value[1]):(s.startTime="",s.endTime="")},U=i=>{const{current:u,pageSize:_}=i;s.pageNumber=u,s.pageSize=_,k()},k=()=>{h.value=!0,ie.getList(s).then(i=>{const{code:u,data:_}=i;u==200&&(w.value=_.data,N.value=_.total),h.value=!1})},l=p({}),I=p(!1),V=i=>{l.value=i,I.value=!0},F=p([]),g=p(new Map),Y=["green","cyan","red","pink","orange","blue","purple"];return J(()=>{k(),Q.getDict(["optType"]).then(i=>{const{code:u,data:_,msg:b}=i;u==200&&(F.value=_.optType,F.value.forEach((T,y)=>{g.value.set(T.value,{label:T.label,color:Y[y]})}))})}),(i,u)=>{const _=Z,b=ee,T=ae,y=te,R=le,L=K,m=oe,E=ne,n=se,H=ue,$=W;return c(),D("div",pe,[a(L,{class:"search-area"},{default:e(()=>[a(R,{ref_key:"searchFormRef",ref:M,model:s,layout:"inline",onFinish:q},{default:e(()=>[a(b,{label:"用户名",name:"keyword"},{default:e(()=>[a(_,{value:s.keyword,"onUpdate:value":u[0]||(u[0]=r=>s.keyword=r)},null,8,["value"])]),_:1}),a(b,{label:"操作日期"},{default:e(()=>[a(T,{value:v.value,"onUpdate:value":u[1]||(u[1]=r=>v.value=r),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:u[2]||(u[2]=r=>O())},null,8,["value"])]),_:1}),a(b,null,{default:e(()=>[a(y,{type:"primary","html-type":"submit"},{default:e(()=>[t("搜索")]),_:1}),a(y,{style:{margin:"0 8px"},onClick:P},{default:e(()=>[t(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(L,null,{default:e(()=>[a(E,{loading:h.value,columns:B.value,"data-source":w.value,scroll:{y:600},onChange:U,pagination:{current:s.pageNumber,total:N.value,showSizeChanger:!0,pageSize:s.pageSize}},{bodyCell:e(({column:r,record:d})=>{var z;return[r.key=="optType"?(c(),f(m,{key:0,color:(z=g.value.get(d.optType))==null?void 0:z.color},{default:e(()=>{var S;return[t(o((S=g.value.get(d.optType))==null?void 0:S.label),1)]}),_:2},1032,["color"])):x("",!0),r.key=="resTime"?(c(),f(m,{key:1,color:parseInt(d.resTime)<500?"#87d068":"#f50"},{default:e(()=>[t(o(d.resTime),1)]),_:2},1032,["color"])):x("",!0),r.key=="resStatus"?(c(),D(X,{key:2},[d.resStatus=="1"?(c(),f(m,{key:0,color:"#87d068"},{default:e(()=>[t("成功")]),_:1})):(c(),f(m,{key:1,color:"#f50"},{default:e(()=>[t("失败")]),_:1}))],64)):x("",!0),r.key=="action"?(c(),f(y,{key:3,type:"link",onClick:S=>V(d)},{default:e(()=>[t("查看")]),_:2},1032,["onClick"])):x("",!0)]}),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a($,{open:I.value,"onUpdate:open":u[3]||(u[3]=r=>I.value=r),title:"查看详情",footer:null,width:"1000px"},{default:e(()=>[a(H,{column:2},{default:e(()=>[a(n,{label:"操作用户"},{default:e(()=>[t(o(l.value.username),1)]),_:1}),a(n,{label:"操作IP"},{default:e(()=>[t(o(l.value.ip),1)]),_:1}),a(n,{label:"操作地点"},{default:e(()=>[t(o(l.value.location),1)]),_:1}),a(n,{label:"操作时间"},{default:e(()=>[t(o(l.value.createTime),1)]),_:1}),a(n,{label:"请求类型"},{default:e(()=>[t(o(l.value.reqType),1)]),_:1}),a(n,{label:"请求地址"},{default:e(()=>[t(o(l.value.reqUrl),1)]),_:1}),a(n,{label:"请求参数"},{default:e(()=>[t(o(l.value.reqParam),1)]),_:1}),a(n,{label:"模块名称"},{default:e(()=>[t(o(l.value.moduleName),1)]),_:1}),a(n,{label:"方法名称"},{default:e(()=>[t(o(l.value.funcName),1)]),_:1}),a(n,{label:"操作模块"},{default:e(()=>[t(o(l.value.optModule),1)]),_:1}),a(n,{label:"操作类型"},{default:e(()=>{var r;return[a(m,{color:(r=g.value.get(l.value.optType))==null?void 0:r.color},{default:e(()=>{var d;return[t(o((d=g.value.get(l.value.optType))==null?void 0:d.label),1)]}),_:1},8,["color"])]}),_:1}),a(n,{label:"操作结果"},{default:e(()=>[l.value.resStatus=="1"?(c(),f(m,{key:0,color:"#87d068"},{default:e(()=>[t("成功")]),_:1})):(c(),f(m,{key:1,color:"#f50"},{default:e(()=>[t("失败")]),_:1}))]),_:1}),a(n,{label:"响应时间"},{default:e(()=>[a(m,{color:parseInt(l.value.resTime)<500?"#87d068":"#f50"},{default:e(()=>[t(o(l.value.resTime),1)]),_:1},8,["color"])]),_:1}),a(n,{label:"请求结果",span:4},{default:e(()=>[t(o(l.value.res),1)]),_:1}),a(n,{label:"异常信息",span:4},{default:e(()=>[t(o(l.value.errMsg),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),fe=re(de,[["__scopeId","data-v-f0f56045"]]);export{fe as default};
