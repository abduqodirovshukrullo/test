import{V as u}from"./VBtn.88bd5865.js";import{V as f,a as b}from"./VBadge.a5312c2e.js";import{o as i,b as m,w as e,p as t,A as h,z as _,x as l,a$ as g,c as n,F as v,a as V,G as N,q as x,m as A,a2 as k}from"./index.d0376abb.js";import{V as w}from"./VMenu.e1f3b74e.js";import{V as B,a as c}from"./VList.3972f313.js";import{V as C}from"./VChip.87002366.js";import{V as y}from"./VDivider.17d044d3.js";import"./dialog-transition.2174bb87.js";import"./index.852e8fad.js";const I=o=>o?o.split(" ").map(a=>a.charAt(0).toUpperCase()).join(""):"";const L={key:0},P={class:"whitespace-no-wrap text-medium-emphasis"},T={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["click:readAllNotifications"],setup(o,{emit:r}){const a=o;return(d,p)=>(i(),m(f,k({"model-value":!!a.badgeProps},a.badgeProps),{default:e(()=>[t(u,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(f,{"model-value":!!a.notifications.length,color:"error",content:"4"},{default:e(()=>[t(h,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),t(w,{activator:"parent",width:"380px",location:a.location,offset:"14px"},{default:e(()=>[t(B,{class:"py-0"},{default:e(()=>[t(c,{title:"Notifications",class:"notification-section",height:"48px"},{append:e(()=>[a.notifications.length?(i(),m(C,{key:0,color:"primary",size:"small"},{default:e(()=>[_(l(a.notifications.length)+" New ",1)]),_:1})):g("",!0)]),_:1}),t(y),(i(!0),n(v,null,V(a.notifications,s=>(i(),n(v,{key:s.title},[t(c,{title:s.title,subtitle:s.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:e(()=>[t(b,{start:""},{default:e(()=>[t(N,{color:s.color||"primary",image:s.img||void 0,icon:s.icon||void 0,size:"40",variant:"tonal"},{default:e(()=>[s.text?(i(),n("span",L,l(x(I)(s.text)),1)):g("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:e(()=>[A("small",P,l(s.time),1)]),_:2},1032,["title","subtitle"]),t(y)],64))),128)),t(c,{class:"notification-section"},{default:e(()=>[t(u,{block:"",onClick:p[0]||(p[0]=s=>d.$emit("click:readAllNotifications"))},{default:e(()=>[_(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}},z="/assets/avatar-3.47317f35.png",q="/assets/avatar-4.b0163f21.png",F="/assets/avatar-5.d340221a.png",$="/assets/paypal.01b645d1.svg",H={__name:"NavBarNotifications",setup(o){const r=[{img:q,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:F,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:$,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:z,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(a,d)=>(i(),m(T,{notifications:r}))}};export{H as default};
