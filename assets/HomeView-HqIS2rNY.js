var W=Object.defineProperty;var J=(l,e,t)=>e in l?W(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var h=(l,e,t)=>(J(l,typeof e!="symbol"?e+"":e,t),t);import{_ as H}from"./CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-Brv1egib.js";import{I as K,g as C,v as z,y as M,x as G,D as B,o as i,h as m,w as u,m as r,J as D,i as y,K as E,L as j,M as V,N as Q,z as S,O as X,P,Q as T,F as L,R as Y,A as Z,B as N,T as O,U as ee,V as te,W as ae,r as p,G as I,X as ne,Y as oe,$ as le}from"./.pnpm-Eyap3iyz.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";class se{constructor(e){h(this,"state");this.state=e}getValue(e){const{staticValue:t,mode:a,dynExp:n}=e;return a==="static"?t:this.resolveDynamicValue(n)}resolveDynamicValue(e){try{return new Function("state",`return ${e}`)(this.state)}catch(t){return console.error("评估动态表达式时出错:",t),null}}isDynamicConfigData(e){return typeof e=="object"&&e!==null&&["string","number","boolean"].includes(typeof e.staticValue)&&["static","dynamic"].includes(e.mode)&&typeof e.dynExp=="string"}processObject(e){const t=K(e);if(Array.isArray(t))return t.map(a=>this.processObject(a));if(typeof t=="object"&&t!==null){const a={};for(const n in t){const o=t[n];this.isDynamicConfigData(o)?a[n]=this.getValue(o):typeof o=="object"&&o!==null?a[n]=this.processObject(o):a[n]=o}return a}else return t}}const ie=E("div",{class:"iconfont icon-brackets-curly"},null,-1),ce=C({__name:"ConfigInput",props:z({compact:{type:Boolean,default:!0},size:{default:"default"}},{data:{required:!0},dataModifiers:{}}),emits:["update:data"],setup(l){const e=M(l,"data"),t=l,{size:a,compact:n}=G(t),o=B(()=>e.value.mode==="dynamic"),_=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"},v=s=>{e.value.mode==="dynamic"?e.value.dynExp=s.target.value:e.value.staticValue=s.target.value};return(s,d)=>{const g=j,x=V,b=Q;return i(),m(b,{size:y(a),compact:y(n)},{default:u(()=>[r(g,D({value:o.value?e.value.dynExp:e.value.staticValue,onChange:v,style:{width:"calc(100% - 35px)"},prefix:o.value?"{":"",suffix:o.value?"}":""},s.$attrs),null,16,["value","prefix","suffix"]),r(x,{title:o.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:o.value?"primary":"",onClick:d[0]||(d[0]=c=>_())},{icon:u(()=>[ie]),_:1},8,["title","type"])]),_:1},8,["size","compact"])}}}),re=l=>(P("data-v-cc2abf8d"),l=l(),T(),l),ue={class:"config-select"},de=re(()=>E("div",{class:"iconfont icon-brackets-curly"},null,-1)),pe=C({__name:"ConfigSelect",props:{data:{required:!0},dataModifiers:{}},emits:["update:data"],setup(l){const e=M(l,"data"),t=B(()=>e.value.mode==="dynamic"),a=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"};return(n,o)=>{const _=X,v=j,s=V;return i(),S("div",ue,[t.value?(i(),m(v,{key:1,value:e.value.dynExp,"onUpdate:value":o[1]||(o[1]=d=>e.value.dynExp=d),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(i(),m(_,D({key:0,style:{width:"calc(100% - 35px)"}},n.$attrs,{value:e.value.staticValue,"onUpdate:value":o[0]||(o[0]=d=>e.value.staticValue=d)}),null,16,["value"])),r(s,{title:t.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:t.value?"primary":"",onClick:o[2]||(o[2]=d=>a())},{icon:u(()=>[de]),_:1},8,["title","type"])])}}}),me=A(pe,[["__scopeId","data-v-cc2abf8d"]]),ve=l=>(P("data-v-3b9fba08"),l=l(),T(),l),fe={class:"config-radio"},ye=ve(()=>E("div",{class:"iconfont icon-brackets-curly"},null,-1)),_e=C({__name:"ConfigRadio",props:z({options:{default:()=>[]},fields:{default:()=>({label:"label",value:"value",title:"title"})},icon:{type:Boolean,default:!1}},{data:{required:!0},dataModifiers:{}}),emits:["update:data"],setup(l){const e=M(l,"data"),t=l,{options:a,fields:n}=G(t),o=B(()=>e.value.mode==="dynamic"),_=()=>{e.value.mode=e.value.mode==="dynamic"?"static":"dynamic"};return(v,s)=>{const d=ee,g=te,x=j,b=V;return i(),S("div",fe,[o.value?(i(),m(x,{key:1,value:e.value.dynExp,"onUpdate:value":s[1]||(s[1]=c=>e.value.dynExp=c),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(i(),m(g,D({key:0},v.$attrs,{style:{width:"calc(100% - 35px)"},value:e.value.staticValue,"onUpdate:value":s[0]||(s[0]=c=>e.value.staticValue=c),"button-style":"solid"}),{default:u(()=>[(i(!0),S(L,null,Y(y(a),c=>(i(),m(d,{key:c[y(n).value],title:c[y(n).title]||c[y(n).label],value:c[y(n).value]},{default:u(()=>[v.icon?(i(),S("div",{key:0,class:Z(["iconfont",c.label])},null,2)):(i(),S(L,{key:1},[N(O(c[y(n).label]),1)],64))]),_:2},1032,["title","value"]))),128))]),_:1},16,["value"])),r(b,{title:o.value?`绑定中:${e.value.dynExp}`:"变量绑定",type:o.value?"primary":"",onClick:s[2]||(s[2]=c=>_())},{icon:u(()=>[ye]),_:1},8,["title","type"])])}}}),he=A(_e,[["__scopeId","data-v-3b9fba08"]]);class ge{constructor(e){h(this,"libs");h(this,"scripts",[]);h(this,"styles",[]);h(this,"componentsMap",new Map);h(this,"components",{});this.libs=e,this.init()}init(){window.Vue||(window.Vue=ae),this.handleLibs(),this.handleUrls()}handleUrls(){this.libs.map(t=>t.urls).flat().forEach(t=>{t.endsWith("js")?this.scripts.push(t):t.endsWith("css")&&this.styles.push(t)})}load(){return new Promise((e,t)=>{Promise.allSettled([...this.styles.map(a=>this.loadStyle(a)),...this.scripts.map(a=>this.loadScript(a))]).then(()=>{this.registerComponents(),e(this.components)}).catch(a=>{t(a)})})}registerComponents(){for(const[e,t]of this.componentsMap)Array.isArray(t)?t.forEach(a=>{this.components[a.componentName]=window[e][a.exportName]}):this.components[t.componentName]=window[t.exportName]}handleLibChildren(e){const t=e.children.map(a=>({exportName:a.exportName,componentName:a.componentName}));this.componentsMap.set(e.exportName,t)}handleLibs(e=this.libs){e.forEach(t=>{this.isLibTree(t)?this.handleLibChildren(t):this.componentsMap.set(t.exportName,{exportName:t.exportName,componentName:t.componentName})})}isLibTree(e){return"children"in e}loadScript(e){return new Promise((t,a)=>{const n=document.createElement("script");n.src=e,n.async=!1,n.onload=t,n.onerror=a,document.body.appendChild(n)})}loadStyle(e){return new Promise((t,a)=>{const n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=t,n.onerror=a,document.head.appendChild(n)})}}const ke=C({__name:"HomeView",setup(l){const e=p({input:{staticValue:"",mode:"static",dynExp:""},select:{staticValue:"",mode:"static",dynExp:""},test:"123",radio:{}}),t=p({string:"配置表单",arr:[1,2,3,4],number:125654}),a=p([{label:"1",value:"1"},{label:"2",value:"2"}]),n=p([{label:"icon-lock1",value:"1",title:"锁定"},{label:"icon-unlock1",value:"2",title:"解锁"}]),o=p(!1),_=()=>{e.value,o.value=!0},v=()=>{new se(t.value)},s=p("测试");p({package:"ConfigInput",version:"",exportName:"",main:"",cdn:"",componentName:""});const d=[{title:"element",package:"element-plus",version:"1.0.2",exportName:"ElementPlus",urls:["https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.full.min.js","https://cdn.jsdelivr.net/npm/element-plus@2.9.2/dist/index.min.css"],children:[{componentName:"ElButton",exportName:"ElButton"},{componentName:"ElInput",exportName:"ElInput"}]},{title:"",package:"drag-grid-layout-v3",version:"1.0.0",exportName:"drag-grid-layout-v3",children:[{componentName:"GridLayout",exportName:"GridLayout"}],urls:["https://cdn.jsdelivr.net/npm/drag-grid-layout-v3@0.0.4/lib/drag-grid-layout-v3.umd.js","https://cdn.jsdelivr.net/npm/drag-grid-layout-v3@0.0.4/lib/style.css"]}],g=p(),x=p(),b=p(),c=new ge(d),F=p([{key:1,id:1,rowStart:1,colStart:1,rowSpan:20,colSpan:3,extra:{color:"red"}},{key:1,id:2,rowStart:2,colStart:4,rowSpan:40,colSpan:2,extra:{color:"blue"}},{key:1,id:3,rowStart:4,colStart:6,rowSpan:10,colSpan:5,extra:{color:"pink"}},{key:1,id:4,rowStart:5,colStart:1,rowSpan:30,colSpan:6,extra:{color:"green"}}]);return c.load().then(k=>{g.value=k.ElButton,x.value=k.ElInput,b.value=k.GridLayout}),(k,w)=>{const R=H,$=le,q=ne,U=V;return i(),S(L,null,[r(R,{value:JSON.stringify(t.value,null,4),disabled:""},null,8,["value"]),r(q,null,{default:u(()=>[r($,{label:"输入框"},{default:u(()=>[r(ce,{data:e.value.input,"onUpdate:data":w[0]||(w[0]=f=>e.value.input=f)},null,8,["data"])]),_:1}),r($,{label:"选择框"},{default:u(()=>[r(me,{data:e.value.select,"onUpdate:data":w[1]||(w[1]=f=>e.value.select=f),options:a.value},null,8,["data","options"])]),_:1}),r($,{label:"单选框"},{default:u(()=>[r(he,{data:e.value.radio,"onUpdate:data":w[2]||(w[2]=f=>e.value.radio=f),options:n.value,icon:!0},null,8,["data","options"])]),_:1})]),_:1}),r(U,{onClick:_},{default:u(()=>[N("配置项")]),_:1}),r(U,{onClick:v},{default:u(()=>[N("数据")]),_:1}),(i(),m(I(g.value),{type:"success"},{default:u(()=>[N("el")]),_:1})),(i(),m(I(x.value),{placeholder:"请输入内容",Value:s.value},null,8,["Value"])),(i(),m(I(b.value),{placeholder:"请输入内容",list:F.value},{"layout-item":u(({item:f})=>[E("div",{style:oe({backgroundColor:f.extra.color,width:"100%",height:"100%"})},O(f),5)]),_:1},8,["list"]))],64)}}});export{ke as default};
