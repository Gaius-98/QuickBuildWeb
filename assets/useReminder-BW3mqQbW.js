import{u}from"./nodemodule-@vueuse_core@10.9.0_vue@3.4.21-CS6n5tIH.js";import{f as m}from"./nodemodule-@vueuse_shared@10.9.0_vue@3.4.21-IMP1eStj.js";import{r as i}from"./nodemodule-@vue_reactivity@3.4.21-DbkE7Gi6.js";import{b as c}from"./nodemodule-@vue_runtime-core@3.4.21-Cnn673wu.js";function p(r){const a=()=>m(new Date,"YYYY-MM-DD"),t=i(!1),n=u("reminder",{}),s=()=>{const e=a(),o=n.value[r];return o===null||o!==e?(n.value[r]=e,!0):!1};return c(()=>{t.value=s()}),{shouldShowReminder:t}}export{p as u};
