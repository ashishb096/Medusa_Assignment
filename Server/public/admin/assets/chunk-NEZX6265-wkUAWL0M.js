import{cc as m,s as l,cN as i,b as x,r as f,j as t}from"./index-8dTaQ3lM.js";import{T as c,a as o}from"./chunk-MSDRGCRR-DusYpauX.js";import{u as p}from"./chunk-C76H5USB-CybLzP4I.js";import{c as d}from"./index-jlenjjC8.js";var y="currencies",C=i(y),b=(e,r)=>{const{data:s,...a}=m({queryFn:()=>l.admin.currency.list(e),queryKey:C.list(e),...r});return{...s,...a}},u=d(),h=()=>{const{t:e}=x();return f.useMemo(()=>[u.accessor("code",{header:()=>t.jsx(c,{text:e("fields.code")}),cell:({getValue:r})=>t.jsx(o,{text:r().toUpperCase()})}),u.accessor("name",{header:()=>t.jsx(c,{text:e("fields.name")}),cell:({getValue:r})=>t.jsx(o,{text:r()})})],[e])},K=({pageSize:e=10,prefix:r})=>{const s=p(["order","q","offset"],r),{offset:a,...n}=s;return{searchParams:{limit:e,offset:a?parseInt(a):0,...n},raw:s}};export{b as a,h as b,K as u};
