"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["7613"],{1768:function(e,n,i){i.r(n),i.d(n,{default:function(){return h}});var s=i(651),r=i(6971);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",h4:"h4",div:"div"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"拆包最佳实践",children:["拆包最佳实践",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#拆包最佳实践",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。"}),"\n",(0,s.jsx)(n.p,{children:"在 Rsbuild 中内置了多种拆包策略，可以满足大部分应用的需求，你也可以根据自己的使用场景，自定义拆包配置。"}),"\n",(0,s.jsxs)(n.h2,{id:"拆包策略",children:["拆包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#拆包策略",children:"#"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Rsbuild 的拆包配置集中在 ",(0,s.jsx)(n.a,{href:"/config/performance/chunk-split",children:"performance.chunkSplit"})," 中。"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Rsbuild 支持设置以下几种拆包策略："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-experience"}),": 根据经验制定的拆分策略，自动将一些常用的 npm 包拆分为体积适中的 chunk。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-module"}),": 按 NPM 包的粒度拆分，每个 NPM 包对应一个 chunk。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-size"}),"：根据模块大小自动进行拆分。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-in-one"}),": 将所有代码全部打包到一个 chunk 中。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"single-vendor"}),": 将所有 NPM 包的代码打包到一个单独的 chunk 中。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"custom"}),": 自定义拆包配置。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"split-by-experience",children:["split-by-experience",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-experience",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"分包策略",children:["分包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild 默认采用 ",(0,s.jsx)(n.code,{children:"split-by-experience"})," 策略，这是我们根据经验制定的策略。具体来说，当你的项目中引用了以下 npm 包时，它们会自动被拆分为单独的 chunk："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-polyfill.js"}),"：包含 ",(0,s.jsx)(n.code,{children:"core-js"}),"，",(0,s.jsx)(n.code,{children:"@swc/helpers"}),"，",(0,s.jsx)(n.code,{children:"tslib"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-axios.js"}),"：包含 ",(0,s.jsx)(n.code,{children:"axios"})," 以及相关的包。"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"这种方式将常用的包进行分组，然后拆分为单独的 chunk，有助于浏览器缓存。"}),"\n",(0,s.jsxs)(n.h3,{id:"配置",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"如果项目中没有安装或引用以上 npm 包，则不会生成相应的 chunk。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"split-by-module",children:["split-by-module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-module",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"分包策略-1",children:["分包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"将每一个 NPM 包拆分为一个单独的 chunk。"}),"\n",(0,s.jsxs)(n.h3,{id:"配置-1",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-module',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"注意事项-1",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-1",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"这个配置会最细化地拆分 node_modules，产生大量的文件请求。"}),"\n",(0,s.jsx)(n.li,{children:"在使用 HTTP/2 时，由于存在多路复用，会加快资源的加载时间，并提高缓存命中率。"}),"\n",(0,s.jsx)(n.li,{children:"在未使用 HTTP/2 时，由于 HTTP 队头阻塞问题，会导致页面加载性能下降，请谨慎使用。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"all-in-one",children:["all-in-one",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#all-in-one",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"分包策略-2",children:["分包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-2",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"此分包策略将所有源代码和第三方依赖打包在同一个 chunk 中。"}),"\n",(0,s.jsxs)(n.h3,{id:"配置-2",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-2",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'all-in-one',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"注意事项-2",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-2",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"这个配置会将构建生成的 JS 代码全部打包到一个文件里（除了 dynamic import 拆分的 chunk）。"}),"\n",(0,s.jsx)(n.li,{children:"单个 JS 文件的体积可能会非常大，使页面加载性能下降。"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你需要将 dynamic import 拆分的 chunk 也打包到单个文件中，可以将 Rspack 的 ",(0,s.jsx)(n.a,{href:"https://rspack.dev/config/output#outputasyncchunks",target:"_blank",rel:"noopener noreferrer",children:"output.asyncChunks"})," 选项设置为 ",(0,s.jsx)(n.code,{children:"false"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  performance: {\n    chunkSplit: {\n      strategy: 'all-in-one',\n    },\n  },\n  tools: {\n    rspack: {\n      output: {\n        asyncChunks: false,\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"single-vendor",children:["single-vendor",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-vendor",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"分包策略-3",children:["分包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-3",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"此分包策略将第三方依赖打包在一个 chunk 中，源代码打包在另外的 chunk 中。"}),"\n",(0,s.jsxs)(n.h3,{id:"配置-3",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-3",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'single-vendor',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"注意事项-3",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-3",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"单个 vendor 文件的体积可能会非常大，使页面加载性能下降。"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"split-by-size",children:["split-by-size",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-size",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"分包策略-4",children:["分包策略",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分包策略-4",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["该策略下，设置 ",(0,s.jsx)(n.code,{children:"minSize"}),"、",(0,s.jsx)(n.code,{children:"maxSize"})," 为一个固定值后，Rsbuild 会自动进行拆分，无需干预。"]}),"\n",(0,s.jsxs)(n.h3,{id:"配置-4",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-4",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 30000,\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"自定义拆包",children:["自定义拆包",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义拆包",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"除了使用内置的拆包策略外，你也可以通过 Rsbuild 自定义拆包功能来满足更多的定制化需求。自定义拆包分为两部分:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"自定义拆包分组"}),"\n",(0,s.jsxs)(n.li,{children:["自定义 Rspack 的 ",(0,s.jsx)(n.code,{children:"splitChunks"})," 配置"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"值得注意的是，这两种自定义拆包能力可以和内置的拆包策略一起使用，也就是说，你可以使用内置的拆包策略来拆分常用的包，然后再使用自定义拆包功能来拆分其他的包。"}),"\n",(0,s.jsxs)(n.h3,{id:"自定义分组",children:["自定义分组",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义分组",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild 支持自定义拆包分组，这样比内置拆包策略更灵活，同时比手写 Rspack 的 ",(0,s.jsx)(n.code,{children:"splitChunks"})," 配置更简单。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如将 node_modules 下的 ",(0,s.jsx)(n.code,{children:"axios"})," 库拆分到 ",(0,s.jsx)(n.code,{children:"axios.js"})," 中："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      forceSplitting: {\n        axios: /node_modules[\\\\/]axios/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"forceSplitting"})," 配置，你可以很方便把某些模块拆分为一个 chunk。"]}),"\n",(0,s.jsxs)(n.h4,{id:"注意事项-4",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项-4",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"forceSplitting"})," 配置拆分的 chunk 会通过 ",(0,s.jsx)(n.code,{children:"<script>"})," 标签插入到 HTML 文件中，作为首屏请求的资源。因此，请根据实际场景来进行适当地拆分，避免首屏资源体积过大。"]}),"\n",(0,s.jsxs)(n.h3,{id:"自定义拆包配置",children:["自定义拆包配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义拆包配置",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"override"})," 配置项来自定义 Rspack 的 ",(0,s.jsx)(n.code,{children:"splitChunks"})," 配置，比如:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["设置 ",(0,s.jsx)(n.code,{children:"minSize"})," 为 30000，表示当模块大小小于 30000 字节时，不进行拆分。"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      override: {\n        chunks: 'all',\n        minSize: 30000,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["将所有 CSS 文件打包到一个 ",(0,s.jsx)(n.code,{children:"styles.css"})," 中。"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      override: {\n        cacheGroups: {\n          styles: {\n            name: 'styles',\n            minSize: 0,\n            chunks: 'all',\n            test: /\\.(?:css|less|sass|scss|styl)$/,\n            priority: 99,\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["其中，",(0,s.jsx)(n.code,{children:"override"})," 配置会与 Rspack 的 ",(0,s.jsx)(n.code,{children:"splitChunks"})," 配置进行合并，具体配置项请参考 ",(0,s.jsx)(n.a,{href:"https://rspack.dev/zh/config/optimization#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer",children:"Rspack - splitChunks"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"使用-dynamic-import-拆包",children:["使用 Dynamic Import 拆包",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-dynamic-import-拆包",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["除了 ",(0,s.jsx)(n.code,{children:"chunkSplit"})," 配置，使用 dynamic import 拆包也是一项重要的优化手段，它可以有效减少首屏的包体积。"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"关于 dynamic import"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"Dynamic import 是 ECMAScript 2020 引入的一个新特性，它允许你动态地加载一些 JavaScript 模块。Rsbuild 底层的 Rspack 默认支持 dynamic import，所以你可以直接在代码中使用它。"})})]}),"\n",(0,s.jsxs)(n.p,{children:["当打包工具遇到 ",(0,s.jsx)(n.code,{children:"import()"})," 语法时，它会自动将相关的代码分割成一个新的 chunk，并在运行时按需加载。"]}),"\n",(0,s.jsxs)(n.p,{children:["例如，项目中有一个大的模块 ",(0,s.jsx)(n.code,{children:"bigModule.ts"}),"（也可以是一个第三方依赖），你可以使用 dynamic import 来按需加载它："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 在某个需要使用 bigModule 的地方\nimport('./bigModule.ts').then((bigModule) => {\n  // 使用 bigModule\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["当你运行构建命令时，",(0,s.jsx)(n.code,{children:"bigModule.ts"})," 就会被自动分割成一个新的 chunk，并在运行时按需加载。"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let h=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguide%2Foptimization%2Fsplit-chunk.mdx"]={toc:[{text:"拆包策略",id:"拆包策略",depth:2},{text:"split-by-experience",id:"split-by-experience",depth:2},{text:"分包策略",id:"分包策略",depth:3},{text:"配置",id:"配置",depth:3},{text:"注意事项",id:"注意事项",depth:3},{text:"split-by-module",id:"split-by-module",depth:2},{text:"分包策略",id:"分包策略-1",depth:3},{text:"配置",id:"配置-1",depth:3},{text:"注意事项",id:"注意事项-1",depth:3},{text:"all-in-one",id:"all-in-one",depth:2},{text:"分包策略",id:"分包策略-2",depth:3},{text:"配置",id:"配置-2",depth:3},{text:"注意事项",id:"注意事项-2",depth:3},{text:"single-vendor",id:"single-vendor",depth:2},{text:"分包策略",id:"分包策略-3",depth:3},{text:"配置",id:"配置-3",depth:3},{text:"注意事项",id:"注意事项-3",depth:3},{text:"split-by-size",id:"split-by-size",depth:2},{text:"分包策略",id:"分包策略-4",depth:3},{text:"配置",id:"配置-4",depth:3},{text:"自定义拆包",id:"自定义拆包",depth:2},{text:"自定义分组",id:"自定义分组",depth:3},{text:"注意事项",id:"注意事项-4",depth:4},{text:"自定义拆包配置",id:"自定义拆包配置",depth:3},{text:"使用 Dynamic Import 拆包",id:"使用-dynamic-import-拆包",depth:2}],title:"拆包最佳实践",frontmatter:{}}}}]);