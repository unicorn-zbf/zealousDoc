import{j as m,r as _,g as p,c as g,b as o,w as d,h as s,a as e,F as h,z as b,e as $}from"./index.74340c31.js";import{p as v}from"./preview.d66a00e3.js";import"./bus.386a0429.js";/* empty css                                                                */const y=e("span",null,"\u8FD9\u662F\u4E00\u6BB5\u4FE1\u606F",-1),V={class:"dialog-footer"},D={__name:"demo1",setup(f){const l=m(!1),r=()=>{console.log("111")};return(n,t)=>{const i=_("z-button"),a=_("z-dialog");return p(),g(h,null,[o(i,{onClick:t[0]||(t[0]=u=>l.value=!0)},{default:d(()=>[s("\u70B9\u51FB\u6253\u5F00 Dialog")]),_:1}),o(a,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=u=>l.value=u),title:"\u63D0\u793A",width:"30%","close-on-click-modal":!1,onOpen:r},{footer:d(()=>[e("span",V,[o(i,{onClick:t[1]||(t[1]=u=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(i,{type:"primary",onClick:t[2]||(t[2]=u=>l.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[y]),_:1},8,["modelValue"])],64)}}},z=e("span",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\u5185\u5BB9\u662F\u9ED8\u8BA4\u4E0D\u5C45\u4E2D\u7684",-1),k={class:"dialog-footer"},C={__name:"demo2",setup(f){const l=m(!1);return(r,n)=>{const t=_("z-button"),i=_("z-dialog");return p(),g(h,null,[o(t,{onClick:n[0]||(n[0]=a=>l.value=!0)},{default:d(()=>[s("\u70B9\u51FB\u6253\u5F00 Dialog")]),_:1}),o(i,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=a=>l.value=a),title:"\u63D0\u793A",width:"30%",center:""},{footer:d(()=>[e("span",k,[o(t,{onClick:n[1]||(n[1]=a=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(t,{type:"primary",onClick:n[2]||(n[2]=a=>l.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[z]),_:1},8,["modelValue"])],64)}}},x={class:"dialog-footer"},N={__name:"demo3",setup(f){const l=m(!1),r=m("");return(n,t)=>{const i=_("z-button"),a=_("z-input"),u=_("z-dialog");return p(),g(h,null,[o(i,{onClick:t[0]||(t[0]=c=>l.value=!0)},{default:d(()=>[s("\u81EA\u5B9A\u4E49\u5185\u5BB9")]),_:1}),o(u,{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=c=>l.value=c),title:"\u63D0\u793A",width:"30%"},{footer:d(()=>[e("span",x,[o(i,{onClick:t[2]||(t[2]=c=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(i,{type:"primary",onClick:t[3]||(t[3]=c=>l.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[e("div",null,[o(a,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=c=>r.value=c),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"]),e("p",null,"\u8F93\u5165\u7684\u503C\u4E3A\uFF1A"+b(r.value),1)])]),_:1},8,["modelValue"])],64)}}},w=e("span",null,"\u8FD9\u662F\u4E00\u6BB5\u5185\u5C42\u4FE1\u606F",-1),U={class:"dialog-footer"},S=e("div",null,"\u70B9\u51FB\u786E\u5B9A\u6253\u5F00\u5185\u5C42Dialog",-1),B={class:"dialog-footer"},E={__name:"demo4",setup(f){const l=m(!1),r=m(!1);return(n,t)=>{const i=_("z-button"),a=_("z-dialog");return p(),g(h,null,[o(i,{onClick:t[0]||(t[0]=u=>l.value=!0)},{default:d(()=>[s("\u70B9\u51FB\u6253\u5F00\u5916\u5C42 Dialog")]),_:1}),o(a,{modelValue:l.value,"onUpdate:modelValue":t[6]||(t[6]=u=>l.value=u),title:"\u5916\u5C42 Dialog",width:"30%"},{footer:d(()=>[e("span",B,[o(i,{onClick:t[4]||(t[4]=u=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(i,{type:"primary",onClick:t[5]||(t[5]=u=>r.value=!0)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[o(a,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=u=>r.value=u),width:"20%",title:"\u5185\u5C42 Dialog","append-to-body":""},{footer:d(()=>[e("span",U,[o(i,{onClick:t[1]||(t[1]=u=>r.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(i,{type:"primary",onClick:t[2]||(t[2]=u=>r.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[w]),_:1},8,["modelValue"]),S]),_:1},8,["modelValue"])],64)}}},F=e("span",null,"\u8FD9\u662F\u4E00\u4E2A\u53EF\u62D6\u52A8\u7684\u5BF9\u8BDD\u6846",-1),j={class:"dialog-footer"},A={__name:"demo5",setup(f){const l=m(!1);return(r,n)=>{const t=_("z-button"),i=_("z-dialog");return p(),g(h,null,[o(t,{onClick:n[0]||(n[0]=a=>l.value=!0)},{default:d(()=>[s("\u70B9\u51FB\u6253\u5F00 Dialog")]),_:1}),o(i,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=a=>l.value=a),title:"\u63D0\u793A",width:"30%",draggable:""},{footer:d(()=>[e("span",j,[o(t,{onClick:n[1]||(n[1]=a=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(t,{type:"primary",onClick:n[2]||(n[2]=a=>l.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[F]),_:1},8,["modelValue"])],64)}}},O=e("i",{class:"iconfont icon-email",style:{"font-size":"17px"}},null,-1),T=e("span",null,"\u8FD9\u662F\u4E00\u6BB5\u4FE1\u606F",-1),q={class:"dialog-footer"},G={__name:"demo6",setup(f){const l=m(!1);return(r,n)=>{const t=_("z-button"),i=_("z-dialog");return p(),g(h,null,[o(t,{onClick:n[0]||(n[0]=a=>l.value=!0)},{default:d(()=>[s("\u70B9\u51FB\u6253\u5F00 Dialog")]),_:1}),o(i,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=a=>l.value=a),width:"30%"},{header:d(()=>[O,s(" \u65B0\u7684\u90AE\u4EF6 ")]),footer:d(()=>[e("span",q,[o(t,{onClick:n[1]||(n[1]=a=>l.value=!1),style:{"margin-right":"20px"}},{default:d(()=>[s("\u53D6\u6D88")]),_:1}),o(t,{type:"primary",onClick:n[2]||(n[2]=a=>l.value=!1)},{default:d(()=>[s("\u786E\u5B9A")]),_:1})])]),default:d(()=>[T]),_:1},8,["modelValue"])],64)}}},H={class:"markdown-body"},I=e("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),J=e("h4",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C",-1),K=e("br",null,null,-1),L=e("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),M=e("h4",null,"Dialog \u5F39\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846,\u9700\u8981\u8BBE\u7F6E v-model \u5C5E\u6027\uFF0C\u5B83\u63A5\u6536 Boolean\uFF0C\u5F53\u4E3A true \u65F6\u663E\u793A Dialog",-1),P={class:"source"},Q=e("h2",null,"\u5C45\u4E2D\u5E03\u5C40",-1),R=e("h4",null,"\u6807\u9898\u548C\u5E95\u90E8\u53EF\u6C34\u5E73\u5C45\u4E2D",-1),W=e("p",null,"\u5C06center\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u4F7F\u6807\u9898\u548C\u5E95\u90E8\u5C45\u4E2D\u3002 center\u4EC5\u5F71\u54CD\u6807\u9898\u548C\u5E95\u90E8\u533A\u57DF\u3002 Dialog \u7684\u5185\u5BB9\u662F\u4EFB\u610F\u7684\uFF0C\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5185\u5BB9\u5E76\u4E0D\u9002\u5408\u5C45\u4E2D\u5E03\u5C40\u3002 \u5982\u679C\u9700\u8981\u5185\u5BB9\u4E5F\u6C34\u5E73\u5C45\u4E2D\uFF0C\u8BF7\u81EA\u884C\u4E3A\u5176\u6DFB\u52A0 CSS \u6837\u5F0F\u3002",-1),X={class:"source"},Y=e("h2",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),Z=e("h4",null,"Dialog \u7EC4\u4EF6\u7684\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u610F\u7684\uFF0C\u751A\u81F3\u53EF\u4EE5\u662F\u8868\u683C\u6216\u8868\u5355",-1),tt={class:"source"},ot=e("h2",null,"\u5D4C\u5957\u7684 Dialog",-1),et=e("h4",null,"\u5982\u679C\u9700\u8981\u5728\u4E00\u4E2A Dialog \u5185\u90E8\u5D4C\u5957\u53E6\u4E00\u4E2A Dialog\uFF0C\u9700\u8981\u4F7F\u7528 append-to-body \u5C5E\u6027\u3002",-1),lt=e("p",null,"\u901A\u5E38\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u5D4C\u5957\u5BF9\u8BDD\u6846\u3002 \u5982\u679C\u4F60\u9700\u8981\u5728\u9875\u9762\u4E0A\u5448\u73B0\u591A\u4E2A\u5BF9\u8BDD\u6846\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u6253\u5E73\u5B83\u4EEC\uFF0C\u4EE5\u4FBF\u5B83\u4EEC\u5F7C\u6B64\u4E4B\u95F4\u662F\u5E73\u7EA7\u5173\u7CFB\u3002 \u5C06\u5185\u5C42 Dialog \u7684\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u5B83\u5C31\u4F1A\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u5185\u5916\u5C42 Dialog \u548C\u906E\u7F69\u5C42\u7EA7\u5173\u7CFB\u7684\u6B63\u786E\u3002",-1),dt={class:"source"},nt=e("h2",null,"\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846",-1),at=e("h4",null,"\u8BD5\u7740\u62D6\u52A8\u4E00\u4E0Bheader\u90E8\u5206\u5427,\u8BBE\u7F6Edraggable\u5C5E\u6027\u4E3Atrue\u4EE5\u505A\u5230\u62D6\u62FD",-1),st={class:"source"},it=e("h2",null,"\u4F7F\u7528\u5177\u540D\u63D2\u69FD\u81EA\u5B9A\u4E49",-1),rt=e("p",null,"\u4F7F\u7528\u5177\u540D\u63D2\u69FD #header \u3001#footer \u53EF\u5BF9\u6A21\u6001\u6846\u6574\u4F53\u6839\u636E\u9700\u8981\u81EA\u5B9A\u4E49",-1),ut={class:"source"},_t=$("<br><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>title</td><td>Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot\u4F20\u5165</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>50%</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 margin-top \u503C</td><td>string</td><td>\u2014</td><td>15vh</td></tr><tr><td>append-to-body</td><td>Dialog \u81EA\u8EAB\u662F\u5426\u63D2\u5165\u81F3 body \u5143\u7D20\u4E0A\u3002\u5D4C\u5957\u7684 Dialog \u5FC5\u987B\u6307\u5B9A\u8BE5\u5C5E\u6027\u5E76\u8D4B\u503C\u4E3A true</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>custom-class</td><td>Dialog \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>close-on-click-modal</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-close</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>center</td><td>\u662F\u5426\u5BF9\u5934\u90E8\u548C\u5E95\u90E8\u91C7\u7528\u5C45\u4E2D\u5E03\u5C40</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><br><h2>Slot</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Dialog \u7684\u5185\u5BB9</td></tr><tr><td>header</td><td>Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>Dialog \u6253\u5F00\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>opened</td><td>Dialog \u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>close</td><td>Dialog \u5173\u95ED\u7684\u56DE\u8C03</td><td>\u2014</td></tr><tr><td>closed</td><td>Dialog \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u56DE\u8C03</td><td>\u2014</td></tr></tbody></table>",9),ct={__name:"doc",setup(f,{expose:l}){return l({frontmatter:{}}),(n,t)=>(p(),g("div",H,[I,J,K,L,M,e("div",P,[o(D)]),o(v,{compName:"dialog",demoName:"demo1"}),Q,R,W,e("div",X,[o(C)]),o(v,{compName:"dialog",demoName:"demo2"}),Y,Z,e("div",tt,[o(N)]),o(v,{compName:"dialog",demoName:"demo3"}),ot,et,lt,e("div",dt,[o(E)]),o(v,{compName:"dialog",demoName:"demo4"}),nt,at,e("div",st,[o(A)]),o(v,{compName:"dialog",demoName:"demo5"}),it,rt,e("div",ut,[o(G)]),o(v,{compName:"dialog",demoName:"demo6"}),_t]))}};export{ct as default};
