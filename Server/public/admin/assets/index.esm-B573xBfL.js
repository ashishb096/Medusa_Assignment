import{r as C,aM as be}from"./index-8dTaQ3lM.js";var o=function(){return o=Object.assign||function(r){for(var a,n=1,i=arguments.length;n<i;n++){a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},o.apply(this,arguments)};function Be(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]]);return a}function V(e,r,a){if(a||arguments.length===2)for(var n=0,i=r.length,t;n<i;n++)(t||!(n in r))&&(t||(t=Array.prototype.slice.call(r,0,n)),t[n]=r[n]);return e.concat(t||Array.prototype.slice.call(r))}var O=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Le={k:1e3,m:1e6,b:1e9},Ue=function(e,r){r===void 0&&(r=".");var a=new RegExp("(\\d+(".concat(O(r),"\\d*)?)([kmb])$"),"i"),n=e.match(a);if(n){var i=n[1],t=n[3],u=Le[t.toLowerCase()];return Number(i.replace(r,"."))*u}},Ge=function(e,r){r===void 0&&(r=",");var a=new RegExp(O(r),"g");return e.replace(a,"")},Me=function(e,r){var a=O(r.join("")),n=new RegExp("[^\\d".concat(a,"]"),"gi");return e.replace(n,"")},le=function(e){var r=e.value,a=e.groupSeparator,n=a===void 0?",":a,i=e.decimalSeparator,t=i===void 0?".":i,u=e.allowDecimals,c=u===void 0?!0:u,l=e.decimalsLimit,N=l===void 0?2:l,E=e.allowNegativeValue,p=E===void 0?!0:E,v=e.disableAbbreviations,P=v===void 0?!1:v,d=e.prefix,f=d===void 0?"":d,m=e.transformRawValue,A=m===void 0?function($){return $}:m,w=A(r);if(w==="-")return w;var D=P?[]:["k","m","b"],I=new RegExp("((^|\\D)-\\d)|(-".concat(O(f),")")),ae=I.test(w),j=RegExp("(\\d+)-?".concat(O(f))).exec(r)||[],F=j[0],z=j[1],J=f?F?w.replace(F,"").concat(z):w.replace(f,""):w,Q=Ge(J,n),K=Me(Q,V([n,t],D,!0)),B=K;if(!P){if(D.some(function($){return $===K.toLowerCase().replace(t,"")}))return"";var X=Ue(K,t);X&&(B=String(X))}var L=ae&&p?"-":"";if(t&&B.includes(t)){var U=K.split(t),Y=U[0],G=U[1],M=N&&G?G.slice(0,N):G,Z=c?"".concat(t).concat(M):"";return"".concat(L).concat(Y).concat(Z)}return"".concat(L).concat(B)},$e=function(e,r,a){if(a!==void 0&&e.length>1){if(a===0)return e.replace(r,"");if(e.includes(r)){var n=e.split(r),i=n[0],t=n[1];if(t.length===a)return e;if(t.length>a)return"".concat(i).concat(r).concat(t.slice(0,a))}var u=e.length>a?new RegExp("(\\d+)(\\d{".concat(a,"})")):new RegExp("(\\d)(\\d+)"),c=e.match(u);if(c){var i=c[1],t=c[2];return"".concat(i).concat(r).concat(t)}}return e},he=function(e,r){var a=r.groupSeparator,n=a===void 0?",":a,i=r.decimalSeparator,t=i===void 0?".":i,u=new RegExp("\\d([^".concat(O(n)).concat(O(t),"0-9]+)")),c=e.match(u);return c?c[1]:void 0},q=function(e){var r=e.value,a=e.decimalSeparator,n=e.intlConfig,i=e.decimalScale,t=e.prefix,u=t===void 0?"":t,c=e.suffix,l=c===void 0?"":c;if(r===""||r===void 0)return"";if(r==="-")return"-";var N=new RegExp("^\\d?-".concat(u?"".concat(O(u),"?"):"","\\d")).test(r),E=a!=="."?Te(r,a,N):r;a&&a!=="-"&&E.startsWith(a)&&(E="0"+E);var p={minimumFractionDigits:i||0,maximumFractionDigits:20},v=n?new Intl.NumberFormat(n.locale,n.currency?o(o({},p),{style:"currency",currency:n.currency}):p):new Intl.NumberFormat(void 0,p),P=v.formatToParts(Number(E)),d=We(P,e),f=he(d,o({},e)),m=r.slice(-1)===a?a:"",A=E.match(RegExp("\\d+\\.(\\d+)"))||[],w=A[1];return i===void 0&&w&&a&&(d.includes(a)?d=d.replace(RegExp("(\\d+)(".concat(O(a),")(\\d+)"),"g"),"$1$2".concat(w)):f&&!l?d=d.replace(f,"".concat(a).concat(w).concat(f)):d="".concat(d).concat(a).concat(w)),l&&m?"".concat(d).concat(m).concat(l):f&&m?d.replace(f,"".concat(m).concat(f)):f&&l?d.replace(f,"".concat(m).concat(l)):[d,m,l].join("")},Te=function(e,r,a){var n=e;return r&&r!=="."&&(n=n.replace(RegExp(O(r),"g"),"."),a&&r==="-"&&(n="-".concat(n.slice(1)))),n},We=function(e,r){var a=r.prefix,n=r.groupSeparator,i=r.decimalSeparator,t=r.decimalScale,u=r.disableGroupSeparators,c=u===void 0?!1:u;return e.reduce(function(l,N,E){var p=N.type,v=N.value;return E===0&&a?p==="minusSign"?[v,a]:p==="currency"?V(V([],l,!0),[a],!1):[a,v]:p==="currency"?a?l:V(V([],l,!0),[v],!1):p==="group"?c?l:V(V([],l,!0),[n!==void 0?n:v],!1):p==="decimal"?t!==void 0&&t===0?l:V(V([],l,!0),[i!==void 0?i:v],!1):p==="fraction"?V(V([],l,!0),[t!==void 0?v.slice(0,t):v],!1):V(V([],l,!0),[v],!1)},[""]).join("")},He={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},qe=function(e){var r=e||{},a=r.locale,n=r.currency,i=a?new Intl.NumberFormat(a,n?{currency:n,style:"currency"}:void 0):new Intl.NumberFormat;return i.formatToParts(1000.1).reduce(function(t,u,c){return u.type==="currency"?c===0?o(o({},t),{currencySymbol:u.value,prefix:u.value}):o(o({},t),{currencySymbol:u.value,suffix:u.value}):u.type==="group"?o(o({},t),{groupSeparator:u.value}):u.type==="decimal"?o(o({},t),{decimalSeparator:u.value}):t},He)},ye=function(e){return RegExp(/\d/,"gi").test(e)},ze=function(e,r,a){if(r===void 0&&(r="."),a===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var n=e.split(r),i=n[0],t=n[1];if(a===0)return i;var u=t||"";if(u.length<a)for(;u.length<a;)u+="0";else u=u.slice(0,a);return"".concat(i).concat(r).concat(u)},Je=function(e){var r=e.selectionStart,a=e.value,n=e.lastKeyStroke,i=e.stateValue,t=e.groupSeparator,u=r,c=a;if(i&&u){var l=a.split("");return n==="Backspace"&&i[u]===t&&(l.splice(u-1,1),u-=1),n==="Delete"&&i[u]===t&&(l.splice(u,1),u+=1),c=l.join(""),{modifiedValue:c,cursorPosition:u}}return{modifiedValue:c,cursorPosition:r}},Qe=C.forwardRef(function(e,r){var a=e.allowDecimals,n=a===void 0?!0:a,i=e.allowNegativeValue,t=i===void 0?!0:i,u=e.id,c=e.name,l=e.className,N=e.customInput,E=e.decimalsLimit,p=e.defaultValue,v=e.disabled,P=v===void 0?!1:v,d=e.maxLength,f=e.value,m=e.onValueChange,A=e.fixedDecimalLength,w=e.placeholder,D=e.decimalScale,I=e.prefix,ae=e.suffix,j=e.intlConfig,F=e.step,z=e.min,J=e.max,Q=e.disableGroupSeparators,K=Q===void 0?!1:Q,B=e.disableAbbreviations,X=B===void 0?!1:B,L=e.decimalSeparator,U=e.groupSeparator,Y=e.onChange,G=e.onFocus,M=e.onBlur,Z=e.onKeyDown,$=e.onKeyUp,we=e.transformRawValue,ce=e.formatValueOnBlur,xe=ce===void 0?!0:ce,Ve=Be(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue","formatValueOnBlur"]);if(L&&ye(L))throw new Error("decimalSeparator cannot be a number");if(U&&ye(U))throw new Error("groupSeparator cannot be a number");var _=C.useMemo(function(){return qe(j)},[j]),g=L||_.decimalSeparator||"",T=U||_.groupSeparator||"";if(g&&T&&g===T&&K===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var W={decimalSeparator:g,groupSeparator:T,disableGroupSeparators:K,intlConfig:j,prefix:I||_.prefix,suffix:ae},ne={decimalSeparator:g,groupSeparator:T,allowDecimals:n,decimalsLimit:E||A||2,allowNegativeValue:t,disableAbbreviations:X,prefix:I||_.prefix,transformRawValue:we},fe=C.useState(function(){return p!=null?q(o(o({},W),{decimalScale:D,value:String(p)})):f!=null?q(o(o({},W),{decimalScale:D,value:String(f)})):""}),b=fe[0],H=fe[1],se=C.useState(!1),te=se[0],Ee=se[1],de=C.useState(0),ue=de[0],ie=de[1],pe=C.useState(0),ve=pe[0],Re=pe[1],me=C.useState(null),Ce=me[0],Ne=me[1],k=C.useRef(null);C.useImperativeHandle(r,function(){return k.current});var ge=function(s,y){Ee(!0);var S=Je({selectionStart:y,value:s,lastKeyStroke:Ce,stateValue:b,groupSeparator:T}),h=S.modifiedValue,x=S.cursorPosition,R=le(o({value:h},ne));if(!(d&&R.replace(/-/g,"").length>d)){if(R===""||R==="-"||R===g){m&&m(void 0,c,{float:null,formatted:"",value:""}),H(R),ie(1);return}var ee=g?R.replace(g,"."):R,Ie=parseFloat(ee),oe=q(o({value:R},W));if(x!=null){var re=x+(oe.length-s.length);re=re<=0?I?I.length:0:re,ie(re),Re(ve+1)}if(H(oe),m){var je={float:Ie,formatted:oe,value:R};m(R,c,je)}}},Oe=function(s){var y=s.target,S=y.value,h=y.selectionStart;ge(S,h),Y&&Y(s)},De=function(s){return G&&G(s),b?b.length:0},Fe=function(s){var y=s.target.value,S=le(o({value:y},ne));if(S==="-"||S===g||!S){H(""),M&&M(s);return}var h=$e(S,g,A),x=ze(h,g,D!==void 0?D:A),R=parseFloat(x.replace(g,".")),ee=q(o(o({},W),{value:x}));m&&xe&&m(x,c,{float:R,formatted:ee,value:x}),H(ee),M&&M(s)},ke=function(s){var y=s.key;if(Ne(y),F&&(y==="ArrowUp"||y==="ArrowDown")){s.preventDefault(),ie(b.length);var S=parseFloat(f!=null?String(f).replace(g,"."):le(o({value:b},ne)))||0,h=y==="ArrowUp"?S+F:S-F;if(z!==void 0&&h<Number(z)||J!==void 0&&h>Number(J))return;var x=String(F).includes(".")?Number(String(F).split(".")[1].length):void 0;ge(String(x?h.toFixed(x):h).replace(".",g))}Z&&Z(s)},Ae=function(s){var y=s.key,S=s.currentTarget.selectionStart;if(y!=="ArrowUp"&&y!=="ArrowDown"&&b!=="-"){var h=he(b,{groupSeparator:T,decimalSeparator:g});if(h&&S&&S>b.length-h.length&&k.current){var x=b.length-h.length;k.current.setSelectionRange(x,x)}}$&&$(s)};C.useEffect(function(){f==null&&p==null&&H("")},[p,f]),C.useEffect(function(){te&&b!=="-"&&k.current&&document.activeElement===k.current&&k.current.setSelectionRange(ue,ue)},[b,ue,k,te,ve]);var Ke=function(){return f!=null&&b!=="-"&&(!g||b!==g)?q(o(o({},W),{decimalScale:te?void 0:D,value:String(f)})):b},Se=o({type:"text",inputMode:"decimal",id:u,name:c,className:l,onChange:Oe,onBlur:Fe,onFocus:De,onKeyDown:ke,onKeyUp:Ae,placeholder:w,disabled:P,value:Ke(),ref:k},Ve);if(N){var Pe=N;return be.createElement(Pe,o({},Se))}return be.createElement("input",o({},Se))});Qe.displayName="CurrencyInput";export{Qe as C,q as f};
