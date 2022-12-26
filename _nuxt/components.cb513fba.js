import{f as a,e as p}from"./entry.626ba323.js";const S=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),s=(e,t)=>(i,r)=>(p(()=>e({...S(i),...r.attrs},r)),()=>{var o,n;return t?(n=(o=r.slots).default)==null?void 0:n.call(o):null}),g={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},u=a({name:"NoScript",inheritAttrs:!1,props:{...g,title:String,body:Boolean,renderPriority:[String,Number]},setup:s((e,{slots:t})=>{var o;const i={...e},r=(((o=t.default)==null?void 0:o.call(t))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return r&&(i.children=r),{noscript:[i]}})}),c=a({name:"Link",inheritAttrs:!1,props:{...g,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>({link:[e]}))}),f=a({name:"Base",inheritAttrs:!1,props:{...g,href:String,target:String},setup:s(e=>({base:e}))}),m=a({name:"Title",inheritAttrs:!1,setup:s((e,{slots:t})=>{var r,o,n;return{title:((n=(o=(r=t.default)==null?void 0:r.call(t))==null?void 0:o[0])==null?void 0:n.children)||null}})}),y=a({name:"Meta",inheritAttrs:!1,props:{...g,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),h=a({name:"Style",inheritAttrs:!1,props:{...g,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:s((e,{slots:t})=>{var o,n,l;const i={...e},r=(l=(n=(o=t.default)==null?void 0:o.call(t))==null?void 0:n[0])==null?void 0:l.children;return r&&(i.children=r),{style:[i]}})}),b=a({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var i,r;return(r=(i=t.slots).default)==null?void 0:r.call(i)}}),B=a({name:"Html",inheritAttrs:!1,props:{...g,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(e=>({htmlAttrs:e}),!0)}),v=a({name:"Body",inheritAttrs:!1,props:{...g,renderPriority:[String,Number]},setup:s(e=>({bodyAttrs:e}),!0)});export{f as Base,v as Body,b as Head,B as Html,c as Link,y as Meta,u as NoScript,h as Style,m as Title};
