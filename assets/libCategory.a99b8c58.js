import{bb as o}from"./index.ff6dd18a.js";import{a as r}from"./axios.544a54a6.js";const n=o("LibCategory",{state:()=>({pagination:{meta:{}},filter:{},libCategories:[],libCategory:{title_uz:"",title_en:"",title_ru:"",lib_category_group_id:"",core_library_tags:{employer:[],employee:[]},image_file:[],status:1,order:""},loading:!1,error:""}),actions:{fetchLibCategories(e){return this.loading=!0,e.getAll?e={...e}:e={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...e},new Promise((i,a)=>{r.get("/dashboard/library/lib-category",{params:e}).then(t=>{this.libCategories=t.data.result,e.getAll||(this.pagination.meta=t.data.result.meta),i(t)}).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})},fetchLibCategory(e){return new Promise((i,a)=>{r.get(`/dashboard/library/lib-category/${e}`).then(t=>{this.libCategory=t.data.result,i(t.data.result)}).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})},addLibCategory(e){return this.loading=!0,new Promise((i,a)=>{r.post("/dashboard/library/lib-category",e).then(t=>i(t)).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})},updateLibCategory(e,i){return this.loading=!0,new Promise((a,t)=>{r.post("/dashboard/library/lib-category/"+e+"?_method=PUT",i).then(l=>a(l)).catch(l=>{this.error=l,t(l)}).finally(()=>{this.loading=!1})})},deleteLibCategory(e){return this.loading=!0,new Promise((i,a)=>{r.delete("/dashboard/library/lib-category/"+e).then(t=>i(t)).catch(t=>{this.error=t,a(t)}).finally(()=>{this.loading=!1})})}}});export{n as u};
