var N=Object.defineProperty;var T=(n,e,t)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var I=(n,e,t)=>(T(n,typeof e!="symbol"?e+"":e,t),t);import{_ as j}from"./CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-BamkaEJe.js";import{I as F,g as k,t as M,x as E,v as B,D as w,o as c,h as g,w as d,l as i,J as D,i as _,K as S,L as h,M as V,N as R,y,O as q,P as U,Q as O,F as C,R as A,A as G,B as $,T as J,U as L,V as P,r as x,W as H,X as K}from"./.pnpm-CdxUtEZU.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";class Q{constructor(e){I(this,"state");this.state=e}getValue(e){const{staticValue:t,mode:u,dynExp:l}=e;return u==="static"?t:this.resolveDynamicValue(l)}resolveDynamicValue(e){try{return new Function("state",`return ${e}`)(this.state)}catch(t){return console.error("评估动态表达式时出错:",t),null}}isDynamicConfigData(e){return typeof e=="object"&&e!==null&&["string","number","boolean"].includes(typeof e.staticValue)&&["static","dynamic"].includes(e.mode)&&typeof e.dynExp=="string"}processObject(e){const t=F(e);if(Array.isArray(t))return t.map(u=>this.processObject(u));if(typeof t=="object"&&t!==null){const u={};for(const l in t){const a=t[l];this.isDynamicConfigData(a)?u[l]=this.getValue(a):typeof a=="object"&&a!==null?u[l]=this.processObject(a):u[l]=a}return u}else return t}}const W=S("div",{class:"iconfont icon-brackets-curly"},null,-1),X=k({__name:"ConfigInput",props:M({compact:{type:Boolean,default:!0},size:{default:"default"}},{data:{required:!0},dataModifiers:{}}),emits:["update:data"],setup(n){const e=E(n,"data"),t=n,{size:u,compact:l}=B(t),a=w(()=>e.value.mode==="dynamic"),v=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"},p=o=>{e.value.mode==="dynamic"?e.value.dynExp=o.target.value:e.value.staticValue=o.target.value};return(o,r)=>{const m=h,b=V,f=R;return c(),g(f,{size:_(u),compact:_(l)},{default:d(()=>[i(m,D({value:a.value?e.value.dynExp:e.value.staticValue,onChange:p,style:{width:"calc(100% - 35px)"},prefix:a.value?"{":"",suffix:a.value?"}":""},o.$attrs),null,16,["value","prefix","suffix"]),i(b,{title:a.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:a.value?"primary":"",onClick:r[0]||(r[0]=s=>v())},{icon:d(()=>[W]),_:1},8,["title","type"])]),_:1},8,["size","compact"])}}}),Y=n=>(U("data-v-cc2abf8d"),n=n(),O(),n),Z={class:"config-select"},ee=Y(()=>S("div",{class:"iconfont icon-brackets-curly"},null,-1)),te=k({__name:"ConfigSelect",props:{data:{required:!0},dataModifiers:{}},emits:["update:data"],setup(n){const e=E(n,"data"),t=w(()=>e.value.mode==="dynamic"),u=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"};return(l,a)=>{const v=q,p=h,o=V;return c(),y("div",Z,[t.value?(c(),g(p,{key:1,value:e.value.dynExp,"onUpdate:value":a[1]||(a[1]=r=>e.value.dynExp=r),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(c(),g(v,D({key:0,style:{width:"calc(100% - 35px)"}},l.$attrs,{value:e.value.staticValue,"onUpdate:value":a[0]||(a[0]=r=>e.value.staticValue=r)}),null,16,["value"])),i(o,{title:t.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:t.value?"primary":"",onClick:a[2]||(a[2]=r=>u())},{icon:d(()=>[ee]),_:1},8,["title","type"])])}}}),ae=z(te,[["__scopeId","data-v-cc2abf8d"]]),ne=n=>(U("data-v-3b9fba08"),n=n(),O(),n),oe={class:"config-radio"},le=ne(()=>S("div",{class:"iconfont icon-brackets-curly"},null,-1)),se=k({__name:"ConfigRadio",props:M({options:{default:()=>[]},fields:{default:()=>({label:"label",value:"value",title:"title"})},icon:{type:Boolean,default:!1}},{data:{required:!0},dataModifiers:{}}),emits:["update:data"],setup(n){const e=E(n,"data"),t=n,{options:u,fields:l}=B(t),a=w(()=>e.value.mode==="dynamic"),v=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"};return(p,o)=>{const r=L,m=P,b=h,f=V;return c(),y("div",oe,[a.value?(c(),g(b,{key:1,value:e.value.dynExp,"onUpdate:value":o[1]||(o[1]=s=>e.value.dynExp=s),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(c(),g(m,D({key:0},p.$attrs,{style:{width:"calc(100% - 35px)"},value:e.value.staticValue,"onUpdate:value":o[0]||(o[0]=s=>e.value.staticValue=s),"button-style":"solid"}),{default:d(()=>[(c(!0),y(C,null,A(_(u),s=>(c(),g(r,{key:s[_(l).value],title:s[_(l).title]||s[_(l).label],value:s[_(l).value]},{default:d(()=>[p.icon?(c(),y("div",{key:0,class:G(["iconfont",s.label])},null,2)):(c(),y(C,{key:1},[$(J(s[_(l).label]),1)],64))]),_:2},1032,["title","value"]))),128))]),_:1},16,["value"])),i(f,{title:a.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:a.value?"primary":"",onClick:o[2]||(o[2]=s=>v())},{icon:d(()=>[le]),_:1},8,["title","type"])])}}}),ue=z(se,[["__scopeId","data-v-3b9fba08"]]),pe=k({__name:"HomeView",setup(n){const e=x({input:{staticValue:"",mode:"static",dynExp:""},select:{staticValue:"",mode:"static",dynExp:""},test:"123",radio:{}}),t=x({string:"配置表单",arr:[1,2,3,4],number:125654}),u=x([{label:"1",value:"1"},{label:"2",value:"2"}]),l=x([{label:"icon-lock1",value:"1",title:"锁定"},{label:"icon-unlock1",value:"2",title:"解锁"}]),a=()=>{e.value},v=()=>{new Q(t.value).processObject(e.value)};return(p,o)=>{const r=j,m=K,b=H,f=V;return c(),y(C,null,[i(r,{value:JSON.stringify(t.value,null,4),disabled:""},null,8,["value"]),i(b,null,{default:d(()=>[i(m,{label:"输入框"},{default:d(()=>[i(X,{data:e.value.input,"onUpdate:data":o[0]||(o[0]=s=>e.value.input=s)},null,8,["data"])]),_:1}),i(m,{label:"选择框"},{default:d(()=>[i(ae,{data:e.value.select,"onUpdate:data":o[1]||(o[1]=s=>e.value.select=s),options:u.value},null,8,["data","options"])]),_:1}),i(m,{label:"单选框"},{default:d(()=>[i(ue,{data:e.value.radio,"onUpdate:data":o[2]||(o[2]=s=>e.value.radio=s),options:l.value,icon:!0},null,8,["data","options"])]),_:1})]),_:1}),i(f,{onClick:a},{default:d(()=>[$("配置项")]),_:1}),i(f,{onClick:v},{default:d(()=>[$("数据")]),_:1})],64)}}});export{pe as default};
