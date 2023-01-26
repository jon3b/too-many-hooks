import{b as t,j as d,a as f}from"./too-many-hooks-74d295b9.js";import{R as g}from"./index-96c5f47c.js";const s=({variant:e="fill",color:l,className:a,...n})=>t("button",{className:`rounded-md border border-transparent bg-transparent px-1.5 py-1 disabled:hover:no-underline  ${e==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500 ":e==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${a}`,style:e==="fill"?{backgroundColor:l}:e==="outline"?{borderColor:l}:{color:l},...n});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"fill"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const c=({isOpen:e,onClose:l,children:a})=>e?g.createPortal(d(f,{children:[t("div",{className:"fixed top-0 left-0 z-50 h-screen w-screen bg-black opacity-50",onClick:l,"aria-hidden":!0}),t("div",{className:"fixed top-2/4 left-2/4 z-50 -translate-y-2/4 -translate-x-2/4","aria-modal":!0,tabIndex:-1,role:"dialog",children:d("div",{className:"flex h-60 max-w-lg flex-col justify-center gap-12 rounded-lg bg-white p-4 text-xl leading-6 text-black",children:[l&&t(s,{variant:"text",title:"Close",onClick:l,className:"absolute top-2 right-2",children:"✕"}),a]})})]}),document.body):null;try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const p=({label:e,labelDirection:l="row",onChange:a,options:n,className:m,variant:r="outline",color:o,...b})=>d("label",{className:`flex ${l==="row"?"items-baseline":"flex-col items-start"} gap-1`,children:[e,t("select",{className:`w-full rounded-md border border-transparent bg-transparent py-1 pl-1.5 pr-8 disabled:hover:no-underline  ${r==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500":r==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${m}`,style:r==="fill"?{backgroundColor:o}:r==="outline"?{borderColor:o}:{color:o},onChange:a?i=>a(i):void 0,...b,children:n.map(({value:i,label:u})=>t("option",{value:i,label:u},u))})]});try{p.displayName="Select",p.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelDirection:{defaultValue:{value:"row"},description:"",name:"labelDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement & { value: T; }>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: T; label: string; }[]"}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{s as B,c as M,p as S};
//# sourceMappingURL=Select-8f3ac1ce.js.map
