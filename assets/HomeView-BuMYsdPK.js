import{g as p,r as e,I as u,o as d,y as m,J as f,l as y,F as g}from"./.pnpm-Btz5KtF6.js";/* empty css                   */import{_}from"./EventFlow-BqTT_74G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=p({__name:"HomeView",setup(v){const l=e(),r=e({nodes:[{id:"1",type:"rect",x:100,y:100,test:{a:1},properties:{test:"1"}},{id:"2",type:"circle",x:300,y:200}],edges:[{sourceNodeId:"1",targetNodeId:"2",type:"polyline"}]}),n=async(a,t)=>t===""?Promise.reject("Please input the password again"):t=="1"?Promise.reject("Two inputs don't match!"):Promise.resolve();e();const o=e({layout:{labelAlign:"left",layout:"horizontal",labelCol:{span:2}},properties:{field:{type:"string",label:"字段名"},test:{type:"string",label:"测试",tooltip:"字段名等于test时不显示此项",show:"'${formData.field}' != 'test'",rules:[{validator:n,trigger:"change"}]},asyncData:{label:"异步加载数据",type:"select",component:{dataSource:[{label:"1",value:1},{label:"2",value:2}]}}}}),s=e("");s.value=JSON.stringify(o.value,null,4);const i=e("");u(()=>{try{o.value=JSON.parse(s.value)}catch(a){i.value=JSON.stringify(a)}}),e({field:"1",test:"测试",asyncData:1});const c=()=>{l.value.getRawData()};return(a,t)=>(d(),m(g,null,[f("button",{onClick:t[0]||(t[0]=h=>c())},"查看数据"),y(_,{data:r.value,style:{width:"100%",height:"500px"},ref_key:"flow",ref:l},null,8,["data"])],64))}});export{x as default};
