(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{130:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var i=function(e,t,a){const[l,i]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,r=!1;const c=document.getElementsByClassName(e);for(;a<c.length&&!r;){const e=c[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(t),e.classList.add(t),i(e),r=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},r=a(95),c=a.n(r);const s="table-of-contents__link";function o({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(o,{isChild:!0,headings:e.children}))))):null}t.a=function({headings:e}){return i(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:c.a.tableOfContents},l.a.createElement(o,{headings:e}))}},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(123),r=a(136),c=a(115);var s=function(e){const{nextItem:t,prevItem:a}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},o=a(126),m=a(130);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:c}=t,{title:d,description:v,nextItem:u,prevItem:g,editUrl:E}=c,{hide_table_of_contents:f}=n;return l.a.createElement(i.a,{title:d,description:v},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(o.a,{sidebar:a})),l.a.createElement("div",{className:"col col--8"},l.a.createElement(r.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,E&&l.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(u||g)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(s,{nextItem:u,prevItem:g}))),!f&&t.rightToc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{headings:t.rightToc})))))}}}]);