import{bb as n}from"./index.d0376abb.js";import{a as o}from"./axios.956cc88e.js";const u=n("CategoryGroupStore",{state:()=>({pagination:{meta:{}},filter:{},categoryGroups:[],categoryGroup:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:"",content_uz:"",content_ru:"",content_en:"",parent_id:null,status:1,order:null},loading:!1,error:"",categoryGroupChild:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:"",content_uz:"",content_ru:"",content_en:"",parent_id:null,status:1,order:null},categoryGroupChildren:[],childrenPagination:{meta:{}},childrenLoading:!1}),getters:{getCategoryGroupList(e){return e.categoryGroups}},actions:{fetchCategoryGroupChild(e){return new Promise((i,r)=>{o.get(`/dashboard/assessment/sea-category-group/${e}`).then(t=>{this.categoryGroupChild=t.data.result,i(t.data.result)}).catch(t=>{this.error=t,r(t)}).finally(()=>{this.loading=!1})})},fetchCategoryGroupChildren(e){return this.childrenLoading=!0,e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((r,t)=>{o.get("/dashboard/assessment/sea-category-group",{params:e}).then(a=>{this.categoryGroupChildren=a.data.result,this.childrenPagination.meta=a.data.result.meta,r(a)}).catch(a=>{this.error=a,t(a)}).finally(()=>{this.childrenLoading=!1})})},fetchCategoryGroups(e){return this.loading=!0,e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((r,t)=>{o.get("/dashboard/assessment/sea-category-group",{params:e}).then(a=>{this.categoryGroups=a.data.result,this.pagination.meta=a.data.result.meta,r(a)}).catch(a=>{this.error=a,t(a)}).finally(()=>{this.loading=!1})})},async deleteCategoryGroup(e){return this.loading=!0,new Promise((i,r)=>{o.delete(`/dashboard/assessment/sea-category-group/${e}`).then(t=>i(t)).catch(t=>{this.error=t,r(t)}).finally(()=>{this.loading=!1})})},addCategoryGroup(e){return this.loading=!0,new Promise((i,r)=>{o.post("/dashboard/assessment/sea-category-group",e).then(t=>i(t)).catch(t=>{this.error=t,r(t)}).finally(()=>{this.loading=!1})})},updateCategoryGroup(e,i){return this.loading=!0,new Promise((r,t)=>{o.put(`/dashboard/assessment/sea-category-group/${e}`,i).then(a=>r(a)).catch(a=>{this.error=a,t(a)}).finally(()=>{this.loading=!1})})},fetchCategoryGroup(e){return new Promise((i,r)=>{o.get(`/dashboard/assessment/sea-category-group/${e}`).then(t=>{this.categoryGroup=t.data.result,i(t.data.result)}).catch(t=>{this.error=t,r(t)}).finally(()=>{this.loading=!1})})}}});export{u};
