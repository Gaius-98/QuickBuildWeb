import{r as y,c as ne}from"./index-DM3yB3WX.js";/* empty css                                                                    */import{g as oe,a4 as le,r as _,a5 as L,D as se,o as d,z as C,m as a,w as t,e as M,a6 as ue,a7 as ie,a8 as re,B as p,M as de,a9 as D,h as m,F as z,aa as f,Q as pe,Y as _e,a1 as ce,N as me,O as ge,a0 as ve,ab as ye,_ as fe,ac as ke,ad as be,ap as Te,R as he,U as we}from"./.pnpm-0Rj9Ahsw.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w={getList:i=>y({method:"get",url:"setting/list",params:i}),getDetail:i=>y({method:"get",url:"setting/detail",params:{id:i}}),remove:i=>y({method:"get",url:"setting/remove",params:{id:i}}),add:i=>y({method:"post",url:"setting/add",data:i}),update:i=>y({method:"post",url:"setting/update",data:i}),getSettingByType:i=>y({method:"get",url:"setting/byType",params:{type:i}})},Ce={class:"setting"},Se={class:"tools"},Ve=oe({__name:"SettingView",setup(i){const r=le({keyword:"",pageNumber:1,pageSize:10,type:""}),N=_([]),P=_([{title:"配置键名",key:"settingKey",dataIndex:"settingKey",width:"150px"},{title:"配置值",key:"settingValue",dataIndex:"settingValue",width:"400px"},{title:"配置类型",key:"settingType",dataIndex:"settingType",width:"100px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),S=_(!1),U=_(),j=()=>{var n;(n=U.value)==null||n.resetFields(),g()},I=_(0),A=()=>{r.pageNumber=1,r.pageSize=10,g()},E=n=>{const{current:e,pageSize:s}=n;r.pageNumber=e,r.pageSize=s,g()},g=()=>{S.value=!0,w.getList(r).then(n=>{const{code:e,data:s}=n;e==200&&(N.value=s.data,I.value=s.total),S.value=!1})},x=_([]),B=_({});L(()=>{g(),ne.getDict(["configType"]).then(n=>{const{code:e,data:s,msg:u}=n;e==200&&(x.value=s.configType,B.value=x.value.reduce((T,c)=>(T[c.value]=c.label,T),{}))})});const k=_(!1),l=_({settingKey:"",settingValue:"",settingType:"",status:"1",remark:""}),b=_("add"),Q=se(()=>({add:"新增配置",edit:"编辑配置"})[b.value]),V=_(),Y=()=>{b.value="add",k.value=!0,l.value={settingKey:"",settingValue:"",settingType:"",status:"1",remark:""}},G=async n=>{const{code:e,data:s}=await w.getDetail(n.id);e==200&&(l.value=s,b.value="edit",k.value=!0)},H=async n=>{const{code:e,msg:s,data:u}=await w.remove(n.id);e==200&&(M.success(u),g())},K=()=>{var n;(n=V.value)==null||n.resetFields()},J=()=>{var n;(n=V.value)==null||n.validate().then(()=>{let e;b.value=="add"?e=w.add:e=w.update,e(l.value).then(s=>{const{code:u}=s;u==200&&(M.success(b.value=="add"?"新增成功":"编辑成功"),g()),K(),k.value=!1})})};return L(()=>{}),(n,e)=>{const s=_e,u=ce,T=me,c=ge,O=ve,q=ue,h=ye,W=fe,X=ke,Z=be,R=Te,$=he,ee=we,te=ie,F=re("has-perm");return d(),C("div",Ce,[a(q,{class:"search-area"},{default:t(()=>[a(O,{ref_key:"searchFormRef",ref:U,model:r,layout:"inline",onFinish:A},{default:t(()=>[a(u,{label:"配置类型",prop:"type"},{default:t(()=>[a(s,{value:r.type,"onUpdate:value":e[0]||(e[0]=o=>r.type=o),options:x.value,"show-search":"",allowClear:"",optionFilterProp:"label",style:{width:"200px"}},null,8,["value","options"])]),_:1}),a(u,{label:"配置键名",prop:"keyword"},{default:t(()=>[a(T,{value:r.keyword,"onUpdate:value":e[1]||(e[1]=o=>r.keyword=o)},null,8,["value"])]),_:1}),a(u,null,{default:t(()=>[a(c,{type:"primary","html-type":"submit"},{default:t(()=>[p("搜索")]),_:1}),a(c,{style:{margin:"0 8px"},onClick:j},{default:t(()=>[p(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(q,null,{default:t(()=>[de("div",Se,[D((d(),m(c,{type:"primary",onClick:Y},{default:t(()=>[p("新增")]),_:1})),[[F,"system:setting:add"]])]),a(Z,{loading:S.value,columns:P.value,"data-source":N.value,scroll:{y:560},onChange:E,pagination:{current:r.pageNumber,total:I.value,showSizeChanger:!0,pageSize:r.pageSize}},{bodyCell:t(({column:o,record:v})=>[o.key=="status"?(d(),C(z,{key:0},[v.status=="1"?(d(),m(h,{key:0,color:"#87d068"},{default:t(()=>[p("启用")]),_:1})):(d(),m(h,{key:1,color:"#f50"},{default:t(()=>[p("停用")]),_:1}))],64)):f("",!0),o.key=="settingType"?(d(),m(h,{key:1},{default:t(()=>[p(pe(B.value[v.settingType]||"未定义"),1)]),_:2},1024)):f("",!0),o.key=="action"?(d(),C(z,{key:2},[D((d(),m(c,{type:"link",onClick:ae=>G(v)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"])),[[F,"system:setting:update"]]),a(W,{type:"vertical"}),a(X,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:ae=>H(v)},{default:t(()=>[D((d(),m(c,{type:"link",danger:""},{default:t(()=>[p("删除")]),_:1})),[[F,"system:setting:remove"]])]),_:2},1032,["onConfirm"])],64)):f("",!0),o.key=="settingType"?(d(),C(z,{key:3},[v.settingType=="app"?(d(),m(h,{key:0,color:"#2db7f5"},{default:t(()=>[p("菜单")]),_:1})):f("",!0),v.settingType=="directory"?(d(),m(h,{key:1,color:"#87d068"},{default:t(()=>[p("目录")]),_:1})):f("",!0)],64)):f("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a(te,{open:k.value,"onUpdate:open":e[7]||(e[7]=o=>k.value=o),onOk:J,title:Q.value,onCancel:K},{default:t(()=>[a(O,{model:l.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[a(u,{label:"配置键名",required:"",prop:"settingKey"},{default:t(()=>[a(T,{value:l.value.settingKey,"onUpdate:value":e[2]||(e[2]=o=>l.value.settingKey=o)},null,8,["value"])]),_:1}),a(u,{label:"配置值",required:"",prop:"settingValue"},{default:t(()=>[a(R,{"auto-size":"",value:l.value.settingValue,"onUpdate:value":e[3]||(e[3]=o=>l.value.settingValue=o)},null,8,["value"])]),_:1}),a(u,{label:"配置类型",required:"",prop:"settingType"},{default:t(()=>[a(s,{value:l.value.settingType,"onUpdate:value":e[4]||(e[4]=o=>l.value.settingType=o),options:x.value},null,8,["value","options"])]),_:1}),a(u,{label:"状态",required:"",prop:"status"},{default:t(()=>[a(ee,{value:l.value.status,"onUpdate:value":e[5]||(e[5]=o=>l.value.status=o),"button-style":"solid"},{default:t(()=>[a($,{value:"1"},{default:t(()=>[p("启用 ")]),_:1}),a($,{value:"0"},{default:t(()=>[p("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),a(u,{label:"备注",prop:"remark"},{default:t(()=>[a(R,{value:l.value.remark,"onUpdate:value":e[6]||(e[6]=o=>l.value.remark=o),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ue=xe(Ve,[["__scopeId","data-v-466a4e09"]]);export{Ue as default};
