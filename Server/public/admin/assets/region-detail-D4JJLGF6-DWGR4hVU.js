import{u as q,a as L,b as z}from"./chunk-NOAFLTPV-B50x3S1A.js";import{L as B}from"./chunk-I3VB6NM2-usl1gJRa.js";import{f as M}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{u as O,_ as Q}from"./chunk-X3LH6P65-DIy7pNFr.js";import{e1 as T,j as r,q as b,d as H,R as W,l as Y,a as G,dn as K,e2 as F,s as J,b as x,r as P,e3 as R,H as E,A as h,Y as U,T as $,u as X,d$ as Z,t as d}from"./index-8dTaQ3lM.js";import"./lodash-C6PCrkh9.js";import{c as V}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-TMAS4ILY-B-2XAKwD.js";import{S as f}from"./chunk-LFLGEXIG-D5Vq1p-x.js";import{S as ee}from"./chunk-2RQLKDBF-ChBkrwcC.js";import{u as j}from"./use-prompt-BeijyB4C.js";import{P as se}from"./plus-mini-CBGI8QXP.js";import{P as te}from"./pencil-square-tGUjzUAY.js";import{T as k}from"./trash-DIUrH_Hh.js";import{C as D}from"./container-KTPVI1v1.js";import{C as _}from"./checkbox-BZxRa03K.js";import{c as re}from"./index-jlenjjC8.js";import"./chunk-C76H5USB-CybLzP4I.js";import"./chunk-YEDAFXMB-c3NiISLU.js";import"./chunk-AOFGTNG6-O39pZc4P.js";import"./table-D-pcRyNv.js";import"./chunk-WX2SMNCD-DAvKI-te.js";import"./command-bar-BcSK6zMH.js";import"./index-BkHMQ5UJ.js";import"./chunk-DV5RB7II-eFq7gu5C.js";import"./format-BT5j_840.js";import"./_isIndex-glBozcBN.js";import"./x-mark-mini-D-9bDFxP.js";import"./date-picker-BFYAwDTn.js";import"./popover-C3_KveuS.js";import"./triangle-left-mini-DA9umqRW.js";import"./index-DRZ4QgA2.js";import"./Trans-Cuq5DdFl.js";import"./check-QPcdWqeF.js";import"./prompt-kZglONe4.js";var S="*payment_providers,*countries,+automatic_taxes",Ke=t=>{const{id:s}=t.params||{},{region:e}=T(s,{fields:S},{initialData:t.data,enabled:!!s});return e?r.jsx("span",{children:e.name}):null},ie=t=>({queryKey:F.detail(t),queryFn:async()=>J.admin.region.retrieve(t,{fields:S})}),Fe=async({params:t})=>{const s=t.id,e=ie(s);return b.getQueryData(e.queryKey)??await b.fetchQuery(e)},y="c",v=10,ae=({region:t})=>{const{t:s}=x(),e=j(),[i,o]=P.useState({}),{searchParams:a,raw:u}=q({pageSize:v,prefix:y}),{countries:c,count:n}=L({countries:t.countries||[],...a}),m=ne(),{table:p}=O({data:c||[],columns:m,count:n,enablePagination:!0,enableRowSelection:!0,getRowId:g=>g.iso_2,pageSize:v,rowSelection:{state:i,updater:o},prefix:y,meta:{region:t}}),{mutateAsync:I}=R(t.id),A=async()=>{var C;const g=Object.keys(i).filter(l=>i[l]);if(!await e({title:s("general.areYouSure"),description:s("regions.removeCountriesWarning",{count:g.length}),verificationText:s("actions.remove"),verificationInstruction:s("general.typeToConfirm"),cancelText:s("actions.cancel"),confirmText:s("actions.remove")}))return;const N=(C=t.countries)==null?void 0:C.filter(l=>!g.includes(l.iso_2)).map(l=>l.iso_2);await I({countries:N},{onSuccess:()=>{d.success(s("regions.toast.countries"))},onError:l=>{d.error(l.message)}})};return r.jsxs(D,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{level:"h2",children:s("fields.countries")}),r.jsx(h,{groups:[{actions:[{label:s("regions.addCountries"),icon:r.jsx(se,{}),to:"countries/add"}]}]})]}),r.jsx(Q,{table:p,columns:m,pageSize:v,count:n,orderBy:[{key:"display_name",label:s("fields.name")},{key:"iso_2",label:s("fields.code")}],search:!0,pagination:!0,queryObject:u,prefix:y,commands:[{action:A,label:s("actions.remove"),shortcut:"r"}]})]})},oe=({country:t,region:s})=>{var c;const{t:e}=x(),i=j(),{mutateAsync:o}=R(s.id),a=(c=s.countries)==null?void 0:c.filter(n=>n.iso_2!==t.iso_2).map(n=>n.iso_2),u=async()=>{await i({title:e("general.areYouSure"),description:e("regions.removeCountryWarning",{name:t.display_name}),verificationText:t.display_name,verificationInstruction:e("general.typeToConfirm"),cancelText:e("actions.cancel"),confirmText:e("actions.remove")})&&await o({countries:a},{onSuccess:()=>{d.success(e("regions.toast.countries"))},onError:m=>{d.error(m.message)}})};return r.jsx(h,{groups:[{actions:[{label:e("actions.remove"),onClick:u,icon:r.jsx(k,{})}]}]})},w=re(),ne=()=>{const t=z();return P.useMemo(()=>[w.display({id:"select",header:({table:s})=>r.jsx(_,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:e=>s.toggleAllPageRowsSelected(!!e)}),cell:({row:s})=>r.jsx(_,{checked:s.getIsSelected(),onCheckedChange:e=>s.toggleSelected(!!e),onClick:e=>{e.stopPropagation()}})}),...t,w.display({id:"actions",cell:({row:s,table:e})=>{const{region:i}=e.options.meta;return r.jsx(oe,{country:s.original,region:i})}})],[t])},ce=({region:t,pricePreferences:s})=>{var o;const{t:e}=x(),i=s==null?void 0:s.find(a=>a.attribute==="region_id"&&a.value===t.id);return r.jsxs(D,{className:"divide-y p-0",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[r.jsx(E,{children:t.name}),r.jsx(le,{region:t})]}),r.jsx(f,{title:e("fields.currency"),value:r.jsxs("div",{className:"flex items-center gap-x-2",children:[r.jsx(U,{size:"2xsmall",className:"uppercase",children:t.currency_code}),r.jsx($,{size:"small",leading:"compact",children:V[t.currency_code.toUpperCase()].name})]})}),r.jsx(f,{title:e("fields.automaticTaxes"),value:t.automatic_taxes?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.taxInclusivePricing"),value:i!=null&&i.is_tax_inclusive?e("fields.true"):e("fields.false")}),r.jsx(f,{title:e("fields.paymentProviders"),value:r.jsx("div",{className:"inline-flex",children:(o=t.payment_providers)!=null&&o.length?r.jsx(B,{list:t.payment_providers.map(a=>M(a.id))}):"-"})})]})},le=({region:t})=>{const s=X(),{t:e}=x(),{mutateAsync:i}=Z(t.id),o=j(),a=async()=>{await o({title:e("general.areYouSure"),description:e("regions.deleteRegionWarning",{name:t.name}),verificationText:t.name,verificationInstruction:e("general.typeToConfirm"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await i(void 0,{onSuccess:()=>{d.success(e("regions.toast.delete")),s("/settings/regions",{replace:!0})},onError:c=>{d.error(c.message)}})};return r.jsx(h,{groups:[{actions:[{icon:r.jsx(te,{}),label:e("actions.edit"),to:`/settings/regions/${t.id}/edit`}]},{actions:[{icon:r.jsx(k,{}),label:e("actions.delete"),onClick:a}]}]})},Je=()=>{const t=H(),{id:s}=W(),{region:e,isPending:i,isError:o,error:a}=T(s,{fields:S},{initialData:t}),{price_preferences:u,isPending:c,isError:n,error:m}=Y({attribute:"region_id",value:s},{enabled:!!e}),{getWidgets:p}=G();if(i||c||!e)return r.jsx(K,{sections:2,showJSON:!0,showMetadata:!0});if(o)throw a;if(n)throw m;return r.jsxs(ee,{widgets:{before:p("region.details.before"),after:p("region.details.after")},data:e,showMetadata:!0,showJSON:!0,children:[r.jsx(ce,{region:e,pricePreferences:u??[]}),r.jsx(ae,{region:e})]})};export{Ke as Breadcrumb,Je as Component,Fe as loader};
