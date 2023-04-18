import{bc as w,k as y,aE as Q,D as q,o as v,b as R,w as a,m as j,p as e,A as M,q as t,b4 as Z,b1 as ee,bh as te,b7 as P,bj as ae,a$ as G,z as S,aP as E,c as K,x as fe}from"./main.28eac655.js";import{_ as _e}from"./DataTable.c4077183.js";import{u as L}from"./systemUserStore.b7589e6f.js";import{u as $}from"./coreInspectionInfos.44c150b6.js";import{V as U,u as W,a as X}from"./cities.3bb597d1.js";import{r as c}from"./validators.03da0656.js";import{V as le}from"./VSpacer.24baf8c8.js";import{V as b}from"./VBtn.c12fdd64.js";import{V as oe}from"./VForm.faab6af8.js";import{V,a as i}from"./VRow.f25df8b8.js";import{V as D}from"./VTextField.b8935754.js";import{V as se}from"./VNavigationDrawer.e49588b6.js";import{_ as Ve}from"./Confirmer.1430bfc4.js";import{V as Y}from"./VChip.15e3c72f.js";import"./VDivider.4e5147ee.js";import"./axios.8204d459.js";import"./VSelect.e2438bf0.js";import"./VList.2e46a22e.js";import"./index.0b83b8d8.js";import"./dialog-transition.fc2767b3.js";import"./VMenu.cc85e129.js";import"./VCheckboxBtn.f5856159.js";import"./VSelectionControl.08ac7448.js";import"./VInput.a1b5a69b.js";import"./form.b198e9eb.js";import"./ssrBoot.06a3cbcc.js";import"./VDialog.6706085a.js";const ge={class:"d-flex align-center pa-6 pb-1"},ye=j("h6",{class:"text-h6"}," Add User ",-1),be={__name:"FormCreate",props:{isCreateFormOpened:{default:null,required:!0},regions:{type:Array},cities:{type:Array}},emits:["update:isCreateFormOpened","formSubmitted","change-region"],setup(T,{emit:f}){const o=T,{fetchCoreInsInfos:C}=$(),{coreInsInfos:k}=w($()),g=y(!1),d=y(null),r=Q({pin:null,role_id:"inspector",company_id:null,order:null,user_info:{first_name:"",sur_name:"",patronymic:""}}),u=Q({region_id:null,city_id:null}),I=["inspector"],F=()=>{f("update:isCreateFormOpened",!1),E(()=>{x()})},x=()=>{var n,l;(n=d.value)==null||n.reset(),r.pin=null,r.role_id="inspector",r.company_id=null,r.first_name="",r.sur_name="",r.patronymic="",r.order=null,(l=d.value)==null||l.resetValidation()},z=()=>{var n;(n=d.value)==null||n.validate().then(({valid:l})=>{l&&(f("formSubmitted",r),f("update:isCreateFormOpened",!1),E(()=>{x()}))})},A=n=>{f("update:isCreateFormOpened",n)};return q(()=>u.region_id,()=>{u.region_id&&f("change-region",u.region_id),u.city_id="",r.company_id=null}),q(()=>u.city_id,()=>{u.region_id&&u.city_id&&C({filter:u}),r.company_id=null}),(n,l)=>(v(),R(se,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":o.isCreateFormOpened,"onUpdate:modelValue":A},{default:a(()=>[j("div",ge,[ye,e(le),e(b,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:F},{default:a(()=>[e(M,{size:"18",icon:"tabler-x"})]),_:1})]),e(t(Z),{options:{wheelPropagation:!1}},{default:a(()=>[e(ee,{flat:""},{default:a(()=>[e(te,null,{default:a(()=>[e(oe,{ref_key:"refUserCreateFormTag",ref:d,modelValue:t(g),"onUpdate:modelValue":l[8]||(l[8]=s=>P(g)?g.value=s:null),onSubmit:ae(z,["prevent"])},{default:a(()=>[e(V,null,{default:a(()=>[e(i,{cols:"4"},{default:a(()=>[e(U,{clearable:"",modelValue:t(u).region_id,"onUpdate:modelValue":l[0]||(l[0]=s=>t(u).region_id=s),items:o.regions,"item-title":"name_uz","item-value":"soato_id",label:"Region",rules:[t(c)]},null,8,["modelValue","items","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[e(U,{clearable:"",disabled:!t(u).region_id,modelValue:t(u).city_id,"onUpdate:modelValue":l[1]||(l[1]=s=>t(u).city_id=s),items:o.cities,"item-title":"name_uz","item-value":"soato_id",label:"City",rules:[t(c)]},null,8,["disabled","modelValue","items","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[t(k).data?(v(),R(U,{key:0,clearable:"",disabled:!t(u).city_id,modelValue:t(r).company_id,"onUpdate:modelValue":l[2]||(l[2]=s=>t(r).company_id=s),items:t(k).data,"item-title":"info.name_uz","item-value":"id",label:"Company",rules:[t(c)]},null,8,["disabled","modelValue","items","rules"])):G("",!0)]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:a(()=>[e(i,{cols:"8",md:"8"},{default:a(()=>[e(D,{modelValue:t(r).pin,"onUpdate:modelValue":l[3]||(l[3]=s=>t(r).pin=s),type:"number",rules:[t(c)],maxlength:"14",label:"Pin"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[e(U,{modelValue:t(r).role_id,"onUpdate:modelValue":l[4]||(l[4]=s=>t(r).role_id=s),disabled:"",items:I,label:"Roles",rules:[t(c)]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:t(r).user_info.first_name,"onUpdate:modelValue":l[5]||(l[5]=s=>t(r).user_info.first_name=s),type:"text",rules:[t(c)],label:"First name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:t(r).user_info.sur_name,"onUpdate:modelValue":l[6]||(l[6]=s=>t(r).user_info.sur_name=s),type:"text",rules:[t(c)],maxlength:"14",label:"Sur name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:t(r).user_info.patronymic,"onUpdate:modelValue":l[7]||(l[7]=s=>t(r).user_info.patronymic=s),type:"text",rules:[t(c)],maxlength:"14",label:"Patronymic"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,{class:"mt-4"}),e(V,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(b,{type:"submit",class:"me-3",color:"success"},{default:a(()=>[S(" Submit ")]),_:1}),e(b,{type:"reset",variant:"tonal",color:"error",onClick:F},{default:a(()=>[S(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},ve={class:"d-flex align-center pa-6 pb-1"},Ue=j("h6",{class:"text-h6"}," Update User ",-1),De={__name:"FormUpdate",props:{isUpdateFormOpened:{default:null,required:!0},userData:{},regions:{type:Array},cities:{type:Array}},emits:["update:isUpdateFormOpened","formSubmitted","change-region"],setup(T,{emit:f}){const o=T,{fetchCoreInsInfos:C}=$(),{coreInsInfos:k}=w($()),g=y(!1),d=y(null),r=Q({region_id:o.userData.region_id,city_id:o.userData.city_id}),u=["inspector"],I="inspector",F=()=>{f("update:isUpdateFormOpened",!1),E(()=>{x()})},x=()=>{var n,l;(n=d.value)==null||n.reset(),o.userData.pin=null,o.userData.role_id="inspector",o.userData.company_id=null,o.userData.first_name="",o.userData.sur_name="",o.userData.patronymic="",o.userData.order=null,(l=d.value)==null||l.resetValidation()},z=()=>{var n;(n=d.value)==null||n.validate().then(({valid:l})=>{l&&(f("formSubmitted",o.userData),f("update:isUpdateFormOpened",!1),E(()=>{x()}))})},A=n=>{f("update:isUpdateFormOpened",n)};return q(()=>o.userData.region_id,()=>{o.userData.region_id?f("change-region",o.userData.region_id):(o.userData.city_id=null,o.userData.company_id=null)}),q(()=>o.userData.city_id,()=>{o.userData.region_id&&o.userData.city_id?C({filter:r}):o.userData.company_id=null}),(n,l)=>(v(),R(se,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":o.isUpdateFormOpened,"onUpdate:modelValue":A},{default:a(()=>[j("div",ve,[Ue,e(le),e(b,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:F},{default:a(()=>[e(M,{size:"18",icon:"tabler-x"})]),_:1})]),e(t(Z),{options:{wheelPropagation:!1}},{default:a(()=>[e(ee,{flat:""},{default:a(()=>[e(te,null,{default:a(()=>[e(oe,{ref_key:"refUserCreateFormTag",ref:d,modelValue:t(g),"onUpdate:modelValue":l[8]||(l[8]=s=>P(g)?g.value=s:null),onSubmit:ae(z,["prevent"])},{default:a(()=>[e(V,null,{default:a(()=>[e(i,{cols:"4"},{default:a(()=>[e(U,{clearable:"",modelValue:o.userData.region_id,"onUpdate:modelValue":l[0]||(l[0]=s=>o.userData.region_id=s),items:o.regions,"item-title":"name_uz","item-value":"soato_id",label:"Region",rules:[t(c)]},null,8,["modelValue","items","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[e(U,{clearable:"",disabled:!o.userData.region_id,modelValue:o.userData.city_id,"onUpdate:modelValue":l[1]||(l[1]=s=>o.userData.city_id=s),items:o.cities,"item-title":"name_uz","item-value":"soato_id",label:"City",rules:[t(c)]},null,8,["disabled","modelValue","items","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[t(k).data?(v(),R(U,{key:0,clearable:"",disabled:!o.userData.city_id,modelValue:o.userData.company_id,"onUpdate:modelValue":l[2]||(l[2]=s=>o.userData.company_id=s),items:t(k).data,"item-title":"info.name_uz","item-value":"id",label:"Company",rules:[t(c)]},null,8,["disabled","modelValue","items","rules"])):G("",!0)]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:a(()=>[e(i,{cols:"8",md:"8"},{default:a(()=>[e(D,{modelValue:o.userData.pin,"onUpdate:modelValue":l[3]||(l[3]=s=>o.userData.pin=s),type:"number",rules:[t(c)],maxlength:"14",label:"Pin"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:a(()=>[e(U,{modelValue:I,"onUpdate:modelValue":l[4]||(l[4]=s=>I=s),disabled:"",items:u,label:"Roles"})]),_:1})]),_:1}),e(V,{class:"mt-4"},{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:o.userData.user_info.first_name,"onUpdate:modelValue":l[5]||(l[5]=s=>o.userData.user_info.first_name=s),type:"text",rules:[t(c)],label:"First name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:o.userData.user_info.sur_name,"onUpdate:modelValue":l[6]||(l[6]=s=>o.userData.user_info.sur_name=s),type:"text",rules:[t(c)],maxlength:"14",label:"Sur name"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(D,{modelValue:o.userData.user_info.patronymic,"onUpdate:modelValue":l[7]||(l[7]=s=>o.userData.user_info.patronymic=s),type:"text",rules:[t(c)],maxlength:"14",label:"Patronymic"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,{class:"mt-4"}),e(V,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(b,{type:"submit",class:"me-3",color:"success"},{default:a(()=>[S(" Submit ")]),_:1}),e(b,{type:"reset",variant:"tonal",color:"error",onClick:F},{default:a(()=>[S(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},Ce={key:0},Xe={__name:"list",setup(T){const{users:f,user:o,loading:C,error:k,pagination:g}=w(L()),{fetchUsers:d,addUser:r,fetchUserShow:u,updateUser:I,deleteUsers:F}=L(),{coreInsInfos:x}=w($());$();const{regions:z}=w(W()),{fetchRegions:A}=W(),{cities:n}=w(X()),{fetchCities:l}=X(),s={title:"System Users",headers:["id","full_name","pin","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},N=y(!1),B=y(!1),h=y(!1),H=y(null),O=y({filter:{}});d(O.value).then(m=>{console.log(f)}),A();const re=()=>{d(O.value)},ne=()=>{F(H.value).then(m=>{h.value=!1,d(O.value)})},ie=m=>{h.value=!0,H.value=m},ue=m=>{N.value=m.isCreateFormOpened},de=m=>{u(m.userId).then(_=>{B.value=m.isUpdateFormOpened})},me=m=>{r(m).then(_=>{d(O.value)})},pe=m=>{I(o.value.id,m).then(_=>{d(O.value)})},J=m=>{O.value.filter.region_soato_id=m,l(O.value)};return(m,_)=>(v(),K("section",null,[e(_e,{onPageChanged:re,body:{data:t(f).data,pagination:t(g)},loading:t(C),tableData:s},{pageActions:a(()=>[e(V,null,{default:a(()=>[e(i,{cols:"2",offset:"md-10"},{default:a(()=>[e(b,{"prepend-icon":"tabler-plus",onClick:_[0]||(_[0]=p=>ue({isCreateFormOpened:!0}))},{default:a(()=>[S(" Create ")]),_:1})]),_:1})]),_:1})]),full_name:a(p=>[p.item.user_info?(v(),K("p",Ce,fe(p.item.user_info.first_name+" "+p.item.user_info.sur_name),1)):G("",!0)]),status:a(p=>[p.item.status===1?(v(),R(Y,{key:0,color:"success"},{default:a(()=>[S(" Active ")]),_:1})):(v(),R(Y,{key:1,color:"error"},{default:a(()=>[S(" Inactive ")]),_:1}))]),actions:a(p=>[e(b,{onClick:ce=>de({isUpdateFormOpened:!0,userId:p.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(M,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(b,{icon:"",onClick:ce=>ie(p.item.id),size:"x-small",color:"default",variant:"text"},{default:a(()=>[e(M,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),e(be,{onChangeRegion:J,regions:t(z),cities:t(n),onFormSubmitted:me,isCreateFormOpened:t(N),"onUpdate:isCreateFormOpened":_[1]||(_[1]=p=>P(N)?N.value=p:null),loading:t(C),inspections:t(x).data},null,8,["regions","cities","isCreateFormOpened","loading","inspections"]),e(De,{onChangeRegion:J,regions:t(z),cities:t(n),onFormSubmitted:pe,userData:t(o),isUpdateFormOpened:t(B),"onUpdate:isUpdateFormOpened":_[2]||(_[2]=p=>P(B)?B.value=p:null)},null,8,["regions","cities","userData","isUpdateFormOpened"]),e(Ve,{isOpen:t(h),"onUpdate:isOpen":_[3]||(_[3]=p=>P(h)?h.value=p:null),loading:t(C),onAccepted:ne},null,8,["isOpen","loading"])]))}};export{Xe as default};
