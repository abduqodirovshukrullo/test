import{bc as b,k as u,o as f,c as L,p as s,w as n,z as v,b as g,a$ as j,A as q,q as a,b7 as _,bO as G}from"./index.ccf75e8b.js";import{_ as H}from"./DataTable.632e8001.js";import{u as k,_ as J,a as K}from"./FormUpdate.1f5ca7bb.js";import{u as U}from"./questionStore.b11cbb2f.js";import{_ as M}from"./Confirmer.3f389e76.js";import{V as W,a as X}from"./VRow.126a71fb.js";import{V as C}from"./VBtn.51511430.js";import{V}from"./VChip.6d62dc6b.js";import"./VDivider.82c53423.js";import"./axios.6988005b.js";import"./validators.03da0656.js";import"./VSpacer.3dae3a1a.js";import"./VForm.39e46bcf.js";import"./form.66042bc2.js";import"./VTextField.3149a27e.js";import"./index.d79d6c26.js";import"./VInput.eb4ac968.js";import"./VSelect.2279726f.js";import"./VList.195d91c9.js";import"./dialog-transition.bc738bac.js";import"./VMenu.55dc8cad.js";import"./VCheckboxBtn.36b303b3.js";import"./VSelectionControl.506d58f9.js";import"./VSwitch.655f8d6f.js";import"./VNavigationDrawer.cd147b40.js";import"./ssrBoot.9c630877.js";import"./VDialog.8e32b53e.js";const Ve={__name:"children",setup(Y){const m=G(),{questionAnswers:z,questionAnswer:w,answerLoading:A,error:Z,answerPagination:Q}=b(k()),{question:F}=b(U()),{fetchQuestionAnswers:i,addQuestionAnswer:x,fetchQuestionAnswer:$,updateQuestionAnswer:h,deleteQuestionAnswer:y}=k(),{fetchQuestion:c}=U(),I={title:"Qusetion Answers",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},p=u(!1),d=u(!1),r=u(!1),O=u(null),l=u({filter:{question_id:m.params.parent}});c(m.params.parent),i(l.value);const S=()=>{i(l.value)},B=()=>{y(O.value).then(t=>{r.value=!1,i(l.value)})},D=t=>{r.value=!0,O.value=t},R=t=>{p.value=t.isCreateFormOpened},N=t=>{$(t.questionAnswerId).then(o=>{d.value=t.isUpdateFormOpened})},P=t=>{x(t).then(o=>{i(l.value),c(m.params.parent)})},T=t=>{h(w.value.id,t).then(o=>{i(l.value),c(m.params.parent)})};return(t,o)=>(f(),L("section",null,[s(H,{onPageChanged:S,body:{data:a(z),pagination:a(Q)},loading:a(A),tableData:I},{title_uz:n(e=>[]),pageActions:n(()=>[s(W,null,{default:n(()=>[s(X,{cols:"2",offset:"md-10"},{default:n(()=>[s(C,{"prepend-icon":"tabler-plus",onClick:o[0]||(o[0]=e=>R({isCreateFormOpened:!0}))},{default:n(()=>[v(" Create ")]),_:1})]),_:1})]),_:1})]),status:n(e=>[e.item.status===1?(f(),g(V,{key:0,color:"success"},{default:n(()=>[v(" Active ")]),_:1})):e.item.status===0?(f(),g(V,{key:1,color:"error"},{default:n(()=>[v(" Inactive ")]),_:1})):j("",!0)]),actions:n(e=>[s(C,{onClick:E=>N({isUpdateFormOpened:!0,questionAnswerId:e.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:n(()=>[s(q,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),s(C,{icon:"",onClick:E=>D(e.item.id),size:"x-small",color:"default",variant:"text"},{default:n(()=>[s(q,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),s(J,{onFormSubmitted:P,question:a(F),isCreateFormOpened:a(p),"onUpdate:isCreateFormOpened":o[1]||(o[1]=e=>_(p)?p.value=e:null)},null,8,["question","isCreateFormOpened"]),s(K,{onFormSubmitted:T,question:a(F),questionAnswer:a(w),isUpdateFormOpened:a(d),"onUpdate:isUpdateFormOpened":o[2]||(o[2]=e=>_(d)?d.value=e:null)},null,8,["question","questionAnswer","isUpdateFormOpened"]),s(M,{isOpen:a(r),"onUpdate:isOpen":o[3]||(o[3]=e=>_(r)?r.value=e:null),loading:a(A),onAccepted:B},null,8,["isOpen","loading"])]))}};export{Ve as default};