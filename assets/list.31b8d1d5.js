import{bc as w,k as r,aE as H,o as g,b as D,w as a,m as T,p as o,A as R,q as t,b4 as J,b1 as K,bh as L,b7 as A,bj as W,G as X,z as F,aP as B,c as Y,a$ as Z}from"./index.ccf75e8b.js";import{_ as ee}from"./DataTable.632e8001.js";import{u as h}from"./coreInspectorInfos.343b3646.js";import{u as N}from"./coreInspectionInfos.28e53fe3.js";import{r as i}from"./validators.03da0656.js";import{V as oe}from"./VSpacer.3dae3a1a.js";import{V as C}from"./VBtn.51511430.js";import{V as le}from"./VForm.39e46bcf.js";import{V as p,a as s}from"./VRow.126a71fb.js";import{V as f}from"./VTextField.3149a27e.js";import{V as S}from"./VTextarea.8568297e.js";import{V as ae}from"./VSwitch.655f8d6f.js";import{V as ne}from"./VNavigationDrawer.cd147b40.js";import{_ as te}from"./Confirmer.3f389e76.js";import{V as P}from"./VChip.6d62dc6b.js";import"./VDivider.82c53423.js";import"./axios.6988005b.js";import"./form.66042bc2.js";import"./index.d79d6c26.js";import"./VInput.eb4ac968.js";import"./VSelectionControl.506d58f9.js";import"./ssrBoot.9c630877.js";import"./VDialog.8e32b53e.js";import"./dialog-transition.bc738bac.js";const se={class:"d-flex align-center pa-6 pb-1"},re=T("h6",{class:"text-h6"}," Update Core Inspections Tag ",-1),de={__name:"FormUpdate",props:{isUpdateFormOpened:{default:null,required:!0},coreInfo:{type:Object},inspections:{type:Object}},emits:["update:isUpdateFormOpened","formSubmitted"],setup($,{emit:c}){const e=$;w(h()),r([{id:null,title:null}]),r(null);const _=r(!1),b=r(null);r({filter:{parent_id:null}});const z=r([]);H([{id:2,name:"user 1"}]);const m=()=>{c("update:isUpdateFormOpened",!1),B(()=>{O()})},O=()=>{var d,n;(d=b.value)==null||d.reset(),e.coreInfo.fullname_uz="",e.coreInfo.fullname_ru="",e.coreInfo.fullname_en="",e.coreInfo.phone="",e.coreInfo.admission_days_uz="",e.coreInfo.admission_days_ru="",e.coreInfo.admission_days_en="",e.coreInfo.user_id=null,e.coreInfo.inspection_id=null,e.coreInfo.image_url="",e.coreInfo.status=1,e.coreInfo.order=null,z.value=[],(n=b.value)==null||n.resetValidation()},x=()=>{var d;(d=b.value)==null||d.validate().then(({valid:n})=>{if(n){let l=new FormData;l.append("fullname_uz",e.coreInfo.fullname_uz),l.append("fullname_ru",e.coreInfo.fullname_ru),l.append("fullname_en",e.coreInfo.fullname_en),l.append("phone",e.coreInfo.phone),l.append("admission_days_uz",e.coreInfo.admission_days_uz),l.append("admission_days_ru",e.coreInfo.admission_days_ru),l.append("admission_days_en",e.coreInfo.admission_days_en),l.append("user_id",e.coreInfo.user_id),l.append("inspection_id",e.coreInfo.inspection_id),l.append("status",e.coreInfo.status),l.append("order",e.coreInfo.order),c("formSubmitted",l),c("update:isUpdateFormOpened",!1),B(()=>{O()})}})},k=d=>{c("update:isUpdateFormOpened",d)};return(d,n)=>(g(),D(ne,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":e.isUpdateFormOpened,"onUpdate:modelValue":k},{default:a(()=>[T("div",se,[re,o(oe),o(C,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:m},{default:a(()=>[o(R,{size:"18",icon:"tabler-x"})]),_:1})]),o(t(J),{options:{wheelPropagation:!1}},{default:a(()=>[o(K,{flat:""},{default:a(()=>[o(L,null,{default:a(()=>[o(le,{ref_key:"refQuestionCreateForm",ref:b,modelValue:t(_),"onUpdate:modelValue":n[11]||(n[11]=l=>A(_)?_.value=l:null),onSubmit:W(x,["prevent"])},{default:a(()=>[o(p,null,{default:a(()=>[o(s,{cols:"4"}),o(s,{cols:"4"},{default:a(()=>[o(X,{rounded:"",size:"200",class:"me-6",image:e.coreInfo.image_url},null,8,["image"])]),_:1})]),_:1}),o(p,null,{default:a(()=>[o(s,{cols:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.fullname_uz,"onUpdate:modelValue":n[0]||(n[0]=l=>e.coreInfo.fullname_uz=l),rules:[t(i)],label:"Fullname Uz",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.fullname_ru,"onUpdate:modelValue":n[1]||(n[1]=l=>e.coreInfo.fullname_ru=l),rules:[t(i)],label:"Fullname Ru",disabled:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),o(p,{class:"mt-4"},{default:a(()=>[o(s,{cols:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.fullname_en,"onUpdate:modelValue":n[2]||(n[2]=l=>e.coreInfo.fullname_en=l),rules:[t(i)],label:"Fullname En",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"6",md:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.phone,"onUpdate:modelValue":n[3]||(n[3]=l=>e.coreInfo.phone=l),rules:[t(i)],label:"Phone",counter:"",maxlength:"9",hint:"Bu maydon 9 ta raqamdan ko'p bo'lmasligi kerak.",prefix:"+998",disabled:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),o(p,{class:"mt-4"},{default:a(()=>[o(s,{cols:"4"},{default:a(()=>[o(S,{modelValue:e.coreInfo.admission_days_uz,"onUpdate:modelValue":n[4]||(n[4]=l=>e.coreInfo.admission_days_uz=l),rules:[t(i)],label:"Admission Days Uz",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"4"},{default:a(()=>[o(S,{modelValue:e.coreInfo.admission_days_ru,"onUpdate:modelValue":n[5]||(n[5]=l=>e.coreInfo.admission_days_ru=l),rules:[t(i)],label:"Admission Days Ru",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"4"},{default:a(()=>[o(S,{modelValue:e.coreInfo.admission_days_en,"onUpdate:modelValue":n[6]||(n[6]=l=>e.coreInfo.admission_days_en=l),rules:[t(i)],label:"Admission Days En",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.user_fullname,"onUpdate:modelValue":n[7]||(n[7]=l=>e.coreInfo.user_fullname=l),rules:[t(i)],label:"User",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.company_name,"onUpdate:modelValue":n[8]||(n[8]=l=>e.coreInfo.company_name=l),rules:[t(i)],label:"Company",disabled:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),o(p,{class:"mt-4"},{default:a(()=>[o(s,{cols:"6",md:"6"},{default:a(()=>[o(f,{modelValue:e.coreInfo.order,"onUpdate:modelValue":n[9]||(n[9]=l=>e.coreInfo.order=l),rules:[t(i)],label:"Order",type:"number",disabled:""},null,8,["modelValue","rules"])]),_:1}),o(s,{cols:"6",md:"6"},{default:a(()=>[o(ae,{modelValue:e.coreInfo.status,"onUpdate:modelValue":n[10]||(n[10]=l=>e.coreInfo.status=l),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),o(p,null,{default:a(()=>[o(s,{cols:"12"},{default:a(()=>[o(C,{type:"submit",class:"me-3",color:"success"},{default:a(()=>[F(" Submit ")]),_:1}),o(C,{variant:"tonal",color:"error",onClick:m},{default:a(()=>[F(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},ue=["src"],$e={__name:"list",setup($){const{coreInfos:c,coreInfo:e,loading:_,error:b,pagination:z}=w(h()),{fetchCoreInfos:m,addCoreInfo:O,fetchCoreInfo:x,updateCoreInfo:k,deleteCoreInfo:d}=h(),{coreInsInfos:n}=w(N()),{fetchCoreInsInfos:l}=N(),q={title:"Core Inspector Infos",headers:["id","fullname_uz","fullname_ru","fullname_en","phone","image_url","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};r(!1);const y=r(!1),v=r(!1),E=r(null),U=r({filter:{}});m(U.value),l({getAll:!0});const j=()=>{m(U.value)},Q=()=>{d(E.value).then(I=>{v.value=!1,m(U.value)})},M=I=>{x(I.coreInfoId).then(V=>{y.value=I.isUpdateFormOpened})},G=I=>{k(e.value.id,I).then(V=>{m(U.value)})};return(I,V)=>(g(),Y("section",null,[o(ee,{onPageChanged:j,body:{data:t(c).data,pagination:t(z)},loading:t(_),tableData:q},{pageActions:a(()=>[]),image_url:a(u=>[o(p,null,{default:a(()=>[o(s,{cols:"2"},{default:a(()=>[T("img",{style:{width:"100%"},src:u.item.image_url,alt:""},null,8,ue)]),_:2},1024)]),_:2},1024)]),status:a(u=>[u.item.status===1?(g(),D(P,{key:0,color:"success"},{default:a(()=>[F(" Active ")]),_:1})):u.item.status===0?(g(),D(P,{key:1,color:"error"},{default:a(()=>[F(" Inactive ")]),_:1})):Z("",!0)]),actions:a(u=>[o(C,{onClick:ie=>M({isUpdateFormOpened:!0,coreInfoId:u.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[o(R,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),o(de,{onFormSubmitted:G,coreInfo:t(e),isUpdateFormOpened:t(y),"onUpdate:isUpdateFormOpened":V[0]||(V[0]=u=>A(y)?y.value=u:null),inspections:t(n)},null,8,["coreInfo","isUpdateFormOpened","inspections"]),o(te,{isOpen:t(v),"onUpdate:isOpen":V[1]||(V[1]=u=>A(v)?v.value=u:null),loading:t(_),onAccepted:Q},null,8,["isOpen","loading"])]))}};export{$e as default};
