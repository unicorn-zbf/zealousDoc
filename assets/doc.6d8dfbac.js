import{j as u,r as _,g as i,E as p,w as e,b as t,h as o,c as v,a as d,e as V}from"./index.608ece7c.js";import{p as h}from"./preview.657d890e.js";import"./bus.386a0429.js";/* empty css                                                                */const N={__name:"demo1",setup(b){const l=u("first"),m=(s,a)=>{console.log(s,a)};return(s,a)=>{const n=_("z-tab-pane"),r=_("z-tabs");return i(),p(r,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),onTabClick:m},{default:e(()=>[t(n,{label:"\u9009\u9879\u4E00",name:"first"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(n,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(n,{label:"\u9009\u9879\u4E09",name:"third"},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(n,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue"])}}},g={__name:"demo2",setup(b){const l=u("first"),m=(s,a)=>{console.log(s,a)};return(s,a)=>{const n=_("z-tab-pane"),r=_("z-tabs");return i(),p(r,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),type:"card",onTabClick:m},{default:e(()=>[t(n,{label:"\u9009\u9879\u4E00",name:"first"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(n,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(n,{label:"\u9009\u9879\u4E09",name:"third"},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(n,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue"])}}},y={__name:"demo3",setup(b){const l=u("first");return(m,s)=>{const a=_("z-tab-pane"),n=_("z-tabs");return i(),p(n,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r),type:"card"},{default:e(()=>[t(a,{label:"\u9009\u9879\u4E00",name:"first",icon:"icon-calendar"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(a,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(a,{label:"\u9009\u9879\u4E09",name:"third"},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(a,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue"])}}},x={__name:"demo4",setup(b){const l=u("first");return(m,s)=>{const a=_("z-tab-pane"),n=_("z-tabs");return i(),p(n,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r)},{default:e(()=>[t(a,{label:"\u9009\u9879\u4E00",name:"first"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(a,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(a,{label:"\u9009\u9879\u4E09",name:"third",disabled:!0},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(a,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue"])}}},k={__name:"demo5",setup(b){const l=u("top"),m=u("first");return(s,a)=>{const n=_("z-radio-button"),r=_("z-radio-group"),c=_("z-tab-pane"),z=_("z-tabs");return i(),v("div",null,[t(r,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=f=>l.value=f),style:{"margin-bottom":"30px"}},{default:e(()=>[t(n,{label:"top"}),t(n,{label:"right"}),t(n,{label:"bottom"}),t(n,{label:"left"})]),_:1},8,["modelValue"]),t(z,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=f=>m.value=f),"tab-position":l.value,style:{height:"200px"}},{default:e(()=>[t(c,{label:"\u9009\u9879\u4E00",name:"first"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(c,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(c,{label:"\u9009\u9879\u4E09",name:"third"},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(c,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue","tab-position"])])}}},C={__name:"demo6",setup(b){const l=u("first");return(m,s)=>{const a=_("z-tab-pane"),n=_("z-tabs");return i(),p(n,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r),activeColor:"#42B983"},{default:e(()=>[t(a,{label:"\u9009\u9879\u4E00",name:"first"},{default:e(()=>[o("\u5185\u5BB9\u4E00")]),_:1}),t(a,{label:"\u9009\u9879\u4E8C",name:"second"},{default:e(()=>[o("\u5185\u5BB9\u4E8C")]),_:1}),t(a,{label:"\u9009\u9879\u4E09",name:"third"},{default:e(()=>[o("\u5185\u5BB9\u4E09")]),_:1}),t(a,{label:"\u9009\u9879\u56DB",name:"fourth"},{default:e(()=>[o("\u5185\u5BB9\u56DB")]),_:1})]),_:1},8,["modelValue"])}}},T={class:"markdown-body"},U=d("h1",null,"Tabs \u6807\u7B7E\u9875",-1),$=d("h4",null,"\u7528\u4E8E\u591A\u4E2A\u89C6\u56FE\u3001\u6570\u636E\u5207\u6362\u5C55\u793A\u64CD\u4F5C",-1),B=d("br",null,null,-1),w=d("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),E=d("h4",null,"\u57FA\u7840\u7684\u3001\u7B80\u6D01\u7684\u6807\u7B7E\u9875\u3002Tabs \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9009\u9879\u5361\u529F\u80FD\uFF0C \u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\u3002",-1),A={class:"source"},P=d("h2",null,"\u9009\u9879\u5361\u6837\u5F0F",-1),j=d("h4",null,"\u9009\u9879\u5361\u6837\u5F0F\u7684\u6807\u7B7E\u9875\u3002\u53EA\u9700\u8981\u8BBE\u7F6E type \u5C5E\u6027\u4E3A card \u5C31\u53EF\u4EE5\u4F7F\u9009\u9879\u5361\u6539\u53D8\u4E3A\u6807\u7B7E\u98CE\u683C\u3002",-1),S={class:"source"},q=d("h2",null,"\u9009\u9879\u5361\u52A0\u56FE\u6807",-1),D=d("h4",null,"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E icon \u5C5E\u6027\u4E3A\u9009\u9879\u5361\u6DFB\u52A0\u56FE\u6807\u3002",-1),F={class:"source"},G=d("h2",null,"\u7981\u7528",-1),H=d("h4",null,"\u8BBE\u7F6E disabled \u5C5E\u6027\u7981\u7528\u6B64\u9009\u9879\u5361",-1),I={class:"source"},J=d("h2",null,"\u4F4D\u7F6E",-1),K=d("h4",null,"\u53EF\u4EE5\u901A\u8FC7 tab-position \u8BBE\u7F6E\u6807\u7B7E\u7684\u4F4D\u7F6E\u3002\u6807\u7B7E\u4E00\u5171\u6709\u56DB\u4E2A\u65B9\u5411\u7684\u8BBE\u7F6E tabPosition=\u201Cleft|right|top|bottom\u201D",-1),L={class:"source"},M=d("h2",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),O=d("h4",null,"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E activeColor \u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u7684\u5B57\u4F53\u989C\u8272\uFF0C\u4EE5\u53CA\u6307\u793A\u5668\u7684\u989C\u8272\u3002",-1),Q={class:"source"},R=V("<br><h2>Tabs Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9009\u4E2D\u9009\u9879\u5361\u7684 name</td><td>string</td><td>\u2014</td><td>\u7B2C\u4E00\u4E2A\u9009\u9879\u5361\u7684 name</td></tr><tr><td>type</td><td>\u9009\u9879\u5361\u7C7B\u578B</td><td>string</td><td>line/card</td><td>line</td></tr><tr><td>tab-position</td><td>\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>activeColor</td><td>\u9009\u4E2D\u72B6\u6001\u7684\u5B57\u4F53\u989C\u8272\uFF0C\u4EE5\u53CA\u6307\u793A\u5668\u7684\u989C\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br><h2>Tabs Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-click</td><td>tab \u88AB\u9009\u4E2D\u65F6\u89E6\u53D1</td><td>\u88AB\u9009\u4E2D\u7684\u6807\u7B7E tab \u5B9E\u4F8B</td></tr></tbody></table><br><h2>Tab-pane Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u9009\u9879\u5361\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>\u9009\u9879\u5361name</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>icon</td><td>\u9009\u9879\u5361\u7684\u56FE\u6807</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table>",9),tt={__name:"doc",setup(b,{expose:l}){return l({frontmatter:{}}),(s,a)=>(i(),v("div",T,[U,$,B,w,E,d("div",A,[t(N)]),t(h,{compName:"tabs",demoName:"demo1"}),P,j,d("div",S,[t(g)]),t(h,{compName:"tabs",demoName:"demo2"}),q,D,d("div",F,[t(y)]),t(h,{compName:"tabs",demoName:"demo3"}),G,H,d("div",I,[t(x)]),t(h,{compName:"tabs",demoName:"demo4"}),J,K,d("div",L,[t(k)]),t(h,{compName:"tabs",demoName:"demo5"}),M,O,d("div",Q,[t(C)]),t(h,{compName:"tabs",demoName:"demo6"}),R]))}};export{tt as default};
