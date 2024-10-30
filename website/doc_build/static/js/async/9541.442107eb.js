"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["9541"],{3405:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var r=s(651),t=s(6971),o=s(4340);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"use-rsdoctor",children:["Use Rsdoctor",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-rsdoctor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://rsdoctor.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsdoctor"})," is a build analyzer that can visually display the build process, such as compilation time, code changes before and after compilation, module reference relationships, duplicate modules, etc."]}),"\n",(0,r.jsx)(n.p,{children:"If you need to debug the build outputs or build process, you can use Rsdoctor for troubleshooting."}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In a Rsbuild-based project, you can enable Rsdoctor as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install the Rsdoctor plugin:"}),"\n"]}),"\n","\n",(0,r.jsx)(o.PackageManagerTabs,{command:"add @rsdoctor/rspack-plugin -D"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"RSDOCTOR=true"})," env variable before the CLI command:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "dev:rsdoctor": "RSDOCTOR=true rsbuild dev",\n    "build:rsdoctor": "RSDOCTOR=true rsbuild build"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Since the Windows system does not support the above usage, you can also use ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer",children:"cross-env"})," to set environment variables. This ensures compatibility across different systems:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "dev:rsdoctor": "cross-env RSDOCTOR=true rsbuild dev",\n    "build:rsdoctor": "cross-env RSDOCTOR=true rsbuild build"\n  },\n  "devDependencies": {\n    "cross-env": "^7.0.0"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After running the above commands, Rsbuild will automatically register the Rsdoctor plugin, and after the build is completed, it will open the build analysis page. For complete features, please refer to ",(0,r.jsx)(n.a,{href:"https://rsdoctor.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsdoctor document"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"options",children:["Options",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to configure the ",(0,r.jsx)(n.a,{href:"https://rsdoctor.dev/config/options/options",target:"_blank",rel:"noopener noreferrer",children:"options"})," provided by the Rsdoctor plugin, please manually register the Rsdoctor plugin:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';\n\nexport default {\n  tools: {\n    rspack(config, { appendPlugins }) {\n      if (process.env.RSDOCTOR === 'true') {\n        appendPlugins(\n          new RsdoctorRspackPlugin({\n            // plugin options\n          }),\n        );\n      }\n    },\n  },\n};\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguide%2Fdebug%2Frsdoctor.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Options",id:"options",depth:2}],title:"Use Rsdoctor",frontmatter:{}}}}]);