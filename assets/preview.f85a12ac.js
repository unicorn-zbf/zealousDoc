import{d as _,i as n,A as f,o as v,f as r,c,b as g,w as C,q as w,g as i,a as o,y as l,B as x,T as N,x as y,s as E,C as k,h as B}from"./index.bca9d398.js";import{e as S}from"./bus.386a0429.js";/* empty css                                                                */const V={class:"pre-code-box"},q={key:0,class:"language-html"},D={class:"language-html"},T=_({__name:"preview",props:{compName:{type:String,default:"",required:!0},demoName:{type:String,default:"",required:!0}},setup(u){const t=u,e=n(!1),a=n(""),d=f(()=>["iconfont",e.value?"icon-arrow-up-filling":"icon-arrow-down-filling"]),p=()=>{S.emit("previewChange","ok"),e.value=!e.value},m=async()=>{a.value=await fetch(`./components/${t.compName}/doc/${t.demoName}.vue`).then(s=>s.text())};return v(()=>{m()}),(s,b)=>{const h=k("highlight");return r(),c("div",V,[g(N,{name:"slide-fade"},{default:C(()=>[e.value?w((r(),c("pre",q,[i("        "),o("code",D,l(a.value),1),i(`
      `)])),[[h]]):x("",!0)]),_:1}),o("div",{class:"showCode",onClick:p},[o("i",{class:y(E(d))},null,2),o("span",null,l(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)])])}}}),F=B(T,[["__scopeId","data-v-3fd97de5"]]);export{F as p};
