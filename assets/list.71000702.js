import{bb as re,k as b,aE as de,o as h,b as T,w as l,m as A,p as e,A as $,q as a,b4 as M,b1 as H,bh as Q,b7 as z,bj as G,z as O,aP as P,bH as J,bc as N,c as se,a$ as me}from"./index.68ab1696.js";import{_ as pe}from"./DataTable.529efa2b.js";import{a as k}from"./axios.3a2e37fd.js";import{u as j}from"./libCategoryItem.4204f894.js";import{r as y}from"./validators.03da0656.js";import{V as K}from"./VSpacer.b67c60b4.js";import{V as U}from"./VBtn.e44a7ff0.js";import{V as W}from"./VForm.12cad806.js";import{V as C,a as s}from"./VRow.b4ec55e0.js";import{V as F}from"./VTextField.2a6d4579.js";import{V as R}from"./VFileInput.25e60673.js";import{V as X}from"./VSelect.c51546ad.js";import{V as Y}from"./VSwitch.66e25904.js";import{V as Z}from"./VNavigationDrawer.d21b7d26.js";import{_ as Ve}from"./Confirmer.a21947e5.js";import{V as q}from"./VChip.685dc12f.js";import"./VDivider.db684b17.js";import"./form.2a7f55dd.js";import"./index.58b926c8.js";import"./VInput.373f1fc9.js";import"./VList.b0e7618d.js";import"./dialog-transition.1e949d43.js";import"./VMenu.e6aa9dee.js";import"./VCheckboxBtn.f5ed4841.js";import"./VSelectionControl.703dbd90.js";import"./ssrBoot.786f9135.js";import"./VDialog.d10e315b.js";const E=re("LibraryCategoryItemValue",{state:()=>({pagination:{meta:{}},filter:{},libValues:[],libValue:{title_uz:"",title_en:"",title_ru:"",content_uz:"",content_en:"",content_ru:"",image_url:"",document_url:"",lib_category_item_id:"",status:"",order:""},loading:!1,error:""}),actions:{fetchLibValues(V){return this.loading=!0,V={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...V},new Promise((t,d)=>{k.get("/dashboard/library/lib-category-item-value",{params:V}).then(m=>{this.libValues=m.data.result,this.pagination.meta=m.data.result.meta,t(m)}).catch(m=>{this.error=m,d(m)}).finally(()=>{this.loading=!1})})},fetchLibValue(V){return new Promise((p,t)=>{k.get(`/dashboard/library/lib-category-item-value/${V}`).then(d=>{this.libValue=d.data.result,p(d.data.result)}).catch(d=>{this.error=d,t(d)}).finally(()=>{this.loading=!1})})},addLibValue(V){return this.loading=!0,new Promise((p,t)=>{k.post("/dashboard/library/lib-category-item-value",V).then(d=>p(d)).catch(d=>{this.error=d,t(d)}).finally(()=>{this.loading=!1})})},updateLibValue(V,p){return this.loading=!0,new Promise((t,d)=>{k.post("/dashboard/library/lib-category-item-value/"+V+"?_method=PUT",p).then(m=>t(m)).catch(m=>{this.error=m,d(m)}).finally(()=>{this.loading=!1})})},deleteLibValue(V){return this.loading=!0,new Promise((p,t)=>{k.delete("/dashboard/library/lib-category-item-value/"+V).then(d=>p(d)).catch(d=>{this.error=d,t(d)}).finally(()=>{this.loading=!1})})}}}),fe={class:"d-flex align-center pa-6 pb-1"},be=A("h6",{class:"text-h6"}," Add Library Category Item Value ",-1),_e={__name:"FormCreate",props:{isCreateFormOpened:{default:null,required:!0},libValue:{default:{id:null}},libItems:{type:Object}},emits:["update:isCreateFormOpened","formSubmitted"],setup(V,{emit:p}){const t=V,d=b(!1),m=b(null),o=de({title_uz:"",title_en:"",title_ru:"",content_uz:"",content_en:"",content_ru:"",image_file:[],document_file:[],lib_category_item_id:"",status:"",order:""}),f=()=>{p("update:isCreateFormOpened",!1),P(()=>{I()})},I=()=>{var _,i;(_=m.value)==null||_.reset(),o.title_uz="",o.title_en="",o.title_ru="",o.content_uz="",o.content_en="",o.content_ru="",o.image_file=[],o.document_file=[],o.lib_category_item_id="",o.status="",o.order="",(i=m.value)==null||i.resetValidation()},S=()=>{var _;(_=m.value)==null||_.validate().then(({valid:i})=>{if(i){let n=new FormData;for(const u in o)u==="image_file"||u==="document_file"?n.append(u,o[u][0]):n.append(u,o[u]);p("formSubmitted",n),p("update:isCreateFormOpened",!1),P(()=>{I()})}})},x=_=>{p("update:isCreateFormOpened",_)};return(_,i)=>{const n=J;return h(),T(Z,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":t.isCreateFormOpened,"onUpdate:modelValue":x},{default:l(()=>[A("div",fe,[be,e(K),e(U,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:f},{default:l(()=>[e($,{size:"18",icon:"tabler-x"})]),_:1})]),e(a(M),{options:{wheelPropagation:!1}},{default:l(()=>[e(H,{flat:""},{default:l(()=>[e(Q,null,{default:l(()=>[e(W,{ref_key:"refLibraryCategoryItemValueCreateForm",ref:m,modelValue:a(d),"onUpdate:modelValue":i[11]||(i[11]=u=>z(d)?d.value=u:null),onSubmit:G(S,["prevent"])},{default:l(()=>[e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:a(o).title_uz,"onUpdate:modelValue":i[0]||(i[0]=u=>a(o).title_uz=u),rules:[a(y)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:a(o).title_ru,"onUpdate:modelValue":i[1]||(i[1]=u=>a(o).title_ru=u),rules:[a(y)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:a(o).title_en,"onUpdate:modelValue":i[2]||(i[2]=u=>a(o).title_en=u),rules:[a(y)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(n,{label:"Content uz",modelValue:a(o).content_uz,"onUpdate:modelValue":i[3]||(i[3]=u=>a(o).content_uz=u)},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{label:"Content Ru",modelValue:a(o).content_ru,"onUpdate:modelValue":i[4]||(i[4]=u=>a(o).content_ru=u)},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{label:"Content En",modelValue:a(o).content_en,"onUpdate:modelValue":i[5]||(i[5]=u=>a(o).content_en=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(C,{class:"mt-4"},{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(R,{label:"Image",modelValue:a(o).image_file,"onUpdate:modelValue":i[6]||(i[6]=u=>a(o).image_file=u),rules:[a(y)]},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(R,{label:"Document",modelValue:a(o).document_file,"onUpdate:modelValue":i[7]||(i[7]=u=>a(o).document_file=u),rules:[a(y)]},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(X,{modelValue:a(o).lib_category_item_id,"onUpdate:modelValue":i[8]||(i[8]=u=>a(o).lib_category_item_id=u),items:t.libItems.data,"item-title":"title_uz","item-value":"id",label:"Library Category Item Id"},null,8,["modelValue","items"])]),_:1}),e(s,{cols:"6",md:"6"},{default:l(()=>[e(F,{modelValue:a(o).order,"onUpdate:modelValue":i[9]||(i[9]=u=>a(o).order=u),rules:[a(y)],label:"Order",type:"number"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"6",md:"6"},{default:l(()=>[e(Y,{modelValue:a(o).status,"onUpdate:modelValue":i[10]||(i[10]=u=>a(o).status=u),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(U,{type:"submit",class:"me-3",color:"success"},{default:l(()=>[O(" Submit ")]),_:1}),e(U,{variant:"tonal",color:"error",onClick:f},{default:l(()=>[O(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},ce={class:"d-flex align-center pa-6 pb-1"},ge=A("h6",{class:"text-h6"}," Update Core Inspections Tag ",-1),ve={__name:"FormUpdate",props:{isUpdateFormOpened:{default:null,required:!0},libValue:{type:Object},libItems:{type:Object}},emits:["update:isUpdateFormOpened","formSubmitted"],setup(V,{emit:p}){const t=V;N(E()),b([{id:null,title:null}]),b(null);const d=b(!1),m=b(null);b({filter:{parent_id:null}});const o=b([]),f=b([]),I=()=>{p("update:isUpdateFormOpened",!1),P(()=>{S()})},S=()=>{var i,n;(i=m.value)==null||i.reset(),t.libValue.title_uz="",t.libValue.title_en="",t.libValue.title_ru="",t.libValue.content_uz="",t.libValue.content_en="",t.libValue.content_ru="",t.libValue.image_url="",t.libValue.document_url="",t.libValue.lib_category_item_id="",t.libValue.status="",t.libValue.order="",o.value=[],f.value=[],(n=m.value)==null||n.resetValidation()},x=()=>{var i;(i=m.value)==null||i.validate().then(({valid:n})=>{if(n){let u=new FormData;for(const r in t.libValue)r==="image_url"?o.value.length>0?u.append("image_file",o.value[0]):u.append("image_file",t.libValue.image_url):r==="document_url"?f.value.length>0?u.append("document_file",f.value[0]):u.append("document_file",t.libValue.document_url):u.append(r,t.libValue[r]);p("formSubmitted",u),p("update:isUpdateFormOpened",!1),P(()=>{S()})}})},_=i=>{p("update:isUpdateFormOpened",i)};return(i,n)=>{const u=J;return h(),T(Z,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":t.isUpdateFormOpened,"onUpdate:modelValue":_},{default:l(()=>[A("div",ce,[ge,e(K),e(U,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:I},{default:l(()=>[e($,{size:"18",icon:"tabler-x"})]),_:1})]),e(a(M),{options:{wheelPropagation:!1}},{default:l(()=>[e(H,{flat:""},{default:l(()=>[e(Q,null,{default:l(()=>[e(W,{ref_key:"refLibraryCategoryItemValueCreateForm",ref:m,modelValue:a(d),"onUpdate:modelValue":n[11]||(n[11]=r=>z(d)?d.value=r:null),onSubmit:G(x,["prevent"])},{default:l(()=>[e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:t.libValue.title_uz,"onUpdate:modelValue":n[0]||(n[0]=r=>t.libValue.title_uz=r),rules:[a(y)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:t.libValue.title_ru,"onUpdate:modelValue":n[1]||(n[1]=r=>t.libValue.title_ru=r),rules:[a(y)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(F,{modelValue:t.libValue.title_en,"onUpdate:modelValue":n[2]||(n[2]=r=>t.libValue.title_en=r),rules:[a(y)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(u,{label:"Content uz",modelValue:t.libValue.content_uz,"onUpdate:modelValue":n[3]||(n[3]=r=>t.libValue.content_uz=r)},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(u,{label:"Content Ru",modelValue:t.libValue.content_ru,"onUpdate:modelValue":n[4]||(n[4]=r=>t.libValue.content_ru=r)},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(u,{label:"Content En",modelValue:t.libValue.content_en,"onUpdate:modelValue":n[5]||(n[5]=r=>t.libValue.content_en=r)},null,8,["modelValue"])]),_:1})]),_:1}),e(C,{class:"mt-4"},{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(R,{label:"Image",modelValue:a(o),"onUpdate:modelValue":n[6]||(n[6]=r=>z(o)?o.value=r:null)},null,8,["modelValue"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(R,{label:"Document",modelValue:a(f),"onUpdate:modelValue":n[7]||(n[7]=r=>z(f)?f.value=r:null)},null,8,["modelValue"])]),_:1}),e(s,{cols:"6"},{default:l(()=>[e(X,{modelValue:t.libValue.lib_category_item_id,"onUpdate:modelValue":n[8]||(n[8]=r=>t.libValue.lib_category_item_id=r),items:t.libItems.data,"item-value":"id","item-title":"title_uz",label:"Library Category Item Id"},null,8,["modelValue","items"])]),_:1}),e(s,{cols:"6",md:"6"},{default:l(()=>[e(F,{modelValue:t.libValue.order,"onUpdate:modelValue":n[9]||(n[9]=r=>t.libValue.order=r),rules:[a(y)],label:"Order",type:"number"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"6",md:"6"},{default:l(()=>[e(Y,{modelValue:t.libValue.status,"onUpdate:modelValue":n[10]||(n[10]=r=>t.libValue.status=r),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(U,{type:"submit",class:"me-3",color:"success"},{default:l(()=>[O(" Submit ")]),_:1}),e(U,{variant:"tonal",color:"error",onClick:I},{default:l(()=>[O(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},Ge={__name:"list",setup(V){const{libValues:p,libValue:t,loading:d,error:m,pagination:o}=N(E()),{fetchLibValues:f,addLibValue:I,fetchLibValue:S,updateLibValue:x,deleteLibValue:_}=E(),{libItems:i}=N(j()),{fetchLibItems:n}=j(),u={title:"Library Category Item Value",headers:["id","title_uz","title_en","title_ru","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},r=b(!1),D=b(!1),L=b(!1),B=b(null),w=b({filter:{parent_id:null}});f(w.value),n({getAll:!0});const ee=()=>{f(w.value)},le=()=>{_(B.value).then(c=>{L.value=!1,f(w.value)})},te=c=>{L.value=!0,B.value=c},ae=c=>{r.value=c.isCreateFormOpened},oe=c=>{S(c.libValueId).then(v=>{D.value=c.isUpdateFormOpened})},ue=c=>{I(c).then(v=>{f(w.value)})},ie=c=>{x(t.value.id,c).then(v=>{f(w.value)})};return(c,v)=>(h(),se("section",null,[e(pe,{onPageChanged:ee,body:{data:a(p).data,pagination:a(o)},loading:a(d),tableData:u},{pageActions:l(()=>[e(C,null,{default:l(()=>[e(s,{cols:"2",offset:"md-10"},{default:l(()=>[e(U,{"prepend-icon":"tabler-plus",onClick:v[0]||(v[0]=g=>ae({isCreateFormOpened:!0}))},{default:l(()=>[O(" Create ")]),_:1})]),_:1})]),_:1})]),status:l(g=>[g.item.status===1?(h(),T(q,{key:0,color:"success"},{default:l(()=>[O(" Active ")]),_:1})):g.item.status===0?(h(),T(q,{key:1,color:"error"},{default:l(()=>[O(" Inactive ")]),_:1})):me("",!0)]),actions:l(g=>[e(U,{onClick:ne=>oe({isUpdateFormOpened:!0,libValueId:g.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[e($,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(U,{icon:"",onClick:ne=>te(g.item.id),size:"x-small",color:"default",variant:"text"},{default:l(()=>[e($,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),e(_e,{onFormSubmitted:ue,isCreateFormOpened:a(r),"onUpdate:isCreateFormOpened":v[1]||(v[1]=g=>z(r)?r.value=g:null),libItems:a(i)},null,8,["isCreateFormOpened","libItems"]),e(ve,{onFormSubmitted:ie,libValue:a(t),libItems:a(i),isUpdateFormOpened:a(D),"onUpdate:isUpdateFormOpened":v[2]||(v[2]=g=>z(D)?D.value=g:null)},null,8,["libValue","libItems","isUpdateFormOpened"]),e(Ve,{isOpen:a(L),"onUpdate:isOpen":v[3]||(v[3]=g=>z(L)?L.value=g:null),loading:a(d),onAccepted:le},null,8,["isOpen","loading"])]))}};export{Ge as default};
