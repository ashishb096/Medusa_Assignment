import{u as p}from"./chunk-C76H5USB-CybLzP4I.js";import{b as n,dv as h,r as x,j as s}from"./index-8dTaQ3lM.js";import{a as j}from"./chunk-WYX5PIA3-iFg8NwI4.js";import{S as v}from"./chunk-ADOCJB6L-CGrkdwiv.js";import{P as m}from"./chunk-P3UUX2T6-DxMcmIcu.js";import{c as b}from"./index-jlenjjC8.js";var G=({prefix:e,pageSize:a=20})=>{const r=p(["offset","q","has_account","groups","order","created_at","updated_at"],e),{offset:l,groups:t,created_at:u,updated_at:o,has_account:c,q:i,order:f}=r;return{searchParams:{limit:a,offset:l?Number(l):0,groups:t==null?void 0:t.split(","),has_account:c?c==="true":void 0,order:f,created_at:u?JSON.parse(u):void 0,updated_at:o?JSON.parse(o):void 0,q:i},raw:r}},O=e=>{const{t:a}=n(),r=e==null?void 0:e.includes("groups"),{customer_groups:l}=h({limit:1e3},{enabled:!r});let t=[];if(l&&!r){const c={key:"groups",label:a("customers.groups.label"),type:"select",multiple:!0,options:l.map(i=>({label:i.name,value:i.id}))};t=[...t,c]}const u={key:"has_account",label:a("fields.account"),type:"select",options:[{label:a("customers.registered"),value:"true"},{label:a("customers.guest"),value:"false"}]},o=[{label:a("fields.createdAt"),key:"created_at"},{label:a("fields.updatedAt"),key:"updated_at"}].map(c=>({key:c.key,label:c.label,type:"date"}));return t=[...t,u,...o],t},N=({email:e})=>e?s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e})}):s.jsx(m,{}),_=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.email")})})},y=({firstName:e,lastName:a})=>{if(!e&&!a)return s.jsx(m,{});const r=[e,a].filter(Boolean).join(" ");return s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:r})})},C=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.name")})})},g=({hasAccount:e})=>{const{t:a}=n(),r=e?"green":"orange",l=a(e?"customers.fields.registered":"customers.fields.guest");return s.jsx(v,{color:r,children:l})},w=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.account")})})},k=({createdAt:e})=>e?s.jsx(j,{date:e}):s.jsx(m,{}),A=()=>{const{t:e}=n();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.createdAt")})})},d=b(),J=()=>x.useMemo(()=>[d.accessor("email",{header:()=>s.jsx(_,{}),cell:({getValue:e})=>s.jsx(N,{email:e()})}),d.display({id:"name",header:()=>s.jsx(C,{}),cell:({row:{original:{first_name:e,last_name:a}}})=>s.jsx(y,{firstName:e,lastName:a})}),d.accessor("has_account",{header:()=>s.jsx(w,{}),cell:({getValue:e})=>s.jsx(g,{hasAccount:e()})}),d.accessor("created_at",{header:()=>s.jsx(A,{}),cell:({getValue:e})=>s.jsx(k,{createdAt:e()})})],[]);export{O as a,J as b,G as u};
