if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const d=e=>s(e,n),o={module:{uri:n},exports:t,require:d};i[n]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"../build/js/App.d.ts",revision:"c2c269f1b962a87ce264835065d3c1ea"},{url:"../build/js/index.d.ts",revision:"e2ebd7ddedcadeeadbf819c35985c768"},{url:"../build/js/server/server.d.ts",revision:"4eac7884162aabdcd563547369b8cf13"},{url:"78180c96721c644cdf43.tsx",revision:null},{url:"index.html",revision:"9715ab120fcf69271e80b6646baeaa68"},{url:"main.js",revision:"2e46ba11e0d81bb4abafc3a17cbecf77"},{url:"main.js.LICENSE.txt",revision:"97b5938ef990e58844f0cff8514cc372"}],{})}));
