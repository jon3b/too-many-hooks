try{
var oe=Object.create;var B=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var O=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var z=(e,t)=>()=>(e&&(t=e(e=0)),t);var pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var he=(e,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of se(t))!le.call(e,n)&&n!==r&&B(e,n,{get:()=>t[n],enumerable:!(l=ne(t,n))||l.enumerable});return e};var ue=(e,t,r)=>(r=e!=null?oe(ae(e)):{},he(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e));var c=z(()=>{});var f=z(()=>{});var J=pe((Z,L)=>{c();f();(function(e){if(typeof Z=="object"&&typeof L<"u")L.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window<"u"||typeof window<"u"?t=window:typeof self<"u"?t=self:t=this,t.memoizerific=e()}})(function(){var e,t,r;return function l(n,g,p){function s(o,x){if(!g[o]){if(!n[o]){var a=typeof O=="function"&&O;if(!x&&a)return a(o,!0);if(i)return i(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var h=g[o]={exports:{}};n[o][0].call(h.exports,function(m){var w=n[o][1][m];return s(w||m)},h,h.exports,l,n,g,p)}return g[o].exports}for(var i=typeof O=="function"&&O,u=0;u<p.length;u++)s(p[u]);return s}({1:[function(l,n,g){n.exports=function(p){if(typeof Map!="function"||p){var s=l("./similar");return new s}else return new Map}},{"./similar":2}],2:[function(l,n,g){function p(){return this.list=[],this.lastItem=void 0,this.size=0,this}p.prototype.get=function(s){var i;if(this.lastItem&&this.isEqual(this.lastItem.key,s))return this.lastItem.val;if(i=this.indexOf(s),i>=0)return this.lastItem=this.list[i],this.list[i].val},p.prototype.set=function(s,i){var u;return this.lastItem&&this.isEqual(this.lastItem.key,s)?(this.lastItem.val=i,this):(u=this.indexOf(s),u>=0?(this.lastItem=this.list[u],this.list[u].val=i,this):(this.lastItem={key:s,val:i},this.list.push(this.lastItem),this.size++,this))},p.prototype.delete=function(s){var i;if(this.lastItem&&this.isEqual(this.lastItem.key,s)&&(this.lastItem=void 0),i=this.indexOf(s),i>=0)return this.size--,this.list.splice(i,1)[0]},p.prototype.has=function(s){var i;return this.lastItem&&this.isEqual(this.lastItem.key,s)?!0:(i=this.indexOf(s),i>=0?(this.lastItem=this.list[i],!0):!1)},p.prototype.forEach=function(s,i){var u;for(u=0;u<this.size;u++)s.call(i||this,this.list[u].val,this.list[u].key,this)},p.prototype.indexOf=function(s){var i;for(i=0;i<this.size;i++)if(this.isEqual(this.list[i].key,s))return i;return-1},p.prototype.isEqual=function(s,i){return s===i||s!==s&&i!==i},n.exports=p},{}],3:[function(l,n,g){var p=l("map-or-similar");n.exports=function(o){var x=new p(void 0==="true"),a=[];return function(d){var h=function(){var m=x,w,R,S=arguments.length-1,A=Array(S+1),_=!0,I;if((h.numArgs||h.numArgs===0)&&h.numArgs!==S+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(I=0;I<S;I++){if(A[I]={cacheItem:m,arg:arguments[I]},m.has(arguments[I])){m=m.get(arguments[I]);continue}_=!1,w=new p(void 0==="true"),m.set(arguments[I],w),m=w}return _&&(m.has(arguments[S])?R=m.get(arguments[S]):_=!1),_||(R=d.apply(null,arguments),m.set(arguments[S],R)),o>0&&(A[S]={cacheItem:m,arg:arguments[S]},_?s(a,A):a.push(A),a.length>o&&i(a.shift())),h.wasMemoized=_,h.numArgs=S+1,R};return h.limit=o,h.wasMemoized=!1,h.cache=x,h.lru=a,h}};function s(o,x){var a=o.length,d=x.length,h,m,w;for(m=0;m<a;m++){for(h=!0,w=0;w<d;w++)if(!u(o[m][w].arg,x[w].arg)){h=!1;break}if(h)break}o.push(o.splice(m,1)[0])}function i(o){var x=o.length,a=o[x-1],d,h;for(a.cacheItem.delete(a.arg),h=x-2;h>=0&&(a=o[h],d=a.cacheItem.get(a.arg),!d||!d.size);h--)a.cacheItem.delete(a.arg)}function u(o,x){return o===x||o!==o&&x!==x}},{"map-or-similar":1}]},{},[3])(3)})});c();f();c();f();c();f();var y="storybook/viewport",D="viewport",Ae=`${y}/update`,ke=`${y}/configure`,Ce=`${y}/setStoryDefaultViewport`,Le=`${y}/viewportChanged`,H=(e,t)=>e.indexOf(t),de=(e,t)=>{let r=H(e,t);return r===e.length-1?e[0]:e[r+1]},me=(e,t)=>{let r=H(e,t);return r<1?e[e.length-1]:e[r-1]},q=async(e,t,r)=>{await e.setAddonShortcut(y,{label:"Previous viewport",defaultShortcut:["shift","V"],actionName:"previous",action:()=>{let{selected:l,isRotated:n}=e.getAddonState(y);t({selected:me(r,l),isRotated:n})}}),await e.setAddonShortcut(y,{label:"Next viewport",defaultShortcut:["V"],actionName:"next",action:()=>{let{selected:l,isRotated:n}=e.getAddonState(y);t({selected:de(r,l),isRotated:n})}}),await e.setAddonShortcut(y,{label:"Reset viewport",defaultShortcut:["alt","V"],actionName:"reset",action:()=>{let{isRotated:l}=e.getAddonState(y);t({selected:"reset",isRotated:l})}})};c();f();var W={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};c();f();var b=__REACT__,{Children:He,Component:qe,Fragment:G,Profiler:We,PureComponent:Ge,StrictMode:Fe,Suspense:Ye,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ue,cloneElement:$e,createContext:je,createElement:F,createFactory:Xe,createRef:Ke,forwardRef:Ze,isValidElement:Je,lazy:Qe,memo:Y,useCallback:et,useContext:tt,useDebugValue:it,useEffect:k,useImperativeHandle:rt,useLayoutEffect:ot,useMemo:nt,useReducer:st,useRef:U,useState:at,version:lt}=__REACT__;c();f();var ut=__STORYBOOKAPI__,{ActiveTabs:dt,Consumer:mt,ManagerContext:ct,Provider:ft,addons:C,combineParameters:gt,controlOrMetaKey:xt,controlOrMetaSymbol:yt,eventMatchesShortcut:bt,eventToShortcut:wt,isMacLike:St,isShortcutTaken:It,keyToSymbol:Tt,merge:vt,mockChannel:_t,optionOrAltSymbol:Et,shortcutMatchesShortcut:Ot,shortcutToHumanString:Pt,types:$,useAddonState:j,useArgTypes:Rt,useArgs:At,useChannel:kt,useGlobalTypes:Ct,useGlobals:Lt,useParameter:X,useSharedState:Mt,useStoryPrepared:Nt,useStorybookApi:K,useStorybookState:Vt}=__STORYBOOKAPI__;var V=ue(J(),1);c();f();var Gt=__STORYBOOKTHEMING__,{CacheProvider:Ft,ClassNames:Yt,Global:Q,ThemeProvider:Ut,background:$t,color:jt,convert:Xt,create:Kt,createCache:Zt,createGlobal:Jt,createReset:Qt,css:ei,darken:ti,ensure:ii,ignoreSsrWarning:ri,isPropValid:oi,jsx:ni,keyframes:si,lighten:ai,styled:P,themes:li,typography:pi,useTheme:hi,withTheme:ee}=__STORYBOOKTHEMING__;c();f();var ci=__STORYBOOKCOMPONENTS__,{A:fi,ActionBar:gi,AddonPanel:xi,Badge:yi,Bar:bi,Blockquote:wi,Button:Si,Code:Ii,DL:Ti,Div:vi,DocumentWrapper:_i,FlexBar:Ei,Form:Oi,H1:Pi,H2:Ri,H3:Ai,H4:ki,H5:Ci,H6:Li,HR:Mi,IconButton:M,IconButtonSkeleton:Ni,Icons:N,Img:Vi,LI:Bi,Link:zi,Loader:Di,OL:Hi,P:qi,Placeholder:Wi,Pre:Gi,ResetWrapper:Fi,ScrollArea:Yi,Separator:Ui,Spaced:$i,Span:ji,StorybookIcon:Xi,StorybookLogo:Ki,Symbols:Zi,SyntaxHighlighter:Ji,TT:Qi,TabBar:er,TabButton:tr,TabWrapper:ir,Table:rr,Tabs:or,TabsState:nr,TooltipLinkList:te,TooltipMessage:sr,TooltipNote:ar,UL:lr,WithTooltip:ie,WithTooltipPure:pr,Zoom:hr,codeCommon:ur,components:dr,createCopyToClipboardFunction:mr,getStoryHref:cr,interleaveSeparators:fr,nameSpaceClassNames:gr,resetComponents:xr,withReset:yr}=__STORYBOOKCOMPONENTS__;var fe=(0,V.default)(50)(e=>[...ge,...Object.entries(e).map(([t,{name:r,...l}])=>({...l,id:t,title:r}))]),E={id:"reset",title:"Reset viewport",styles:null,type:"other"},ge=[E],xe=(0,V.default)(50)((e,t,r,l,n)=>e.map(g=>{switch(g.id){case E.id:if(t.id===g.id)return null;default:return{...g,onClick:()=>{r({...l,selected:g.id}),n()}}}}).filter(Boolean)),ye="storybook-preview-wrapper",be=({width:e,height:t,...r})=>({...r,height:e,width:t}),we=P.div(()=>({display:"inline-flex"})),re=P.div(({theme:e})=>({display:"inline-block",textDecoration:"none",padding:10,fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:"1",height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent"})),Se=P(M)(()=>({display:"inline-flex",alignItems:"center"})),Ie=P.div(({theme:e})=>({fontSize:e.typography.size.s2-1,marginLeft:10})),Te=(e,t,r)=>{if(t===null)return null;let l=typeof t=="function"?t(e):t;return r?be(l):l},ve=Y(ee(({theme:e})=>{let{viewports:t=W,defaultViewport:r=E.id,disable:l}=X(D,{}),[n,g]=j(y,{selected:r,isRotated:!1}),p=fe(t),s=K();p.find(d=>d.id===r)||console.warn(`Cannot find "defaultViewport" of "${r}" in addon-viewport configs, please check the "viewports" setting in the configuration.`),k(()=>{q(s,g,Object.keys(t))},[t]),k(()=>{g({selected:r||(t[n.selected]?n.selected:E.id),isRotated:n.isRotated})},[r]);let{selected:i,isRotated:u}=n,o=p.find(d=>d.id===i)||p.find(d=>d.id===r)||p.find(d=>d.default)||E,x=U(),a=Te(x.current,o.styles,u);return k(()=>{x.current=a},[o]),l||Object.entries(t).length===0?null:b.createElement(G,null,b.createElement(ie,{placement:"top",trigger:"click",tooltip:({onHide:d})=>b.createElement(te,{links:xe(p,o,g,n,d)}),closeOnClick:!0},b.createElement(Se,{key:"viewport",title:"Change the size of the preview",active:!!a,onDoubleClick:()=>{g({...n,selected:E.id})}},b.createElement(N,{icon:"grow"}),a?b.createElement(Ie,null,u?`${o.title} (L)`:`${o.title} (P)`):null)),a?b.createElement(we,null,b.createElement(Q,{styles:{['iframe[data-is-storybook="true"]']:{margin:"auto",transition:"width .3s, height .3s",position:"relative",border:"1px solid black",boxShadow:"0 0 100px 100vw rgba(0,0,0,0.5)",...a},[`#${ye}`]:{padding:e.layoutMargin,alignContent:"center",alignItems:"center",justifyContent:"center",justifyItems:"center",overflow:"auto",display:"grid",gridTemplateColumns:"100%",gridTemplateRows:"100%"}}}),b.createElement(re,{title:"Viewport width"},a.width.replace("px","")),b.createElement(M,{key:"viewport-rotate",title:"Rotate viewport",onClick:()=>{g({...n,isRotated:!u})}},b.createElement(N,{icon:"transfer"})),b.createElement(re,{title:"Viewport height"},a.height.replace("px",""))):null)}));C.register(y,()=>{C.add(y,{title:"viewport / media-queries",type:$.TOOL,match:({viewMode:e})=>e==="story",render:()=>F(ve,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager.mjs.map
