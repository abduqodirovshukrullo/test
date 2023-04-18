import{bb as k,bc as T,k as p,o as u,c as V,p as f,w as m,b as g,z as _,a$ as O,q as o,b7 as $}from"./index.d0376abb.js";import{_ as z}from"./DataTable.1b688fa1.js";import{a as l}from"./axios.956cc88e.js";import{_ as B}from"./Confirmer.80dc42d6.js";import{V as I}from"./VChip.87002366.js";import"./VRow.3bbc78cc.js";import"./VDivider.17d044d3.js";import"./VBtn.88bd5865.js";import"./VDialog.7aee3e07.js";import"./dialog-transition.2174bb87.js";import"./index.852e8fad.js";const y=k("AppealInspectors",{state:()=>({pagination:{meta:{}},filter:{},appealInspectors:[],appealInspector:{type:"",first_name:"",last_name:"",patronimic:"",address:"",passport_serial:"",pin:"",phone:"",inspection_id:null,problem_id:null,appeal_text:"",document_url:null,planned_date:"",planned_time:"",user_id:null,status:1,order:""},loading:!1,error:""}),actions:{fetchAppealInspectors(t){return this.loading=!0,t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((n,e)=>{l.get("/dashboard/appeal/appeal-enrol-inspector",{params:t}).then(a=>{this.appealInspectors=a.data.result,this.pagination.meta=a.data.result.meta,n(a)}).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},fetchAppealInspector(t){return new Promise((s,n)=>{l.get(`/dashboard/appeal/appeal-enrol-inspector/${t}`).then(e=>{this.appealInspector=e.data.result,s(e.data.result)}).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},addAppealInspector(t){return this.loading=!0,new Promise((s,n)=>{l.post("/dashboard/appeal/appeal-enrol-inspector",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>s(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},updateAppealInspector(t,s){return this.loading=!0,new Promise((n,e)=>{l.post("/dashboard/appeal/appeal-enrol-inspector/"+t+"?_method=PUT",s,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>n(a)).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},deleteAppealInspector(t){return this.loading=!0,new Promise((s,n)=>{l.delete("/dashboard/appeal/appeal-enrol-inspector/"+t).then(e=>s(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})}}}),L={__name:"list",setup(t){const{appealInspectors:s,appealInspector:n,loading:e,error:a,pagination:A}=T(y()),{fetchAppealInspectors:c,addAppealInspector:D,fetchAppealInspector:N,updateAppealInspector:E,deleteAppealInspectors:b}=y(),v={title:"Appeal Enrol Inspector",headers:["type","first_name","phone","inspection_id","user_id","status"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};p(!1),p(!1);const r=p(!1),C=p(null),d=p({filter:{parent_id:null}});c(d.value);const w=()=>{c(d.value)},x=()=>{b(C.value).then(P=>{r.value=!1,c(d.value)})};return(P,h)=>(u(),V("section",null,[f(z,{onPageChanged:w,body:{data:o(s).data,pagination:o(A)},loading:o(e),tableData:v},{status:m(i=>[i.item.status===1?(u(),g(I,{key:0,color:"success"},{default:m(()=>[_(" Active ")]),_:1})):i.item.status===0?(u(),g(I,{key:1,color:"error"},{default:m(()=>[_(" Inactive ")]),_:1})):O("",!0)]),_:1},8,["body","loading"]),f(B,{isOpen:o(r),"onUpdate:isOpen":h[0]||(h[0]=i=>$(r)?r.value=i:null),loading:o(e),onAccepted:x},null,8,["isOpen","loading"])]))}};export{L as default};