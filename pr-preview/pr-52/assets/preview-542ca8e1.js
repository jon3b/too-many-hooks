import{s as i}from"./index-d475d2ea.js";import"./_getTag-6acf5a83.js";import"./_commonjsHelpers-042e6b4d.js";module&&module.hot&&module.hot.decline&&module.hot.decline();var O="links";const r=__STORYBOOK_MODULE_PREVIEW_API__.addons,m=__STORYBOOK_MODULE_PREVIEW_API__.makeDecorator,c=__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,d=__STORYBOOK_MODULE_CORE_EVENTS__.SELECT_STORY;var{document:a,HTMLElement:l}=i,L=e=>r.getChannel().emit(d,e),s=e=>{let{target:t}=e;if(!(t instanceof l))return;let E=t,{sbKind:o,sbStory:_}=E.dataset;(o||_)&&(e.preventDefault(),L({kind:o,story:_}))},n=!1,R=()=>{n||(n=!0,a.addEventListener("click",s))},S=()=>{n&&(n=!1,a.removeEventListener("click",s))},T=m({name:"withLinks",parameterName:O,wrapper:(e,t)=>(R(),r.getChannel().once(c,S),e(t))}),D=[T];export{D as decorators};
//# sourceMappingURL=preview-542ca8e1.js.map
