"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["5110"],{4206:function(e,i,n){n.r(i),n.d(i,{default:function(){return o}});var l=n(651),d=n(6971),s=n(4340);function r(e){let i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.h1,{id:"solid",children:["Solid",(0,l.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#solid",children:"#"})]}),"\n",(0,l.jsx)(i.p,{children:"在这篇文档中，你可以了解到如何基于 Rsbuild 来构建一个 Solid 应用。"}),"\n",(0,l.jsxs)(i.h2,{id:"创建-solid-项目",children:["创建 Solid 项目",(0,l.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-solid-项目",children:"#"})]}),"\n",(0,l.jsxs)(i.p,{children:["你可以使用 ",(0,l.jsx)(i.code,{children:"create-rsbuild"})," 来创建一个 Rsbuild + Solid 的项目，调用以下命令："]}),"\n","\n",(0,l.jsx)(s.PackageManagerTabs,{command:{npm:"npm create rsbuild@latest",yarn:"yarn create rsbuild",pnpm:"pnpm create rsbuild@latest",bun:"bun create rsbuild@latest"}}),"\n",(0,l.jsxs)(i.p,{children:["然后在 ",(0,l.jsx)(i.code,{children:"Select framework"})," 时选择 ",(0,l.jsx)(i.code,{children:"Solid"})," 即可。"]}),"\n",(0,l.jsxs)(i.h2,{id:"在已有项目中使用-solid",children:["在已有项目中使用 Solid",(0,l.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#在已有项目中使用-solid",children:"#"})]}),"\n",(0,l.jsxs)(i.p,{children:["为了能够编译 Solid 组件，你需要注册 Rsbuild 的 ",(0,l.jsx)(i.a,{href:"/plugins/list/plugin-solid",children:"Solid 插件"}),"，插件会自动添加 Solid 构建所需的配置。"]}),"\n",(0,l.jsxs)(i.p,{children:["例如，在 ",(0,l.jsx)(i.code,{children:"rsbuild.config.ts"})," 中注册："]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginBabel } from '@rsbuild/plugin-babel';\nimport { pluginSolid } from '@rsbuild/plugin-solid';\n\nexport default defineConfig({\n  plugins: [\n    pluginBabel({\n      include: /\\.(?:jsx|tsx)$/,\n    }),\n    pluginSolid(),\n  ],\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,d.ah)(),e.components);return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}let o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguide%2Fframework%2Fsolid.mdx"]={toc:[{text:"创建 Solid 项目",id:"创建-solid-项目",depth:2},{text:"在已有项目中使用 Solid",id:"在已有项目中使用-solid",depth:2}],title:"Solid",frontmatter:{}}}}]);