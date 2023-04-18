import{bb as l}from"./index.d0376abb.js";import{a as i}from"./axios.956cc88e.js";const u=l("QuestionStore",{state:()=>({pagination:{meta:{}},filter:{},questions:[],question:{title_uz:null,title_ru:null,title_en:null,prompt_uz:"",prompt_ru:"",prompt_en:"",is_multiple:0,question_type:"",category_id:null,status:1,order:null},loading:!1,error:"",questionAnswer:{title_uz:null,title_ru:null,title_en:null,description_uz:null,description_ru:null,description_en:null,content_uz:null,content_ru:null,content_en:null,parent_id:null,status:1,order:null},questionAnswers:[],answerPagination:{meta:{}},answerLoading:!1}),actions:{fetchQuestions(s){return this.loading=!0,s={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...s},new Promise((n,t)=>{i.get("/dashboard/assessment/sea-question",{params:s}).then(e=>{this.questions=e.data.result,this.pagination.meta=e.data.result.meta,n(e)}).catch(e=>{this.error=e,t(e)}).finally(()=>{this.loading=!1})})},fetchQuestion(s){return new Promise((a,n)=>{i.get(`/dashboard/assessment/sea-question/${s}`).then(t=>{this.question=t.data.result,a(t.data.result)}).catch(t=>{this.error=t,n(t)}).finally(()=>{this.loading=!1})})},fetchQuestionAnswer(s){return new Promise((a,n)=>{i.get(`/dashboard/assessment/sea-question/${s}`).then(t=>{this.categoryGroupChild=t.data.result,a(t.data.result)}).catch(t=>{this.error=t,n(t)}).finally(()=>{this.loading=!1})})},fetchQuestionAnswers(s){return this.childrenLoading=!0,s={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...s},new Promise((n,t)=>{i.get("/dashboard/assessment/sea-question",{params:s}).then(e=>{this.questionAnswers=e.data.result,this.answerPagination.meta=e.data.result.meta,n(e)}).catch(e=>{this.error=e,t(e)}).finally(()=>{this.childrenLoading=!1})})},addQuestion(s){return this.loading=!0,new Promise((a,n)=>{i.post("/dashboard/assessment/sea-question",s).then(t=>a(t)).catch(t=>{this.error=t,n(t)}).finally(()=>{this.loading=!1})})},updateQuestion(s,a){return this.loading=!0,new Promise((n,t)=>{i.put("/dashboard/assessment/sea-question/"+s,a).then(e=>n(e)).catch(e=>{this.error=e,t(e)}).finally(()=>{this.loading=!1})})},deleteQuestion(s){return this.loading=!0,new Promise((a,n)=>{i.delete("/dashboard/assessment/sea-question/"+s).then(t=>a(t)).catch(t=>{this.error=t,n(t)}).finally(()=>{this.loading=!1})})}}});export{u};
