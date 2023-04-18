import{bb as j,bc as _,k as d,o as v,c as G,p as g,w as m,z as h,x as I,b as U,a$ as H,q as i,b7 as b}from"./index.ff6dd18a.js";import{_ as J}from"./DataTable.8386c370.js";import{a as u}from"./axios.544a54a6.js";import{u as w,a as x}from"./cities.09722f73.js";import{_ as K,a as L}from"./FormUpdate.3cfcd837.js";import{_ as M}from"./Confirmer.da69fa93.js";import{V as P}from"./VChip.34758a01.js";import"./VRow.6a3eb9e0.js";import"./VDivider.709f44be.js";import"./VBtn.05c82630.js";import"./VSelect.cdb6d5f2.js";import"./VTextField.afb07e72.js";import"./index.f6fb5e9e.js";import"./VInput.31ae3301.js";import"./form.03636cd0.js";import"./VList.12bf040d.js";import"./dialog-transition.2a00a3c9.js";import"./VMenu.901c1049.js";import"./VCheckboxBtn.3329c02d.js";import"./VSelectionControl.82c875c1.js";import"./validators.03da0656.js";import"./VSpacer.9cd97db6.js";import"./VForm.5de4a92d.js";import"./VSwitch.37089247.js";import"./VNavigationDrawer.64c65f66.js";import"./ssrBoot.051a63f0.js";import"./coreInspectionInfos.e5967e88.js";import"./VDialog.ab1b1692.js";const R=j("UserCompanyStore",{state:()=>({pagination:{meta:{}},filter:{},coreCompanies:[],coreCompany:{id:null,tin:"",type:"",region_id:null,region_name:"",city_id:null,city_name:"",lat:"",long:"",order:null,status:null,info:{}},loading:!1,error:""}),actions:{fetchCoreCompanies(t){return this.loading=!0,t.getAll?t={...t}:t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((a,n)=>{u.get("/dashboard/user/company",{params:t}).then(e=>{this.coreCompanies=e.data.result,t.getAll||(this.pagination.meta=e.data.result.meta),a(e)}).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},fetchCoreCompany(t){return new Promise((a,n)=>{u.get(`/dashboard/core/company/${t}`).then(e=>{this.coreCompany=e.data.result,a(e.data.result)}).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},addCoreCompany(t){return this.loading=!0,new Promise((a,n)=>{u.post("/dashboard/core/company",t).then(e=>a(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},updateCoreCompany(t,a){return this.loading=!0,new Promise((n,e)=>{u.put("/dashboard/core/company/"+t,a).then(p=>n(p)).catch(p=>{this.error=p,e(p)}).finally(()=>{this.loading=!1})})},deleteCoreCompany(t){return this.loading=!0,new Promise((a,n)=>{u.delete("/dashboard/core/company/"+t).then(e=>a(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})}}}),Ie={__name:"list",setup(t){const{coreCompanies:a,coreCompany:n,loading:e,error:p,pagination:k}=_(R()),{fetchCoreCompanies:c,addCoreCompany:z,fetchCoreCompany:W,updateCoreCompany:$,deleteCoreCompany:A}=R(),{regions:F}=_(w()),{fetchRegions:V}=w(),{cities:O}=_(x()),{fetchCities:D}=x(),B={title:"Core Inspection Infos",headers:["id","name_uz","region_name","city_name","phone","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},C=d(!1),y=d(!1),f=d(!1),N=d(null),s=d({filter:{}});c(s.value),V();const T=()=>{c(s.value)},q=()=>{A(N.value).then(l=>{f.value=!1,c(s.value)})},E=l=>{z(l).then(r=>{c(s.value)})},Q=l=>{$(n.value.id,l).then(r=>{c(s.value)})},S=l=>{s.value.filter.region_soato_id=l,D(s.value)};return(l,r)=>(v(),G("section",null,[g(J,{onPageChanged:T,body:{data:i(a).data,pagination:i(k)},loading:i(e),tableData:B},{name_uz:m(o=>[h(I(o.item.info.name_uz),1)]),phone:m(o=>[h(I(o.item.info.phone),1)]),status:m(o=>[o.item.status===1?(v(),U(P,{key:0,color:"success"},{default:m(()=>[h(" Active ")]),_:1})):o.item.info.status===0?(v(),U(P,{key:1,color:"error"},{default:m(()=>[h(" Inactive ")]),_:1})):H("",!0)]),actions:m(o=>[]),_:1},8,["body","loading"]),g(K,{onFormSubmitted:E,onChangeRegion:S,regions:i(F),cities:i(O),isCreateFormOpened:i(C),"onUpdate:isCreateFormOpened":r[0]||(r[0]=o=>b(C)?C.value=o:null)},null,8,["regions","cities","isCreateFormOpened"]),g(L,{onFormSubmitted:Q,coreInfo:i(n),onChangeRegion:S,regions:i(F),cities:i(O),isUpdateFormOpened:i(y),"onUpdate:isUpdateFormOpened":r[1]||(r[1]=o=>b(y)?y.value=o:null)},null,8,["coreInfo","regions","cities","isUpdateFormOpened"]),g(M,{isOpen:i(f),"onUpdate:isOpen":r[2]||(r[2]=o=>b(f)?f.value=o:null),loading:i(e),onAccepted:q},null,8,["isOpen","loading"])]))}};export{Ie as default};