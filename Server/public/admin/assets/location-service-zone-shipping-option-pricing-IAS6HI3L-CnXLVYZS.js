import{U as v,u as ie,b as D,S as se,a as ne}from"./chunk-X4NONLSC-gvbjVGdE.js";import{C as O,R as P,I}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import{D as oe}from"./chunk-GE4APTT2-B0UvRj9E.js";import{a2 as te,ao as R,a4 as y,af as A,ad as F,R as ce,ar as ae,j as n,b as de,r as M,a8 as le,a9 as ue,g as pe,i as me,l as fe,t as N,B as k}from"./index-8dTaQ3lM.js";import{d as ge,c as _e}from"./chunk-BF3VCHXD-DEZ-_6fT.js";import{c as T}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as he}from"./chunk-6HTZNHPT-BVNe-3Lq.js";import{R as S,u as B,a as ye,S as Se}from"./chunk-JGQGO74V-BlxCBcdI.js";import"./chunk-PDWBYQOW-BedvhUOI.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./index.esm-B573xBfL.js";import"./x-mark-mini-D-9bDFxP.js";import"./Trans-Cuq5DdFl.js";import"./currency-input-BedlSwmX.js";import"./_isIndex-glBozcBN.js";import"./index-jlenjjC8.js";import"./checkbox-BZxRa03K.js";import"./prompt-kZglONe4.js";var xe=te({region_prices:R(y(),y().or(A()).optional()),currency_prices:R(y(),y().or(A()).optional()),conditional_region_prices:R(y(),F(v)),conditional_currency_prices:R(y(),F(v))});function Pe({shippingOption:i}){const{t:e}=de(),{handleSuccess:p}=B(),{getIsOpen:a,setIsOpen:u}=ye(),[f,r]=M.useState(null),_=t=>{u(O,!0),r(t)},h=()=>{u(O,!1),r(null)},m=le({defaultValues:je(i.prices),resolver:ue(xe)}),{mutateAsync:o,isPending:d}=_e(i.id),{store:b,isLoading:V,isError:q,error:z}=pe(),x=M.useMemo(()=>{var t;return((t=b==null?void 0:b.supported_currencies)==null?void 0:t.map(L=>L.currency_code))||[]},[b]),{regions:g,isLoading:K,isError:G,error:$}=me({fields:"id,name,currency_code",limit:999}),{price_preferences:H}=fe({}),{setCloseOnEscape:Z}=B(),J=ie({name:i.name,currencies:x,regions:g,pricePreferences:H}),Q=M.useMemo(()=>[[...x||[],...g||[]]],[x,g]),w=m.handleSubmit(async t=>{const L=Object.entries(t.currency_prices).map(([s,c])=>{if(!c||!x.some(E=>E.toLowerCase()===s.toLowerCase()))return;const l={currency_code:s,amount:T(c)},C=i.prices.find(E=>E.currency_code===s&&!E.price_rules.length);return C&&(l.id=C.id),l}).filter(s=>!!s),X=Object.entries(t.conditional_currency_prices).flatMap(([s,c])=>c==null?void 0:c.map(l=>({id:l.id,currency_code:s,amount:T(l.amount),rules:D(l)}))),Y=Object.entries(t.region_prices).map(([s,c])=>!c||!(g!=null&&g.some(C=>C.id===s))?void 0:{region_id:s,amount:T(c)}).filter(s=>!!s),ee=Object.entries(t.conditional_region_prices).flatMap(([s,c])=>c==null?void 0:c.map(l=>({id:l.id,region_id:s,amount:T(l.amount),rules:D(l)}))),re=[...L,...X,...Y,...ee];await o({prices:re},{onSuccess:()=>{N.success(e("general.success")),p()},onError:s=>{N.error(s.message)}})}),W=V||K||!x||!g;if(q)throw z;if(G)throw $;return n.jsx(S.Form,{form:m,children:n.jsxs(he,{className:"flex h-full flex-col overflow-hidden",onSubmit:w,children:[n.jsx(S.Header,{}),n.jsx(S.Body,{children:n.jsx(Se,{id:O,onOpenChangeCallback:t=>{t||r(null)},children:n.jsxs(se,{onOpenConditionalPricesModal:_,onCloseConditionalPricesModal:h,children:[n.jsx("div",{className:"flex size-full flex-col divide-y overflow-hidden",children:n.jsx(oe,{isLoading:W,data:Q,columns:J,state:m,onEditingChange:t=>Z(!t),disableInteractions:a(O)})}),f&&n.jsx(ne,{info:f,variant:"update"})]})})}),n.jsx(S.Footer,{children:n.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[n.jsx(S.Close,{asChild:!0,children:n.jsx(k,{variant:"secondary",size:"small",children:e("actions.cancel")})}),n.jsx(k,{size:"small",className:"whitespace-nowrap",isLoading:d,onClick:w,type:"button",children:e("actions.save")})]})})]})})}var j=(i,e)=>{var a;const p=["eq","gt","lt"].includes(e)?void 0:null;return((a=i==null?void 0:i.find(u=>u.attribute===I&&u.operator===e))==null?void 0:a.value)||p},U=i=>{const e=i.price_rules||[];return{id:i.id,amount:i.amount,gte:j(e,"gte"),lte:j(e,"lte"),gt:j(e,"gt"),lt:j(e,"lt"),eq:j(e,"eq")}},je=i=>{const e=(r,_,h=[])=>{var o;const m=((o=r.price_rules)==null?void 0:o.map(d=>d.attribute))||[];return _.every(d=>m.includes(d))&&!h.some(d=>m.includes(d))},p={},a={},u={},f={};return i.forEach(r=>{var _,h,m;if(!((_=r.price_rules)!=null&&_.length)){p[r.currency_code]=r.amount;return}if(e(r,[I],[P])){const o=r.currency_code;a[o]||(a[o]=[]),a[o].push(U(r));return}if(e(r,[P],[I])){const o=(h=r.price_rules.find(d=>d.attribute===P))==null?void 0:h.value;u[o]=r.amount;return}if(e(r,[P,I])){const o=(m=r.price_rules.find(d=>d.attribute===P))==null?void 0:m.value;f[o]||(f[o]=[]),f[o].push(U(r))}}),{currency_prices:p,conditional_currency_prices:a,region_prices:u,conditional_region_prices:f}};function Ve(){const{so_id:i,location_id:e}=ce();if(!i)throw ae({message:"Shipping Option ID paramater is missing",status:404});const{shipping_option:p,isError:a,error:u}=ge(i,{fields:"*prices,*prices.price_rules"});if(a)throw u;return n.jsx(S,{prev:`/settings/locations/${e}`,children:p&&n.jsx(Pe,{shippingOption:p})})}export{Ve as Component};
