import{a as y}from"./resource-DMa99rkk.js";import{g as M,W as O,r as c,X as T,N as b,o as d,A as z,l as a,w as o,Y as W,a0 as N,C as u,K as X,h as S,a1 as h,P as Y,i as j,ap as G,e as v,a2 as H,a3 as J,a4 as Q,a5 as Z,al as ee,af as ae,a7 as te,a8 as oe}from"./.pnpm-Bqj5ZitX.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Dcam5Uk9.js";const se={class:"resource"},ie={class:"tools"},le={key:1},ce=M({__name:"ResourceView",setup(re){const n=O({keyword:"",pageNumber:1,pageSize:10}),m=c(!1),k=c([]),I=c([{title:"文件名称",key:"originalname",dataIndex:"originalname",width:"300px"},{title:"缩略图",key:"img",dataIndex:"img",width:"300px"},{title:"文件大小",key:"size",dataIndex:"size",width:"120px"},{title:"地址",key:"path",dataIndex:"path"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),f=c(!1),x=c(),F=()=>{var t;(t=x.value)==null||t.resetFields(),i()},C=c(0),D=()=>{n.pageNumber=1,n.pageSize=10,i()},R=t=>{const{current:e,pageSize:s}=t;n.pageNumber=e,n.pageSize=s,i()},V=t=>{m.value=!0;const e=new FormData;e.append("file",t.file,encodeURIComponent(t.file.name)),y.add(e).then(s=>{const{code:l,data:r,msg:g}=s;l==200&&v.success(g),m.value=!1,i()})},i=()=>{f.value=!0,y.getList(n).then(t=>{const{code:e,data:s}=t;e==200&&(k.value=s.data,C.value=s.total),f.value=!1})};T(()=>{i()});const B=async t=>{const{code:e,msg:s,data:l}=await y.remove(t.id);e==200&&(v.success(l),i())},L=()=>{v.success("复制成功")};return(t,e)=>{const s=H,l=J,r=Q,g=Z,w=W,U=ee,$=ae,P=te,q=oe,A=N("copy"),E=N("loading");return b((d(),z("div",se,[a(w,{class:"search-area"},{default:o(()=>[a(g,{ref_key:"searchFormRef",ref:x,layout:"inline",model:n,onFinish:D},{default:o(()=>[a(l,{label:"资源名称",prop:"keyword"},{default:o(()=>[a(s,{value:n.keyword,"onUpdate:value":e[0]||(e[0]=p=>n.keyword=p)},null,8,["value"])]),_:1}),a(l,null,{default:o(()=>[a(r,{type:"primary","html-type":"submit"},{default:o(()=>[u("搜索")]),_:1}),a(r,{style:{margin:"0 8px"},onClick:F},{default:o(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(w,null,{default:o(()=>[X("div",ie,[a(U,{name:"file",accept:"image/*",customRequest:V,maxCount:"1",showUploadList:!1},{default:o(()=>[a(r,{type:"primary"},{default:o(()=>[u(" 上传")]),_:1})]),_:1})]),a(q,{loading:f.value,columns:I.value,"data-source":k.value,scroll:{y:560},onChange:R,pagination:{current:n.pageNumber,total:C.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:o(({column:p,record:_})=>[p.key=="img"?(d(),S($,{key:0,src:_.path,height:"130px"},null,8,["src"])):h("",!0),p.key=="path"?b((d(),z("span",le,[u(Y(_.path)+" ",1),a(j(G),{style:{cursor:"pointer"},onClick:e[1]||(e[1]=K=>L())})])),[[A,_.path]]):h("",!0),p.key=="action"?(d(),S(P,{key:2,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:K=>B(_)},{default:o(()=>[a(r,{type:"link",danger:""},{default:o(()=>[u("删除")]),_:1})]),_:2},1032,["onConfirm"])):h("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])),[[E,m.value,void 0,{fullscreen:!0}]])}}}),me=ne(ce,[["__scopeId","data-v-84d6fa49"]]);export{me as default};
