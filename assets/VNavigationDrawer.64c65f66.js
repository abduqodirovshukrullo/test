import{k as C,a9 as f,aD as H,aF as A,D as P,ai as F,bk as J,I as K,am as Q,ap as j,bl as G,N as ee,J as te,O as ae,be as ne,at as oe,au as le,Q as W,R as O,ay as ue,bm as ie,S as re,bn as se,a6 as ce,bo as ve,aP as de,bp as me,bq as he,aC as fe,K as ge,p as T,a2 as we,T as ye,F as be}from"./index.ff6dd18a.js";import{u as Se}from"./ssrBoot.051a63f0.js";function ke(e){let{rootEl:s,isSticky:c,layoutItemStyles:a}=e;const o=C(!1),t=C(0),d=f(()=>{const h=typeof o.value=="boolean"?"top":o.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[h]:H(t.value)}:{top:a.value.top}]});A(()=>{P(c,h=>{h?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),F(()=>{document.removeEventListener("scroll",k)});let g=0;function k(){var M;const h=g>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),m=parseFloat((M=a.value.top)!=null?M:0),v=window.scrollY-Math.max(0,t.value-m),u=l.height+Math.max(t.value,m)-window.scrollY-window.innerHeight;l.height<window.innerHeight-m?(o.value="top",t.value=m):h==="up"&&o.value==="bottom"||h==="down"&&o.value==="top"?(t.value=window.scrollY+l.top,o.value=!0):h==="down"&&u<=0?(t.value=0,o.value="bottom"):h==="up"&&v<=0&&(t.value=l.top+v,o.value="top"),g=window.scrollY}return{isStuck:o,stickyStyles:d}}const Ee=100,Te=20;function X(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const a=X(s),o=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(o-a)*Math.abs(o),c===e.length-1&&(s*=.5)}return X(s)*1e3}function Me(){const e={};function s(o){Array.from(o.changedTouches).forEach(t=>{var g;((g=e[t.identifier])!=null?g:e[t.identifier]=new J(Te)).push([o.timeStamp,t])})}function c(o){Array.from(o.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(o){var t;const d=(t=e[o])==null?void 0:t.values().reverse();if(!d)throw new Error(`No samples for touch id ${o}`);const g=d[0],k=[],h=[];for(const l of d){if(g[0]-l[0]>Ee)break;k.push({t:l[0],d:l[1].clientX}),h.push({t:l[0],d:l[1].clientY})}return{x:z(k),y:z(h),get direction(){const{x:l,y:m}=this,[v,u]=[Math.abs(l),Math.abs(m)];return v>u&&l>=0?"right":v>u&&l<=0?"left":u>v&&m>=0?"down":u>v&&m<=0?"up":xe()}}}return{addMovement:s,endTouch:c,getVelocity:a}}function xe(){throw new Error}function Be(e){let{isActive:s,isTemporary:c,width:a,touchless:o,position:t}=e;A(()=>{window.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})}),F(()=>{window.removeEventListener("touchstart",p),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",b)});const d=f(()=>t.value!=="bottom"),{addMovement:g,endTouch:k,getVelocity:h}=Me();let l=!1;const m=C(!1),v=C(0),u=C(0);let M;function R(n,i){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="bottom"?document.documentElement.clientHeight-n:V())-(i?a.value:0)}function x(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const r=t.value==="left"?(n-u.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-n-u.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-n-u.value)/a.value:V();return i?Math.max(0,Math.min(1,r)):r}function p(n){if(o.value)return;const i=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY,w=25,E=t.value==="left"?i<w:t.value==="right"?i>document.documentElement.clientWidth-w:t.value==="bottom"?r>document.documentElement.clientHeight-w:V(),y=s.value&&(t.value==="left"?i<a.value:t.value==="right"?i>document.documentElement.clientWidth-a.value:t.value==="bottom"?r>document.documentElement.clientHeight-a.value:V());(E||y||s.value&&c.value)&&(l=!0,M=[i,r],u.value=R(d.value?i:r,s.value),v.value=x(d.value?i:r),k(n),g(n))}function B(n){const i=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY;if(l){if(!n.cancelable){l=!1;return}const E=Math.abs(i-M[0]),y=Math.abs(r-M[1]);(d.value?E>y&&E>3:y>E&&y>3)?(m.value=!0,l=!1):(d.value?y:E)>3&&(l=!1)}if(!m.value)return;n.preventDefault(),g(n);const w=x(d.value?i:r,!1);v.value=Math.max(0,Math.min(1,w)),w>1?u.value=R(d.value?i:r,!0):w<0&&(u.value=R(d.value?i:r,!1))}function b(n){if(l=!1,!m.value)return;g(n),m.value=!1;const i=h(n.changedTouches[0].identifier),r=Math.abs(i.x),w=Math.abs(i.y);(d.value?r>w&&r>400:w>r&&w>3)?s.value=i.direction===({left:"right",right:"left",bottom:"up"}[t.value]||V()):s.value=v.value>.5}const _=f(()=>m.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*a.value}px))`:V(),transition:"none"}:void 0);return{isDragging:m,dragProgress:v,dragStyles:_}}function V(){throw new Error}const Ce=["start","end","left","right","bottom"],Ve=K({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ce.includes(e)},sticky:Boolean,...Q(),...j(),...G(),...ee(),...te({tag:"nav"}),...ae()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:c,slots:a}=s;const{isRtl:o}=ne(),{themeClasses:t}=oe(e),{borderClasses:d}=le(e),{backgroundColorClasses:g,backgroundColorStyles:k}=W(O(e,"color")),{elevationClasses:h}=ue(e),{mobile:l}=ie(),{roundedClasses:m}=re(e),v=se(),u=ce(e,"modelValue",null,S=>!!S),{ssrBootStyles:M}=Se(),R=C(),x=C(!1),p=f(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=f(()=>ve(e.location,o.value)),b=f(()=>!e.permanent&&(l.value||e.temporary)),_=f(()=>e.sticky&&!b.value&&B.value!=="bottom");e.disableResizeWatcher||P(b,S=>!e.permanent&&de(()=>u.value=!S)),!e.disableRouteWatcher&&v&&P(v.currentRoute,()=>b.value&&(u.value=!1)),P(()=>e.permanent,S=>{S&&(u.value=!0)}),me(()=>{e.modelValue!=null||b.value||(u.value=e.permanent||!l.value)});const{isDragging:n,dragProgress:i,dragStyles:r}=Be({isActive:u,isTemporary:b,width:p,touchless:O(e,"touchless"),position:B}),w=f(()=>{const S=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):p.value;return n.value?S*i.value:S}),{layoutItemStyles:E,layoutRect:y,layoutItemScrimStyles:Y}=he({id:e.name,order:f(()=>parseInt(e.order,10)),position:B,layoutSize:w,elementSize:p,active:f(()=>u.value||n.value),disableTransitions:f(()=>n.value),absolute:f(()=>e.absolute||_.value&&typeof L.value!="string")}),{isStuck:L,stickyStyles:q}=ke({rootEl:R,isSticky:_,layoutItemStyles:E}),N=W(f(()=>typeof e.scrim=="string"?e.scrim:null)),Z=f(()=>({...n.value?{opacity:i.value*.2,transition:"none"}:void 0,...y.value?{left:H(y.value.left),right:H(y.value.right),top:H(y.value.top),bottom:H(y.value.bottom)}:void 0,...Y.value}));return fe({VList:{bgColor:"transparent"}}),ge(()=>{var S,$,D,I;const U=a.image||e.image;return T(be,null,[T(e.tag,we({ref:R,onMouseenter:()=>x.value=!0,onMouseleave:()=>x.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--active":u.value,"v-navigation-drawer--sticky":_.value},t.value,g.value,d.value,h.value,m.value],style:[k.value,E.value,r.value,M.value,q.value]},c),{default:()=>[U&&T("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(S=a.image)==null?void 0:S.call(a,{image:e.image}):T("img",{src:e.image,alt:""},null)]),a.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[($=a.prepend)==null?void 0:$.call(a)]),T("div",{class:"v-navigation-drawer__content"},[(D=a.default)==null?void 0:D.call(a)]),a.append&&T("div",{class:"v-navigation-drawer__append"},[(I=a.append)==null?void 0:I.call(a)])]}),T(ye,{name:"fade-transition"},{default:()=>[b.value&&(n.value||u.value)&&!!e.scrim&&T("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Z.value,N.backgroundColorStyles.value],onClick:()=>u.value=!1},null)]})])}),{isStuck:L}}});export{Ve as V};
