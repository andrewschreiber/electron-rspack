"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["1933"],{8968:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var r=a(651),i=a(6971),n=a(4340);function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"javascript-api",children:["JavaScript API",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#javascript-api",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Rsbuild provides a complete set of JavaScript APIs for developers to build higher level solutions on top of Rsbuild."}),"\n",(0,r.jsxs)(s.h2,{id:"access-example",children:["Access Example",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#access-example",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Here is a basic example of how to access the Rsbuild JavaScript API."}),"\n",(0,r.jsxs)(s.h3,{id:"1-install-rsbuild",children:["1. Install Rsbuild",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#1-install-rsbuild",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["You need to install the ",(0,r.jsx)(s.code,{children:"@rsbuild/core"})," package:"]}),"\n","\n",(0,r.jsx)(n.PackageManagerTabs,{command:"add @rsbuild/core -D"}),"\n",(0,r.jsxs)(s.h3,{id:"2-create-an-rsbuild-instance",children:["2. Create an Rsbuild Instance",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#2-create-an-rsbuild-instance",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["You can call the ",(0,r.jsx)(s.a,{href:"/api/javascript-api/core#creatersbuild",children:"createRsbuild"})," method to create an Rsbuild instance:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import { createRsbuild } from '@rsbuild/core';\n\nconst rsbuild = await createRsbuild();\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"createRsbuild"})," method provides some options, which you can learn more about in the ",(0,r.jsx)(s.a,{href:"/api/javascript-api/core#creatersbuild",children:"API - createRsbuild"}),"."]}),"\n",(0,r.jsxs)(s.h3,{id:"3-call-rsbuild-instance-method",children:["3. Call Rsbuild Instance Method",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#3-call-rsbuild-instance-method",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"The Rsbuild instance provides some methods, which you can use it according to the usage scenarios."}),"\n",(0,r.jsxs)(s.p,{children:["To start local development, it is recommended to use the ",(0,r.jsx)(s.a,{href:"/api/javascript-api/instance#rsbuild-startdevserver",children:"rsbuild.startDevServer"})," method, which will start a local dev server."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"await rsbuild.startDevServer();\n"})}),"\n",(0,r.jsx)(s.p,{children:"After successfully starting dev server, you can see the following logs:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  ➜ Local:    http://localhost:3000\n  ➜ Network:  http://192.168.0.1:3000\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To deploy the App to production environment, it is recommended to use the ",(0,r.jsx)(s.a,{href:"/api/javascript-api/instance#rsbuild-build",children:"rsbuild.build"})," method, which will build the production outputs."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"await rsbuild.build();\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["For more introduction of Rsbuild instance methods, please read the ",(0,r.jsx)(s.a,{href:"/api/javascript-api/instance",children:"Rsbuild Instance"})," chapter."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"After completing the above three steps, you have learned the basic usage of Rsbuild. Next, you can customize the build process through the Rsbuild plugin and Rsbuild configs."}),"\n",(0,r.jsxs)(s.h2,{id:"exports-format",children:["Exports Format",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#exports-format",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Rsbuild provides exports in both ES Modules and CommonJS formats:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",meta:'title="index.mjs"',children:"import { createRsbuild } from '@rsbuild/core';\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",meta:'title="index.cjs"',children:"const { createRsbuild } = require('@rsbuild/core');\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"It is recommended to use ES modules format, which is more in line with the community standards."}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fapi%2Fstart%2Findex.mdx"]={toc:[{text:"Access Example",id:"access-example",depth:2},{text:"1. Install Rsbuild",id:"1-install-rsbuild",depth:3},{text:"2. Create an Rsbuild Instance",id:"2-create-an-rsbuild-instance",depth:3},{text:"3. Call Rsbuild Instance Method",id:"3-call-rsbuild-instance-method",depth:3},{text:"Exports Format",id:"exports-format",depth:2}],title:"JavaScript API",frontmatter:{}}}}]);