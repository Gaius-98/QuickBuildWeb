import{g as k,r as g,o as p,z as x,K as D,F as V,R as z,h,w as b,M as j,P as ue,Q as me,B as T,T as G,I as A,v as be,x as B,y as O,D as H,aR as ee,i as a,av as fe,aw as ve,m as f,J as L,a6 as ye,_ as _e,aS as te,aT as le,aU as ge,aV as he,L as oe,O as Pe,V as we,aW as Ce,ae as De,aX as Se,aJ as xe,ao as Ie,f as ke,aY as $e,e as Me,n as Ve,aM as Te,s as F,aZ as Y,A as ze,G as W,a_ as Le,a$ as Fe,b0 as Ae,a2 as Be,$ as Ue,aG as qe,Y as Ee,a9 as Ne,b1 as Re,a0 as Ye,a7 as Ke,b2 as Ge,a8 as Je,X as Oe,b3 as Xe}from"./.pnpm-i8FCJJ8r.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ae,a as J}from"./LowCodeForm.vue_vue_type_script_setup_true_lang-CB2S2anI.js";import{u as Qe}from"./index-DbQn4Yx7.js";import{S as Z}from"./SchemaForm-DBvGoB_F.js";import{d as K}from"./dict-DSB9cy9R.js";import{u as We}from"./useReminder-D9NDO6Gu.js";/* empty css                   */const re=r=>(ue("data-v-537542b9"),r=r(),me(),r),Ze={class:"material-area"},je={class:"material-layout-area"},He=re(()=>D("div",{class:"title"},"布局组件",-1)),et={class:"content"},tt={class:"material-data-area"},lt=re(()=>D("div",{class:"title"},"基础组件",-1)),ot={class:"content"},at=k({__name:"MaterialArea",setup(r){const i=g({layoutMaterials:[{label:"栅格",value:"grid"},{label:"卡片",value:"card"},{label:"分割线",value:"divider"},{label:"折叠框",value:"collapse"}],dataMaterials:[{label:"输入框",value:"input"},{label:"选择器",value:"select"},{label:"日期选择器",value:"date"},{label:"数字输入框",value:"number"},{label:"开关",value:"switch"},{label:"单选框",value:"radio"},{label:"多选框",value:"checkbox"},{label:"文本域",value:"textarea"}]}),n=e=>{var u;const o=e.target;(u=e.dataTransfer)==null||u.setData("material",o.dataset.material)};return(e,o)=>{const u=j;return p(),x("div",Ze,[D("div",je,[He,D("div",et,[(p(!0),x(V,null,z(i.value.layoutMaterials,d=>(p(),h(u,{type:"dashed",key:d.value,draggable:"true",onDragstart:n,"data-material":d.value},{default:b(()=>[T(G(d.label),1)]),_:2},1032,["data-material"]))),128))])]),D("div",tt,[lt,D("div",ot,[(p(!0),x(V,null,z(i.value.dataMaterials,d=>(p(),h(u,{type:"dashed",key:d.value,draggable:"true",onDragstart:n,"data-material":d.value},{default:b(()=>[T(G(d.label),1)]),_:2},1032,["data-material"]))),128))])])])}}}),rt=U(at,[["__scopeId","data-v-537542b9"]]),$={formItemProp:{label:"",name:"",required:!1},show:void 0},nt={...$,controlProp:{allowClear:!0,bordered:!0,disabled:!1,maxlength:null,size:"middle"},type:"input",id:""},st={...$,controlProp:{allowClear:!0,autosize:!1,disabled:!1,maxlength:null,size:"middle"},type:"textarea",id:""},it={...$,controlProp:{allowClear:!0,bordered:!0,disabled:!1,mode:null,size:"middle",virtual:!0},type:"select",id:""},ct={...$,controlProp:{disabled:!1,size:"middle"},type:"switch",id:""},pt={...$,controlProp:{disabled:!1,size:"middle",buttonStyle:"solid",optionType:"button"},type:"radio",id:""},dt={...$,controlProp:{disabled:!1},type:"checkbox",id:""},ut={...$,controlProp:{allowClear:!1,bordered:!0,disabled:!1,format:"YYYY-MM-DD",mode:"",valueFormat:"YYYY-MM-DD",size:"middle",picker:""},type:"date",id:""},mt={...$,controlProp:{disabled:!1,size:"middle",bordered:!0,controls:!0,max:null,min:null,precision:null,step:1},type:"number",id:""},bt={type:"grid",controlProp:{gutter:0,colNumber:2,children:[]},id:"",show:void 0},ft={type:"card",controlProp:{title:"",bordered:!0,hoverable:!1,children:[]},id:"",show:void 0},vt={type:"divider",controlProp:{type:"horizontal",plain:!1,orientation:"left",dashed:!1,title:""},id:"",show:void 0},yt={type:"collapse",controlProp:{bordered:!0,ghost:!1,header:"折叠面板",showArrow:!0,defaultExpanded:!0,children:[]},id:"",show:void 0},_t=[nt,ct,it,pt,dt,bt,ft,ut,mt,vt,yt,st],gt=()=>"field"+new Date().getTime().toString().slice(-4),ht=(r,i)=>{const n=_t.find(e=>e.type===r);if(n){const e=A(n);if(e.formItemProp){const o=gt();e.formItemProp.label=o,e.formItemProp.name=o}return e.id=new Date().getTime().toString(),{...e,...i}}else throw new Error(`ControlDefault中${r}不存在,加载配置失败。`)},Pt=k({__name:"MaterialGrid",props:be({gutter:{},colNumber:{}},{children:{required:!0},childrenModifiers:{}}),emits:["update:children"],setup(r){const i=r,{gutter:n,colNumber:e}=B(i),o=O(r,"children"),u=H(()=>24/e.value);return ee(()=>e.value,()=>{o.value?o.value.length>e.value?o.value=o.value.slice(0,e.value):o.value=o.value.concat(Array.from({length:e.value-o.value.length}).map(()=>[])):o.value=Array.from({length:e.value}).map(()=>[])},{immediate:!0}),(d,_)=>{const c=fe,m=ve;return p(),h(m,{gutter:a(n)},{default:b(()=>[(p(!0),x(V,null,z(o.value,(C,v)=>(p(),h(c,{class:"gutter-col",span:u.value,key:v},{default:b(()=>[(p(),h(q,{modelValue:o.value[v],"onUpdate:modelValue":y=>o.value[v]=y,key:v},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["span"]))),128))]),_:1},8,["gutter"])}}}),wt=U(Pt,[["__scopeId","data-v-bd13b1ec"]]),Ct=k({__name:"MaterialCard",props:{children:{required:!0},childrenModifiers:{}},emits:["update:children"],setup(r){const i=O(r,"children");return(n,e)=>{const o=ye;return p(),h(o,L(n.$attrs,{bodyStyle:{padding:0,"min-height":"40px"}}),{default:b(()=>[f(q,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=u=>i.value=u)},null,8,["modelValue"])]),_:1},16)}}}),Dt=k({__name:"MaterialDivider",props:{type:{},plain:{type:Boolean},orientation:{},dashed:{type:Boolean},title:{}},setup(r){const i=r,{title:n,dashed:e,orientation:o,plain:u,type:d}=B(i);return(_,c)=>{const m=_e;return p(),h(m,{dashed:a(e),orientation:a(o),plain:a(u),type:a(d)},{default:b(()=>[T(G(a(n)),1)]),_:1},8,["dashed","orientation","plain","type"])}}}),St=k({__name:"MaterialCollapse",props:{bordered:{type:Boolean},ghost:{type:Boolean},title:{},showArrow:{type:Boolean},defaultExpanded:{type:Boolean},children:{}},setup(r){const i=r,{title:n,showArrow:e,bordered:o,ghost:u,defaultExpanded:d,children:_}=B(i),c=g(""),m=g(te());return d.value&&(c.value=m.value),(C,v)=>{const y=ge,t=he;return p(),h(t,{activeKey:c.value,"onUpdate:activeKey":v[1]||(v[1]=s=>c.value=s),bordered:a(o),ghost:a(u)},{default:b(()=>[(p(),h(y,{key:m.value,header:a(n),showArrow:a(e)},{default:b(()=>[f(q,{modelValue:a(_),"onUpdate:modelValue":v[0]||(v[0]=s=>le(_)?_.value=s:null)},null,8,["modelValue"])]),_:1},8,["header","showArrow"]))]),_:1},8,["activeKey","bordered","ghost"])}}}),xt={input:oe,select:Pe,radio:we,switch:Ce,number:De,checkbox:Se,grid:wt,card:Ct,date:xe,divider:Dt,collapse:St,textarea:Ie},X=ke("formDesign",()=>{const r=g([]),i=g({}),n=g({}),e=g(""),o=t=>{const{id:s,schema:l,name:P,description:I,status:M,belong:E}=t;e.value=s,d.value={name:P,description:I,status:M,belong:E},r.value=l.formCfgItemList,i.value=l.formConfig},u=(t,s)=>{const l=s.findIndex(P=>P.id===t);l!=-1&&(n.value=s[l])},d=g({name:"",description:"",status:1}),_=(t,s)=>{const l=s.findIndex(P=>P.id===t);l!=-1&&s.splice(l,1)},c=()=>{const t=A(n.value);m(t);const s=t;r.value.push(s)},m=t=>{t.id=te(),t.type=="grid"?t.controlProp.children.forEach(s=>{s.forEach(l=>{m(l)})}):t.type=="card"?t.controlProp.children.forEach(s=>{m(s)}):t.type=="collapse"&&t.controlProp.children.forEach(s=>{m(s)})},C=g(!1),v=()=>{const t=document.createElement("div");t.className="preview-form",t.style.width="720px",t.style.height="500px",t.style.overflowY="auto",t.style.padding="10px",Ve(ae,{schema:{formCfgItemList:r.value,formConfig:i.value},formData:{}}).mount(t).$el,document.body.appendChild(t)};return{curControlCfg:n,formCfgItemList:r,onSelectControlItem:u,copyControlItem:c,removeControlItem:_,extraFormConfig:d,onSave:async()=>{C.value=!0;let t="";if(v(),document.querySelector(".preview-form")){const M=await $e(document.querySelector(".preview-form"));M&&(t=M.toDataURL("image/png"),document.body.removeChild(document.querySelector(".preview-form")))}let s=J.add;const l={schema:{formCfgItemList:r.value,formConfig:i.value},...d.value,img:t};e.value&&(s=J.update,l.id=e.value);const{code:P,msg:I}=await s(l);P==200&&Me.success(I),C.value=!1},id:e,saveLoading:C,setFormDetail:o,formConfig:i}}),It=["onClick"],kt={class:"material-util"},$t=["onClick"],Mt=k({__name:"MaterialView",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(r){Te(y=>({"377eb23e":a(n).colorPrimary}));const i=Qe(),{themeCfg:n}=F(i),e=X(),{curControlCfg:o}=F(e),{onSelectControlItem:u,copyControlItem:d,removeControlItem:_}=e,c=O(r,"modelValue"),m=y=>xt[y],C=(y,t)=>{const s=A(y);switch(t){case"radio":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break;case"checkbox":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break;case"select":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break}return s},v=y=>{if(y.dataTransfer.getData("material")){const t=ht(y.dataTransfer.getData("material"));c.value.push(t)}};return(y,t)=>{const s=Be;return p(),h(a(Ae),{list:c.value,"onUpdate:list":t[1]||(t[1]=l=>c.value=l),class:"material-view",onDragover:t[2]||(t[2]=Y(()=>{},["prevent","stop"])),onDrop:Y(v,["stop"]),animation:"300",group:{name:"form",pull:!0,put:!0},"ghost-class":"ghost"},{default:b(()=>[(p(!0),x(V,null,z(c.value,l=>(p(),x("div",{key:l,onClick:Y(P=>a(u)(l.id,c.value),["stop"]),class:ze(["material-item",{active:l.id===a(o).id}])},[l.formItemProp?(p(),h(s,{key:0,label:l.formItemProp.label,name:l.formItemProp.name},{default:b(()=>[(p(),h(W(m(l.type)),L(C(l.controlProp,l.type),{key:l.id}),null,16))]),_:2},1032,["label","name"])):(p(),h(W(m(l.type)),L({key:1},C(l.controlProp,l.type),{children:l.controlProp.children,"onUpdate:children":P=>l.controlProp.children=P,key:l.id}),null,16,["children","onUpdate:children"])),D("div",kt,[D("div",{class:"icon-btn",onClick:t[0]||(t[0]=(...P)=>a(d)&&a(d)(...P)),title:"复制"},[f(a(Le))]),D("div",{class:"icon-btn",onClick:P=>a(_)(l.id,c.value),title:"删除"},[f(a(Fe))],8,$t)])],10,It))),128))]),_:1},8,["list"])}}}),q=U(Mt,[["__scopeId","data-v-11ca5068"]]),Vt=[{type:"input",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.allowClear":{type:"switch",label:"可清除"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.maxlength":{type:"number",label:"最大长度"}}},{type:"textarea",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.allowClear":{type:"switch",label:"可清除"},"controlProp.autosize":{type:"switch",label:"自适应内容高度"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.maxlength":{type:"number",label:"最大长度"}}},{type:"select",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.allowClear":{type:"switch",label:"可清除"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.virtual":{type:"switch",label:"虚拟滚动"},"controlProp.mode":{type:"select",label:"模式",component:{dataSource:[{label:"多选",value:"multiple"},{label:"标签",value:"tag"}],allowClear:!0}},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:r,data:i,msg:n}=await K.getDictTypeList();return r==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"switch",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}}}},{type:"radio",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.buttonStyle":{type:"radio",label:"样式",component:{dataSource:[{label:"描边",value:"outline"},{label:"填色",value:"solid"}]}},"controlProp.optionType":{type:"radio",label:"类型",component:{dataSource:[{label:"默认",value:"default"},{label:"按钮",value:"button"}]}},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:r,data:i,msg:n}=await K.getDictTypeList();return r==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"checkbox",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:r,data:i,msg:n}=await K.getDictTypeList();return r==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"number",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.controls":{type:"switch",label:"控件"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.max":{type:"number",label:"最大值"},"controlProp.min":{type:"number",label:"最小值"},"controlProp.precision":{type:"number",label:"精度"},"controlProp.step":{type:"number",label:"步长"}}},{type:"date",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.format":{type:"string",label:"显示格式化"},"controlProp.valueFormat":{type:"string",label:"值格式化"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.mode":{type:"radio",label:"面板",component:{dataSource:[{label:"时间",value:"time"},{label:"日期",value:"date"},{label:"月",value:"month"},{label:"年",value:"year"}]}},"controlProp.picker":{type:"radio",label:"类型",component:{dataSource:[{label:"日期",value:"date"},{label:"周",value:"week"},{label:"月",value:"month"},{label:"年",value:"year"}]}}}},{type:"grid",properties:{"controlProp.gutter":{type:"number",label:"栅格间距"},"controlProp.colNumber":{type:"radio",label:"列配置",component:{dataSource:[{label:"一",value:1},{label:"二",value:2},{label:"三",value:3},{label:"四",value:4}]}}}},{type:"card",properties:{"controlProp.title":{type:"string",label:"标题"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.hoverable":{type:"switch",label:"悬浮效果"}}},{type:"divider",properties:{"controlProp.title":{type:"string",label:"标题"},"controlProp.orientation":{type:"radio",label:"标题位置",component:{dataSource:[{label:"左",value:"left"},{label:"中",value:"center"},{label:"右",value:"right"}]}},"controlProp.dashed":{type:"switch",label:"虚线"},"controlProp.plain":{type:"switch",label:"普通正文"}}},{type:"collapse",properties:{"controlProp.title":{type:"string",label:"标题"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.ghost":{type:"switch",label:"透明效果"},"controlProp.defaultExpanded":{type:"switch",label:"默认展开"},"controlProp.showArrow":{type:"switch",label:"显示箭头"}}}],Tt={key:1},zt=k({__name:"MaterialCfg",setup(r){const i=X(),{curControlCfg:n,formConfig:e}=F(i),o=g({layout:{layout:"horizontal",labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16}},properties:{}}),u=g({layout:{layout:"horizontal",labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16}},properties:{labelAlign:{label:"对齐方式",type:"radio",component:{dataSource:[{label:"左对齐",value:"left"},{label:"右对齐",value:"right"}]}},layout:{label:"布局方式",type:"radio",component:{dataSource:[{label:"响应式",value:"resLayout"},{label:"固定",value:"fixedLayout"}],onChange({field:_,formData:c,value:m}){m=="fixedLayout"?(Reflect.deleteProperty(c.labelCol,"span"),Reflect.deleteProperty(c.labelCol,"offset")):Reflect.deleteProperty(c.labelCol,"style")}}},"labelCol.span":{label:"标签宽度",type:"number",show:"'${formData.layout}' == 'resLayout'"},"labelCol.offset":{label:"偏移量",type:"number",show:"'${formData.layout}' == 'resLayout'"},"labelCol.style.width":{label:"宽度",type:"string",show:"'${formData.layout}' == 'fixedLayout'",tooltip:"单位为百分比或px,如: 100% 或 100px"}}}),d=g("item");return ee(()=>n.value.type,()=>{if(n.value.type){let _=Vt.find(c=>c.type===n.value.type);_&&(o.value.properties=A(_.properties))}},{immediate:!0}),(_,c)=>{const m=qe,C=Ee,v=Ue;return p(),h(v,{activeKey:d.value,"onUpdate:activeKey":c[0]||(c[0]=y=>d.value=y),size:"small"},{default:b(()=>[f(C,{key:"item",tab:"控件配置"},{default:b(()=>[a(n).id?(p(),h(a(Z),{schema:o.value,formData:a(n),size:"small",key:a(n).id},null,8,["schema","formData"])):(p(),x("div",Tt,[f(m)]))]),_:1}),f(C,{key:"form",tab:"表单配置"},{default:b(()=>[f(a(Z),{schema:u.value,formData:a(e),size:"small"},null,8,["schema","formData"])]),_:1})]),_:1},8,["activeKey"])}}}),Lt={class:"form-design"},Ft={class:"form-design-container"},At={class:"middle-part"},Bt=k({__name:"FormEditor",props:{id:{}},setup(r){window.name="form-design";const i=r,{id:n}=B(i),e=X(),{formCfgItemList:o,extraFormConfig:u,saveLoading:d,formConfig:_}=F(e),{onSave:c,setFormDetail:m}=e,C=g(!1),{shouldShowReminder:v}=We("low-code-form-design"),y=g(0),t=[{title:"物料区",description:"选择您需要的表单控件",target:()=>document.querySelector(".left-part"),placement:"right"},{title:"设计区",description:"将物料区的表单控件拖拽到此区域,可以按照你需要的方式进行布局。",target:()=>document.querySelector(".middle-part-content"),placement:"top"},{title:"配置区",description:"对设计区选中的控件进行配置",target:()=>document.querySelector(".right-part"),placement:"left"},{title:"查看实际效果",description:"对已经配置完成的表单进行预览",target:()=>document.querySelector(".preview-btn"),placement:"left"},{title:"最后",description:"保存您刚刚的配置",target:()=>document.querySelector(".save-btn"),placement:"left"}];n.value?J.getDetail(n.value).then(Q=>{const{code:w,data:N,msg:R}=Q;w==200&&m(N)}):(m({id:"",name:"未命名",description:"",schema:{formCfgItemList:[],formConfig:{labelCol:{span:void 0,offset:void 0},labelAlign:"left"}},img:"",status:1,belong:"private"}),C.value=!0);const s=H(()=>n.value?u.value.description:""),l=()=>{window.open("/lowcode/form","quick-build")},P=()=>{c().then(()=>{l()})},I=g(!1),M=g({}),E=()=>{I.value=!0};return(Q,w)=>{const N=oe,R=j,ne=Xe,se=Re,ie=Ye,ce=Ke,pe=Ge,de=Je("loading");return p(),x(V,null,[D("div",Lt,[f(se,{subTitle:s.value,onBack:l,ghost:!1,style:{border:"1px solid rgb(235, 237, 240)",padding:"10px 24px"}},{title:b(()=>[f(N,{value:a(u).name,"onUpdate:value":w[0]||(w[0]=S=>a(u).name=S),bordered:!1,class:"form-name"},null,8,["value"])]),extra:b(()=>[f(ne,null,{default:b(()=>[f(R,{onClick:E,class:"preview-btn"},{default:b(()=>[T(" 预览 ")]),_:1}),f(R,{onClick:w[1]||(w[1]=S=>P()),type:"primary",class:"save-btn"},{default:b(()=>[T(" 保存 ")]),_:1})]),_:1})]),_:1},8,["subTitle"]),Ne((p(),x("div",Ft,[f(rt,{class:"left-part"}),D("div",At,[f(ie,L(a(_),{class:"middle-part-content"}),{default:b(()=>[f(q,{modelValue:a(o),"onUpdate:modelValue":w[2]||(w[2]=S=>le(o)?o.value=S:null)},null,8,["modelValue"])]),_:1},16)]),f(zt,{class:"right-part"})])),[[de,a(d),void 0,{fullscreen:!0}]])]),f(ce,{open:I.value,"onUpdate:open":w[3]||(w[3]=S=>I.value=S),title:"预览",width:"1000px",height:"800px",footer:null},{default:b(()=>[I.value?(p(),h(ae,{key:0,formData:M.value,schema:{formCfgItemList:a(o),formConfig:a(_)}},null,8,["formData","schema"])):Oe("",!0)]),_:1},8,["open"]),f(pe,{current:y.value,"onUpdate:current":w[4]||(w[4]=S=>y.value=S),open:a(v),steps:t,onClose:w[5]||(w[5]=S=>v.value=!1)},null,8,["current","open"])],64)}}}),Jt=U(Bt,[["__scopeId","data-v-ed6bc6cb"]]);export{Jt as default};
