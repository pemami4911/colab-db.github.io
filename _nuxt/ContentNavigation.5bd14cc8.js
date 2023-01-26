import{l as D,_ as e,f as p,j as d,D as A,a as R,E as g,k as v,F as V,G as h,u as y,H as b,q as s,p as T,I as j,J as S,K as w,d as r,t as $,L as x,h as N,M as C}from"./entry.1803269a.js";import{u as k}from"./asyncData.84a859c4.js";import{h as f,e as M,j as z}from"./query.be41df01.js";import{w as P,s as B,u as H,a as Q}from"./utils.43c3801a.js";import"./client-only.ffb84aaf.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js";import"./ContentRenderer.35eb43bc.js";import"./ContentDoc.3d011833.js";import"./ContentList.4b5d119a.js";import"./ContentQuery.b841f63d.js";import"./ContentRendererMarkdown.e28ec876.js";import"./ContentSlot.7006f464.js";import"./DocumentDrivenEmpty.3630e0b0.js";import"./DocumentDrivenNotFound.80dd7d1d.js";import"./Markdown.1e6f47b7.js";import"./ProseCode.a25dbcc1.js";import"./components.edff5220.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const G=async t=>{var u,n;const{content:o}=D().public,a=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};o.locales.length&&((n=(u=a.where)==null?void 0:u.find(l=>l._locale))!=null&&n._locale||(a.where=a.where||[],a.where.push({_locale:o.defaultLocale})));const _=o.experimental.stripQueryParameters?P(`/navigation/${`${f(a)}.${o.integrity}`}/${M(a)}.json`):P(`/navigation/${f(a)}.${o.integrity}.json`);if(B())return(await e(()=>import("./client-db.0eca4534.js"),["./client-db.0eca4534.js","./entry.1803269a.js","./entry.d07c7987.css","./utils.43c3801a.js","./query.be41df01.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(l=>l.generateNavigation))(a);const i=await $fetch(_,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:z(a),previewToken:H("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const L={},U=p({props:{name:String},async setup(t,o){const a=await L[t.name]().then(_=>_.default||_);return()=>d(a,{},o.slots)}}),q=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const a=A("_route"),_=a===R()?g():a,i=v(()=>{var u,n;return(n=(u=y(t.name))!=null?u:_.meta.layout)!=null?n:"default"});return()=>{var m;const u=i.value&&i.value in L,n=(m=_.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(U,u&&{key:i.value,name:i.value,hasTransition:void 0},o.slots).default()}).default()}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),J=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:a}){const _=s(null),i=T();return j(u=>{if(!i.isHydrating)return a("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=o.error)==null?void 0:u.call(o,{error:_}):(n=o.default)==null?void 0:n.call(o)}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=p({name:"DevOnly",setup(t,o){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const a=et({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",a.start),_.hook("page:finish",a.finish),w(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function et(t){const o=s(0),a=s(!1),_=v(()=>1e4/t.duration);let i=null,u=null;function n(){l(),o.value=0,a.value=!0,t.throttle?u=setTimeout(E,t.throttle):E()}function m(){o.value=100,I()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function O(c){o.value=Math.min(100,o.value+c)}function I(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{o.value=0},400)},500)}function E(){i=setInterval(()=>{O(_.value)},100)}return{progress:o,isLoading:a,start:n,finish:m,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Comments.c746c803.js"),["./Comments.c746c803.js","./client-only.ffb84aaf.js","./entry.1803269a.js","./entry.d07c7987.css","./client-only.0a5191b0.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Filter.0cbc6e24.js"),["./Filter.0cbc6e24.js","./entry.1803269a.js","./entry.d07c7987.css","./metadata.9e0765d7.js","./use-outside-click.779d1fee.js","./hidden.96985452.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.f6fb4dcd.js"),["./FilterBar.f6fb4dcd.js","./entry.1803269a.js","./entry.d07c7987.css","./use-outside-click.779d1fee.js","./use-tracked-pointer.e245dbce.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Foot.1535df85.js"),["./Foot.1535df85.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js","./entry.1803269a.js","./entry.d07c7987.css","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Huggingface.a2afdc00.js"),["./Huggingface.a2afdc00.js","./ContentRenderer.35eb43bc.js","./ContentRendererMarkdown.e28ec876.js","./entry.1803269a.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.ffb84aaf.js","./client-only.0a5191b0.css","./Comments.c746c803.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Nav.8fed4890.js"),["./Nav.8fed4890.js","./entry.1803269a.js","./entry.d07c7987.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js","./Nav.989f618f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Notebook.fa2b1b71.js"),["./Notebook.fa2b1b71.js","./ContentRenderer.35eb43bc.js","./ContentRendererMarkdown.e28ec876.js","./entry.1803269a.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.ffb84aaf.js","./client-only.0a5191b0.css","./Comments.c746c803.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SelectType.229cbb1b.js"),["./SelectType.229cbb1b.js","./entry.1803269a.js","./entry.d07c7987.css","./use-outside-click.779d1fee.js","./use-tracked-pointer.e245dbce.js","./hidden.96985452.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.3d011833.js"),["./ContentDoc.3d011833.js","./entry.1803269a.js","./entry.d07c7987.css","./ContentRenderer.35eb43bc.js","./ContentRendererMarkdown.e28ec876.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.b841f63d.js","./asyncData.84a859c4.js","./query.be41df01.js","./utils.43c3801a.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.4b5d119a.js"),["./ContentList.4b5d119a.js","./ContentQuery.b841f63d.js","./entry.1803269a.js","./entry.d07c7987.css","./asyncData.84a859c4.js","./query.be41df01.js","./utils.43c3801a.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.b841f63d.js"),["./ContentQuery.b841f63d.js","./entry.1803269a.js","./entry.d07c7987.css","./asyncData.84a859c4.js","./query.be41df01.js","./utils.43c3801a.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.35eb43bc.js"),["./ContentRenderer.35eb43bc.js","./ContentRendererMarkdown.e28ec876.js","./entry.1803269a.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.e28ec876.js"),["./ContentRendererMarkdown.e28ec876.js","./entry.1803269a.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.7006f464.js"),["./ContentSlot.7006f464.js","./utils.43c3801a.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.3630e0b0.js"),["./DocumentDrivenEmpty.3630e0b0.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.80dd7d1d.js"),["./DocumentDrivenNotFound.80dd7d1d.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.1e6f47b7.js"),["./Markdown.1e6f47b7.js","./ContentSlot.7006f464.js","./utils.43c3801a.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.66f43f4a.js"),["./ProseA.66f43f4a.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.6ec6f822.js"),["./ProseBlockquote.6ec6f822.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.a25dbcc1.js"),["./ProseCode.a25dbcc1.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.4a7c59a6.js"),["./ProseCodeInline.4a7c59a6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.cc108ae8.js"),["./ProseEm.cc108ae8.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.ac647afb.js"),["./ProseH1.ac647afb.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.5d77504e.js"),["./ProseH2.5d77504e.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.71fb11cd.js"),["./ProseH3.71fb11cd.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.72ee673b.js"),["./ProseH4.72ee673b.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.b4550d49.js"),["./ProseH5.b4550d49.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.9b9053f6.js"),["./ProseH6.9b9053f6.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.23914e25.js"),["./ProseHr.23914e25.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.c4e492a0.js"),["./ProseImg.c4e492a0.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.d6c6505b.js"),["./ProseLi.d6c6505b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.687e167a.js"),["./ProseOl.687e167a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.76c7659a.js"),["./ProseP.76c7659a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.042a38f3.js"),["./ProseStrong.042a38f3.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.8e82634f.js"),["./ProseTable.8e82634f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.b216ec0a.js"),["./ProseTbody.b216ec0a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.3bc52727.js"),["./ProseTd.3bc52727.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.7f796167.js"),["./ProseTh.7f796167.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.ae3d04c8.js"),["./ProseThead.ae3d04c8.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.21401689.js"),["./ProseTr.21401689.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.80aa1788.js"),["./ProseUl.80aa1788.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.000f152b.js"),["./welcome.000f152b.js","./entry.1803269a.js","./entry.d07c7987.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.84a859c4.js","./query.be41df01.js","./utils.43c3801a.js","./client-only.ffb84aaf.js","./client-only.0a5191b0.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.c99a96f0.js","./Nav.989f618f.css","./ContentRenderer.35eb43bc.js","./ContentRendererMarkdown.e28ec876.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.3d011833.js","./ContentQuery.b841f63d.js","./ContentList.4b5d119a.js","./ContentSlot.7006f464.js","./DocumentDrivenEmpty.3630e0b0.js","./DocumentDrivenNotFound.80dd7d1d.js","./Markdown.1e6f47b7.js","./ProseCode.a25dbcc1.js","./ProseCode.e63e49c6.css","./components.edff5220.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.ffb84aaf.js"),["./client-only.ffb84aaf.js","./entry.1803269a.js","./entry.d07c7987.css","./client-only.0a5191b0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1803269a.js").then(t=>t.aj),["./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.1803269a.js").then(t=>t.ak),["./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./components.edff5220.js"),["./components.edff5220.js","./entry.1803269a.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Body));const ot=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=$(t),a=v(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!a.value&&x("dd-navigation").value){const{navigation:i}=Q();return{navigation:i}}const{data:_}=await k(`content-navigation-${f(a.value)}`,()=>G(a.value));return{navigation:_}},render(t){const o=N(),{navigation:a}=t,_=n=>d(C,{to:n._path},()=>n.title),i=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[_(l),i(l.children,m+1)]):d("li",null,_(l)))),u=n=>i(n,0);return o!=null&&o.default?o.default({navigation:a,...this.$attrs}):u(a)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as default};
