let h,f,u,v=(async()=>{const m="modulepreload",p=function(t){return"/"+t},_={},y=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=p(e),e in _)return;_[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(s)for(let l=a.length-1;l>=0;l--){const c=a[l];if(c.href===e&&(!n||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":m,n||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),n)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},g=new Set(["Module","__esModule","default","_export_sfc"]);let b={"./Formulario":()=>(h(["style-4ea5184f.css"]),E("./__federation_expose_Formulario-cded0835.js").then(t=>Object.keys(t).every(r=>g.has(r))?()=>t.default:()=>t))},d;d={},h=t=>{const r=import.meta.url;if(typeof r>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const s=r.substring(0,r.lastIndexOf("remoteEntry.js"));t.forEach(a=>{const e=s+a;if(e in d)return;d[e]=!0;const n=document.head.appendChild(document.createElement("link"));n.href=e,n.rel="stylesheet"})};async function E(t){return y(()=>import(t).then(async r=>(await r.__tla,r)),[])}f=t=>b[t](),u=t=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(t).forEach(([r,s])=>{const a=Object.keys(s)[0],e=Object.values(s)[0],n=e.scope||"default";globalThis.__federation_shared__[n]=globalThis.__federation_shared__[n]||{};const i=globalThis.__federation_shared__[n];(i[r]=i[r]||{})[a]=e})}})();export{v as __tla,h as dynamicLoadingCss,f as get,u as init};