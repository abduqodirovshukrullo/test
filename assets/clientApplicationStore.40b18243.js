import{bb as l}from"./index.ff6dd18a.js";import{a as p}from"./axios.544a54a6.js";const r=l("ClientApplication",{state:()=>({pagination:{meta:{}},filter:{},appealApplications:[],appealApplication:{type:"",passport_serial:"",pin:"",phone:"",inspection_id:"",appeal_text:"",document_url:"",user_id:"",status:1,order:null},loading:!1,error:""}),actions:{fetchAppealApplications(a){return this.loading=!0,a={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...a},new Promise((e,t)=>{p.get("dashboard/client/application",{params:a}).then(i=>{this.appealApplications=i.data.result,this.pagination.meta=i.data.result.meta,e(i)}).catch(i=>{this.error=i,t(i)}).finally(()=>{this.loading=!1})})},fetchAppealApplication(a){return new Promise((n,e)=>{p.get(`dashboard/client/application/${a}`).then(t=>{this.appealApplication=t.data.result,n(t.data.result)}).catch(t=>{this.error=t,e(t)}).finally(()=>{this.loading=!1})})},addAppealApplication(a){return this.loading=!0,new Promise((n,e)=>{p.post("dashboard/client/application",a,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>n(t)).catch(t=>{this.error=t,e(t)}).finally(()=>{this.loading=!1})})},updateAppealApplication(a,n){return this.loading=!0,new Promise((e,t)=>{p.post("dashboard/client/application/"+a+"?_method=PUT",n,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>e(i)).catch(i=>{this.error=i,t(i)}).finally(()=>{this.loading=!1})})},deleteAppealApplication(a){return this.loading=!0,new Promise((n,e)=>{p.delete("dashboard/client/application/"+a).then(t=>n(t)).catch(t=>{this.error=t,e(t)}).finally(()=>{this.loading=!1})})}}});export{r as u};
