import{r as e}from"./index-Dcam5Uk9.js";const o={getList:t=>e({method:"get",url:"notice/list",params:t}),getDetail:t=>e({method:"get",url:"notice/detail",params:{id:t}}),remove:t=>e({method:"get",url:"notice/remove",params:{id:t}}),add:t=>e({method:"post",url:"notice/add",data:t}),update:t=>e({method:"post",url:"notice/update",data:t}),getNoticeList:t=>e({method:"get",url:"notice/list/byUser",params:t}),getNoticeDetail:t=>e({method:"get",url:"notice/detail/byUser",params:{id:t}})};export{o as a};
