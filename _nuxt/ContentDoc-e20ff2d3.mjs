import{d as h,u as d,a as y,h as r,C as g,n as C,b as v}from"./entry-d0ce958a.mjs";import D from"./ContentQuery-1dbed4ed.mjs";import"./json-c9c5e2f0.mjs";import"./asyncData-c8fe0ffe.mjs";import"./query-7850d7dc.mjs";import"./utils-9b01922f.mjs";var j=h({props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>d().path},query:{type:Object,required:!1,default:void 0}},render(m){const t=y(),{tag:s,excerpt:a,path:p,query:c}=m,f=Object.assign(c||{},{path:p,find:"one"}),l=(n,e)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:e},null,2)),u=n=>{if(p!==d().path)return;const e=Object.assign({},n.head);e.title=e.title||n.title,e.meta=e.meta||[];const o=e.description||n.description;o&&e.meta.filter(i=>i.name==="description").length===0&&e.meta.push({name:"description",content:o}),e.image&&e.meta.filter(i=>i.property==="og:image").length===0&&e.meta.push({property:"og:image",content:e.image}),C(()=>v(e))};return r(D,f,{default:t!=null&&t.default?({data:n,refresh:e,isPartial:o})=>(u(n),t.default({doc:n,refresh:e,isPartial:o,excerpt:a,...this.$attrs})):({data:n})=>(u(n),r(g,{value:n,excerpt:a,tag:s,...this.$attrs},{empty:e=>t!=null&&t.empty?t.empty(e):l("default",n)})),empty:n=>{var e;return((e=t==null?void 0:t.empty)==null?void 0:e.call(t,n))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var e;return((e=t==null?void 0:t["not-found"])==null?void 0:e.call(t,n))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{j as default};