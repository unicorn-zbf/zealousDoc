import{j as r,r as i,g as c,D as v,c as p,b as n,F as y,a as d,e as V}from"./index.cc6d267c.js";import{p as m}from"./preview.919f912a.js";import"./bus.386a0429.js";/* empty css                                                                */const f={__name:"demo1",setup(u){const o=r("2022-08-30"),s=l=>{console.log(l)};return(l,a)=>{const t=i("z-date-picker");return c(),v(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",onOnChange:s},null,8,["modelValue"])}}},k={__name:"demo2",setup(u){const o=r("2022-08-30");return(s,l)=>{const a=i("z-date-picker");return c(),v(a,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),format:"yyyy\u5E74MM\u6708dd\u65E5",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"])}}},g={__name:"demo3",setup(u){const o=r("2022-08-30");return(s,l)=>{const a=i("z-date-picker");return c(),v(a,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),disabled:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"])}}};const b={__name:"demo4",setup(u){const o=r([]),s=r([]);return(l,a)=>{const t=i("z-date-picker");return c(),p(y,null,[n(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),type:"daterange",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},null,8,["modelValue"]),n(t,{class:"date",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value=e),type:"daterange",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F","unlink-panels":""},null,8,["modelValue"])],64)}}};const x={__name:"demo5",setup(u){const o=r(),s=r([]),l=a=>{console.log(a)};return(a,t)=>{const e=i("z-date-picker");return c(),p(y,null,[n(e,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=_=>o.value=_),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",confirm:"",onOnConfirm:l},null,8,["modelValue"]),n(e,{class:"date",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=_=>s.value=_),type:"daterange",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",confirm:""},null,8,["modelValue"])],64)}}};const N={__name:"demo6",setup(u){const o=r(""),s=r([]),l=[{text:"\u4ECA\u5929",value:()=>new Date},{text:"\u6628\u5929",value:()=>{const t=new Date;return t.setTime(t.getTime()-3600*1e3*24),t}},{text:"\u4E00\u5468\u524D",value:()=>{const t=new Date;return t.setTime(t.getTime()-3600*1e3*24*7),t}}],a=[{text:"\u6700\u8FD1\u4E00\u5468",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-3600*1e3*24*7),[e,t]}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-3600*1e3*24*30),[e,t]}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-3600*1e3*24*90),[e,t]}}];return(t,e)=>{const _=i("z-date-picker");return c(),p(y,null,[n(_,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=h=>o.value=h),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",shortcuts:l},null,8,["modelValue"]),n(_,{class:"date",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=h=>s.value=h),type:"daterange",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",shortcuts:a},null,8,["modelValue"])],64)}}},D={class:"markdown-body"},z=d("h1",null,"DatePicker \u65E5\u671F\u9009\u62E9\u5668",-1),w=d("h4",null,"\u7528\u4E8E\u9009\u62E9\u65E5\u671F",-1),T=d("br",null,null,-1),U=d("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),M={class:"source"},$=d("h2",null,"\u65E5\u671F\u683C\u5F0F",-1),C=d("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 format \u53EF\u4EE5\u6539\u53D8\u65E5\u671F\u7684\u663E\u793A\u683C\u5F0F\u3002",-1),B=d("h4",null,"\u6CE8\u610F\uFF0Cformat \u53EA\u662F\u6539\u53D8\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u5E76\u975E\u6539\u53D8 value \u503C\u3002",-1),P={class:"source"},E=d("h2",null,"\u7981\u7528\u72B6\u6001",-1),F=d("h4",null,"\u53EF\u4EE5\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u5B9E\u73B0\u7981\u7528\u72B6\u6001",-1),O={class:"source"},j=d("h2",null,"\u65E5\u671F\u8303\u56F4",-1),A=d("h4",null,"\u8BBE\u7F6Etype \u4E3A daterange \u53EF\u5F00\u542F\u65E5\u671F\u8303\u56F4\u9009\u62E9",-1),S=d("h4",null,"\u5728\u9009\u62E9\u65E5\u671F\u8303\u56F4\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5DE6\u53F3\u9762\u677F\u4F1A\u8054\u52A8\u3002\u5982\u679C\u5E0C\u671B\u4E24\u4E2A\u9762\u677F\u5404\u81EA\u72EC\u7ACB\u5207\u6362\u5F53\u524D\u6708\u4EFD\uFF0C\u53EF\u4EE5\u4F7F\u7528unlink-panels\u5C5E\u6027\u89E3\u9664\u8054\u52A8\u3002",-1),q={class:"source"},G=d("h2",null,"\u5E26\u6709\u786E\u8BA4\u64CD\u4F5C",-1),H=d("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 confirm\uFF0C\u9009\u62E9\u5668\u4F1A\u6709\u6E05\u7A7A\u548C\u786E\u5B9A\u6309\u94AE\u3002\u786E\u8BA4\u6309\u94AE\u5E76\u6CA1\u6709\u5F71\u54CD\u65E5\u671F\u7684\u6B63\u5E38\u9009\u62E9\u3002",-1),I={class:"source"},J=d("h2",null,"\u5FEB\u6377\u65B9\u5F0F",-1),K=d("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 shortcuts \u53EF\u4EE5\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u8BE6\u89C1\u793A\u4F8B\u4EE3\u7801\u3002",-1),L={class:"source"},Q=V("<br><h2>DatePicker Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u652F\u6301\u9009\u62E9\u5355\u4E2A\u65E5\u671F\u6216\u8005\u9009\u62E9\u65E5\u671F\u8303\u56F4</td><td>string</td><td>date / daterange</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB\uFF0C\u5F00\u542F\u540E\u4E0D\u4F1A\u5F39\u51FA\u9009\u62E9\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>format</td><td>\u65E5\u671F\u683C\u5F0F\u5316</td><td>string</td><td>\u5E74\uFF1A<code>yyyy</code>\uFF0C\u6708\uFF1A<code>MM</code>\uFF0C\u65E5\uFF1A<code>dd</code></td><td>\u2018yyyy-MM-dd\u2019</td></tr><tr><td>separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u2018-\u2019</td></tr><tr><td>unlink-panels</td><td>\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>confirm</td><td>\u662F\u5426\u663E\u793A\u5E95\u90E8\u63A7\u5236\u680F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61</td><td>[{ text: string, value: function }]</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br><h2>DatePicker Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>on-change</td><td>\u65E5\u671F\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65E5\u671F</td></tr><tr><td>on-confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65E5\u671F</td></tr><tr><td>on-clear</td><td>\u5728\u6E05\u7A7A\u65E5\u671F\u65F6\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>",6),Z={__name:"doc",setup(u,{expose:o}){return o({frontmatter:{}}),(l,a)=>(c(),p("div",D,[z,w,T,U,d("div",M,[n(f)]),n(m,{compName:"date-picker",demoName:"demo1"}),$,C,B,d("div",P,[n(k)]),n(m,{compName:"date-picker",demoName:"demo2"}),E,F,d("div",O,[n(g)]),n(m,{compName:"date-picker",demoName:"demo3"}),j,A,S,d("div",q,[n(b)]),n(m,{compName:"date-picker",demoName:"demo4"}),G,H,d("div",I,[n(x)]),n(m,{compName:"date-picker",demoName:"demo5"}),J,K,d("div",L,[n(N)]),n(m,{compName:"date-picker",demoName:"demo6"}),Q]))}};export{Z as default};
