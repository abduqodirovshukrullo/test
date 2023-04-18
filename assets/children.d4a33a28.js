import{bc as b,k as u,o as f,c as L,p as s,w as n,z as v,b as g,a$ as j,A as q,q as a,b7 as _,bO as G}from"./index.d0376abb.js";import{_ as H}from"./DataTable.1b688fa1.js";import{u as k,_ as J,a as K}from"./FormUpdate.c037c11d.js";import{u as U}from"./questionStore.6bbe4d8a.js";import{_ as M}from"./Confirmer.80dc42d6.js";import{V as W,a as X}from"./VRow.3bbc78cc.js";import{V as C}from"./VBtn.88bd5865.js";import{V}from"./VChip.87002366.js";import"./VDivider.17d044d3.js";import"./axios.956cc88e.js";import"./validators.03da0656.js";import"./VSpacer.cba7ed72.js";import"./VForm.7b3aef50.js";import"./form.af4ba2ee.js";import"./VTextField.92856828.js";import"./index.852e8fad.js";import"./VInput.71e0e032.js";import"./VSelect.f6407ce8.js";import"./VList.3972f313.js";import"./dialog-transition.2174bb87.js";import"./VMenu.e1f3b74e.js";import"./VCheckboxBtn.98e56da7.js";import"./VSelectionControl.a1c05b0b.js";import"./VSwitch.f21bc77e.js";import"./VNavigationDrawer.c54447bf.js";import"./ssrBoot.8a991bad.js";import"./VDialog.7aee3e07.js";const Ve={__name:"children",setup(Y){const m=G(),{questionAnswers:z,questionAnswer:w,answerLoading:A,error:Z,answerPagination:Q}=b(k()),{question:F}=b(U()),{fetchQuestionAnswers:i,addQuestionAnswer:x,fetchQuestionAnswer:$,updateQuestionAnswer:h,deleteQuestionAnswer:y}=k(),{fetchQuestion:c}=U(),I={title:"Qusetion Answers",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},p=u(!1),d=u(!1),r=u(!1),O=u(null),l=u({filter:{question_id:m.params.parent}});c(m.params.parent),i(l.value);const S=()=>{i(l.value)},B=()=>{y(O.value).then(t=>{r.value=!1,i(l.value)})},D=t=>{r.value=!0,O.value=t},R=t=>{p.value=t.isCreateFormOpened},N=t=>{$(t.questionAnswerId).then(o=>{d.value=t.isUpdateFormOpened})},P=t=>{x(t).then(o=>{i(l.value),c(m.params.parent)})},T=t=>{h(w.value.id,t).then(o=>{i(l.value),c(m.params.parent)})};return(t,o)=>(f(),L("section",null,[s(H,{onPageChanged:S,body:{data:a(z),pagination:a(Q)},loading:a(A),tableData:I},{title_uz:n(e=>[]),pageActions:n(()=>[s(W,null,{default:n(()=>[s(X,{cols:"2",offset:"md-10"},{default:n(()=>[s(C,{"prepend-icon":"tabler-plus",onClick:o[0]||(o[0]=e=>R({isCreateFormOpened:!0}))},{default:n(()=>[v(" Create ")]),_:1})]),_:1})]),_:1})]),status:n(e=>[e.item.status===1?(f(),g(V,{key:0,color:"success"},{default:n(()=>[v(" Active ")]),_:1})):e.item.status===0?(f(),g(V,{key:1,color:"error"},{default:n(()=>[v(" Inactive ")]),_:1})):j("",!0)]),actions:n(e=>[s(C,{onClick:E=>N({isUpdateFormOpened:!0,questionAnswerId:e.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:n(()=>[s(q,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),s(C,{icon:"",onClick:E=>D(e.item.id),size:"x-small",color:"default",variant:"text"},{default:n(()=>[s(q,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),s(J,{onFormSubmitted:P,question:a(F),isCreateFormOpened:a(p),"onUpdate:isCreateFormOpened":o[1]||(o[1]=e=>_(p)?p.value=e:null)},null,8,["question","isCreateFormOpened"]),s(K,{onFormSubmitted:T,question:a(F),questionAnswer:a(w),isUpdateFormOpened:a(d),"onUpdate:isUpdateFormOpened":o[2]||(o[2]=e=>_(d)?d.value=e:null)},null,8,["question","questionAnswer","isUpdateFormOpened"]),s(M,{isOpen:a(r),"onUpdate:isOpen":o[3]||(o[3]=e=>_(r)?r.value=e:null),loading:a(A),onAccepted:B},null,8,["isOpen","loading"])]))}};export{Ve as default};
