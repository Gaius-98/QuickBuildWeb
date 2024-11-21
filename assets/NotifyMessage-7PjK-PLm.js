import{a as F}from"./notice-XixxFeav.js";import{c as q}from"./index-DQD6bgnR.js";import{g as A,V as E,r as c,W,o as u,y as b,l as a,w as e,X,Y as j,$ as G,B as s,F as J,h as g,a0 as T,O as m,M as K,a1 as Q,a2 as Z,ap as ee,a3 as te,a4 as ae,a5 as ne,a7 as oe,aq as le,ar as se}from"./.pnpm-ChulSkD7.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ce={class:"notice"},ue=["title"],re={key:2},de=A({__name:"NotifyMessage",setup(_e){const n=E({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),d=c(""),M=()=>{d.value?(n.startTime=d.value[0],n.endTime=d.value[1]):(n.startTime="",n.endTime="")},C=c([]),z=c([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"500px",ellipsis:!0},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"消息发送时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),w=c(!1),I=c(),B=()=>{var l;(l=I.value)==null||l.resetFields(),n.startTime="",n.endTime="",d.value="",f()},N=c(0),V=()=>{n.pageNumber=1,n.pageSize=10,f()},Y=l=>{const{current:t,pageSize:i}=l;n.pageNumber=t,n.pageSize=i,f()},f=()=>{w.value=!0,F.getNoticeList(n).then(l=>{const{code:t,data:i}=l;t==200&&(C.value=i.data,N.value=i.total),w.value=!1})},D=c([]),$=c({});W(()=>{f(),q.getDict(["configType"]).then(l=>{const{code:t,data:i,msg:y}=l;t==200&&(D.value=i.configType,$.value=D.value.reduce((k,p)=>(k[p.value]=p.label,k),{}))})});const x=c(!1),_=c({id:0,noticeId:0,recevieId:"",status:"",notice:{title:"",content:""}}),L=async l=>{const{code:t,data:i}=await F.getNoticeDetail(l.id);t==200&&(_.value=i,x.value=!0)};return(l,t)=>{const i=Q,y=Z,k=ee,p=te,O=ae,S=X,h=ne,P=oe,v=le,R=se,U=j,H=G("has-perm");return u(),b("div",ce,[a(S,{class:"search-area"},{default:e(()=>[a(O,{ref_key:"searchFormRef",ref:I,model:n,layout:"inline",onFinish:V},{default:e(()=>[a(y,{label:"关键字",prop:"keyword"},{default:e(()=>[a(i,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=o=>n.keyword=o)},null,8,["value"])]),_:1}),a(y,{label:"日期范围"},{default:e(()=>[a(k,{value:d.value,"onUpdate:value":t[1]||(t[1]=o=>d.value=o),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:t[2]||(t[2]=o=>M())},null,8,["value"])]),_:1}),a(y,null,{default:e(()=>[a(p,{type:"primary","html-type":"submit"},{default:e(()=>[s("搜索")]),_:1}),a(p,{style:{margin:"0 8px"},onClick:B},{default:e(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(S,null,{default:e(()=>[a(P,{loading:w.value,columns:z.value,"data-source":C.value,scroll:{y:560},onChange:Y,pagination:{current:n.pageNumber,total:N.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:e(({column:o,record:r})=>[o.key=="status"?(u(),b(J,{key:0},[r.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))],64)):T("",!0),o.key=="title"?(u(),b("div",{key:1,title:r.notice.title},m(r.notice.title),9,ue)):T("",!0),o.key=="content"?(u(),b("div",re,m(r.notice.content),1)):T("",!0),o.key=="action"?K((u(),g(p,{key:3,type:"link",onClick:pe=>L(r)},{default:e(()=>[s("查看")]),_:2},1032,["onClick"])),[[H,"private:notice:detail"]]):T("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a(U,{open:x.value,"onUpdate:open":t[3]||(t[3]=o=>x.value=o),title:"查看通知",footer:null,width:700,onCancel:t[4]||(t[4]=o=>f())},{default:e(()=>[a(R,{column:2},{default:e(()=>[a(v,{label:"标题",style:{"font-weight":"bold"}},{default:e(()=>[s(m(_.value.notice.title),1)]),_:1}),a(v,{label:"状态"},{default:e(()=>[_.value.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))]),_:1}),a(v,{label:"发送人"},{default:e(()=>{var o,r;return[s(m((r=(o=_.value)==null?void 0:o.userInfo)==null?void 0:r.username),1)]}),_:1}),a(v,{label:"查看时间"},{default:e(()=>[s(m(_.value.readTime),1)]),_:1}),a(v,{label:"内容",span:2},{default:e(()=>[s(m(_.value.notice.content),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),ye=ie(de,[["__scopeId","data-v-88296c07"]]);export{ye as default};
