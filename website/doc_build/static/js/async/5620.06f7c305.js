"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["5620"],{9593:function(n,e,s){s.r(e),s.d(e,{default:function(){return t}});var i=s(651),l=s(6971),r=s(4340);function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",h2:"h2",div:"div"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"plugins",children:["plugins",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"用于注册 Rsbuild 插件。"}),"\n",(0,i.jsx)(e.p,{children:"插件数组中的异步插件（promise）会自动被 resolve，falsy value 会被忽略。"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"type Falsy = false | null | undefined;\n\ntype RsbuildPlugins = (\n  | RsbuildPlugin\n  | Falsy\n  | Promise<RsbuildPlugin | Falsy | RsbuildPlugins>\n  | RsbuildPlugins\n)[];\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"默认值："})," ",(0,i.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["请查看 ",(0,i.jsx)(e.a,{href:"/plugins/list/index",children:"插件列表"})," 页面来发现所有可用的插件。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"示例",children:["示例",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"比如注册 Rsbuild 的 Stylus 插件。"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"安装插件："}),"\n"]}),"\n","\n",(0,i.jsx)(r.PackageManagerTabs,{command:"add @rsbuild/plugin-stylus -D"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"注册插件："}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginStylus } from '@rsbuild/plugin-stylus';\n\nexport default defineConfig({\n  plugins: [pluginStylus()],\n});\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"执行顺序",children:["执行顺序",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#执行顺序",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["默认情况下，插件会按照 ",(0,i.jsx)(e.code,{children:"plugins"})," 数组的顺序依次执行，Rsbuild 内置插件的执行时机早于用户注册的插件。"]}),"\n",(0,i.jsxs)(e.p,{children:["当插件内部使用了控制顺序的相关字段，比如 ",(0,i.jsx)(e.code,{children:"pre"}),"、",(0,i.jsx)(e.code,{children:"post"})," 时，执行顺序会基于它们进行调整，详见 ",(0,i.jsx)(e.a,{href:"/plugins/dev/core#%E5%89%8D%E7%BD%AE%E6%8F%92%E4%BB%B6",children:"前置插件"}),"。"]}),"\n",(0,i.jsxs)(e.h2,{id:"嵌套插件",children:["嵌套插件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#嵌套插件",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild 还支持添加嵌套插件，你可以传入一个包含多个插件的数组，类似于一个插件预设集合，这对于实现需要多个插件组合的复杂功能（例如框架集成）很有帮助。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"function myPlugin() {\n  return [fooPlugin(), barPlugin()];\n}\n\nexport default {\n  plugins: [myPlugin()],\n};\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"本地插件",children:["本地插件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#本地插件",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"如果本地代码仓库中包含了一些 Rsbuild 插件，你可以直接通过相对路径引入。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginCustom } from './plugins/pluginCustom';\n\nexport default defineConfig({\n  plugins: [pluginCustom()],\n});\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"插件选项",children:["插件选项",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件选项",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"如果插件提供了一些选项，你可以通过插件函数的参数传入配置。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginStylus } from '@rsbuild/plugin-stylus';\n\nexport default defineConfig({\n  plugins: [\n    pluginStylus({\n      stylusOptions: {\n        lineNumbers: false,\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"插件注册时机",children:["插件注册时机",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件注册时机",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"需要注意的是，插件的注册只能在 Rsbuild 初始化阶段进行，你不能在一个插件内通过插件 API 动态地添加其他插件："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"// 错误\nfunction myPlugin() {\n  return {\n    setup: (api) => {\n      api.modifyRsbuildConfig((config, { mergeRsbuildConfig }) => {\n        return mergeRsbuildConfig(config, {\n          plugins: [fooPlugin(), barPlugin()], // <- it won't work\n        });\n      });\n    },\n  };\n}\n\n// 正确\nfunction myPlugin() {\n  return [fooPlugin(), barPlugin()];\n}\n\nexport default {\n  plugins: [myPlugin()],\n};\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"rspack-插件",children:["Rspack 插件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-插件",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"plugins"})," 选项用于注册 Rsbuild 插件，如果你需要注册 Rspack 或 Webpack 插件，请使用 ",(0,i.jsx)(e.a,{href:"/config/tools/rspack",children:"tools.rspack"}),"。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default {\n  // Rsbuild 插件\n  plugins: [pluginStylus()],\n  tools: {\n    rspack: {\n      // Rspack 或 Webpack 插件\n      plugins: [new SomeWebpackPlugin()],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"unplugin",children:["Unplugin",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#unplugin",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://github.com/unjs/unplugin",target:"_blank",rel:"noopener noreferrer",children:"unplugin"})," 是一个适用于不同构建工具的统一插件系统。你可以在 Rsbuild 中使用基于 unplugin 实现的插件，只需要引入插件的 ",(0,i.jsx)(e.code,{children:"/rspack"})," 子路径，并通过 ",(0,i.jsx)(e.a,{href:"/config/tools/rspack",children:"tools.rspack"})," 注册即可。"]}),"\n",(0,i.jsxs)(e.p,{children:["下面是使用 ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer",children:"unplugin-vue-components"})," 的示例："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginVue } from '@rsbuild/plugin-vue';\nimport Components from 'unplugin-vue-components/rspack';\n\nexport default defineConfig({\n  plugins: [pluginVue()],\n  tools: {\n    rspack: {\n      plugins: [\n        Components({\n          // options\n        }),\n      ],\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(e.div,{className:"rspress-directive-content",children:(0,i.jsxs)(e.p,{children:["在使用 unplugin 的 transform hook 时，请使用 ",(0,i.jsx)(e.code,{children:"transformInclude"})," hook 来匹配指定的模块。当 transform hook 会匹配到 ",(0,i.jsx)(e.code,{children:".html"})," 模块时，会代替 ",(0,i.jsx)(e.a,{href:"https://github.com/rspack-contrib/html-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-rspack-plugin"})," 默认的 EJS 转换。\n"]})})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["请确保依赖的 ",(0,i.jsx)(e.code,{children:"unplugin"})," 包版本 >= v1.6.0。"]}),"\n"]})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}let t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfig%2Fplugins.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"执行顺序",id:"执行顺序",depth:2},{text:"嵌套插件",id:"嵌套插件",depth:2},{text:"本地插件",id:"本地插件",depth:2},{text:"插件选项",id:"插件选项",depth:2},{text:"插件注册时机",id:"插件注册时机",depth:2},{text:"Rspack 插件",id:"rspack-插件",depth:2},{text:"Unplugin",id:"unplugin",depth:2}],title:"plugins",frontmatter:{}}}}]);