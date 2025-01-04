import{j as r,r as c,g as _,E as V,w as v,b as e,h as n,c as f,a as t,e as z}from"./index.74340c31.js";import{p as h}from"./preview.d66a00e3.js";import"./bus.386a0429.js";/* empty css                                                                */const g={__name:"demo1",setup(p){const o=r("");return(s,l)=>{const d=c("z-input");return _(),V(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=a=>o.value=a),placeholder:"\u57FA\u672C\u4F7F\u7528"},null,8,["modelValue"])}}},N={__name:"demo2",setup(p){const o=r("");return(s,l)=>{const d=c("z-input");return _(),V(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=a=>o.value=a),placeholder:"\u7981\u7528\u72B6\u6001",disabled:""},null,8,["modelValue"])}}},x={__name:"demo3",setup(p){const o=r("");return(s,l)=>{const d=c("z-input");return _(),V(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=a=>o.value=a),placeholder:"\u53EF\u6E05\u7A7A",clearable:""},null,8,["modelValue"])}}},U={__name:"demo4",setup(p){const o=r(""),s=r("");return(l,d)=>{const a=c("z-input"),u=c("z-space");return _(),V(u,null,{default:v(()=>[e(a,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m),placeholder:"\u8BF7\u8F93\u5165",leftIcon:"icon-search"},null,8,["modelValue"]),e(a,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=m=>s.value=m),placeholder:"\u8BF7\u8F93\u5165",rightIcon:"icon-calendar"},null,8,["modelValue"])]),_:1})}}},y={__name:"demo5",setup(p){const o=r(""),s=r(""),l=r(""),d=r("");return(a,u)=>{const m=c("z-input"),b=c("z-space");return _(),V(b,null,{default:v(()=>[e(m,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=i=>o.value=i),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),e(m,{modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=i=>s.value=i),placeholder:"\u8BF7\u8F93\u5165",size:"medium"},null,8,["modelValue"]),e(m,{modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=i=>l.value=i),placeholder:"\u8BF7\u8F93\u5165",size:"small"},null,8,["modelValue"]),e(m,{modelValue:d.value,"onUpdate:modelValue":u[3]||(u[3]=i=>d.value=i),placeholder:"\u8BF7\u8F93\u5165",size:"mini"},null,8,["modelValue"])]),_:1})}}},I={__name:"demo6",setup(p){const o=r("");return(s,l)=>{const d=c("z-input");return _(),V(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=a=>o.value=a),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",showPassword:""},null,8,["modelValue"])}}},w={__name:"demo7",setup(p){const o=r(""),s=r("");return(l,d)=>{const a=c("z-button"),u=c("z-input"),m=c("z-space");return _(),V(m,null,{default:v(()=>[e(u,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=b=>o.value=b),clearable:""},{prepend:v(()=>[e(a,{type:"primary",leftIcon:"icon-search"},{default:v(()=>[n("\u641C\u7D22")]),_:1})]),_:1},8,["modelValue"]),e(u,{modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=b=>s.value=b),clearable:""},{append:v(()=>[e(a,{type:"primary",leftIcon:"icon-search"},{default:v(()=>[n("\u641C\u7D22")]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},$={class:"markdown-body"},E=t("h1",null,"Input \u8F93\u5165\u6846",-1),k=t("h4",null,"\u6570\u636E\u8F93\u5165\u6846\u7C7B\u578B\uFF0C\u901A\u8FC7\u952E\u76D8\u8F93\u5165\u5B57\u7B26",-1),B=t("br",null,null,-1),P=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),C=t("h4",null,"input \u7684\u57FA\u672C\u4F7F\u7528",-1),j={class:"source"},A=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),S=t("h4",null,[n("\u901A\u8FC7 "),t("em",null,"disabled"),n(" \u5C5E\u6027\u6307\u5B9A\u662F\u5426\u7981\u7528 input \u7EC4\u4EF6")],-1),T={class:"source"},q=t("h2",null,"\u53EF\u6E05\u7A7A\u6570\u636E",-1),D=t("h4",null,[n("\u4F7F\u7528 "),t("em",null,"clearable"),n(" \u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u6E05\u7A7A\u7684\u8F93\u5165\u6846")],-1),F={class:"source"},G=t("h2",null,"\u5E26\u56FE\u6807",-1),H=t("h4",null,[n("\u53EF\u4F7F\u7528 "),t("em",null,"leftIcon"),n(" \u6216\u8005 "),t("em",null,"rightIcon"),n(" \u6765\u5B9A\u4E49\u663E\u793A\u56FE\u6807\u5E76\u786E\u5B9A\u663E\u793A\u7684\u4F4D\u7F6E")],-1),J={class:"source"},K=t("h2",null,"\u4E0D\u540C\u5927\u5C0F",-1),L=t("h4",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),t("em",null,"size"),n(" \u5C5E\u6027\u6765\u9002\u5E94\u4E0D\u540C\u5927\u5C0F")],-1),M={class:"source"},O=t("h2",null,"\u5BC6\u7801\u7C7B\u578B",-1),Q=t("h4",null,[n("\u5BC6\u7801\u7C7B\u578B\u7684\u8F93\u5165\u6846\uFF0C\u53EF\u901A\u8FC7 "),t("em",null,"showPassword"),n(" \u6765\u542F\u7528\u662F\u5426\u5F00\u542F\u663E\u793A\u5BC6\u7801")],-1),R={class:"source"},W=t("h2",null,"\u590D\u5408\u578B\u8F93\u5165\u6846",-1),X=t("h4",null,[n("\u53EF\u901A\u8FC7 "),t("em",null,"slot"),n(" \u6765\u6307\u5B9A\u5728 input \u4E2D\u524D\u7F6E\u6216\u8005\u540E\u7F6E\u5185\u5BB9\u3002")],-1),Y={class:"source"},Z=z("<h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>text</td><td>text</td></tr><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u6E05\u7A7A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>showPassword</td><td>\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\u5927\u5C0F</td><td>string</td><td>medium / small / mini</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>autofocus</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>true, false</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>blur</td><td>\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td><td>blur=(e)=&gt;{console.log(e)}</td></tr><tr><td>focus</td><td>\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td><td>focus=(e)=&gt;{console.log(e)}</td></tr><tr><td>change</td><td>\u5728 Input \u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u65F6\u89E6\u53D1</td><td>(event: Event)</td><td>change=(e)=&gt;{console.log(e)}</td></tr><tr><td>input</td><td>\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(value: string | number)</td><td>input=(e)=&gt;{console.log(e)}</td></tr><tr><td>clear</td><td>\u5728\u70B9\u51FB\u7531 <code>clearable</code> \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br>",5),lt={__name:"doc",setup(p,{expose:o}){return o({frontmatter:{}}),(l,d)=>(_(),f("div",$,[E,k,B,P,C,t("div",j,[e(g)]),e(h,{compName:"input",demoName:"demo1"}),A,S,t("div",T,[e(N)]),e(h,{compName:"input",demoName:"demo2"}),q,D,t("div",F,[e(x)]),e(h,{compName:"input",demoName:"demo3"}),G,H,t("div",J,[e(U)]),e(h,{compName:"input",demoName:"demo4"}),K,L,t("div",M,[e(y)]),e(h,{compName:"input",demoName:"demo5"}),O,Q,t("div",R,[e(I)]),e(h,{compName:"input",demoName:"demo6"}),W,X,t("div",Y,[e(w)]),e(h,{compName:"input",demoName:"demo7"}),Z]))}};export{lt as default};
