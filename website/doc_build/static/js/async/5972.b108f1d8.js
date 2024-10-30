"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["5972"],{8353:function(e,n,i){i.r(n),i.d(n,{default:function(){return a}});var s=i(651),r=i(6971),c=i(4340);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div",ol:"ol"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"environment-variables",children:["Environment Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-variables",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Rsbuild supports injecting env variables or expressions into the code during build, which is helpful for distinguishing the running environment or replacing constants."}),"\n",(0,s.jsx)(n.p,{children:"This chapter introduces how to use env variables in Rsbuild."}),"\n",(0,s.jsxs)(n.h2,{id:"default-variables",children:["Default Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-variables",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild by default injects the some env variables into the code using ",(0,s.jsx)(n.a,{href:"#using-define",children:"source.define"}),". These will be replaced with specified values during the build:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"import.meta.env"})," contains these env variables:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#importmetaenvmode",children:"import.meta.env.MODE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#importmetaenvdev",children:"import.meta.env.DEV"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#importmetaenvprod",children:"import.meta.env.PROD"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#importmetaenvbase_url",children:"import.meta.env.BASE_URL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#importmetaenvasset_prefix",children:"import.meta.env.ASSET_PREFIX"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"process.env"})," contains these env variables:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#processenvbase_url",children:"process.env.BASE_URL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#processenvasset_prefix",children:"process.env.ASSET_PREFIX"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#processenvnode_env",children:"process.env.NODE_ENV"}),": This variable is injected by Rspack. For details, please refer to ",(0,s.jsx)(n.a,{href:"https://rspack.dev/config/optimization#optimizationnodeenv",target:"_blank",rel:"noopener noreferrer",children:"Rspack - optimization.nodeEnv"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenvmode",children:["import.meta.env.MODE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenvmode",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"import.meta.env.MODE"})," in the client code to read the value of the ",(0,s.jsx)(n.a,{href:"/config/mode",children:"mode"})," configuration."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (import.meta.env.MODE === 'development') {\n  console.log('this is development mode');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In development mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (true) {\n  console.log('this is development mode');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In production mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (false) {\n  console.log('this is development mode');\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["During code minification, ",(0,s.jsx)(n.code,{children:"if (false) { ... }"})," will be recognized as invalid code and removed automatically."]}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenvdev",children:["import.meta.env.DEV",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenvdev",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.a,{href:"/config/mode",children:"mode"})," is ",(0,s.jsx)(n.code,{children:"'development'"}),", the value is ",(0,s.jsx)(n.code,{children:"true"}),"; otherwise, it is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (import.meta.env.DEV) {\n  console.log('this is development mode');\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenvprod",children:["import.meta.env.PROD",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenvprod",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.a,{href:"/config/mode",children:"mode"})," is ",(0,s.jsx)(n.code,{children:"'production'"}),", the value is ",(0,s.jsx)(n.code,{children:"true"}),"; otherwise, it is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (import.meta.env.PROD) {\n  console.log('this is production mode');\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenvbase_url",children:["import.meta.env.BASE_URL",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenvbase_url",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"import.meta.env.BASE_URL"})," in the client code to access the server's ",(0,s.jsx)(n.a,{href:"/guide/basic/server#base-path",children:"base path"}),", which is determined by the ",(0,s.jsx)(n.a,{href:"/config/server/base",children:"server.base"})," configuration, which is helpful for referencing ",(0,s.jsx)(n.a,{href:"/guide/basic/static-assets#public-folder",children:"public folder"})," assets in the code."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, we set the base path of the server to ",(0,s.jsx)(n.code,{children:"/foo"})," through ",(0,s.jsx)(n.a,{href:"/config/server/base",children:"server.base"})," configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  server: {\n    base: '/foo',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, the access URL to the ",(0,s.jsx)(n.code,{children:"favicon.ico"})," file in the public directory is ",(0,s.jsx)(n.code,{children:"http://localhost:3000/foo/favicon.ico"}),". You can use ",(0,s.jsx)(n.code,{children:"import.meta.env.BASE_URL"})," to concatenate the URL in JS files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="index.js"',children:'const image = new Image();\n// Equivalent to "/foo/favicon.ico"\nimage.src = `${import.meta.env.BASE_URL}/favicon.ico`;\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenvasset_prefix",children:["import.meta.env.ASSET_PREFIX",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenvasset_prefix",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"import.meta.env.ASSET_PREFIX"})," in the client code to access the URL prefix of static assets."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In development, it is equivalent to the value set by ",(0,s.jsx)(n.a,{href:"/config/dev/asset-prefix",children:"dev.assetPrefix"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In production, it is equivalent to the value set by ",(0,s.jsx)(n.a,{href:"/config/output/asset-prefix",children:"output.assetPrefix"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Rsbuild will automatically remove the trailing slash from ",(0,s.jsx)(n.code,{children:"assetPrefix"})," to make string concatenation easier."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, we copy the ",(0,s.jsx)(n.code,{children:"static/icon.png"})," image to the ",(0,s.jsx)(n.code,{children:"dist"})," directory through ",(0,s.jsx)(n.a,{href:"/config/output/copy",children:"output.copy"})," configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    assetPrefix: '/',\n  },\n  output: {\n    copy: [{ from: './static', to: 'static' }],\n    assetPrefix: 'https://example.com',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we can access the image URL in the client code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`${import.meta.env.ASSET_PREFIX}/static/icon.png`} />;\n"})}),"\n",(0,s.jsx)(n.p,{children:"In development mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`/static/icon.png`} />;\n"})}),"\n",(0,s.jsx)(n.p,{children:"In production mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`https://example.com/static/icon.png`} />;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"processenvbase_url",children:["process.env.BASE_URL",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvbase_url",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild also allows using ",(0,s.jsx)(n.code,{children:"process.env.BASE_URL"}),", which is an alias of ",(0,s.jsx)(n.a,{href:"#importmetaenvbase_url",children:"import.meta.env.BASE_URL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, in the HTML template, you can use ",(0,s.jsx)(n.code,{children:"process.env.BASE_URL"})," to concatenate the URL:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:'title="index.html"',children:'\x3c!-- Equivalent to "/foo/favicon.ico" --\x3e\n<link rel="icon" href="<%= process.env.BASE_URL %>/favicon.ico" />\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"processenvasset_prefix",children:["process.env.ASSET_PREFIX",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvasset_prefix",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild also allows using ",(0,s.jsx)(n.code,{children:"process.env.ASSET_PREFIX"}),", which is an alias of ",(0,s.jsx)(n.a,{href:"#importmetaenvasset_prefix",children:"import.meta.env.ASSET_PREFIX"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, in the HTML template, you can use ",(0,s.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," to concatenate the URL:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:'title="index.html"',children:'\x3c!-- Equivalent to "https://example.com/static/icon.png" --\x3e\n<link rel="icon" href="<%= process.env.ASSET_PREFIX %>/static/icon.png" />\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"processenvnode_env",children:["process.env.NODE_ENV",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvnode_env",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Rsbuild will automatically set the ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," environment variable to ",(0,s.jsx)(n.code,{children:"'development'"})," in development mode and ",(0,s.jsx)(n.code,{children:"'production'"})," in production mode."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," directly in Node.js and in the client code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (process.env.NODE_ENV === 'development') {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In development mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (true) {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In production mode, the above code will be compiled to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"if (false) {\n  console.log('this is a development log');\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["During code minification, ",(0,s.jsx)(n.code,{children:"if (false) { ... }"})," will be recognized as invalid code and removed automatically."]}),"\n",(0,s.jsxs)(n.h2,{id:"env-file",children:[(0,s.jsx)(n.code,{children:".env"})," File",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env-file",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When a ",(0,s.jsx)(n.code,{children:".env"})," file exists in the project root directory, Rsbuild CLI will automatically use ",(0,s.jsx)(n.a,{href:"https://npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer",children:"dotenv"})," to load these env variables and add them to the current Node.js process."]}),"\n",(0,s.jsxs)(n.p,{children:["You can access these env variables through ",(0,s.jsx)(n.code,{children:"import.meta.env.[name]"})," or ",(0,s.jsx)(n.code,{children:"process.env.[name]"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"file-types",children:["File Types",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#file-types",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Rsbuild supports reading the following types of env files:"}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"File Name"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env"})}),"\n",(0,s.jsx)(n.td,{children:"Loaded by default in all scenarios."}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env.local"})}),"\n",(0,s.jsxs)(n.td,{children:["Local usage of the ",(0,s.jsx)(n.code,{children:".env"})," file, should be added to .gitignore."]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env.development"})}),"\n",(0,s.jsxs)(n.td,{children:["Read when ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," is ",(0,s.jsx)(n.code,{children:"'development'"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env.production"})}),"\n",(0,s.jsxs)(n.td,{children:["Read when ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," is ",(0,s.jsx)(n.code,{children:"'production'"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env.development.local"})}),"\n",(0,s.jsxs)(n.td,{children:["Local usage of the ",(0,s.jsx)(n.code,{children:".env.development"})," file, should be added to .gitignore."]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".env.production.local"})}),"\n",(0,s.jsxs)(n.td,{children:["Local usage of the ",(0,s.jsx)(n.code,{children:".env.production"})," file, should be added to .gitignore."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If several of the above files exist at the same time, they will all be loaded, with the files listed at the bottom of the table having higher priority."}),"\n",(0,s.jsxs)(n.h3,{id:"env-mode",children:["Env Mode",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env-mode",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild also supports reading ",(0,s.jsx)(n.code,{children:".env.[mode]"})," and ",(0,s.jsx)(n.code,{children:".env.[mode].local"})," files. You can specify the env mode using the ",(0,s.jsx)(n.code,{children:"--env-mode <mode>"})," flag."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, set the env mode as ",(0,s.jsx)(n.code,{children:"test"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx rsbuild dev --env-mode test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Rsbuild will then read the following files in sequence:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:".env"}),"\n",(0,s.jsx)(n.li,{children:".env.local"}),"\n",(0,s.jsx)(n.li,{children:".env.test"}),"\n",(0,s.jsx)(n.li,{children:".env.test.local"}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"--env-mode"})," option takes precedence over ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to use ",(0,s.jsx)(n.code,{children:"--env-mode"})," to set the env mode, and not to modify ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"env-directory",children:["Env Directory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env-directory",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.code,{children:".env"})," file is located in the root directory of the project. You can specify the env directory by using the ",(0,s.jsx)(n.code,{children:"--env-dir <dir>"})," option in the CLI."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, to specify the env directory as ",(0,s.jsx)(n.code,{children:"config"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx rsbuild dev --env-dir config\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this case, Rsbuild will read the ",(0,s.jsx)(n.code,{children:"./config/.env"})," and other env files."]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, create a ",(0,s.jsx)(n.code,{children:".env"})," file and add the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",meta:'title=".env"',children:"FOO=hello\nBAR=1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then in the ",(0,s.jsx)(n.code,{children:"rsbuild.config.ts"})," file, you can access the above env variables using ",(0,s.jsx)(n.code,{children:"import.meta.env.[name]"})," or ",(0,s.jsx)(n.code,{children:"process.env.[name]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"console.log(import.meta.env.FOO); // 'hello'\nconsole.log(import.meta.env.BAR); // '1'\n\nconsole.log(process.env.FOO); // 'hello'\nconsole.log(process.env.BAR); // '1'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, create a ",(0,s.jsx)(n.code,{children:".env.local"})," file and add the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",meta:'title=".env.local"',children:"BAR=2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The value of ",(0,s.jsx)(n.code,{children:"BAR"})," is overwritten to ",(0,s.jsx)(n.code,{children:"'2'"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"console.log(import.meta.env.BAR); // '2'\nconsole.log(process.env.BAR); // '2'\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"manually-load-env",children:["Manually Load Env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-load-env",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you are not using the Rsbuild CLI and are using the Rsbuild ",(0,s.jsx)(n.a,{href:"/api/start/index",children:"JavaScript API"})," instead, you will need to manually call the ",(0,s.jsx)(n.a,{href:"/api/javascript-api/core#loadenv",children:"loadEnv"})," method to read env variables and inject them into the code via the ",(0,s.jsx)(n.a,{href:"/config/source/define",children:"source.define"})," config."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { loadEnv, mergeRsbuildConfig } from '@rsbuild/core';\n\nconst { parsed, publicVars } = loadEnv();\n\nconst mergedConfig = mergeRsbuildConfig(\n  {\n    source: {\n      define: publicVars,\n    },\n  },\n  userConfig,\n);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"public-variables",children:["Public Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#public-variables",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["All env variables starting with ",(0,s.jsx)(n.code,{children:"PUBLIC_"})," can be accessed in client code. For example, if the following variables are defined:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:'title=".env"',children:"PUBLIC_NAME=jack\nPASSWORD=123\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the client code, you can access these env variables through ",(0,s.jsx)(n.code,{children:"import.meta.env.PUBLIC_*"})," or ",(0,s.jsx)(n.code,{children:"process.env.PUBLIC_*"}),". Rsbuild will match the identifiers and replace them with the corresponding values."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"console.log(import.meta.env.PUBLIC_NAME); // -> 'jack'\nconsole.log(import.meta.env.PASSWORD); // -> undefined\n\nconsole.log(process.env.PUBLIC_NAME); // -> 'jack'\nconsole.log(process.env.PASSWORD); // -> undefined\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The content of public variables will be exposed to your client code, so please avoid including sensitive information in public variables."}),"\n",(0,s.jsxs)(n.li,{children:["Public variables are replaced through ",(0,s.jsx)(n.a,{href:"/config/source/define",children:"source.define"}),". Please read ",(0,s.jsx)(n.a,{href:"#using-define",children:'"Using define"'})," to understand the principles and notes of define."]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"replacement-scope",children:["Replacement Scope",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#replacement-scope",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Public variables will replace identifiers in the client code, with the replacement scope including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["JavaScript files, and files that can be converted into JavaScript code, such as ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".ts"}),", ",(0,s.jsx)(n.code,{children:".tsx"}),", etc."]}),"\n",(0,s.jsx)(n.li,{children:"HTML template files, for example:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ejs",meta:'title="template.html"',children:"<div><%= process.env.PUBLIC_NAME %></div>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that public variables will not replace identifiers in the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CSS files, such as ",(0,s.jsx)(n.code,{children:".css"}),", ",(0,s.jsx)(n.code,{children:".scss"}),", ",(0,s.jsx)(n.code,{children:".less"}),", etc."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"custom-prefix",children:["Custom Prefix",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-prefix",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rsbuild provides the ",(0,s.jsx)(n.a,{href:"/api/javascript-api/core#loadenv",children:"loadEnv"})," method, which can inject env variables with any prefix into client code."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, when migrating a Create React App project to Rsbuild, you can read env variables starting with ",(0,s.jsx)(n.code,{children:"REACT_APP_"})," and inject them through the ",(0,s.jsx)(n.a,{href:"/config/source/define",children:"source.define"})," config as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { defineConfig, loadEnv } from '@rsbuild/core';\n\nconst { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });\n\nexport default defineConfig({\n  source: {\n    define: publicVars,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"using-define",children:["Using define",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-define",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By using ",(0,s.jsx)(n.a,{href:"/config/source/define",children:"source.define"}),", you can replace global identifiers with some expressions or values in compile time."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"define"})," is similar to the macro definition capabilities provided by other languages. It is often used to inject env variables and other information to the code during build time."]}),"\n",(0,s.jsxs)(n.h3,{id:"replace-identifiers",children:["Replace Identifiers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#replace-identifiers",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The most basic use case for ",(0,s.jsx)(n.code,{children:"define"})," is to replace global identifiers in compile time."]}),"\n",(0,s.jsxs)(n.p,{children:["The value of the environment variable ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," will change the behavior of many vendor packages. Usually, we need to set it to ",(0,s.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the value provided here must be a JSON string, e.g. ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," with a value of ",(0,s.jsx)(n.code,{children:'"production"'})," should be passed in as ",(0,s.jsx)(n.code,{children:'"\\"production\\""'})," to be processed correctly."]}),"\n",(0,s.jsxs)(n.p,{children:["Similarly ",(0,s.jsx)(n.code,{children:'{ foo: "bar" }'})," should be converted to ",(0,s.jsx)(n.code,{children:'"{\\"foo\\":\\"bar\\"}"'}),", which if passed directly into the original object would mean replacing the identifier ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV.foo"})," with the identifier ",(0,s.jsx)(n.code,{children:"bar"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more about ",(0,s.jsx)(n.code,{children:"source.define"}),", just refer to ",(0,s.jsx)(n.a,{href:"/config/source/define",children:"API References"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["The environment variable ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," shown in the example above is already injected by the Rsbuild, and you usually do not need to configure it manually.\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"identifiers-matching",children:["Identifiers Matching",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#identifiers-matching",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"source.define"})," can only match complete global identifiers. You can think of it as a text replacement process."]}),"\n",(0,s.jsxs)(n.p,{children:["If the identifier in the code does not exactly match the key defined in ",(0,s.jsx)(n.code,{children:"define"}),", Rsbuild will not be able to replace it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Good\nconsole.log(process.env.NODE_ENV); // 'production'\n\n// Bad\nconsole.log(process.env['NODE_ENV']); // process is not defined!\n\n// Bad\nconsole.log(process.env?.NODE_ENV); // process is not defined!\n\n// Bad\nconst { NODE_ENV } = process.env;\nconsole.log(NODE_ENV); // process is not defined!\n\n// Bad\nconst env = process.env;\nconsole.log(env.NODE_ENV); // process is not defined!\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"processenv-replacement",children:["process.env Replacement",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenv-replacement",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.code,{children:"source.define"}),", please avoid replacing the entire ",(0,s.jsx)(n.code,{children:"process.env"})," object, e.g. the following usage is not recommended:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env': JSON.stringify(process.env),\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the above usage is adopted, the following problems will be caused:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Some unused env variables are additionally injected, causing the env variables of the dev server to be leaked into the front-end code."}),"\n",(0,s.jsxs)(n.li,{children:["As each ",(0,s.jsx)(n.code,{children:"process.env"})," code will be replaced by a complete environment variable object, the bundle size of the front-end code will increase and the performance will decrease."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, please inject the env variables on ",(0,s.jsx)(n.code,{children:"process.env"})," according to actual needs and avoid replacing them in its entirety."]}),"\n",(0,s.jsxs)(n.h2,{id:"type-declarations",children:["Type Declarations",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-declarations",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When you access an environment variable in a TypeScript file, TypeScript may prompt that the variable lacks a type definition, and you need to add the corresponding type declaration."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you reference a ",(0,s.jsx)(n.code,{children:"PUBLIC_FOO"})," variable, the following prompt will appear in the TypeScript file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TS2304: Cannot find name 'PUBLIC_FOO'.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To fix this, you can create a ",(0,s.jsx)(n.code,{children:"src/env.d.ts"})," file in your project and add the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare const PUBLIC_FOO: string;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"importmetaenv",children:["import.meta.env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#importmetaenv",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can extend the type of ",(0,s.jsx)(n.code,{children:"import.meta.env"})," like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"interface ImportMetaEnv {\n  // import.meta.env.PUBLIC_FOO\n  readonly PUBLIC_FOO: string;\n}\n\ninterface ImportMeta {\n  readonly env: ImportMetaEnv;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"processenv",children:["process.env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenv",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the type for ",(0,s.jsx)(n.code,{children:"process.env"})," is missing, please install the dependency ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@types/node",target:"_blank",rel:"noopener noreferrer",children:"@types/node"}),":"]}),"\n","\n",(0,s.jsx)(c.PackageManagerTabs,{command:"add @types/node -D"}),"\n",(0,s.jsxs)(n.p,{children:["Then extend the type of ",(0,s.jsx)(n.code,{children:"process.env"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare namespace NodeJS {\n  interface ProcessEnv {\n    // process.env.PUBLIC_FOO\n    PUBLIC_FOO: string;\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"tree-shaking",children:["Tree Shaking",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-shaking",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"define"})," can also be used to mark dead code to assist the Rspack with tree shaking optimization."]}),"\n",(0,s.jsxs)(n.p,{children:["Build artifacts for different languages is achieved by replacing ",(0,s.jsx)(n.code,{children:"import.meta.env.LANGUAGE"})," with a specific value, for example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default {\n  source: {\n    define: {\n      'import.meta.env.LANGUAGE': JSON.stringify(import.meta.env.LANGUAGE),\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"For an internationalized code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (import.meta.env.LANGUAGE === 'en') {\n    return <EntryFoo />;\n  } else if (import.meta.env.LANGUAGE === 'zh') {\n    return <EntryBar />;\n  }\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the environment variable ",(0,s.jsx)(n.code,{children:"LANGUAGE=zh"})," and then running build will eliminate the dead code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (false) {\n  } else if (true) {\n    return <EntryBar />;\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Unused components will not be bundled, and their dependencies will be removed accordingly, resulting in smaller build outputs."})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fenv-vars.mdx"]={toc:[{text:"Default Variables",id:"default-variables",depth:2},{text:"import.meta.env.MODE",id:"importmetaenvmode",depth:3},{text:"import.meta.env.DEV",id:"importmetaenvdev",depth:3},{text:"import.meta.env.PROD",id:"importmetaenvprod",depth:3},{text:"import.meta.env.BASE_URL",id:"importmetaenvbase_url",depth:3},{text:"import.meta.env.ASSET_PREFIX",id:"importmetaenvasset_prefix",depth:3},{text:"process.env.BASE_URL",id:"processenvbase_url",depth:3},{text:"process.env.ASSET_PREFIX",id:"processenvasset_prefix",depth:3},{text:"process.env.NODE_ENV",id:"processenvnode_env",depth:3},{text:"`.env` File",id:"env-file",depth:2},{text:"File Types",id:"file-types",depth:3},{text:"Env Mode",id:"env-mode",depth:3},{text:"Env Directory",id:"env-directory",depth:3},{text:"Example",id:"example",depth:3},{text:"Manually Load Env",id:"manually-load-env",depth:3},{text:"Public Variables",id:"public-variables",depth:2},{text:"Replacement Scope",id:"replacement-scope",depth:3},{text:"Custom Prefix",id:"custom-prefix",depth:3},{text:"Using define",id:"using-define",depth:2},{text:"Replace Identifiers",id:"replace-identifiers",depth:3},{text:"Identifiers Matching",id:"identifiers-matching",depth:3},{text:"process.env Replacement",id:"processenv-replacement",depth:3},{text:"Type Declarations",id:"type-declarations",depth:2},{text:"import.meta.env",id:"importmetaenv",depth:3},{text:"process.env",id:"processenv",depth:3},{text:"Tree Shaking",id:"tree-shaking",depth:2}],title:"Environment Variables",frontmatter:{}}}}]);