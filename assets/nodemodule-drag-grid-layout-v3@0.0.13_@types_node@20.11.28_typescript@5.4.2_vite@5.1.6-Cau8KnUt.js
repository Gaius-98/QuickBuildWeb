import{u as de,w as E,v as K}from"./nodemodule-@vue_runtime-dom@3.4.21-CDjXREoQ.js";import{d as ce,q as D,K as M,L as b,M as u,y as P,N as ve,F as Q,O as U,P as W,n as Z}from"./nodemodule-@vue_runtime-core@3.4.21-Cnn673wu.js";import{u as C,x as pe,r as _}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";import{l as j,n as me,O as he}from"./nodemodule-@vue_shared@3.4.21-Ctf17_ps.js";const O=o=>{const{left:i,top:l,width:k,height:m}=o.getBoundingClientRect();return{left:i+"px",top:l+"px",width:k+"px",height:m+"px"}},fe=(o,i)=>{const{left:l,top:k,width:m,height:a}=ge(o),{colWidth:R,rowHeight:A}=i,r=Math.floor(l/R)+1,I=Math.floor(k/A)+1,$=Math.round(m/R),V=Math.round(a/A);return{rowStart:I,rowSpan:V,colSpan:$,colStart:r}},ge=o=>{let i={left:0,top:0,width:0,height:0};return Object.keys(o).map(l=>{i[l]=parseFloat(o[l])}),i},J=o=>{const i=/(\d+)\s*\/\s*(\d+)\s*\/\s*span\s*(\d+)\s*\/\s*span\s*(\d+)/,l=o.match(i);if(l)return{rowStart:Number(l[1]),colStart:Number(l[2]),rowSpan:Number(l[3]),colSpan:Number(l[4])};console.warn(`请检查传入参数:${o}`)},we={mounted(o,i){o.clickOutsideEvent=l=>{o===l.target||o.contains(l.target)||i.value()},document.body.addEventListener("click",o.clickOutsideEvent)},unmounted(o){document.body.removeEventListener("click",o.clickOutsideEvent)}},Se={class:"dg-layout-content"},ye=["onClick"],xe={style:{width:"100%",height:"100%"}},ke={class:"dg-layout-indicator"},$e=ce({__name:"GridLayout",props:{list:{default:()=>[]},gap:{default:8},rowHeight:{default:10},columns:{default:12},readonly:{type:Boolean,default:!1}},emits:["item:click","item:change"],setup(o,{emit:i}){de(s=>({"9043c8ce":R.value,b3a5da1c:A.value,"414d9474":C($)}));const l=we,k=o,m=i,a=_({left:"0",top:"0",width:"0",height:"0",id:""}),R=D(()=>`${I.value}px`),A=D(()=>`${V.value}px`),{list:r,gap:I,columns:$,rowHeight:V,readonly:q}=pe(k),X=s=>{const{rowSpan:t,rowStart:e,colSpan:p,colStart:h}=s;return{gridArea:`${e} / ${h} / span ${t} / span ${p}`}},H=_(!1),Y=()=>{H.value&&(H.value=!1)},ee=s=>{if(q.value)return;const t=document.querySelector(`.dg-item-${s.id}`),e=O(t);H.value=!0,a.value={...e,id:s.id},m("item:click",s)},z=_(),te=_(),L=_(!1),ae=s=>{if(q.value)return;const t=s.x,e=s.y,{left:p,top:h}=a.value;L.value=!0;const f=c=>{const w=c.y-e,S=c.x-t,y=parseFloat(p)+S,v=parseFloat(h)+w;a.value.left=y+"px",a.value.top=v+"px"},g=()=>{var c,w;if(L.value=!1,(c=B.value)!=null&&c.gridArea){const{rowSpan:S,rowStart:y,colSpan:v,colStart:x}=J((w=B.value)==null?void 0:w.gridArea);let d=r.value.findIndex(n=>n.id==a.value.id);d!=-1&&(r.value[d].rowSpan=S,r.value[d].rowStart=y,r.value[d].colSpan=v,r.value[d].colStart=x),Z(()=>{const n=document.querySelector(`.dg-item-${a.value.id}`);a.value={id:a.value.id,...O(n)},m("item:change",r.value[d])})}document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",g)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",g)},T=(s,t,e)=>{if(q.value)return;const p=s.x,h=s.y,{width:f,height:g,left:c,top:w}=a.value;L.value=!0;const S=v=>{const x=v.y-h,d=v.x-p;if(t==="horizontal")if(e==="left"){const n=parseFloat(c)+d;a.value.left=n+"px";const N=parseFloat(f)-d;a.value.width=N+"px"}else{const n=parseFloat(f)+d;a.value.width=n+"px"}else if(t==="vertical")if(e==="top"){const n=parseFloat(w)+x;a.value.top=n+"px";const N=parseFloat(g)-x;a.value.height=N+"px"}else{const n=parseFloat(g)+x;a.value.height=n+"px"}},y=()=>{var v,x;if(L.value=!1,(v=B.value)!=null&&v.gridArea){const{rowSpan:d,rowStart:n,colSpan:N,colStart:se}=J((x=B.value)==null?void 0:x.gridArea);let F=r.value.findIndex(G=>G.id==a.value.id);F!=-1&&(r.value[F].rowSpan=d,r.value[F].rowStart=n,r.value[F].colSpan=N,r.value[F].colStart=se),Z(()=>{const G=document.querySelector(`.dg-item-${a.value.id}`),{left:re,top:ie,width:ne,height:ue}=O(G);a.value={left:re,top:ie,width:ne,height:ue,id:a.value.id},m("item:change",r.value[F])})}document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",y)},oe=_(),B=D(()=>{if(!a.value.id||!z.value)return;const{width:s}=O(z.value),t=(parseInt(s)-($.value-1)*I.value)/$.value,{left:e,top:p}=z.value.getBoundingClientRect(),{left:h,top:f,width:g,height:c}=a.value,{rowSpan:w,rowStart:S,colSpan:y,colStart:v}=fe({left:`${parseFloat(h)-e}px`,top:`${parseFloat(f)-p}px`,width:g,height:c},{rowHeight:V.value,colWidth:t});return{gridArea:` ${S} / ${v} / span ${w} / span ${y}`}}),le=D(()=>{const{left:s,top:t,width:e,height:p}=a.value;if(!z.value)return;const{left:h,top:f}=O(z.value),g=parseFloat(s)-parseFloat(h),c=parseFloat(t)-parseFloat(f);return{width:e,height:p,top:c+"px",left:g+"px"}});return(s,t)=>(b(),M("div",{class:"dg-layout",ref_key:"dgLayoutRef",ref:z},[u("div",Se,[(b(!0),M(Q,null,U(C(r),e=>(b(),M("div",{class:me(["dg-layout-item",[`dg-item-${e.id}`,a.value.id==e.id?"upper-levels":""]]),key:e.id,style:j(X(e)),onClick:E(p=>ee(e),["stop"])},[W(s.$slots,"layout-item",{item:e},()=>[u("div",xe,he(e.id),1)],!0)],14,ye))),128)),P(u("div",{class:"dg-layout-item-shadow",style:j(B.value),ref_key:"shadowRef",ref:oe},null,4),[[K,L.value]])]),P(u("div",ke,[(b(!0),M(Q,null,U(C($),e=>(b(),M("div",{key:e}))),128))],512),[[K,L.value]]),H.value&&!C(q)?P((b(),M("div",{key:0,class:"dg-layout-vnode",style:j(le.value),ref_key:"dgLayoutVnode",ref:te},[u("div",{class:"drag",onMousedown:t[0]||(t[0]=E(e=>ae(e),["stop"]))},[W(s.$slots,"drag-handle",{},()=>[t[5]||(t[5]=u("div",{class:"drag-handle"},[u("svg",{t:"1737028889311",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4464",width:"16",height:"16"},[u("path",{d:"M219.428571 585.142857c-36.571429 0-73.142857 36.571429-73.142857 73.142857s36.571429 73.142857 73.142857 73.142857 73.142857-36.571429 73.142858-73.142857-36.571429-73.142857-73.142858-73.142857z m585.142858-146.285714c36.571429 0 73.142857-36.571429 73.142857-73.142857s-36.571429-73.142857-73.142857-73.142857-73.142857 36.571429-73.142858 73.142857 36.571429 73.142857 73.142858 73.142857zM219.428571 292.571429c-36.571429 0-73.142857 36.571429-73.142857 73.142857s36.571429 73.142857 73.142857 73.142857 73.142857-36.571429 73.142858-73.142857-36.571429-73.142857-73.142858-73.142857z m585.142858 292.571428c-36.571429 0-73.142857 36.571429-73.142858 73.142857s36.571429 73.142857 73.142858 73.142857 73.142857-36.571429 73.142857-73.142857-36.571429-73.142857-73.142857-73.142857zM512 292.571429c-36.571429 0-73.142857 36.571429-73.142857 73.142857s36.571429 73.142857 73.142857 73.142857 73.142857-36.571429 73.142857-73.142857-36.571429-73.142857-73.142857-73.142857z m0 292.571428c-36.571429 0-73.142857 36.571429-73.142857 73.142857s36.571429 73.142857 73.142857 73.142857 73.142857-36.571429 73.142857-73.142857-36.571429-73.142857-73.142857-73.142857z","p-id":"4465"})])],-1))],!0)],32),W(s.$slots,"default",{},()=>[t[6]||(t[6]=u("div",{class:"vnode-content"},null,-1))],!0),u("div",{class:"resize left-line",onMousedown:t[1]||(t[1]=E(e=>T(e,"horizontal","left"),["stop"]))},null,32),u("div",{class:"resize right-line",onMousedown:t[2]||(t[2]=E(e=>T(e,"horizontal","right"),["stop"]))},null,32),u("div",{class:"resize top-line",onMousedown:t[3]||(t[3]=E(e=>T(e,"vertical","top"),["stop"]))},null,32),u("div",{class:"resize bottom-line",onMousedown:t[4]||(t[4]=E(e=>T(e,"vertical","bottom"),["stop"]))},null,32)],4)),[[C(l),Y]]):ve("",!0)],512))}}),ze=(o,i)=>{const l=o.__vccOpts||o;for(const[k,m]of i)l[k]=m;return l},be=ze($e,[["__scopeId","data-v-adb05d23"]]);export{be as z};
