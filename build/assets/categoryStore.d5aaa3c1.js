import{bb as r}from"./main.28eac655.js";import{a as s}from"./axios.8204d459.js";const l=r("CategoryStore",{state:()=>({pagination:{meta:{}},filter:{},categories:[],category:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:"",content_uz:"",content_ru:"",content_en:"",parent_id:null,status:1,order:null},loading:!1,error:"",categoryChild:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:"",content_uz:"",content_ru:"",content_en:"",parent_id:null,status:1,order:null},categoryChildren:[],childrenPagination:{meta:{}},childrenLoading:!1}),getters:{getCategoryList(e){return e.categories}},actions:{fetchCategoryChild(e){return new Promise((n,i)=>{s.get(`/dashboard/assessment/sea-category/${e}`).then(t=>{this.categoryChild=t.data.result,n(t.data.result)}).catch(t=>{this.error=t,i(t)}).finally(()=>{this.loading=!1})})},fetchCategoryChildren(e){return this.childrenLoading=!0,e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((i,t)=>{s.get("/dashboard/assessment/sea-category",{params:e}).then(a=>{this.categoryChildren=a.data.result,this.childrenPagination.meta=a.data.result.meta,i(a)}).catch(a=>{this.error=a,t(a)}).finally(()=>{this.childrenLoading=!1})})},fetchCategories(e){return this.loading=!0,e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((i,t)=>{s.get("/dashboard/assessment/sea-category",{params:e}).then(a=>{this.categories=a.data.result,this.pagination.meta=a.data.result.meta,i(a)}).catch(a=>{this.error=a,t(a)}).finally(()=>{this.loading=!1})})},async deleteCategory(e){return this.loading=!0,new Promise((n,i)=>{s.delete(`/dashboard/assessment/sea-category/${e}`).then(t=>n(t)).catch(t=>{this.error=t,i(t)}).finally(()=>{this.loading=!1})})},addCategory(e){return this.loading=!0,new Promise((n,i)=>{s.post("/dashboard/assessment/sea-category",e).then(t=>n(t)).catch(t=>{this.error=t,i(t)}).finally(()=>{this.loading=!1})})},updateCategory(e,n){return this.loading=!0,new Promise((i,t)=>{s.put(`/dashboard/assessment/sea-category/${e}`,n).then(a=>i(a)).catch(a=>{this.error=a,t(a)}).finally(()=>{this.loading=!1})})},fetchCategory(e){return new Promise((n,i)=>{s.get(`/dashboard/assessment/sea-category/${e}`).then(t=>{this.category=t.data.result,n(t.data.result)}).catch(t=>{this.error=t,i(t)}).finally(()=>{this.loading=!1})})}}});export{l as u};