import"./index-8dTaQ3lM.js";for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=new Map,c=0;c<a.length;c++){var i=c.toString(2);i="0".repeat(6-i.length)+i,g.set(a.charCodeAt(c),i)}function f(p){try{if(typeof p!="string"||p.split(".").length!==3)return null;var h=function(l){for(var n,r="",e=l.length,t=0;t<e;t++)n=l[t],r+=String.fromCodePoint(n>251&&n<254&&t+5<e?1073741824*(n-252)+(l[++t]-128<<24)+(l[++t]-128<<18)+(l[++t]-128<<12)+(l[++t]-128<<6)+l[++t]-128:n>247&&n<252&&t+4<e?(n-248<<24)+(l[++t]-128<<18)+(l[++t]-128<<12)+(l[++t]-128<<6)+l[++t]-128:n>239&&n<248&&t+3<e?(n-240<<18)+(l[++t]-128<<12)+(l[++t]-128<<6)+l[++t]-128:n>223&&n<240&&t+2<e?(n-224<<12)+(l[++t]-128<<6)+l[++t]-128:n>191&&n<224&&t+1<e?(n-192<<6)+l[++t]-128:n);return r}(function(l){for(var n="",r=0;r<l.length;r++)n+=g.get(l.charCodeAt(r));n=n.slice(0,n.length-n.length%8);for(var e=[],t=0;t<n.length/8;t++)e.push(n.slice(8*t,8*t+8));return e}(p.split(".")[1].replaceAll("=","").replaceAll("-","+").replaceAll("_","/")).map(function(l){return parseInt(l,2)}));return JSON.parse(h)}catch(l){return console.error("There was an error decoding token: ",l),null}}export{f as l};
