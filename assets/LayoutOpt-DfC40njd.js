import{u as L,j as E,b as U}from"./index-BK8uOyW8.js";import{g as S,bz as J,s as B,u as O,D as N,p as H,aP as Q,o as c,h as C,J as W,i as e,aR as T,ay as X,aK as R,z as b,K as l,a6 as $,aI as Y,T as a,bA as Z,bB as ee,av as te,a5 as oe,m as t,w as s,F as se,R as ne,bC as ae,bg as le,bD as ie,B as u,aE as ce,bE as re,bF as ue,M as de,ap as pe,aq as _e,bG as me}from"./.pnpm-Eyap3iyz.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ge=S({__name:"LayoutMenu",setup(M){const d=J(),h=L(),{menuTree:f,themeCfg:y}=B(h),p=O("quick-build-menu-selected",[],sessionStorage),_=O("quick-build-menu-open",[],sessionStorage),i=N(()=>k(f.value)),k=n=>n.map(o=>{let m={key:(o==null?void 0:o.id)||"",...o};return m.icon&&(m.icon=H("span",{class:`iconfont icon-${m.icon}`})),o.children&&(m.children=k(o.children)),m});Q(()=>d.query,()=>{const{menuId:n}=d.query;n&&(p.value=[n])},{immediate:!0});const w=({item:n})=>{const{originItemValue:o}=n;E(o)};return(n,o)=>{const m=X;return c(),C(m,W(n.$attrs,{items:i.value,theme:e(y).menuTheme,onSelect:w,openKeys:e(_),"onUpdate:openKeys":o[0]||(o[0]=v=>T(_)?_.value=v:null),selectedKeys:e(p),"onUpdate:selectedKeys":o[1]||(o[1]=v=>T(p)?p.value=v:null),style:{height:"100%","overflow-y":"auto"},class:"gaius-menu"}),null,16,["items","theme","openKeys","selectedKeys"])}}}),Ne=K(ge,[["__scopeId","data-v-6f83061e"]]),fe={class:"logo"},he=["src"],ye=S({__name:"LayoutLogo",setup(M){R(_=>({"2c5c8f8c":e(h).headerFontColor,32770384:e(h).headerBgColor}));const d=L(),{themeCfg:h,collapsed:f,systemSetting:y}=B(d),{onToggleCollapsed:p}=d;return(_,i)=>(c(),b("div",fe,[l("img",{src:e(y).projectLogo,alt:""},null,8,he),$(l("span",{class:"title"},a(e(y).projectName),513),[[Y,!e(f)]]),e(f)?(c(),C(e(Z),{key:0,class:"trigger",onClick:e(p)},null,8,["onClick"])):(c(),C(e(ee),{key:1,class:"trigger",onClick:e(p)},null,8,["onClick"]))]))}}),Re=K(ye,[["__scopeId","data-v-b6204024"]]),be={class:"layout-opt"},ve={class:"layout-opt-notice",title:"通知"},ke={class:"content",style:{display:"flex","flex-direction":"column"}},xe={key:0,class:"notice-list",style:{padding:"0 5px"}},Ce={class:"title",style:{"font-size":"14px","font-weight":"bold"}},we=["title"],Ie={style:{flex:"1","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},Le={class:"layout-opt-userinfo",title:"用户信息"},Se=["src"],Be={class:"layout-opt-userinfo-name"},Ke=S({__name:"LayoutOpt",setup(M){R(I=>({"6d698934":e(_).headerFontColor,"3c3a6a04":e(_).headerBgColor}));const d=te(),{removeToken:h}=U(),f=L(),y=N(()=>w.value.map(I=>I.roleName).join(",")),{local:p,themeCfg:_,userInfo:i,orgInfo:k,roleInfo:w,noticeInfo:n}=B(f),{onOpenConfigDrawer:o,onToggleLocal:m}=f,v=()=>{window.open("https://github.com/Gaius-98/quick-build","_blank")},j=()=>{h(),d.push({path:"/login"})},q=()=>{d.push({path:"/system/notice-message"})};return(I,x)=>{const F=ce,G=re,D=ue,V=de,g=pe,z=_e,P=me,A=oe("has-perm");return c(),b("div",be,[$((c(),b("div",ve,[t(D,{title:"通知",trigger:"click"},{content:s(()=>[l("div",ke,[e(n)&&e(n).list.length>0?(c(),b("div",xe,[(c(!0),b(se,null,ne(e(n).list,r=>(c(),b("div",{key:r.id,style:{display:"flex","flex-direction":"column","justify-items":"flex-start","border-bottom":"1px solid rgba(5, 5, 5, 0.06)",padding:"5px",width:"200px"}},[l("div",Ce,a(r.notice.title),1),l("div",{class:"content",title:r.notice.content,style:{display:"flex",width:"100%"}},[l("div",Ie,a(r.notice.content),1),l("a",{style:{width:"50px","text-decoration":"underline"},onClick:x[0]||(x[0]=Me=>q())},"查看 ")],8,we)]))),128))])):(c(),C(F,{key:1}))])]),default:s(()=>[t(G,{count:e(n).total,"overflow-count":3,class:"badge"},null,8,["count"]),t(e(ae))]),_:1})])),[[A,"private:notice:limit"]]),l("div",{class:"layout-opt-theme",onClick:x[1]||(x[1]=(...r)=>e(o)&&e(o)(...r)),title:"主题配置"},[t(e(le))]),l("div",{class:"layout-opt-github",onClick:v,title:"github"},[t(e(ie))]),l("div",Le,[t(D,{placement:"bottomRight"},{content:s(()=>[t(V,{onClick:j,block:""},{default:s(()=>[u(" 退出 ")]),_:1})]),title:s(()=>[t(z,{title:"用户信息",size:"small",column:2,style:{width:"400px"}},{default:s(()=>[t(g,{label:"姓名"},{default:s(()=>[u(a(e(i).name),1)]),_:1}),t(g,{label:"用户名"},{default:s(()=>[u(a(e(i).username),1)]),_:1}),t(g,{label:"邮箱"},{default:s(()=>[u(a(e(i).email),1)]),_:1}),t(g,{label:"手机"},{default:s(()=>[u(a(e(i).phone),1)]),_:1}),t(g,{label:"角色"},{default:s(()=>[u(a(y.value),1)]),_:1}),t(g,{label:"所属机构"},{default:s(()=>{var r;return[u(a((r=e(k))==null?void 0:r.name),1)]}),_:1}),t(g,{label:"上次登录IP",span:2},{default:s(()=>[u(a(e(i).lastLoginIp),1)]),_:1}),t(g,{label:"登录IP",span:2},{default:s(()=>[u(a(e(i).loginIp),1)]),_:1})]),_:1})]),default:s(()=>[t(P,null,{icon:s(()=>[l("img",{src:e(i).avatar||"",alt:""},null,8,Se)]),_:1}),l("span",Be,a(e(i).name),1)]),_:1})])])}}}),$e=K(Ke,[["__scopeId","data-v-4b30badd"]]);export{Re as L,$e as a,Ne as b};
