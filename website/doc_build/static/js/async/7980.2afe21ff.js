"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["7980"],{8342:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var t=s(651),r=s(6971);function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputemitassets",children:["output.emitAssets",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputemitassets",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"用于控制是否输出图片、字体、音频、视频等静态资源。"}),"\n",(0,t.jsxs)(n.p,{children:["在 SSR 等场景下，你可能不需要输出重复的静态资源，因此你可以在 ",(0,t.jsx)(n.code,{children:"emitAssets"})," 返回 ",(0,t.jsx)(n.code,{children:"false"})," 来避免资源输出。"]}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"比如，以下例子会在构建 web 产物时输出静态资源，而在构建 node 产物时避免输出。"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  environments: {\n    web: {\n      output: {\n        target: 'web',\n      },\n    },\n    node: {\n      output: {\n        target: 'node',\n        emitAssets: false,\n      },\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Femit-assets.mdx"]={toc:[{text:"示例",id:"示例",depth:2}],title:"output.emitAssets",frontmatter:{}}}}]);