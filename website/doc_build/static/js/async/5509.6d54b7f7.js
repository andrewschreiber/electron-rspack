"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["5509"],{4018:function(e,s,r){r.r(s),r.d(s,{default:function(){return t}});var n=r(651),o=r(6971);function a(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"outputsourcemap",children:["output.sourceMap",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputsourcemap",children:"#"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Type:"})}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"type SourceMap = {\n  js?: Rspack.Configuration['devtool'];\n  css?: boolean;\n};\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const defaultSourceMap = {\n  js: isDev ? 'cheap-module-source-map' : false,\n  css: false,\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"Used to set whether to generate source map files, and which format of source map to generate."}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"What is a source map"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsx)(s.p,{children:"Source map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With source map, you can directly view the source code when debugging the compiled code."})})]}),"\n",(0,n.jsxs)(s.h2,{id:"default-behavior",children:["Default Behavior",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-behavior",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"By default, the source map generation rules for Rsbuild are as follows:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"In development mode, source maps for JS files are generated for development debugging, while source maps for CSS files are not generated."}),"\n",(0,n.jsx)(s.li,{children:"In production mode, no source maps for JS and CSS files are generated to improve build performance."}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"js-source-map",children:["JS Source Map",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#js-source-map",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["The source map for JS files is controlled by ",(0,n.jsx)(s.code,{children:"sourceMap.js"})," and can be configured by passing in all the source map formats supported by Rspack's ",(0,n.jsx)(s.a,{href:"https://rspack.dev/config/devtool",target:"_blank",rel:"noopener noreferrer",children:"devtool"})," option. Setting it to ",(0,n.jsx)(s.code,{children:"false"})," will disable the source map."]}),"\n",(0,n.jsx)(s.p,{children:"For example, if you need to generate high-quality source maps in all environments, you can set it as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    sourceMap: {\n      js: 'source-map',\n    },\n  },\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can also set different source map formats based on the environment."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    sourceMap: {\n      js:\n        process.env.NODE_ENV === 'production'\n          ? // Use a high quality source map format for production\n            'source-map'\n          : // Use a more performant source map format for development\n            'cheap-module-source-map',\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"css-source-map",children:["CSS Source Map",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-source-map",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["The source map for CSS files is controlled by ",(0,n.jsx)(s.code,{children:"sourceMap.css"}),". Setting it to ",(0,n.jsx)(s.code,{children:"true"})," will enable the source map, while setting it to ",(0,n.jsx)(s.code,{children:"false"})," will disable it."]}),"\n",(0,n.jsx)(s.p,{children:"For example, if you need to generate a source map for CSS files, you can set it as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    sourceMap: {\n      css: true,\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}let t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfig%2Foutput%2Fsource-map.mdx"]={toc:[{text:"Default Behavior",id:"default-behavior",depth:2},{text:"JS Source Map",id:"js-source-map",depth:2},{text:"CSS Source Map",id:"css-source-map",depth:2}],title:"output.sourceMap",frontmatter:{}}}}]);