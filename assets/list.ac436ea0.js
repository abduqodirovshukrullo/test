import{k as f,aE as se,o as I,b as $,w as t,m as A,p as e,A as T,q as l,b4 as B,b1 as j,bh as H,b7 as Q,bj as G,z as x,aP as D,bH as J,bc as K,a$ as L,aF as ne,c as ie,bO as de}from"./index.ccf75e8b.js";import{_ as me}from"./DataTable.632e8001.js";import{u as E}from"./questionStore.b11cbb2f.js";import{r as F}from"./validators.03da0656.js";import{V as W}from"./VSpacer.3dae3a1a.js";import{V as v}from"./VBtn.51511430.js";import{V as X}from"./VForm.39e46bcf.js";import{V as b,a as i}from"./VRow.126a71fb.js";import{V as z}from"./VTextField.3149a27e.js";import{V as Y}from"./VSelect.2279726f.js";import{V as P}from"./VSwitch.655f8d6f.js";import{V as Z}from"./VNavigationDrawer.cd147b40.js";import{_ as pe}from"./Confirmer.3f389e76.js";import{u as _e}from"./categoryStore.9049dbff.js";import{V as M}from"./VChip.6d62dc6b.js";import"./VDivider.82c53423.js";import"./axios.6988005b.js";import"./form.66042bc2.js";import"./index.d79d6c26.js";import"./VInput.eb4ac968.js";import"./VList.195d91c9.js";import"./dialog-transition.bc738bac.js";import"./VMenu.55dc8cad.js";import"./VCheckboxBtn.36b303b3.js";import"./VSelectionControl.506d58f9.js";import"./ssrBoot.9c630877.js";import"./VDialog.8e32b53e.js";const fe={class:"d-flex align-center pa-6 pb-1"},ce=A("h6",{class:"text-h6"}," Add Question ",-1),Ve={__name:"FormCreate",props:{isCreateFormOpened:{default:null,required:!0},categoryId:{type:String,default:{}},categories:{type:Array}},emits:["update:isCreateFormOpened","formSubmitted"],setup(S,{emit:c}){const a=S,O=f(!1),q=f(null),o=se({title_uz:"",title_ru:"",title_en:"",prompt_uz:null,prompt_ru:null,prompt_en:null,is_multiple:0,question_type:"checkbox",category_id:parseInt(a.categoryId),status:1,order:null}),g=()=>{c("update:isCreateFormOpened",!1),D(()=>{y()})},y=()=>{var _,s;(_=q.value)==null||_.reset(),o.title_uz="",o.title_ru="",o.title_en="",o.prompt_uz=null,o.prompt_ru=null,o.prompt_en=null,o.order=null,(s=q.value)==null||s.resetValidation()},U=()=>{var _;(_=q.value)==null||_.validate().then(({valid:s})=>{if(s){const V={title_uz:o.title_uz,title_ru:o.title_ru,title_en:o.title_en,prompt_uz:o.prompt_uz,prompt_ru:o.prompt_ru,prompt_en:o.prompt_en,category_id:o.category_id,question_type:o.question_type,is_multiple:o.is_multiple,status:o.status,order:o.order};c("formSubmitted",V),c("update:isCreateFormOpened",!1),D(()=>{y()})}})},k=_=>{c("update:isCreateFormOpened",_)};return(_,s)=>{const V=J;return I(),$(Z,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":a.isCreateFormOpened,"onUpdate:modelValue":k},{default:t(()=>[A("div",fe,[ce,e(W),e(v,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:g},{default:t(()=>[e(T,{size:"18",icon:"tabler-x"})]),_:1})]),e(l(B),{options:{wheelPropagation:!1}},{default:t(()=>[e(j,{flat:""},{default:t(()=>[e(H,null,{default:t(()=>[e(X,{ref_key:"refquestionCreateForm",ref:q,modelValue:l(O),"onUpdate:modelValue":s[10]||(s[10]=u=>Q(O)?O.value=u:null),onSubmit:G(U,["prevent"])},{default:t(()=>[e(b,null,{default:t(()=>[e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:l(o).title_uz,"onUpdate:modelValue":s[0]||(s[0]=u=>l(o).title_uz=u),rules:[l(F)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:l(o).title_ru,"onUpdate:modelValue":s[1]||(s[1]=u=>l(o).title_ru=u),rules:[l(F)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:l(o).title_en,"onUpdate:modelValue":s[2]||(s[2]=u=>l(o).title_en=u),rules:[l(F)],label:"Title En"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(V,{label:"Prompt uz",modelValue:l(o).prompt_uz,"onUpdate:modelValue":s[3]||(s[3]=u=>l(o).prompt_uz=u)},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(V,{label:"Prompt Ru",modelValue:l(o).prompt_ru,"onUpdate:modelValue":s[4]||(s[4]=u=>l(o).prompt_ru=u)},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(V,{label:"Prompt En",modelValue:l(o).prompt_en,"onUpdate:modelValue":s[5]||(s[5]=u=>l(o).prompt_en=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{class:"mt-4"},{default:t(()=>[e(i,{cols:"6",md:"6"},{default:t(()=>[e(z,{modelValue:l(o).order,"onUpdate:modelValue":s[6]||(s[6]=u=>l(o).order=u),rules:[l(F)],label:"Order"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"6",md:"6"},{default:t(()=>[e(Y,{modelValue:l(o).category_id,"onUpdate:modelValue":s[7]||(s[7]=u=>l(o).category_id=u),items:S.categories,"item-title":"title","item-value":"id",label:"Category Id",disabled:""},null,8,["modelValue","items"])]),_:1})]),_:1}),e(b,{class:"mt-4"},{default:t(()=>[e(i,{cols:"6",md:"6"},{default:t(()=>[e(P,{modelValue:l(o).status,"onUpdate:modelValue":s[8]||(s[8]=u=>l(o).status=u),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1}),e(i,{cols:"6",md:"4"},{default:t(()=>[e(P,{modelValue:l(o).is_multiple,"onUpdate:modelValue":s[9]||(s[9]=u=>l(o).is_multiple=u),label:"Is Multiple",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(v,{type:"submit",class:"me-3",color:"success"},{default:t(()=>[x(" Submit ")]),_:1}),e(v,{type:"reset",variant:"tonal",color:"error",onClick:g},{default:t(()=>[x(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},be={class:"d-flex align-center pa-6 pb-1"},ve=A("h6",{class:"text-h6"}," Update Question ",-1),ge={__name:"FormUpdate",props:{isUpdateFormOpened:{default:null,required:!0},question:{type:Object},categories:{type:Array}},emits:["update:isUpdateFormOpened","formSubmitted"],setup(S,{emit:c}){const a=S,{questions:O,question:q,loading:o,error:g}=K(E());E(),f([{id:null,title:null}]),f(null);const y=f(!1),U=f(null);f({filter:{parent_id:null}});const k=()=>{c("update:isUpdateFormOpened",!1),D(()=>{_()})},_=()=>{var u,r;(u=U.value)==null||u.reset(),a.question.prompt_uz=null,a.question.prompt_ru=null,a.question.prompt_en=null,(r=U.value)==null||r.resetValidation()},s=()=>{var u;(u=U.value)==null||u.validate().then(({valid:r})=>{r&&(c("formSubmitted",{title_uz:a.question.title_uz,title_ru:a.question.title_ru,title_en:a.question.title_en,prompt_uz:a.question.prompt_uz,prompt_ru:a.question.prompt_ru,prompt_en:a.question.prompt_en,category_id:a.question.category_id,is_multiple:a.question.is_multiple,status:a.question.status,order:a.question.order}),c("update:isUpdateFormOpened",!1),D(()=>{_()}))})},V=u=>{c("update:isUpdateFormOpened",u)};return(u,r)=>{const C=J;return I(),$(Z,{permanent:"",width:1e3,location:"end",class:"scrollable-content","model-value":a.isUpdateFormOpened,"onUpdate:modelValue":V},{default:t(()=>[A("div",be,[ve,e(W),e(v,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:k},{default:t(()=>[e(T,{size:"18",icon:"tabler-x"})]),_:1})]),e(l(B),{options:{wheelPropagation:!1}},{default:t(()=>[e(j,{flat:""},{default:t(()=>[e(H,null,{default:t(()=>[e(X,{ref_key:"refQuestionCreateForm",ref:U,modelValue:l(y),"onUpdate:modelValue":r[10]||(r[10]=n=>Q(y)?y.value=n:null),onSubmit:G(s,["prevent"])},{default:t(()=>[e(b,null,{default:t(()=>[e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:a.question.title_uz,"onUpdate:modelValue":r[0]||(r[0]=n=>a.question.title_uz=n),rules:[l(F)],label:"Title Uz"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:a.question.title_ru,"onUpdate:modelValue":r[1]||(r[1]=n=>a.question.title_ru=n),rules:[l(F)],label:"Title Ru"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"4"},{default:t(()=>[e(z,{modelValue:a.question.title_en,"onUpdate:modelValue":r[2]||(r[2]=n=>a.question.title_en=n),rules:[l(F)],label:"Title En"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(C,{label:"Prompt uz",modelValue:a.question.prompt_uz,"onUpdate:modelValue":r[3]||(r[3]=n=>a.question.prompt_uz=n)},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(C,{label:"Prompt Ru",modelValue:a.question.prompt_ru,"onUpdate:modelValue":r[4]||(r[4]=n=>a.question.prompt_ru=n)},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(C,{label:"Prompt En",modelValue:a.question.prompt_en,"onUpdate:modelValue":r[5]||(r[5]=n=>a.question.prompt_en=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{class:"mt-4"},{default:t(()=>[e(i,{cols:"6",md:"6"},{default:t(()=>[e(z,{modelValue:a.question.order,"onUpdate:modelValue":r[6]||(r[6]=n=>a.question.order=n),rules:[l(F)],label:"Order"},null,8,["modelValue","rules"])]),_:1}),a.question.category_id!==null?(I(),$(i,{key:0,cols:"6",md:"6"},{default:t(()=>[e(Y,{modelValue:l(q).category_id,"onUpdate:modelValue":r[7]||(r[7]=n=>l(q).category_id=n),items:S.categories,"item-title":"title","item-value":"id",label:"Category Id",disabled:""},null,8,["modelValue","items"])]),_:1})):L("",!0)]),_:1}),e(b,{class:"mt-4"},{default:t(()=>[e(i,{cols:"6",md:"6"},{default:t(()=>[e(P,{modelValue:a.question.status,"onUpdate:modelValue":r[8]||(r[8]=n=>a.question.status=n),label:"Status",value:1,color:"primary"},null,8,["modelValue"])]),_:1}),e(i,{cols:"6",md:"4"},{default:t(()=>[e(P,{modelValue:a.question.is_multiple,"onUpdate:modelValue":r[9]||(r[9]=n=>a.question.is_multiple=n),label:"Is Multiple",value:1,color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(v,{type:"submit",class:"me-3",color:"success"},{default:t(()=>[x(" Submit ")]),_:1}),e(v,{type:"reset",variant:"tonal",color:"error",onClick:k},{default:t(()=>[x(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},Ke={__name:"list",setup(S){const{questions:c,question:a,loading:O,error:q,pagination:o}=K(E()),{fetchQuestions:g,addQuestion:y,fetchQuestion:U,updateQuestion:k,deleteQuestion:_}=E(),{fetchCategories:s}=_e(),V=de(),u={title:"Questions",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},r=f(!1),C=f(!1),n=f(!1),N=f(null),w=f({filter:{category_id:V.params.category}}),R=f([]);g(w.value);const h=()=>{g(w.value)},ee=()=>{_(N.value).then(m=>{n.value=!1,g(w.value)})},te=m=>{n.value=!0,N.value=m},le=m=>{r.value=m.isCreateFormOpened},oe=m=>{U(m.qustionId).then(p=>{C.value=m.isUpdateFormOpened})},ae=m=>{y(m).then(p=>{g(w.value)})},ue=m=>{k(a.value.id,m).then(p=>{g(w.value)})};return ne(()=>{s().then(m=>{m.data.result.data.forEach(p=>{let d={id:p.id,title:p.title_uz};R.value.push(d)})})}),(m,p)=>(I(),ie("section",null,[e(me,{onPageChanged:h,body:{data:l(c).data,pagination:l(o)},loading:l(O),tableData:u},{pageActions:t(()=>[e(b,null,{default:t(()=>[e(i,{cols:"2",offset:"md-10"},{default:t(()=>[e(v,{"prepend-icon":"tabler-plus",onClick:p[0]||(p[0]=d=>le({isCreateFormOpened:!0}))},{default:t(()=>[x(" Create ")]),_:1})]),_:1})]),_:1})]),status:t(d=>[d.item.status===1?(I(),$(M,{key:0,color:"success"},{default:t(()=>[x(" Active ")]),_:1})):d.item.status===0?(I(),$(M,{key:1,color:"error"},{default:t(()=>[x(" Inactive ")]),_:1})):L("",!0)]),actions:t(d=>[e(v,{onClick:re=>oe({isUpdateFormOpened:!0,qustionId:d.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(T,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(v,{icon:"",onClick:re=>te(d.item.id),size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(T,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(v,{icon:"",to:{name:"assessment-category-category-questions-parent-children",params:{category:l(V).params.category,parent:d.item.id}},size:"x-small",color:"default",variant:"text"},{default:t(()=>[e(T,{size:"22",icon:"mdi-open-in-app"})]),_:2},1032,["to"])]),_:1},8,["body","loading"]),e(Ve,{onFormSubmitted:ae,categories:l(R),categoryId:l(V).params.category,isCreateFormOpened:l(r),"onUpdate:isCreateFormOpened":p[1]||(p[1]=d=>Q(r)?r.value=d:null)},null,8,["categories","categoryId","isCreateFormOpened"]),e(ge,{onFormSubmitted:ue,question:l(a),categories:l(R),isUpdateFormOpened:l(C),"onUpdate:isUpdateFormOpened":p[2]||(p[2]=d=>Q(C)?C.value=d:null)},null,8,["question","categories","isUpdateFormOpened"]),e(pe,{isOpen:l(n),"onUpdate:isOpen":p[3]||(p[3]=d=>Q(n)?n.value=d:null),loading:l(O),onAccepted:ee},null,8,["isOpen","loading"])]))}};export{Ke as default};
