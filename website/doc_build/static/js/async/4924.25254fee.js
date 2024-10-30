"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4924"],{6268:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var s=r(651),i=r(6971);function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3",pre:"pre",blockquote:"blockquote",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"配置-swc",children:["配置 SWC",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-swc",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer",children:"SWC"}),"（Speedy Web Compiler）是基于 Rust 语言编写的高性能 JavaScript 和 TypeScript 转译和压缩工具。SWC 提供与 Babel 和 Terser 相似的能力，在单线程上它比 Babel 快 20 倍，在四核上它比 Babel 快 70 倍。"]}),"\n",(0,s.jsx)(n.p,{children:"Rsbuild 默认启用 SWC 的以下功能："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["通过 Rspack 的 ",(0,s.jsx)(n.a,{href:"https://rspack.dev/guide/features/builtin-swc-loader",target:"_blank",rel:"noopener noreferrer",children:"builtin:swc-loader"})," 来转换 JavaScript 和 TypeScript 代码，它是 ",(0,s.jsx)(n.a,{href:"https://github.com/swc-project/pkgs/tree/main/packages/swc-loader",target:"_blank",rel:"noopener noreferrer",children:"swc-loader"})," 的 Rust 版本。"]}),"\n",(0,s.jsxs)(n.li,{children:["通过 Rspack 的 ",(0,s.jsx)(n.a,{href:"https://rspack.dev/plugins/rspack/swc-js-minimizer-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"SwcJsMinimizerRspackPlugin"})," 来压缩 JavaScript 代码。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"loader-选项",children:["Loader 选项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-选项",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"builtin:swc-loader"})," 的选项与 JS 版本的 swc-loader 一致。Rsbuild 提供了 ",(0,s.jsx)(n.a,{href:"/config/tools/swc",children:"tools.swc"})," 选项来配置 ",(0,s.jsx)(n.code,{children:"builtin:swc-loader"}),"，下面是一些示例："]}),"\n",(0,s.jsxs)(n.h3,{id:"注册-swc-插件",children:["注册 SWC 插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册-swc-插件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.swc"})," 可以用于注册 SWC 的 Wasm 插件，比如注册 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@swc/plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"@swc/plugin-styled-components"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    swc: {\n      jsc: {\n        experimental: {\n          plugins: [['@swc/plugin-styled-components', {}]],\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.a,{href:"https://github.com/swc-contrib/awesome-swc",target:"_blank",rel:"noopener noreferrer",children:"awesome-swc"})," 仓库查看社区中可用的 SWC 插件。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"swc-插件版本",children:["SWC 插件版本",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swc-插件版本",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["请注意，SWC 的插件仍然是一个实验性功能，目前 SWC 的 Wasm 插件是不向后兼容的，SWC 插件的版本与 Rspack 依赖的 ",(0,s.jsx)(n.code,{children:"swc_core"})," 版本存在强耦合关系。"]}),"\n",(0,s.jsxs)(n.p,{children:["这意味着，你需要选择和当前 ",(0,s.jsx)(n.code,{children:"swc_core"})," 版本匹配的 SWC 插件，才能使它正常执行。如果你使用的 SWC 插件版本与 Rspack 依赖的 ",(0,s.jsx)(n.code,{children:"swc_core"})," 版本不匹配，Rspack 在执行构建时会抛出如下错误："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"1: failed to run Wasm plugin transform. Please ensure the version of `swc_core`\n   used by the plugin is compatible with the host runtime.\n"})}),"\n",(0,s.jsx)(n.p,{children:"如果你遇到了以上问题，通常可行的解决方法是将 Rsbuild 和 SWC 插件都升级到最新版本。"}),"\n",(0,s.jsx)(n.p,{children:"此外，你也可以按照以下步骤来选择合适的 SWC 插件版本："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["查看当前使用的 Rspack 版本，你可以通过 ",(0,s.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"调试模式"})," 来查看。"]}),"\n",(0,s.jsxs)(n.li,{children:["访问 ",(0,s.jsx)(n.a,{href:"https://plugins.swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"plugins.swc.rs"}),"，选择你当前使用的 Rspack 版本。"]}),"\n",(0,s.jsx)(n.li,{children:"该网站会列出你当前使用的 Rspack 版本所匹配的 SWC 插件版本范围，选择匹配的 SWC 插件版本使用即可。"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你使用的 SWC 插件未收录到 ",(0,s.jsx)(n.a,{href:"https://plugins.swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"plugins.swc.rs"}),"，可以通过 Rust 代码仓库中的 Cargo.toml 文件来查看 ",(0,s.jsx)(n.code,{children:"swc_core"})," 的版本信息。以 Rspack 仓库为例，你可以打开 ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/blob/main/Cargo.toml",target:"_blank",rel:"noopener noreferrer",children:"Cargo.toml"}),"，搜索 ",(0,s.jsx)(n.code,{children:"swc_core"})," 关键字来查看版本，然后参考 ",(0,s.jsx)(n.a,{href:"https://swc.rs/docs/plugin/selecting-swc-core",target:"_blank",rel:"noopener noreferrer",children:"SWC - Selecting the version"})," 进行选择。"]}),"\n",(0,s.jsxs)(n.h3,{id:"启用-emotion-支持",children:["启用 Emotion 支持",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-emotion-支持",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["启用 ",(0,s.jsx)(n.code,{children:"builtin:swc-loader"})," 对 Emotion 支持的示例："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    swc: {\n      jsc: {\n        experimental: {\n          plugins: [['@swc/plugin-emotion', {}]],\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["更多选项可参考 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@swc/plugin-emotion",target:"_blank",rel:"noopener noreferrer",children:"@swc/plugin-emotion"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"启用-relay-支持",children:["启用 Relay 支持",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-relay-支持",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["启用 ",(0,s.jsx)(n.code,{children:"builtin:swc-loader"})," 对 Relay 支持的示例："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    swc: {\n      jsc: {\n        experimental: {\n          plugins: [['@swc/plugin-relay', {}]],\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["更多选项可参考 ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@swc/plugin-relay",target:"_blank",rel:"noopener noreferrer",children:"@swc/plugin-relay"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"minimizer-选项",children:["Minimizer 选项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#minimizer-选项",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild 提供了 ",(0,s.jsx)(n.a,{href:"/config/output/minify",children:"output.minify.js"})," 选项来配置 SwcJsMinimizerRspackPlugin，下面是一些示例："]}),"\n",(0,s.jsxs)(n.h3,{id:"排除文件",children:["排除文件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#排除文件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"exclude"})," 选项可以排除某些文件，不进行压缩："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    minify: {\n      jsOptions: {\n        exclude: /foo\\/bar/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"切换压缩工具",children:["切换压缩工具",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#切换压缩工具",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果 SwcJsMinimizerRspackPlugin 无法满足你的需求，你可以通过 ",(0,s.jsx)(n.a,{href:"/config/tools/bundler-chain",children:"tools.bundlerChain"})," 选项来切换到其他压缩工具。"]}),"\n",(0,s.jsxs)(n.p,{children:["例如，切换到 ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"Terser"})," 来压缩 JavaScript 代码，它的性能不如 SWC，但功能更稳定："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    bundlerChain(chain, { CHAIN_ID, isProd }) {\n      if (isProd) {\n        chain.optimization.minimizer(CHAIN_ID.MINIMIZER.JS).use(TerserPlugin, [\n          {\n            minify: TerserPlugin.terserMinify,\n          },\n        ]);\n      }\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}let a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fconfigure-swc.mdx"]={toc:[{text:"Loader 选项",id:"loader-选项",depth:2},{text:"注册 SWC 插件",id:"注册-swc-插件",depth:3},{text:"SWC 插件版本",id:"swc-插件版本",depth:3},{text:"启用 Emotion 支持",id:"启用-emotion-支持",depth:3},{text:"启用 Relay 支持",id:"启用-relay-支持",depth:3},{text:"Minimizer 选项",id:"minimizer-选项",depth:2},{text:"排除文件",id:"排除文件",depth:3},{text:"切换压缩工具",id:"切换压缩工具",depth:2}],title:"配置 SWC",frontmatter:{}}}}]);