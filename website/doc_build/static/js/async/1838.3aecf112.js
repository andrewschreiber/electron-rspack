"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["1838"],{7738:function(e,s,r){r.r(s),r.d(s,{default:function(){return d}});var n=r(651),t=r(6971);function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"使用-typescript",children:["使用 TypeScript",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-typescript",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Rsbuild 默认支持 TypeScript，你可以直接在项目中使用 ",(0,n.jsx)(s.code,{children:".ts"})," 和 ",(0,n.jsx)(s.code,{children:".tsx"})," 文件。"]}),"\n",(0,n.jsxs)(s.h2,{id:"typescript-转译",children:["TypeScript 转译",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-转译",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Rsbuild 默认使用 SWC 来转译 TypeScript 代码，也支持切换到 Babel 进行转译。"}),"\n",(0,n.jsxs)(s.h3,{id:"isolatedmodules",children:["isolatedModules",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#isolatedmodules",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["与 TypeScript 原生编译器不同，像 SWC 和 Babel 这样的工具会将每个文件单独编译，它无法确定导入的名称是一个类型还是一个值。因此，当你在 Rsbuild 中使用 TypeScript 时，需要启用 ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,n.jsx)(s.a,{href:"https://typescriptlang.org/tsconfig/#isolatedModules",target:"_blank",rel:"noopener noreferrer",children:"isolatedModules"})," 选项："]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "isolatedModules": true\n  }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"该选项可以帮助你避免使用一些 SWC 和 Babel 无法正确编译的写法，比如跨文件的类型引用问题，它会引导你更正对应的用法："}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"// 错误\nexport { SomeType } from './types';\n\n// 正确\nexport type { SomeType } from './types';\n"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["参考 ",(0,n.jsx)(s.a,{href:"https://swc.rs/docs/migrating-from-tsc",target:"_blank",rel:"noopener noreferrer",children:"SWC - Migrating from tsc"})," 了解更多 SWC 和 tsc 的差异。"]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"预设类型",children:["预设类型",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#预设类型",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"@rsbuild/core"})," 提供了一些预设的类型定义，包含 CSS Modules、静态资源、",(0,n.jsx)(s.code,{children:"import.meta"})," 等类型。"]}),"\n",(0,n.jsxs)(s.p,{children:["你可以创建一个 ",(0,n.jsx)(s.code,{children:"src/env.d.ts"})," 文件来引用："]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:'/// <reference types="@rsbuild/core/types" />\n'})}),"\n",(0,n.jsxs)(s.h2,{id:"类型检查",children:["类型检查",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#类型检查",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"在进行 TypeScript 转译时，SWC 和 Babel 等工具不会执行类型检查。"}),"\n",(0,n.jsxs)(s.p,{children:["Rsbuild 提供了 Type Check 插件，用于在单独的进程中运行 TypeScript 类型检查，插件内部集成了 ",(0,n.jsx)(s.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),"。"]}),"\n",(0,n.jsxs)(s.p,{children:["请参考 ",(0,n.jsx)(s.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-type-check",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-type-check"})," 了解用法。"]}),"\n",(0,n.jsxs)(s.h2,{id:"tsconfigjson-路径",children:["tsconfig.json 路径",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson-路径",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Rsbuild 默认读取根目录的 ",(0,n.jsx)(s.code,{children:"tsconfig.json"})," 文件，你可以使用 ",(0,n.jsx)(s.a,{href:"/config/source/tsconfig-path",children:"source.tsconfigPath"})," 配置自定义的 tsconfig.json 文件路径。"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  source: {\n    tsconfigPath: './tsconfig.custom.json',\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}let d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Ftypescript.mdx"]={toc:[{text:"TypeScript 转译",id:"typescript-转译",depth:2},{text:"isolatedModules",id:"isolatedmodules",depth:3},{text:"预设类型",id:"预设类型",depth:2},{text:"类型检查",id:"类型检查",depth:2},{text:"tsconfig.json 路径",id:"tsconfigjson-路径",depth:2}],title:"使用 TypeScript",frontmatter:{}}}}]);