import{d as A,j as v,k as D,m as g,l as H,o as N,n as S,q as R,c,a,F as k,s as I,t as $,v as b,b as j,p as z,f as P,g as r,x as C,u as G,r as J,i as K}from"./index.ef54648e.js";import{e as T}from"./bus.386a0429.js";const O=d=>(z("data-v-83770201"),d=d(),P(),d),Q={class:"main-container"},U={class:"sidebar",id:"sidebarScroll"},W={class:"title"},X=["onClick"],Y={class:"content-slidebar"},Z={class:"content-section"},ee=O(()=>a("p",{class:"content-title"},"\u5185\u5BB9\u5BFC\u822A",-1)),te=["onClick"],se={class:"desc"},oe=A({__name:"home",setup(d){var y;const w=G(),u=v(sessionStorage.getItem("mIndex")||"0"),m=v(!1),n=D({contentList:[],topList:[]}),p=v(null);v(null),n.contentList=(y=g[0].list[0])==null?void 0:y.content,H(()=>w.currentRoute.value,t=>{u.value=sessionStorage.getItem("mIndex"),S(()=>{var e;(e=document.querySelector(".sidebarLi.active"))==null||e.scrollIntoView({behavior:"auto",block:"center",inline:"nearest"}),_(0),h()})},{immediate:!0});const x=(t,e,s)=>{var o;u.value=e+"-"+s,console.log(u.value),n.contentList=(o=g[e].list[s])==null?void 0:o.content,w.push({path:t.path}),sessionStorage.setItem("mIndex",u.value)},_=t=>{let e=n.contentList;e&&e.forEach((s,o)=>{s.active=!1,o==t&&(s.active=!0)}),n.contentList=e},B=()=>{m.value=!0},E=()=>{m.value=!1},h=()=>{let t=document.querySelectorAll("h2"),e=[];t.forEach(s=>{e.push(s.offsetTop)}),n.topList=e};let f=!1;const M=t=>{var e;_(t),f=!0,(e=p.value)==null||e.scrollTo({top:n.topList[t]-70,left:0,behavior:"smooth"}),setTimeout(()=>{f=!1},500)},V=()=>{if(f)return;const t=p.value.scrollTop;for(let e=0;e<n.topList.length;e++)if(t>n.topList[e]-80&&t<=n.topList[e+1]-80){_(e);break}};let q=this;const F=(t,e)=>{let s=0;return function(){let o=q,l=arguments,i=new Date;i-s>e&&(s=i,t.apply(o,l))}};return N(()=>{S(()=>{h(),p.value.addEventListener("scroll",F(V,200))}),T.on("previewChange",t=>{console.log("erer",t),setTimeout(()=>{h()},500)})}),R(()=>{T.off("previewChange"),S(()=>{p.value.removeEventListener("scroll",()=>{})})}),(t,e)=>{const s=J("router-view");return r(),c("div",Q,[a("aside",{onMousemove:B,onMouseleave:E,class:b({"sidebar-scroll":m.value})},[a("div",U,[(r(!0),c(k,null,I($(g),(o,l)=>(r(),c("ul",{key:l},[a("p",W,C(o.name),1),(r(!0),c(k,null,I(o.list,(i,L)=>(r(),c("li",{class:b(["sidebarLi",{active:u.value==l+"-"+L}]),key:L,onClick:ne=>x(i,l,L)},C(i.name),11,X))),128))]))),128))])],34),a("main",{class:"app-main",ref_key:"mainScroll",ref:p},[j(s)],512),a("div",Y,[a("div",Z,[ee,(r(!0),c(k,null,I(n.contentList,(o,l)=>(r(),c("ul",{key:l},[a("p",{onClick:i=>M(l),class:b(["nav-title",{selected:o.active}])},[a("span",se,C(o.title),1)],10,te)]))),128))])])])}}});const ce=K(oe,[["__scopeId","data-v-83770201"]]);export{ce as default};
