import{S as t}from"./chunk-LFLGEXIG-D5Vq1p-x.js";import{b as n,j as s,H as c,A as d}from"./index-8dTaQ3lM.js";import{P as u}from"./pencil-square-tGUjzUAY.js";import{C as x}from"./container-KTPVI1v1.js";var _=({inventoryItem:e})=>{var l,o,r;const{t:a}=n();return s.jsxs(x,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs(c,{children:[e.title??e.sku," ",a("fields.details")]}),s.jsx(d,{groups:[{actions:[{icon:s.jsx(u,{}),label:a("actions.edit"),to:"edit"}]}]})]}),s.jsx(t,{title:a("fields.sku"),value:e.sku??"-"}),s.jsx(t,{title:a("fields.inStock"),value:i(e.stocked_quantity,(l=e.location_levels)==null?void 0:l.length)}),s.jsx(t,{title:a("inventory.reserved"),value:i(e.reserved_quantity,(o=e.location_levels)==null?void 0:o.length)}),s.jsx(t,{title:a("inventory.available"),value:i(e.stocked_quantity-e.reserved_quantity,(r=e.location_levels)==null?void 0:r.length)})]})},i=(e,a)=>e!==void 0&&!isNaN(e)?`${e} across ${a??"-"} locations`:"-";export{_ as I};
