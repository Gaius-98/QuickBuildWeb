import{V as O,U as R,I as C,B as E,a0 as K,o as L,k as Q,e as A,Q as D,N as G,O as P,F as H,h as J}from"./nodemodule-ant-design-vue@4.1.2_vue@3.4.21-DQ6gDd-0.js";import{d as b,K as h,L as s,c as x,aI as y,F as g,O as M,a2 as v,Q as N,R as w,q as S,ak as I,M as U,G as W,ar as B,aq as V,N as q,au as X}from"./nodemodule-@vue_runtime-core@3.4.21-Cnn673wu.js";import{x as k,r as Y,u as d,i as Z}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";import{n as ee,O as ae}from"./nodemodule-@vue_shared@3.4.21-Ctf17_ps.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{v as te}from"./nodemodule-uuid@9.0.1-CtRu48qb.js";const ne={class:"config-array"},oe=b({__name:"ConfigArray",props:{title:{default:"标题"},closable:{type:Boolean,default:!0},schema:{default:()=>({})},data:{}},setup(n){const e=n,{title:i,closable:c,data:t}=k(e),a=Y(0),f=()=>{a.value=t.value.length||0,t.value.push({})},o=l=>{let p=0;t.value.forEach((_,m)=>{_.key===l&&(p=m-1)}),t.value=t.value.filter(_=>_.key!==l),t.value.length&&a.value===l&&(p>=0?a.value=t.value[p].key:a.value=t.value[0].key)},u=(l,p)=>{p==="add"?f():o(l)};return(l,p)=>{const _=O,m=R;return s(),h("div",ne,[x(m,{activeKey:a.value,"onUpdate:activeKey":p[0]||(p[0]=r=>a.value=r),type:"editable-card",onEdit:u,class:"config-array-tab",size:"small"},{default:y(()=>[(s(!0),h(g,null,M(d(t),(r,$)=>(s(),v(_,{key:$+1,tab:`${d(i)}${$+1}`,closable:d(c)},{default:y(()=>[x(T,{schema:l.schema,data:d(t)[$],"onUpdate:data":F=>d(t)[$]=F},null,8,["schema","data","onUpdate:data"])]),_:2},1032,["tab","closable"]))),128))]),_:1},8,["activeKey"])])}}}),le=U("div",{class:"iconfont icon-brackets-curly"},null,-1),z=b({__name:"ConfigInput",props:N({compact:{type:Boolean,default:!0},size:{default:"default"}},{data:{required:!0,default:{_value:"",_mode:"static",_dynExp:""}},dataModifiers:{}}),emits:["update:data"],setup(n){const e=w(n,"data"),i=n,{size:c,compact:t}=k(i),a=S(()=>e.value._mode==="dynamic"),f=()=>{e.value._mode=e.value._mode==="dynamic"?"static":"dynamic"},o=u=>{e.value._mode==="dynamic"?e.value._dynExp=u.target.value:e.value._value=u.target.value};return(u,l)=>{const p=C,_=E,m=K;return s(),v(m,{size:d(c),compact:d(t)},{default:y(()=>[x(p,I({value:a.value?e.value._dynExp:e.value._value,onChange:o,style:{width:"calc(100% - 35px)"},prefix:a.value?"{":"",suffix:a.value?"}":""},u.$attrs),null,16,["value","prefix","suffix"]),x(_,{title:a.value?`绑定中:${e.value._dynExp}`:"变量绑定",type:a.value?"primary":"",onClick:l[0]||(l[0]=r=>f())},{icon:y(()=>[le]),_:1},8,["title","type"])]),_:1},8,["size","compact"])}}}),se=n=>(B("data-v-8fc419f7"),n=n(),V(),n),ue={class:"config-radio"},ce=se(()=>U("div",{class:"iconfont icon-brackets-curly"},null,-1)),de=b({__name:"ConfigRadio",props:N({options:{default:()=>[]},fields:{default:()=>({label:"label",value:"value",title:"title"})},icon:{type:Boolean,default:!1}},{data:{required:!0,default:{_value:"",_mode:"static",_dynExp:""}},dataModifiers:{}}),emits:["update:data"],setup(n){const e=w(n,"data"),i=n,{options:c,fields:t}=k(i),a=S(()=>e.value._mode==="dynamic"),f=()=>{e.value._mode=e.value._mode==="dynamic"?"static":"dynamic"};return(o,u)=>{const l=L,p=Q,_=C,m=E;return s(),h("div",ue,[a.value?(s(),v(_,{key:1,value:e.value._dynExp,"onUpdate:value":u[1]||(u[1]=r=>e.value._dynExp=r),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(s(),v(p,I({key:0},o.$attrs,{style:{width:"calc(100% - 35px)"},value:e.value._value,"onUpdate:value":u[0]||(u[0]=r=>e.value._value=r),"button-style":"solid"}),{default:y(()=>[(s(!0),h(g,null,M(d(c),r=>(s(),v(l,{key:r[d(t).value],title:r[d(t).title]||r[d(t).label],value:r[d(t).value]},{default:y(()=>[o.icon?(s(),h("div",{key:0,class:ee(["iconfont",r.label])},null,2)):(s(),h(g,{key:1},[W(ae(r[d(t).label]),1)],64))]),_:2},1032,["title","value"]))),128))]),_:1},16,["value"])),x(m,{title:a.value?`绑定中:${e.value._dynExp}`:"变量绑定",type:a.value?"primary":"",onClick:u[2]||(u[2]=r=>f())},{icon:y(()=>[ce]),_:1},8,["title","type"])])}}}),ie=j(de,[["__scopeId","data-v-8fc419f7"]]),_e=n=>(B("data-v-dcd1c0f1"),n=n(),V(),n),re={class:"config-select"},pe=_e(()=>U("div",{class:"iconfont icon-brackets-curly"},null,-1)),ve=b({__name:"ConfigSelect",props:{data:{required:!0,default:{_value:"",_mode:"static",_dynExp:""}},dataModifiers:{}},emits:["update:data"],setup(n){const e=w(n,"data"),i=S(()=>e.value._mode==="dynamic"),c=()=>{e.value._mode=e.value._mode==="dynamic"?"static":"dynamic"};return(t,a)=>{const f=A,o=C,u=E;return s(),h("div",re,[i.value?(s(),v(o,{key:1,value:e.value._dynExp,"onUpdate:value":a[1]||(a[1]=l=>e.value._dynExp=l),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(s(),v(f,I({key:0,style:{width:"calc(100% - 35px)"}},t.$attrs,{value:e.value._value,"onUpdate:value":a[0]||(a[0]=l=>e.value._value=l)}),null,16,["value"])),x(u,{title:i.value?`绑定中:${e.value._dynExp}`:"变量绑定",type:i.value?"primary":"",onClick:a[2]||(a[2]=l=>c())},{icon:y(()=>[pe]),_:1},8,["title","type"])])}}}),me=j(ve,[["__scopeId","data-v-dcd1c0f1"]]),fe=n=>(B("data-v-4206e5c3"),n=n(),V(),n),ye={class:"config-switch"},he=fe(()=>U("div",{class:"iconfont icon-brackets-curly"},null,-1)),xe=b({__name:"ConfigSwitch",props:{data:{required:!0,default:{__value:!1,_mode:"static",_dynExp:""}},dataModifiers:{}},emits:["update:data"],setup(n){const e=w(n,"data"),i=S(()=>e.value._mode==="dynamic"),c=()=>{e.value._mode=e.value._mode==="dynamic"?"static":"dynamic"};return(t,a)=>{const f=D,o=C,u=E;return s(),h("div",ye,[i.value?(s(),v(o,{key:1,value:e.value._dynExp,"onUpdate:value":a[1]||(a[1]=l=>e.value._dynExp=l),style:{width:"calc(100% - 35px)"},prefix:"{",suffix:"}"},null,8,["value"])):(s(),v(f,I({key:0},t.$attrs,{checked:e.value._value,"onUpdate:checked":a[0]||(a[0]=l=>e.value._value=l)}),null,16,["checked"])),x(u,{title:i.value?`绑定中:${e.value._dynExp}`:"变量绑定",type:i.value?"primary":"",onClick:a[2]||(a[2]=l=>c())},{icon:y(()=>[he]),_:1},8,["title","type"])])}}}),be=j(xe,[["__scopeId","data-v-4206e5c3"]]),ge={class:"config-array"},ke=b({__name:"ConfigObject",props:{title:{default:"标题"},field:{default:""},schema:{default:()=>({})},data:{}},setup(n){const e=n,{title:i,field:c,data:t}=k(e),a=te()+c.value;return(f,o)=>{const u=G,l=P;return s(),h("div",ge,[x(l,null,{default:y(()=>[(s(),v(u,{key:a,header:d(i)},{default:y(()=>[x(T,{schema:f.schema,data:d(t),"onUpdate:data":o[0]||(o[0]=p=>Z(t)?t.value=p:null)},null,8,["schema","data"])]),_:1},8,["header"]))]),_:1})])}}}),T=b({__name:"ConfigForm",props:{schema:{default:()=>({})},data:{default:()=>({})}},setup(n){const e=n,{schema:i,data:c}=k(e),t=()=>{Object.keys(i.value).forEach(o=>{c.value[o]?typeof c.value[o]!="object"&&(c.value[o]=a(i.value[o].type,c.value[o])):c.value[o]=a(i.value[o].type)})},a=(o,u)=>{switch(o){case"array":return[];case"object":return{};case"input":case"select":case"radio":return{_value:u||"",_mode:"static",_dynExp:""};case"switch":return{_value:typeof u=="boolean"?u:!1,_mode:"static",_dynExp:""};default:return{_value:u||"",_mode:"static",_dynExp:""}}};t();const f=o=>{switch(o){case"input":return z;case"radio":return ie;case"select":return me;case"switch":return be;default:return z}};return(o,u)=>{const l=J,p=H;return s(),v(p,{model:d(c)},{default:y(()=>[(s(!0),h(g,null,M(d(i),(_,m)=>(s(),h(g,{key:m},[_.type!=="object"?(s(),v(l,{key:0,label:_.label,name:m},{default:y(()=>[_.type==="array"?(s(),v(oe,{key:0,schema:_.items,data:d(c)[m]},null,8,["schema","data"])):(s(),v(X(f(_.type)),{key:1,data:d(c)[m],"onUpdate:data":r=>d(c)[m]=r},null,40,["data","onUpdate:data"]))]),_:2},1032,["label","name"])):q("",!0),_.type==="object"?(s(),v(ke,{key:1,schema:_.properties,data:d(c)[m],title:_.label},null,8,["schema","data","title"])):q("",!0)],64))),128))]),_:1},8,["model"])}}});export{T as _};
