
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a9 as g,p,c as v,d as k,i as $,o as x,b as t,k as _,M as C,w as s,K as a,L as B,P as M}from"./index-BZo-B8MS.js";const N=g("notification",()=>{const i=p(0),e=p(0),c=v(()=>i.value+e.value);function d(){m(),f()}function m(){i.value=9}function f(){e.value=0}return{message:i,todo:e,total:c,init:d}}),F={class:"flex-center"},P={class:"flex-center"},V=k({__name:"all",setup(i){const e=N();function c(){e.$patch(o=>{o.message+=1})}function d(){e.$patch(o=>{o.message-=o.message>0?1:0})}function m(){e.$patch(o=>{o.todo+=1})}function f(){e.$patch(o=>{o.todo-=o.todo>0?1:0})}return(o,n)=>{const r=C,l=M,u=B;return x(),$("div",null,[t(r,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1}),_("div",F,[t(u,{onClick:c},{default:s(()=>[t(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1}),t(u,{"ml-2":"",onClick:d},{default:s(()=>[t(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1})]),t(r,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1}),_("div",P,[t(u,{onClick:m},{default:s(()=>[t(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1}),t(u,{"ml-2":"",onClick:f},{default:s(()=>[t(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1})])])}}});export{V as _,N as u};
//# sourceMappingURL=all.vue_vue_type_script_setup_true_lang-BTti5obS.js.map
