import{a as z}from"./notice-CKDyq226.js";import{c as A}from"./index-DM3yB3WX.js";import{g as E,a4 as Q,r as c,a5 as j,o as u,z as b,m as a,w as e,a6 as q,a7 as G,a8 as J,B as s,F as K,h as g,aa as T,Q as m,a9 as W,N as X,a1 as Z,ar as ee,O as te,a0 as ae,ab as oe,ad as ne,as as le,at as se}from"./.pnpm-0Rj9Ahsw.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ce={class:"notice"},ue=["title"],re={key:2},de=E({__name:"NotifyMessage",setup(_e){const o=Q({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),d=c(""),F=()=>{d.value?(o.startTime=d.value[0],o.endTime=d.value[1]):(o.startTime="",o.endTime="")},C=c([]),M=c([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"500px",ellipsis:!0},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"消息发送时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),w=c(!1),N=c(),B=()=>{var l;(l=N.value)==null||l.resetFields(),o.startTime="",o.endTime="",d.value="",f()},D=c(0),V=()=>{o.pageNumber=1,o.pageSize=10,f()},Y=l=>{const{current:t,pageSize:i}=l;o.pageNumber=t,o.pageSize=i,f()},f=()=>{w.value=!0,z.getNoticeList(o).then(l=>{const{code:t,data:i}=l;t==200&&(C.value=i.data,D.value=i.total),w.value=!1})},I=c([]),L=c({});j(()=>{f(),A.getDict(["configType"]).then(l=>{const{code:t,data:i,msg:y}=l;t==200&&(I.value=i.configType,L.value=I.value.reduce((k,p)=>(k[p.value]=p.label,k),{}))})});const x=c(!1),_=c({id:0,noticeId:0,recevieId:"",status:"",notice:{title:"",content:""}}),O=async l=>{const{code:t,data:i}=await z.getNoticeDetail(l.id);t==200&&(_.value=i,x.value=!0)};return(l,t)=>{const i=X,y=Z,k=ee,p=te,P=ae,S=q,h=oe,R=ne,v=le,U=se,$=G,H=J("has-perm");return u(),b("div",ce,[a(S,{class:"search-area"},{default:e(()=>[a(P,{ref_key:"searchFormRef",ref:N,model:o,layout:"inline",onFinish:V},{default:e(()=>[a(y,{label:"关键字",prop:"keyword"},{default:e(()=>[a(i,{value:o.keyword,"onUpdate:value":t[0]||(t[0]=n=>o.keyword=n)},null,8,["value"])]),_:1}),a(y,{label:"日期范围"},{default:e(()=>[a(k,{value:d.value,"onUpdate:value":t[1]||(t[1]=n=>d.value=n),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:t[2]||(t[2]=n=>F())},null,8,["value"])]),_:1}),a(y,null,{default:e(()=>[a(p,{type:"primary","html-type":"submit"},{default:e(()=>[s("搜索")]),_:1}),a(p,{style:{margin:"0 8px"},onClick:B},{default:e(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(S,null,{default:e(()=>[a(R,{loading:w.value,columns:M.value,"data-source":C.value,scroll:{y:560},onChange:Y,pagination:{current:o.pageNumber,total:D.value,showSizeChanger:!0,pageSize:o.pageSize}},{bodyCell:e(({column:n,record:r})=>[n.key=="status"?(u(),b(K,{key:0},[r.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))],64)):T("",!0),n.key=="title"?(u(),b("div",{key:1,title:r.notice.title},m(r.notice.title),9,ue)):T("",!0),n.key=="content"?(u(),b("div",re,m(r.notice.content),1)):T("",!0),n.key=="action"?W((u(),g(p,{key:3,type:"link",onClick:pe=>O(r)},{default:e(()=>[s("查看")]),_:2},1032,["onClick"])),[[H,"private:notice:detail"]]):T("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a($,{open:x.value,"onUpdate:open":t[3]||(t[3]=n=>x.value=n),title:"查看通知",footer:null,width:700,onCancel:t[4]||(t[4]=n=>f())},{default:e(()=>[a(U,{column:2},{default:e(()=>[a(v,{label:"标题",style:{"font-weight":"bold"}},{default:e(()=>[s(m(_.value.notice.title),1)]),_:1}),a(v,{label:"状态"},{default:e(()=>[_.value.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))]),_:1}),a(v,{label:"发送人"},{default:e(()=>{var n,r;return[s(m((r=(n=_.value)==null?void 0:n.userInfo)==null?void 0:r.username),1)]}),_:1}),a(v,{label:"查看时间"},{default:e(()=>[s(m(_.value.readTime),1)]),_:1}),a(v,{label:"内容",span:2},{default:e(()=>[s(m(_.value.notice.content),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),ye=ie(de,[["__scopeId","data-v-88296c07"]]);export{ye as default};
