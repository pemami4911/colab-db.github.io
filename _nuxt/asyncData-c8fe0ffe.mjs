import{i as _,r as c,f as g,o as w,g as p,w as b,j as C,k as P}from"./entry-d0ce958a.mjs";const x=a=>_(a)?a:c(a),O=()=>null;function z(a,i,e={}){var d,h,y,m,v;if(typeof a!="string")throw new TypeError("asyncData key must be a string");if(typeof i!="function")throw new TypeError("asyncData handler must be a function");e={server:!0,default:O,...e},e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(h=(d=e.lazy)!=null?d:e.defer)!=null?h:!1,e.initialCache=(y=e.initialCache)!=null?y:!0;const r=g(),f=C();if(f&&!f._nuxtOnBeforeMountCbs){const s=f._nuxtOnBeforeMountCbs=[];f&&(w(()=>{s.forEach(t=>{t()}),s.splice(0,s.length)}),p(()=>s.splice(0,s.length)))}const l=()=>e.initialCache&&r.payload.data[a]!==void 0,n={data:x((m=r.payload.data[a])!=null?m:e.default()),pending:c(!l()),error:c((v=r.payload._errors[a])!=null?v:null)};n.refresh=(s={})=>r._asyncDataPromises[a]?r._asyncDataPromises[a]:s._initial&&l()?r.payload.data[a]:(n.pending.value=!0,r._asyncDataPromises[a]=Promise.resolve(i(r)).then(t=>{e.transform&&(t=e.transform(t)),e.pick&&(t=A(t,e.pick)),n.data.value=t,n.error.value=null}).catch(t=>{n.error.value=t,n.data.value=P(e.default())}).finally(()=>{n.pending.value=!1,r.payload.data[a]=n.data.value,n.error.value&&(r.payload._errors[a]=!0),delete r._asyncDataPromises[a]}),r._asyncDataPromises[a]);const u=()=>n.refresh({_initial:!0}),D=e.server!==!1&&r.payload.serverRendered;{D&&r.isHydrating&&a in r.payload.data?n.pending.value=!1:f&&r.payload.serverRendered&&(r.isHydrating||e.lazy)?f._nuxtOnBeforeMountCbs.push(u):u(),e.watch&&b(e.watch,()=>n.refresh());const s=r.hook("app:data:refresh",t=>{if(!t||t.includes(a))return n.refresh()});f&&p(s)}const o=Promise.resolve(r._asyncDataPromises[a]).then(()=>n);return Object.assign(o,n),o}function B(a){const i=a?Array.isArray(a)?a:[a]:void 0;return g().callHook("app:data:refresh",i)}function A(a,i){const e={};for(const r of i)e[r]=a[r];return e}export{B as r,z as u,x as w};