import{C as I}from"./chunk-MW4K5NNY-Cs4Qd5Cd.js";import{a2 as b,a4 as d,b as E,R as M,a_ as S,j as s,H as w,a8 as N,a9 as k,es as R,t as L,w as e,x as l,B as C}from"./index-8dTaQ3lM.js";import{K as T}from"./chunk-6HTZNHPT-BVNe-3Lq.js";import{b as t,u as B}from"./chunk-JGQGO74V-BlxCBcdI.js";import"./triangles-mini-DnHlWVyi.js";import"./prompt-kZglONe4.js";var H=b({name:d().min(1),address:b({address_1:d().min(1),address_2:d().optional(),country_code:d().min(2).max(2),city:d().optional(),postal_code:d().optional(),province:d().optional(),company:d().optional(),phone:d().optional()})}),P=({location:a})=>{var j,h,u,p,y,f,g,_;const{t:o}=E(),{handleSuccess:i}=B(),n=N({defaultValues:{name:a.name,address:{address_1:((j=a.address)==null?void 0:j.address_1)||"",address_2:((h=a.address)==null?void 0:h.address_2)||"",city:((u=a.address)==null?void 0:u.city)||"",company:((p=a.address)==null?void 0:p.company)||"",country_code:((y=a.address)==null?void 0:y.country_code)||"",phone:((f=a.address)==null?void 0:f.phone)||"",postal_code:((g=a.address)==null?void 0:g.postal_code)||"",province:((_=a.address)==null?void 0:_.province)||""}},resolver:k(H)}),{mutateAsync:c,isPending:x}=R(a.id),m=n.handleSubmit(async r=>{const{name:F,address:v}=r;await c({name:F,address:v},{onSuccess:()=>{L.success(o("stockLocations.edit.successToast")),i()},onError:z=>{L.error(z.message)}})});return s.jsx(t.Form,{form:n,children:s.jsxs(T,{onSubmit:m,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsx(t.Body,{className:"flex flex-col gap-y-8 overflow-y-auto",children:s.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[s.jsx(e.Field,{control:n.control,name:"name",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:o("fields.name")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.address_1",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:o("fields.address")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.address_2",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.address2")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.postal_code",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.postalCode")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.city",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.city")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.country_code",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:o("fields.country")}),s.jsx(e.Control,{children:s.jsx(I,{...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.province",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.state")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.company",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.company")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:n.control,name:"address.phone",render:({field:r})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{optional:!0,children:o("fields.phone")}),s.jsx(e.Control,{children:s.jsx(l,{size:"small",...r})}),s.jsx(e.ErrorMessage,{})]})})]})}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(C,{size:"small",variant:"secondary",children:o("actions.cancel")})}),s.jsx(C,{size:"small",type:"submit",isLoading:x,children:o("actions.save")})]})})]})})},q=()=>{const{t:a}=E(),{location_id:o}=M(),{stock_location:i,isPending:n,isError:c,error:x}=S(o,{fields:"*address"}),m=!n&&!!i;if(c)throw x;return s.jsxs(t,{children:[s.jsx(t.Header,{children:s.jsx(w,{className:"capitalize",children:a("locations.editLocation")})}),m&&s.jsx(P,{location:i})]})};export{q as Component};
