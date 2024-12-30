import{d as m}from"./dict-CP6sYnsk.js";import{g as ve,X as _e,r as d,Y as ye,D as G,o as i,y as w,l as a,w as t,e as I,$ as fe,a0 as ke,a1 as ge,B as u,K as be,a2 as D,h as v,F as h,a3 as O,O as De,T as Te,M as xe,R as we,a4 as Ce,a5 as Ne,C as Fe,a6 as Ie,L as he,a7 as Oe,a8 as Ue,ak as Re,aa as qe}from"./.pnpm-C57POoKK.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Dco2W4GM.js";const $e={class:"dict"},ze={class:"tools"},Be=ve({__name:"DictView",setup(Ve){const c=_e({keyword:"",dictType:"",pageNumber:1,pageSize:10}),V=d([]),H=d([{title:"字典类型",key:"dictType",dataIndex:"dictType",width:"300px"},{title:"类型描述",key:"dictTypeDesc",dataIndex:"dictTypeDesc",width:"300px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),J=d([{title:"字典值",key:"value",dataIndex:"value",width:"300px"},{title:"翻译值",key:"label",dataIndex:"label",width:"300px"},{title:"排序号",key:"sortNum",dataIndex:"sortNum",width:"120px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),U=d(!1),L=d(),Q=()=>{var l;(l=L.value)==null||l.resetFields(),_()},j=d(0),W=()=>{c.pageNumber=1,c.pageSize=10,_()},Z=l=>{const{current:e,pageSize:s}=l;c.pageNumber=e,c.pageSize=s,_()},_=()=>{U.value=!0,m.getTypeList(c).then(l=>{const{code:e,data:s}=l;e==200&&(V.value=s.data,j.value=s.total),U.value=!1})},R=d([]),M=async()=>{const{code:l,data:e,msg:s}=await m.getDictTypeList();l==200&&(R.value=e)};ye(()=>{_(),M()});const T=d(!1),r=d({dictType:"",dictTypeDesc:"",remark:"",status:"1"}),g=d("add"),ee=G(()=>({add:"新增字典类型",edit:"编辑字典类型"})[g.value]),q=d("add"),te=G(()=>({add:"新增字典",edit:"编辑字典"})[q.value]),S=d(),ae=()=>{g.value="add",T.value=!0,r.value={dictType:"",dictTypeDesc:"",status:"1",remark:""}},le=async l=>{const{code:e,data:s}=await m.getTypeDetail(l.id);e==200&&(r.value=s,g.value="edit",T.value=!0)},oe=async l=>{const{code:e,msg:s,data:n}=await m.removeType(l.id);e==200&&(I.success(n),c.pageNumber=1,_())},ne=async l=>{const{code:e,msg:s,data:n}=await m.removeData(l.id);e==200&&(I.success(n),_())},P=()=>{var l;(l=S.value)==null||l.resetFields()},E=()=>{var l;(l=$.value)==null||l.resetFields()},se=()=>{var l;(l=S.value)==null||l.validate().then(()=>{let e;g.value=="add"?e=m.addType:e=m.updateType,e(r.value).then(s=>{const{code:n}=s;n==200&&(I.success(g.value=="add"?"新增成功":"编辑成功"),_()),P(),T.value=!1})})},ue=()=>{var l;(l=$.value)==null||l.validate().then(()=>{let e;g.value=="add"?e=m.addData:e=m.updateData,e(p.value).then(s=>{const{code:n}=s;n==200&&(I.success(g.value=="add"?"新增成功":"编辑成功"),_(),M()),E(),x.value=!1})})},x=d(!1),de=async l=>{const{code:e,data:s}=await m.getDictDetail(l.id);e==200&&(x.value=!0,q.value="edit",p.value=s)},ie=l=>{x.value=!0,q.value="add",p.value={dictType:l.dictType,label:"",value:"",status:"1",sortNum:0}},p=d({label:"",value:"",sortNum:0,status:"1",dictType:""}),$=d();return(l,e)=>{const s=De,n=Te,y=xe,z=we,B=fe,C=Ce,A=Ne,pe=Fe,K=Ie,N=he,F=Oe,X=Ue,ce=Re,Y=ke,re=qe,b=ge("has-perm");return i(),w("div",$e,[a(B,{class:"search-area"},{default:t(()=>[a(z,{ref_key:"searchFormRef",ref:L,layout:"inline",model:c,onFinish:W},{default:t(()=>[a(n,{label:"字典类型",name:"dictType"},{default:t(()=>[a(s,{value:c.dictType,"onUpdate:value":e[0]||(e[0]=o=>c.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:R.value,style:{width:"200px"}},null,8,["value","options"])]),_:1}),a(n,null,{default:t(()=>[a(y,{type:"primary","html-type":"submit"},{default:t(()=>[u("搜索")]),_:1}),a(y,{style:{margin:"0 8px"},onClick:Q},{default:t(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(B,null,{default:t(()=>[be("div",ze,[D((i(),v(y,{type:"primary",onClick:ae},{default:t(()=>[u("新增")]),_:1})),[[b,"system:dict:add"]])]),a(K,{loading:U.value,columns:H.value,"data-source":V.value,pagination:{current:c.pageNumber,total:j.value,showSizeChanger:!0,pageSize:c.pageSize},current:c.pageNumber,"onUpdate:current":e[1]||(e[1]=o=>c.pageNumber=o),onChange:Z,scroll:{y:560},rowKey:"id",class:"ant-table-striped"},{bodyCell:t(({column:o,record:f})=>[o.key=="status"?(i(),w(h,{key:0},[f.status=="1"?(i(),v(C,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(i(),v(C,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):O("",!0),o.key=="action"?(i(),w(h,{key:1},[D((i(),v(y,{type:"link",onClick:k=>ie(f)},{default:t(()=>[u("新增")]),_:2},1032,["onClick"])),[[b,"system:dict:add"]]),D((i(),v(y,{type:"link",onClick:k=>le(f)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"])),[[b,"system:dict:update"]]),a(A,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:k=>oe(f)},{default:t(()=>[D((i(),v(y,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})),[[b,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):O("",!0)]),expandedRowRender:t(({record:o})=>[a(B,null,{default:t(()=>[a(K,{class:"ant-table-striped",columns:J.value,pagination:!1,"data-source":o.dictDataList,"row-class-name":(f,k)=>k%2===1?"table-striped":null,style:{margin:"5px"}},{bodyCell:t(({column:f,record:k})=>[f.key=="status"?(i(),w(h,{key:0},[k.status?(i(),v(C,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(i(),v(C,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):O("",!0),f.key=="action"?(i(),w(h,{key:1},[D((i(),v(y,{type:"link",onClick:me=>de(k)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"])),[[b,"system:dict:update"]]),a(pe,{type:"vertical"}),a(A,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:me=>ne(k)},{default:t(()=>[D((i(),v(y,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})),[[b,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):O("",!0)]),_:2},1032,["columns","data-source","row-class-name"])]),_:2},1024)]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),a(Y,{open:T.value,"onUpdate:open":e[6]||(e[6]=o=>T.value=o),onOk:se,title:ee.value,onCancel:P},{default:t(()=>[a(z,{model:r.value,"label-col":{span:8},ref_key:"modalFormRef",ref:S},{default:t(()=>[a(n,{label:"字典类型",required:"",prop:"dictType"},{default:t(()=>[a(N,{value:r.value.dictType,"onUpdate:value":e[2]||(e[2]=o=>r.value.dictType=o)},null,8,["value"])]),_:1}),a(n,{label:"类型描述",required:"",prop:"dictTypeDesc"},{default:t(()=>[a(N,{value:r.value.dictTypeDesc,"onUpdate:value":e[3]||(e[3]=o=>r.value.dictTypeDesc=o)},null,8,["value"])]),_:1}),a(n,{label:"状态",required:"",prop:"status"},{default:t(()=>[a(X,{value:r.value.status,"onUpdate:value":e[4]||(e[4]=o=>r.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[u("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),a(n,{label:"备注",prop:"remark"},{default:t(()=>[a(ce,{value:r.value.remark,"onUpdate:value":e[5]||(e[5]=o=>r.value.remark=o),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"]),a(Y,{open:x.value,"onUpdate:open":e[12]||(e[12]=o=>x.value=o),title:te.value,onOk:ue,onCancel:E},{default:t(()=>[a(z,{model:p.value,"label-col":{span:8},ref_key:"modalDictDataRef",ref:$},{default:t(()=>[a(n,{label:"所属类型",required:"",prop:"dictType"},{default:t(()=>[a(s,{value:p.value.dictType,"onUpdate:value":e[7]||(e[7]=o=>p.value.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:R.value,disabled:""},null,8,["value","options"])]),_:1}),a(n,{label:"字典值",required:"",prop:"value"},{default:t(()=>[a(N,{value:p.value.value,"onUpdate:value":e[8]||(e[8]=o=>p.value.value=o)},null,8,["value"])]),_:1}),a(n,{label:"字典翻译",required:"",prop:"label"},{default:t(()=>[a(N,{value:p.value.label,"onUpdate:value":e[9]||(e[9]=o=>p.value.label=o)},null,8,["value"])]),_:1}),a(n,{label:"排序号",required:"",prop:"sortNum"},{default:t(()=>[a(re,{min:0,step:1,value:p.value.sortNum,"onUpdate:value":e[10]||(e[10]=o=>p.value.sortNum=o)},null,8,["value"])]),_:1}),a(n,{label:"状态",required:"",prop:"status"},{default:t(()=>[a(X,{value:p.value.status,"onUpdate:value":e[11]||(e[11]=o=>p.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[u("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ee=Se(Be,[["__scopeId","data-v-4f37bcf7"]]);export{Ee as default};
