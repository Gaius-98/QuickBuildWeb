import{n as L,u as S}from"./nodemodule-@vue_runtime-dom@3.4.21-CDjXREoQ.js";import{u as b}from"./system-1F3Cztz8.js";import{s as U}from"./nodemodule-pinia@2.1.7_typescript@5.4.2_vue@3.4.21-DRg4DShQ.js";import{a as V,u as B,j as T}from"./iconfont-BCn86eVw.js";import{a as q}from"./nodemodule-axios@1.6.8-BZ84_VUH.js";import{F as M,B as I,h as N,I as O,s as F}from"./nodemodule-ant-design-vue@4.1.2_vue@3.4.21-DQ6gDd-0.js";import{Y as K,_ as R,$}from"./nodemodule-@ant-design_icons-vue@7.0.1_vue@3.4.21-CO80cFpd.js";import{d as z,b as A,K as H,M as a,c as t,aI as o,G as D,L as E}from"./nodemodule-@vue_runtime-core@3.4.21-Cnn673wu.js";import{a as G,r as P,u as r}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";import{O as g,l as Y}from"./nodemodule-@vue_shared@3.4.21-Ctf17_ps.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./user-mylcbu45.js";import"./nodemodule-@vueuse_core@10.9.0_vue@3.4.21-CS6n5tIH.js";import"./nodemodule-@vueuse_shared@10.9.0_vue@3.4.21-IMP1eStj.js";import"./nodemodule-js-cookie@3.0.5-Cz0CWeBA.js";import"./nodemodule-vue-router@4.3.0_vue@3.4.21-BC_007Jj.js";import"./nodemodule-@babel_runtime@7.26.9-Bq4_u9L9.js";import"./nodemodule-lodash-es@4.17.21-DcfALcKD.js";import"./nodemodule-resize-observer-polyfill@1.5.1-B1PUzC5B.js";import"./nodemodule-dayjs@1.11.13-B6I98uus.js";import"./nodemodule-classnames@2.5.1-BK5ccKcQ.js";import"./nodemodule-@ctrl_tinycolor@3.6.1-DOFZgDuz.js";import"./nodemodule-@ant-design_colors@6.0.0-CBJ--Aym.js";import"./nodemodule-throttle-debounce@5.0.2-CUWDS_la.js";import"./nodemodule-async-validator@4.2.5-9PlIezaS.js";import"./nodemodule-scroll-into-view-if-needed@2.2.31-CLVC0ehY.js";import"./nodemodule-compute-scroll-into-view@1.0.20-1gs_hJI2.js";import"./nodemodule-vue-types@3.0.2_vue@3.4.21-CF28atMM.js";import"./nodemodule-dom-align@1.12.4-CRCehRfe.js";import"./nodemodule-@emotion_hash@0.9.2-WldOFDRm.js";import"./nodemodule-@emotion_unitless@0.8.1-sScrWPmR.js";import"./nodemodule-stylis@4.3.6-D5iaQeiq.js";import"./nodemodule-@ant-design_icons-svg@4.4.2-C9VH68wD.js";const h={login:l=>V({method:"post",url:"/auth/login",data:l}),getCaptcha:()=>q({baseURL:"/prod",method:"get",url:"/auth/captcha"})},Q={class:"login"},W={class:"login-container"},X={class:"login-form"},Z={class:"project-header"},tt=["src"],et={class:"project-title"},ot=["innerHTML"],st={class:"version"},at=z({__name:"LoginView",setup(l){S(i=>({"10cf654e":r(y).colorPrimary}));const u=b(),{startUp:v}=u,{themeCfg:y,systemSetting:p,menuTree:w}=U(u),s=G({username:"test",password:"test",captcha:""}),{setToken:x}=B(),d=()=>{h.login(s).then(i=>{const{code:e,data:m}=i;e==200&&(x(m),v().then(()=>{T(w.value[0])}))})},_=P(""),f=async()=>{const{data:i}=await h.getCaptcha();_.value=i};return A(()=>{f()}),(i,e)=>{const m=O,c=N,j=F,k=M,C=I;return E(),H("div",Q,[a("div",{class:"login-bg",style:Y({background:`url(${r(p).projectBgUrl})`,backgroundSize:"100% 100%"})},[a("div",W,[a("div",X,[a("div",Z,[a("img",{src:r(p).projectLogo,alt:"",srcset:"",class:"project-logo"},null,8,tt),a("div",et,g(r(p).projectName),1)]),t(k,{model:s,aligin:"left",hideRequiredMark:""},{default:o(()=>[t(c,{name:"username",rules:[{required:!0,message:"请输入账号"}]},{default:o(()=>[t(m,{value:s.username,"onUpdate:value":e[0]||(e[0]=n=>s.username=n),placeholder:"请输入账号"},{prefix:o(()=>[t(r(K))]),_:1},8,["value"])]),_:1}),t(c,{name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:o(()=>[t(j,{value:s.password,"onUpdate:value":e[1]||(e[1]=n=>s.password=n),placeholder:"请输入密码"},{prefix:o(()=>[t(r(R))]),_:1},8,["value"])]),_:1}),t(c,{name:"captcha",rules:[{required:!0,message:"请输入验证码"}]},{default:o(()=>[t(m,{value:s.captcha,"onUpdate:value":e[3]||(e[3]=n=>s.captcha=n),placeholder:"请输入验证码",onKeyup:L(d,["enter"])},{prefix:o(()=>[t(r($))]),addonAfter:o(()=>[a("div",{innerHTML:_.value,onClick:e[2]||(e[2]=n=>f()),style:{height:"100%"}},null,8,ot)]),_:1},8,["value"])]),_:1})]),_:1},8,["model"]),t(C,{type:"primary","html-type":"submit",style:{width:"100%"},onClick:d},{default:o(()=>[D(" 登录 ")]),_:1})])]),a("div",st,g(r(p).projectVersion),1)],4)])}}}),Kt=J(at,[["__scopeId","data-v-e76ed62b"]]);export{Kt as default};
