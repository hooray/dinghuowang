
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as x,a0 as b,a2 as v,bd as P,aq as T,aj as k,Y as I,i as r,o as i,Z as S,$ as C,u as a,O as L,b as d,z as p,w as R,k as m,C as _,T as z,P as V,aa as B,a4 as M}from"./index-BZo-B8MS.js";import{u as y}from"./useMainPage-1ODO7Wfr.js";import"./useTabbar-BniNS0xn.js";const E={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},F=["data-path","src"],N={class:"absolute left-0 top-0 h-full w-full flex-center bg-popover/75"},$=x({name:"IframeView",__name:"iframe",setup(j){const o=b(),f=v(),n=P(),{setCustomTitle:h}=y(),{generateI18nTitle:g}=T(),c=k("iframeRef");return I(()=>o.fullPath,t=>{B(()=>{var l;(l=c.value)==null||l.forEach(s=>{var e;if(s.dataset.path===t){const u=(e=n.openedList.find(w=>w.path===t))==null?void 0:e.title;u&&h(g(u)),s.onload=()=>{n.closeLoading(t)}}})})},{immediate:!0}),(t,l)=>{const s=V;return i(),r("div",E,[(i(!0),r(S,null,C(a(n).openedList,e=>(i(),r("div",{key:e.path,class:L(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(o).fullPath===e.path}])},[d(z,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:R(()=>[p(m("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,F),[[_,a(o).fullPath===e.path]])]),_:2},1032,["name"]),p(m("div",N,[d(s,{name:"i-line-md:loading-twotone-loop",class:"size-10"})],512),[[_,e.isLoading]])],2))),128))])}}}),Y=M($,[["__scopeId","data-v-6f98d9ae"]]);export{Y as default};
//# sourceMappingURL=iframe-qDMwiSsH.js.map
