import{r as n}from"./index-f1f749bf.js";var C={},R={get exports(){return C},set exports(r){C=r}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=n,w=Symbol.for("react.element"),S=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,H=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function E(r,i,e){var l,m={},p=null,f=null;e!==void 0&&(p=""+e),i.key!==void 0&&(p=""+i.key),i.ref!==void 0&&(f=i.ref);for(l in i)O.call(i,l)&&!A.hasOwnProperty(l)&&(m[l]=i[l]);if(r&&r.defaultProps)for(l in i=r.defaultProps,i)m[l]===void 0&&(m[l]=i[l]);return{$$typeof:w,type:r,key:p,ref:f,props:m,_owner:H.current}}v.Fragment=S;v.jsx=E;v.jsxs=E;(function(r){r.exports=v})(R);const I=C.Fragment,N=C.jsx,W=C.jsxs,L=r=>typeof r=="function",F=r=>{const[i,e]=n.useState(r),l=n.useCallback((a,g)=>L(g)?g(a):g,[]),m=n.useCallback(()=>e([]),[]),p=n.useCallback(()=>e(r),[r]),f=n.useCallback((...a)=>e(g=>[...g,...a]),[]),d=n.useCallback((a,...g)=>e(c=>[...c.slice(0,a),...g,...c.slice(a)]),[]),t=n.useCallback(a=>e(g=>[...g.slice(0,a),...g.slice(a+1)]),[]),h=n.useCallback(a=>e(g=>g.filter(a)),[]),u=n.useCallback((a,g)=>e(c=>c.slice(a,g)),[]),o=n.useCallback((a,...g)=>e(c=>[...c.slice(0,a),...g.map((k,y)=>l(c[a+y],k)),...c.slice(a+g.length)]),[l]),_=n.useCallback((a,g)=>e(c=>c.map(k=>a(k)?l(k,g):k)),[l]),s=n.useCallback(a=>e(g=>g.map(c=>l(c,a))),[l]),b=n.useCallback(a=>e(g=>[...g.sort(a)]),[]),x=n.useCallback(()=>e(a=>[...a.reverse()]),[]);return[i,{set:e,clear:m,reset:p,push:f,insertAt:d,removeAt:t,removeWhere:h,trimToRange:u,updateAt:o,updateWhere:_,updateAll:s,sort:b,reverse:x}]},B=r=>{const[i,e]=n.useState(r),l=n.useCallback(()=>e(!0),[]),m=n.useCallback(()=>e(!1),[]),p=n.useCallback(()=>e(f=>!f),[]);return[i,{set:e,flag:l,unflag:m,toggle:p}]},T=(r,i)=>{const[e,l]=n.useState(),m=n.useRef(new MutationObserver(l));return n.useEffect(()=>{if(r){const p=m.current;return p.observe(r,i),()=>p.disconnect()}},[r,m,i]),e},P=(r,i,e)=>n.useEffect(()=>(window.addEventListener(r,i,e==null?void 0:e.add),()=>window.removeEventListener(r,i,e==null?void 0:e.remove))),D=()=>{const[r,{updateAt:i}]=F([]),e=T(document,{attributes:!0,subtree:!0}),l=n.useCallback(()=>{if(!document)return null;const d=r.filter(o=>document.body.contains(o));if(!d.length)return null;const t=d.map(o=>o.getBoundingClientRect()),h={index:0,element:d[0],isHanging:!1},u=d.reduce((o,_,s)=>{const b={...o},x={index:s,element:_,isHanging:!1};return(t[s].top<t[o.top.left.index].top||t[s].top===t[o.top.left.index].top&&t[s].left<t[o.top.left.index].left)&&(b.top.left=x),(t[s].top<t[o.top.right.index].top||t[s].top===t[o.top.right.index].top&&t[s].right>t[o.top.right.index].right)&&(b.top.right=x),(t[s].right>t[o.right.top.index].right||t[s].right===t[o.right.top.index].right&&t[s].top<t[o.right.top.index].top)&&(b.right.top=x),(t[s].right>t[o.right.bottom.index].right||t[s].right===t[o.right.bottom.index].right&&t[s].bottom>t[o.right.bottom.index].bottom)&&(b.right.bottom=x),(t[s].bottom>t[o.bottom.left.index].bottom||t[s].bottom===t[o.bottom.left.index].bottom&&t[s].left<t[o.bottom.left.index].left)&&(b.bottom.left=x),(t[s].bottom>t[o.bottom.right.index].bottom||t[s].bottom===t[o.bottom.right.index].bottom&&t[s].right>t[o.bottom.right.index].right)&&(b.bottom.right=x),(t[s].left<t[o.left.top.index].left||t[s].left===t[o.left.top.index].left&&t[s].top<t[o.left.top.index].top)&&(b.left.top=x),(t[s].left<t[o.left.bottom.index].left||t[s].left===t[o.left.bottom.index].left&&t[s].bottom>t[o.left.bottom.index].bottom)&&(b.left.bottom=x),b},{top:{left:h,right:h},right:{top:h,bottom:h},bottom:{left:h,right:h},left:{top:h,bottom:h}});return u.top.left.index!==u.left.top.index&&(u.top.left.isHanging=!0,u.left.top.isHanging=!0),u.top.right.index!==u.right.top.index&&(u.top.right.isHanging=!0,u.right.top.isHanging=!0),u.bottom.left.index!==u.left.bottom.index&&(u.bottom.left.isHanging=!0,u.left.bottom.isHanging=!0),u.bottom.right.index!==u.right.bottom.index&&(u.bottom.right.isHanging=!0,u.right.bottom.isHanging=!0),u},[e,r]),[m,p]=n.useState(l()),f=n.useCallback(()=>{p(l())},[l]);return n.useEffect(f,[f]),P("resize",f),{corners:m,setElement:i,onResize:f}},M=({initial:r=0,step:i=1})=>{const[e,l]=n.useState(r),m=n.useCallback(d=>l(t=>t+(d??i)),[i]),p=n.useCallback(d=>l(t=>t-(d??i)),[i]),f=n.useCallback(()=>l(r),[r]);return[e,{set:l,increment:m,decrement:p,reset:f}]};export{F,T as L,P as M,M as T,I as a,N as b,W as j,B as y,D as z};
//# sourceMappingURL=too-many-hooks-98f9e23f.js.map
