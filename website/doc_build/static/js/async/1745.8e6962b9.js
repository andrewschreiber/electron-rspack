"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["1745"],{5606:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var i=n(651),s=n(6971),t=n(4340);function a(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",div:"div",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"vue",children:["Vue",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vue",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"In this document, you will learn how to build a Vue 3 or Vue 2 application using Rsbuild."}),"\n",(0,i.jsxs)(r.h2,{id:"create-vue-project",children:["Create Vue Project",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#create-vue-project",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["You can use ",(0,i.jsx)(r.code,{children:"create-rsbuild"})," to create a project with Rsbuild + Vue. Just execute the following command:"]}),"\n","\n",(0,i.jsx)(t.PackageManagerTabs,{command:{npm:"npm create rsbuild@latest",yarn:"yarn create rsbuild",pnpm:"pnpm create rsbuild@latest",bun:"bun create rsbuild@latest"}}),"\n",(0,i.jsxs)(r.p,{children:["Then select ",(0,i.jsx)(r.code,{children:"Vue 3"})," or ",(0,i.jsx)(r.code,{children:"Vue 2"}),' when prompted to "Select framework".']}),"\n",(0,i.jsxs)(r.h2,{id:"vue-3",children:["Vue 3",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-3",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"use-vue-in-an-existing-project",children:["Use Vue in an existing project",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-vue-in-an-existing-project",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["To compile Vue SFC (Single File Components), you need to register the Rsbuild ",(0,i.jsx)(r.a,{href:"/plugins/list/plugin-vue",children:"Vue plugin"}),". The plugin will automatically add the necessary configuration for Vue builds."]}),"\n",(0,i.jsxs)(r.p,{children:["For example, register in ",(0,i.jsx)(r.code,{children:"rsbuild.config.ts"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginVue } from '@rsbuild/plugin-vue';\n\nexport default defineConfig({\n  plugins: [pluginVue()],\n});\n"})}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(r.div,{className:"rspress-directive-content",children:(0,i.jsxs)(r.p,{children:["For projects using Vue CLI, you can refer to the ",(0,i.jsx)(r.a,{href:"/guide/migration/vue-cli",children:"Vue CLI Migration Guide"}),".\n"]})})]}),"\n",(0,i.jsxs)(r.h3,{id:"use-the-jsx-syntax-of-vue",children:["Use the JSX syntax of Vue",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-jsx-syntax-of-vue",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["If you need to use the JSX syntax of Vue, you also need to register the ",(0,i.jsx)(r.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-vue-jsx"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"typescript-support",children:["TypeScript Support",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-support",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Rsbuild supports compiling TypeScript by default."}),"\n",(0,i.jsxs)(r.p,{children:["Please refer to the ",(0,i.jsx)(r.a,{href:"https://vuejs.org/guide/typescript/overview.html#ide-support",target:"_blank",rel:"noopener noreferrer",children:"TypeScript - IDE Support"})," section of the Vue documentation to learn how to set up Vue TypeScript support in your IDE."]}),"\n",(0,i.jsxs)(r.h2,{id:"vue-2",children:["Vue 2",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-2",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"use-vue-2-in-an-existing-project",children:["Use Vue 2 in an existing project",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-vue-2-in-an-existing-project",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["To compile Vue SFC (Single File Components), you need to register the Rsbuild ",(0,i.jsx)(r.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-vue2",target:"_blank",rel:"noopener noreferrer",children:"Vue 2 plugin"}),". The plugin will automatically add the necessary configuration for Vue builds."]}),"\n",(0,i.jsxs)(r.p,{children:["For example, register in ",(0,i.jsx)(r.code,{children:"rsbuild.config.ts"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginVue2 } from '@rsbuild/plugin-vue2';\n\nexport default defineConfig({\n  plugins: [pluginVue2()],\n});\n"})}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(r.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The Vue 2 plugin only supports Vue >= 2.7.0."}),"\n",(0,i.jsxs)(r.li,{children:["For projects using Vue CLI, you can refer to the ",(0,i.jsx)(r.a,{href:"/guide/migration/vue-cli",children:"Vue CLI Migration Guide"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r.h3,{id:"use-the-jsx-syntax-of-vue-1",children:["Use the JSX syntax of Vue",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-jsx-syntax-of-vue-1",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["If you need to use the JSX syntax of Vue, you also need to register the ",(0,i.jsx)(r.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-vue2-jsx",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-vue2-jsx"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"type-declarations",children:["Type Declarations",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#type-declarations",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["In a TypeScript project, you need to add type definitions for ",(0,i.jsx)(r.code,{children:"*.vue"})," files so that TypeScript can recognize them correctly."]}),"\n",(0,i.jsxs)(r.p,{children:["Create ",(0,i.jsx)(r.code,{children:"env.d.ts"})," in the ",(0,i.jsx)(r.code,{children:"src"})," directory and add the following content:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare module '*.vue' {\n  import Vue from 'vue';\n\n  export default Vue;\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguide%2Fframework%2Fvue.mdx"]={toc:[{text:"Create Vue Project",id:"create-vue-project",depth:2},{text:"Vue 3",id:"vue-3",depth:2},{text:"Use Vue in an existing project",id:"use-vue-in-an-existing-project",depth:3},{text:"Use the JSX syntax of Vue",id:"use-the-jsx-syntax-of-vue",depth:3},{text:"TypeScript Support",id:"typescript-support",depth:3},{text:"Vue 2",id:"vue-2",depth:2},{text:"Use Vue 2 in an existing project",id:"use-vue-2-in-an-existing-project",depth:3},{text:"Use the JSX syntax of Vue",id:"use-the-jsx-syntax-of-vue-1",depth:3},{text:"Type Declarations",id:"type-declarations",depth:3}],title:"Vue",frontmatter:{}}}}]);