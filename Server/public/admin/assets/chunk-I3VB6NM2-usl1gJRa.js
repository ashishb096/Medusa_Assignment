import{b as i,j as e,m as x,V as m}from"./index-8dTaQ3lM.js";var d=({list:s,className:n,variant:l="compact",inline:t,n:a=2})=>{const{t:r}=i(),o=r("general.plusCountMore",{count:s.length-a});return e.jsxs("div",{className:x("text-ui-fg-subtle gap-x-1 overflow-hidden",{"inline-flex":t,flex:!t,"txt-compact-small":l==="compact","txt-small":l==="base"},n),children:[e.jsx("div",{className:"flex-1 truncate",children:e.jsx("span",{className:"truncate",children:s.slice(0,a).join(", ")})}),s.length>a&&e.jsx("div",{className:"whitespace-nowrap",children:e.jsx(m,{content:e.jsx("ul",{children:s.slice(a).map(c=>e.jsx("li",{children:c},c))}),children:e.jsx("span",{className:"cursor-default whitespace-nowrap",children:o})})})]})};export{d as L};
