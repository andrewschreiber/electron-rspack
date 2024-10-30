"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["6380"],{634:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var t=s(651),r=s(6971);function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputinjectstyles",children:["output.injectStyles",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputinjectstyles",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"是否将 CSS 样式插入到 DOM 中。"}),"\n",(0,t.jsxs)(n.p,{children:["默认情况下，Rsbuild 会把 CSS 提取为独立的 ",(0,t.jsx)(n.code,{children:".css"})," 文件，并输出到构建产物目录。设置该选项为 ",(0,t.jsx)(n.code,{children:"true"})," 后，CSS 文件会被内联到 JS 文件中，并在运行时通过 ",(0,t.jsx)(n.code,{children:"<style>"})," 标签插入到页面上。该功能基于 ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/style-loader",target:"_blank",rel:"noopener noreferrer",children:"style-loader"})," 实现。"]}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    injectStyles: true,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"配置-style-loader",children:["配置 style-loader",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-style-loader",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在开启 ",(0,t.jsx)(n.code,{children:"output.injectStyles"})," 时，你可以通过 ",(0,t.jsx)(n.a,{href:"/config/tools/style-loader",children:"tools.styleLoader"})," 来修改 ",(0,t.jsx)(n.code,{children:"style-loader"})," 的选项。"]}),"\n",(0,t.jsxs)(n.h2,{id:"使用场景",children:["使用场景",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用场景",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["建议仅在开发模式开启 ",(0,t.jsx)(n.code,{children:"injectStyles"})," 选项。"]}),"\n",(0,t.jsx)(n.p,{children:"对于生产模式构建，建议使用 Rsbuild 的默认行为，将 CSS 抽取为单独的 bundle，以便浏览器能够并行加载 CSS 和 JS 资源。"}),"\n",(0,t.jsx)(n.p,{children:"比如："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    injectStyles: process.env.NODE_ENV === 'development',\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Finject-styles.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"配置 style-loader",id:"配置-style-loader",depth:2},{text:"使用场景",id:"使用场景",depth:2}],title:"output.injectStyles",frontmatter:{}}}}]);