"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4336"],{5123:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var c=s(651),i=s(6971);function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"htmlinject",children:["html.inject",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"'head' | 'body' | boolean | Function"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["修改构建产物中 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签在 HTML 中的插入位置。"]}),"\n",(0,c.jsx)(n.p,{children:"可以设置为以下值："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'head'"}),"：",(0,c.jsx)(n.code,{children:"<script>"})," 标签会插入在 HTML 的 ",(0,c.jsx)(n.code,{children:"<head>"})," 标签内。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'body'"}),"：",(0,c.jsx)(n.code,{children:"<script>"})," 标签会插入在 HTML 的 ",(0,c.jsx)(n.code,{children:"<body>"})," 标签尾部。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"true"}),"：基于 ",(0,c.jsx)(n.a,{href:"/config/html/script-loading",children:"html.scriptLoading"})," 自动判断，设置为 'blocking' 时插入 ",(0,c.jsx)(n.code,{children:"<body>"})," 标签，否则插入 ",(0,c.jsx)(n.code,{children:"<head>"})," 标签。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"false"}),"：",(0,c.jsx)(n.code,{children:"<script>"})," 标签不插入 HTML 中。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"默认插入位置",children:["默认插入位置",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认插入位置",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"<script>"})," 标签默认在 head 标签内："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"><\/script>\n    <script defer src="/static/js/main.js"><\/script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"插入至-body-标签",children:["插入至 body 标签",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插入至-body-标签",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["添加如下配置，可以将 ",(0,c.jsx)(n.code,{children:"<script>"})," 插入至 ",(0,c.jsx)(n.code,{children:"<body>"})," 标签："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["可以看到 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签生成在 body 标签尾部："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"><\/script>\n    <script defer src="/static/js/main.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"函数用法",children:["函数用法",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数用法",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type InjectFunction = ({ value: ScriptInject; entryName: string }) => string | void;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当 ",(0,c.jsx)(n.code,{children:"html.inject"})," 为 Function 类型时，函数接收一个对象作为入参，对象的值包括："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"value"}),"：Rsbuild 的默认 inject 配置。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"entryName"}),": 当前入口的名称。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["在 MPA（多页面应用）场景下，你可以基于入口名称设置不同的 ",(0,c.jsx)(n.code,{children:"inject"})," 方式："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject({ entryName }) {\n      return entryName === 'foo' ? 'body' : 'head';\n    },\n  },\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}let l=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fconfig%2Fhtml%2Finject.mdx"]={toc:[{text:"默认插入位置",id:"默认插入位置",depth:2},{text:"插入至 body 标签",id:"插入至-body-标签",depth:2},{text:"函数用法",id:"函数用法",depth:2}],title:"html.inject",frontmatter:{}}}}]);