import{o as s,c as p,F as g,a as $,b as f,e as w,_ as b,f as k,g as C,i as N,j as S,k as V,l as z,m as t,n as u,p as o,q as e,s as v,t as L,w as r,V as R,v as h,x as I,T as x,r as y}from"./index.ccf75e8b.js";import B from"./Footer.3ba55fe7.js";import E from"./NavbarThemeSwitcher.de3b5b1e.js";import H from"./UserProfile.cd3bce0d.js";import{V as T}from"./VSpacer.3dae3a1a.js";import"./VBtn.51511430.js";import"./VBadge.04b4aff2.js";import"./VMenu.55dc8cad.js";import"./dialog-transition.bc738bac.js";import"./VList.195d91c9.js";import"./index.d79d6c26.js";import"./VDivider.82c53423.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(m){const l=i=>"children"in i?b:k;return(i,d)=>(s(),p("ul",W,[(s(!0),p(g,null,$(m.navItems,(a,c)=>(s(),f(w(l(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},P={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(m){const{y:l}=C(),{width:i}=N(),d=S(),a=V(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=z();return(n,O)=>(s(),p("div",{class:v(["layout-wrapper",e(c)(e(i),e(l))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",D,[t("div",F,[u(n.$slots,"navbar")])]),t("div",j,[t("div",P,[o(e(q),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),t("main",Y,[n.$slots["content-loading"]?(s(),p(g,{key:0},[e(a)?u(n.$slots,"content-loading",{key:0}):u(n.$slots,"default",{key:1})],64)):u(n.$slots,"default",{key:1})]),t("footer",A,[t("div",G,[u(n.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],M={class:"app-title font-weight-bold leading-normal text-xl"},ie={__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:l}=L();return(i,d)=>{const a=y("RouterLink"),c=y("RouterView");return s(),f(e(J),{"nav-items":e(K)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(e(R),{nodes:e(h).app.logo},null,8,["nodes"]),t("h1",M,I(e(h).app.title),1)]),_:1}),o(T),o(E,{class:"me-2"}),o(H)]),footer:r(()=>[o(B)]),default:r(()=>[o(c,null,{default:r(({Component:_,route:n})=>[o(x,{name:e(l),mode:"out-in"},{default:r(()=>[(s(),f(w(_),{key:n.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{ie as default};