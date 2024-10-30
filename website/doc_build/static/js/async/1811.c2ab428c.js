"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["1811"],{3624:function(e,s,r){r.r(s),r.d(s,{default:function(){return t}});var n=r(651),i=r(6971);function c(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre",div:"div"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"outputassetprefix",children:["output.assetPrefix",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetprefix",children:"#"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"类型："})," ",(0,n.jsx)(s.code,{children:"string | 'auto'"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"默认值："})," ",(0,n.jsx)(s.a,{href:"/config/server/base",children:"server.base"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["在 ",(0,n.jsx)(s.a,{href:"/config/mode",children:"生产模式"})," 下，可以使用该选项设置静态资源的 URL 前缀，比如设置为 CDN 地址。"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"assetPrefix"})," 会影响构建产物中绝大部分静态资源的 URL，包括 JavaScript 文件、CSS 文件、图片、视频等。如果指定了一个错误的值，则在加载这些资源时可能会出现 404 错误。"]}),"\n",(0,n.jsxs)(s.p,{children:["该配置项仅用于生产模式。在开发模式下，请使用 ",(0,n.jsx)(s.a,{href:"/config/dev/asset-prefix",children:"dev.assetPrefix"})," 配置项进行设置。"]}),"\n",(0,n.jsxs)(s.h2,{id:"示例",children:["示例",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["设置 ",(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 后，JavaScript、CSS、图片等静态资源的 URL 都会加上 ",(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 的值作为前缀。"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"例如，设置为一个 CDN 地址："}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"构建后，JS 文件的 URL 如下："}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/index.ebc4ff4f.js"\n><\/script>\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"设置为相对路径："}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: './',\n  },\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"构建后，JS 文件的 URL 如下："}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<script defer src="./static/js/index.ebc4ff4f.js"><\/script>\n'})}),"\n",(0,n.jsxs)(s.h2,{id:"默认值",children:["默认值",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 的默认值与 ",(0,n.jsx)(s.a,{href:"/config/server/base",children:"server.base"})," 相同。"]}),"\n",(0,n.jsxs)(s.p,{children:["当 ",(0,n.jsx)(s.code,{children:"server.base"})," 为 ",(0,n.jsx)(s.code,{children:"/foo"})," 时，可通过 ",(0,n.jsx)(s.code,{children:"http://localhost:3000/foo/"})," 访问到 ",(0,n.jsx)(s.code,{children:"index.html"})," 及静态资源产物。"]}),"\n",(0,n.jsxs)(s.p,{children:["需要注意的是，当自定义 ",(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 选项时，如果希望静态资源能够通过 Rsbuild 预览服务器正常访问，",(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 应和 ",(0,n.jsx)(s.code,{children:"server.base"})," 包含相同的 URL 前缀，如："]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    assetPrefix: '/foo/bar/',\n  },\n  server: {\n    base: '/foo',\n  },\n};\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"路径类型",children:["路径类型",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#路径类型",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"assetPrefix 可以设置为以下类型的路径："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"绝对路径"}),"：这是最常见的做法，可以为指定服务器路径，比如 ",(0,n.jsx)(s.code,{children:"/assets/"}),"，或是设置为 CDN 路径，比如 ",(0,n.jsx)(s.code,{children:"https://cdn.example.com/assets/"}),"。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"相对路径"}),"：比如 ",(0,n.jsx)(s.code,{children:"./assets/"}),"。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"'auto'"}),"：Rspack 将自动计算路径，并生成基于文件所在位置的相对路径。"]}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsx)(s.p,{children:"通常不建议将 assetPrefix 设置为相对路径，因为当资源位于不同的路径深度时，使用相对路径可能会导致资源无法正确加载。"})})]}),"\n",(0,n.jsxs)(s.h2,{id:"对比-publicpath",children:["对比 ",(0,n.jsx)(s.code,{children:"publicPath"}),(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#对比-publicpath",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 的功能与 Rspack 的 ",(0,n.jsx)(s.a,{href:"https://rspack.dev/zh/config/output#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," 配置基本一致。"]}),"\n",(0,n.jsx)(s.p,{children:"它与原生配置的区别在于："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 仅在生产模式下生效。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 默认值与 ",(0,n.jsx)(s.a,{href:"/config/server/base",children:"server.base"})," 相同。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 默认会自动补全尾部的 ",(0,n.jsx)(s.code,{children:"/"}),"。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"output.assetPrefix"})," 的值会写入 ",(0,n.jsx)(s.a,{href:"/guide/advanced/env-vars#processenvasset_prefix",children:"process.env.ASSET_PREFIX"})," 环境变量（只能在 client 代码中访问）。"]}),"\n"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Fasset-prefix.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"默认值",id:"默认值",depth:2},{text:"路径类型",id:"路径类型",depth:2},{text:"对比 `publicPath`",id:"对比-publicpath",depth:2}],title:"output.assetPrefix",frontmatter:{}}}}]);