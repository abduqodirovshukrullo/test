import{bb as I,bc as T,k as l,o as u,c as V,p as m,w as h,b as g,z as A,a$ as O,q as n,b7 as $}from"./index.68ab1696.js";import{_ as z}from"./DataTable.529efa2b.js";import{a as o}from"./axios.3a2e37fd.js";import{_ as B}from"./Confirmer.a21947e5.js";import{V as _}from"./VChip.685dc12f.js";import"./VRow.b4ec55e0.js";import"./VDivider.db684b17.js";import"./VBtn.e44a7ff0.js";import"./VDialog.d10e315b.js";import"./dialog-transition.1e949d43.js";import"./index.58b926c8.js";const y=I("AppealApplications",{state:()=>({pagination:{meta:{}},filter:{},appealApplications:[],appealApplication:{type:"",passport_serial:"",pin:"",phone:"",inspection_id:"",appeal_text:"",document_url:"",user_id:"",status:1,order:null},loading:!1,error:""}),actions:{fetchAppealApplications(e){return this.loading=!0,e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((i,a)=>{o.get("/dashboard/appeal/appeal-application",{params:e}).then(t=>{this.appealApplications=t.data.result,this.pagination.meta=t.data.result.meta,i(t)}).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})},fetchAppealApplication(e){return new Promise((p,i)=>{o.get(`/dashboard/appeal/appeal-application/${e}`).then(a=>{this.appealApplication=a.data.result,p(a.data.result)}).catch(a=>{this.error=a,i(a)}).finally(()=>{this.loading=!1})})},addAppealApplication(e){return this.loading=!0,new Promise((p,i)=>{o.post("/dashboard/appeal/appeal-application",e,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>p(a)).catch(a=>{this.error=a,i(a)}).finally(()=>{this.loading=!1})})},updateAppealApplication(e,p){return this.loading=!0,new Promise((i,a)=>{o.post("/dashboard/appeal/appeal-application/"+e+"?_method=PUT",p,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>i(t)).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})},deleteAppealApplication(e){return this.loading=!0,new Promise((p,i)=>{o.delete("/dashboard/appeal/appeal-application/"+e).then(a=>p(a)).catch(a=>{this.error=a,i(a)}).finally(()=>{this.loading=!1})})}}}),L={__name:"list",setup(e){const{appealApplications:p,appealApplication:i,loading:a,error:t,pagination:b}=T(y()),{fetchAppealApplications:c,addAppealApplication:D,fetchAppealApplication:N,updateAppealApplication:R,deleteAppealApplication:v}=y(),C={title:"Appeal Applications",headers:["id","user_id","inspection_id","phone","type","status"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};l(!1),l(!1);const s=l(!1),w=l(null),d=l({filter:{parent_id:null}});c(d.value);const x=()=>{c(d.value)},P=()=>{v(w.value).then(k=>{s.value=!1,c(d.value)})};return(k,f)=>(u(),V("section",null,[m(z,{onPageChanged:x,body:{data:n(p).data,pagination:n(b)},loading:n(a),tableData:C},{status:h(r=>[r.item.status===1?(u(),g(_,{key:0,color:"success"},{default:h(()=>[A(" Active ")]),_:1})):r.item.status===0?(u(),g(_,{key:1,color:"error"},{default:h(()=>[A(" Inactive ")]),_:1})):O("",!0)]),_:1},8,["body","loading"]),m(B,{isOpen:n(s),"onUpdate:isOpen":f[0]||(f[0]=r=>$(s)?s.value=r:null),loading:n(a),onAccepted:P},null,8,["isOpen","loading"])]))}};export{L as default};
