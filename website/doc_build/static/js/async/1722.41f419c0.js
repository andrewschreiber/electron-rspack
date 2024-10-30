"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["1722"],{863:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var c=s(651),r=s(6971);function t(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",div:"div",ol:"ol",li:"li",code:"code",h4:"h4",ul:"ul",hr:"hr",pre:"pre",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"热更新问题",children:["热更新问题",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#热更新问题",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"热更新不生效如何排查",children:["热更新不生效，如何排查？",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#热更新不生效如何排查",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"热更新不生效有很多种可能的原因，在这篇文档中会介绍大部分常见的原因，你可以参照以下内容进行排查。"}),"\n",(0,c.jsx)(n.p,{children:"在开始排查之前，请简单了解一下热更新的原理："}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"热更新原理"}),(0,c.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"浏览器和开发服务器建立一个 Web Socket 连接，用于实时通信。"}),"\n",(0,c.jsxs)(n.li,{children:["当开发服务器每次重新编译完成后，会通过 Web Socket 通知浏览器，浏览器向开发服务器发送 ",(0,c.jsx)(n.code,{children:"hot-update.(js|json)"})," 请求，从而加载编译后的新模块。"]}),"\n",(0,c.jsx)(n.li,{children:"当浏览器收到新的模块后，如果是 React 项目，则会通过 React 官方的 React Refresh 来更新 React 组件，其他框架也是类似。"}),"\n"]}),"\n"]})]}),"\n",(0,c.jsx)(n.p,{children:"了解完热更新的原理后，你可以按照以下步骤来进行基本的排查："}),"\n",(0,c.jsxs)(n.h4,{id:"1-检查-web-socket-连接",children:["1. 检查 Web Socket 连接",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-检查-web-socket-连接",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["打开浏览器的控制台，查看是否有 ",(0,c.jsx)(n.code,{children:"[HMR] connected."})," 日志。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"如果有，说明 Web Socket 连接正常，请继续检查后续步骤。"}),"\n",(0,c.jsxs)(n.li,{children:["如果没有，请打开 Chrome 的 Network 面板，查看 ",(0,c.jsx)(n.code,{children:"ws://[host]:[port]/rsbuild-hmr"})," 的请求状态，若请求异常，说明热更新失败的原因是 Web Socket 请求没有建立成功。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Web Socket 请求没有建立成功的原因可能有很多种，例如开启了网络代理，导致 Web Socket 请求没有正确发送到开发服务器。你可以检查 Web Socket 请求的地址是否为你的开发服务器地址，如果不是，则可以通过 ",(0,c.jsx)(n.a,{href:"/config/dev/client",children:"dev.client"})," 来配置 Web Socket 请求的地址。"]}),"\n",(0,c.jsxs)(n.h4,{id:"2-检查-hot-update-请求",children:["2. 检查 hot-update 请求",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-检查-hot-update-请求",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当你修改一个模块的代码，并触发重新编译后，浏览器会向开发服务器发送若干个 ",(0,c.jsx)(n.code,{children:"hot-update.json"})," 和 ",(0,c.jsx)(n.code,{children:"hot-update.js"})," 请求，用于获取更新后的代码。"]}),"\n",(0,c.jsxs)(n.p,{children:["你可以尝试修改一个模块并检查 ",(0,c.jsx)(n.code,{children:"hot-update.(js|json)"})," 请求的内容，如果请求的内容是最新的代码，说明热更新的请求正常。"]}),"\n",(0,c.jsxs)(n.p,{children:["如果请求的内容错误，大概率也是由于开启了网络代理，请检查 ",(0,c.jsx)(n.code,{children:"hot-update.(js|json)"})," 请求的地址是否为你的开发服务器地址，如果不是，则需要调整代理规则，将 ",(0,c.jsx)(n.code,{children:"hot-update.(js|json)"})," 请求代理到开发服务器地址。"]}),"\n",(0,c.jsxs)(n.h4,{id:"3-检查其他原因",children:["3. 检查其他原因",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-检查其他原因",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"如果以上两个步骤都没有问题，那么可能是其他原因导致的热更新失败，比如没有符合 React 对热更新的要求，你可以参考下列的问题进行排查。"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.h3,{id:"打包时-external-react-后热更新不生效",children:["打包时 external React 后，热更新不生效？",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打包时-external-react-后热更新不生效",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"为了保证热更新生效，我们需要使用 React 和 ReactDOM 的开发模式产物。"}),"\n",(0,c.jsx)(n.p,{children:"当你将 React 通过 externals 排除后，通常会通过 CDN 等方式注入 React 的生产模式产物，所以热更新会不生效。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    externals: {\n      react: 'React',\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"为了解决该问题，你需要引用 React 的开发模式产物，同时安装 React Devtools，安装完成后即可实现热更新。"}),"\n",(0,c.jsxs)(n.p,{children:["如果你不确定当前使用的 React 产物类型，可以参考：",(0,c.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"noopener noreferrer",children:"React 官方文档 - Use the Production Build"}),"。"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.h3,{id:"开发环境设置文件名的-hash-后热更新不生效",children:["开发环境设置文件名的 hash 后，热更新不生效？",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发环境设置文件名的-hash-后热更新不生效",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["通常来说，我们只会在生产模式下设置文件名的 hash 值（即 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV === 'production'"})," 时）。"]}),"\n",(0,c.jsxs)(n.p,{children:["如果你在开发模式下设置了文件名的 hash，那么可能会导致热更新不生效（尤其是 CSS 文件）。这是因为每次文件内容变化时，都会引起 hash 变化，导致 ",(0,c.jsx)(n.a,{href:"https://npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," 等工具无法读取到最新的文件内容。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"正确用法："}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      css:\n        process.env.NODE_ENV === 'production'\n          ? '[name].[contenthash:8].css'\n          : '[name].css',\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"错误用法："}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      css: '[name].[contenthash:8].css',\n    },\n  },\n};\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsxs)(n.h3,{id:"开启-https-后热更新不生效",children:["开启 https 后，热更新不生效？",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-https-后热更新不生效",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"当开启 https 时，由于证书的问题，可能会出现 HMR 连接失败的情况，此时打开控制台，会出现 HMR connect failed 的报错。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"\xbb WebSocket connection to 'wss://localhost:3000/rsbuild-hmr' failed:\n[HMR] disconnected. Attempting to reconnect.\n"})}),"\n",(0,c.jsx)(n.p,{children:"此问题的解决方法为：点击 Chrome 浏览器问题页面的「高级」->「继续前往 some page（不安全）」。"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Tips: 当通过 Localhost 访问页面时，「您的连接不是私密连接」字样可能不会出现，可访问 Network 域名进行处理。"}),"\n"]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}let d=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fguide%2Ffaq%2Fhmr.mdx"]={toc:[{text:"热更新不生效，如何排查？",id:"热更新不生效如何排查",depth:3},{text:"1. 检查 Web Socket 连接",id:"1-检查-web-socket-连接",depth:4},{text:"2. 检查 hot-update 请求",id:"2-检查-hot-update-请求",depth:4},{text:"3. 检查其他原因",id:"3-检查其他原因",depth:4},{text:"打包时 external React 后，热更新不生效？",id:"打包时-external-react-后热更新不生效",depth:3},{text:"开发环境设置文件名的 hash 后，热更新不生效？",id:"开发环境设置文件名的-hash-后热更新不生效",depth:3},{text:"开启 https 后，热更新不生效？",id:"开启-https-后热更新不生效",depth:3}],title:"热更新问题",frontmatter:{}}}}]);