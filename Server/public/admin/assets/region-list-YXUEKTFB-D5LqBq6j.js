import{L as g}from"./chunk-I3VB6NM2-usl1gJRa.js";import{f as y}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{P as h}from"./chunk-P3UUX2T6-DxMcmIcu.js";import{b as o,r as j,j as s,cI as P,a as _,i as T,k as C,H as N,T as R,L as w,B as S,d$ as k,A as z,t as x}from"./index-8dTaQ3lM.js";import{c as v}from"./index-jlenjjC8.js";import{u as A,_ as H}from"./chunk-X3LH6P65-DIy7pNFr.js";import"./lodash-C6PCrkh9.js";import{u as D}from"./chunk-C76H5USB-CybLzP4I.js";import"./chunk-TMAS4ILY-B-2XAKwD.js";import{S as E}from"./chunk-2RQLKDBF-ChBkrwcC.js";import{u as L}from"./use-prompt-BeijyB4C.js";import{P as q}from"./pencil-square-tGUjzUAY.js";import{T as B}from"./trash-DIUrH_Hh.js";import{C as I}from"./container-KTPVI1v1.js";import"./chunk-YEDAFXMB-c3NiISLU.js";import"./chunk-AOFGTNG6-O39pZc4P.js";import"./table-D-pcRyNv.js";import"./chunk-WX2SMNCD-DAvKI-te.js";import"./plus-mini-CBGI8QXP.js";import"./command-bar-BcSK6zMH.js";import"./index-BkHMQ5UJ.js";import"./chunk-DV5RB7II-eFq7gu5C.js";import"./format-BT5j_840.js";import"./_isIndex-glBozcBN.js";import"./x-mark-mini-D-9bDFxP.js";import"./date-picker-BFYAwDTn.js";import"./popover-C3_KveuS.js";import"./triangle-left-mini-DA9umqRW.js";import"./index-DRZ4QgA2.js";import"./Trans-Cuq5DdFl.js";import"./check-QPcdWqeF.js";import"./prompt-kZglONe4.js";var M=({prefix:e,pageSize:r=20})=>{const a=D(["offset","q","order","created_at","updated_at"],e),{offset:t,q:i,order:l,created_at:n,updated_at:c}=a;return{searchParams:{limit:r,offset:t?Number(t):0,order:l,created_at:n?JSON.parse(n):void 0,updated_at:c?JSON.parse(c):void 0,q:i},raw:a}},O=()=>{const{t:e}=o();return[...[{label:e("fields.createdAt"),key:"created_at"},{label:e("fields.updatedAt"),key:"updated_at"}].map(t=>({key:t.key,label:t.label,type:"date"}))]},$=({countries:e})=>{if(!e||e.length===0)return s.jsx(h,{});const r=e.map(a=>{var t;return(t=P.find(i=>i.iso_2===a.iso_2))==null?void 0:t.display_name}).filter(Boolean);return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:r})})},F=()=>{const{t:e}=o();return s.jsx("div",{className:"flex size-full items-center",children:s.jsx("span",{children:e("fields.countries")})})},J=({paymentProviders:e})=>{if(!e||e.length===0)return s.jsx(h,{});const r=e.map(a=>y(a.id));return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx(g,{list:r})})},Q=()=>{const{t:e}=o();return s.jsx("div",{className:"flex size-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e("fields.paymentProviders")})})},W=({name:e})=>s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e})}),G=()=>{const{t:e}=o();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.name")})})},m=v(),V=()=>j.useMemo(()=>[m.accessor("name",{header:()=>s.jsx(G,{}),cell:({getValue:e})=>s.jsx(W,{name:e()})}),m.accessor("countries",{header:()=>s.jsx(F,{}),cell:({getValue:e})=>s.jsx($,{countries:e()})}),m.accessor("payment_providers",{header:()=>s.jsx(Q,{}),cell:({getValue:e})=>s.jsx(J,{paymentProviders:e()})})],[]),u=20,Y=()=>{const{t:e}=o(),{searchParams:r,raw:a}=M({pageSize:u}),{regions:t,count:i,isPending:l,isError:n,error:c}=T({...r,fields:"*payment_providers"},{placeholderData:C}),p=O(),f=U(),{table:b}=A({data:t??[],columns:f,count:i,enablePagination:!0,getRowId:d=>d.id,pageSize:u});if(n)throw c;return s.jsxs(I,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(N,{children:e("regions.domain")}),s.jsx(R,{className:"text-ui-fg-subtle",size:"small",children:e("regions.subtitle")})]}),s.jsx(w,{to:"/settings/regions/create",children:s.jsx(S,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(H,{table:b,columns:f,count:i,pageSize:u,isLoading:l,filters:p,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],navigateTo:d=>`${d.original.id}`,pagination:!0,search:!0,queryObject:a,noRecords:{message:e("regions.list.noRecordsMessage")}})]})},Z=({region:e})=>{const{t:r}=o(),a=L(),{mutateAsync:t}=k(e.id),i=async()=>{await a({title:r("general.areYouSure"),description:r("regions.deleteRegionWarning",{name:e.name}),verificationText:e.name,verificationInstruction:r("general.typeToConfirm"),confirmText:r("actions.delete"),cancelText:r("actions.cancel")})&&await t(void 0,{onSuccess:()=>{x.success(r("regions.toast.delete"))},onError:n=>{x.error(n.message)}})};return s.jsx(z,{groups:[{actions:[{label:r("actions.edit"),to:`/settings/regions/${e.id}/edit`,icon:s.jsx(q,{})}]},{actions:[{label:r("actions.delete"),onClick:i,icon:s.jsx(B,{})}]}]})},K=v(),U=()=>{const e=V();return j.useMemo(()=>[...e,K.display({id:"actions",cell:({row:r})=>s.jsx(Z,{region:r.original})})],[e])},ze=()=>{const{getWidgets:e}=_();return s.jsx(E,{widgets:{before:e("region.list.before"),after:e("region.list.after")},children:s.jsx(Y,{})})};export{ze as Component};
