import{g as O,i as D}from"./chunk-THZJC662-D8uxQDqu.js";import{I as E}from"./chunk-EQTBJSBZ-DtSa8SNv.js";import{r as p,b as m,j as a,cH as A,m as T,T as L,H as S,V as y,aX as w,L as z,A as I,W as M,u as H,f1 as U,t as x}from"./index-8dTaQ3lM.js";import{u as W}from"./chunk-5OOAHPXU-v3Fuzc9i.js";import{R as $}from"./react-country-flag.esm-BJN1Y2ZG.js";import{T as B}from"./trash-DIUrH_Hh.js";import{u as P}from"./use-prompt-BeijyB4C.js";import{T as V}from"./table-D-pcRyNv.js";var Y=Object.defineProperty,g=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,_=(s,t,e)=>t in s?Y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,F=(s,t)=>{for(var e in t)C.call(t,e)&&_(s,e,t[e]);if(g)for(var e of g(t))R.call(t,e)&&_(s,e,t[e]);return s},X=(s,t)=>{var e={};for(var r in s)C.call(s,r)&&t.indexOf(r)<0&&(e[r]=s[r]);if(s!=null&&g)for(var r of g(s))t.indexOf(r)<0&&R.call(s,r)&&(e[r]=s[r]);return e};const N=p.forwardRef((s,t)=>{var e=s,{color:r="currentColor"}=e,o=X(e,["color"]);return p.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},o),p.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M11.437 4.814c0 2.319-3.937 6.464-3.937 6.464S3.563 7.134 3.563 4.814c0-2.378 2.035-3.758 3.937-3.758s3.937 1.38 3.937 3.758"}),p.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 6.167a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M13.056 13.945H1.944"}))});N.displayName="MapPin";var q=({taxRegion:s,to:t="/settings/tax-regions"})=>{const{t:e}=m(),r=H(),o=P(),{mutateAsync:f}=U(s.id);return async()=>{await o({title:e("general.areYouSure"),description:e("taxRegions.delete.confirmation"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await f(void 0,{onSuccess:()=>{x.success(e("taxRegions.delete.successToast")),r(t,{replace:!0})},onError:n=>{x.error(n.message)}})}},re=s=>{const{t}=m(),e=P(),{mutateAsync:r}=W(s.id);return async()=>{await e({title:t("general.areYouSure"),description:t("taxRegions.taxRates.delete.confirmation",{name:s.name}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await r(void 0,{onSuccess:()=>{x.success(t("taxRegions.taxRates.delete.successToast"))},onError:c=>{x.error(c.message)}})}},ne=({taxRegion:s,type:t="list",variant:e="country",asLink:r=!0,badge:o})=>{const{t:f}=m(),{id:c,country_code:l,province_code:n}=s,i=A(l),h=O(n);let d="N/A",u=null;h||n?d=h||n.toUpperCase():(i||l)&&(d=i?i.display_name:l.toUpperCase()),l&&n&&!D(l,n)&&(d=n.toUpperCase(),u=f("taxRegions.fields.sublevels.tooltips.notPartOfCountry",{country:i==null?void 0:i.display_name,province:n.toUpperCase()}));const v=!s.tax_rates.filter(k=>k.is_default).length&&t==="header",j=a.jsxs("div",{className:T("group-data-[link=true]:hover:bg-ui-bg-base-hover transition-fg flex flex-col justify-between gap-y-4 px-6 md:flex-row md:items-center md:gap-y-0",{"py-4":t==="header","py-3":t==="list"}),children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-x-4",children:[a.jsx(E,{size:t==="list"?"small":"large",children:l&&!n?a.jsx("div",{className:T("flex size-fit items-center justify-center overflow-hidden rounded-[1px]",{"rounded-sm":t==="header"}),children:a.jsx($,{countryCode:l,svg:!0,style:t==="list"?{width:"12px",height:"9px"}:{width:"16px",height:"12px"},"aria-label":i==null?void 0:i.display_name})}):a.jsx(N,{className:"text-ui-fg-subtle"})}),a.jsx("div",{children:t==="list"?a.jsx(L,{size:"small",weight:"plus",leading:"compact",children:d}):a.jsx(S,{children:d})})]}),a.jsxs("div",{className:"flex size-fit items-center gap-x-2 md:hidden",children:[u&&a.jsx(y,{content:u,children:a.jsx(w,{className:"text-ui-tag-orange-icon"})}),o,a.jsx(b,{taxRegion:s,showCreateDefaultTaxRate:v})]})]}),a.jsxs("div",{className:"hidden size-fit items-center gap-x-2 md:flex",children:[u&&a.jsx(y,{content:u,children:a.jsx(w,{className:"text-ui-tag-orange-icon"})}),o,a.jsx(b,{taxRegion:s,showCreateDefaultTaxRate:v})]})]});return r?a.jsx(z,{to:e==="country"?`${c}`:`provinces/${c}`,"data-link":"true",className:"group block",children:j}):j},b=({taxRegion:s,showCreateDefaultTaxRate:t})=>{const{t:e}=m(),r=s.parent_id?`/settings/tax-regions/${s.parent_id}`:void 0,o=q({taxRegion:s,to:r});return a.jsx(I,{groups:[...t?[{actions:[{icon:a.jsx(M,{}),label:e("taxRegions.fields.defaultTaxRate.action"),to:"tax-rates/create"}]}]:[],{actions:[{icon:a.jsx(B,{}),label:e("actions.delete"),onClick:o}]}]})},G=p.forwardRef((s,t)=>{const{t:e}=m(),r={of:e("general.of"),results:e("general.results"),pages:e("general.pages"),prev:e("general.prev"),next:e("general.next")};return a.jsx(V.Pagination,{...s,translations:r,ref:t})});G.displayName="LocalizedTablePagination";export{G as L,ne as T,re as u};
