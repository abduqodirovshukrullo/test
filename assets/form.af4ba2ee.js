import{ah as p,a6 as F,a9 as v,k as d,D as M,ac as b,aJ as B,R as k,aa as D}from"./index.d0376abb.js";const m=Symbol.for("vuetify:form"),O=p({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function R(i){const n=F(i,"modelValue"),f=v(()=>i.disabled),c=v(()=>i.readonly),o=d(!1),l=d([]),r=d([]);async function g(){const e=[];let a=!0;r.value=[],o.value=!0;for(const t of l.value){const s=await t.validate();if(s.length>0&&(a=!1,e.push({id:t.id,errorMessages:s})),!a&&i.fastFail)break}return r.value=e,o.value=!1,{valid:a,errors:r.value}}function y(){l.value.forEach(e=>e.reset()),n.value=null}function V(){l.value.forEach(e=>e.resetValidation()),r.value=[],n.value=null}return M(l,()=>{let e=0,a=0;const t=[];for(const s of l.value)s.isValid===!1?(a++,t.push({id:s.id,errorMessages:s.errorMessages})):s.isValid===!0&&e++;r.value=t,n.value=a>0?!1:e===l.value.length?!0:null},{deep:!0}),b(m,{register:e=>{let{id:a,validate:t,reset:s,resetValidation:u}=e;l.value.some(h=>h.id===a)&&B(`Duplicate input name "${a}"`),l.value.push({id:a,validate:t,reset:s,resetValidation:u,isValid:null,errorMessages:[]})},unregister:e=>{l.value=l.value.filter(a=>a.id!==e)},update:(e,a,t)=>{const s=l.value.find(u=>u.id===e);!s||(s.isValid=a,s.errorMessages=t)},isDisabled:f,isReadonly:c,isValidating:o,items:l,validateOn:k(i,"validateOn")}),{errors:r,isDisabled:f,isReadonly:c,isValidating:o,items:l,validate:g,reset:y,resetValidation:V}}function w(){return D(m,null)}export{R as c,O as m,w as u};
