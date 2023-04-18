import{I as A,aG as K,J as P,O as B,ar as _,at as G,aC as N,R as C,K as O,p as l,ak as J,L as k,am as M,an as X,ap as j,N as H,aq as Q,aK as U,au as W,av as Y,aw as Z,ay as ee,S as ae,aL as le,a6 as te,as as se,a0 as I,az as ne,aA as ie,ae as u,A as d,a1 as oe,G as S}from"./index.d0376abb.js";import{m as ue,u as de,a as ce,b as re}from"./VBtn.88bd5865.js";import{a as ve}from"./index.852e8fad.js";const x=Symbol.for("vuetify:v-chip-group");A({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:K},...ue({selectedClass:"v-chip--selected"}),...P(),...B(),..._({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:r}=G(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=de(e,x);return N({VChip:{color:C(e,"color"),filter:C(e,"filter"),variant:C(e,"variant")}}),O(()=>{var n;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(n=s.default)==null?void 0:n.call(s,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const he=A({name:"VChip",directives:{Ripple:J},props:{activeClass:String,appendAvatar:String,appendIcon:k,closable:Boolean,closeIcon:{type:k,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:k,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...M(),...X(),...j(),...ce(),...H(),...Q(),...U(),...P({tag:"span"}),...B(),..._({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:s,emit:r,slots:t}=c;const{borderClasses:v}=W(e),{colorClasses:f,colorStyles:p,variantClasses:m}=Y(e),{densityClasses:n}=Z(e),{elevationClasses:R}=ee(e),{roundedClasses:D}=ae(e),{sizeClasses:$}=le(e),{themeClasses:z}=G(e),g=te(e,"modelValue"),a=re(e,x,!1),h=se(e,s);function L(i){g.value=!1,r("click:close",i)}return()=>{var i;const T=h.isLink.value?"a":e.tag,E=!!(t.append||e.appendIcon||e.appendAvatar),w=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,F=!!(t.prepend||e.prependIcon||e.prependAvatar),b=!a||a.isSelected.value,o=!e.disabled&&(!!a||h.isClickable.value||e.link),q=e.link?e.link:a==null?void 0:a.toggle;return g.value&&I(l(T,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":o,"v-chip--filter":V,"v-chip--pill":e.pill},z.value,v.value,b?f.value:void 0,n.value,R.value,D.value,$.value,m.value,a==null?void 0:a.selectedClass.value],style:[b?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:o&&q},{default:()=>{var y;return[ie(o,"v-chip"),V&&l(u,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(ve,null,{default:()=>[I(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(d,null,null)]),[[oe,a.isSelected.value]])]})]}),F&&l(u,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(d,{start:!0},null):void 0]}),(y=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?y:e.text,E&&l(u,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(d,{end:!0},null):void 0]}),w&&l(u,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:L},[t.close?t.close():l(d,null,null)])]})]}}),[[ne("ripple"),o&&e.ripple,null]])}}});export{he as V};
