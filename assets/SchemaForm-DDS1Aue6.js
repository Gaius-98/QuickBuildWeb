import{g as c,s as g}from"./index-DM3yB3WX.js";import{x as P,bc as j,r as m,b4 as N,D as L,p as h,a0 as V,I as R,a1 as K,bd as U,N as F,$ as q,R as T,U as Y,ae as A,aK as B,af as G,Y as H,ap as J}from"./.pnpm-0Rj9Ahsw.js";/* empty css                   */const M=n=>{const e=/\$\{([^}]+)\}/g,o=n.match(e);return o?o.map(a=>{const l=a.trim().replace(/formData./g,"");return l.substring(2,l.length-1)}):[]},Q=(n,e)=>{const o=/\$\{([^}]+)\}/g;return n.replace(o,(l,u)=>{const s=u.trim();return c({formData:e},s)})},E=(n,e)=>{const o=Q(n,e);return new Function(`return ${o}`)()},W=(n,e,o,a,l)=>{let u;switch(o){case"string":u=h(F,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break;case"textarea":u=h(J,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break;case"select":u=h(H,{size:a.size,...l,options:a.options[e]||[],value:c(n,e),onChange:s=>{g(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"number":u=h(G,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"date":u=h(B,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"tree":u=h(A,{size:a.size,...l,options:a.options[e]||[],value:c(n,e),onChange:s=>{g(n,e,s),a.onChange({formData:n,field:e,value:s})}});break;case"radio":u=h(Y,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}},{default:()=>(a.options[e]||[]).map(s=>h(T,{value:s.value,key:s.value},{default:()=>s.label}))});break;case"switch":u=h(q,{size:a.size,checked:c(n,e),onChange(s){g(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;default:u=h(F,{size:a.size,...l,value:c(n,e),onChange:s=>{g(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break}return u},X=(n,e,o,a)=>{const{type:l,label:u,component:s,rules:v,tooltip:_}=o;let p;if(s!=null&&s.name){const{name:d}=s,C=R(s);if(Reflect.deleteProperty(C,"onChange"),!a.sfProvideEL[d])throw new Error(`${d} is not registered,provide('sfProvideEL','${d}',Component)`);p=h(a.sfProvideEL[d],{size:a.size,...C,formData:n,value:c(n,e),onChange:f=>{if(n[e]=f,g(n,e,f),s.onChange)try{s.onChange(f,n,e)}catch(w){throw new Error(w)}}})}else p=W(n,e,l,a,s);return a.visibleInfo[e]&&h(K,{label:u,name:e,rules:v,tooltip:_},{default:()=>[p]})},x={name:"SchemaForm",props:{schema:{type:Object},formData:{type:Object,required:!0},size:{type:String,default:"middle"}},setup(n){const{schema:e,formData:o,size:a}=P(n),{layout:l,properties:u}=P(e.value),s=j("sfProvideEL"),v=m({}),_=Object.entries(u.value).filter(([,i])=>{var r,t;return((r=i==null?void 0:i.component)==null?void 0:r.dataSource)||((t=i==null?void 0:i.component)==null?void 0:t.asyncData)}),p=async(i,r)=>{const{dataSource:t,asyncData:b}=r.component;t?v.value[i]=t:v.value[i]=await b(o.value,i)};_.map(async([i,r])=>{await p(i,r)});const d=i=>{const[r,t]=Object.entries(u.value).find(([b])=>i==b);t&&p(r,t)},C=new N,f=i=>{var b,z;const{field:r}=i,t=(z=(b=u.value[r])==null?void 0:b.component)==null?void 0:z.onChange;t&&t(i)},w=U(),O=()=>{Object.entries(u.value).map(([i,r])=>{if(typeof r.show>"u")S.value[i]=!0;else if(typeof r.show=="boolean")S.value[i]=r.show;else if(typeof r.show=="string"){const t=r.show;S.value[i]=E(t,o.value),M(t).map(z=>{C.onSubscribe(z,()=>{S.value[i]=E(t,o.value)})})}})},S=m({});O();const $=L(()=>{const i={"--schema-gap":"","--schema-height":""};switch(a.value){case"middle":i["--schema-gap"]="24px",i["--schema-height"]="32px";break;case"large":i["--schema-gap"]="36px",i["--schema-height"]="40px";break;case"small":i["--schema-gap"]="4px",i["--schema-height"]="25px";break}return i});return{layout:l,properties:u,refreshOption:d,formData:o,options:v,visibleInfo:S,pubSub:C,sfProvideEL:s,onChange:f,expose:w,size:a,formSize:$}},render:n=>h(V,{...n.layout,style:{...n.formSize},class:["schema-form"]},{default:()=>[...Object.entries(n.properties).map(([e,o])=>X(n.formData,e,o,n))]})};export{x as S};
