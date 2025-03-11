
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,a0 as x,a1 as m,a2 as p,a6 as v,p as _,a7 as w,a8 as b,i as g,o as k,b as l,k as a,P as B,w as N,K as S,A as h,u as y,L as I,a5 as r}from"./index-DHhLMwNP.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},P={class:"flex flex-col gap-4"},R=d({__name:"[...all]",setup(V){const n=x(),u=m(),o=p(),c=v(),e=_({inter:Number.NaN,countdown:5});w(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),b(()=>{o.settings.tabbar.enable&&c.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(F,t)=>{const i=B,f=I;return k(),g("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",P,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:N(()=>[S(h(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(R);export{R as default};
//# sourceMappingURL=_...all_-CiNLflw1.js.map
