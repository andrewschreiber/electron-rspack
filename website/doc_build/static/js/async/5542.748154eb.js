"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["5542"],{2676:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var s=r(651),l=r(6971);function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type TransformImport =\n  | Array<{\n      libraryName: string;\n      libraryDirectory?: string;\n      style?: string | boolean;\n      styleLibraryDirectory?: string;\n      camelToDashComponentName?: boolean;\n      transformToDefaultImport?: boolean;\n      customName?: string;\n      customStyleName?: string;\n    }>\n  | Function;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["转换 import 的路径，可以用于模块化引用三方包的子路径，能力类似于 ",(0,s.jsx)(n.a,{href:"https://npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"。"]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"按需引入-antd-组件",children:["按需引入 antd 组件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#按需引入-antd-组件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在使用 ",(0,s.jsx)(n.a,{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"antd"})," 组件库时（低于 v5 版本），你可以通过以下配置来按需引入组件："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: 'css',\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"源代码如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Button } from 'antd';\n"})}),"\n",(0,s.jsx)(n.p,{children:"会被转换成："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"按需引入-lodash",children:["按需引入 lodash",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#按需引入-lodash",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在使用 lodash 时，你可以通过 ",(0,s.jsx)(n.code,{children:"transformImport"})," 来自动引用子路径，减小包体积。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'lodash',\n        customName: 'lodash/{{ member }}',\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"源代码如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { get } from 'lodash';\n"})}),"\n",(0,s.jsx)(n.p,{children:"会被转换成："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import get from 'lodash/get';\n"})}),"\n",(0,s.jsx)(n.p,{children:"请避免以下用法，否则会引入所有的 lodash 代码："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import _ from 'lodash';\nimport lodash from 'lodash';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"适用范围",children:["适用范围",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#适用范围",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transformImport"})," 只适用于经过 Rsbuild 编译的模块。需要注意的是，Rsbuild 默认并不会编译位于 node_modules 目录下的 JavaScript 文件。这意味着，node_modules 目录内的代码将不会被 ",(0,s.jsx)(n.code,{children:"transformImport"})," 处理。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果你希望通过 ",(0,s.jsx)(n.code,{children:"transformImport"})," 对 node_modules 下的代码进行处理，请将相关模块添加到 ",(0,s.jsx)(n.a,{href:"/config/source/include",children:"source.include"})," 配置中。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/node_modules[\\\\/]some-package[\\\\/]/],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"选项",children:["选项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"libraryname",children:["libraryName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"用于指定需要按需加载的模块名称。当 Rsbuild 遍历代码时，如果遇到了对应模块的 import 语句，则会对其进行转换。"}),"\n",(0,s.jsxs)(n.h3,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["用于拼接转换后的路径，拼接规则为 ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),"，其中 member 为引入成员。"]}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"style",children:["style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["确定是否需要引入相关样式，若为 ",(0,s.jsx)(n.code,{children:"true"}),"，则会引入路径 ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"}),"。若为 ",(0,s.jsx)(n.code,{children:"false"})," 或 ",(0,s.jsx)(n.code,{children:"undefined"})," 则不会引入样式。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置为 ",(0,s.jsx)(n.code,{children:"true"})," 时："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["该配置用于拼接引入样式时的引入路径，若该配置被指定，则 ",(0,s.jsx)(n.code,{children:"style"})," 配置项会被忽略。拼接引入路径为 ",(0,s.jsx)(n.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["当配置为 ",(0,s.jsx)(n.code,{children:"styles"})," 时："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"转换结果:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否需要将 camelCase 的引入转换成 kebab-case。"}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"转换结果："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 设置成 true：\nimport ButtonGroup from 'foo/button-group';\n// 设置成 false：\nimport ButtonGroup from 'foo/ButtonGroup';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否将导入语句转换成默认导入。"}),"\n",(0,s.jsx)(n.p,{children:"示例："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"转换结果："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// 设置成 true：\nimport Button from 'foo/button';\n// 设置成 false：\nimport { Button } from 'foo/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"customname",children:["customName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"自定义转换后的导入路径。"}),"\n",(0,s.jsxs)(n.p,{children:["比如下面的配置，会将 ",(0,s.jsx)(n.code,{children:"import { foo } from 'my-lib'"})," 转换为 ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'my-lib',\n        customName: `my-lib/{{ member }}`,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["此外，你还可以声明转换后的路径格式，例如设置为 ",(0,s.jsx)(n.code,{children:"my-lib/{{ camelCase member }}"}),"，来将 member 转换成驼峰格式。"]}),"\n",(0,s.jsx)(n.p,{children:"支持以下格式："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kebabCase"}),"：字母小写，单词之间使用连字符连接。例如：",(0,s.jsx)(n.code,{children:"my-variable-name"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snakeCase"}),"：字母小写，单词之间使用下划线连接。例如：",(0,s.jsx)(n.code,{children:"my_variable_name"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"camelCase"}),"：首字母小写，随后每个单词的首字母大写。例如：",(0,s.jsx)(n.code,{children:"myVariableName"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upperCase"}),"：字母大写，其他字符不变。例如：",(0,s.jsx)(n.code,{children:"MY-VARIABLE-NAME"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lowerCase"}),"：字母小写，其他字符不变。例如：",(0,s.jsx)(n.code,{children:"my-variable-name"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"customstylename",children:["customStyleName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["自定义转换后的样式导入路径，用法与 ",(0,s.jsx)(n.code,{children:"customName"})," 一致。"]}),"\n",(0,s.jsxs)(n.h2,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transformImport"})," 的值定义为函数时，可以接受原本的 transformImport 配置，并对其进行修改。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: (imports) => {\n      return imports.filter((data) => data.libraryName !== 'antd');\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"也可以在函数中返回一个新数组作为最终结果，新数组会覆盖原本的 transformImport 配置。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: () => {\n      return [\n        {\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n          style: 'css',\n        },\n      ];\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fconfig%2Fsource%2Ftransform-import.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"按需引入 antd 组件",id:"按需引入-antd-组件",depth:3},{text:"按需引入 lodash",id:"按需引入-lodash",depth:3},{text:"适用范围",id:"适用范围",depth:2},{text:"选项",id:"选项",depth:2},{text:"libraryName",id:"libraryname",depth:3},{text:"libraryDirectory",id:"librarydirectory",depth:3},{text:"style",id:"style",depth:3},{text:"styleLibraryDirectory",id:"stylelibrarydirectory",depth:3},{text:"camelToDashComponentName",id:"cameltodashcomponentname",depth:3},{text:"transformToDefaultImport",id:"transformtodefaultimport",depth:3},{text:"customName",id:"customname",depth:3},{text:"customStyleName",id:"customstylename",depth:3},{text:"Function 类型",id:"function-类型",depth:2}],title:"source.transformImport",frontmatter:{}}}}]);