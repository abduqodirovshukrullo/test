import{bc as R,k as p,o as c,c as T,p as t,w as r,z as f,b as F,a$ as q,A as g,q as i,b7 as v}from"./index.ccf75e8b.js";import{_ as E}from"./DataTable.632e8001.js";import{u as O}from"./categoryGroupStore.dcbe9eff.js";import{_ as Q,a as j}from"./FormUpdate.90b7ceb6.js";import{_ as H}from"./Confirmer.3f389e76.js";import{V as J,a as K}from"./VRow.126a71fb.js";import{V as d}from"./VBtn.51511430.js";import{V as b}from"./VChip.6d62dc6b.js";import"./VDivider.82c53423.js";import"./axios.6988005b.js";import"./validators.03da0656.js";import"./VSpacer.3dae3a1a.js";import"./VForm.39e46bcf.js";import"./form.66042bc2.js";import"./VTextField.3149a27e.js";import"./index.d79d6c26.js";import"./VInput.eb4ac968.js";import"./VTextarea.8568297e.js";import"./VSwitch.655f8d6f.js";import"./VSelectionControl.506d58f9.js";import"./VSelect.2279726f.js";import"./VList.195d91c9.js";import"./dialog-transition.bc738bac.js";import"./VMenu.55dc8cad.js";import"./VCheckboxBtn.36b303b3.js";import"./VNavigationDrawer.cd147b40.js";import"./ssrBoot.9c630877.js";import"./VDialog.8e32b53e.js";const Ge={__name:"list",setup(L){const{categoryGroups:G,categoryGroup:C,loading:_,error:M,pagination:k}=R(O()),{fetchCategoryGroups:n,addCategoryGroup:x,fetchCategoryGroup:V,updateCategoryGroup:z,deleteCategoryGroup:U}=O(),$={title:"Category Group",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},m=p(!1),u=p(!1),s=p(!1),y=p(null),l=p({filter:{parent_id:null}});n(l.value);const I=()=>{n(l.value)},h=()=>{U(y.value).then(o=>{s.value=!1,n(l.value)})},A=o=>{s.value=!0,y.value=o},S=o=>{m.value=o.isCreateFormOpened},B=o=>{V(o.categoryGroupId).then(a=>{u.value=o.isUpdateFormOpened})},D=o=>{x(o).then(a=>{n(l.value)})},w=o=>{z(C.value.id,o).then(a=>{n(l.value)})};return(o,a)=>(c(),T("section",null,[t(E,{onPageChanged:I,body:{data:i(G).data,pagination:i(k)},loading:i(_),tableData:$},{pageActions:r(()=>[t(J,null,{default:r(()=>[t(K,{cols:"2",offset:"md-10"},{default:r(()=>[t(d,{"prepend-icon":"tabler-plus",onClick:a[0]||(a[0]=e=>S({isCreateFormOpened:!0}))},{default:r(()=>[f(" Create ")]),_:1})]),_:1})]),_:1})]),status:r(e=>[e.item.status===1?(c(),F(b,{key:0,color:"success"},{default:r(()=>[f(" Active ")]),_:1})):e.item.status===0?(c(),F(b,{key:1,color:"error"},{default:r(()=>[f(" Inactive ")]),_:1})):q("",!0)]),actions:r(e=>[t(d,{onClick:N=>B({isUpdateFormOpened:!0,categoryGroupId:e.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:r(()=>[t(g,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(d,{icon:"",onClick:N=>A(e.item.id),size:"x-small",color:"default",variant:"text"},{default:r(()=>[t(g,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(d,{icon:"",to:{name:"assessment-category-group-category-category-children",params:{category:e.item.id}},size:"x-small",color:"default",variant:"text"},{default:r(()=>[t(g,{size:"22",icon:"mdi-open-in-app"})]),_:2},1032,["to"])]),_:1},8,["body","loading"]),t(Q,{onFormSubmitted:D,isCreateFormOpened:i(m),"onUpdate:isCreateFormOpened":a[1]||(a[1]=e=>v(m)?m.value=e:null)},null,8,["isCreateFormOpened"]),t(j,{onFormSubmitted:w,categoryGroup:i(C),isUpdateFormOpened:i(u),"onUpdate:isUpdateFormOpened":a[2]||(a[2]=e=>v(u)?u.value=e:null)},null,8,["categoryGroup","isUpdateFormOpened"]),t(H,{isOpen:i(s),"onUpdate:isOpen":a[3]||(a[3]=e=>v(s)?s.value=e:null),loading:i(_),onAccepted:h},null,8,["isOpen","loading"])]))}};export{Ge as default};