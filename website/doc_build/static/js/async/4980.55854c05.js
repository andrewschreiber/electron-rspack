"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4980"],{8040:function(e,r,s){s.r(r),s.d(r,{default:function(){return a}});var o=s(651),n=s(6971);function t(e){let r=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"use-web-workers",children:["Use Web Workers",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-web-workers",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["This chapter introduces how to configure and use ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer",children:"Web Workers"})," in Rsbuild project."]}),"\n",(0,o.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,o.jsx)(r.div,{className:"rspress-directive-title",children:"Web Workers"}),(0,o.jsx)(r.div,{className:"rspress-directive-content",children:(0,o.jsx)(r.p,{children:"Web Workers are a type of JavaScript program that runs in the background, independently of other scripts, without affecting the performance of the page. This makes it possible to run long-running scripts, such as ones that handle complex calculations or access remote resources, without blocking the user interface or other scripts. Web workers provide an easy way to run tasks in the background and improve the overall performance of web applications."})})]}),"\n",(0,o.jsxs)(r.h2,{id:"use-web-workers-1",children:["Use Web Workers",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-web-workers-1",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Web Workers are first-class citizens of Rspack, which means you don't need any loader to use web workers directly in Rspack or Rsbuild projects."}),"\n",(0,o.jsxs)(r.p,{children:["For example, create a file called ",(0,o.jsx)(r.code,{children:"worker.js"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",meta:"title=worker.js",children:"self.onmessage = (event) => {\n  const result = event.data * 2;\n  self.postMessage(result);\n};\n"})}),"\n",(0,o.jsx)(r.p,{children:"Then use this worker in the main thread:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",meta:"title=index.js",children:"const worker = new Worker(new URL('./worker.js', import.meta.url));\n\nworker.onmessage = (event) => {\n  console.log('The results from Workers:', event.data);\n};\n\nworker.postMessage(10);\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"loading-scripts-from-remote-urls-cross-origin",children:["Loading scripts from remote URLs (cross-origin)",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#loading-scripts-from-remote-urls-cross-origin",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["By default, the worker script will be emitted as a separate chunk. This script supports uploading to CDN, but must obey the ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer",children:"same-origin policy"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["If you want your worker scripts to be accessible across domains, a common solution is to load via ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",target:"_blank",rel:"noopener noreferrer",children:"importScripts"})," (not subject to CORS), you can refer to the following code:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",meta:"title=index.js {2}",children:"// https://github.com/jantimon/remote-web-worker\nimport 'remote-web-worker';\n\nconst worker = new Worker(new URL('./worker.js', import.meta.url), {\n  type: 'classic',\n});\n\nworker.onmessage = (event) => {\n  console.log('The results from Workers:', event.data);\n};\n\nworker.postMessage(10);\n"})}),"\n",(0,o.jsxs)(r.p,{children:["For detailed discussions on cross-domain issues, please refer to ",(0,o.jsx)(r.a,{href:"https://github.com/webpack/webpack/discussions/14648",target:"_blank",rel:"noopener noreferrer",children:"Discussions - webpack 5 web worker support for CORS?"})]}),"\n",(0,o.jsxs)(r.h2,{id:"build-web-workers-outputs",children:["Build Web Workers outputs",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#build-web-workers-outputs",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Rsbuild supports building Web Workers outputs independently, which is helpful when you need to provide Web Workers outputs for use by other applications."}),"\n",(0,o.jsxs)(r.p,{children:["You can set Rsbuild's ",(0,o.jsx)(r.a,{href:"/config/output/target",children:"output.target"})," configuration to ",(0,o.jsx)(r.code,{children:"'web-worker'"}),", and Rsbuild will generate build outputs suitable for the Web Workers environment."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"export default {\n  output: {\n    target: 'web-worker',\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fweb-workers.mdx"]={toc:[{text:"Use Web Workers",id:"use-web-workers-1",depth:2},{text:"Loading scripts from remote URLs (cross-origin)",id:"loading-scripts-from-remote-urls-cross-origin",depth:3},{text:"Build Web Workers outputs",id:"build-web-workers-outputs",depth:2}],title:"Use Web Workers",frontmatter:{}}}}]);