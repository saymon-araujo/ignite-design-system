import{R as h,r as u,a as rt}from"./index-c0290abd.js";import{_ as M}from"./extends-98964cd2.js";import{j as R}from"./jsx-runtime-5fc188ad.js";var x="colors",w="sizes",p="space",we={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},nt=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(a=>JSON.stringify(a,nt))(t);return o in e?e[o]:e[o]=r(t,...n)}},O=Symbol.for("sxs.internal"),ae=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ue=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:ot}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),at=/\s+(?![^()]*\))/,L=e=>t=>e(...typeof t=="string"?String(t).split(at):[t]),fe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:L((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:L((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:L((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:L((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:L((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:L((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,it=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,lt=(e,t)=>e in st&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,a)=>n+(o==="stretch"?`-moz-available${a};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${a};${ne(e)}:${n}fit-content`)+a):String(t),st={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},j=e=>e?e+"-":"",Ie=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,a,s,i)=>s=="$"==!!a?n:(o||s=="--"?"calc(":"")+"var(--"+(s==="$"?j(t)+(i.includes("$")?"":j(r))+i.replace(/\$/g,"-"):i)+")"+(o||s=="--"?"*"+(o||"")+(a||"1")+")":"")),ct=/\s*,\s*(?![^()]*\))/,dt=Object.prototype.toString,F=(e,t,r,n,o)=>{let a,s,i;const l=(c,g,f)=>{let d,m;const b=v=>{for(d in v){const S=d.charCodeAt(0)===64,E=S&&Array.isArray(v[d])?v[d]:[v[d]];for(m of E){const C=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,I=>I[1].toUpperCase()),H=typeof m=="object"&&m&&m.toString===dt&&(!n.utils[C]||!g.length);if(C in n.utils&&!H){const I=n.utils[C];if(I!==s){s=I,b(I(m)),s=null;continue}}else if(C in fe){const I=fe[C];if(I!==i){i=I,b(I(m)),i=null;continue}}if(S&&(y=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,z,P,N,B,A)=>{const W=re.test(z),q=.0625*(W?-1:1),[J,de]=W?[N,z]:[z,N];return"("+(P[0]==="="?"":P[0]===">"===W?"max-":"min-")+J+":"+(P[0]!=="="&&P.length===1?de.replace(re,(tt,ee,te)=>Number(ee)+q*(P===">"?1:-1)+te):de)+(B?") and ("+(B[0]===">"?"min-":"max-")+J+":"+(B.length===1?A.replace(re,(tt,ee,te)=>Number(ee)+q*(B===">"?-1:1)+te):A):"")+")"})),H){const I=S?f.concat(d):[...f],z=S?[...g]:it(g,d.split(ct));a!==void 0&&o(pe(...a)),a=void 0,l(m,z,I)}else a===void 0&&(a=[[],g,f]),d=S||d.charCodeAt(0)!==36?d:`--${j(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,m=H?m:typeof m=="number"?m&&C in ut?String(m)+"px":String(m):Ie(lt(C,m??""),n.prefix,n.themeMap[C]),a[0].push(`${S?`${d} `:`${ne(d)}:`}${m}`)}}var y,$};b(c),a!==void 0&&o(pe(...a)),a=void 0};l(e,t,r)},pe=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,ut={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},me=e=>String.fromCharCode(e+(e>25?39:97)),T=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=me(r%52)+n;return me(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),Z=["themed","global","styled","onevar","resonevar","allvar","inline"],ft=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},pt=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(a,s)=>{const{cssText:i}=a;let l="";if(i.startsWith("--sxs"))return"";if(o[s-1]&&(l=o[s-1].cssText).startsWith("--sxs")){if(!a.cssRules.length)return"";for(const c in t.rules)if(t.rules[c].group===a)return`--sxs{--sxs:${[...t.rules[c].cache].join(" ")}}${i}`;return a.cssRules.length?`${l}${i}`:""}return i}).join("")},n=()=>{if(t){const{rules:i,sheet:l}=t;if(!l.deleteRule){for(;Object(Object(l.cssRules)[0]).type===3;)l.cssRules.splice(0,1);l.cssRules=[]}for(const c in i)delete i[c]}const o=Object(e).styleSheets||[];for(const i of o)if(ft(i)){for(let l=0,c=i.cssRules;c[l];++l){const g=Object(c[l]);if(g.type!==1)continue;const f=Object(c[l+1]);if(f.type!==4)continue;++l;const{cssText:d}=g;if(!d.startsWith("--sxs"))continue;const m=d.slice(14,-3).trim().split(/\s+/),b=Z[m[0]];b&&(t||(t={sheet:i,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:l,cache:new Set(m)})}if(t)break}if(!t){const i=(l,c)=>({type:c,cssRules:[],insertRule(g,f){this.cssRules.splice(f,0,i(g,{import:3,undefined:1}[(g.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return l==="@media{}"?`@media{${[].map.call(this.cssRules,g=>g.cssText).join("")}}`:l}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}const{sheet:a,rules:s}=t;for(let i=Z.length-1;i>=0;--i){const l=Z[i];if(!s[l]){const c=Z[i+1],g=s[c]?s[c].index:a.cssRules.length;a.insertRule("@media{}",g),a.insertRule(`--sxs{--sxs:${i}}`,g),s[l]={group:a.cssRules[g+1],index:g,cache:new Set([i])}}mt(s[l])}};return n(),t},mt=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},V=Symbol(),gt=D(),ge=(e,t)=>gt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[O]){n.type==null&&(n.type=o[O].type);for(const a of o[O].composers)n.composers.add(a)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(ht(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),bt(e,n,t)}),ht=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const a=`${j(o.prefix)}c-${T(n)}`,s=[],i=[],l=Object.create(null),c=[];for(const d in r)l[d]=String(r[d]);if(typeof e=="object"&&e)for(const d in e){g=l,f=d,ot.call(g,f)||(l[d]="undefined");const m=e[d];for(const b in m){const v={[d]:String(b)};String(b)==="undefined"&&c.push(d);const y=m[b],$=[v,y,!ue(y)];s.push($)}}var g,f;if(typeof t=="object"&&t)for(const d of t){let{css:m,...b}=d;m=typeof m=="object"&&m||{};for(const y in b)b[y]=String(b[y]);const v=[b,m,!ue(m)];i.push(v)}return[a,n,s,i,l,c]},bt=(e,t,r)=>{const[n,o,a,s]=$t(t.composers),i=typeof t.type=="function"||t.type.$$typeof?(f=>{function d(){for(let m=0;m<d[V].length;m++){const[b,v]=d[V][m];f.rules[b].apply(v)}return d[V]=[],null}return d[V]=[],d.rules={},Z.forEach(m=>d.rules[m]={apply:b=>d[V].push([m,b])}),d})(r):null,l=(i||r).rules,c=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,g=f=>{f=typeof f=="object"&&f||xt;const{css:d,...m}=f,b={};for(const $ in a)if(delete m[$],$ in f){let S=f[$];typeof S=="object"&&S?b[$]={"@initial":a[$],...S}:(S=String(S),b[$]=S!=="undefined"||s.has($)?S:a[$])}else b[$]=a[$];const v=new Set([...o]);for(const[$,S,E,C]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),F(S,[`.${$}`],[],e,z=>{l.styled.apply(z)}));const H=he(E,b,e.media),I=he(C,b,e.media,!0);for(const z of H)if(z!==void 0)for(const[P,N,B]of z){const A=`${$}-${T(N)}-${P}`;v.add(A);const W=(B?r.rules.resonevar:r.rules.onevar).cache,q=B?l.resonevar:l.onevar;W.has(A)||(W.add(A),F(N,[`.${A}`],[],e,J=>{q.apply(J)}))}for(const z of I)if(z!==void 0)for(const[P,N]of z){const B=`${$}-${T(N)}-${P}`;v.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),F(N,[`.${B}`],[],e,A=>{l.allvar.apply(A)}))}}if(typeof d=="object"&&d){const $=`${n}-i${T(d)}-css`;v.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),F(d,[`.${$}`],[],e,S=>{l.inline.apply(S)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&v.add($);const y=m.className=[...v].join(" ");return{type:t.type,className:y,selector:c,props:m,toString:()=>y,deferredInjector:i}};return ae(g,{className:n,selector:c,[O]:t,toString:()=>(r.rules.styled.cache.has(n)||g(),n)})},$t=e=>{let t="";const r=[],n={},o=[];for(const[a,,,,s,i]of e){t===""&&(t=a),r.push(a),o.push(...i);for(const l in s){const c=s[l];(n[l]===void 0||c!=="undefined"||i.includes(c))&&(n[l]=c)}}return[t,r,n,new Set(o)]},he=(e,t,r,n)=>{const o=[];e:for(let[a,s,i]of e){if(i)continue;let l,c=0,g=!1;for(l in a){const f=a[l];let d=t[l];if(d!==f){if(typeof d!="object"||!d)continue e;{let m,b,v=0;for(const y in d){if(f===String(d[y])){if(y!=="@initial"){const $=y.slice(1);(b=b||[]).push($ in r?r[$]:y.replace(/^@media ?/,"")),g=!0}c+=v,m=!0}++v}if(b&&b.length&&(s={["@media "+b.join(", ")]:s}),!m)continue e}}}(o[c]=o[c]||[]).push([n?"cv":`${l}-${a[l]}`,s,g])}return o},xt={},yt=D(),vt=(e,t)=>yt(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let a=T(o);if(!t.rules.global.cache.has(a)){if(t.rules.global.cache.add(a),"@import"in o){let s=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let i of[].concat(o["@import"]))i=i.includes('"')||i.includes("'")?i:`"${i}"`,t.sheet.insertRule(`@import ${i};`,s++);delete o["@import"]}F(o,[],[],e,s=>{t.rules.global.apply(s)})}}return""};return ae(n,{toString:n})}),St=D(),kt=(e,t)=>St(e,()=>r=>{const n=`${j(e.prefix)}k-${T(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const a=[];F(r,[],[],e,i=>a.push(i));const s=`@keyframes ${n}{${a.join("")}}`;t.rules.global.apply(s)}return n};return ae(o,{get name(){return o()},toString:o})}),Ct=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+j(this.prefix)+j(this.scale)+this.token}toString(){return this.computedValue}},Et=D(),wt=(e,t)=>Et(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${j(e.prefix)}t-${T(n)}`}`,a={},s=[];for(const l in n){a[l]={};for(const c in n[l]){const g=`--${j(e.prefix)}${l}-${c}`,f=Ie(String(n[l][c]),e.prefix,l);a[l][c]=new Ct(c,f,l,e.prefix),s.push(`${g}:${f}`)}}const i=()=>{if(s.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const l=`${n===e.theme?":root,":""}.${r}{${s.join(";")}}`;t.rules.themed.apply(l)}return r};return{...a,get className(){return i()},selector:o,toString:i}}),It=D(),Rt=D(),zt=e=>{const t=(r=>{let n=!1;const o=It(r,a=>{n=!0;const s="prefix"in(a=typeof a=="object"&&a||{})?String(a.prefix):"",i=typeof a.media=="object"&&a.media||{},l=typeof a.root=="object"?a.root||null:globalThis.document||null,c=typeof a.theme=="object"&&a.theme||{},g={prefix:s,media:i,theme:c,themeMap:typeof a.themeMap=="object"&&a.themeMap||{...we},utils:typeof a.utils=="object"&&a.utils||{}},f=pt(l),d={css:ge(g,f),globalCss:vt(g,f),keyframes:kt(g,f),createTheme:wt(g,f),reset(){f.reset(),d.theme.toString()},theme:{},sheet:f,config:g,prefix:s,getCssText:f.toString,toString:f.toString};return String(d.theme=d.createTheme(c)),d});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>Rt(r,()=>{const o=ge(r,n);return(...a)=>{const s=o(...a),i=s[O].type,l=h.forwardRef((c,g)=>{const f=c&&c.as||i,{props:d,deferredInjector:m}=s(c);return delete d.as,d.ref=g,m?h.createElement(h.Fragment,null,h.createElement(f,d),h.createElement(m,null)):h.createElement(f,d)});return l.className=s.className,l.displayName=`Styled.${i.displayName||i.name||i}`,l.selector=s.selector,l.toString=()=>s.selector,l[O]=s[O],l}}))(t),t};const Bt=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var Pt=Object.defineProperty,X=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$e=(e,t)=>{for(var r in t||(t={}))Re.call(t,r)&&be(e,r,t[r]);if(X)for(var r of X(t))ze.call(t,r)&&be(e,r,t[r]);return e},xe=(e,t)=>{var r={};for(var n in e)Re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&ze.call(e,n)&&(r[n]=e[n]);return r};const ie=u.forwardRef((e,t)=>{const r=e,{alt:n,color:o,size:a,weight:s,mirrored:i,children:l,weights:c}=r,g=xe(r,["alt","color","size","weight","mirrored","children","weights"]),f=u.useContext(Bt),{color:d="currentColor",size:m,weight:b="regular",mirrored:v=!1}=f,y=xe(f,["color","size","weight","mirrored"]);return h.createElement("svg",$e($e({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a??m,height:a??m,fill:o??d,viewBox:"0 0 256 256",transform:i||v?"scale(-1, 1)":void 0},y),g),!!n&&h.createElement("title",null,n),l,c.get(s??b))});ie.displayName="IconBase";const At=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),h.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),Mt=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]);var jt=Object.defineProperty,Nt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Tt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wt=(e,t)=>{for(var r in t||(t={}))Tt.call(t,r)&&ve(e,r,t[r]);if(ye)for(var r of ye(t))_t.call(t,r)&&ve(e,r,t[r]);return e},Lt=(e,t)=>Nt(e,Ot(t));const le=u.forwardRef((e,t)=>h.createElement(ie,Lt(Wt({ref:t},e),{weights:At})));le.displayName="Check";var Ft=Object.defineProperty,Dt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,ke=(e,t,r)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ut=(e,t)=>{for(var r in t||(t={}))Vt.call(t,r)&&ke(e,r,t[r]);if(Se)for(var r of Se(t))Zt.call(t,r)&&ke(e,r,t[r]);return e},Gt=(e,t)=>Dt(e,Ht(t));const se=u.forwardRef((e,t)=>h.createElement(ie,Gt(Ut({ref:t},e),{weights:Mt})));se.displayName="User";function Be(e,t=[]){let r=[];function n(a,s){const i=u.createContext(s),l=r.length;r=[...r,s];function c(f){const{scope:d,children:m,...b}=f,v=(d==null?void 0:d[e][l])||i,y=u.useMemo(()=>b,Object.values(b));return u.createElement(v.Provider,{value:y},m)}function g(f,d){const m=(d==null?void 0:d[e][l])||i,b=u.useContext(m);if(b)return b;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${a}\``)}return c.displayName=a+"Provider",[c,g]}const o=()=>{const a=r.map(s=>u.createContext(s));return function(i){const l=(i==null?void 0:i[e])||a;return u.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return o.scopeName=e,[n,qt(o,...t)]}function qt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const s=n.reduce((i,{useScope:l,scopeName:c})=>{const f=l(a)[`__scope${c}`];return{...i,...f}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}function ce(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const U=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function Jt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Pe(...e){return t=>e.forEach(r=>Jt(r,t))}function Ae(...e){return u.useCallback(Pe(...e),e)}const Me=u.forwardRef((e,t)=>{const{children:r,...n}=e,o=u.Children.toArray(r),a=o.find(Xt);if(a){const s=a.props.children,i=o.map(l=>l===a?u.Children.count(s)>1?u.Children.only(null):u.isValidElement(s)?s.props.children:null:l);return u.createElement(oe,M({},n,{ref:t}),u.isValidElement(s)?u.cloneElement(s,void 0,i):null)}return u.createElement(oe,M({},n,{ref:t}),r)});Me.displayName="Slot";const oe=u.forwardRef((e,t)=>{const{children:r,...n}=e;return u.isValidElement(r)?u.cloneElement(r,{...Yt(n,r.props),ref:t?Pe(t,r.ref):r.ref}):u.Children.count(r)>1?u.Children.only(null):null});oe.displayName="SlotClone";const Kt=({children:e})=>u.createElement(u.Fragment,null,e);function Xt(e){return u.isValidElement(e)&&e.type===Kt}function Yt(e,t){const r={...t};for(const n in t){const o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...i)=>{a(...i),o(...i)}:o&&(r[n]=o):n==="style"?r[n]={...o,...a}:n==="className"&&(r[n]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}const Qt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],G=Qt.reduce((e,t)=>{const r=u.forwardRef((n,o)=>{const{asChild:a,...s}=n,i=a?Me:t;return u.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.createElement(i,M({},s,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),je="Avatar",[er,Zr]=Be(je),[tr,Ne]=er(je),rr=u.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,a]=u.useState("idle");return u.createElement(tr,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:a},u.createElement(G.span,M({},n,{ref:t})))}),nr="AvatarImage",or=u.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...a}=e,s=Ne(nr,r),i=lr(n),l=ce(c=>{o(c),s.onImageLoadingStatusChange(c)});return U(()=>{i!=="idle"&&l(i)},[i,l]),i==="loaded"?u.createElement(G.img,M({},a,{ref:t,src:n})):null}),ar="AvatarFallback",ir=u.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,a=Ne(ar,r),[s,i]=u.useState(n===void 0);return u.useEffect(()=>{if(n!==void 0){const l=window.setTimeout(()=>i(!0),n);return()=>window.clearTimeout(l)}},[n]),s&&a.imageLoadingStatus!=="loaded"?u.createElement(G.span,M({},o,{ref:t})):null});function lr(e){const[t,r]=u.useState("idle");return U(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,a=s=>()=>{n&&r(s)};return r("loading"),o.onload=a("loaded"),o.onerror=a("error"),o.src=e,()=>{n=!1}},[e]),t}const sr=rr,cr=or,dr=ir;function Ce(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function ur({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=fr({defaultProp:t,onChange:r}),a=e!==void 0,s=a?e:n,i=ce(r),l=u.useCallback(c=>{if(a){const f=typeof c=="function"?c(e):c;f!==e&&i(f)}else o(c)},[a,e,o,i]);return[s,l]}function fr({defaultProp:e,onChange:t}){const r=u.useState(e),[n]=r,o=u.useRef(n),a=ce(t);return u.useEffect(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),r}function pr(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function mr(e){const[t,r]=u.useState(void 0);return U(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let s,i;if("borderBoxSize"in a){const l=a.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,i=c.blockSize}else s=e.offsetWidth,i=e.offsetHeight;r({width:s,height:i})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function gr(e,t){return u.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const Oe=e=>{const{present:t,children:r}=e,n=hr(t),o=typeof r=="function"?r({present:n.isPresent}):u.Children.only(r),a=Ae(n.ref,o.ref);return typeof r=="function"||n.isPresent?u.cloneElement(o,{ref:a}):null};Oe.displayName="Presence";function hr(e){const[t,r]=u.useState(),n=u.useRef({}),o=u.useRef(e),a=u.useRef("none"),s=e?"mounted":"unmounted",[i,l]=gr(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const c=K(n.current);a.current=i==="mounted"?c:"none"},[i]),U(()=>{const c=n.current,g=o.current;if(g!==e){const d=a.current,m=K(c);e?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(g&&d!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),U(()=>{if(t){const c=f=>{const m=K(n.current).includes(f.animationName);f.target===t&&m&&rt.flushSync(()=>l("ANIMATION_END"))},g=f=>{f.target===t&&(a.current=K(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:u.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}const Te="Checkbox",[br,Ur]=Be(Te),[$r,xr]=br(Te),yr=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:a,required:s,disabled:i,value:l="on",onCheckedChange:c,...g}=e,[f,d]=u.useState(null),m=Ae(t,E=>d(E)),b=u.useRef(!1),v=f?!!f.closest("form"):!0,[y=!1,$]=ur({prop:o,defaultProp:a,onChange:c}),S=u.useRef(y);return u.useEffect(()=>{const E=f==null?void 0:f.form;if(E){const C=()=>$(S.current);return E.addEventListener("reset",C),()=>E.removeEventListener("reset",C)}},[f,$]),u.createElement($r,{scope:r,state:y,disabled:i},u.createElement(G.button,M({type:"button",role:"checkbox","aria-checked":_(y)?"mixed":y,"aria-required":s,"data-state":_e(y),"data-disabled":i?"":void 0,disabled:i,value:l},g,{ref:m,onKeyDown:Ce(e.onKeyDown,E=>{E.key==="Enter"&&E.preventDefault()}),onClick:Ce(e.onClick,E=>{$(C=>_(C)?!0:!C),v&&(b.current=E.isPropagationStopped(),b.current||E.stopPropagation())})})),v&&u.createElement(kr,{control:f,bubbles:!b.current,name:n,value:l,checked:y,required:s,disabled:i,style:{transform:"translateX(-100%)"}}))}),vr="CheckboxIndicator",Sr=u.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,a=xr(vr,r);return u.createElement(Oe,{present:n||_(a.state)||a.state===!0},u.createElement(G.span,M({"data-state":_e(a.state),"data-disabled":a.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),kr=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,a=u.useRef(null),s=pr(r),i=mr(t);return u.useEffect(()=>{const l=a.current,c=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(c,"checked").set;if(s!==r&&f){const d=new Event("click",{bubbles:n});l.indeterminate=_(r),f.call(l,_(r)?!1:r),l.dispatchEvent(d)}},[s,r,n]),u.createElement("input",M({type:"checkbox","aria-hidden":!0,defaultChecked:_(r)?!1:r},o,{tabIndex:-1,ref:a,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e==="indeterminate"}function _e(e){return _(e)?"indeterminate":e?"checked":"unchecked"}const Cr=yr,Er=Sr;var wr=Object.defineProperty,Ir=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Ee=(e,t,r)=>t in e?wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&Ee(e,r,t[r]);if(Y)for(var r of Y(t))Le.call(t,r)&&Ee(e,r,t[r]);return e},Fe=(e,t)=>Ir(e,Rr(t)),zr=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Y)for(var n of Y(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r},Br={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},Pr={default:"Roboto, sans-serif",code:"monospace"},Ar={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Mr={regular:"400",medium:"500",bold:"700"},jr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},Nr={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Or={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:k,css:Gr,globalCss:qr,keyframes:Jr,getCssText:Kr,theme:Xr,createTheme:Yr,config:Qr}=zt({themeMap:Fe(Q({},we),{height:"space",width:"space"}),theme:{colors:Br,fonts:Pr,fontSizes:Ar,lineHeights:jr,fontWeights:Mr,radii:Nr,space:Or}}),Tr=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Tr.displayName="Box";var _r=k("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",padding:"0 $4",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not:(:disabled):hover":{background:"$ignite300"},"&:disabled":{background:"$gray200",cursor:"not-allowed"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not:(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{background:"$gray200",borderColor:"$gray200",cursor:"not-allowed"}},tertiary:{color:"$gray100","&:not:(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600",cursor:"not-allowed"}}},size:{sm:{fontSize:"$sm",height:38},md:{fontSize:"$md",height:46}}},defaultVariants:{variant:"primary",size:"md"}});_r.displayName="Button";var De=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});De.displayName="Text";var Wr=k("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Wr.displayName="Heading";var He=k(sr,{borderRadius:"$full",display:"block",width:"$16",height:"$16",overflow:"hidden"}),Ve=k(cr,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Ze=k(dr,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function en(e){return R.jsxs(He,{children:[R.jsx(Ve,Q({},e)),R.jsx(Ze,{delayMs:600,children:R.jsx(se,{})})]})}He.displayName="AvatarContainer";Ve.displayName="AvatarImage";Ze.displayName="AvatarFallback";se.displayName="FallbackIcon";var Ue=k("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Ge=k("span",{fontFamily:"$default",fontWeight:"$regular",fontSize:"$sm",color:"$gray400"}),qe=k("input",{fontFamily:"$default",fontWeight:"$regular",fontSize:"$sm",color:"$white",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Lr=u.forwardRef((e,t)=>{var r=e,{prefix:n,size:o}=r,a=zr(r,["prefix","size"]);return R.jsxs(Ue,{size:o,children:[!!n&&R.jsx(Ge,{children:n}),R.jsx(qe,Q({ref:t},a))]})});Ue.displayName="TextInputContainer";Ge.displayName="TextInputPrefix";qe.displayName="Input";var Fr=k("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Fr.displayName="TextArea";var Je=k(Cr,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300",border:"2px solid $ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"}}),Ke=k(Er,{color:"$white",width:"$4",height:"$4"}),tn=e=>R.jsx(Je,Fe(Q({},e),{children:R.jsx(Ke,{asChild:!0,children:R.jsx(le,{weight:"bold"})})}));Je.displayName="CheckContainer";Ke.displayName="CheckIndicator";le.displayName="CheckIcon";var Xe=k("div",{}),Ye=k(De,{color:"$gray200",defaultVariants:{size:"xs"}}),Qe=k("div",{display:"grid",gap:"$2",marginTop:"$1",gridTemplateColumns:"repeat(var(--steps-amount),1fr)"}),et=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}}),rn=({amountOfSteps:e,currentStep:t=1})=>R.jsxs(Xe,{children:[R.jsxs(Ye,{children:["Passo ",t," de ",e]}),R.jsx(Qe,{css:{"--steps-amount":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>R.jsx(et,{active:r<=t},r))})]});Xe.displayName="MultiStepContainer";Ye.displayName="Label";Qe.displayName="Steps";et.displayName="Step";Lr.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{en as A,Tr as B,tn as C,Wr as H,rn as M,ie as P,Lr as T,De as a,Fr as b,_r as c};
//# sourceMappingURL=index-da9bcd55.js.map