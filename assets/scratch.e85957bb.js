import{y as oe,bc as ne,k as d,aE as R,o as u,b as p,w as l,p as e,b1 as f,bh as r,m,c as b,a as y,x as q,q as s,F as I,b7 as B,bj as ue,z as c,a$ as U,b2 as de,bO as ie,b9 as re,ba as ce,aP as fe}from"./index.68ab1696.js";import{u as $}from"./scenarioStore.dd8df4d9.js";import{a as n,V as v}from"./VRow.b4ec55e0.js";import{V}from"./VDivider.db684b17.js";import{a as F,b as me,c as _e,V as K}from"./VTabs.aefb49e4.js";import{V as j}from"./VSwitch.66e25904.js";import{V as A}from"./VCheckbox.8f543ab8.js";import{V as x}from"./VBtn.e44a7ff0.js";import{V as pe}from"./VForm.12cad806.js";import{V as ve}from"./VSelect.c51546ad.js";import"./axios.3a2e37fd.js";import"./ssrBoot.786f9135.js";import"./index.58b926c8.js";import"./VSelectionControl.703dbd90.js";import"./VInput.373f1fc9.js";import"./form.2a7f55dd.js";import"./VCheckboxBtn.f5ed4841.js";import"./VTextField.2a6d4579.js";import"./VList.b0e7618d.js";import"./dialog-transition.1e949d43.js";import"./VMenu.e6aa9dee.js";import"./VChip.685dc12f.js";const be=k=>(re("data-v-3926449f"),k=k(),ce(),k),Ve=["id"],xe=be(()=>m("div",{class:"d-flex justify-space-between"},[m("h6",{class:"text-base font-weight-semibold me-3"}," Qui dolor ducimus i ? ")],-1)),he={class:"d-flex justify-space-between"},ge={class:"font-weight-semibold me-3"},ye={class:"d-flex flex-row-reverse mb-6"},qe={class:"d-flex justify-end"},Ie={class:"d-flex justify-end"},ke={class:"text-center"},we={__name:"scratch",setup(k){const{fetchQuestions:M,fetchQuestion:O}=$(),{questions:w,question:S}=ne($()),h=d([]),J=d(!1),Q=d([]),z=d([]),Y=ie(),P=d(null);d(null);const C=R([]),i=R({order:1,questionId:null,questionTitle:"",isEnd:!1,scenarioIndex:""}),W=d(1);R({}),M({category_id:Y.params.category}).then(o=>{w.value.map(t=>t.title=t.id+". "+t.title_en),P.value=w.value[0].id,G(P.value)});const G=o=>{const t=document.getElementById("question"+o);return t.classList.add("bg-light-info"),t.scrollIntoView(),t.style.border="2px solid #7367f0",O(o).then(a=>{Q.value=w.value})},H=o=>Q.value.filter(t=>t.id===o)[0],L=d([]),X=o=>{const t=h.value.sort().toString();J.value=!L.value.includes(t)&&t!==""},Z=()=>{const o=h.value.sort().toString();L.value.includes(o)||(i.scenarioIndex=o,L.value.push(o),C.push({name:i.isEnd,question_id:i.questionId,scenario_index:i.scenarioIndex,order:1}),z.value.push(i.questionId),J.value=!1,i.questionId=null,ee())},ee=()=>{z.value.forEach(o=>{const t=document.getElementById("question"+o);t.classList.add("bg-light-warning"),t.style.border="2px solid #7367f0"})},le=o=>{const t=C.findIndex(a=>a.scenario_index===o);C.splice(t,1)},_=d(0),T=d(0),N=d(0),E=["Next question 1","Next question 2","Next question 3","Next question 4"],D=d(2),te=()=>{_.value!==1&&(_.value-=1)},ae=()=>{_.value!==D&&(_.value+=1),D.value+=1;const o=document.getElementById(19);o.classList.add("bg-light-info"),o.scrollIntoView()},se=o=>{fe(()=>{{T.value=N.value;const t=document.getElementById(9);t.classList.add("bg-light-info"),t.scrollIntoView()}})};return(o,t)=>(u(),p(v,null,{default:l(()=>[e(n,{cols:"3",class:"overflow-auto"},{default:l(()=>[e(f,null,{default:l(()=>[e(r,{style:{height:"80vh"},class:"overflow-auto"},{default:l(()=>[m("ol",null,[(u(!0),b(I,null,y(s(w),(a,g,Se)=>(u(),b("li",{style:{"border-radius":"5px"},class:"my-2 pa-2",id:"question"+a.id},q(a.id+". "+a.title_en),9,Ve))),256))])]),_:1})]),_:1})]),_:1}),e(V,{vertical:""}),s(S)!==null?(u(),p(n,{key:0,cols:"9"},{default:l(()=>[e(K,{modelValue:s(_),"onUpdate:modelValue":t[5]||(t[5]=a=>B(_)?_.value=a:null)},{default:l(()=>[e(F,{value:2},{default:l(()=>[e(f,{title:"Step 2",class:"bg-light-primary",variant:"text"},{default:l(()=>[e(r,null,{default:l(()=>[e(v,null,{default:l(()=>[e(n,{cols:"3",class:"v-col-auto"},{default:l(()=>[e(me,{modelValue:s(N),"onUpdate:modelValue":t[0]||(t[0]=a=>B(N)?N.value=a:null),direction:"vertical",onClick:ue(se,["prevent"])},{default:l(()=>[(u(!0),b(I,null,y(E.length,a=>(u(),p(_e,{key:a,value:a},{default:l(()=>[c(q(E[a-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onClick"])]),_:1}),e(V,{vertical:""}),e(n,{cols:"9"},{default:l(()=>[e(K,{modelValue:s(T),"onUpdate:modelValue":t[1]||(t[1]=a=>B(T)?T.value=a:null)},{default:l(()=>[(u(!0),b(I,null,y(E.length,a=>(u(),p(F,{key:a,value:a},{default:l(()=>[e(f,{title:E[a-1],class:"bg-light-primary",variant:"text"},{append:l(()=>[e(j,{label:"end",value:1,color:"error"})]),default:l(()=>[e(r,null,{default:l(()=>[xe,e(V),e(A,{label:"John",value:"John"}),e(A,{label:"Jacob",color:"success",value:"Jacob"}),e(A,{label:"Johnson",color:"info",value:"Johnson"}),e(V),e(v,{class:"mt-4"},{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(f,{class:"bg-light-success",title:"All true"},{append:l(()=>[e(j,{label:"end",value:1,color:"error"})]),default:l(()=>[e(r,null,{default:l(()=>[c(" Next question 1 ")]),_:1})]),_:1})]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(f,{title:"All false"},{default:l(()=>[e(r,null,{default:l(()=>[c(" Next question 2 ")]),_:1})]),_:1})]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(f,{title:"Default"},{default:l(()=>[e(r,null,{default:l(()=>[c(" Next question 3 ")]),_:1})]),_:1})]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(f,{title:"Default"},{default:l(()=>[e(r,null,{default:l(()=>[c(" Next question 4 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(F,{value:s(W)},{default:l(()=>[e(f,{title:"Step "+s(W),class:"bg-light-primary",variant:"text"},{default:l(()=>[e(r,null,{default:l(()=>[e(v,{class:"mb-1",justify:"space-between",align:"stretch","align-content":"space-between"},{default:l(()=>[e(n,null,{default:l(()=>[m("div",he,[m("h2",ge,q(s(S).title_en),1)])]),_:1}),e(n,{cols:"6"},{default:l(()=>[m("div",ye,[e(x,{class:"ma-2 h-4",color:"success"},{default:l(()=>[c(" Keyingisi ")]),_:1}),e(x,{class:"ma-2 h-4",color:"primary"},{default:l(()=>[c(" Yakunlash ")]),_:1})])]),_:1})]),_:1}),e(V),e(v,{class:"my-4"},{default:l(()=>[e(n,{cols:"5"},{default:l(()=>[(u(!0),b(I,null,y(s(S).answers,a=>(u(),p(v,null,{default:l(()=>[e(n,{cols:"1"},{default:l(()=>[s(S).type==="checkbox"?(u(),p(A,{key:0,onChange:X,modelValue:s(h),"onUpdate:modelValue":t[2]||(t[2]=g=>B(h)?h.value=g:null),value:a.id,class:"mb-2"},null,8,["modelValue","value"])):U("",!0)]),_:2},1024),e(n,null,{default:l(()=>[m("p",null,q(a.title_en),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(n,null,{default:l(()=>[s(J)?(u(),p(f,{key:0,title:"Select question"},{append:l(()=>[e(j,{modelValue:s(i).isEnd,"onUpdate:modelValue":t[3]||(t[3]=a=>s(i).isEnd=a),label:"end",value:"end",color:"error"},null,8,["modelValue"])]),default:l(()=>[e(r,null,{default:l(()=>[e(pe,null,{default:l(()=>[e(ve,{density:"comfortable",modelValue:s(i).questionId,"onUpdate:modelValue":t[4]||(t[4]=a=>s(i).questionId=a),items:s(Q),"item-title":"title","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(v,{class:"mt-4"},{default:l(()=>[e(n,null,{default:l(()=>[s(i).questionId!==null?(u(),p(x,{key:0,color:"primary",onClick:Z},{default:l(()=>[c(" Add ")]),_:1})):U("",!0)]),_:1})]),_:1})]),_:1})]),_:1})):U("",!0)]),_:1})]),_:1}),e(V),e(v,{class:"mt-4"},{default:l(()=>[(u(!0),b(I,null,y(s(C),a=>(u(),p(n,{cols:"4"},{default:l(()=>[e(f,{title:a.scenario_index},{append:l(()=>[e(j,{label:"end",modelValue:a.name,"onUpdate:modelValue":g=>a.name=g,value:"end",color:"error"},null,8,["modelValue","onUpdate:modelValue"])]),default:l(()=>[e(r,null,{default:l(()=>[c(q(H(a.question_id).title),1)]),_:2},1024),e(de,null,{default:l(()=>[e(r,null,{default:l(()=>[m("div",qe,[e(x,{onClick:g=>le(a.scenario_index),icon:"mdi-delete",size:"small",color:"error"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["value"]),m("div",Ie,[m("div",ke,[e(x,{variant:"text",disabled:s(_)===1,onClick:te},{default:l(()=>[c(" Previous ")]),_:1},8,["disabled"]),e(x,{variant:"text",disabled:s(_)===s(D),onClick:ae},{default:l(()=>[c(" Next ")]),_:1},8,["disabled"])])])]),_:1},8,["modelValue"])]),_:1})):U("",!0)]),_:1}))}},Ge=oe(we,[["__scopeId","data-v-3926449f"]]);export{Ge as default};
