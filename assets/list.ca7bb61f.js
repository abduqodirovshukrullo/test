import{bb as A,bc as P,k as n,o as u,c as V,p as m,w as h,b as g,z as _,a$ as O,q as o,b7 as $}from"./index.ff6dd18a.js";import{_ as z}from"./DataTable.8386c370.js";import{a as i}from"./axios.544a54a6.js";import{_ as B}from"./Confirmer.da69fa93.js";import{V as I}from"./VChip.34758a01.js";import"./VRow.6a3eb9e0.js";import"./VDivider.709f44be.js";import"./VBtn.05c82630.js";import"./VDialog.ab1b1692.js";import"./dialog-transition.2a00a3c9.js";import"./index.f6fb5e9e.js";const R=A("AppealRateInspector",{state:()=>({pagination:{meta:{}},filter:{},rateInspectors:[],rateInspector:{user_id:"",inspector_id:"",comment_text:"",rate:"",status:1,order:null},loading:!1,error:""}),actions:{fetchRateInspectors(t){return this.loading=!0,t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((r,e)=>{i.get("/dashboard/appeal/appeal-rate-inspector",{params:t}).then(a=>{this.rateInspectors=a.data.result,this.pagination.meta=a.data.result.meta,r(a)}).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},fetchRateInspector(t){return new Promise((s,r)=>{i.get(`/dashboard/appeal/appeal-rate-inspector/${t}`).then(e=>{this.rateInspector=e.data.result,s(e.data.result)}).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})},addRateInspector(t){return this.loading=!0,new Promise((s,r)=>{i.post("/dashboard/appeal/appeal-rate-inspector",t).then(e=>s(e)).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})},updateRateInspector(t,s){return this.loading=!0,new Promise((r,e)=>{i.put("/dashboard/appeal/appeal-rate-inspector/"+t,s).then(a=>r(a)).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},deleteRateInspector(t){return this.loading=!0,new Promise((s,r)=>{i.delete("/dashboard/appeal/appeal-rate-inspector/"+t).then(e=>s(e)).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})}}}),L={__name:"list",setup(t){const{rateInspectors:s,rateInspector:r,loading:e,error:a,pagination:b}=P(R()),{fetchRateInspectors:c,addRateInspector:D,fetchRateInspector:N,updateRateInspector:S,deleteRateInspectors:v}=R(),y={title:"Appeal Rate Inspector",headers:["id","user_id","inspector_id","comment_text","rate","status"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};n(!1),n(!1);const l=n(!1),x=n(null),d=n({filter:{parent_id:null}});c(d.value);const w=()=>{c(d.value)},C=()=>{v(x.value).then(k=>{l.value=!1,c(d.value)})};return(k,f)=>(u(),V("section",null,[m(z,{onPageChanged:w,body:{data:o(s).data,pagination:o(b)},loading:o(e),tableData:y},{status:h(p=>[p.item.status===1?(u(),g(I,{key:0,color:"success"},{default:h(()=>[_(" Active ")]),_:1})):p.item.status===0?(u(),g(I,{key:1,color:"error"},{default:h(()=>[_(" Inactive ")]),_:1})):O("",!0)]),_:1},8,["body","loading"]),m(B,{isOpen:o(l),"onUpdate:isOpen":f[0]||(f[0]=p=>$(l)?l.value=p:null),loading:o(e),onAccepted:C},null,8,["isOpen","loading"])]))}};export{L as default};
