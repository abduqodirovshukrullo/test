import{k as p,aE as ue,o as F,b as D,w as l,m as O,p as e,A as L,q as o,b4 as q,b1 as E,bh as P,b7 as w,bj as M,c as R,F as Q,a as j,z as U,aP as I,bc as G,a$ as se}from"./index.68ab1696.js";import{_ as ne}from"./DataTable.529efa2b.js";import{u as N}from"./coreLibraryTags.c14f04c3.js";import{r as T}from"./validators.03da0656.js";import{V as H}from"./VSpacer.b67c60b4.js";import{V as g}from"./VBtn.e44a7ff0.js";import{V as J}from"./VForm.12cad806.js";import{V,a as n}from"./VRow.b4ec55e0.js";import{V as C}from"./VTextField.2a6d4579.js";import{V as K,a as W}from"./VRadioGroup.1ea92d98.js";import{V as X}from"./VSwitch.66e25904.js";import{V as Y}from"./VNavigationDrawer.d21b7d26.js";import{_ as de}from"./Confirmer.a21947e5.js";import{V as B}from"./VChip.685dc12f.js";import"./VDivider.db684b17.js";import"./axios.3a2e37fd.js";import"./form.2a7f55dd.js";import"./index.58b926c8.js";import"./VInput.373f1fc9.js";import"./VSelectionControl.703dbd90.js";import"./ssrBoot.786f9135.js";import"./VDialog.d10e315b.js";import"./dialog-transition.1e949d43.js";const ie={class:"d-flex align-center pa-6 pb-1"},me=O("h6",{class:"text-h6"}," Add Core Library Tag ",-1),pe={__name:"FormCreate",props:{isCreateFormOpened:{default:null,required:!0},coreTag:{default:{id:null}}},emits:["update:isCreateFormOpened","formSubmitted"],setup($,{emit:f}){const u=$,v=p(!1),_=p(null),b=[{id:1,title:"employer"},{id:2,title:"employee"}],a=ue({title_uz:"",title_ru:"",title_en:"",type_of_use:"employer",status:1,order:null}),y=()=>{f("update:isCreateFormOpened",!1),I(()=>{z()})},z=()=>{var r,t;(r=_.value)==null||r.reset(),a.title_uz="",a.title_ru="",a.title_en="",a.type_of_use="employer",a.order=null,(t=_.value)==null||t.resetValidation()},S=()=>{var r;(r=_.value)==null||r.validate().then(({valid:t})=>{if(t){const s={title_uz:a.title_uz,title_ru:a.title_ru,title_en:a.title_en,type_of_use:a.type_of_use,status:a.status,order:a.order};f("formSubmitted",s)}})},i=r=>{f("update:isCreateFormOpened",r)};return(r,t)=>(F(),D(Y,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":u.isCreateFormOpened,"onUpdate:modelValue":i},{default:l(()=>[O("div",ie,[me,e(H),e(g,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:y},{default:l(()=>[e(L,{size:"18",icon:"tabler-x"})]),_:1})]),e(o(q),{options:{wheelPropagation:!1}},{default:l(()=>[e(E,{flat:""},{default:l(()=>[e(P,null,{default:l(()=>[e(J,{ref_key:"refcoreTagCreateForm",ref:_,modelValue:o(v),"onUpdate:modelValue":t[6]||(t[6]=s=>w(v)?v.value=s:null),onSubmit:M(S,["prevent"])},{default:l(()=>[e(V,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:o(a).title_uz,"onUpdate:modelValue":t[0]||(t[0]=s=>o(a).title_uz=s),rules:[o(T)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:o(a).title_ru,"onUpdate:modelValue":t[1]||(t[1]=s=>o(a).title_ru=s),rules:[o(T)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:o(a).title_en,"onUpdate:modelValue":t[2]||(t[2]=s=>o(a).title_en=s),rules:[o(T)],label:"Title En"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:l(()=>[e(n,{cols:"6",md:"6"},{default:l(()=>[e(C,{modelValue:o(a).order,"onUpdate:modelValue":t[3]||(t[3]=s=>o(a).order=s),type:"number",rules:[o(T)],label:"Order"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"6",md:"6"},{default:l(()=>[e(K,{modelValue:o(a).type_of_use,"onUpdate:modelValue":t[4]||(t[4]=s=>o(a).type_of_use=s),inline:""},{default:l(()=>[O("div",null,[(F(),R(Q,null,j(b,s=>e(W,{key:s.id,label:s.title,value:s.title.toLocaleLowerCase()},null,8,["label","value"])),64))])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:l(()=>[e(n,{cols:"6",md:"6"},{default:l(()=>[e(X,{modelValue:o(a).status,"onUpdate:modelValue":t[5]||(t[5]=s=>o(a).status=s),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(g,{type:"submit",class:"me-3",color:"success"},{default:l(()=>[U(" Submit ")]),_:1}),e(g,{type:"reset",variant:"tonal",color:"error",onClick:y},{default:l(()=>[U(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},ce={class:"d-flex align-center pa-6 pb-1"},fe=O("h6",{class:"text-h6"}," Update Core Library Tag ",-1),_e={__name:"FormUpdate",props:{isUpdateFormOpened:{default:null,required:!0},coreTag:{type:Object}},emits:["update:isUpdateFormOpened","formSubmitted"],setup($,{emit:f}){const u=$;G(N()),p([{id:null,title:null}]);const v=[{id:1,title:"employer"},{id:2,title:"employee"}];p(null);const _=p(!1),b=p(null);p({filter:{parent_id:null}});const a=()=>{f("update:isUpdateFormOpened",!1),I(()=>{y()})},y=()=>{var i,r;(i=b.value)==null||i.reset(),u.coreTag.title_uz="",u.coreTag.title_ru="",u.coreTag.title_en="",u.coreTag.type_of_use="employer",u.coreTag.order=null,(r=b.value)==null||r.resetValidation()},z=()=>{var i;(i=b.value)==null||i.validate().then(({valid:r})=>{r&&(f("formSubmitted",{title_uz:u.coreTag.title_uz,title_ru:u.coreTag.title_ru,title_en:u.coreTag.title_en,type_of_use:u.coreTag.type_of_use,status:u.coreTag.status,order:u.coreTag.order}),f("update:isUpdateFormOpened",!1),I(()=>{y()}))})},S=i=>{f("update:isUpdateFormOpened",i)};return(i,r)=>(F(),D(Y,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":u.isUpdateFormOpened,"onUpdate:modelValue":S},{default:l(()=>[O("div",ce,[fe,e(H),e(g,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:a},{default:l(()=>[e(L,{size:"18",icon:"tabler-x"})]),_:1})]),e(o(q),{options:{wheelPropagation:!1}},{default:l(()=>[e(E,{flat:""},{default:l(()=>[e(P,null,{default:l(()=>[e(J,{ref_key:"refQuestionCreateForm",ref:b,modelValue:o(_),"onUpdate:modelValue":r[6]||(r[6]=t=>w(_)?_.value=t:null),onSubmit:M(z,["prevent"])},{default:l(()=>[e(V,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:u.coreTag.title_uz,"onUpdate:modelValue":r[0]||(r[0]=t=>u.coreTag.title_uz=t),rules:[o(T)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:u.coreTag.title_ru,"onUpdate:modelValue":r[1]||(r[1]=t=>u.coreTag.title_ru=t),rules:[o(T)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(C,{modelValue:u.coreTag.title_en,"onUpdate:modelValue":r[2]||(r[2]=t=>u.coreTag.title_en=t),rules:[o(T)],label:"Title En"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:l(()=>[e(n,{cols:"6",md:"6"},{default:l(()=>[e(C,{modelValue:u.coreTag.order,"onUpdate:modelValue":r[3]||(r[3]=t=>u.coreTag.order=t),rules:[o(T)],label:"Order"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"6",md:"6"},{default:l(()=>[e(K,{modelValue:u.coreTag.type_of_use,"onUpdate:modelValue":r[4]||(r[4]=t=>u.coreTag.type_of_use=t),inline:""},{default:l(()=>[O("div",null,[(F(),R(Q,null,j(v,t=>e(W,{key:t.id,label:t.title,value:t.title.toLocaleLowerCase()},null,8,["label","value"])),64))])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:l(()=>[e(n,{cols:"6",md:"6"},{default:l(()=>[e(X,{modelValue:u.coreTag.status,"onUpdate:modelValue":r[5]||(r[5]=t=>u.coreTag.status=t),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(g,{type:"submit",class:"me-3",color:"success"},{default:l(()=>[U(" Submit ")]),_:1}),e(g,{type:"reset",variant:"tonal",color:"error",onClick:a},{default:l(()=>[U(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},qe={__name:"list",setup($){const{coreTags:f,coreTag:u,loading:v,error:_,pagination:b}=G(N()),{fetchCoreTags:a,addCoreTag:y,fetchCoreTag:z,updateCoreTag:S,deleteCoreTag:i}=N(),r={title:"Core Library Tags",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},t=p(!1),s=p(!1),k=p(!1),A=p(null),x=p({filter:{parent_id:null}});a(x.value);const Z=()=>{a(x.value)},h=()=>{i(A.value).then(d=>{k.value=!1,a(x.value)})},ee=d=>{k.value=!0,A.value=d,console.log(d)},le=d=>{t.value=d.isCreateFormOpened},te=d=>{z(d.coreTagId).then(c=>{s.value=d.isUpdateFormOpened})},ae=d=>{y(d).then(c=>{a(x.value)})},oe=d=>{S(u.value.id,d).then(c=>{a(x.value)})};return(d,c)=>(F(),R("section",null,[e(ne,{onPageChanged:Z,body:{data:o(f).data,pagination:o(b)},loading:o(v),tableData:r},{pageActions:l(()=>[e(V,null,{default:l(()=>[e(n,{cols:"2",offset:"md-10"},{default:l(()=>[e(g,{"prepend-icon":"tabler-plus",onClick:c[0]||(c[0]=m=>le({isCreateFormOpened:!0}))},{default:l(()=>[U(" Create ")]),_:1})]),_:1})]),_:1})]),status:l(m=>[m.item.status===1?(F(),D(B,{key:0,color:"success"},{default:l(()=>[U(" Active ")]),_:1})):m.item.status===0?(F(),D(B,{key:1,color:"error"},{default:l(()=>[U(" Inactive ")]),_:1})):se("",!0)]),actions:l(m=>[e(g,{onClick:re=>te({isUpdateFormOpened:!0,coreTagId:m.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[e(L,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(g,{icon:"",onClick:re=>ee(m.item.id),size:"x-small",color:"default",variant:"text"},{default:l(()=>[e(L,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),e(pe,{onFormSubmitted:ae,isCreateFormOpened:o(t),"onUpdate:isCreateFormOpened":c[1]||(c[1]=m=>w(t)?t.value=m:null)},null,8,["isCreateFormOpened"]),e(_e,{onFormSubmitted:oe,coreTag:o(u),isUpdateFormOpened:o(s),"onUpdate:isUpdateFormOpened":c[2]||(c[2]=m=>w(s)?s.value=m:null)},null,8,["coreTag","isUpdateFormOpened"]),e(de,{isOpen:o(k),"onUpdate:isOpen":c[3]||(c[3]=m=>w(k)?k.value=m:null),loading:o(v),onAccepted:h},null,8,["isOpen","loading"])]))}};export{qe as default};
