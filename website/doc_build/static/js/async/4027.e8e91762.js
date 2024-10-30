"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4027"],{7201:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var i=r(651),s=r(6971),t=r(4340);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"vue-cli",children:["Vue CLI",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-cli",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["This chapter introduces how to migrate a ",(0,i.jsx)(n.a,{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer",children:"Vue CLI"})," project to Rsbuild."]}),"\n",(0,i.jsxs)(n.h2,{id:"install-dependencies",children:["Install Dependencies",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-dependencies",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"First, you need to replace the npm dependencies of Vue CLI with Rsbuild's dependencies."}),"\n","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remove Vue CLI dependencies:"}),"\n"]}),"\n",(0,i.jsx)(t.PackageManagerTabs,{command:"remove @vue/cli-service @vue/cli-plugin-babel @vue/cli-plugin-eslint core-js"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install Rsbuild dependencies:"}),"\n"]}),"\n",(0,i.jsx)(t.PackageManagerTabs,{command:"add @rsbuild/core @rsbuild/plugin-vue -D"}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If your project is based on Vue 2, replace ",(0,i.jsx)(n.code,{children:"@rsbuild/plugin-vue"})," with ",(0,i.jsx)(n.code,{children:"@rsbuild/plugin-vue2"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"update-npm-scripts",children:["Update npm scripts",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-npm-scripts",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Next, you need to update the npm scripts in the package.json file to Rsbuild's CLI commands."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "serve": "rsbuild dev",\n    "build": "rsbuild build",\n    "preview": "rsbuild preview"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Rsbuild does not integrate ESLint, so it does not provide a command to replace ",(0,i.jsx)(n.code,{children:"vue-cli-service lint"}),". You can directly use ESLint's ",(0,i.jsx)(n.a,{href:"https://eslint.org/docs/latest/use/command-line-interface",target:"_blank",rel:"noopener noreferrer",children:"CLI commands"})," as an alternative.\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"create-configuration-file",children:["Create Configuration File",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-configuration-file",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Create a Rsbuild configuration file ",(0,i.jsx)(n.code,{children:"rsbuild.config.ts"})," in the same directory as package.json, and add the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { defineConfig } from '@rsbuild/core';\nimport { pluginVue } from '@rsbuild/plugin-vue';\n\nexport default defineConfig({\n  plugins: [pluginVue()],\n  source: {\n    // Specify the entry file\n    entry: {\n      index: './src/main.js',\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If your project is based on Vue 2, use ",(0,i.jsx)(n.code,{children:"import { pluginVue2 } from '@rsbuild/plugin-vue2';"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"html-template",children:["HTML Template",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-template",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Vue CLI uses the ",(0,i.jsx)(n.code,{children:"public/index.html"})," file as the default HTML template. In Rsbuild, you can specify the HTML template through ",(0,i.jsx)(n.a,{href:"/config/html/template",children:"html.template"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default defineConfig({\n  html: {\n    template: './public/index.html',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the HTML template, if you are using the ",(0,i.jsx)(n.code,{children:"BASE_URL"})," variable from Vue CLI, replace it with Rsbuild's ",(0,i.jsx)(n.a,{href:"/config/html/template-parameters",children:"assetPrefix variable"})," and use a forward slash for concatenation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'-  <link rel="icon" href="<%= BASE_URL %>favicon.ico">\n+  <link rel="icon" href="<%= assetPrefix %>/favicon.ico">\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This completes the basic migration from Vue CLI to Rsbuild. You can now run the ",(0,i.jsx)(n.code,{children:"npm run serve"})," command to try starting the dev server."]}),"\n",(0,i.jsxs)(n.h2,{id:"configuration-migration",children:["Configuration Migration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-migration",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Here is the corresponding Rsbuild configuration for Vue CLI configuration:"}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{children:"Vue CLI"}),"\n",(0,i.jsx)(n.th,{children:"Rsbuild"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#publicpath",target:"_blank",rel:"noopener noreferrer",children:"publicPath"})}),"\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/config/dev/asset-prefix",children:"dev.assetPrefix"})," / ",(0,i.jsx)(n.a,{href:"/config/output/asset-prefix",children:"output.assetPrefix"})]}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#outputdir",target:"_blank",rel:"noopener noreferrer",children:"outputDir"})," / ",(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#assetsdir",target:"_blank",rel:"noopener noreferrer",children:"assetsDir"})]}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/output/dist-path",children:"output.distPath"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#filenamehashing",target:"_blank",rel:"noopener noreferrer",children:"filenameHashing"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/output/filename-hash",children:"output.filenameHash"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#pages",target:"_blank",rel:"noopener noreferrer",children:"pages"})}),"\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/config/source/entry",children:"source.entry"})," / ",(0,i.jsx)(n.a,{href:"/config/html/template",children:"html.template"})," / ",(0,i.jsx)(n.a,{href:"/config/html/title",children:"html.title"})]}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#transpiledependencies",target:"_blank",rel:"noopener noreferrer",children:"transpileDependencies"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/source/include",children:"source.include"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#productionsourcemap",target:"_blank",rel:"noopener noreferrer",children:"productionSourceMap"})," / ",(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#css-sourcemap",target:"_blank",rel:"noopener noreferrer",children:"css.sourceMap"})]}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/output/source-map",children:"output.sourceMap"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#crossorigin",target:"_blank",rel:"noopener noreferrer",children:"crossorigin"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/html/crossorigin",children:"html.crossorigin"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#configurewebpack",target:"_blank",rel:"noopener noreferrer",children:"configureWebpack"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/tools/rspack",children:"tools.rspack"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#chainwebpack",target:"_blank",rel:"noopener noreferrer",children:"chainWebpack"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/tools/bundler-chain",children:"tools.bundlerChain"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#css-extract",target:"_blank",rel:"noopener noreferrer",children:"css.extract"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/output/inject-styles",children:"output.injectStyles"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#css-loaderoptions",target:"_blank",rel:"noopener noreferrer",children:"css.loaderOptions"})}),"\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/config/tools/css-loader",children:"tools.cssLoader"})," / ",(0,i.jsx)(n.a,{href:"/plugins/list/plugin-less",children:"less"})," / ",(0,i.jsx)(n.a,{href:"/plugins/list/plugin-sass",children:"sass"})," / ",(0,i.jsx)(n.a,{href:"/config/tools/postcss",children:"postcss"})]}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://cli.vuejs.org/config/#devserver-proxy",target:"_blank",rel:"noopener noreferrer",children:"devServer.proxy"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/config/server/proxy",children:"server.proxy"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When migrating ",(0,i.jsx)(n.code,{children:"configureWebpack"}),", note that most of the Webpack and Rsbuild configs are the same, but there are also some differences or functionalities not implemented in Rsbuild."]}),"\n",(0,i.jsx)(n.li,{children:"The above table does not cover all configurations of Vue CLI, feel free to add more."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"environment-variables",children:["Environment Variables",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-variables",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Vue CLI injects environment variables starting with ",(0,i.jsx)(n.code,{children:"VUE_APP_"})," into the client code by default, while Rsbuild injects environment variables starting with ",(0,i.jsx)(n.code,{children:"PUBLIC_"})," by default (see ",(0,i.jsx)(n.a,{href:"/guide/advanced/env-vars#public-variables",children:"public variables"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["To be compatible with Vue CLI's behavior, you can manually call Rsbuild's ",(0,i.jsx)(n.a,{href:"/api/javascript-api/core#loadenv",children:"loadEnv"})," method to read environment variables starting with ",(0,i.jsx)(n.code,{children:"VUE_APP_"}),", and inject them into the client code through the ",(0,i.jsx)(n.a,{href:"/config/source/define",children:"source.define"})," config."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig, loadEnv } from '@rsbuild/core';\n\nconst { publicVars } = loadEnv({ prefixes: ['VUE_APP_'] });\n\nexport default defineConfig({\n  source: {\n    define: publicVars,\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"contents-supplement",children:["Contents Supplement",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#contents-supplement",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The current document only covers part of the migration process. If you find suitable content to add, feel free to contribute to the documentation via pull request \uD83E\uDD1D."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The documentation for rsbuild can be found in the ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/rsbuild/tree/main/website",target:"_blank",rel:"noopener noreferrer",children:"rsbuild/website"})," directory."]}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguide%2Fmigration%2Fvue-cli.mdx"]={toc:[{text:"Install Dependencies",id:"install-dependencies",depth:2},{text:"Update npm scripts",id:"update-npm-scripts",depth:2},{text:"Create Configuration File",id:"create-configuration-file",depth:2},{text:"HTML Template",id:"html-template",depth:2},{text:"Configuration Migration",id:"configuration-migration",depth:2},{text:"Environment Variables",id:"environment-variables",depth:2},{text:"Contents Supplement",id:"contents-supplement",depth:2}],title:"Vue CLI",frontmatter:{}}}}]);