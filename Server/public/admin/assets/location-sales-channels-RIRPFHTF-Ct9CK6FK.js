import{V as p}from"./chunk-F6ZOHZVB-BVzIt1-S.js";import{u as z,a as H,b as M,c as V}from"./chunk-UVGNHHSZ-Dl481254.js";import{a2 as B,ad as N,a4 as A,R as K,a_ as $,j as s,b as G,a8 as I,a9 as J,r as j,J as O,et as Q,t as x,B as S,k as U}from"./index-8dTaQ3lM.js";import{D as X,c as Z}from"./chunk-MGPZHEOT-BHyjO8-A.js";import{K as q}from"./chunk-6HTZNHPT-BVNe-3Lq.js";import{R as n,u as W}from"./chunk-JGQGO74V-BlxCBcdI.js";import"./chunk-FFVOUYTF-BFLtzzvb.js";import"./chunk-DV5RB7II-eFq7gu5C.js";import"./format-BT5j_840.js";import"./chunk-C76H5USB-CybLzP4I.js";import"./checkbox-BZxRa03K.js";import"./index-jlenjjC8.js";import"./command-bar-BcSK6zMH.js";import"./index-BkHMQ5UJ.js";import"./table-D-pcRyNv.js";import"./arrow-up-mini-B_Ns8QHm.js";import"./date-picker-BFYAwDTn.js";import"./popover-C3_KveuS.js";import"./x-mark-mini-D-9bDFxP.js";import"./triangle-left-mini-DA9umqRW.js";import"./prompt-kZglONe4.js";var Y=B({sales_channels:N(A()).optional()}),f=50,C="sc",ss=({location:e})=>{var m;const{t:a}=G(),{handleSuccess:i}=W(),r=I({defaultValues:{sales_channels:((m=e.sales_channels)==null?void 0:m.map(t=>t.id))??[]},resolver:J(Y)}),{setValue:c}=r,[u,y]=j.useState(ts(e)),b=t=>{const o=Object.keys(t);c("sales_channels",o,{shouldDirty:!0,shouldTouch:!0}),y(t)},v=z({pageSize:f,prefix:C}),{sales_channels:T,count:_,isPending:g,isError:E,error:w}=O({...v},{placeholderData:U}),k=H(),L=as(),R=M(),{mutateAsync:F,isPending:P}=Q(e.id),D=r.handleSubmit(async t=>{var h;const o=(h=e.sales_channels)==null?void 0:h.map(l=>l.id),d=t.sales_channels??[];await F({add:d.filter(l=>!(o!=null&&o.includes(l))),remove:o==null?void 0:o.filter(l=>!d.includes(l))},{onSuccess:()=>{x.success(a("stockLocations.salesChannels.successToast")),i(`/settings/locations/${e.id}`)},onError:l=>{x.error(l.message)}})});if(E)throw w;return s.jsx(n.Form,{form:r,children:s.jsxs(q,{onSubmit:D,className:"flex h-full flex-col",children:[s.jsxs(n.Header,{children:[s.jsx(n.Title,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.header")})}),s.jsx(n.Description,{asChild:!0,children:s.jsx(p,{children:a("stockLocations.salesChannels.hint")})})]}),s.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:s.jsx(X,{data:T,columns:L,filters:k,emptyState:R,prefix:C,rowSelection:{state:u,onRowSelectionChange:b},pageSize:f,isLoading:g,rowCount:_,layout:"fill",getRowId:t=>t.id})}),s.jsx(n.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(n.Close,{asChild:!0,children:s.jsx(S,{size:"small",variant:"secondary",type:"button",children:a("actions.cancel")})}),s.jsx(S,{size:"small",isLoading:P,type:"submit",children:a("actions.save")})]})})]})})},es=Z(),as=()=>{const e=V();return j.useMemo(()=>[es.select(),...e],[e])};function ts(e){var a;return((a=e.sales_channels)==null?void 0:a.reduce((i,r)=>(i[r.id]=!0,i),{}))??{}}var gs=()=>{const{location_id:e}=K(),{stock_location:a,isPending:i,isError:r,error:c}=$(e,{fields:"id,*sales_channels"}),u=!i&&!!a;if(r)throw c;return s.jsx(n,{children:u&&s.jsx(ss,{location:a})})};export{gs as Component};
