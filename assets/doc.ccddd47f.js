import{i as _,r as s,f as h,E as f,w as u,b as t,a as e,y as b,g as V,c as z,z as x}from"./index.bca9d398.js";import{p as v}from"./preview.f85a12ac.js";import"./bus.386a0429.js";/* empty css                                                                */const w={__name:"demo1",setup(i){const l=_(0),a=d=>{console.log(d)};return(d,n)=>{const o=s("z-rate");return h(),f(o,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=r=>l.value=r),onOnChange:a},null,8,["modelValue"])}}},N={__name:"demo2",setup(i){const l=_(2.5);return(a,d)=>{const n=s("z-rate");return h(),f(n,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=o=>l.value=o),"allow-half":""},null,8,["modelValue"])}}},g={__name:"demo3",setup(i){const l=_(2),a=_(2),d=["\u6781\u5DEE","\u5931\u671B","\u4E00\u822C","\u6EE1\u610F","\u60CA\u559C"];return(n,o)=>{const r=s("z-rate"),m=s("z-col"),p=s("z-row");return h(),f(p,null,{default:u(()=>[t(m,null,{default:u(()=>[t(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c),"show-text":""},null,8,["modelValue"])]),_:1}),t(m,{style:{"margin-top":"20px"}},{default:u(()=>[t(r,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=c=>a.value=c),"show-text":""},{default:u(()=>[e("span",null,b(d[a.value-1]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},y={__name:"demo4",setup(i){const l=_(2);return(a,d)=>{const n=s("z-rate");return h(),f(n,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=o=>l.value=o),disabled:""},null,8,["modelValue"])}}},U={__name:"demo5",setup(i){const l=_(2),a=_(2);return(d,n)=>{const o=s("z-rate"),r=s("z-col"),m=s("z-row");return h(),f(m,null,{default:u(()=>[t(r,null,{default:u(()=>[t(o,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=p=>l.value=p),clearable:""},null,8,["modelValue"]),V(" clearable: true ")]),_:1}),t(r,{style:{"margin-top":"20px"}},{default:u(()=>[t(o,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value=p)},null,8,["modelValue"]),V(" clearable: false ")]),_:1})]),_:1})}}},$={__name:"demo6",setup(i){const l=_(2),a=_(2),d=_(2);return(n,o)=>{const r=s("z-rate"),m=s("z-col"),p=s("z-row");return h(),f(p,null,{default:u(()=>[t(m,null,{default:u(()=>[t(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=c=>l.value=c),character:"A"},null,8,["modelValue"])]),_:1}),t(m,{style:{"margin-top":"20px"}},{default:u(()=>[t(r,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=c=>a.value=c),character:"\u597D","allow-half":""},null,8,["modelValue"])]),_:1}),t(m,{style:{"margin-top":"20px"}},{default:u(()=>[t(r,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=c=>d.value=c),icon:"smile-filling"},null,8,["modelValue"])]),_:1})]),_:1})}}},k={class:"markdown-body"},B=e("h1",null,"Rate \u8BC4\u5206",-1),C=e("h4",null,"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u5BF9\u8BC4\u4EF7\u8FDB\u884C\u5C55\u793A\u3002",-1),E=e("br",null,null,-1),A=e("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),S=e("h4",null,"\u8BC4\u5206\u57FA\u7840\u7528\u6CD5\u3002",-1),D={class:"source"},H=e("h2",null,"\u534A\u661F",-1),O=e("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 allow-half \u53EF\u4EE5\u9009\u4E2D\u534A\u661F\u3002",-1),R={class:"source"},T=e("h2",null,"\u663E\u793A\u63D0\u793A",-1),j=e("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 show-text \u53EF\u4EE5\u663E\u793A\u63D0\u793A\u6587\u5B57\u3002\u63D0\u793A\u5185\u5BB9\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot \u81EA\u5B9A\u4E49\u3002",-1),q={class:"source"},F=e("h2",null,"\u53EA\u8BFB",-1),G=e("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 disabled \u5F00\u542F\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u65E0\u6CD5\u4EA4\u4E92\u3002",-1),I={class:"source"},J=e("h2",null,"\u6E05\u9664",-1),K=e("h4",null,"\u652F\u6301\u5141\u8BB8\u6216\u8005\u7981\u7528\u6E05\u9664\u3002\u8BBE\u7F6E clearable \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5141\u8BB8\u6E05\u9664\u3002",-1),L={class:"source"},M=e("h2",null,"\u81EA\u5B9A\u4E49\u5B57\u7B26\u6216\u56FE\u6807",-1),P=e("h4",null,"\u8BBE\u7F6E character \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B57\u7B26\u3002\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u3002",-1),Q={class:"source"},W=x("<br><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>count</td><td>star \u603B\u6570</td><td>number</td><td>\u2014</td><td>5</td></tr><tr><td>allow-half</td><td>\u662F\u5426\u5141\u8BB8\u534A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-text</td><td>\u662F\u5426\u663E\u793A\u63D0\u793A\u6587\u5B57</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u53D6\u6D88\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>character</td><td>\u81EA\u5B9A\u4E49\u5B57\u7B26</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>icon</td><td>\u4F7F\u7528\u56FE\u6807</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>on-change</td><td>\u8BC4\u5206\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value</td></tr></tbody></table><br>",7),et={__name:"doc",setup(i,{expose:l}){return l({frontmatter:{}}),(d,n)=>(h(),z("div",k,[B,C,E,A,S,e("div",D,[t(w)]),t(v,{compName:"rate",demoName:"demo1"}),H,O,e("div",R,[t(N)]),t(v,{compName:"rate",demoName:"demo2"}),T,j,e("div",q,[t(g)]),t(v,{compName:"rate",demoName:"demo3"}),F,G,e("div",I,[t(y)]),t(v,{compName:"rate",demoName:"demo4"}),J,K,e("div",L,[t(U)]),t(v,{compName:"rate",demoName:"demo5"}),M,P,e("div",Q,[t($)]),t(v,{compName:"rate",demoName:"demo6"}),W]))}};export{et as default};
