import{_ as G}from"./CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-DHtb7zUh.js";import{_ as H}from"./EventFlow-BqTT_74G.js";import{c as J}from"./index-BAc6hcjb.js";import{g as K,t as W,x as X,v as Y,D as N,o as i,h as y,w as n,V as _,y as C,l as a,i as O,bm as z,bn as Q,B as x,n as Z,W as L,N as M,Y as h,a2 as ee,r as d,F as R,H as te,J as ae,X as oe,a3 as ne,a4 as le,ai as se,b0 as ue,a$ as pe,$ as re}from"./.pnpm-Btz5KtF6.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ie={key:2,style:{display:"flex"}},me=K({__name:"EditTable",props:W({columns:{},action:{type:Boolean,default:!0},height:{default:150}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(V){const c=X(V,"modelValue");let w=V;const{columns:r,action:t}=Y(w),v=N(()=>D("input")),b=N(()=>D("select")),T=N(()=>t.value?[...r.value,{title:"操作",dataIndex:"_action_"}]:r.value),g=u=>{var l;return((l=r.value.find(e=>e.dataIndex==u))==null?void 0:l.options)||[]},D=u=>r.value.filter(l=>l.type==u).map(l=>l.dataIndex),k=()=>{let u={};r.value.map(l=>{Reflect.set(u,l.dataIndex,"")}),c.value.push(u)},U=u=>{c.value.splice(u,1)};return(u,l)=>{const e=L,f=M,I=h,B=ee;return i(),y(B,{columns:T.value,"data-source":c.value,pagination:!1,rowKey:(s,p)=>p,size:"small",scroll:{y:u.height}},{bodyCell:n(({column:s,record:p,index:$})=>[v.value.includes(s.dataIndex)?(i(),y(e,{key:0,value:p[s.dataIndex],"onUpdate:value":m=>p[s.dataIndex]=m},null,8,["value","onUpdate:value"])):_("",!0),b.value.includes(s.dataIndex)?(i(),y(f,{key:1,value:p[s.dataIndex],"onUpdate:value":m=>p[s.dataIndex]=m,options:g(s.dataIndex)},null,8,["value","onUpdate:value","options"])):_("",!0),s.dataIndex=="_action_"?(i(),C("div",ie,[a(O(z),{class:"icon",onClick:l[0]||(l[0]=m=>k())}),a(O(Q),{class:"icon",onClick:m=>U($)},null,8,["onClick"])])):_("",!0)]),emptyText:n(()=>[a(I,{type:"text",onClick:k,icon:Z(O(z))},{default:n(()=>[x(" 新增数据")]),_:1},8,["icon"])]),_:1},8,["columns","data-source","rowKey","scroll"])}}}),E=de(me,[["__scopeId","data-v-5b9e8dbe"]]),ye=K({__name:"FlowView",setup(V){const c=d({nodes:[],edges:[]}),w=d([{type:"circle",text:"开始",label:"开始节点",icon:"/src/assets/images/flow/开始.png",properties:{nodeType:"start-node",extraData:{}}},{type:"circle",text:"结束",label:"结束节点",icon:"/src/assets/images/flow/结束.png",properties:{nodeType:"end-node",extraData:{}}},{type:"rect",text:"处理函数",label:"处理函数",icon:"/src/assets/images/flow/js函数.png",properties:{nodeType:"func-node",extraData:{code:""}}},{type:"rect",text:"打开弹窗",label:"弹窗",icon:"/src/assets/images/flow/弹窗.png",properties:{nodeType:"modal-node",extraData:{size:"small",formId:""}}},{type:"rect",text:"跳转外部链接",label:"链接",icon:"/src/assets/images/flow/链接.png",properties:{nodeType:"link-node",extraData:{url:""}}},{type:"diamond",text:"请求数据",label:"请求数据",icon:"/src/assets/images/flow/发起请求.png",properties:{nodeType:"request-node",extraData:{url:"",method:"",params:[],headers:[],body:[]}}}]),r=d(!1),t=d({}),v=d(),b=d([]),T=d([{value:"get",label:"GET"},{value:"post",label:"POST"}]),g=d([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"},{title:"引用变量",dataIndex:"var",type:"input"}]),D=d([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"}]),k=()=>{v.value.getRawData()},U=l=>{r.value=!0,t.value=l.data};J.getFormDict().then(l=>{const{code:e,data:f,msg:I}=l;e==200&&(b.value=f)});const u=()=>{v.value.updateNodeData(t.value)};return(l,e)=>{const f=h,I=H,B=G,s=oe,p=ne,$=le,m=M,j=se,q=L,F=ue,A=pe,P=re,S=te;return i(),C(R,null,[a(f,{onClick:e[0]||(e[0]=o=>k())},{default:n(()=>[x("保存")]),_:1}),a(I,{ref_key:"eventFlowRef",ref:v,data:c.value,dndList:w.value,style:{height:"600px"},onOnClickEle:U},null,8,["data","dndList"]),a(S,{open:r.value,"onUpdate:open":e[10]||(e[10]=o=>r.value=o),title:"节点配置",placement:"right",onClose:e[11]||(e[11]=o=>u()),width:"600px"},{default:n(()=>[a(P,{model:t.value.properties.extraData},{default:n(()=>[t.value.properties.nodeType=="func-node"?(i(),y(s,{key:0,label:"函数"},{default:n(()=>[a(B,{value:t.value.properties.extraData.code,"onUpdate:value":e[1]||(e[1]=o=>t.value.properties.extraData.code=o),prepend:"()=>{",append:"}",theme:"light"},null,8,["value"])]),_:1})):_("",!0),t.value.properties.nodeType=="modal-node"?(i(),C(R,{key:1},[a(s,{label:"弹窗大小"},{default:n(()=>[a($,{value:t.value.properties.extraData.size,"onUpdate:value":e[2]||(e[2]=o=>t.value.properties.extraData.size=o),"button-style":"solid"},{default:n(()=>[a(p,{value:"small"},{default:n(()=>[x("小")]),_:1}),a(p,{value:"middle"},{default:n(()=>[x("中")]),_:1}),a(p,{value:"big"},{default:n(()=>[x("大")]),_:1})]),_:1},8,["value"])]),_:1}),a(s,{label:"表单"},{default:n(()=>[a(m,{value:t.value.properties.extraData.formId,"onUpdate:value":e[3]||(e[3]=o=>t.value.properties.extraData.formId=o),options:b.value,fieldNames:{label:"name",value:"id"}},null,8,["value","options"])]),_:1})],64)):_("",!0),t.value.properties.nodeType=="link-node"?(i(),y(s,{key:2,label:"链接地址"},{default:n(()=>[a(j,{value:t.value.properties.extraData.url,"onUpdate:value":e[4]||(e[4]=o=>t.value.properties.extraData.url=o)},null,8,["value"])]),_:1})):_("",!0),t.value.properties.nodeType=="request-node"?(i(),C(R,{key:3},[a(q,{value:t.value.properties.extraData.url,"onUpdate:value":e[6]||(e[6]=o=>t.value.properties.extraData.url=o)},{addonBefore:n(()=>[a(m,{value:t.value.properties.extraData.method,"onUpdate:value":e[5]||(e[5]=o=>t.value.properties.extraData.method=o),options:T.value},null,8,["value","options"])]),_:1},8,["value"]),ae("div",null,[a(A,null,{default:n(()=>[a(F,{key:"params",tab:"params"},{default:n(()=>[a(E,{columns:g.value,modelValue:t.value.properties.extraData.params,"onUpdate:modelValue":e[7]||(e[7]=o=>t.value.properties.extraData.params=o)},null,8,["columns","modelValue"])]),_:1}),a(F,{key:"headers",tab:"headers"},{default:n(()=>[a(E,{columns:D.value,modelValue:t.value.properties.extraData.headers,"onUpdate:modelValue":e[8]||(e[8]=o=>t.value.properties.extraData.headers=o)},null,8,["columns","modelValue"])]),_:1}),a(F,{key:"body",tab:"body"},{default:n(()=>[a(E,{columns:g.value,modelValue:t.value.properties.extraData.body,"onUpdate:modelValue":e[9]||(e[9]=o=>t.value.properties.extraData.body=o)},null,8,["columns","modelValue"])]),_:1})]),_:1})])],64)):_("",!0)]),_:1},8,["model"])]),_:1},8,["open"])],64)}}});export{ye as default};
