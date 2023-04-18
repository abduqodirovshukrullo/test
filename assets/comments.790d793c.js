import{bb as A,o as _,c as L,p as t,w as e,m as i,A as $,q as p,b4 as F,b1 as R,bh as j,z as u,x as D,bj as q,aP as T,bc as M,k as g,b as y,a$ as z,b7 as E,bO as Q}from"./index.d0376abb.js";import{_ as G}from"./DataTable.1b688fa1.js";import{a as h}from"./axios.956cc88e.js";import{V as H}from"./VSpacer.cba7ed72.js";import{V as S}from"./VBtn.88bd5865.js";import{V as J,a as V,b as w}from"./VList.3972f313.js";import{V as K}from"./VSwitch.f21bc77e.js";import{V as W}from"./VDivider.17d044d3.js";import{V as X}from"./VForm.7b3aef50.js";import{V as Y,a as Z}from"./VRow.3bbc78cc.js";import{V as tt}from"./VNavigationDrawer.c54447bf.js";import{V as I}from"./VChip.87002366.js";import"./index.852e8fad.js";import"./VSelectionControl.a1c05b0b.js";import"./VInput.71e0e032.js";import"./form.af4ba2ee.js";import"./ssrBoot.8a991bad.js";const O=A("ClientComment",{state:()=>({pagination:{meta:{}},filter:{},comments:[],comment:{full_name:"",content_text:"",status:""},loading:!1,error:""}),actions:{fetchComments(n,o){return this.loading=!0,o={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...o},new Promise((a,r)=>{h.get(`dashboard/client/forum/${n}/comments`,{params:o}).then(d=>{this.comments=d.data.result,this.pagination.meta=d.data.result.meta,a(d)}).catch(d=>{this.error=d,r(d)}).finally(()=>{this.loading=!1})})},fetchComment(n){return new Promise((o,s)=>{h.get(`dashboard/client/forum/${n}`).then(a=>{this.appealApplication=a.data.result,o(a.data.result)}).catch(a=>{this.error=a,s(a)}).finally(()=>{this.loading=!1})})},addComment(n){return this.loading=!0,new Promise((o,s)=>{h.post("dashboard/client/application",n,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>o(a)).catch(a=>{this.error=a,s(a)}).finally(()=>{this.loading=!1})})},updateComment(n,o){return this.loading=!0,new Promise((s,a)=>{h.post("dashboard/client/forum/comments/"+n+"?_method=PUT",o,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>s(r)).catch(r=>{this.error=r,a(r)}).finally(()=>{this.loading=!1})})},deleteComment(n){return this.loading=!0,new Promise((o,s)=>{h.delete("dashboard/client/forum/"+n).then(a=>o(a)).catch(a=>{this.error=a,s(a)}).finally(()=>{this.loading=!1})})}}}),et={class:"d-flex align-center pa-6 pb-1"},at=i("h6",{class:"text-h6"}," Info details ",-1),st={class:"text-base font-weight-semibold"},ot={class:"text-body-2"},nt={class:"text-base font-weight-semibold"},lt={class:"text-body-2"},it=i("h6",{class:"text-base font-weight-semibold"}," Content: ",-1),rt={class:"text-body-2"},dt={class:"text-base font-weight-semibold"},ct={class:"text-body-2"},ut={__name:"CommentInfo",props:{isInfoDrawerOpened:{default:null,required:!0},infoDetails:{type:Object}},emits:["update:isInfoDrawerOpened","fetchList","formSubmitted"],setup(n,{emit:o}){const s=n,{updateComment:a}=O(),r=()=>{o("update:isInfoDrawerOpened",!1),T(()=>{})},d=()=>{let c={status:s.infoDetails.status};a(s.infoDetails.id,c).then(m=>{m.data.success&&(o("update:isInfoDrawerOpened",!1),o("fetchList"),T(()=>{}))})},v=c=>{o("update:isInfoDrawerOpened",c)};return(c,m)=>(_(),L("div",null,[t(tt,{permanent:"",width:700,location:"end",class:"scrollable-content","model-value":s.isInfoDrawerOpened,"onUpdate:modelValue":v},{default:e(()=>[i("div",et,[at,t(H),t(S,{variant:"tonal",color:"error",icon:"",size:"32",class:"rounded",onClick:r},{default:e(()=>[t($,{size:"18",icon:"tabler-x"})]),_:1})]),t(p(F),{options:{wheelPropagation:!1}},{default:e(()=>[t(R,{flat:""},{default:e(()=>[t(j,null,{default:e(()=>[t(J,null,{default:e(()=>[t(V,null,{default:e(()=>[t(w,null,{default:e(()=>[i("h6",st,[u(" id: "),i("span",ot,D(s.infoDetails.id),1)])]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(w,null,{default:e(()=>[i("h6",nt,[u(" Full name: "),i("span",lt,D(s.infoDetails.full_name),1)])]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(w,null,{default:e(()=>[it]),_:1}),i("p",null,[i("span",rt,D(s.infoDetails.content_text),1)])]),_:1}),t(V,null,{default:e(()=>[t(w,null,{default:e(()=>[i("h6",dt,[u(" Status: "),i("span",ct,[t(K,{modelValue:s.infoDetails.status,"onUpdate:modelValue":m[0]||(m[0]=f=>s.infoDetails.status=f),label:"Status",value:1,color:"primary"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1}),t(W),t(X,{class:"mt-4",onSubmit:q(d,["prevent"])},{default:e(()=>[t(Y,null,{default:e(()=>[t(Z,{cols:"12",class:"d-flex gap-4"},{default:e(()=>[t(S,{type:"submit"},{default:e(()=>[u(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])]))}},Pt={__name:"comments",setup(n){const o=Q(),{comments:s,comment:a,loading:r,error:d,pagination:v}=M(O()),{fetchComments:c}=O(),m={title:"Forum Comments",headers:["full_name","content_text","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}},f=g(!1),k=g({}),C=g({filter:{}}),x=g(o.params.forum);c(x.value,C.value);const N=()=>{c(x.value,C.value)},B=()=>{c(x.value,C.value)},U=P=>{const b=s.value.data.filter(l=>l.id===P);k.value=b[0],f.value=!0};return(P,b)=>(_(),L("section",null,[t(G,{onPageChanged:B,body:{data:p(s).data,pagination:p(v)},loading:p(r),tableData:m},{type:e(l=>[l.item.type?(_(),y(I,{key:0,color:"success"},{default:e(()=>[u(D(l.item.type),1)]),_:2},1024)):z("",!0)]),status:e(l=>[l.item.status===1?(_(),y(I,{key:0,color:"success"},{default:e(()=>[u(" Active ")]),_:1})):l.item.status===0?(_(),y(I,{key:1,color:"error"},{default:e(()=>[u(" Inactive ")]),_:1})):z("",!0)]),actions:e(l=>[t(S,{icon:"",onClick:mt=>U(l.item.id),size:"x-small",color:"default",variant:"text"},{default:e(()=>[t($,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"]),t(ut,{onFetchList:N,infoDetails:p(k),isInfoDrawerOpened:p(f),"onUpdate:isInfoDrawerOpened":b[0]||(b[0]=l=>E(f)?f.value=l:null)},null,8,["infoDetails","isInfoDrawerOpened"])]))}};export{Pt as default};
