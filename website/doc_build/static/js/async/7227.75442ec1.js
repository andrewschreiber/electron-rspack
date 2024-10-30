"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["7227"],{9971:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var s=r(651),i=r(6971);function a(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",pre:"pre",code:"code",hr:"hr"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"功能类问题",children:["功能类问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能类问题",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"如何配置组件库按需引入",children:["如何配置组件库按需引入？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置组件库按需引入",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果需要配置组件库的按需引入，你可以通过 ",(0,s.jsx)(n.a,{href:"/config/source/transform-import",children:"source.transformImport"})," 配置，这个配置的能力等价于 ",(0,s.jsx)(n.a,{href:"https://npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'my-components',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"如何在编译过程中进行-eslint-代码校验",children:["如何在编译过程中进行 ESLint 代码校验？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何在编译过程中进行-eslint-代码校验",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["出于编译性能的考虑，Rsbuild 默认不会在编译过程中进行 ESLint 校验，如果你需要该功能，可以使用 Rsbuild 的 ",(0,s.jsx)(n.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-eslint",target:"_blank",rel:"noopener noreferrer",children:"ESLint 插件"}),"。"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"如何配置静态资源的-cdn-路径",children:["如何配置静态资源的 CDN 路径？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何配置静态资源的-cdn-路径",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果需要将 JS、CSS 等静态资源上传到 CDN 使用，那么可以通过 ",(0,s.jsx)(n.a,{href:"/config/output/asset-prefix",children:"output.assetPrefix"})," 配置来设置静态资源的 URL 前缀。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"如何移除代码中的-console",children:["如何移除代码中的 console？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何移除代码中的-console",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在生产模式构建时，我们可以移除代码中的 ",(0,s.jsx)(n.code,{children:"console"}),"，从而避免开发模式的日志被输出到生产模式。"]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild 默认提供了移除 console 的配置项，请查看 ",(0,s.jsx)(n.a,{href:"/config/performance/remove-console",children:"performance.removeConsole"}),"。"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"如何查看-rsbuild-生成的-rspack-配置",children:["如何查看 Rsbuild 生成的 Rspack 配置?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何查看-rsbuild-生成的-rspack-配置",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通过 Rsbuild 调试模式可以查看 Rsbuild 生成的 Rspack 配置。"}),"\n",(0,s.jsxs)(n.p,{children:["你可以在执行构建时添加 ",(0,s.jsx)(n.code,{children:"DEBUG=rsbuild"})," 环境变量，即可开启 Rsbuild 的",(0,s.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"调试模式"}),"，此时会输出内部生成的 Rspack 配置到 dist 目录下。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"➜ DEBUG=rsbuild pnpm dev\n\n  ...\n  rsbuild init plugins\n  rsbuild init plugins done\n  rsbuild Use Rspack v1.0.0\n  ...\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config: /root/my-project/dist/.rsbuild/rsbuild.config.mjs\n  - Rspack Config (web): /root/my-project/dist/.rsbuild/rspack.config.web.mjs\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"如何忽略特定-warning-日志",children:["如何忽略特定 warning 日志？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何忽略特定-warning-日志",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，Rsbuild 会打印构建过程产生的所有 error 和 warning 日志。"}),"\n",(0,s.jsxs)(n.p,{children:["如果遇到由于三方包产生大量 warning 日志，暂时又无法处理，希望忽略的情况。可通过 Rspack 提供的 ",(0,s.jsx)(n.code,{children:"ignoreWarnings"})," 配置忽略特定 warning 日志。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: {\n      ignoreWarnings: [/Using \\/ for division outside of calc()/],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["详细信息可参考: ",(0,s.jsx)(n.a,{href:"https://rspack.dev/zh/config/other-options#ignorewarnings",target:"_blank",rel:"noopener noreferrer",children:"ignoreWarnings"}),"。"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguide%2Ffaq%2Ffeatures.mdx"]={toc:[{text:"如何配置组件库按需引入？",id:"如何配置组件库按需引入",depth:3},{text:"如何在编译过程中进行 ESLint 代码校验？",id:"如何在编译过程中进行-eslint-代码校验",depth:3},{text:"如何配置静态资源的 CDN 路径？",id:"如何配置静态资源的-cdn-路径",depth:3},{text:"如何移除代码中的 console？",id:"如何移除代码中的-console",depth:3},{text:"如何查看 Rsbuild 生成的 Rspack 配置?",id:"如何查看-rsbuild-生成的-rspack-配置",depth:3},{text:"如何忽略特定 warning 日志？",id:"如何忽略特定-warning-日志",depth:3}],title:"功能类问题",frontmatter:{}}}}]);