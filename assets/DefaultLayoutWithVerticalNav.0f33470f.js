import{t as m,i as u,o as a,b as r,w as e,q as o,m as b,p as t,A as p,a$ as h,T as y,e as g,b0 as d,r as f}from"./index.ff6dd18a.js";import _ from"./Footer.91d234f1.js";import C from"./NavbarThemeSwitcher.b505f8ae.js";import v from"./UserProfile.8549a68b.js";import{V}from"./VBtn.05c82630.js";import{V as w}from"./VSpacer.9cd97db6.js";import"./VBadge.7740ddbc.js";import"./VMenu.901c1049.js";import"./dialog-transition.2a00a3c9.js";import"./VList.12bf040d.js";import"./index.f6fb5e9e.js";import"./VDivider.709f44be.js";const L=[{heading:"Assessment"},{title:"Category Group",to:"assessment-category-group-list",icon:{icon:"tabler-smart-home"}},{title:"Category",to:"assessment-category-list",icon:{icon:"tabler-smart-home"}},{title:"Question",to:"assessment-question-list",icon:{icon:"tabler-smart-home"}}],j=[{heading:"Core"},{title:"Core Library Tags",to:"core-core-library-tags-list",icon:{icon:"tabler-smart-home"}},{title:"Core Inspection Infos",to:"core-core-inspection-infos-list",icon:{icon:"tabler-smart-home"}},{title:"Core Inspector Infos",to:"core-core-inspector-infos-list",icon:{icon:"tabler-smart-home"}}],I=[{heading:"Library"},{title:"Library Category",to:"library-lib-category-list",icon:{icon:"tabler-smart-home"}},{title:"Library Category Group",to:"library-lib-category-group-list",icon:{icon:"tabler-smart-home"}},{title:"Library Category Group",to:"library-lib-category-item-list",icon:{icon:"tabler-smart-home"}},{title:"Library Category Item Value",to:"library-lib-category-item-value-list",icon:{icon:"tabler-smart-home"}},{title:"Library News",to:"library-lib-news-list",icon:{icon:"tabler-smart-home"}}],k=[{heading:"Users"},{title:"System Users",to:"system-users-list",icon:{icon:"tabler-users"}}],N=[{heading:"Client"},{title:"Application",to:"client-application-list",icon:{icon:"tabler-smart-home"}},{title:"Enroll",to:"client-enrol-list",icon:{icon:"tabler-smart-home"}},{title:"Forum",to:"client-forum-list",icon:{icon:"tabler-smart-home"}},{title:"Rate",to:"client-rate-inspector-list",icon:{icon:"tabler-smart-home"}},{title:"Documents",to:"client-sended-documents-list",icon:{icon:"tabler-smart-home"}}],T=[{heading:"User"},{title:"Application",to:"user-application-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Enrol",to:"user-enrol-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Rate",to:"user-rate-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Documents",to:"user-documents-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Company",to:"user-company-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Users",to:"user-users-list",icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"},{title:"Account",to:{name:"user-account-tab",params:{tab:"account"}},icon:{icon:"tabler-smart-home"},action:"manage",subject:"inspector"}],x=[...L,...j,...I,...k,...N,...T],A={class:"d-flex h-100 align-center"},K={__name:"DefaultLayoutWithVerticalNav",setup(B){const{appRouteTransition:s,isLessThanOverlayNavBreakpoint:n}=m(),{width:c}=u();return(R,$)=>{const l=f("RouterView");return a(),r(o(d),{"nav-items":o(x)},{navbar:e(({toggleVerticalOverlayNavActive:i})=>[b("div",A,[o(n)(o(c))?(a(),r(V,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:D=>i(!0)},{default:e(()=>[t(p,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):h("",!0),t(C),t(w),t(v)])]),footer:e(()=>[t(_)]),default:e(()=>[t(l,null,{default:e(({Component:i})=>[t(y,{name:o(s),mode:"out-in"},{default:e(()=>[(a(),r(g(i)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{K as default};