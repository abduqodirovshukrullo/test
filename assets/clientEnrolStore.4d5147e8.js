import{bb as r}from"./index.68ab1696.js";import{a as l}from"./axios.3a2e37fd.js";const p=r("ClientEnrolStore",{state:()=>({pagination:{meta:{}},filter:{},appealInspectors:[],appealInspector:{type:"",first_name:"",last_name:"",patronimic:"",address:"",passport_serial:"",pin:"",phone:"",inspection_id:null,problem_id:null,appeal_text:"",document_url:null,planned_date:"",planned_time:"",user_id:null,status:1,order:""},loading:!1,error:""}),actions:{fetchAppealInspectors(t){return this.loading=!0,t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((n,e)=>{l.get("/dashboard/client/enrol",{params:t}).then(a=>{this.appealInspectors=a.data.result,this.pagination.meta=a.data.result.meta,n(a)}).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},fetchAppealInspector(t){return new Promise((i,n)=>{l.get(`/dashboard/client/enrol/${t}`).then(e=>{this.appealInspector=e.data.result,i(e.data.result)}).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},addAppealInspector(t){return this.loading=!0,new Promise((i,n)=>{l.post("/dashboard/client/enrol",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>i(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})},updateAppealInspector(t,i){return this.loading=!0,new Promise((n,e)=>{l.post("/dashboard/client/enrol/"+t+"?_method=PUT",i,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>n(a)).catch(a=>{this.error=a,e(a)}).finally(()=>{this.loading=!1})})},deleteAppealInspector(t){return this.loading=!0,new Promise((i,n)=>{l.delete("/dashboard/client/enrol/"+t).then(e=>i(e)).catch(e=>{this.error=e,n(e)}).finally(()=>{this.loading=!1})})}}});export{p as u};
