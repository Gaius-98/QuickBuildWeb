import{g as b,v as k,x as y,y as V,r as x,bs as R,bt as w,bk as B,o as D,z as E,a6 as l,aI as n,i as e,K as u,T as i,m as M,J as z,bh as C,F}from"./.pnpm-Eyap3iyz.js";const S=b({__name:"CodeEditor",props:k({height:{default:400},prepend:{},append:{},theme:{default:"dark"},mode:{}},{value:{required:!0},valueModifiers:{}}),emits:["update:value"],setup(s){const p=s,{height:c,prepend:t,append:o,theme:m}=y(p),r=V(s,"value"),v=x(),h=a=>{v.value=a},f=[R(),m.value=="dark"?w:B];return(a,d)=>(D(),E(F,null,[l(u("code",null,i(e(t)),513),[[n,e(t)]]),M(e(C),z({style:{height:`${e(c)}px`},"indent-with-tab":!0,"tab-size":2,extensions:f},a.$attrs,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),onReady:h,ref:"codeEditorRef"}),null,16,["style","modelValue"]),l(u("code",null,i(e(o)),513),[[n,e(o)]])],64))}});export{S as _};
