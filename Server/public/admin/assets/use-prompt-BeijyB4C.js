import{r as e,z as h,x as v,bt as k}from"./index-8dTaQ3lM.js";import{P as r}from"./prompt-kZglONe4.js";const b=({open:n,variant:i="danger",title:p,description:s,verificationText:t,verificationInstruction:o="Please type {val} to confirm:",cancelText:u="Cancel",confirmText:d="Confirm",onConfirm:a,onCancel:m})=>{const[E,y]=e.useState(""),P=l=>{y(l.target.value)},f=e.useMemo(()=>t?E===t:!0,[E,t]),C=l=>{l.preventDefault(),t&&f&&a()};e.useEffect(()=>{const l=g=>{g.key==="Escape"&&n&&m()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[m,n]);let c=o.includes("{val}")?o.split("{val}"):["Please type","to confirm:"];return c.length!==2&&(c=["Please type","to confirm:"]),e.createElement(r,{open:n,variant:i},e.createElement(r.Content,null,e.createElement("form",{onSubmit:C},e.createElement(r.Header,null,e.createElement(r.Title,null,p),e.createElement(r.Description,null,s)),t&&e.createElement("div",{className:"border-ui-border-base mt-6 flex flex-col gap-y-4 border-y p-6"},e.createElement(h,{htmlFor:"verificationText",className:"text-ui-fg-subtle"},c[0]," ",e.createElement("span",{className:"text-ui-fg-base txt-compact-medium-plus"},t)," ",c[1]),e.createElement(v,{autoFocus:!0,autoComplete:"off",id:"verificationText",placeholder:t,onChange:P})),e.createElement(r.Footer,null,e.createElement(r.Cancel,{onClick:m},u),e.createElement(r.Action,{disabled:!f,type:t?"submit":"button",onClick:t?void 0:a},d)))))};b.displayName="RenderPrompt";const I=()=>{const n=e.useRef(null);return async p=>{if(n.current)return n.current;const s=new Promise(t=>{let o=!0;const u=k(document.createElement("div")),d=()=>{o=!1,u.unmount(),t(!1),n.current=null,document.body.style.pointerEvents="auto"},a=()=>{o=!1,t(!0),u.unmount(),n.current=null,document.body.style.pointerEvents="auto"};(()=>{u.render(e.createElement(b,{open:o,onConfirm:a,onCancel:d,...p}))})()});return n.current=s,s}};export{I as u};
