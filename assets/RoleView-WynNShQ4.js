import{r as k,c as ne}from"./index-Dco2W4GM.js";import{a as re}from"./menu-fZjXFYfh.js";import{g as se,X as ue,r as u,Y as B,D as de,o as d,y as w,l as t,w as a,e as V,$ as ie,a0 as pe,a1 as ce,B as i,K as $,a2 as F,h as m,F as T,a3 as h,L as me,T as _e,M as ve,R as fe,a4 as ye,a5 as ge,a6 as ke,a7 as he,a8 as be,ac as xe,O as we,ak as Ce}from"./.pnpm-C57POoKK.js";import{_ as Ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={getList:p=>k({method:"get",url:"role/list",params:p}),getDetail:p=>k({method:"get",url:"role/detail",params:{id:p}}),remove:p=>k({method:"get",url:"role/remove",params:{id:p}}),add:p=>k({method:"post",url:"role/add",data:p}),update:p=>k({method:"post",url:"role/update",data:p})},Me={class:"role"},Fe={class:"tools"},Te={style:{height:"150px","overflow-y":"auto"}},De=se({__name:"RoleView",setup(p){const c=ue({keyword:"",pageNumber:1,pageSize:10}),D=u([]),q=u([{title:"角色名",key:"roleName",dataIndex:"roleName",width:"200px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),C=u(!1),I=u(),L=()=>{var o;(o=I.value)==null||o.resetFields(),_()},P=u(0),A=()=>{c.pageNumber=1,c.pageSize=10,_()},j=o=>{const{current:e,pageSize:r}=o;c.pageNumber=e,c.pageSize=r,_()},_=()=>{C.value=!0,b.getList(c).then(o=>{const{code:e,data:r}=o;e==200&&(D.value=r.data,P.value=r.total),C.value=!1})},K=u([]);B(()=>{_(),ne.getDict(["dataPerm"]).then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(K.value=r.dataPerm)})});const v=u(!1),l=u({roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}),f=u("add"),E=de(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),N=u(),X=()=>{f.value="add",v.value=!0,l.value={roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}},Y=async o=>{const{code:e,data:r}=await b.getDetail(o.roleId);e==200&&(l.value=r,f.value="edit",v.value=!0)},G=async o=>{const{code:e,msg:r,data:s}=await b.remove(o.roleId);e==200&&(V.success(s),_())},S=()=>{var o;(o=N.value)==null||o.resetFields()},H=()=>{var o;(o=N.value)==null||o.validate().then(()=>{let e;f.value=="add"?e=b.add:e=b.update,l.value.roleMenus instanceof Array||(l.value.roleMenus=l.value.roleMenus.checked),e(l.value).then(r=>{const{code:s}=r;s==200&&(V.success(f.value=="add"?"新增成功":"编辑成功"),_()),S(),v.value=!1})})},U=u([]),J=()=>{re.getAllMenu().then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(U.value=r)})};return B(()=>{J()}),(o,e)=>{const r=me,s=_e,y=ve,z=fe,O=ie,x=ye,Q=ge,W=ke,R=he,Z=be,ee=xe,ae=we,te=Ce,oe=pe,M=ce("has-perm");return d(),w("div",Me,[t(O,{class:"search-area"},{default:a(()=>[t(z,{ref_key:"searchFormRef",ref:I,layout:"inline",model:c,onFinish:A},{default:a(()=>[t(s,{label:"角色名称",prop:"keyword"},{default:a(()=>[t(r,{value:c.keyword,"onUpdate:value":e[0]||(e[0]=n=>c.keyword=n)},null,8,["value"])]),_:1}),t(s,null,{default:a(()=>[t(y,{type:"primary","html-type":"submit"},{default:a(()=>[i("搜索")]),_:1}),t(y,{style:{margin:"0 8px"},onClick:L},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(O,null,{default:a(()=>[$("div",Fe,[F((d(),m(y,{type:"primary",onClick:X},{default:a(()=>[i("新增")]),_:1})),[[M,"system:role:add"]])]),t(W,{loading:C.value,columns:q.value,"data-source":D.value,scroll:{y:560},onChange:j,pagination:{current:c.pageNumber,total:P.value,showSizeChanger:!0,pageSize:c.pageSize}},{bodyCell:a(({column:n,record:g})=>[n.key=="status"?(d(),w(T,{key:0},[g.status=="1"?(d(),m(x,{key:0,color:"#87d068"},{default:a(()=>[i("启用")]),_:1})):(d(),m(x,{key:1,color:"#f50"},{default:a(()=>[i("停用")]),_:1}))],64)):h("",!0),n.key=="action"?(d(),w(T,{key:1},[F((d(),m(y,{type:"link",onClick:le=>Y(g)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"])),[[M,"system:role:update"]]),t(Q,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:le=>G(g)},{default:a(()=>[F((d(),m(y,{type:"link",danger:""},{default:a(()=>[i("删除")]),_:1})),[[M,"system:role:remove"]])]),_:2},1032,["onConfirm"])],64)):h("",!0),n.key=="roleType"?(d(),w(T,{key:2},[g.roleType=="app"?(d(),m(x,{key:0,color:"#2db7f5"},{default:a(()=>[i("菜单")]),_:1})):h("",!0),g.roleType=="directory"?(d(),m(x,{key:1,color:"#87d068"},{default:a(()=>[i("目录")]),_:1})):h("",!0)],64)):h("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(oe,{open:v.value,"onUpdate:open":e[7]||(e[7]=n=>v.value=n),onOk:H,title:E.value,onCancel:S},{default:a(()=>[t(z,{model:l.value,"label-col":{span:8},ref_key:"modalFormRef",ref:N},{default:a(()=>[t(s,{label:"角色名",required:"",prop:"roleName"},{default:a(()=>[t(r,{value:l.value.roleName,"onUpdate:value":e[1]||(e[1]=n=>l.value.roleName=n)},null,8,["value"])]),_:1}),t(s,{label:"角色ID",required:"",prop:"roleKey"},{default:a(()=>[t(r,{value:l.value.roleKey,"onUpdate:value":e[2]||(e[2]=n=>l.value.roleKey=n)},null,8,["value"])]),_:1}),t(s,{label:"状态",required:"",prop:"status"},{default:a(()=>[t(Z,{value:l.value.status,"onUpdate:value":e[3]||(e[3]=n=>l.value.status=n),"button-style":"solid"},{default:a(()=>[t(R,{value:"1"},{default:a(()=>[i("启用 ")]),_:1}),t(R,{value:"0"},{default:a(()=>[i("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(s,{label:"菜单权限",prop:"roleMenus"},{default:a(()=>[$("div",Te,[t(ee,{checkedKeys:l.value.roleMenus,"onUpdate:checkedKeys":e[4]||(e[4]=n=>l.value.roleMenus=n),"tree-data":U.value,checkStrictly:!0,checkable:"","field-names":{children:"children",title:"label",key:"id"}},null,8,["checkedKeys","tree-data"])])]),_:1}),t(s,{label:"数据权限",required:"",prop:"dataPerm"},{default:a(()=>[t(ae,{value:l.value.dataPerm,"onUpdate:value":e[5]||(e[5]=n=>l.value.dataPerm=n),options:K.value},null,8,["value","options"])]),_:1}),t(s,{label:"备注",prop:"remark"},{default:a(()=>[t(te,{value:l.value.remark,"onUpdate:value":e[6]||(e[6]=n=>l.value.remark=n),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ue=Ne(De,[["__scopeId","data-v-795fb0a3"]]);export{Ue as default};
