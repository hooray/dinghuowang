
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,a2 as d,a as h,o as p,w as _,b as x,K as w,P as g,u as c,A as S,L as f}from"./index-DZhCbklB.js";function C(r){function e(){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){r();return}return document.startViewTransition(async()=>{await Promise.resolve(r())})}return{startViewTransition:e}}const V=u({name:"ColorScheme",__name:"index",setup(r){const e=d();function m(a){var n;const{startViewTransition:i}=C(()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark")});(n=i())==null||n.ready.then(()=>{const t=a.clientX,o=a.clientY,l=Math.hypot(Math.max(t,innerWidth-t),Math.max(o,innerHeight-o)),s=[`circle(0px at ${t}px ${o}px)`,`circle(${l}px at ${t}px ${o}px)`];document.documentElement.animate({clipPath:e.settings.app.colorScheme!=="dark"?s:s.reverse()},{duration:300,easing:"ease-out",pseudoElement:e.settings.app.colorScheme!=="dark"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(a,i)=>{const n=g,t=f;return p(),h(t,{variant:"ghost",size:"icon",class:"w-auto px-2",onClick:m},{default:_(()=>[x(n,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[c(e).currentColorScheme],class:"size-4"},null,8,["name"]),w(" "+S({light:"白天",dark:"夜间"}[c(e).currentColorScheme]),1)]),_:1})}}});export{V as _};
//# sourceMappingURL=index.vue_vue_type_script_setup_true_lang-DqlsAQAv.js.map
