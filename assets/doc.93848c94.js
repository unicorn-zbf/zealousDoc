import{r as i,f as h,E as y,h as z,c as f,a as e,b as t,F as x,p as C,e as w,i as v,w as m,g as p,z as $}from"./index.bca9d398.js";import{p as b}from"./preview.f85a12ac.js";import"./bus.386a0429.js";/* empty css                                                                */const K={__name:"demo1",setup(o){const d=[{label:"\u4E00\u7EA7 1",children:[{label:"\u4E8C\u7EA7 1-1",children:[{label:"\u4E09\u7EA7 1-1-1"}]}]},{label:"\u4E00\u7EA7 2",children:[{label:"\u4E8C\u7EA7 2-1",children:[{label:"\u4E09\u7EA7 2-1-1"}]},{label:"\u4E8C\u7EA7 2-2"}]},{label:"\u4E00\u7EA7 3",children:[{label:"\u4E8C\u7EA7 3-1",children:[{label:"\u4E09\u7EA7 3-1-1"}]},{label:"\u4E8C\u7EA7 3-2",children:[{label:"\u4E09\u7EA7 3-2-1"}]}]}];return(c,s)=>{const a=i("z-tree");return h(),y(a,{data:d})}}},S={__name:"demo2",setup(o){const d=[{name:"\u4E00\u7EA7 1",children:[{name:"\u4E8C\u7EA7 1-1",children:[{name:"\u4E09\u7EA7 1-1-1"},{name:"\u4E09\u7EA7 1-1-2"}]},{name:"\u4E8C\u7EA7 1-2"}]},{name:"\u4E00\u7EA7 2",children:[{name:"\u4E8C\u7EA7 2-1",children:[{name:"\u4E09\u7EA7 2-1-1"}]},{name:"\u4E8C\u7EA7 2-2"}]},{name:"\u4E00\u7EA7 3",children:[{name:"\u4E8C\u7EA7 3-1"},{name:"\u4E8C\u7EA7 3-2"}]}];return(c,s)=>{const a=i("z-tree");return h(),y(a,{data:d,label:"name",children:"children","show-checkbox":""})}}};const g=o=>(C("data-v-cfb98876"),o=o(),w(),o),B=g(()=>e("p",{class:"title"},"\u81EA\u5B9A\u4E49\u5C55\u5F00\u548C\u9009\u4E2D",-1)),F={class:"mt-50"},I=g(()=>e("p",{class:"title"},"\u5C55\u5F00\u6240\u6709\u9879",-1)),V={__name:"demo3",setup(o){const d=[{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:10,label:"\u4E09\u7EA7 1-1-1"},{id:11,label:"\u4E09\u7EA7 1-1-2"}]},{id:5,label:"\u4E8C\u7EA7 1-2"}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:6,label:"\u4E8C\u7EA7 2-1"},{id:7,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:8,label:"\u4E8C\u7EA7 3-1"},{id:9,label:"\u4E8C\u7EA7 3-2"}]}];return(c,s)=>{const a=i("z-tree");return h(),f(x,null,[e("div",null,[B,t(a,{data:d,"node-key":"id","show-checkbox":"","default-expanded-keys":[1,4],"default-checked-keys":[4]})]),e("div",F,[I,t(a,{data:d,"node-key":"id","show-checkbox":"","default-expand-all":""})])],64)}}},E=z(V,[["__scopeId","data-v-cfb98876"]]),O={__name:"demo4",setup(o){const d=[{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:10,label:"\u4E09\u7EA7 1-1-1"},{id:11,label:"\u4E09\u7EA7 1-1-2"}]},{id:5,label:"\u4E8C\u7EA7 1-2"}]},{id:2,label:"\u4E00\u7EA7 2",disabled:!0,children:[{id:6,label:"\u4E8C\u7EA7 2-1",disabled:!0,children:[{id:12,label:"\u4E09\u7EA7 2-1-1",disabled:!0}]},{id:7,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:8,label:"\u4E8C\u7EA7 3-1"},{id:9,label:"\u4E8C\u7EA7 3-2"}]}];return(c,s)=>{const a=i("z-tree");return h(),y(a,{data:d,"node-key":"id","show-checkbox":"","default-expanded-keys":[1,2,6],"default-checked-keys":[2]})}}},T={__name:"demo5",setup(o){const d=v(null),c=[{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:10,label:"\u4E09\u7EA7 1-1-1"},{id:11,label:"\u4E09\u7EA7 1-1-2"}]},{id:5,label:"\u4E8C\u7EA7 1-2"}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:6,label:"\u4E8C\u7EA7 2-1",children:[{id:12,label:"\u4E09\u7EA7 2-1-1"}]},{id:7,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:8,label:"\u4E8C\u7EA7 3-1"},{id:9,label:"\u4E8C\u7EA7 3-2"}]}],s=()=>{d.value.setCheckedKeys([4])},a=()=>{const l=d.value.getCheckedNodes();alert(JSON.stringify(l))},k=()=>{const l=d.value.getCheckedKeys();alert(JSON.stringify(l))},n=()=>{d.value.setCheckedKeys([])};return(l,_)=>{const r=i("z-tree"),u=i("z-button"),N=i("z-space");return h(),f(x,null,[t(r,{ref_key:"treeRef",ref:d,data:c,"node-key":"id","show-checkbox":"","default-expand-all":"",style:{"margin-bottom":"20px"}},null,512),t(N,null,{default:m(()=>[t(u,{type:"primary",onClick:s},{default:m(()=>[p("\u901A\u8FC7node-key\u8BBE\u7F6E\u9009\u4E2D")]),_:1}),t(u,{type:"primary",onClick:a},{default:m(()=>[p("\u83B7\u53D6\u9009\u4E2D\u9879\u7684\u6570\u636E\u6570\u7EC4")]),_:1}),t(u,{type:"primary",onClick:k},{default:m(()=>[p("\u83B7\u53D6\u9009\u4E2D\u9879\u7684keys\u6570\u7EC4")]),_:1}),t(u,{type:"primary",onClick:n},{default:m(()=>[p("\u6E05\u7A7A\u9009\u4E2D\u9879")]),_:1})]),_:1})],64)}}};const J={__name:"demo6",setup(o){let d=1e3;const c=v([{id:1,label:"\u4E00\u7EA7 1",children:[{id:4,label:"\u4E8C\u7EA7 1-1",children:[{id:10,label:"\u4E09\u7EA7 1-1-1"},{id:11,label:"\u4E09\u7EA7 1-1-2"}]},{id:5,label:"\u4E8C\u7EA7 1-2"}]},{id:2,label:"\u4E00\u7EA7 2",children:[{id:6,label:"\u4E8C\u7EA7 2-1",children:[{id:12,label:"\u4E09\u7EA7 2-1-1"}]},{id:7,label:"\u4E8C\u7EA7 2-2"}]},{id:3,label:"\u4E00\u7EA7 3",children:[{id:8,label:"\u4E8C\u7EA7 3-1"},{id:9,label:"\u4E8C\u7EA7 3-2"}]}]),s=(n,{data:l,parentData:_})=>n("div",{class:"custoz-tree__item"},[n("span",{class:"custoz-tree__label"},l.label),n("div",{style:{color:"#409eff",fontSize:"14px"}},[n("span",{style:{margin:"0 10px"},onClick:r=>a(l,r)},"\u8FFD\u52A0"),n("span",{onClick:r=>k(l,_,r)},"\u5220\u9664")])]),a=(n,l)=>{l.stopPropagation(),(n.children||[]).push({id:d++,label:"children-node"}),c.value=[...c.value]},k=(n,l,_)=>{_.stopPropagation();const r=l.indexOf(n);r>-1&&l.splice(r,1)};return(n,l)=>{const _=i("z-tree");return h(),y(_,{data:c.value,"node-key":"id","show-checkbox":"","default-expand-all":"","render-content":s},null,8,["data"])}}},P={class:"markdown-body"},R=e("h1",null,"Tree \u6811\u5F62\u63A7\u4EF6",-1),A=e("h4",null,"\u7528\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u5C55\u793A\u4FE1\u606F\uFF0C\u53EF\u5C55\u5F00\u6216\u6298\u53E0\u3002",-1),M=e("br",null,null,-1),j=e("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),q=e("h4",null,"\u57FA\u7840\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A\u3002",-1),D={class:"source"},G=e("h2",null,"\u53EF\u9009\u62E9",-1),H=e("h4",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002\u8BBE\u7F6Eshow-checkbox \u5C5E\u6027\u4E3Atrue\u3002\u5E76\u4E14\u53EF\u81EA\u5B9A\u4E49\u6570\u636E\u7ED3\u6784\u7684\u952E\u540D\uFF0C\u9ED8\u8BA4\u4E3Alabel \u548C children",-1),L={class:"source"},Q=e("h2",null,"\u9ED8\u8BA4\u5C55\u5F00\u548C\u9009\u4E2D",-1),U=e("h4",null,"\u652F\u6301\u9ED8\u8BA4\u5C55\u5F00\u548C\u9009\u4E2D\uFF0C\u4F46\u662F\u5FC5\u987B\u8981\u8BBE\u7F6Enode-key\u5C5E\u6027\u3002 \u652F\u6301\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u9009\u9879",-1),W={class:"source"},X=e("h2",null,"\u7981\u7528\u72B6\u6001",-1),Y=e("h4",null,"\u901A\u8FC7 disabled \u5C5E\u6027\uFF0C\u53EF\u5C06 Tree \u7684\u67D0\u4E9B\u8282\u70B9\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002",-1),Z={class:"source"},ee=e("h2",null,"\u6811\u8282\u70B9\u7684\u8BBE\u7F6E\u548C\u83B7\u53D6",-1),te={class:"source"},de=e("h2",null,"\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9",-1),le=e("h4",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9\u3002",-1),ae={class:"source"},ne=$("<br><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u5B9A\u4E49\u5B50\u8282\u70B9\u540D\u79F0\u5728data\u6570\u636E\u5BF9\u8C61\u4E2D\u7684\u952E\u540D</td><td>string</td><td>\u2014</td><td>label</td></tr><tr><td>children</td><td>\u5B9A\u4E49\u5B50\u8282\u70B9\u6570\u636E\u5728data\u6570\u636E\u5BF9\u8C61\u4E2D\u7684\u952E\u540D</td><td>string</td><td>\u2014</td><td>children</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>node-key</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u7684\u5C55\u5F00\u9879</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u7684\u9009\u4E2D\u9879</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>render-content</td><td>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5185\u5BB9\u533A\u7684\u6E32\u67D3 Function</td><td>Function(h, { data, parentData })</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>toggle-change</td><td>\u5C55\u5F00/\u6536\u8D77\u5B50\u8282\u70B9\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u8282\u70B9</td></tr><tr><td>checked-change</td><td>\u8282\u70B9\u9009\u4E2D/\u53D6\u6D88\u65F6\u89E6\u53D1</td><td>\u6240\u6709\u9009\u4E2D\u8282\u70B9\u7684\u6570\u7EC4\u3001\u5F53\u524D\u8282\u70B9\u6570\u636E</td></tr></tbody></table><br><h2>Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setCheckedKeys</td><td>\u901A\u8FC7key\u8BBE\u7F6E\u9009\u4E2D\u7684\u8282\u70B9</td><td>key\u6570\u7EC4</td></tr><tr><td>getCheckedKeys</td><td>\u8FD4\u56DE\u6240\u6709\u9009\u4E2D\u8282\u70B9\u7684key\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCheckedNodes</td><td>\u8FD4\u56DE\u6240\u6709\u9009\u4E2D\u8282\u70B9\u7684\u6570\u636E\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr></tbody></table>",9),ie={__name:"doc",setup(o,{expose:d}){return d({frontmatter:{}}),(s,a)=>(h(),f("div",P,[R,A,M,j,q,e("div",D,[t(K)]),t(b,{compName:"tree",demoName:"demo1"}),G,H,e("div",L,[t(S)]),t(b,{compName:"tree",demoName:"demo2"}),Q,U,e("div",W,[t(E)]),t(b,{compName:"tree",demoName:"demo3"}),X,Y,e("div",Z,[t(O)]),t(b,{compName:"tree",demoName:"demo4"}),ee,e("div",te,[t(T)]),t(b,{compName:"tree",demoName:"demo5"}),de,le,e("div",ae,[t(J)]),t(b,{compName:"tree",demoName:"demo6"}),ne]))}};export{ie as default};
