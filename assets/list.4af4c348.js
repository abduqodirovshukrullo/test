import{bc as x,k as b,o as S,c as k,m as s,p as a,w as o,z as V,A as z,q as c,bO as C,j as $}from"./index.ccf75e8b.js";import{u as l}from"./scenarioStore.688aba59.js";import{_ as B}from"./DataTable.632e8001.js";import{V as p}from"./VBtn.51511430.js";import"./axios.6988005b.js";import"./VRow.126a71fb.js";import"./VDivider.82c53423.js";const R={class:"d-flex align-center justify-end"},T={class:"misc-wrapper"},w={class:"misc-center-content text-center mb-4"},L={__name:"list",setup(A){const{createScenarioStart:m,listScenario:r}=l(),{scenarioList:d,loading:u,pagination:_}=x(l()),t=C(),n=$(),g={title:"Steps",headers:["step","name","actions"],filter:{title_uz:{model:"title_uz",type:"text",value:"Query"},status:{model:"status",type:"select",value:["Active","Inactive"]}}};b({filter:{}}),r({category_id:t.params.category});const f=()=>{const e={category_id:t.params.category,step:1};m(e).then(i=>{i.success&&n.push({path:`/assessment/category/${t.params.category}/scenario/1/step`})})},y=()=>{r({category_id:t.params.category})},h=e=>{n.push({path:`/assessment/category/${t.params.category}/scenario/${e.step}/step`})};return(e,i)=>(S(),k("section",null,[s("div",R,[s("div",T,[s("div",w,[a(p,{color:"success",onClick:f},{default:o(()=>[V("START")]),_:1})])])]),a(B,{onPageChanged:y,body:{data:c(d).data,pagination:c(_)},loading:c(u),tableData:g},{actions:o(v=>[a(p,{onClick:N=>h({step:v.item.step}),icon:"",size:"x-small",color:"default",variant:"text"},{default:o(()=>[a(z,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])]),_:1},8,["body","loading"])]))}};export{L as default};