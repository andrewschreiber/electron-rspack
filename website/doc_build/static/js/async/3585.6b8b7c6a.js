"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["3585"],{7273:function(s,e,n){n.r(e),n.d(e,{default:function(){return t}});var i=n(651),r=n(6971);function l(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",ul:"ul",li:"li",code:"code",blockquote:"blockquote",ol:"ol",pre:"pre",strong:"strong"},(0,r.ah)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"引用-css-文件",children:["引用 CSS 文件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-css-文件",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild 对 CSS 提供开箱即用的支持，包括 Lightning CSS、PostCSS、CSS Modules、CSS 预处理器、CSS 内联和 CSS 压缩。"}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild 也提供了多个配置项，允许自定义 CSS 文件的处理规则。"}),"\n",(0,i.jsxs)(e.h2,{id:"lightning-css",children:["Lightning CSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lightning-css",children:"#"})]}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(e.div,{className:"rspress-directive-content",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://lightningcss.dev",target:"_blank",rel:"noopener noreferrer",children:"Lightning CSS"})," 是一个基于 Rust 编写的高性能 CSS 解析、转译和压缩工具。它支持将许多现代的 CSS 特性解析并转化为指定浏览器支持的语法，并提供更好的压缩比例。\n"]})})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild 使用 Rspack 内置的 ",(0,i.jsx)(e.a,{href:"https://www.rspack.dev/guide/features/builtin-lightningcss-loader",target:"_blank",rel:"noopener noreferrer",children:"lightningcss-loader"})," 来转换 CSS 代码，它会自动读取项目中的 ",(0,i.jsx)(e.a,{href:"/guide/advanced/browserslist",children:"browserslist"})," 配置，并将 CSS 代码转换为目标浏览器支持的语法。"]}),"\n",(0,i.jsxs)(e.h3,{id:"特性",children:["特性",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#特性",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Lightning CSS 会自动添加浏览器前缀，比如 ",(0,i.jsx)(e.code,{children:"-webkit-"}),"、",(0,i.jsx)(e.code,{children:"-moz-"}),"、",(0,i.jsx)(e.code,{children:"-ms-"})," 等，因此你不需要手动添加前缀，也不需要使用 ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," 插件。"]}),"\n",(0,i.jsx)(e.li,{children:"Lightning CSS 会自动将 CSS 语法降级，这允许你在代码中使用现代的 CSS 特性，比如 CSS nesting，custom media queries 等，而无需担心浏览器兼容性问题。"}),"\n",(0,i.jsxs)(e.li,{children:["你可以使用 ",(0,i.jsx)(e.a,{href:"/config/tools/lightningcss-loader",children:"tools.lightningcssLoader"})," 来自定义 ",(0,i.jsx)(e.code,{children:"lightningcss-loader"})," 的选项。"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Rsbuild 从 ",(0,i.jsx)(e.code,{children:"1.0.1-beta.7"})," 版本开始默认启用 Lightning CSS。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"禁用-lightning-css",children:["禁用 Lightning CSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用-lightning-css",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["如果 Lightning CSS 无法满足你的需求，你也可以禁用 Lightning CSS，并使用 ",(0,i.jsx)(e.a,{href:"#%E4%BD%BF%E7%94%A8-postcss",children:"PostCSS"})," 来转换 CSS 代码。"]}),"\n",(0,i.jsx)(e.p,{children:"步骤如下："}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["将 ",(0,i.jsx)(e.a,{href:"/config/tools/lightningcss-loader",children:"tools.lightningcssLoader"})," 设置为 ",(0,i.jsx)(e.code,{children:"false"})," 来禁用 Lightning CSS loader。"]}),"\n",(0,i.jsxs)(e.li,{children:["使用 ",(0,i.jsx)(e.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-css-minimizer",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-css-minimizer"})," 来将 CSS 压缩工具从 Lightning CSS 切换到 cssnano 或其他 CSS 压缩器。"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';\n\nexport default {\n  plugins: [pluginCssMinimizer()],\n  tools: {\n    lightningcssLoader: false,\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["参考 ",(0,i.jsx)(e.a,{href:"#%E4%BD%BF%E7%94%A8-postcss",children:"使用 PostCSS"}),"，配置你需要的 PostCSS 插件，下面是一些常用的 PostCSS 插件："]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),"：添加浏览器前缀。"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env",target:"_blank",rel:"noopener noreferrer",children:"postcss-preset-env"}),"：将现代 CSS 语法转换为大多数浏览器支持的语法。"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),"：支持 CSS nesting。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"css-压缩",children:["CSS 压缩",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-压缩",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["在生产模式构建时， Rsbuild 会开启 Rspack 内置的 ",(0,i.jsx)(e.a,{href:"https://rspack.dev/plugins/rspack/lightning-css-minimizer-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"LightningCssMinimizerRspackPlugin"})," 插件，将 CSS 资源压缩，以达到更好的传输效率。"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["你可以通过 ",(0,i.jsx)(e.a,{href:"/config/output/minify",children:"output.minify"})," 选项来禁用 CSS 压缩，或是自定义 ",(0,i.jsx)(e.code,{children:"LightningCssMinimizerRspackPlugin"})," 的选项。"]}),"\n",(0,i.jsxs)(e.li,{children:["你可以通过 ",(0,i.jsx)(e.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-css-minimizer",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-css-minimizer"})," 来自定义 CSS 压缩工具，切换到 ",(0,i.jsx)(e.a,{href:"https://github.com/cssnano/cssnano",target:"_blank",rel:"noopener noreferrer",children:"cssnano"})," 或是其他 CSS 压缩器。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"使用-postcss",children:["使用 PostCSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-postcss",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild 支持通过 ",(0,i.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," 来转换 CSS 代码。你可以通过以下方式来配置 PostCSS："]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Rsbuild 使用 ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/postcss-load-config",target:"_blank",rel:"noopener noreferrer",children:"postcss-load-config"})," 来加载当前项目根目录下的 PostCSS 配置文件，比如 ",(0,i.jsx)(e.code,{children:"postcss.config.js"}),"："]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",meta:'title="postcss.config.js"',children:"module.exports = {\n  'postcss-px-to-viewport': {\n    viewportWidth: 375,\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["通过 Rsbuild 的 ",(0,i.jsx)(e.a,{href:"/config/tools/postcss",children:"tools.postcss"})," 选项来配置 postcss-loader，该选项支持通过函数来修改内置配置，比如："]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default {\n  tools: {\n    postcss: (opts) => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["当你同时配置 ",(0,i.jsx)(e.code,{children:"postcss.config.js"})," 文件和 ",(0,i.jsx)(e.code,{children:"tools.postcss"})," 选项时，两者都会生效，并且 ",(0,i.jsx)(e.code,{children:"tools.postcss"})," 的优先级更高。"]}),"\n",(0,i.jsxs)(e.li,{children:["如果项目中没有 ",(0,i.jsx)(e.code,{children:"postcss.config.js"})," 文件，也没有配置 ",(0,i.jsx)(e.code,{children:"tools.postcss"})," 选项，Rsbuild 将不会注册 ",(0,i.jsx)(e.code,{children:"postcss-loader"}),"。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"使用-css-modules",children:["使用 CSS Modules",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-modules",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild 默认支持 CSS Modules，请阅读 ",(0,i.jsx)(e.a,{href:"/guide/basic/css-modules",children:"使用 CSS Modules"})," 章节来了解 CSS Modules 的完整用法。"]}),"\n",(0,i.jsxs)(e.h2,{id:"使用-css-预处理器",children:["使用 CSS 预处理器",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-预处理器",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild 通过插件来支持社区流行的 CSS 预处理器，包括 Sass、Less 和 Stylus，使用方式请参考："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-sass",children:"Sass 插件"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-less",children:"Less 插件"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-stylus",children:"Stylus 插件"})}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"css-in-js",children:["CSS-in-JS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-in-js",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["请阅读 ",(0,i.jsx)(e.a,{href:"/guide/framework/react#css-in-js",children:"React - CSS-in-JS"})," 章节来了解如何在 Rsbuild 中使用常见的 CSS-in-JS 库。"]}),"\n",(0,i.jsxs)(e.h2,{id:"内联-css-文件",children:["内联 CSS 文件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#内联-css-文件",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["默认情况下，Rsbuild 会把 CSS 提取为独立的 ",(0,i.jsx)(e.code,{children:".css"})," 文件，并输出到构建产物目录。"]}),"\n",(0,i.jsxs)(e.p,{children:["如果你希望将样式内联到 JS 文件中，可以将 ",(0,i.jsx)(e.a,{href:"/config/output/inject-styles",children:"output.injectStyles"})," 设置为 ",(0,i.jsx)(e.code,{children:"true"})," 来禁用 CSS 提取逻辑。当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 ",(0,i.jsx)(e.code,{children:"<style>"})," 标签，以此加载 CSS 样式。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"export default {\n  output: {\n    injectStyles: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。"}),"\n",(0,i.jsxs)(e.h2,{id:"引用-node_modules-里的样式",children:["引用 node_modules 里的样式",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-node_modules-里的样式",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild 支持引用 node_modules 里的 CSS 文件。"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"在 JS 文件中引用："}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="src/index.js"',children:"/* 引用 normalize.css */\n/* https://github.com/necolas/normalize.css */\nimport 'normalize.css';\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"在 CSS 文件中引用："}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",meta:'title="src/index.css"',children:"@import 'normalize.css';\n\nbody {\n  /* */\n}\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["在 Sass 和 Less 文件中，也允许添加 ",(0,i.jsx)(e.code,{children:"~"})," 前缀来解析 node_modules 里的样式文件，但这是一个",(0,i.jsx)(e.strong,{children:"废弃的特性"}),"，建议从代码中移除 ",(0,i.jsx)(e.code,{children:"~"})," 前缀。"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-scss",meta:'title="src/index.scss"',children:"@import '~normalize.css';\n"})})]})}function c(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(l,{...s})}):l(s)}let t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fcss-usage.mdx"]={toc:[{text:"Lightning CSS",id:"lightning-css",depth:2},{text:"特性",id:"特性",depth:3},{text:"禁用 Lightning CSS",id:"禁用-lightning-css",depth:3},{text:"CSS 压缩",id:"css-压缩",depth:2},{text:"使用 PostCSS",id:"使用-postcss",depth:2},{text:"使用 CSS Modules",id:"使用-css-modules",depth:2},{text:"使用 CSS 预处理器",id:"使用-css-预处理器",depth:2},{text:"CSS-in-JS",id:"css-in-js",depth:2},{text:"内联 CSS 文件",id:"内联-css-文件",depth:2},{text:"引用 node_modules 里的样式",id:"引用-node_modules-里的样式",depth:2}],title:"引用 CSS 文件",frontmatter:{}}}}]);