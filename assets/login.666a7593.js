import{o as h,c as m,m as o,p as t,q as s,E as l,w as e,b2 as _,V as f,v as n,b3 as b,z as i,x as d,bh as r,bj as V,b1 as v,bs as c}from"./index.ff6dd18a.js";import{V as g}from"./VForm.5de4a92d.js";import{V as x,a as w}from"./VRow.6a3eb9e0.js";import{V as y}from"./VBtn.05c82630.js";import"./form.03636cd0.js";const k="/assets/auth-v1-bottom-shape.a51828f3.svg",C="/assets/auth-v1-top-shape.fe53cb96.svg";const B={class:"auth-wrapper d-flex align-center justify-center pa-4"},I={class:"position-relative my-sm-16"},N={class:"d-flex"},S={class:"text-h5 font-weight-semibold mb-1"},T=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),j={__name:"login",setup(z){const p="https://auth.mehnat.uz/oneid-details?redirect_url=https://online-inspektor.mehnat.uz/api/api/auth/one-id/details",u=()=>{window.location.href=p};return(A,a)=>(h(),m("div",B,[o("div",I,[t(l,{src:s(C),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),t(l,{src:s(k),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),t(v,{class:"auth-card pa-4","max-width":"448"},{default:e(()=>[t(_,{class:"justify-center"},{prepend:e(()=>[o("div",N,[t(s(f),{nodes:s(n).app.logo},null,8,["nodes"])])]),default:e(()=>[t(b,{class:"font-weight-bold text-h5 py-1"},{default:e(()=>[i(d(s(n).app.title),1)]),_:1})]),_:1}),t(r,{class:"pt-1"},{default:e(()=>[o("h5",S," Welcome to "+d(s(n).app.title)+"! \u{1F44B}\u{1F3FB} ",1),T]),_:1}),t(r,null,{default:e(()=>[t(g,{onSubmit:a[1]||(a[1]=V(()=>{},["prevent"]))},{default:e(()=>[t(x,null,{default:e(()=>[t(w,{cols:"12"},{default:e(()=>[t(y,{block:"",type:"submit",onClick:a[0]||(a[0]=E=>u())},{default:e(()=>[i(" Login One-Id ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]))}};typeof c=="function"&&c(j);export{j as default};
