import{Head as b,Title as h,Meta as V}from"./components.93d05f2c.js";import $ from"./Nav.4c9ca8df.js";import w from"./Notebook.d1077f90.js";import B from"./Huggingface.49aab1a9.js";import C from"./Foot.b8611f00.js";import{a as H,V as S,o as r,J as T,W as e,S as p,O as q,u as o,c as _,X as l,$ as v,a0 as A}from"./entry.dcc23212.js";import{u as D}from"./asyncData.38805c62.js";import{q as F}from"./query.76bbe62b.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.fd23edbd.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./ContentRenderer.5d6b9719.js";import"./ContentRendererMarkdown.8765ab41.js";import"./_commonjsHelpers.fed2a411.js";import"./client-only.2b91a8b7.js";import"./Comments.60a05fe9.js";import"./utils.1981a291.js";const Z={__name:"[...slug]",async setup(M){let n,a;const c=H().params.slug.toString().replace(/,/g,"/"),i=["binder","colab","jupyter"],{data:t}=([n,a]=S(()=>D(c,()=>F("/notebooks/"+c).findOne(),"$YxtFgLannW")),n=await n,a(),n);function u(s){return typeof s=="string"?i.includes(s):s.some(m=>i.includes(m))}return(s,m)=>{const f=h,d=V,g=b,y=$,k=w,x=B,N=C;return r(),T("div",null,[e(g,null,{default:p(()=>[e(f,null,{default:p(()=>[v(A(o(t).title),1)]),_:1}),e(d,{name:"description",content:o(t).description},null,8,["content"])]),_:1}),e(y,{showsearch:!1}),q("main",null,[u(o(t).type)?(r(),_(k,{key:0,post:o(t)},null,8,["post"])):l("",!0),o(t).type=="huggingface"?(r(),_(x,{key:1,post:o(t)},null,8,["post"])):l("",!0)]),e(N)])}}};export{Z as default};