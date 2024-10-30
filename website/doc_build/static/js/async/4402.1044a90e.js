"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4402"],{5703:function(n,i,e){e.r(i),e.d(i,{default:function(){return o}});var s=e(651),l=e(6971);function r(n){let i=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong",div:"div",ol:"ol"},(0,l.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"插件系统",children:["插件系统",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#插件系统",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"Rsbuild 提供了一套轻量强大的插件系统，用以实现自身的大多数功能，并允许用户进行扩展。"}),"\n",(0,s.jsx)(i.p,{children:"开发者编写的插件能够修改 Rsbuild 的默认行为，并添加各类额外功能，包括但不限于："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"获取上下文信息"}),"\n",(0,s.jsx)(i.li,{children:"注册生命周期钩子"}),"\n",(0,s.jsx)(i.li,{children:"转换模块的源代码"}),"\n",(0,s.jsx)(i.li,{children:"修改 Rspack 配置"}),"\n",(0,s.jsx)(i.li,{children:"修改 Rsbuild 配置"}),"\n",(0,s.jsx)(i.li,{children:"..."}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"对比其他插件",children:["对比其他插件",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#对比其他插件",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"在开发 Rsbuild 插件之前，你可能已经接触过 Webpack、Vite、esbuild 等工具的插件系统。"}),"\n",(0,s.jsx)(i.p,{children:"总体而言，Rsbuild 的插件 API 和 esbuild 相似，与 Webpack / Rspack 插件相比，Rsbuild 的插件 API 更加简洁和容易上手。"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"// esbuild plugin\nconst esbuildPlugin = {\n  name: 'example',\n  setup(build) {\n    build.onEnd(() => console.log('done'));\n  },\n};\n\n// Rsbuild plugin\nconst rsbuildPlugin = () => ({\n  name: 'example',\n  setup(api) {\n    api.onAfterBuild(() => console.log('done'));\n  },\n});\n\n// Rspack plugin\nclass RspackExamplePlugin {\n  apply(compiler) {\n    compiler.hooks.done.tap('RspackExamplePlugin', () => {\n      console.log('done');\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"从功能上看，Rsbuild 的插件 API 主要围绕 Rsbuild 的运行流程和构建配置，并提供一些 hooks 用于扩展。而 Rspack 的插件 API 则更加复杂和丰富，能够修改打包过程的每一个环节。"}),"\n",(0,s.jsx)(i.p,{children:"Rsbuild 插件中可以集成 Rspack 插件，如果 Rsbuild 提供的 hooks 无法满足你的需求，你也可以通过 Rspack 插件来实现功能，并在 Rsbuild 插件中注册 Rspack 插件："}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"const rsbuildPlugin = () => ({\n  name: 'example',\n  setup(api) {\n    api.modifyRspackConfig((config) => {\n      config.plugins?.push(new RspackExamplePlugin());\n    });\n  },\n});\n"})}),"\n",(0,s.jsxs)(i.h2,{id:"开发插件",children:["开发插件",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#开发插件",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["插件提供类似 ",(0,s.jsx)(i.code,{children:"(options?: PluginOptions) => RsbuildPlugin"})," 的函数作为入口。"]}),"\n",(0,s.jsxs)(i.h3,{id:"插件示例",children:["插件示例",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#插件示例",children:"#"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="pluginFoo.ts"',children:"import type { RsbuildPlugin } from '@rsbuild/core';\n\nexport type PluginFooOptions = {\n  message?: string;\n};\n\nexport const pluginFoo = (options: PluginFooOptions = {}): RsbuildPlugin => ({\n  name: 'plugin-foo',\n\n  setup(api) {\n    api.onAfterStartDevServer(() => {\n      const msg = options.message || 'hello!';\n      console.log(msg);\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(i.p,{children:"注册插件："}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginFoo } from './pluginFoo';\n\nexport default {\n  plugins: [pluginFoo({ message: 'world!' })],\n};\n"})}),"\n",(0,s.jsxs)(i.h3,{id:"插件结构",children:["插件结构",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#插件结构",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["函数形式的插件可以 ",(0,s.jsx)(i.strong,{children:"接受选项对象"})," 并 ",(0,s.jsx)(i.strong,{children:"返回插件实例"}),"，并通过闭包机制管理内部状态。"]}),"\n",(0,s.jsx)(i.p,{children:"其中各部分的作用分别为："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," 属性用于标注插件名称。"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"setup"})," 作为插件逻辑的主入口。"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api"})," 对象包含了各类钩子和工具函数。"]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"命名规范",children:["命名规范",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#命名规范",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"插件的命名规范如下："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["插件的函数命名为 ",(0,s.jsx)(i.code,{children:"pluginAbc"}),"，并通过具名导出。"]}),"\n",(0,s.jsxs)(i.li,{children:["插件的 ",(0,s.jsx)(i.code,{children:"name"})," 采用 ",(0,s.jsx)(i.code,{children:"scope:foo-bar"})," 或 ",(0,s.jsx)(i.code,{children:"plugin-foo-bar"})," 格式，添加 ",(0,s.jsx)(i.code,{children:"scope:"})," 可以避免和其他插件产生命名冲突。"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"下面是一个例子："}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="pluginFooBar.ts"',children:"import type { RsbuildPlugin } from '@rsbuild/core';\n\nexport const pluginFooBar = (): RsbuildPlugin => ({\n  name: 'scope:foo-bar',\n  setup() {},\n});\n"})}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive tip",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(i.div,{className:"rspress-directive-content",children:(0,s.jsxs)(i.p,{children:["Rsbuild 官方插件的 ",(0,s.jsx)(i.code,{children:"name"})," 统一使用 ",(0,s.jsx)(i.code,{children:"rsbuild:"})," 作为前缀，比如 ",(0,s.jsx)(i.code,{children:"rsbuild:react"})," 对应 ",(0,s.jsx)(i.code,{children:"@rsbuild/plugin-react"}),"。\n"]})})]}),"\n",(0,s.jsxs)(i.h3,{id:"模板仓库",children:["模板仓库",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#模板仓库",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-template",target:"_blank",rel:"noopener noreferrer",children:"rsbuild-plugin-template"})," 是一个最小的 Rsbuild 插件模板仓库，你可以基于该仓库来开发你的 Rsbuild 插件。"]}),"\n",(0,s.jsxs)(i.h3,{id:"environment-插件",children:["Environment 插件",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-插件",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Rsbuild 支持同时为多个环境构建产物，并支持某个插件",(0,s.jsx)(i.a,{href:"/guide/advanced/environments#%E4%B8%BA%E6%8C%87%E5%AE%9A%E7%8E%AF%E5%A2%83%E6%B7%BB%E5%8A%A0%E6%8F%92%E4%BB%B6",children:"仅在指定环境下运行"}),"。"]}),"\n",(0,s.jsx)(i.p,{children:"当你希望你开发的插件支持作为 Environment 插件使用时，需要注意以下几点："}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["每个 environment 有自身的 Rsbuild 配置：","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["使用 ",(0,s.jsx)(i.a,{href:"/guide/advanced/environments#environment-%E4%B8%8A%E4%B8%8B%E6%96%87",children:"environment 上下文"})," 代替 ",(0,s.jsx)(i.code,{children:"getRsbuildConfig"})," 获取 environment 信息。"]}),"\n",(0,s.jsxs)(i.li,{children:["修改特定 environment 的 Rsbuild 配置时，优先使用 ",(0,s.jsx)(i.a,{href:"/plugins/dev/hooks#modifyenvironmentconfig",children:"modifyEnvironmentConfig"})," 代替 ",(0,s.jsx)(i.a,{href:"/plugins/dev/hooks#modifyrsbuildconfig",children:"modifyRsbuildConfig"})," ，以避免对其他 environments 产生影响。"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["避免副作用，你的插件代码可能执行多次：","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"当同一个插件在不同环境下注册多次时，会被视为多个 Rsbuild 插件（哪怕它们指向同一个插件实例），这是因为它们带有不同的 Rsbuild environment 上下文。"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"下面是一个 Environment 插件例子："}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="pluginFoo.ts"',children:"import type { RsbuildPlugin } from '@rsbuild/core';\n\nexport type PluginFooOptions = {\n  title?: string;\n};\n\nexport const pluginFoo = (options: PluginFooOptions = {}): RsbuildPlugin => ({\n  name: 'plugin-foo',\n\n  setup: (api) => {\n    api.modifyEnvironmentConfig((config) => {\n      config.html.title = options.title || 'My Default Title';\n    });\n    api.modifyBundlerChain((chain, { environment }) => {\n      chain.name(environment.config.html.title);\n    });\n  },\n});\n"})}),"\n",(0,s.jsxs)(i.h2,{id:"生命周期钩子",children:["生命周期钩子",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#生命周期钩子",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"Rsbuild 在内部按照约定的生命周期进行任务调度，插件可以通过注册钩子来介入工作流程的任意阶段，并实现自己的功能。"}),"\n",(0,s.jsxs)(i.p,{children:["Rsbuild 生命周期钩子的完整列表参考 ",(0,s.jsx)(i.a,{href:"/plugins/dev/hooks",children:"API 文档"}),"。"]}),"\n",(0,s.jsxs)(i.p,{children:["Rsbuild 不会接管底层 Rspack 的生命周期，相关生命周期钩子的使用方式见对应文档：",(0,s.jsx)(i.a,{href:"https://rspack.dev/api/plugin-api",target:"_blank",rel:"noopener noreferrer",children:"Rspack Plugin API"}),"。"]}),"\n",(0,s.jsxs)(i.h2,{id:"使用配置项",children:["使用配置项",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#使用配置项",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"自行编写的插件通常使用初始化时传入函数的参数作为配置项即可，开发者可以随意定义和使用函数的入参。"}),"\n",(0,s.jsx)(i.p,{children:"但某些情况下插件可能需要读取 / 修改 Rsbuild 公用的配置项，这时就需要了解 Rsbuild 内部对配置项的生产和消费流程："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"读取、解析配置并合并默认值"}),"\n",(0,s.jsxs)(i.li,{children:["插件通过 ",(0,s.jsx)(i.code,{children:"api.modifyRsbuildConfig(...)"})," 回调修改配置项"]}),"\n",(0,s.jsx)(i.li,{children:"归一化配置项并提供给插件后续消费，此后无法再修改配置项"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"整套流程可以通过这个简单的插件体现："}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"export const pluginUploadDist = (): RsbuildPlugin => ({\n  name: 'plugin-upload-dist',\n  setup(api) {\n    api.modifyRsbuildConfig((config) => {\n      // 关闭代码压缩\n      config.output ||= {};\n      config.output.minify = false;\n      // 轮到其它插件修改配置...\n    });\n\n    api.onBeforeBuild(() => {\n      // 读取最终的配置\n      const config = api.getNormalizedConfig();\n      if (!config.output.minify !== false) {\n        // 其它插件又启用了压缩则报错\n        throw new Error(\n          'You must disable minimize to upload readable dist files.',\n        );\n      }\n    });\n\n    api.onAfterBuild(() => {\n      const config = api.getNormalizedConfig();\n      const distRoot = config.output.distPath.root;\n\n      // 上传 `distRoot` 目录下所有产物文件...\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(i.p,{children:"插件中有三种方式使用配置项对象："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api.modifyRsbuildConfig(config => {})"})," 在回调中修改配置"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api.getRsbuildConfig()"})," 获取配置项"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"api.getNormalizedConfig()"})," 获取归一化后的配置项"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["归一化的配置项会再次合并默认值，并移除大部分可选类型，对于 ",(0,s.jsx)(i.code,{children:"PluginUploadDist"})," 的例子，其部分类型定义为："]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"api.modifyRsbuildConfig((config: RsbuildConfig) => {});\napi.getRsbuildConfig() as RsbuildConfig;\ntype RsbuildConfig = {\n  output?: {\n    minify?: boolean;\n    distPath?: { root?: string };\n  };\n};\n\napi.getNormalizedConfig() as NormalizedConfig;\ntype NormalizedConfig = {\n  output: {\n    minify: boolean;\n    distPath: { root: string };\n  };\n};\n"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"getNormalizedConfig()"})," 的返回值类型与 ",(0,s.jsx)(i.code,{children:"RsbuildConfig"})," 的略有不同、相比文档其它地方描述的类型进行了收窄，\n在使用时无需自行判空、填充默认值。"]}),"\n",(0,s.jsx)(i.p,{children:"因此使用配置项的最佳方式应该是："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["通过 ",(0,s.jsx)(i.code,{children:"api.modifyRsbuildConfig(config => {})"})," 来",(0,s.jsx)(i.strong,{children:"修改配置"})]}),"\n",(0,s.jsxs)(i.li,{children:["在其后的生命周期中读取 ",(0,s.jsx)(i.code,{children:"api.getNormalizedConfig()"})," 作为插件",(0,s.jsx)(i.strong,{children:"实际使用的配置"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"修改-rspack-配置",children:["修改 Rspack 配置",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-rspack-配置",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"Rsbuild 插件允许你修改内置的 Rspack 配置，包括："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/plugins/dev/hooks#modifyrspackconfig",children:"api.modifyRspackConfig"}),"：修改 Rspack 配置对象。"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/plugins/dev/hooks#modifybundlerchain",children:"api.modifyBundlerChain"})," 通过 ",(0,s.jsx)(i.a,{href:"https://github.com/rspack-contrib/rspack-chain",target:"_blank",rel:"noopener noreferrer",children:"rspack-chain"})," 来修改 Rspack 配置。"]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"示例",children:["示例",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["比如，通过 Rsbuild 插件来注册 ",(0,s.jsx)(i.a,{href:"https://github.com/rspack-contrib/eslint-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-rspack-plugin"}),"："]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import type { RsbuildPlugin } from '@rsbuild/core';\nimport ESLintRspackPlugin from 'eslint-rspack-plugin';\n\nexport const pluginEslint = (options?: Options): RsbuildPlugin => ({\n  name: 'plugin-eslint',\n  setup(api) {\n    api.modifyRspackConfig((config) => {\n      config.plugins?.push(\n        new ESLintRspackPlugin({\n          // plugins options\n        }),\n      );\n    });\n  },\n});\n"})})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,l.ah)(),n.components);return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}let o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fplugins%2Fdev%2Findex.mdx"]={toc:[{text:"对比其他插件",id:"对比其他插件",depth:2},{text:"开发插件",id:"开发插件",depth:2},{text:"插件示例",id:"插件示例",depth:3},{text:"插件结构",id:"插件结构",depth:3},{text:"命名规范",id:"命名规范",depth:3},{text:"模板仓库",id:"模板仓库",depth:3},{text:"Environment 插件",id:"environment-插件",depth:3},{text:"生命周期钩子",id:"生命周期钩子",depth:2},{text:"使用配置项",id:"使用配置项",depth:2},{text:"修改 Rspack 配置",id:"修改-rspack-配置",depth:2},{text:"示例",id:"示例",depth:3}],title:"插件系统",frontmatter:{}}}}]);