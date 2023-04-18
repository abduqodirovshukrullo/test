import{bc as E,k as m,o as f,c as L,p as o,w as r,z as C,b as O,a$ as P,A as b,q as i,b7 as g,bO as Q}from"./index.ccf75e8b.js";import{_ as j}from"./DataTable.632e8001.js";import{u as h}from"./categoryStore.9049dbff.js";import{_ as G,a as H}from"./FormUpdate.a43baac0.js";import{_ as J}from"./Confirmer.3f389e76.js";import{V as K,a as M}from"./VRow.126a71fb.js";import{V as v}from"./VBtn.51511430.js";import{V as k}from"./VChip.6d62dc6b.js";import"./VDivider.82c53423.js";import"./axios.6988005b.js";import"./validators.03da0656.js";import"./VSpacer.3dae3a1a.js";import"./VForm.39e46bcf.js";import"./form.66042bc2.js";import"./VTextField.3149a27e.js";import"./index.d79d6c26.js";import"./VInput.eb4ac968.js";import"./VTextarea.8568297e.js";import"./VSwitch.655f8d6f.js";import"./VSelectionControl.506d58f9.js";import"./VSelect.2279726f.js";import"./VList.195d91c9.js";import"./dialog-transition.bc738bac.js";import"./VMenu.55dc8cad.js";import"./VCheckboxBtn.36b303b3.js";import"./VNavigationDrawer.cd147b40.js";import"./ssrBoot.9c630877.js";import"./VDialog.8e32b53e.js";const xe={__name:"children",setup(W){const d=Q(),{categoryChildren:V,category:X,categoryChild:y,childrenLoading:_,error:Y,childrenPagination:U}=E(h()),{fetchCategoryChildren:n,addCategory:x,fetchCategory:c,fetchCategoryChild:z,updateCategory:$,deleteCategory:I}=h(),A={title:"Category Children",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},p=m(!1),u=m(!1),s=m(!1),F=m(null),l=m({filter:{parent_id:d.params.parent}});c(d.params.parent),n(l.value);const S=()=>{n(l.value)},B=()=>{I(F.value).then(e=>{s.value=!1,n(l.value)})},D=e=>{s.value=!0,F.value=e},R=e=>{p.value=e.isCreateFormOpened},w=e=>{z(e.categoryId).then(a=>{u.value=e.isUpdateFormOpened})},N=e=>{x(e).then(a=>{n(l.value),c(d.params.parent)})},T=e=>{$(y.value.id,e).then(a=>{n(l.value),c(d.params.parent)})};return(e,a)=>(f(),L("section",null,[o(j,{onPageChanged:S,body:{data:i(V).data,pagination:i(U)},loading:i(_),tableData:A},{pageActions:r(()=>[o(K,null,{default:r(()=>[o(M,{cols:"2",offset:"md-10"},{default:r(()=>[o(v,{"prepend-icon":"tabler-plus",onClick:a[0]||(a[0]=t=>R({isCreateFormOpened:!0}))},{default:r(()=>[C(" Create ")]),_:1})]),_:1})]),_:1})]),status:r(t=>[t.item.status===1?(f(),O(k,{key:0,color:"success"},{default:r(()=>[C(" Active ")]),_:1})):t.item.status===0?(f(),O(k,{key:1,color:"error"},{default:r(()=>[C(" Inactive ")]),_:1})):P("",!0)]),actions:r(t=>[o(v,{onClick:q=>w({isUpdateFormOpened:!0,categoryId:t.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:r(()=>[o(b,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),o(v,{icon:"",onClick:q=>D(t.item.id),size:"x-small",color:"default",variant:"text"},{default:r(()=>[o(b,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),o(G,{onFormSubmitted:N,category:e.children,isCreateFormOpened:i(p),"onUpdate:isCreateFormOpened":a[1]||(a[1]=t=>g(p)?p.value=t:null)},null,8,["category","isCreateFormOpened"]),o(H,{onFormSubmitted:T,category:i(y),isUpdateFormOpened:i(u),"onUpdate:isUpdateFormOpened":a[2]||(a[2]=t=>g(u)?u.value=t:null)},null,8,["category","isUpdateFormOpened"]),o(J,{isOpen:i(s),"onUpdate:isOpen":a[3]||(a[3]=t=>g(s)?s.value=t:null),loading:i(_),onAccepted:B},null,8,["isOpen","loading"])]))}};export{xe as default};