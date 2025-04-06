import{G as f}from"./chunk-DO73XJPS-kDRj0KVl.js";import{a6 as n,R as g,a_ as v,ar as y,j as e,b as S,a8 as F,a9 as _,t as h,H as b,w as l,x as w,G as Z,B as j}from"./index-8dTaQ3lM.js";import{G as k}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import"./chunk-X3LH6P65-DIy7pNFr.js";import"./lodash-C6PCrkh9.js";import"./chunk-X5VECN6S-DRXwZlNs.js";import"./chunk-TMAS4ILY-B-2XAKwD.js";import{b as C}from"./chunk-GVRV2SOJ-8H0c4iVr.js";import{K as L}from"./chunk-6HTZNHPT-BVNe-3Lq.js";import{R as a,u as E,S as N}from"./chunk-JGQGO74V-BlxCBcdI.js";import"./chunk-NOAFLTPV-B50x3S1A.js";import"./chunk-C76H5USB-CybLzP4I.js";import"./index-jlenjjC8.js";import"./checkbox-BZxRa03K.js";import"./chunk-YEDAFXMB-c3NiISLU.js";import"./chunk-AOFGTNG6-O39pZc4P.js";import"./table-D-pcRyNv.js";import"./chunk-WX2SMNCD-DAvKI-te.js";import"./plus-mini-CBGI8QXP.js";import"./command-bar-BcSK6zMH.js";import"./index-BkHMQ5UJ.js";import"./x-mark-mini-D-9bDFxP.js";import"./chunk-DV5RB7II-eFq7gu5C.js";import"./format-BT5j_840.js";import"./_isIndex-glBozcBN.js";import"./date-picker-BFYAwDTn.js";import"./popover-C3_KveuS.js";import"./triangle-left-mini-DA9umqRW.js";import"./index-DRZ4QgA2.js";import"./chunk-BF3VCHXD-DEZ-_6fT.js";import"./prompt-kZglONe4.js";var D=n.object({name:n.string().min(1),countries:n.array(n.object({iso_2:n.string().min(2),display_name:n.string()})).min(1)});function G({fulfillmentSet:m,type:p,location:o}){const{t:s}=S(),{handleSuccess:d}=E(),t=F({defaultValues:{name:"",countries:[]},resolver:_(D)}),{mutateAsync:u,isPending:i}=C(m.id),x=t.handleSubmit(async r=>{await u({name:r.name,geo_zones:r.countries.map(({iso_2:c})=>({country_code:c,type:"country"}))},{onSuccess:()=>{h.success(s("stockLocations.serviceZones.create.successToast",{name:r.name})),d(`/settings/locations/${o.id}`)},onError:c=>{h.error(c.message)}})});return e.jsx(a.Form,{form:t,children:e.jsxs(L,{className:"flex h-full flex-col overflow-hidden",onSubmit:x,children:[e.jsx(a.Header,{}),e.jsx(a.Body,{className:"flex flex-1 flex-col items-center overflow-auto",children:e.jsxs(N,{id:k,children:[e.jsx("div",{className:"flex flex-1 flex-col items-center",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsx(b,{children:p==="pickup"?s("stockLocations.serviceZones.create.headerPickup",{location:o.name}):s("stockLocations.serviceZones.create.headerShipping",{location:o.name})}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(l.Field,{control:t.control,name:"name",render:({field:r})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{children:s("fields.name")}),e.jsx(l.Control,{children:e.jsx(w,{...r})}),e.jsx(l.ErrorMessage,{})]})})}),e.jsx(Z,{label:s("general.tip"),children:s("stockLocations.serviceZones.fields.tip")}),e.jsx(f,{form:t})]})}),e.jsx(f.AreaDrawer,{form:t})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(j,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(j,{type:"submit",size:"small",isLoading:i,children:s("actions.save")})]})})]})})}function pe(){var r;const{fset_id:m,location_id:p}=g(),{stock_location:o,isPending:s,isFetching:d,isError:t,error:u}=v(p,{fields:"*fulfillment_sets"}),i=(r=o==null?void 0:o.fulfillment_sets)==null?void 0:r.find(c=>c.id===m),x=(i==null?void 0:i.type)==="pickup"?"pickup":"shipping";if(!s&&!d&&!i)throw y({message:`Fulfillment set with ID: ${m} was not found.`},404);if(t)throw u;return e.jsx(a,{prev:`/settings/locations/${p}`,children:i&&e.jsx(G,{fulfillmentSet:i,location:o,type:x})})}export{pe as Component};
