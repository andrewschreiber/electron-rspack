"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["8156"],{3934:function(e,n,s){s.r(n),s.d(n,{default:function(){return o}});var a=s(651),r=s(6971);function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h2:"h2"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"sourcealias",children:["source.alias",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealias",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Alias = Record<string, string | false | (string | false)[]> | Function;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const defaultAlias = {\n  '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json')),\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create aliases to import or require certain modules, same as the ",(0,a.jsx)(n.a,{href:"https://rspack.dev/config/resolve#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," config of Rspack."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["For TypeScript projects, you only need to configure ",(0,a.jsx)(n.a,{href:"https://typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," in the ",(0,a.jsx)(n.code,{children:"tsconfig.json"})," file. The Rsbuild will automatically recognize it, so there is no need to configure the ",(0,a.jsx)(n.code,{children:"source.alias"})," option separately. For more details, please refer to ",(0,a.jsx)(n.a,{href:"/guide/advanced/alias",children:"Path Aliases"}),".\n"]})})]}),"\n",(0,a.jsxs)(n.h2,{id:"object-type",children:["Object Type",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"alias"})," can be an Object, and the relative path will be automatically converted to absolute path."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["With above configuration, if ",(0,a.jsx)(n.code,{children:"@common/Foo.tsx"})," is import in the code, it will be mapped to the ",(0,a.jsx)(n.code,{children:"<project>/src/common/Foo.tsx"})," path."]}),"\n",(0,a.jsxs)(n.h2,{id:"function-type",children:["Function Type",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"alias"})," can be a function, it will accept the previous alias object, and you can modify it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: (alias) => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to remove the built-in ",(0,a.jsx)(n.code,{children:"@swc/helpers"})," alias, you can delete it in the function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: (alias) => {\n      delete alias['@swc/helpers'];\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also return a new object as the final result in the function, which will replace the preset alias object."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: (alias) => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"set-by-environment",children:["Set by environment",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-by-environment",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["When you build for multiple ",(0,a.jsx)(n.a,{href:"/config/environments",children:"environments"}),", you can set different alias for each environment:"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, set different alias for ",(0,a.jsx)(n.code,{children:"web"})," and ",(0,a.jsx)(n.code,{children:"node"})," environments:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  environments: {\n    web: {\n      source: {\n        alias: {\n          '@common': './src/web/common',\n        },\n      },\n      output: {\n        target: 'web',\n      },\n    },\n    node: {\n      source: {\n        alias: {\n          '@common': './src/node/common',\n        },\n      },\n      output: {\n        target: 'node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"exact-matching",children:["Exact Matching",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exact-matching",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"source.alias"})," will automatically match sub-paths, for example, with the following configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import path from 'node:path';\n\nexport default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"It will match as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // resolved to `./src/common`\nimport b from '@common/util'; // resolved to `./src/common/util`\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can add the ",(0,a.jsx)(n.code,{children:"$"})," symbol to enable exact matching, which will not automatically match sub-paths."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import path from 'node:path';\n\nexport default {\n  source: {\n    alias: {\n      '@common$': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"It will match as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // resolved to `./src/common`\nimport b from '@common/util'; // remains as `@common/util`\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"handling-npm-packages",children:["Handling npm packages",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handling-npm-packages",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"alias"})," to resolve an npm package to a specific directory."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if multiple versions of the ",(0,a.jsx)(n.code,{children:"react"})," are installed in the project, you can alias ",(0,a.jsx)(n.code,{children:"react"})," to the version installed in the root ",(0,a.jsx)(n.code,{children:"node_modules"})," directory to avoid bundling multiple copies of the React code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import path from 'node:path';\n\nexport default {\n  source: {\n    alias: {\n      react: path.resolve(__dirname, './node_modules/react'),\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"When using alias to handle npm packages, please be aware of whether different major versions of the package are being used in the project."}),"\n",(0,a.jsx)(n.p,{children:"For example, if a module or npm dependency in your project uses the React 18 API, and you alias React to version 17, the module will not be able to reference the React 18 API, resulting in code exceptions."})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}let o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfig%2Fsource%2Falias.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:2},{text:"Function Type",id:"function-type",depth:2},{text:"Set by environment",id:"set-by-environment",depth:2},{text:"Exact Matching",id:"exact-matching",depth:2},{text:"Handling npm packages",id:"handling-npm-packages",depth:2}],title:"source.alias",frontmatter:{}}}}]);