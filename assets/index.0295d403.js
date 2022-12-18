import{c as b,d as y,r as v,o as k,a as m,b as l,e as c,F as _,f as C,g,h as t,i as w,w as u,t as p,u as N,j as d,k as h,l as $,M as j,m as x,n as A,p as L}from"./vendor.b35554b8.js";const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};T();var f=(i,n)=>{for(const[o,a]of n)i[o]=a;return i};const D={},B=b('<h1>/home</h1><p> I am a Full Stack Developer &amp; I.T. Specialist living in New York City, with a passion for developing intuitive solutions for any problem. </p><p> Whether it be a simple blog, a static website, or even a complex custom app to manage a entire company, I can build it for you. </p><p> Everyday I use and experiment with a variety of technologies and tools like: </p><ul><li>HTML/CSS, SCSS, PostCSS, Bootstrap, Tailwind, MaterialUI</li><li>JavaScript, React, Vue, Next, Nuxt</li><li>Python, GoLang, Node.js, Rust</li><li>SQL, MongoDB, Prisma, NoSQL, Elasticsearch</li><li>Google Cloud, Firebase, AWS, Docker, Kubernetes, Linux</li><li>Jira, GitHub, Trello</li></ul><p> In addition to my work as a developer, i am also a full time teacher at the <a href="https://www.brooklynsteamcenter.org" target="_blank">Brooklyn STEAM Center</a>, a revolutionary new high school, where education and industry meets in collaboration to foster 21st century learning. </p>',6);function M(i,n){return B}var O=f(D,[["render",M]]);const P=t("h1",null,"/ramblings",-1),z=t("p",null,"Here are some of my ramblings",-1),E={key:0},G={class:"title"},I={class:"date"},H=y({setup(i){const n=v(),o=(a=0)=>{fetch("https://api-us-east-1.graphcms.com/v2/ckw7dzak408wm01z25mfy5x76/master",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:`
      {
        ramblingsConnection(first: 3, skip:${a}, orderBy: publishedAt_DESC) {
          aggregate{
            count
          }
          edges {
            node {
              slug
              title
              publishedAt
              snippet
            }
          }
        }
      }
      `})}).then(e=>e.json()).then(({data:e})=>n.value=e)};return k(()=>{o()}),(a,e)=>{const r=m("router-link");return l(),c(_,null,[P,z,n.value!==void 0?(l(),c("div",E,[(l(!0),c(_,null,C(n.value.ramblingsConnection.edges,({node:s})=>(l(),w(r,{to:`/ramblings/${s.slug}`,key:s.slug,class:"rambling"},{default:u(()=>[t("span",G,p(s.slug)+".md",1),t("p",I,p(new Date(s.publishedAt).toLocaleString()),1),t("p",null,p(s.snippet),1)]),_:2},1032,["to"]))),128))])):g("",!0)],64)}}}),F=h("/ramblings"),R={key:0},V=y({setup(i){const n=N(),o=v(),a=()=>{fetch("https://api-us-east-1.graphcms.com/v2/ckw7dzak408wm01z25mfy5x76/master",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:`
      {
        rambling(where: {slug: "${n.params.slug}"}) {
          publishedAt
          title
          content
        }
      }
      `})}).then(e=>e.json()).then(({data:e})=>o.value=e.rambling)};return k(()=>{a()}),(e,r)=>{const s=m("router-link");return l(),c(_,null,[t("h1",null,[d(s,{to:"/ramblings"},{default:u(()=>[F]),_:1}),h("/"+p(e.$route.params.slug)+".md",1)]),o.value!==void 0?(l(),c("p",R,p(new Date(o.value.publishedAt).toLocaleString()),1)):g("",!0),o.value!==void 0?(l(),w($(j),{key:1,source:o.value.content},null,8,["source"])):g("",!0)],64)}}}),Y={},J=b('<h1>/projects</h1><p>Here is a sampling of my work, both open source and for private clients</p><h2>Open Source</h2><ul><li><a href="https://github.com/justinforlenza/keylight-control" target="_blank">Keylight Control</a> - A NodeGUI powered cross platform application to control Elgato&#39;s Keylight products </li><li><a href="https://github.com/justinforlenza/gsuite-tool" target="_blank">GSuite Tool</a> - An electron desktop application designed to aid in a Google Workspace (formally GSuite) user administration tasks </li></ul><h2>Private Work</h2><ul><li><a href="https://brooklynnavyyard.org" target="_blank">Brooklyn Navy Yard</a> - Developed a central hub for the Navy Yard&#39;s tenants to manage their employees, and their access to the Yard&#39;s services </li><li><a href="https://nyc.gov/cyber" target="_blank">NYC Cyber Command</a> - Developed numerous web applications to aid in the prevention, detection and remediation of cyber threats </li></ul>',6);function W(i,n){return J}var K=f(Y,[["render",W]]);const q=x({history:A(),linkActiveClass:"",linkExactActiveClass:"",routes:[{path:"/",redirect:"/home"},{path:"/home",component:O},{path:"/projects",component:K},{path:"/ramblings",component:H},{path:"/ramblings/:slug",component:V}]}),Q={},U=t("span",null,"justin_forlenza",-1),X={class:"nav-links"},Z=h("/home"),ee=h("/projects"),te=h("/ramblings"),oe=t("footer",null,[t("div",null,[t("a",{rel:"me",href:"https://universeodon.com/@justinf",target:"_blank"},"Mastodon")]),t("div",null,[t("a",{href:"https://twitter.com/JustinForNYC",target:"_blank"},"Twitter")]),t("div",null,[t("a",{href:"https://github.com/justinforlenza",target:"_blank"},"GitHub")])],-1);function ne(i,n){const o=m("router-link"),a=m("router-view");return l(),c(_,null,[t("nav",null,[U,t("div",X,[d(o,{to:"/home"},{default:u(()=>[Z]),_:1}),d(o,{to:"/projects"},{default:u(()=>[ee]),_:1}),d(o,{to:"/ramblings"},{default:u(()=>[te]),_:1})])]),t("main",null,[d(a)]),oe],64)}var re=f(Q,[["render",ne]]);const S=L(re);S.use(q);S.mount("#app");