"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["720"],{906:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var s=r(651),c=r(6971),i=r(5048),t=r(4340);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"react-插件",children:["React 插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-插件",children:"#"})]}),"\n","\n",(0,s.jsx)(i.ZB,{href:"https://github.com/web-infra-dev/rsbuild/tree/main/packages/plugin-react"}),"\n",(0,s.jsx)(n.p,{children:"React 插件提供了对 React 的支持，插件内部集成了 JSX 编译、React Refresh 等功能。"}),"\n",(0,s.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"安装插件",children:["安装插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"你可以通过如下的命令安装插件:"}),"\n","\n",(0,s.jsx)(t.PackageManagerTabs,{command:"add @rsbuild/plugin-react -D"}),"\n",(0,s.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以在 ",(0,s.jsx)(n.code,{children:"rsbuild.config.ts"})," 文件中注册插件："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginReact } from '@rsbuild/plugin-react';\n\nexport default {\n  plugins: [pluginReact()],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"注册插件后，你可以直接进行 React 开发。"}),"\n",(0,s.jsxs)(n.h2,{id:"选项",children:["选项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"swcreactoptions",children:["swcReactOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swcreactoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["用于配置 SWC 转换 React 代码的行为，等价于 SWC 的 ",(0,s.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jsctransformreact",target:"_blank",rel:"noopener noreferrer",children:"jsc.transform.react"})," 选项。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface SwcReactOptions {\n  pragma?: string;\n  pragmaFrag?: string;\n  throwIfNamespace?: boolean;\n  development?: boolean;\n  useBuiltins?: boolean;\n  refresh?: boolean;\n  runtime?: 'automatic' | 'classic';\n  importSource?: string;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const isDev = process.env.NODE_ENV === 'development';\nconst defaultOptions = {\n  development: isDev,\n  refresh: isDev,\n  runtime: 'automatic',\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"swcreactoptionsruntime",children:["swcReactOptions.runtime",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swcreactoptionsruntime",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"设置 JSX runtime 的类型。"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"'automatic' | 'classic'"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'automatic'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，Rsbuild 使用 React 17 引入的",(0,s.jsx)(n.a,{href:"https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",target:"_blank",rel:"noopener noreferrer",children:"新版本 JSX runtime"}),"，即 ",(0,s.jsx)(n.code,{children:"runtime: 'automatic'"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你当前的 React 版本低于 16.14.0，可以将 ",(0,s.jsx)(n.code,{children:"runtime"})," 设置为 ",(0,s.jsx)(n.code,{children:"'classic'"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pluginReact({\n  swcReactOptions: {\n    runtime: 'classic',\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"React 16.14.0 可以使用新版本 JSX runtime。"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"在使用 classic JSX runtime 时，你需要手动在代码中引入 React："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nfunction App() {\n  return <h1>Hello World</h1>;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"swcreactoptionsimportsource",children:["swcReactOptions.importSource",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swcreactoptionsimportsource",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"runtime"})," 为 ",(0,s.jsx)(n.code,{children:"'automatic'"})," 时，你可以通过 ",(0,s.jsx)(n.code,{children:"importSource"})," 来指定 JSX runtime 的引入路径。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'react'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["比如，在使用 ",(0,s.jsx)(n.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"})," 时，你可以将 ",(0,s.jsx)(n.code,{children:"importSource"})," 设置为 ",(0,s.jsx)(n.code,{children:"'@emotion/react'"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pluginReact({\n  swcReactOptions: {\n    importSource: '@emotion/react',\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"splitchunks",children:["splitChunks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#splitchunks",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在 ",(0,s.jsx)(n.a,{href:"/config/performance/chunk-split",children:"chunkSplit.strategy"})," 设置为 ",(0,s.jsx)(n.code,{children:"split-by-experience"})," 时，Rsbuild 默认会自动将 ",(0,s.jsx)(n.code,{children:"react"})," 和 ",(0,s.jsx)(n.code,{children:"router"})," 相关的包拆分为单独的 chunk:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-react.js"}),"：包含 react，react-dom，以及 react 的子依赖（scheduler）。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-router.js"}),"：包含 react-router，react-router-dom，以及 react-router 的子依赖（history，@remix-run/router）。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["该选项用于控制这一行为，决定是否需要将 ",(0,s.jsx)(n.code,{children:"react"})," 和 ",(0,s.jsx)(n.code,{children:"router"})," 相关的包拆分为单独的 chunk。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SplitReactChunkOptions = {\n  react?: boolean;\n  router?: boolean;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const defaultOptions = {\n  react: true,\n  router: true,\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"示例："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pluginReact({\n  splitChunks: {\n    react: false,\n    router: false,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"enableprofiler",children:["enableProfiler",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enableprofiler",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["当设置为 ",(0,s.jsx)(n.code,{children:"true"})," 时，在生产构建中启用 React 性能分析器以用于性能分析。需要搭配 React DevTools 来检查分析结果并识别潜在的性能优化方案。分析会增加一些额外开销，因此出于性能考虑，在生产模式中默认是禁用的。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"pluginReact({\n  // 仅在 REACT_PROFILER 为 true 时启用性能分析器\n  // 因为该选项会增加构建时间并产生一些额外开销\n  enableProfiler: process.env.REACT_PROFILER === 'true',\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["执行构建脚本时，设置 ",(0,s.jsx)(n.code,{children:"REACT_PROFILER=true"})," 即可："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "build:profiler": "REACT_PROFILER=true rsbuild build"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["由于 Windows 系统不支持上述用法，你也可以使用 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer",children:"cross-env"})," 来设置环境变量，这可以确保在不同的操作系统中都能正常使用："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "scripts": {\n    "build:profiler": "cross-env REACT_PROFILER=true rsbuild build"\n  },\n  "devDependencies": {\n    "cross-env": "^7.0.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["关于使用 React DevTools 进行性能分析的详细信息，请参见 ",(0,s.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler",target:"_blank",rel:"noopener noreferrer",children:"React 文档"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"reactrefreshoptions",children:["reactRefreshOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactrefreshoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type ReactRefreshOptions = {\n  include?: string | RegExp | (string | RegExp)[] | null;\n  exclude?: string | RegExp | (string | RegExp)[] | null;\n  library?: string;\n  forceEnable?: boolean;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  include: [/\\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/],\n  exclude: [/[\\\\/]node_modules[\\\\/]/],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["设置 ",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/guide/tech/react#rspackplugin-react-refresh",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-react-refresh"})," 的选项，传入的值会与默认值进行浅合并。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"示例："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"pluginReact({\n  reactRefreshOptions: {\n    exclude: [/some-module-to-exclude/, /[\\\\/]node_modules[\\\\/]/],\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"fastrefresh",children:["fastRefresh",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fastrefresh",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["是否在开发模式下启用 React ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/react-refresh",target:"_blank",rel:"noopener noreferrer",children:"Fast Refresh"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你需要禁用 Fast Refresh，可以将其设置为 ",(0,s.jsx)(n.code,{children:"false"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"pluginReact({\n  fastRefresh: false,\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fplugins%2Flist%2Fplugin-react.mdx"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装插件",id:"安装插件",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"选项",id:"选项",depth:2},{text:"swcReactOptions",id:"swcreactoptions",depth:3},{text:"swcReactOptions.runtime",id:"swcreactoptionsruntime",depth:3},{text:"swcReactOptions.importSource",id:"swcreactoptionsimportsource",depth:3},{text:"splitChunks",id:"splitchunks",depth:3},{text:"enableProfiler",id:"enableprofiler",depth:3},{text:"reactRefreshOptions",id:"reactrefreshoptions",depth:3},{text:"fastRefresh",id:"fastrefresh",depth:3}],title:"React 插件",frontmatter:{}}}}]);