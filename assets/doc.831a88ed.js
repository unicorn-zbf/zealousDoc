import{i,r as _,f as r,E as V,c as h,b as e,F as v,a as l,z as w}from"./index.bca9d398.js";import{p}from"./preview.f85a12ac.js";import"./bus.386a0429.js";/* empty css                                                                */const x={__name:"demo1",setup(u){const t=i(!0);return(n,o)=>{const d=_("z-switch");return r(),V(d,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s)},null,8,["modelValue"])}}},b={__name:"demo2",setup(u){const t=i(!0),n=i(!1);return(o,d)=>{const s=_("z-switch");return r(),h(v,null,[e(s,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=a=>t.value=a),disabled:""},null,8,["modelValue"]),e(s,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=a=>n.value=a),disabled:"",class:"pl-10"},null,8,["modelValue"])],64)}}},f={__name:"demo3",setup(u){const t=i(!0),n=i(!0),o=i(!0),d=i(!0);return(s,a)=>{const m=_("z-switch");return r(),h(v,null,[e(m,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c),"active-text":"\u542F\u7528","inactive-text":"\u505C\u7528"},null,8,["modelValue"]),e(m,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c),"active-text":"\u542F\u7528","inactive-text":"\u505C\u7528","active-color":"#13ce66","inactive-color":"#ff4949",style:{display:"block","margin-top":"10px"}},null,8,["modelValue"]),e(m,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=c=>o.value=c),"inline-prompt":"","active-text":"\u5F00","inactive-text":"\u5173",style:{display:"block","margin-top":"10px"}},null,8,["modelValue"]),e(m,{modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=c=>d.value=c),"inline-prompt":"","active-text":"\u5F00","inactive-text":"\u5173","active-color":"#13ce66","inactive-color":"#ff4949",style:{display:"block","margin-top":"10px"}},null,8,["modelValue"])],64)}}},g={__name:"demo4",setup(u){const t=i(!0);return(n,o)=>{const d=_("z-switch");return r(),h(v,null,[e(d,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),size:"large","active-text":"\u542F\u7528","inactive-text":"\u505C\u7528"},null,8,["modelValue"]),e(d,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value=s),"active-text":"\u542F\u7528","inactive-text":"\u505C\u7528",style:{display:"block","margin-top":"10px"}},null,8,["modelValue"]),e(d,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=s=>t.value=s),size:"small","active-text":"\u542F\u7528","inactive-text":"\u505C\u7528",style:{display:"block","margin-top":"10px"}},null,8,["modelValue"])],64)}}},y={class:"markdown-body"},z=l("h1",null,"Switch \u5F00\u5173",-1),N=l("h4",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D",-1),U=l("br",null,null,-1),k=l("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),B=l("p",null,"\u7ED1\u5B9Av-model\u5230\u4E00\u4E2ABoolean\u7C7B\u578B\u7684\u53D8\u91CF",-1),C={class:"source"},E=l("h2",null,"\u7981\u7528\u72B6\u6001",-1),F=l("p",null,"\u8BBE\u7F6Edisabled\u5C5E\u6027\uFF0C\u63A5\u53D7\u4E00\u4E2ABoolean\uFF0C\u8BBE\u7F6Etrue\u5373\u53EF\u7981\u7528",-1),$={class:"source"},A=l("h2",null,"\u6587\u5B57\u63CF\u8FF0",-1),S=l("p",null,"\u4F7F\u7528active-text\u5C5E\u6027\u4E0Einactive-text\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u6587\u5B57\u63CF\u8FF0\uFF0C\u4F7F\u7528active-color\u5C5E\u6027\u4E0Einactive-color\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272",-1),D={class:"source"},j=l("h2",null,"\u5C3A\u5BF8\u5927\u5C0F",-1),q=l("p",null,"\u4F7F\u7528 size \u5C5E\u6027\u6539\u53D8\u5C3A\u5BF8\u5927\u5C0F\u3002 \u9664\u4E86\u9ED8\u8BA4\u5927\u5C0F\u5916\uFF0C\u8FD8\u6709\u53E6\u5916\u4E24\u4E2A\u9009\u9879\uFF1A large, small",-1),G={class:"source"},H=w("<h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>boolean</td><td>true / false</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>active-text</td><td>switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inactive-text</td><td>switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>active-color</td><td>switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>#C0CCDA</td></tr><tr><td>size</td><td>switch \u7684\u5927\u5C0F</td><td>string</td><td>large / default / small</td><td>\u2014</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>\u65B0\u72B6\u6001\u7684\u503C</td></tr></tbody></table><br>",6),M={__name:"doc",setup(u,{expose:t}){return t({frontmatter:{}}),(o,d)=>(r(),h("div",y,[z,N,U,k,B,l("div",C,[e(x)]),e(p,{compName:"switch",demoName:"demo1"}),E,F,l("div",$,[e(b)]),e(p,{compName:"switch",demoName:"demo2"}),A,S,l("div",D,[e(f)]),e(p,{compName:"switch",demoName:"demo3"}),j,q,l("div",G,[e(g)]),e(p,{compName:"switch",demoName:"demo4"}),H]))}};export{M as default};
