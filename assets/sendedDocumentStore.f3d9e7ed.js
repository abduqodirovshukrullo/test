import{bb as o}from"./index.d0376abb.js";import{a as i}from"./axios.956cc88e.js";const l=o("SendedDocumentStore",{state:()=>({pagination:{meta:{}},filter:{},documents:[],document:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:"",content_uz:"",content_ru:"",content_en:"",parent_id:null,status:1,order:null},loading:!1,error:""}),actions:{fetchSendedDocuments(t){return this.loading=!0,t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((a,e)=>{i.get("dashboard/client/sended-document",{params:t}).then(n=>{this.documents=n.data.result,this.pagination.meta=n.data.result.meta,a(n)}).catch(n=>{this.error=n,e(n)}).finally(()=>{this.loading=!1})})},fetchSendedDocument(t){return new Promise((d,a)=>{i.get(`/dashboard/client/sended-document/${t}`).then(e=>{this.appealInspector=e.data.result,d(e.data.result)}).catch(e=>{this.error=e,a(e)}).finally(()=>{this.loading=!1})})},addSendedDocument(t){return this.loading=!0,new Promise((d,a)=>{i.post("/dashboard/client/sended-document",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>d(e)).catch(e=>{this.error=e,a(e)}).finally(()=>{this.loading=!1})})},updateSendedDocument(t,d){return this.loading=!0,new Promise((a,e)=>{i.post("/dashboard/client/sended-document/"+t+"?_method=PUT",d,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>a(n)).catch(n=>{this.error=n,e(n)}).finally(()=>{this.loading=!1})})},deleteSendedDocument(t){return this.loading=!0,new Promise((d,a)=>{i.delete("/dashboard/client/sended-document/"+t).then(e=>d(e)).catch(e=>{this.error=e,a(e)}).finally(()=>{this.loading=!1})})}}});export{l as u};
