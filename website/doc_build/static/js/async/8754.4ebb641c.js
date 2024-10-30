"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["8754"],{3606:function(s,n,e){e.r(n),e.d(n,{default:function(){return d}});var i=e(651),c=e(6971);function t(s){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3"},(0,c.ah)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputdistpath",children:["output.distPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  html?: string;\n  js?: string;\n  jsAsync?: string;\n  css?: string;\n  cssAsync?: string;\n  svg?: string;\n  font?: string;\n  wasm?: string;\n  image?: string;\n  media?: string;\n  assets?: string;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: './',\n  js: isServer ? '' : 'static/js',\n  jsAsync: isServer ? '' : 'static/js/async',\n  css: 'static/css',\n  cssAsync: 'static/css/async',\n  svg: 'static/svg',\n  font: 'static/font',\n  wasm: 'static/wasm',\n  image: 'static/image',\n  media: 'static/media',\n  assets: 'static/assets';\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"设置构建产物的输出目录，Rsbuild 会根据产物的类型输出到对应的子目录下。"}),"\n",(0,i.jsx)(n.p,{children:"其中："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"root"}),": 表示所有构建产物输出的根目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"html"}),"：表示 HTML 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"js"}),"：表示 JavaScript 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jsAsync"}),"：表示异步 JavaScript 文件的输出目录，默认会输出到 ",(0,i.jsx)(n.code,{children:"distPath.js"})," 的 ",(0,i.jsx)(n.code,{children:"async"})," 子目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"css"}),"：表示 CSS 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cssAsync"}),"：表示异步 CSS 文件的输出目录，默认会输出到 ",(0,i.jsx)(n.code,{children:"distPath.css"})," 的 ",(0,i.jsx)(n.code,{children:"async"})," 子目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"svg"}),"：表示 SVG 图片的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"font"}),"：表示字体文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wasm"}),"：表示 WebAssembly 文件的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),"：表示非 SVG 图片的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"media"}),"：表示视频等媒体资源的输出目录。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"assets"}),"：表示除了上述类型之外，其他也命中 ",(0,i.jsx)(n.a,{href:"https://rspack.dev/guide/features/asset-module",target:"_blank",rel:"noopener noreferrer",children:"Asset Modules"})," 的文件的输出目录。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"根目录",children:["根目录",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根目录",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"root"})," 是构建产物的根目录，可以为相对路径或绝对路径。如果 ",(0,i.jsx)(n.code,{children:"root"})," 的值为相对路径，则会基于当前项目的根目录拼接为绝对路径。"]}),"\n",(0,i.jsxs)(n.p,{children:["其他目录只能为相对路径，并且会相对于 ",(0,i.jsx)(n.code,{children:"root"})," 进行输出。"]}),"\n",(0,i.jsxs)(n.h3,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["以 JavaScript 文件为例，会输出到 ",(0,i.jsx)(n.code,{children:"distPath.root"})," + ",(0,i.jsx)(n.code,{children:"distPath.js"})," 目录，即为 ",(0,i.jsx)(n.code,{children:"dist/static/js"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果需要将 JavaScript 文件输出到 ",(0,i.jsx)(n.code,{children:"build/resource/js"})," 目录，可以这样设置："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})}function r(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),s.components);return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(t,{...s})}):t(s)}let d=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Fdist-path.mdx"]={toc:[{text:"根目录",id:"根目录",depth:3},{text:"示例",id:"示例",depth:3}],title:"output.distPath",frontmatter:{}}}}]);