import{I as u,J as g,K as m,p as a,L as N,M as y,N as _,O as h,P,Q as L,R as r,S as T,U as A,W as I,X as R,Y as w,Z as X,$ as Y,a0 as M,a1 as D,a2 as c,A as J}from"./index.d0376abb.js";const O=u({name:"VListItemAction",props:{start:Boolean,end:Boolean,...g()},setup(e,t){let{slots:i}=t;return m(()=>a(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end}]},i)),{}}});const Q=u({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:N,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...y({location:"top end"}),..._(),...g(),...h(),...P({transition:"scale-rotate-transition"})},setup(e,t){const{backgroundColorClasses:i,backgroundColorStyles:b}=L(r(e,"color")),{roundedClasses:v}=T(e),{t:f}=A(),{textColorClasses:C,textColorStyles:S}=I(r(e,"textColor")),{themeClasses:x}=R(),{locationStyles:B}=w(e,!0,o=>{var n,l;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+((n=e.offsetY)!=null?n:0):["left","right"].includes(o)?+((l=e.offsetX)!=null?l:0):0)});return m(()=>{var o,d,n,l;const s=Number(e.content),V=!e.max||isNaN(s)?e.content:s<=e.max?s:`${e.max}+`,[$,k]=X(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,c({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[a("div",{class:"v-badge__wrapper"},[(o=(d=t.slots).default)==null?void 0:o.call(d),a(Y,{transition:e.transition},{default:()=>[M(a("span",c({class:["v-badge__badge",x.value,i.value,v.value,C.value],style:[b.value,S.value,e.inline?{}:B.value],"aria-atomic":"true","aria-label":f(e.label,s),"aria-live":"polite",role:"status"},$),[e.dot?void 0:t.slots.badge?(n=(l=t.slots).badge)==null?void 0:n.call(l):e.icon?a(J,{icon:e.icon},null):V]),[[D,e.modelValue]])]})])]})}),{}}});export{Q as V,O as a};