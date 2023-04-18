import{y as S,d as x,t as A,k as l,aO as I,b6 as P,o as p,c as d,m as c,p as i,w as V,q as t,a$ as k,a2 as B,b7 as m,F as C,A as D,j as N,b8 as q,b9 as R,ba as T}from"./index.d0376abb.js";import{a as L}from"./axios.956cc88e.js";import{V as w}from"./VBtn.88bd5865.js";const b=n=>(R("data-v-b8f44e86"),n=n(),T(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},O=b(()=>c("span",{class:"me-3"},"Search",-1)),U=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),z=[O,U],$=x({inheritAttrs:!1}),j=Object.assign($,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=A(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=N();I(()=>{L.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=P(()=>q(()=>import("./AppBarSearch.3938aa9c.js"),["assets/AppBarSearch.3938aa9c.js","assets/index.d0376abb.js","assets/index.ef29d300.css","assets/VTextField.92856828.js","assets/index.852e8fad.js","assets/VInput.71e0e032.js","assets/form.af4ba2ee.js","assets/VInput.194111c3.css","assets/VTextField.c1f6729c.css","assets/VBtn.88bd5865.js","assets/VBtn.1958adaf.css","assets/VDivider.17d044d3.js","assets/VDivider.5d6d66e0.css","assets/VList.3972f313.js","assets/VList.f3553822.css","assets/VRow.3bbc78cc.js","assets/VRow.0b79ff68.css","assets/VDialog.7aee3e07.js","assets/dialog-transition.2174bb87.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.75477eb7.css"]));return(r,a)=>(p(),d(C,null,[c("div",B({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:a[0]||(a[0]=o=>e.value=!t(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:V(()=>[i(D,{icon:"tabler-search",size:"24"})]),_:1}),t(g)==="vertical"?(p(),d("span",E,z)):k("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=o=>m(e)?e.value=o:null),"search-query":t(s),"onUpdate:search-query":a[2]||(a[2]=o=>m(s)?s.value=o:null),"search-results":t(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),M=S(j,[["__scopeId","data-v-b8f44e86"]]);export{M as default};