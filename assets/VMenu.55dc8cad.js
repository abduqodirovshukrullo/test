import{a3 as y,a4 as C,a5 as S,a6 as D,a7 as M,a8 as O,a9 as b,k as h,aa as w,ab as v,ac as x,D as $,K as k,ad as A,p as m,ae as I,a2 as p,af as R,ag as T}from"./index.ccf75e8b.js";import{V as U}from"./dialog-transition.bc738bac.js";const N=y()({name:"VMenu",props:{id:String,...C(S({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,f){let{slots:r}=f;const t=D(a,"modelValue"),{scopeId:V}=M(),g=O(),i=b(()=>a.id||`v-menu-${g}`),u=h(),e=w(v,null);let n=0;x(v,{register(){++n},unregister(){--n},closeParents(){setTimeout(()=>{n||(t.value=!1,e==null||e.closeParents())},40)}}),$(t,l=>{l?e==null||e.register():e==null||e.unregister()});function P(){e==null||e.closeParents()}return k(()=>{const[l]=A(a);return m(R,p({ref:u,class:["v-menu"]},l,{modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,absolute:!0,activatorProps:p({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":i.value},a.activatorProps),"onClick:outside":P},V),{activator:r.activator,default:function(){for(var o,c=arguments.length,d=new Array(c),s=0;s<c;s++)d[s]=arguments[s];return m(I,{root:!0},{default:()=>[(o=r.default)==null?void 0:o.call(r,...d)]})}})}),T({id:i},u)}});export{N as V};
