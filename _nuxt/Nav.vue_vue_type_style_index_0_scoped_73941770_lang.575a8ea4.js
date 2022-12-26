import{f as _t,j as Ft}from"./entry.626ba323.js";const O=/^[a-z0-9]+(-[a-z0-9]+)*$/,m=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function D(t){return{...m,...t}}const N=(t,e,n,i="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;i=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:i,prefix:l,name:c};return e&&!C(a)?null:a}const r=o[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return e&&!C(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return e&&!C(c,n)?null:c}return null},C=(t,e)=>t?!!((t.provider===""||t.provider.match(O))&&(e&&t.prefix===""||t.prefix.match(O))&&t.name.match(O)):!1;function Mt(t,e){const n={...t};for(const i in m){const o=i;if(e[o]!==void 0){const r=e[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function rt(t,e,n=!1){function i(r,s){if(t.icons[r]!==void 0)return Object.assign({},t.icons[r]);if(s>5)return null;const c=t.aliases;if(c&&c[r]!==void 0){const a=c[r],f=i(a.parent,s+1);return f&&Mt(f,a)}const l=t.chars;return!s&&l&&l[r]!==void 0?i(l[r],s+1):null}const o=i(e,0);if(o)for(const r in m)o[r]===void 0&&t[r]!==void 0&&(o[r]=t[r]);return o&&n?D(o):o}function Tt(t){for(const e in m)if(t[e]!==void 0)return!0;return!1}function ht(t,e,n){n=n||{};const i=[];if(typeof t!="object"||typeof t.icons!="object")return i;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),i.push(s)});const o=t.icons;Object.keys(o).forEach(s=>{const c=rt(t,s,!0);c&&(e(s,c),i.push(s))});const r=n.aliases||"all";if(r!=="none"&&typeof t.aliases=="object"){const s=t.aliases;Object.keys(s).forEach(c=>{if(r==="variations"&&Tt(s[c]))return;const l=rt(t,c,!0);l&&(e(c,l),i.push(c))})}return i}const B={provider:"string",aliases:"object",not_found:"object"};for(const t in m)B[t]=typeof m[t];function dt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object")return null;for(const o in B)if(t[o]!==void 0&&typeof t[o]!==B[o])return null;const n=e.icons;for(const o in n){const r=n[o];if(!o.match(O)||typeof r.body!="string")return null;for(const s in m)if(r[s]!==void 0&&typeof r[s]!=typeof m[s])return null}const i=e.aliases;if(i)for(const o in i){const r=i[o],s=r.parent;if(!o.match(O)||typeof s!="string"||!n[s]&&!i[s])return null;for(const c in m)if(r[c]!==void 0&&typeof r[c]!=typeof m[c])return null}return e}const Lt=1;let M=Object.create(null);try{const t=window||self;t&&t._iconifyStorage.version===Lt&&(M=t._iconifyStorage.storage)}catch{}function Dt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:Object.create(null)}}function j(t,e){M[t]===void 0&&(M[t]=Object.create(null));const n=M[t];return n[e]===void 0&&(n[e]=Dt(t,e)),n[e]}function W(t,e){if(!dt(e))return[];const n=Date.now();return ht(e,(i,o)=>{o?t.icons[i]=o:t.missing[i]=n})}function Nt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]=Object.freeze(D(n)),!0}catch{}return!1}function Rt(t,e){const n=t.icons[e];return n===void 0?null:n}let A=!1;function gt(t){return typeof t=="boolean"&&(A=t),A}function Ut(t){const e=typeof t=="string"?N(t,!0,A):t;return e?Rt(j(e.provider,e.prefix),e.name):null}function $t(t,e){const n=N(t,!0,A);if(!n)return!1;const i=j(n.provider,n.prefix);return Nt(i,n.name,e)}function qt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=typeof t.provider=="string"?t.provider:""),A&&e===""&&(typeof t.prefix!="string"||t.prefix==="")){let i=!1;return dt(t)&&(t.prefix="",ht(t,(o,r)=>{r&&$t(o,r)&&(i=!0)})),i}if(typeof t.prefix!="string"||!C({provider:e,prefix:t.prefix,name:"a"}))return!1;const n=j(e,t.prefix);return!!W(n,t)}const it=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function Qt(t,e){const n={};for(const i in t){const o=i;if(n[o]=t[o],e[o]===void 0)continue;const r=e[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}const Vt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Kt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $(t,e,n){if(e===1)return t;if(n=n===void 0?100:n,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(Vt);if(i===null||!i.length)return t;const o=[];let r=i.shift(),s=Kt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?o.push(r):o.push(Math.ceil(c*e*n)/n)}else o.push(r);if(r=i.shift(),r===void 0)return o.join("");s=!s}}function zt(t){let e="";switch(t.hAlign){case"left":e+="xMin";break;case"right":e+="xMax";break;default:e+="xMid"}switch(t.vAlign){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+=t.slice?" slice":" meet",e}function Bt(t,e){const n={left:t.left,top:t.top,width:t.width,height:t.height};let i=t.body;[t,e].forEach(c=>{const l=[],a=c.hFlip,f=c.vFlip;let u=c.rotate;a?f?u+=2:(l.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),l.push("scale(-1 1)"),n.top=n.left=0):f&&(l.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),l.push("scale(1 -1)"),n.top=n.left=0);let h;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:h=n.height/2+n.top,l.unshift("rotate(90 "+h.toString()+" "+h.toString()+")");break;case 2:l.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:h=n.width/2+n.left,l.unshift("rotate(-90 "+h.toString()+" "+h.toString()+")");break}u%2===1&&((n.left!==0||n.top!==0)&&(h=n.left,n.left=n.top,n.top=h),n.width!==n.height&&(h=n.width,n.width=n.height,n.height=h)),l.length&&(i='<g transform="'+l.join(" ")+'">'+i+"</g>")});let o,r;e.width===null&&e.height===null?(r="1em",o=$(r,n.width/n.height)):e.width!==null&&e.height!==null?(o=e.width,r=e.height):e.height!==null?(r=e.height,o=$(r,n.width/n.height)):(o=e.width,r=$(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o.toString()+"",r=typeof r=="string"?r:r.toString()+"";const s={attributes:{width:o,height:r,preserveAspectRatio:zt(e),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:i};return e.inline&&(s.inline=!0),s}const Ht=/\sid="(\S+)"/g,Yt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Gt=0;function Jt(t,e=Yt){const n=[];let i;for(;i=Ht.exec(t);)n.push(i[1]);return n.length&&n.forEach(o=>{const r=typeof e=="function"?e(o):e+(Gt++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),t}const H=Object.create(null);function Wt(t,e){H[t]=e}function Y(t){return H[t]||H[""]}function X(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path===void 0?"/":t.path,maxURL:t.maxURL?t.maxURL:500,rotate:t.rotate?t.rotate:750,timeout:t.timeout?t.timeout:5e3,random:t.random===!0,index:t.index?t.index:0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Z=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],T=[];for(;k.length>0;)k.length===1||Math.random()>.5?T.push(k.shift()):T.push(k.pop());Z[""]=X({resources:["https://api.iconify.design"].concat(T)});function Xt(t,e){const n=X(e);return n===null?!1:(Z[t]=n,!0)}function tt(t){return Z[t]}const pt=(t,e)=>{let n=t,i=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(e).forEach(r=>{let s;try{s=o(e[r])}catch{return}n+=(i?"&":"?")+encodeURIComponent(r)+"="+s,i=!0}),n},yt={},L={},Zt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}return null};let st=Zt();function te(t,e){const n=tt(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(c=>{r=Math.max(r,c.length)});const s=pt(e+".json",{icons:""});i=n.maxURL-r-n.path.length-s.length}const o=t+":"+e;return L[t]=n.path,yt[o]=i,i}function ee(t){return t===404}const ne=(t,e,n)=>{const i=[];let o=yt[e];o===void 0&&(o=te(t,e));const r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(i.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function oe(t){if(typeof t=="string"){if(L[t]===void 0){const e=tt(t);if(!e)return"/";L[t]=e.path}return L[t]}return"/"}const re=(t,e,n)=>{if(!st){n("abort",424);return}let i=oe(e.provider);switch(e.type){case"icons":{const r=e.prefix,c=e.icons.join(",");i+=pt(r+".json",{icons:c});break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;st(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(ee(s)?"abort":"next",s)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},ie={prepare:ne,send:re};function se(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(o=>{if(i.name===o.name&&i.prefix===o.prefix&&i.provider===o.provider)return;i=o;const r=o.provider,s=o.prefix,c=o.name;n[r]===void 0&&(n[r]=Object.create(null));const l=n[r];l[s]===void 0&&(l[s]=j(r,s));const a=l[s];let f;a.icons[c]!==void 0?f=e.loaded:s===""||a.missing[c]!==void 0?f=e.missing:f=e.pending;const u={provider:r,prefix:s,name:c};f.push(u)}),e}const v=Object.create(null),q=Object.create(null);function mt(t,e){t.forEach(n=>{const i=n.provider;if(v[i]===void 0)return;const o=v[i],r=n.prefix,s=o[r];s&&(o[r]=s.filter(c=>c.id!==e))})}function ce(t,e){q[t]===void 0&&(q[t]=Object.create(null));const n=q[t];n[e]||(n[e]=!0,setTimeout(()=>{if(n[e]=!1,v[t]===void 0||v[t][e]===void 0)return;const i=v[t][e].slice(0);if(!i.length)return;const o=j(t,e);let r=!1;i.forEach(s=>{const c=s.icons,l=c.pending.length;c.pending=c.pending.filter(a=>{if(a.prefix!==e)return!0;const f=a.name;if(o.icons[f]!==void 0)c.loaded.push({provider:t,prefix:e,name:f});else if(o.missing[f]!==void 0)c.missing.push({provider:t,prefix:e,name:f});else return r=!0,!0;return!1}),c.pending.length!==l&&(r||mt([{provider:t,prefix:e}],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}let le=0;function ae(t,e,n){const i=le++,o=mt.bind(null,n,i);if(!e.pending.length)return o;const r={id:i,icons:e,callback:t,abort:o};return n.forEach(s=>{const c=s.provider,l=s.prefix;v[c]===void 0&&(v[c]=Object.create(null));const a=v[c];a[l]===void 0&&(a[l]=[]),a[l].push(r)}),o}function fe(t,e=!0,n=!1){const i=[];return t.forEach(o=>{const r=typeof o=="string"?N(o,!1,n):o;(!e||C(r,n))&&i.push({provider:r.provider,prefix:r.prefix,name:r.name})}),i}var ct={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ue(t,e,n,i){const o=t.resources.length,r=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const p=Math.floor(Math.random()*d.length);s.push(d[p]),d=d.slice(0,p).concat(d.slice(p+1))}s=s.concat(d)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,f,u=null,h=[],g=[];typeof i=="function"&&g.push(i);function y(){u&&(clearTimeout(u),u=null)}function x(){l==="pending"&&(l="aborted"),y(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function R(d,p){p&&(g=[]),typeof d=="function"&&g.push(d)}function Et(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:h.length,subscribe:R,abort:x}}function P(){l="failed",g.forEach(d=>{d(void 0,f)})}function ot(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function Pt(d,p,S){const _=p!=="success";switch(h=h.filter(w=>w!==d),l){case"pending":break;case"failed":if(_||!t.dataAfterTimeout)return;break;default:return}if(p==="abort"){f=S,P();return}if(_){f=S,h.length||(s.length?U():P());return}if(y(),ot(),!t.random){const w=t.resources.indexOf(d.resource);w!==-1&&w!==t.index&&(t.index=w)}l="completed",g.forEach(w=>{w(S)})}function U(){if(l!=="pending")return;y();const d=s.shift();if(d===void 0){if(h.length){u=setTimeout(()=>{y(),l==="pending"&&(ot(),P())},t.timeout);return}P();return}const p={status:"pending",resource:d,callback:(S,_)=>{Pt(p,S,_)}};h.push(p),a++,u=setTimeout(U,t.rotate),n(d,e,p.callback)}return setTimeout(U),Et}function he(t){if(typeof t!="object"||typeof t.resources!="object"||!(t.resources instanceof Array)||!t.resources.length)throw new Error("Invalid Reduncancy configuration");const e=Object.create(null);let n;for(n in ct)t[n]!==void 0?e[n]=t[n]:e[n]=ct[n];return e}function bt(t){const e=he(t);let n=[];function i(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=ue(e,c,l,(u,h)=>{i(),a&&a(u,h)});return n.push(f),f}function r(c){const l=n.find(a=>c(a));return l!==void 0?l:null}return{query:o,find:r,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:i}}function lt(){}const Q=Object.create(null);function de(t){if(Q[t]===void 0){const e=tt(t);if(!e)return;const n=bt(e),i={config:e,redundancy:n};Q[t]=i}return Q[t]}function ge(t,e,n){let i,o;if(typeof t=="string"){const r=Y(t);if(!r)return n(void 0,424),lt;o=r.send;const s=de(t);s&&(i=s.redundancy)}else{const r=X(t);if(r){i=bt(r);const s=t.resources?t.resources[0]:"",c=Y(s);c&&(o=c.send)}}return!i||!o?(n(void 0,424),lt):i.query(e,o,n)().abort}const G={};function at(){}const I=Object.create(null),V=Object.create(null),K=Object.create(null),z=Object.create(null);function pe(t,e){K[t]===void 0&&(K[t]=Object.create(null));const n=K[t];n[e]||(n[e]=!0,setTimeout(()=>{n[e]=!1,ce(t,e)}))}const ft=Object.create(null);function ye(t,e,n){function i(){const c=(t===""?"":"@"+t+":")+e,l=Math.floor(Date.now()/6e4);ft[c]<l&&(ft[c]=l,console.error('Unable to retrieve icons for "'+c+'" because API is not configured properly.'))}V[t]===void 0&&(V[t]=Object.create(null));const o=V[t];z[t]===void 0&&(z[t]=Object.create(null));const r=z[t];I[t]===void 0&&(I[t]=Object.create(null));const s=I[t];o[e]===void 0?o[e]=n:o[e]=o[e].concat(n).sort(),r[e]||(r[e]=!0,setTimeout(()=>{r[e]=!1;const c=o[e];delete o[e];const l=Y(t);if(!l){i();return}l.prepare(t,e,c).forEach(f=>{ge(t,f,(u,h)=>{const g=j(t,e);if(typeof u!="object"){if(h!==404)return;const y=Date.now();f.icons.forEach(x=>{g.missing[x]=y})}else try{const y=W(g,u);if(!y.length)return;const x=s[e];y.forEach(R=>{delete x[R]}),G.store&&G.store(t,u)}catch(y){console.error(y)}pe(t,e)})})}))}const me=(t,e)=>{const n=fe(t,!0,gt()),i=se(n);if(!i.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(i.loaded,i.missing,i.pending,at)}),()=>{a=!1}}const o=Object.create(null),r=[];let s,c;i.pending.forEach(a=>{const f=a.provider,u=a.prefix;if(u===c&&f===s)return;s=f,c=u,r.push({provider:f,prefix:u}),I[f]===void 0&&(I[f]=Object.create(null));const h=I[f];h[u]===void 0&&(h[u]=Object.create(null)),o[f]===void 0&&(o[f]=Object.create(null));const g=o[f];g[u]===void 0&&(g[u]=[])});const l=Date.now();return i.pending.forEach(a=>{const f=a.provider,u=a.prefix,h=a.name,g=I[f][u];g[h]===void 0&&(g[h]=l,o[f][u].push(h))}),r.forEach(a=>{const f=a.provider,u=a.prefix;o[f][u].length&&ye(f,u,o[f][u])}),e?ae(e,i,r):at},vt="iconify2",E="iconify",wt=E+"-count",It=E+"-version",jt=36e5,be=168,et={local:!0,session:!0};let J=!1;const xt={local:0,session:0},St={local:[],session:[]};let F=typeof window>"u"?{}:window;function kt(t){const e=t+"Storage";try{if(F&&F[e]&&typeof F[e].length=="number")return F[e]}catch{}return et[t]=!1,null}function nt(t,e,n){try{return t.setItem(wt,n.toString()),xt[e]=n,!0}catch{return!1}}function Ot(t){const e=t.getItem(wt);if(e){const n=parseInt(e);return n||0}return 0}function ve(t,e){try{t.setItem(It,vt)}catch{}nt(t,e,0)}function we(t){try{const e=Ot(t);for(let n=0;n<e;n++)t.removeItem(E+n.toString())}catch{}}const Ct=()=>{if(J)return;J=!0;const t=Math.floor(Date.now()/jt)-be;function e(n){const i=kt(n);if(!i)return;const o=r=>{const s=E+r.toString(),c=i.getItem(s);if(typeof c!="string")return!1;let l=!0;try{const a=JSON.parse(c);if(typeof a!="object"||typeof a.cached!="number"||a.cached<t||typeof a.provider!="string"||typeof a.data!="object"||typeof a.data.prefix!="string")l=!1;else{const f=a.provider,u=a.data.prefix,h=j(f,u);l=W(h,a.data).length>0}}catch{l=!1}return l||i.removeItem(s),l};try{const r=i.getItem(It);if(r!==vt){r&&we(i),ve(i,n);return}let s=Ot(i);for(let c=s-1;c>=0;c--)o(c)||(c===s-1?s--:St[n].push(c));nt(i,n,s)}catch{}}for(const n in et)e(n)},Ie=(t,e)=>{J||Ct();function n(i){if(!et[i])return!1;const o=kt(i);if(!o)return!1;let r=St[i].shift();if(r===void 0&&(r=xt[i],!nt(o,i,r+1)))return!1;try{const s={cached:Math.floor(Date.now()/jt),provider:t,data:e};o.setItem(E+r.toString(),JSON.stringify(s))}catch{return!1}return!0}!Object.keys(e.icons).length||(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))},At=/[\s,]+/;function je(t,e){e.split(At).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function xe(t,e){e.split(At).forEach(n=>{const i=n.trim();switch(i){case"left":case"center":case"right":t.hAlign=i;break;case"top":case"middle":case"bottom":t.vAlign=i;break;case"slice":case"crop":t.slice=!0;break;case"meet":t.slice=!1}})}function Se(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:i(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?i(r):0)}}return e}const ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};let b={};["horizontal","vertical"].forEach(t=>{["Align","Flip"].forEach(e=>{const i={attr:t.slice(0,1)+e,boolean:e==="Flip"};b[t+"-"+e.toLowerCase()]=i,b[t.slice(0,1)+"-"+e.toLowerCase()]=i,b[t+e]=i})});const ut=(t,e)=>{const n=Qt(it,e),i={...ke};let o=typeof e.style=="object"&&!(e.style instanceof Array)?{...e.style}:{};for(let l in e){const a=e[l];if(a!==void 0)switch(l){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[l]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&je(n,a);break;case"align":typeof a=="string"&&xe(n,a);break;case"color":o.color=a;break;case"rotate":typeof a=="string"?n[l]=Se(a):typeof a=="number"&&(n[l]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete i["aria-hidden"];break;default:b[l]!==void 0?b[l].boolean&&(a===!0||a==="true"||a===1)?n[b[l].attr]=!0:!b[l].boolean&&typeof a=="string"&&a!==""&&(n[b[l].attr]=a):it[l]===void 0&&(i[l]=a)}}const r=Bt(t,n);for(let l in r.attributes)i[l]=r.attributes[l];r.inline&&o.verticalAlign===void 0&&o["vertical-align"]===void 0&&(o.verticalAlign="-0.125em");let s=0,c=e.id;return typeof c=="string"&&(c=c.replace(/-/g,"_")),i.innerHTML=Jt(r.body,c?()=>c+"ID"+s++:"iconifyVue"),Object.keys(o).length>0&&(i.style=o),Ft("svg",i)};gt(!0);Wt("",ie);if(typeof document<"u"&&typeof window<"u"){G.store=Ie,Ct();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!qt(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Xt(n,o)||console.error(i)}catch{console.error(i)}}}}const Oe=D({body:""}),Ae=_t({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:D(t)};let n;if(typeof t!="string"||(n=N(t,!1,!0))===null)return this.abortLoading(),null;const i=Ut(n);if(i===null)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",this._loadingIcon={name:t,abort:me([n],()=>{this.counter++})}),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:i,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return ut(Oe,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),ut(e.data,n)}});export{Ae as I};
