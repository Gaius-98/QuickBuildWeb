import{A as Re,T as Le,a as Me,S as O,b as Z,P as _,F as ye,E as w,c as v,d as I,R as Be,e as ke,M as Y,f as be,g as Fe,C as G}from"./nodemodule-@codemirror_state@6.5.2-CeTbMir1.js";import{E as R,V as je,D as V,k as xe,g as we,s as $e,l as J,W as We,a as Ne}from"./nodemodule-@codemirror_view@6.36.3-NX7sJwro.js";import{s as H,i as Ue}from"./nodemodule-@codemirror_language@6.10.8-mNL4GyJL.js";class Ce{constructor(e,t,n,s){this.state=e,this.pos=t,this.explicit=n,this.view=s,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=H(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),s=t.text.slice(n-t.from,this.pos-t.from),o=s.search(ve(e,!1));return o<0?null:{from:n+o,to:this.pos,text:s.slice(o)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e=="abort"&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}}function re(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Ve(i){let e=Object.create(null),t=Object.create(null);for(let{label:s}of i){e[s[0]]=!0;for(let o=1;o<s.length;o++)t[s[o]]=!0}let n=re(e)+re(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function He(i){let e=i.map(s=>typeof s=="string"?{label:s}:s),[t,n]=e.every(s=>/^\w+$/.test(s.label))?[/\w*$/,/\w+$/]:Ve(e);return s=>{let o=s.matchBefore(n);return o||s.explicit?{from:o?o.from:s.pos,options:e,validFor:t}:null}}function Wt(i,e){return t=>{for(let n=H(t.state).resolveInner(t.pos,-1);n;n=n.parent){if(i.indexOf(n.name)>-1)return null;if(n.type.isTop)break}return e(t)}}class ae{constructor(e,t,n,s){this.completion=e,this.source=t,this.match=n,this.score=s}}function E(i){return i.selection.main.from}function ve(i,e){var t;let{source:n}=i,s=e&&n[0]!="^",o=n[n.length-1]!="$";return!s&&!o?i:new RegExp(`${s?"^":""}(?:${n})${o?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}const ee=Re.define();function qe(i,e,t,n){let{main:s}=i.selection,o=t-s.from,l=n-s.from;return Object.assign(Object.assign({},i.changeByRange(a=>{if(a!=s&&t!=n&&i.sliceDoc(a.from+o,a.from+l)!=i.sliceDoc(t,n))return{range:a};let r=i.toText(e);return{changes:{from:a.from+o,to:n==s.from?a.to:a.from+l,insert:r},range:w.cursor(a.from+o+r.length)}})),{scrollIntoView:!0,userEvent:"input.complete"})}const ce=new WeakMap;function ze(i){if(!Array.isArray(i))return i;let e=ce.get(i);return e||ce.set(i,e=He(i)),e}const N=O.define(),B=O.define();class Ke{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=v(e,t),s=I(n);this.chars.push(n);let o=e.slice(t,t+s),l=o.toUpperCase();this.folded.push(v(l==o?o.toLowerCase():l,0)),t+=s}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:s,precise:o,byWord:l}=this;if(t.length==1){let d=v(e,0),A=I(d),S=A==e.length?0:-100;if(d!=t[0])if(d==n[0])S+=-200;else return null;return this.ret(S,[0,A])}let a=e.indexOf(this.pattern);if(a==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let r=t.length,f=0;if(a<0){for(let d=0,A=Math.min(e.length,200);d<A&&f<r;){let S=v(e,d);(S==t[f]||S==n[f])&&(s[f++]=d),d+=I(S)}if(f<r)return null}let c=0,h=0,p=!1,u=0,g=-1,x=-1,z=/[a-z]/.test(e),M=!0;for(let d=0,A=Math.min(e.length,200),S=0;d<A&&h<r;){let y=v(e,d);a<0&&(c<r&&y==t[c]&&(o[c++]=d),u<r&&(y==t[u]||y==n[u]?(u==0&&(g=d),x=d+1,u++):u=0));let $,K=y<255?y>=48&&y<=57||y>=97&&y<=122?2:y>=65&&y<=90?1:0:($=be(y))!=$.toLowerCase()?1:$!=$.toUpperCase()?2:0;(!d||K==1&&z||S==0&&K!=0)&&(t[h]==y||n[h]==y&&(p=!0)?l[h++]=d:l.length&&(M=!1)),S=K,d+=I(y)}return h==r&&l[0]==0&&M?this.result(-100+(p?-200:0),l,e):u==r&&g==0?this.ret(-200-e.length+(x==e.length?0:-100),[0,x]):a>-1?this.ret(-700-e.length,[a,a+this.pattern.length]):u==r?this.ret(-900-e.length,[g,x]):h==r?this.result(-100+(p?-200:0)+-700+(M?0:-1100),l,e):t.length==2?null:this.result((s[0]?-700:0)+-200+-1100,s,e)}result(e,t,n){let s=[],o=0;for(let l of t){let a=l+(this.astral?I(v(n,l)):1);o&&s[o-1]==l?s[o-1]=a:(s[o++]=l,s[o++]=a)}return this.ret(e-n.length,s)}}class Qe{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}}const m=ye.define({combine(i){return ke(i,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:Xe,filterStrict:!1,compareCompletions:(e,t)=>e.label.localeCompare(t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>fe(e(n),t(n)),optionClass:(e,t)=>n=>fe(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function fe(i,e){return i?e?i+" "+e:i:e}function Xe(i,e,t,n,s,o){let l=i.textDirection==Ne.RTL,a=l,r=!1,f="top",c,h,p=e.left-s.left,u=s.right-e.right,g=n.right-n.left,x=n.bottom-n.top;if(a&&p<Math.min(g,u)?a=!1:!a&&u<Math.min(g,p)&&(a=!0),g<=(a?p:u))c=Math.max(s.top,Math.min(t.top,s.bottom-x))-e.top,h=Math.min(400,a?p:u);else{r=!0,h=Math.min(400,(l?e.right:s.right-e.left)-30);let d=s.bottom-e.bottom;d>=x||d>e.top?c=t.bottom-e.top:(f="bottom",c=e.bottom-t.top)}let z=(e.bottom-e.top)/o.offsetHeight,M=(e.right-e.left)/o.offsetWidth;return{style:`${f}: ${c/z}px; max-width: ${h/M}px`,class:"cm-completionInfo-"+(r?l?"left-narrow":"right-narrow":a?"left":"right")}}function Ye(i){let e=i.addToOptions.slice();return i.icons&&e.push({render(t){let n=document.createElement("div");return n.classList.add("cm-completionIcon"),t.type&&n.classList.add(...t.type.split(/\s+/g).map(s=>"cm-completionIcon-"+s)),n.setAttribute("aria-hidden","true"),n},position:20}),e.push({render(t,n,s,o){let l=document.createElement("span");l.className="cm-completionLabel";let a=t.displayLabel||t.label,r=0;for(let f=0;f<o.length;){let c=o[f++],h=o[f++];c>r&&l.appendChild(document.createTextNode(a.slice(r,c)));let p=l.appendChild(document.createElement("span"));p.appendChild(document.createTextNode(a.slice(c,h))),p.className="cm-completionMatchedText",r=h}return r<a.length&&l.appendChild(document.createTextNode(a.slice(r))),l},position:50},{render(t){if(!t.detail)return null;let n=document.createElement("span");return n.className="cm-completionDetail",n.textContent=t.detail,n},position:80}),e.sort((t,n)=>t.position-n.position).map(t=>t.render)}function Q(i,e,t){if(i<=t)return{from:0,to:i};if(e<0&&(e=0),e<=i>>1){let s=Math.floor(e/t);return{from:s*t,to:(s+1)*t}}let n=Math.floor((i-e)/t);return{from:i-(n+1)*t,to:i-n*t}}class Ge{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:r=>this.placeInfo(r),key:this},this.space=null,this.currentClass="";let s=e.state.field(t),{options:o,selected:l}=s.open,a=e.state.facet(m);this.optionContent=Ye(a),this.optionClass=a.optionClass,this.tooltipClass=a.tooltipClass,this.range=Q(o.length,l,a.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(e.state),this.dom.addEventListener("mousedown",r=>{let{options:f}=e.state.field(t).open;for(let c=r.target,h;c&&c!=this.dom;c=c.parentNode)if(c.nodeName=="LI"&&(h=/-(\d+)$/.exec(c.id))&&+h[1]<f.length){this.applyCompletion(e,f[+h[1]]),r.preventDefault();return}}),this.dom.addEventListener("focusout",r=>{let f=e.state.field(this.stateField,!1);f&&f.tooltip&&e.state.facet(m).closeOnBlur&&r.relatedTarget!=e.contentDOM&&e.dispatch({effects:B.of(null)})}),this.showOptions(o,s.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){var t;let n=e.state.field(this.stateField),s=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),n!=s){let{options:o,selected:l,disabled:a}=n.open;(!s.open||s.open.options!=o)&&(this.range=Q(o.length,l,e.state.facet(m).maxRenderedOptions),this.showOptions(o,n.id)),this.updateSel(),a!=((t=s.open)===null||t===void 0?void 0:t.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let n of this.currentClass.split(" "))n&&this.dom.classList.remove(n);for(let n of t.split(" "))n&&this.dom.classList.add(n);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;if((t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=Q(t.options.length,t.selected,this.view.state.facet(m).maxRenderedOptions),this.showOptions(t.options,e.id)),this.updateSelectedOption(t.selected)){this.destroyInfo();let{completion:n}=t.options[t.selected],{info:s}=n;if(!s)return;let o=typeof s=="string"?document.createTextNode(s):s(n);if(!o)return;"then"in o?o.then(l=>{l&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(l,n)}).catch(l=>J(this.view.state,l,"completion info")):this.addInfoPane(o,n)}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement("div");if(n.className="cm-tooltip cm-completionInfo",e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:s,destroy:o}=e;n.appendChild(s),this.infoDestroy=o||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,s=this.range.from;n;n=n.nextSibling,s++)n.nodeName!="LI"||!n.id?s--:s==e?n.hasAttribute("aria-selected")||(n.setAttribute("aria-selected","true"),t=n):n.hasAttribute("aria-selected")&&n.removeAttribute("aria-selected");return t&&Ze(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),s=e.getBoundingClientRect(),o=this.space;if(!o){let l=this.dom.ownerDocument.documentElement;o={left:0,top:0,right:l.clientWidth,bottom:l.clientHeight}}return s.top>Math.min(o.bottom,t.bottom)-10||s.bottom<Math.max(o.top,t.top)+10?null:this.view.state.facet(m).positionInfo(this.view,t,s,n,o,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className="cm-tooltip cm-completionInfo "+(e.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(e,t,n){const s=document.createElement("ul");s.id=t,s.setAttribute("role","listbox"),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-label",this.view.state.phrase("Completions")),s.addEventListener("mousedown",l=>{l.target==s&&l.preventDefault()});let o=null;for(let l=n.from;l<n.to;l++){let{completion:a,match:r}=e[l],{section:f}=a;if(f){let p=typeof f=="string"?f:f.name;if(p!=o&&(l>n.from||n.from==0))if(o=p,typeof f!="string"&&f.header)s.appendChild(f.header(f));else{let u=s.appendChild(document.createElement("completion-section"));u.textContent=p}}const c=s.appendChild(document.createElement("li"));c.id=t+"-"+l,c.setAttribute("role","option");let h=this.optionClass(a);h&&(c.className=h);for(let p of this.optionContent){let u=p(a,this.view.state,this.view,r);u&&c.appendChild(u)}}return n.from&&s.classList.add("cm-completionListIncompleteTop"),n.to<e.length&&s.classList.add("cm-completionListIncompleteBottom"),s}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function Je(i,e){return t=>new Ge(t,i,e)}function Ze(i,e){let t=i.getBoundingClientRect(),n=e.getBoundingClientRect(),s=t.height/i.offsetHeight;n.top<t.top?i.scrollTop-=(t.top-n.top)/s:n.bottom>t.bottom&&(i.scrollTop+=(n.bottom-t.bottom)/s)}function he(i){return(i.boost||0)*100+(i.apply?10:0)+(i.info?5:0)+(i.type?1:0)}function _e(i,e){let t=[],n=null,s=f=>{t.push(f);let{section:c}=f.completion;if(c){n||(n=[]);let h=typeof c=="string"?c:c.name;n.some(p=>p.name==h)||n.push(typeof c=="string"?{name:h}:c)}},o=e.facet(m);for(let f of i)if(f.hasResult()){let c=f.result.getMatch;if(f.result.filter===!1)for(let h of f.result.options)s(new ae(h,f.source,c?c(h):[],1e9-t.length));else{let h=e.sliceDoc(f.from,f.to),p,u=o.filterStrict?new Qe(h):new Ke(h);for(let g of f.result.options)if(p=u.match(g.label)){let x=g.displayLabel?c?c(g,p.matched):[]:p.matched;s(new ae(g,f.source,x,p.score+(g.boost||0)))}}}if(n){let f=Object.create(null),c=0,h=(p,u)=>{var g,x;return((g=p.rank)!==null&&g!==void 0?g:1e9)-((x=u.rank)!==null&&x!==void 0?x:1e9)||(p.name<u.name?-1:1)};for(let p of n.sort(h))c-=1e5,f[p.name]=c;for(let p of t){let{section:u}=p.completion;u&&(p.score+=f[typeof u=="string"?u:u.name])}}let l=[],a=null,r=o.compareCompletions;for(let f of t.sort((c,h)=>h.score-c.score||r(c.completion,h.completion))){let c=f.completion;!a||a.label!=c.label||a.detail!=c.detail||a.type!=null&&c.type!=null&&a.type!=c.type||a.apply!=c.apply||a.boost!=c.boost?l.push(f):he(f.completion)>he(a)&&(l[l.length-1]=f),a=f.completion}return l}class D{constructor(e,t,n,s,o,l){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=s,this.selected=o,this.disabled=l}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new D(this.options,pe(t,e),this.tooltip,this.timestamp,e,this.disabled)}static build(e,t,n,s,o,l){if(s&&!l&&e.some(f=>f.isPending))return s.setDisabled();let a=_e(e,t);if(!a.length)return s&&e.some(f=>f.isPending)?s.setDisabled():null;let r=t.facet(m).selectOnOpen?0:-1;if(s&&s.selected!=r&&s.selected!=-1){let f=s.options[s.selected].completion;for(let c=0;c<a.length;c++)if(a[c].completion==f){r=c;break}}return new D(a,pe(n,r),{pos:e.reduce((f,c)=>c.hasResult()?Math.min(f,c.from):f,1e8),create:ot,above:o.aboveCursor},s?s.timestamp:Date.now(),r,!1)}map(e){return new D(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:e.mapPos(this.tooltip.pos)}),this.timestamp,this.selected,this.disabled)}setDisabled(){return new D(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}}class U{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new U(nt,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,n=t.facet(m),o=(n.override||t.languageDataAt("autocomplete",E(t)).map(ze)).map(r=>(this.active.find(c=>c.source==r)||new C(r,this.active.some(c=>c.state!=0)?1:0)).update(e,n));o.length==this.active.length&&o.every((r,f)=>r==this.active[f])&&(o=this.active);let l=this.open,a=e.effects.some(r=>r.is(te));l&&e.docChanged&&(l=l.map(e.changes)),e.selection||o.some(r=>r.hasResult()&&e.changes.touchesRange(r.from,r.to))||!et(o,this.active)||a?l=D.build(o,t,this.id,l,n,a):l&&l.disabled&&!o.some(r=>r.isPending)&&(l=null),!l&&o.every(r=>!r.isPending)&&o.some(r=>r.hasResult())&&(o=o.map(r=>r.hasResult()?new C(r.source,0):r));for(let r of e.effects)r.is(Ie)&&(l=l&&l.setSelected(r.value,this.id));return o==this.active&&l==this.open?this:new U(o,this.id,l)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?tt:it}}function et(i,e){if(i==e)return!0;for(let t=0,n=0;;){for(;t<i.length&&!i[t].hasResult();)t++;for(;n<e.length&&!e[n].hasResult();)n++;let s=t==i.length,o=n==e.length;if(s||o)return s==o;if(i[t++].result!=e[n++].result)return!1}}const tt={"aria-autocomplete":"list"},it={};function pe(i,e){let t={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":i};return e>-1&&(t["aria-activedescendant"]=i+"-"+e),t}const nt=[];function Se(i,e){if(i.isUserEvent("input.complete")){let n=i.annotation(ee);if(n&&e.activateOnCompletion(n))return 12}let t=i.isUserEvent("input.type");return t&&e.activateOnTyping?5:t?1:i.isUserEvent("delete.backward")?2:i.selection?8:i.docChanged?16:0}class C{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(e,t){let n=Se(e,t),s=this;(n&8||n&16&&this.touches(e))&&(s=new C(s.source,0)),n&4&&s.state==0&&(s=new C(this.source,1)),s=s.updateFor(e,n);for(let o of e.effects)if(o.is(N))s=new C(s.source,1,o.value);else if(o.is(B))s=new C(s.source,0);else if(o.is(te))for(let l of o.value)l.source==s.source&&(s=l);return s}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(E(e.state))}}class P extends C{constructor(e,t,n,s,o,l){super(e,3,t),this.limit=n,this.result=s,this.from=o,this.to=l}hasResult(){return!0}updateFor(e,t){var n;if(!(t&3))return this.map(e.changes);let s=this.result;s.map&&!e.changes.empty&&(s=s.map(s,e.changes));let o=e.changes.mapPos(this.from),l=e.changes.mapPos(this.to,1),a=E(e.state);if(a>l||!s||t&2&&(E(e.startState)==this.from||a<this.limit))return new C(this.source,t&4?1:0);let r=e.changes.mapPos(this.limit);return st(s.validFor,e.state,o,l)?new P(this.source,this.explicit,r,s,o,l):s.update&&(s=s.update(s,o,l,new Ce(e.state,a,!1)))?new P(this.source,this.explicit,r,s,s.from,(n=s.to)!==null&&n!==void 0?n:E(e.state)):new C(this.source,1,this.explicit)}map(e){return e.empty?this:(this.result.map?this.result.map(this.result,e):this.result)?new P(this.source,this.explicit,e.mapPos(this.limit),this.result,e.mapPos(this.from),e.mapPos(this.to,1)):new C(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}}function st(i,e,t,n){if(!i)return!1;let s=e.sliceDoc(t,n);return typeof i=="function"?i(s,t,n,e):ve(i,!0).test(s)}const te=O.define({map(i,e){return i.map(t=>t.map(e))}}),Ie=O.define(),b=Z.define({create(){return U.start()},update(i,e){return i.update(e)},provide:i=>[$e.from(i,e=>e.tooltip),R.contentAttributes.from(i,e=>e.attrs)]});function ie(i,e){const t=e.completion.apply||e.completion.label;let n=i.state.field(b).active.find(s=>s.source==e.source);return n instanceof P?(typeof t=="string"?i.dispatch(Object.assign(Object.assign({},qe(i.state,t,n.from,n.to)),{annotations:ee.of(e.completion)})):t(i,e.completion,n.from,n.to),!0):!1}const ot=Je(b,ie);function W(i,e="option"){return t=>{let n=t.state.field(b,!1);if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<t.state.facet(m).interactionDelay)return!1;let s=1,o;e=="page"&&(o=we(t,n.open.tooltip))&&(s=Math.max(2,Math.floor(o.dom.offsetHeight/o.dom.querySelector("li").offsetHeight)-1));let{length:l}=n.open.options,a=n.open.selected>-1?n.open.selected+s*(i?1:-1):i?0:l-1;return a<0?a=e=="page"?0:l-1:a>=l&&(a=e=="page"?l-1:0),t.dispatch({effects:Ie.of(a)}),!0}}const lt=i=>{let e=i.state.field(b,!1);return i.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<i.state.facet(m).interactionDelay?!1:ie(i,e.open.options[e.open.selected])},ue=i=>i.state.field(b,!1)?(i.dispatch({effects:N.of(!0)}),!0):!1,rt=i=>{let e=i.state.field(b,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(i.dispatch({effects:B.of(null)}),!0)};class at{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}}const ct=50,ft=1e3,ht=je.fromClass(class{constructor(i){this.view=i,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let e of i.state.field(b).active)e.isPending&&this.startQuery(e)}update(i){let e=i.state.field(b),t=i.state.facet(m);if(!i.selectionSet&&!i.docChanged&&i.startState.field(b)==e)return;let n=i.transactions.some(o=>{let l=Se(o,t);return l&8||(o.selection||o.docChanged)&&!(l&3)});for(let o=0;o<this.running.length;o++){let l=this.running[o];if(n||l.context.abortOnDocChange&&i.docChanged||l.updates.length+i.transactions.length>ct&&Date.now()-l.time>ft){for(let a of l.context.abortListeners)try{a()}catch(r){J(this.view.state,r)}l.context.abortListeners=null,this.running.splice(o--,1)}else l.updates.push(...i.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),i.transactions.some(o=>o.effects.some(l=>l.is(N)))&&(this.pendingStart=!0);let s=this.pendingStart?50:t.activateOnTypingDelay;if(this.debounceUpdate=e.active.some(o=>o.isPending&&!this.running.some(l=>l.active.source==o.source))?setTimeout(()=>this.startUpdate(),s):-1,this.composing!=0)for(let o of i.transactions)o.isUserEvent("input.type")?this.composing=2:this.composing==2&&o.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:i}=this.view,e=i.field(b);for(let t of e.active)t.isPending&&!this.running.some(n=>n.active.source==t.source)&&this.startQuery(t);this.running.length&&e.open&&e.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(m).updateSyncTime))}startQuery(i){let{state:e}=this.view,t=E(e),n=new Ce(e,t,i.explicit,this.view),s=new at(i,n);this.running.push(s),Promise.resolve(i.source(n)).then(o=>{s.context.aborted||(s.done=o||null,this.scheduleAccept())},o=>{this.view.dispatch({effects:B.of(null)}),J(this.view.state,o)})}scheduleAccept(){this.running.every(i=>i.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(m).updateSyncTime))}accept(){var i;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(m),n=this.view.state.field(b);for(let s=0;s<this.running.length;s++){let o=this.running[s];if(o.done===void 0)continue;if(this.running.splice(s--,1),o.done){let a=E(o.updates.length?o.updates[0].startState:this.view.state),r=Math.min(a,o.done.from+(o.active.explicit?0:1)),f=new P(o.active.source,o.active.explicit,r,o.done,o.done.from,(i=o.done.to)!==null&&i!==void 0?i:a);for(let c of o.updates)f=f.update(c,t);if(f.hasResult()){e.push(f);continue}}let l=n.active.find(a=>a.source==o.active.source);if(l&&l.isPending)if(o.done==null){let a=new C(o.active.source,0);for(let r of o.updates)a=a.update(r,t);a.isPending||e.push(a)}else this.startQuery(l)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:te.of(e)})}},{eventHandlers:{blur(i){let e=this.view.state.field(b,!1);if(e&&e.tooltip&&this.view.state.facet(m).closeOnBlur){let t=e.open&&we(this.view,e.open.tooltip);(!t||!t.dom.contains(i.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:B.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:N.of(!1)}),20),this.composing=0}}}),pt=typeof navigator=="object"&&/Win/.test(navigator.platform),ut=_.highest(R.domEventHandlers({keydown(i,e){let t=e.state.field(b,!1);if(!t||!t.open||t.open.disabled||t.open.selected<0||i.key.length>1||i.ctrlKey&&!(pt&&i.altKey)||i.metaKey)return!1;let n=t.open.options[t.open.selected],s=t.active.find(l=>l.source==n.source),o=n.completion.commitCharacters||s.result.commitCharacters;return o&&o.indexOf(i.key)>-1&&ie(e,n),!1}})),Oe=R.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class dt{constructor(e,t,n,s){this.field=e,this.line=t,this.from=n,this.to=s}}class ne{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(e){let t=e.mapPos(this.from,-1,Y.TrackDel),n=e.mapPos(this.to,1,Y.TrackDel);return t==null||n==null?null:new ne(this.field,t,n)}}class se{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],s=[t],o=e.doc.lineAt(t),l=/^\s*/.exec(o.text)[0];for(let r of this.lines){if(n.length){let f=l,c=/^\t*/.exec(r)[0].length;for(let h=0;h<c;h++)f+=e.facet(Ue);s.push(t+f.length-c),r=f+r.slice(c)}n.push(r),t+=r.length+1}let a=this.fieldPositions.map(r=>new ne(r.field,s[r.line]+r.from,s[r.line]+r.to));return{text:n,ranges:a}}static parse(e){let t=[],n=[],s=[],o;for(let l of e.split(/\r\n?|\n/)){for(;o=/[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(l);){let a=o[1]?+o[1]:null,r=o[2]||o[3]||"",f=-1,c=r.replace(/\\[{}]/g,h=>h[1]);for(let h=0;h<t.length;h++)(a!=null?t[h].seq==a:c&&t[h].name==c)&&(f=h);if(f<0){let h=0;for(;h<t.length&&(a==null||t[h].seq!=null&&t[h].seq<a);)h++;t.splice(h,0,{seq:a,name:c}),f=h;for(let p of s)p.field>=f&&p.field++}s.push(new dt(f,n.length,o.index,o.index+c.length)),l=l.slice(0,o.index)+r+l.slice(o.index+o[0].length)}l=l.replace(/\\([{}])/g,(a,r,f)=>{for(let c of s)c.line==n.length&&c.from>f&&(c.from--,c.to--);return r}),n.push(l)}return new se(n,s)}}let mt=V.widget({widget:new class extends We{toDOM(){let i=document.createElement("span");return i.className="cm-snippetFieldPosition",i}ignoreEvent(){return!1}}}),gt=V.mark({class:"cm-snippetField"});class L{constructor(e,t){this.ranges=e,this.active=t,this.deco=V.set(e.map(n=>(n.from==n.to?mt:gt).range(n.from,n.to)))}map(e){let t=[];for(let n of this.ranges){let s=n.map(e);if(!s)return null;t.push(s)}return new L(t,this.active)}selectionInsideField(e){return e.ranges.every(t=>this.ranges.some(n=>n.field==this.active&&n.from<=t.from&&n.to>=t.to))}}const j=O.define({map(i,e){return i&&i.map(e)}}),yt=O.define(),k=Z.define({create(){return null},update(i,e){for(let t of e.effects){if(t.is(j))return t.value;if(t.is(yt)&&i)return new L(i.ranges,t.value)}return i&&e.docChanged&&(i=i.map(e.changes)),i&&e.selection&&!i.selectionInsideField(e.selection)&&(i=null),i},provide:i=>R.decorations.from(i,e=>e?e.deco:V.none)});function oe(i,e){return w.create(i.filter(t=>t.field==e).map(t=>w.range(t.from,t.to)))}function bt(i){let e=se.parse(i);return(t,n,s,o)=>{let{text:l,ranges:a}=e.instantiate(t.state,s),{main:r}=t.state.selection,f={changes:{from:s,to:o==r.from?r.to:o,insert:Me.of(l)},scrollIntoView:!0,annotations:n?[ee.of(n),Le.userEvent.of("input.complete")]:void 0};if(a.length&&(f.selection=oe(a,0)),a.some(c=>c.field>0)){let c=new L(a,0),h=f.effects=[j.of(c)];t.state.field(k,!1)===void 0&&h.push(O.appendConfig.of([k,St,It,Oe]))}t.dispatch(t.state.update(f))}}function Te(i){return({state:e,dispatch:t})=>{let n=e.field(k,!1);if(!n||i<0&&n.active==0)return!1;let s=n.active+i,o=i>0&&!n.ranges.some(l=>l.field==s+i);return t(e.update({selection:oe(n.ranges,s),effects:j.of(o?null:new L(n.ranges,s)),scrollIntoView:!0})),!0}}const xt=({state:i,dispatch:e})=>i.field(k,!1)?(e(i.update({effects:j.of(null)})),!0):!1,wt=Te(1),Ct=Te(-1),vt=[{key:"Tab",run:wt,shift:Ct},{key:"Escape",run:xt}],de=ye.define({combine(i){return i.length?i[0]:vt}}),St=_.highest(xe.compute([de],i=>i.facet(de)));function Nt(i,e){return Object.assign(Object.assign({},e),{apply:bt(i)})}const It=R.domEventHandlers({mousedown(i,e){let t=e.state.field(k,!1),n;if(!t||(n=e.posAtCoords({x:i.clientX,y:i.clientY}))==null)return!1;let s=t.ranges.find(o=>o.from<=n&&o.to>=n);return!s||s.field==t.active?!1:(e.dispatch({selection:oe(t.ranges,s.field),effects:j.of(t.ranges.some(o=>o.field>s.field)?new L(t.ranges,s.field):null),scrollIntoView:!0}),!0)}}),F={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},T=O.define({map(i,e){let t=e.mapPos(i,-1,Y.TrackAfter);return t??void 0}}),le=new class extends Fe{};le.startSide=1;le.endSide=-1;const Ee=Z.define({create(){return Be.empty},update(i,e){if(i=i.map(e.changes),e.selection){let t=e.state.doc.lineAt(e.selection.main.head);i=i.update({filter:n=>n>=t.from&&n<=t.to})}for(let t of e.effects)t.is(T)&&(i=i.update({add:[le.range(t.value,t.value+1)]}));return i}});function Ut(){return[Tt,Ee]}const X="()[]{}<>«»»«［］｛｝";function Ae(i){for(let e=0;e<X.length;e+=2)if(X.charCodeAt(e)==i)return X.charAt(e+1);return be(i<128?i:i+1)}function De(i,e){return i.languageDataAt("closeBrackets",e)[0]||F}const Ot=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),Tt=R.inputHandler.of((i,e,t,n)=>{if((Ot?i.composing:i.compositionStarted)||i.state.readOnly)return!1;let s=i.state.selection.main;if(n.length>2||n.length==2&&I(v(n,0))==1||e!=s.from||t!=s.to)return!1;let o=At(i.state,n);return o?(i.dispatch(o),!0):!1}),Et=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let n=De(i,i.selection.main.head).brackets||F.brackets,s=null,o=i.changeByRange(l=>{if(l.empty){let a=Dt(i.doc,l.head);for(let r of n)if(r==a&&q(i.doc,l.head)==Ae(v(r,0)))return{changes:{from:l.head-r.length,to:l.head+r.length},range:w.cursor(l.head-r.length)}}return{range:s=l}});return s||e(i.update(o,{scrollIntoView:!0,userEvent:"delete.backward"})),!s},Vt=[{key:"Backspace",run:Et}];function At(i,e){let t=De(i,i.selection.main.head),n=t.brackets||F.brackets;for(let s of n){let o=Ae(v(s,0));if(e==s)return o==s?Lt(i,s,n.indexOf(s+s+s)>-1,t):Pt(i,s,o,t.before||F.before);if(e==o&&Pe(i,i.selection.main.from))return Rt(i,s,o)}return null}function Pe(i,e){let t=!1;return i.field(Ee).between(0,i.doc.length,n=>{n==e&&(t=!0)}),t}function q(i,e){let t=i.sliceString(e,e+2);return t.slice(0,I(v(t,0)))}function Dt(i,e){let t=i.sliceString(e-2,e);return I(v(t,0))==t.length?t:t.slice(1)}function Pt(i,e,t,n){let s=null,o=i.changeByRange(l=>{if(!l.empty)return{changes:[{insert:e,from:l.from},{insert:t,from:l.to}],effects:T.of(l.to+e.length),range:w.range(l.anchor+e.length,l.head+e.length)};let a=q(i.doc,l.head);return!a||/\s/.test(a)||n.indexOf(a)>-1?{changes:{insert:e+t,from:l.head},effects:T.of(l.head+e.length),range:w.cursor(l.head+e.length)}:{range:s=l}});return s?null:i.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function Rt(i,e,t){let n=null,s=i.changeByRange(o=>o.empty&&q(i.doc,o.head)==t?{changes:{from:o.head,to:o.head+t.length,insert:t},range:w.cursor(o.head+t.length)}:n={range:o});return n?null:i.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Lt(i,e,t,n){let s=n.stringPrefixes||F.stringPrefixes,o=null,l=i.changeByRange(a=>{if(!a.empty)return{changes:[{insert:e,from:a.from},{insert:e,from:a.to}],effects:T.of(a.to+e.length),range:w.range(a.anchor+e.length,a.head+e.length)};let r=a.head,f=q(i.doc,r),c;if(f==e){if(me(i,r))return{changes:{insert:e+e,from:r},effects:T.of(r+e.length),range:w.cursor(r+e.length)};if(Pe(i,r)){let p=t&&i.sliceDoc(r,r+e.length*3)==e+e+e?e+e+e:e;return{changes:{from:r,to:r+p.length,insert:p},range:w.cursor(r+p.length)}}}else{if(t&&i.sliceDoc(r-2*e.length,r)==e+e&&(c=ge(i,r-2*e.length,s))>-1&&me(i,c))return{changes:{insert:e+e+e+e,from:r},effects:T.of(r+e.length),range:w.cursor(r+e.length)};if(i.charCategorizer(r)(f)!=G.Word&&ge(i,r,s)>-1&&!Mt(i,r,e,s))return{changes:{insert:e+e,from:r},effects:T.of(r+e.length),range:w.cursor(r+e.length)}}return{range:o=a}});return o?null:i.update(l,{scrollIntoView:!0,userEvent:"input.type"})}function me(i,e){let t=H(i).resolveInner(e+1);return t.parent&&t.from==e}function Mt(i,e,t,n){let s=H(i).resolveInner(e,-1),o=n.reduce((l,a)=>Math.max(l,a.length),0);for(let l=0;l<5;l++){let a=i.sliceDoc(s.from,Math.min(s.to,s.from+t.length+o)),r=a.indexOf(t);if(!r||r>-1&&n.indexOf(a.slice(0,r))>-1){let c=s.firstChild;for(;c&&c.from==s.from&&c.to-c.from>t.length+r;){if(i.sliceDoc(c.to-t.length,c.to)==t)return!1;c=c.firstChild}return!0}let f=s.to==e&&s.parent;if(!f)break;s=f}return!1}function ge(i,e,t){let n=i.charCategorizer(e);if(n(i.sliceDoc(e-1,e))!=G.Word)return e;for(let s of t){let o=e-s.length;if(i.sliceDoc(o,e)==s&&n(i.sliceDoc(o-1,o))!=G.Word)return o}return-1}function Ht(i={}){return[ut,b,m.of(i),ht,kt,Oe]}const Bt=[{key:"Ctrl-Space",run:ue},{mac:"Alt-`",run:ue},{key:"Escape",run:rt},{key:"ArrowDown",run:W(!0)},{key:"ArrowUp",run:W(!1)},{key:"PageDown",run:W(!0,"page")},{key:"PageUp",run:W(!1,"page")},{key:"Enter",run:lt}],kt=_.highest(xe.computeN([m],i=>i.facet(m).defaultKeymap?[Bt]:[]));export{Ut as a,Ht as b,He as c,Vt as d,Bt as e,Wt as i,Nt as s};
