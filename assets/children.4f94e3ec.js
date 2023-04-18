import{bc as E,k as p,o as f,c as L,p as r,w as a,z as C,b as G,a$ as P,A as O,q as i,b7 as g,bO as Q}from"./index.d0376abb.js";import{_ as j}from"./DataTable.1b688fa1.js";import{u as b}from"./categoryGroupStore.df72e349.js";import{_ as H,a as J}from"./FormUpdate.09089dc6.js";import{_ as K}from"./Confirmer.80dc42d6.js";import{V as M,a as W}from"./VRow.3bbc78cc.js";import{V as v}from"./VBtn.88bd5865.js";import{V as h}from"./VChip.87002366.js";import"./VDivider.17d044d3.js";import"./axios.956cc88e.js";import"./validators.03da0656.js";import"./VSpacer.cba7ed72.js";import"./VForm.7b3aef50.js";import"./form.af4ba2ee.js";import"./VTextField.92856828.js";import"./index.852e8fad.js";import"./VInput.71e0e032.js";import"./VTextarea.1493a88f.js";import"./VSwitch.f21bc77e.js";import"./VSelectionControl.a1c05b0b.js";import"./VSelect.f6407ce8.js";import"./VList.3972f313.js";import"./dialog-transition.2174bb87.js";import"./VMenu.e1f3b74e.js";import"./VCheckboxBtn.98e56da7.js";import"./VNavigationDrawer.c54447bf.js";import"./ssrBoot.8a991bad.js";import"./VDialog.7aee3e07.js";const Ue={__name:"children",setup(X){const u=Q(),{categoryGroupChildren:k,categoryGroup:V,categoryGroupChild:y,childrenLoading:_,error:Y,childrenPagination:U}=E(b()),{fetchCategoryGroupChildren:n,addCategoryGroup:x,fetchCategoryGroup:c,fetchCategoryGroupChild:z,updateCategoryGroup:$,deleteCategoryGroup:I}=b(),A={title:"Category Group Children",headers:["id","title_uz","title_ru","title_en","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},m=p(!1),d=p(!1),s=p(!1),F=p(null),l=p({filter:{parent_id:u.params.parent}});c(u.params.parent),n(l.value);const S=()=>{n(l.value)},B=()=>{I(F.value).then(e=>{s.value=!1,n(l.value)})},D=e=>{s.value=!0,F.value=e},R=e=>{m.value=e.isCreateFormOpened},w=e=>{z(e.categoryGroupId).then(o=>{d.value=e.isUpdateFormOpened})},N=e=>{x(e).then(o=>{n(l.value),c(u.params.parent)})},T=e=>{$(y.value.id,e).then(o=>{n(l.value),c(u.params.parent)})};return(e,o)=>(f(),L("section",null,[r(j,{onPageChanged:S,body:{data:i(k).data,pagination:i(U)},loading:i(_),tableData:A},{pageActions:a(()=>[r(M,null,{default:a(()=>[r(W,{cols:"2",offset:"md-10"},{default:a(()=>[r(v,{"prepend-icon":"tabler-plus",onClick:o[0]||(o[0]=t=>R({isCreateFormOpened:!0}))},{default:a(()=>[C(" Create ")]),_:1})]),_:1})]),_:1})]),status:a(t=>[t.item.status===1?(f(),G(h,{key:0,color:"success"},{default:a(()=>[C(" Active ")]),_:1})):t.item.status===0?(f(),G(h,{key:1,color:"error"},{default:a(()=>[C(" Inactive ")]),_:1})):P("",!0)]),actions:a(t=>[r(v,{onClick:q=>w({isUpdateFormOpened:!0,categoryGroupId:t.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:a(()=>[r(O,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),r(v,{icon:"",onClick:q=>D(t.item.id),size:"x-small",color:"default",variant:"text"},{default:a(()=>[r(O,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),r(H,{onFormSubmitted:N,categoryGroup:i(V),isCreateFormOpened:i(m),"onUpdate:isCreateFormOpened":o[1]||(o[1]=t=>g(m)?m.value=t:null)},null,8,["categoryGroup","isCreateFormOpened"]),r(J,{onFormSubmitted:T,categoryGroup:i(y),isUpdateFormOpened:i(d),"onUpdate:isUpdateFormOpened":o[2]||(o[2]=t=>g(d)?d.value=t:null)},null,8,["categoryGroup","isUpdateFormOpened"]),r(K,{isOpen:i(s),"onUpdate:isOpen":o[3]||(o[3]=t=>g(s)?s.value=t:null),loading:i(_),onAccepted:B},null,8,["isOpen","loading"])]))}};export{Ue as default};
