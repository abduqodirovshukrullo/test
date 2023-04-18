import{bb as V,bc as S,k as n,o as u,c as p,p as c,w as o,x as I,a$ as z,b as g,z as _,A as B,q as h}from"./index.68ab1696.js";import{_ as F}from"./DataTable.529efa2b.js";import{a as l}from"./axios.3a2e37fd.js";import{V as U}from"./VChip.685dc12f.js";import{V as $}from"./VBtn.e44a7ff0.js";import"./VRow.b4ec55e0.js";import"./VDivider.db684b17.js";import"./index.58b926c8.js";const y=V("UserUserStore",{state:()=>({pagination:{meta:{}},filter:{},users:[],user:{user_info:{},user_company:{},inspector:{}},loading:!1,error:""}),actions:{fetchUsers(t){return this.loading=!0,t={...{page:this.pagination.meta.current_page,per_page:this.pagination.meta.per_page},...t},new Promise((r,e)=>{l.get("/dashboard/user/users",{params:t}).then(s=>{this.users=s.data.result,this.pagination.meta=s.data.result.meta,r(s)}).catch(s=>{this.error=s,e(s)}).finally(()=>{this.loading=!1})})},fetchUserShow(t){return new Promise((a,r)=>{l.get(`/dashboard/user/users/${t}`).then(e=>{this.user=e.data.result,a(e.data.result)}).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})},addUser(t){return this.loading=!0,new Promise((a,r)=>{l.post("/dashboard/user/users",t).then(e=>a(e)).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})},updateUser(t,a){return this.loading=!0,new Promise((r,e)=>{l.post("/dashboard/user/users/"+t+"?_method=PUT",a).then(s=>r(s)).catch(s=>{this.error=s,e(s)}).finally(()=>{this.loading=!1})})},deleteUser(t){return this.loading=!0,new Promise((a,r)=>{l.delete("/dashboard/user/users/"+t).then(e=>a(e)).catch(e=>{this.error=e,r(e)}).finally(()=>{this.loading=!1})})}}}),A={key:0},K={__name:"list",setup(t){const{users:a,user:r,loading:e,error:s,pagination:b}=S(y()),{fetchUsers:f,addUser:D,fetchUserShow:v,updateUser:N,deleteUsers:O}=y(),k={title:"System Users",headers:["id","full_name","pin","status","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};n(!1);const w=n(!1);n(!1),n(null);const m=n({filter:{}});f(m.value);const x=()=>{f(m.value)},C=d=>{v(d.userId).then(P=>{w.value=d.isUpdateFormOpened})};return(d,P)=>(u(),p("section",null,[c(F,{onPageChanged:x,body:{data:h(a).data,pagination:h(b)},loading:h(e),tableData:k},{full_name:o(i=>[i.item.user_info?(u(),p("p",A,I(i.item.user_info.first_name+" "+i.item.user_info.sur_name),1)):z("",!0)]),status:o(i=>[i.item.status===1?(u(),g(U,{key:0,color:"success"},{default:o(()=>[_(" Active ")]),_:1})):(u(),g(U,{key:1,color:"error"},{default:o(()=>[_(" Inactive ")]),_:1}))]),actions:o(i=>[c($,{onClick:T=>C({isUpdateFormOpened:!0,userId:i.item.id}),icon:"",size:"x-small",color:"default",variant:"text"},{default:o(()=>[c(B,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"])]))}};export{K as default};