import{bc as f,k as l,o as p,c as z,p as n,w as t,b as d,z as _,x as I,a$ as v,A,q as o,b7 as B}from"./index.68ab1696.js";import{_ as O}from"./DataTable.529efa2b.js";import{u as g}from"./clientEnrolStore.4d5147e8.js";import{_ as $}from"./AppealEnrolInfo.5616f81e.js";import{u as y}from"./coreInspectionInfos.8c74ba9a.js";import{V as D}from"./VChip.685dc12f.js";import{V as N}from"./VBtn.e44a7ff0.js";import"./VRow.b4ec55e0.js";import"./VDivider.db684b17.js";import"./axios.3a2e37fd.js";import"./coreInspectorInfos.7039a4d3.js";import"./systemUserStore.92787ac9.js";import"./VSpacer.b67c60b4.js";import"./VList.b0e7618d.js";import"./index.58b926c8.js";import"./VForm.12cad806.js";import"./form.2a7f55dd.js";import"./VNavigationDrawer.d21b7d26.js";import"./ssrBoot.786f9135.js";const se={__name:"list",setup(S){const{appealInspectors:c,appealInspector:R,loading:b,error:T,pagination:h}=f(g()),{fetchCoreInsInfos:C}=y(),{fetchAppealInspectors:r}=g(),{coreInsInfos:k}=f(y()),x={title:"Appeal Enrol Inspector",headers:["type","first_name","phone","problem_name","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},a=l(!1),m=l({}),i=l({filter:{parent_id:null}});r(i.value),C({getAll:!0});const E=()=>{r(i.value)},V=()=>{r(i.value)},w=u=>{const s=c.value.data.filter(e=>e.id===u);m.value=s[0],a.value=!0};return(u,s)=>(p(),z("section",null,[n(O,{onPageChanged:V,body:{data:o(c).data,pagination:o(h)},loading:o(b),tableData:x},{status:t(e=>[e.item.status?(p(),d(D,{key:0,color:"success"},{default:t(()=>[_(I(e.item.status),1)]),_:2},1024)):v("",!0)]),type:t(e=>[e.item.type?(p(),d(D,{key:0,color:"success"},{default:t(()=>[_(I(e.item.type),1)]),_:2},1024)):v("",!0)]),actions:t(e=>[n(N,{icon:"",size:"x-small",color:"default",variant:"text",onClick:q=>w(e.item.id)},{default:t(()=>[n(A,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),n($,{onFetchEnrols:E,appealEnrolDetails:o(m),coreInspections:o(k),isInfoDrawerOpened:o(a),"onUpdate:isInfoDrawerOpened":s[0]||(s[0]=e=>B(a)?a.value=e:null)},null,8,["appealEnrolDetails","coreInspections","isInfoDrawerOpened"])]))}};export{se as default};