"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["29"],{5963:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var r=s(651),i=s(6971);function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",blockquote:"blockquote",div:"div",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsbundlerchain",children:["tools.bundlerChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbundlerchain",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BundlerChainFn = (\n  chain: RspackChain,\n  utils: ModifyBundlerChainUtils,\n) => Promise<void> | void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/rspack-contrib/rspack-chain",target:"_blank",rel:"noopener noreferrer",children:"rspack-chain"})," is a utility library for configuring Rspack. It provides a chaining API, making the configuration of Rspack more flexible. By using ",(0,r.jsx)(n.code,{children:"rspack-chain"}),", you can more easily modify and extend Rspack configurations without directly manipulating the complex configuration object."]}),"\n",(0,r.jsxs)(n.p,{children:["You can use rspack-chain to modify the default Rspack config through ",(0,r.jsx)(n.code,{children:"tools.bundlerChain"}),". Its value is a function that takes two arguments:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The first argument is a ",(0,r.jsx)(n.code,{children:"rspack-chain"})," instance, which you can use to modify the Rspack config."]}),"\n",(0,r.jsxs)(n.li,{children:["The second argument is an utils object, including ",(0,r.jsx)(n.code,{children:"env"}),", ",(0,r.jsx)(n.code,{children:"isProd"}),", ",(0,r.jsx)(n.code,{children:"CHAIN_ID"}),", etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.bundlerChain"})," will be executed earlier than ",(0,r.jsx)(n.a,{href:"/config/tools/rspack",children:"tools.rspack"}),", so it will be overridden by ",(0,r.jsx)(n.code,{children:"tools.rspack"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsx)(n.p,{children:"The built-in Rspack config in Rsbuild may change with iterations, and these changes won't be reflected in semver. Therefore, your custom config may become invalid when you upgrade Rsbuild."})})]}),"\n",(0,r.jsxs)(n.h2,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to: ",(0,r.jsx)(n.a,{href:"/guide/basic/configure-rspack#use-rspack-chain",children:"RspackChain examples"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"utils",children:["Utils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"env",children:["env",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"isdev",children:["isDev",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isdev",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to determine whether the current build is a development build, such as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (config, { isDev }) => {\n      if (isDev) {\n        config.devtool = 'eval-cheap-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"isprod",children:["isProd",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to determine whether the current build is a production build, such as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"target",children:["target",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'web' | 'node' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"target"})," parameter can be used to determine the build target environment. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"isserver",children:["isServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"node"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"htmlplugin",children:["HtmlPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"typeof import('html-rspack-plugin')"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The instance of ",(0,r.jsx)(n.code,{children:"html-rspack-plugin"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { HtmlPlugin }) => {\n      console.log(HtmlPlugin);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"chain_id",children:["CHAIN_ID",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Some common Chain IDs are predefined in the Rsbuild, and you can use these IDs to locate the built-in Rule or Plugin."}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"Please note that some of the rules or plugins listed below are not available by default. They will only be included in the Rspack or webpack configuration when you enable specific options or register certain plugins."}),"\n",(0,r.jsxs)(n.p,{children:["For example, the ",(0,r.jsx)(n.code,{children:"RULE.STYLUS"})," rule exists only when the Stylus plugin is registered.\n"]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.JS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"js"})," and ",(0,r.jsx)(n.code,{children:"ts"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.SVG"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"svg"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.CSS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"css"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.LESS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"less"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.SASS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"sass"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.YAML"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"yaml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.WASM"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"WASM"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.FONT"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"font"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.IMAGE"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"image"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.MEDIA"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"media"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.VUE"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"vue"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-vue",children:"Vue plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.SVELTE"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"svelte"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-svelte",children:"Svelte plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RULE.STYLUS"})}),"\n",(0,r.jsxs)(n.td,{children:["Rule for ",(0,r.jsx)(n.code,{children:"stylus"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-stylus",children:"Stylus plugin"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ONE_OF.[ID]"})," can match a certain type of rule in the rule array."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, output as a separate file"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, inlined into bundles as data URIs"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,r.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"USE.[ID]"})," can match a certain loader."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SWC"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"builtin:swc-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.STYLE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"style-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.POSTCSS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"postcss-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.LESS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"less-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-less",children:"Less plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SASS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"sass-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-sass",children:"Sass plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.RESOLVE_URL"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"resolve-url-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-sass",children:"Sass plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.VUE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"vue-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-vue",children:"Vue plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SVGR"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"svgr-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-svgr",children:"Svgr plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.BABEL"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"babel-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-babel",children:"Babel plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.SVELTE"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"svelte-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-svelte",children:"Svelte plugin"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"USE.STYLUS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"stylus-loader"})," (requires ",(0,r.jsx)(n.a,{href:"/plugins/list/plugin-stylus",children:"Stylus plugin"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PLUGIN.[ID]"})," can match a certain Rspack or Webpack plugin."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.HTML"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"HtmlRspackPlugin"}),", you need to concat the entry name when using: ",(0,r.jsx)(n.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PLUGIN.VUE_LOADER_PLUGIN"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"VueLoaderPlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"chain_idminimizer",children:["CHAIN_ID.MINIMIZER",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idminimizer",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MINIMIZER.[ID]"})," can match a certain minimizer."]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"ID"}),"\n",(0,r.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.JS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"SwcJsMinimizerRspackPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MINIMIZER.CSS"})}),"\n",(0,r.jsxs)(n.td,{children:["correspond to ",(0,r.jsx)(n.code,{children:"LightningCssMinimizerRspackPlugin"})]}),"\n"]}),"\n"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Ftools%2Fbundler-chain.mdx"]={toc:[{text:"Examples",id:"examples",depth:2},{text:"Utils",id:"utils",depth:2},{text:"env",id:"env",depth:3},{text:"isDev",id:"isdev",depth:3},{text:"isProd",id:"isprod",depth:3},{text:"target",id:"target",depth:3},{text:"isServer",id:"isserver",depth:3},{text:"isWebWorker",id:"iswebworker",depth:3},{text:"HtmlPlugin",id:"htmlplugin",depth:3},{text:"CHAIN_ID",id:"chain_id",depth:2},{text:"CHAIN_ID.RULE",id:"chain_idrule",depth:3},{text:"CHAIN_ID.ONE_OF",id:"chain_idone_of",depth:3},{text:"CHAIN_ID.USE",id:"chain_iduse",depth:3},{text:"CHAIN_ID.PLUGIN",id:"chain_idplugin",depth:3},{text:"CHAIN_ID.MINIMIZER",id:"chain_idminimizer",depth:3}],title:"tools.bundlerChain",frontmatter:{}}}}]);