"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["2239"],{5718:function(e,s,n){n.r(s),n.d(s,{default:function(){return o}});var l=n(651),d=n(6971);function c(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre",h3:"h3",ol:"ol"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"outputcssmodules",children:["output.cssModules",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodules",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"CSSModules"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"用于自定义 CSS Modules 配置。"}),"\n",(0,l.jsxs)(s.p,{children:["Rsbuild 的 CSS Modules 功能是基于 css-loader 的 ",(0,l.jsx)(s.code,{children:"modules"})," 选项实现的，你可以参考 ",(0,l.jsx)(s.a,{href:"https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules",target:"_blank",rel:"noopener noreferrer",children:"css-loader - modules"})," 来了解更多。"]}),"\n",(0,l.jsxs)(s.h2,{id:"cssmodulesauto",children:["cssModules.auto",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesauto",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"auto 配置项允许基于文件名自动启用 CSS Modules。"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"type Auto =\n  | boolean\n  | RegExp\n  | ((\n      resourcePath: string,\n      resourceQuery: string,\n      resourceFragment: string,\n    ) => boolean);\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"类型说明："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"true"}),": 为所有匹配 ",(0,l.jsx)(s.code,{children:"/\\.module\\.\\w+$/i.test(filename)"})," 正则表达式的文件启用 CSS Modules。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"false"}),": 禁用 CSS Modules。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"RegExp"}),": 为所有匹配 ",(0,l.jsx)(s.code,{children:"/RegExp/i.test(filename)"})," 正则表达式的文件启用 CSS Modules。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"function"}),": 为所有通过基于文件名的过滤函数校验的文件启用 CSS Modules。"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      auto: (resource) => {\n        return resource.includes('.module.') || resource.includes('shared/');\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"cssmodulesexportlocalsconvention",children:["cssModules.exportLocalsConvention",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesexportlocalsconvention",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"导出的 class 名称的命名风格。"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"type CSSModulesLocalsConvention =\n  | 'asIs'\n  | 'camelCase'\n  | 'camelCaseOnly'\n  | 'dashes'\n  | 'dashesOnly';\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"'camelCase'"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"类型说明："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"asIs"}),"：类名将按原样导出。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"camelCase"}),"：类名将被驼峰化，然后被导出。原始类名也会被导出。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"camelCaseOnly"}),"：类名将被驼峰化，然后被导出。原始类名不会被导出。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"dashes"}),"：只有类名中的破折号会被驼峰化，然后被导出。原始类名也会被导出。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"dashesOnly"}),"：类名中的破折号会被驼峰化，然后被导出。原始类名不会被导出。"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      exportLocalsConvention: 'camelCaseOnly',\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"cssmodulesexportglobals",children:["cssModules.exportGlobals",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesexportglobals",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"允许从 global class names 导出名称，以便你可以通过 import 使用它们。"}),"\n",(0,l.jsxs)(s.h3,{id:"示例",children:["示例",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["将 ",(0,l.jsx)(s.code,{children:"exportGlobals"})," 设置为 ",(0,l.jsx)(s.code,{children:"true"}),"："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      exportGlobals: true,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.p,{children:["在 CSS Modules 中使用 ",(0,l.jsx)(s.code,{children:":global()"}),"："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-css",meta:'title="style.module.css"',children:":global(.blue) {\n  color: blue;\n}\n\n.red {\n  color: red;\n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:["然后你可以导入 ",(0,l.jsx)(s.code,{children:":global()"})," 包裹的类名："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-tsx",meta:'title="Button.tsx"',children:"import styles from './style.module.css';\n\nconsole.log(styles.blue); // 'blue'\nconsole.log(styles.red); // 'red-[hash]'\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"cssmoduleslocalidentname",children:["cssModules.localIdentName",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmoduleslocalidentname",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"const localIdentName =\n  rsbuildConfig.mode === 'production'\n    ? '[local]-[hash:base64:6]'\n    : '[path][name]__[local]-[hash:base64:6]';\n"})}),"\n",(0,l.jsx)(s.p,{children:"设置 CSS Modules 编译后生成的 class names 格式。"}),"\n",(0,l.jsxs)(s.h3,{id:"默认值",children:["默认值",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"localIdentName"})," 在开发模式和生产模式有不同的默认值。"]}),"\n",(0,l.jsx)(s.p,{children:"在生产模式，Rsbuild 会生成更简短的类名，从而减少构建产物的体积。"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// 在开发模式下，值为 `src-index-module__header-[hash]`\n// 在生产模式下，值为 `header-[hash]`\nconsole.log(styles.header);\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"模板字符串",children:["模板字符串",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#模板字符串",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["在 ",(0,l.jsx)(s.code,{children:"localIdentName"})," 中，你可以使用以下模板字符串："]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[name]"})," - 源文件名称。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[local]"})," - 原始类名。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[hash]"})," - 字符串的哈希值。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[folder]"})," - 文件夹的相对路径。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[path]"})," - 源文件的相对路径。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[file]"})," - 文件名和路径。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[ext]"})," - 文件后缀名，包含点号。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"})," - 带有哈希设置的哈希。"]}),"\n"]}),"\n",(0,l.jsxs)(s.h3,{id:"示例-1",children:["示例",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例-1",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["将 ",(0,l.jsx)(s.code,{children:"localIdentName"})," 设置为其他值："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      localIdentName: '[hash:base64:4]',\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"cssmodulesmode",children:["cssModules.mode",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesmode",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"type Mode =\n  | 'local'\n  | 'global'\n  | 'pure'\n  | 'icss'\n  | ((resourcePath: string) => 'local' | 'global' | 'pure' | 'icss');\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"'local'"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"控制 CSS Modules 的编译模式。"}),"\n",(0,l.jsxs)(s.h3,{id:"可选值",children:["可选值",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#可选值",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"cssModules.mode"})," 可以取以下值之一："]}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'local'"})," (默认值)：启用 CSS Modules 规范和局部作用域。类名和 ID 选择器会被重写为模块作用域，并注入 ",(0,l.jsx)(s.code,{children:"@value"})," 绑定。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'global'"}),"：不启用 CSS Modules 的行为，禁用局部作用域和 ",(0,l.jsx)(s.code,{children:"@value"})," 绑定注入。全局选择器将按照原样保留。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'pure'"}),"：通过删除最终 CSS 中未使用的本地类名和值来实现死代码消除。仍然执行局部作用域和 ",(0,l.jsx)(s.code,{children:"@value"})," 注入。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'icss'"}),"：编译成 low-level 可互操作的 CSS 格式，该格式提供在 CSS 和其他语言之间声明 ",(0,l.jsx)(s.code,{children:":import"})," 和 ",(0,l.jsx)(s.code,{children:":export"})," 依赖项的语法。它不执行任何作用域或 ",(0,l.jsx)(s.code,{children:"@value"})," 注入。"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"'local'"})," 模式是 CSS Modules 最常见的用法，在组件内启用模块化和局部作用域样式。其他模式可能在特定场景下被使用。"]}),"\n",(0,l.jsx)(s.p,{children:"例如："}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      mode: 'global',\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"函数",children:["函数",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["你还可以传递一个函数给 ",(0,l.jsx)(s.code,{children:"cssModules.mode"}),"，并根据资源路径、query 或 fragment 确定 mode。这允许你为不同的文件使用不同的 mode。"]}),"\n",(0,l.jsxs)(s.p,{children:["例如，对 ",(0,l.jsx)(s.code,{children:".module.css"})," 文件使用局部作用域，对其他文件使用全局样式："]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    cssModules: {\n      mode: (resourcePath) => {\n        if (/\\.module\\.css$/.test(resourcePath)) {\n          return 'local';\n        }\n        return 'global';\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h2,{id:"cssmodulesnamedexport",children:["cssModules.namedExport",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesnamedexport",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"类型："})," ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"默认值："})," ",(0,l.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"是否具名导出 class names。"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      namedExport: true,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"示例-2",children:["示例",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例-2",children:"#"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-css",meta:'title="style.module.css"',children:".foo {\n  color: blue;\n}\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"namedExport: false"}),":"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import styles from './style.module.css';\n\nconsole.log(styles.foo);\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"namedExport: true"}),":"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"import { foo } from './style.module.css';\n// or\nimport * as styles from './style.module.css';\n\nconsole.log(foo);\nconsole.log(styles.foo);\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-tip",children:"当 namedExport 为 true 时，CSS Modules 导出的 `default` class 会被自动重命名为 `_default` class，因为 default 是 ECMA modules 的保留字。\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}let o=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Fcss-modules.mdx"]={toc:[{text:"cssModules.auto",id:"cssmodulesauto",depth:2},{text:"cssModules.exportLocalsConvention",id:"cssmodulesexportlocalsconvention",depth:2},{text:"cssModules.exportGlobals",id:"cssmodulesexportglobals",depth:2},{text:"示例",id:"示例",depth:3},{text:"cssModules.localIdentName",id:"cssmoduleslocalidentname",depth:2},{text:"默认值",id:"默认值",depth:3},{text:"模板字符串",id:"模板字符串",depth:3},{text:"示例",id:"示例-1",depth:3},{text:"cssModules.mode",id:"cssmodulesmode",depth:2},{text:"可选值",id:"可选值",depth:3},{text:"函数",id:"函数",depth:3},{text:"cssModules.namedExport",id:"cssmodulesnamedexport",depth:2},{text:"示例",id:"示例-2",depth:3}],title:"output.cssModules",frontmatter:{}}}}]);