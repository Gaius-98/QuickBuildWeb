import{d as m}from"./dict-B8wzmY-C.js";import{g as ve,W as _e,r as d,X as ye,E as Y,o as i,A as w,l as a,w as t,e as h,Y as fe,$ as ke,a0 as ge,C as u,K as De,N as b,h as v,F as I,a1 as U,V as be,a3 as Te,a4 as xe,a5 as we,a6 as Ce,a7 as Ne,D as Fe,a8 as he,a2 as Ie,a9 as Ue,aa as Oe,ao as qe,ac as Re}from"./.pnpm-Bqj5ZitX.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Dcam5Uk9.js";const $e={class:"dict"},ze={class:"tools"},Ve=ve({__name:"DictView",setup(Be){const p=_e({keyword:"",dictType:"",pageNumber:1,pageSize:10}),B=d([]),G=d([{title:"字典类型",key:"dictType",dataIndex:"dictType",width:"300px"},{title:"类型描述",key:"dictTypeDesc",dataIndex:"dictTypeDesc",width:"300px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),H=d([{title:"字典值",key:"value",dataIndex:"value",width:"300px"},{title:"翻译值",key:"label",dataIndex:"label",width:"300px"},{title:"排序号",key:"sortNum",dataIndex:"sortNum",width:"120px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),O=d(!1),j=d(),J=()=>{var l;(l=j.value)==null||l.resetFields(),_()},E=d(0),Q=()=>{p.pageNumber=1,p.pageSize=10,_()},Z=l=>{const{current:e,pageSize:s}=l;p.pageNumber=e,p.pageSize=s,_()},_=()=>{O.value=!0,m.getTypeList(p).then(l=>{const{code:e,data:s}=l;e==200&&(B.value=s.data,E.value=s.total),O.value=!1})},q=d([]),L=async()=>{const{code:l,data:e,msg:s}=await m.getDictTypeList();l==200&&(q.value=e)};ye(()=>{_(),L()});const T=d(!1),r=d({dictType:"",dictTypeDesc:"",remark:"",status:"1"}),g=d("add"),ee=Y(()=>({add:"新增字典类型",edit:"编辑字典类型"})[g.value]),R=d("add"),te=Y(()=>({add:"新增字典",edit:"编辑字典"})[R.value]),S=d(),ae=()=>{g.value="add",T.value=!0,r.value={dictType:"",dictTypeDesc:"",status:"1",remark:""}},le=async l=>{const{code:e,data:s}=await m.getTypeDetail(l.id);e==200&&(r.value=s,g.value="edit",T.value=!0)},oe=async l=>{const{code:e,msg:s,data:n}=await m.removeType(l.id);e==200&&(h.success(n),p.pageNumber=1,_())},ne=async l=>{const{code:e,msg:s,data:n}=await m.removeData(l.id);e==200&&(h.success(n),_())},P=()=>{var l;(l=S.value)==null||l.resetFields()},A=()=>{var l;(l=$.value)==null||l.resetFields()},se=()=>{var l;(l=S.value)==null||l.validate().then(()=>{let e;g.value=="add"?e=m.addType:e=m.updateType,e(r.value).then(s=>{const{code:n}=s;n==200&&(h.success(g.value=="add"?"新增成功":"编辑成功"),_()),P(),T.value=!1})})},ue=()=>{var l;(l=$.value)==null||l.validate().then(()=>{let e;g.value=="add"?e=m.addData:e=m.updateData,e(c.value).then(s=>{const{code:n}=s;n==200&&(h.success(g.value=="add"?"新增成功":"编辑成功"),_(),L()),A(),x.value=!1})})},x=d(!1),de=async l=>{const{code:e,data:s}=await m.getDictDetail(l.id);e==200&&(x.value=!0,R.value="edit",c.value=s)},ie=l=>{x.value=!0,R.value="add",c.value={dictType:l.dictType,label:"",value:"",status:"1",sortNum:0}},c=d({label:"",value:"",sortNum:0,status:"1",dictType:""}),$=d();return(l,e)=>{const s=be,n=Te,y=xe,z=we,V=fe,C=Ce,M=Ne,ce=Fe,K=he,N=Ie,F=Ue,W=Oe,pe=qe,X=ke,re=Re,D=ge("has-perm");return i(),w("div",$e,[a(V,{class:"search-area"},{default:t(()=>[a(z,{ref_key:"searchFormRef",ref:j,layout:"inline",model:p,onFinish:Q},{default:t(()=>[a(n,{label:"字典类型",name:"dictType"},{default:t(()=>[a(s,{value:p.dictType,"onUpdate:value":e[0]||(e[0]=o=>p.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:q.value,style:{width:"200px"}},null,8,["value","options"])]),_:1}),a(n,null,{default:t(()=>[a(y,{type:"primary","html-type":"submit"},{default:t(()=>[u("搜索")]),_:1}),a(y,{style:{margin:"0 8px"},onClick:J},{default:t(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(V,null,{default:t(()=>[De("div",ze,[b((i(),v(y,{type:"primary",onClick:ae},{default:t(()=>[u("新增")]),_:1})),[[D,"system:dict:add"]])]),a(K,{loading:O.value,columns:G.value,"data-source":B.value,pagination:{current:p.pageNumber,total:E.value,showSizeChanger:!0,pageSize:p.pageSize},current:p.pageNumber,"onUpdate:current":e[1]||(e[1]=o=>p.pageNumber=o),onChange:Z,scroll:{y:560},rowKey:"id",class:"ant-table-striped"},{bodyCell:t(({column:o,record:f})=>[o.key=="status"?(i(),w(I,{key:0},[f.status=="1"?(i(),v(C,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(i(),v(C,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):U("",!0),o.key=="action"?(i(),w(I,{key:1},[b((i(),v(y,{type:"link",onClick:k=>ie(f)},{default:t(()=>[u("新增")]),_:2},1032,["onClick"])),[[D,"system:dict:add"]]),b((i(),v(y,{type:"link",onClick:k=>le(f)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"])),[[D,"system:dict:update"]]),a(M,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:k=>oe(f)},{default:t(()=>[b((i(),v(y,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})),[[D,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):U("",!0)]),expandedRowRender:t(({record:o})=>[a(V,null,{default:t(()=>[a(K,{class:"ant-table-striped",columns:H.value,pagination:!1,"data-source":o.dictDataList,"row-class-name":(f,k)=>k%2===1?"table-striped":null,style:{margin:"5px"}},{bodyCell:t(({column:f,record:k})=>[f.key=="status"?(i(),w(I,{key:0},[k.status?(i(),v(C,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(i(),v(C,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):U("",!0),f.key=="action"?(i(),w(I,{key:1},[b((i(),v(y,{type:"link",onClick:me=>de(k)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"])),[[D,"system:dict:update"]]),a(ce,{type:"vertical"}),a(M,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:me=>ne(k)},{default:t(()=>[b((i(),v(y,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})),[[D,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):U("",!0)]),_:2},1032,["columns","data-source","row-class-name"])]),_:2},1024)]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),a(X,{open:T.value,"onUpdate:open":e[6]||(e[6]=o=>T.value=o),onOk:se,title:ee.value,onCancel:P},{default:t(()=>[a(z,{model:r.value,"label-col":{span:8},ref_key:"modalFormRef",ref:S},{default:t(()=>[a(n,{label:"字典类型",required:"",prop:"dictType"},{default:t(()=>[a(N,{value:r.value.dictType,"onUpdate:value":e[2]||(e[2]=o=>r.value.dictType=o)},null,8,["value"])]),_:1}),a(n,{label:"类型描述",required:"",prop:"dictTypeDesc"},{default:t(()=>[a(N,{value:r.value.dictTypeDesc,"onUpdate:value":e[3]||(e[3]=o=>r.value.dictTypeDesc=o)},null,8,["value"])]),_:1}),a(n,{label:"状态",required:"",prop:"status"},{default:t(()=>[a(W,{value:r.value.status,"onUpdate:value":e[4]||(e[4]=o=>r.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[u("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),a(n,{label:"备注",prop:"remark"},{default:t(()=>[a(pe,{value:r.value.remark,"onUpdate:value":e[5]||(e[5]=o=>r.value.remark=o),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"]),a(X,{open:x.value,"onUpdate:open":e[12]||(e[12]=o=>x.value=o),title:te.value,onOk:ue,onCancel:A},{default:t(()=>[a(z,{model:c.value,"label-col":{span:8},ref_key:"modalDictDataRef",ref:$},{default:t(()=>[a(n,{label:"所属类型",required:"",prop:"dictType"},{default:t(()=>[a(s,{value:c.value.dictType,"onUpdate:value":e[7]||(e[7]=o=>c.value.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:q.value,disabled:""},null,8,["value","options"])]),_:1}),a(n,{label:"字典值",required:"",prop:"value"},{default:t(()=>[a(N,{value:c.value.value,"onUpdate:value":e[8]||(e[8]=o=>c.value.value=o)},null,8,["value"])]),_:1}),a(n,{label:"字典翻译",required:"",prop:"label"},{default:t(()=>[a(N,{value:c.value.label,"onUpdate:value":e[9]||(e[9]=o=>c.value.label=o)},null,8,["value"])]),_:1}),a(n,{label:"排序号",required:"",prop:"sortNum"},{default:t(()=>[a(re,{min:0,step:1,value:c.value.sortNum,"onUpdate:value":e[10]||(e[10]=o=>c.value.sortNum=o)},null,8,["value"])]),_:1}),a(n,{label:"状态",required:"",prop:"status"},{default:t(()=>[a(W,{value:c.value.status,"onUpdate:value":e[11]||(e[11]=o=>c.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[u("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ae=Se(Ve,[["__scopeId","data-v-4f37bcf7"]]);export{Ae as default};
