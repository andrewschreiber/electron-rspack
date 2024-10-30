"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["3053"],{5774:function(e,n,i){i.r(n),i.d(n,{default:function(){return a}});var t=i(651),l=i(6971);function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",div:"div",h2:"h2",h3:"h3"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  meta, // Corresponds to `html.meta` config\n  title, // Corresponds to `html.title` config\n  inject, // Corresponds to `html.inject` config\n  favicon, // Corresponds to `html.favicon` config\n  template, // Corresponds to `html.template` config\n  filename, // Generated based on `output.distPath` and `entryName`\n  templateParameters, // Corresponds to `html.templateParameters` config\n  chunks: [entryName],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The configs of ",(0,t.jsx)(n.a,{href:"https://github.com/rspack-contrib/html-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-rspack-plugin"})," can be modified through ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Rsbuild internally implements HTML-related features based on ",(0,t.jsx)(n.a,{href:"https://github.com/rspack-contrib/html-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-rspack-plugin"}),". It is a fork of ",(0,t.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"}),", with the same features and options."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["If you need to modify options such as ",(0,t.jsx)(n.code,{children:"title"}),", ",(0,t.jsx)(n.code,{children:"template"}),", ",(0,t.jsx)(n.code,{children:"templateParameters"}),", ",(0,t.jsx)(n.code,{children:"meta"}),", it is recommended to use the corresponding HTML configurations provided by Rsbuild first, such as ",(0,t.jsx)(n.a,{href:"/config/html/title",children:"html.title"}),", ",(0,t.jsx)(n.a,{href:"/config/html/template",children:"html .template"})," etc."]}),"\n",(0,t.jsxs)(n.p,{children:["This is because Rsbuild provides some internal optimization processing for these HTML configurations. For example, if the HTML template used by the current project already contains the ",(0,t.jsx)(n.code,{children:"<title>"})," tag, then ",(0,t.jsx)(n.code,{children:"html.title"})," will not take effect.\n"]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"})," is ",(0,t.jsx)(n.code,{children:"Object"})," type, the value will be merged with the default config via ",(0,t.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"})," is a Function:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The first parameter is the default config, which can be modified directly."}),"\n",(0,t.jsx)(n.li,{children:"The second parameter is also an object, containing the entry name and the entry value."}),"\n",(0,t.jsx)(n.li,{children:"The Function can return a new object as the final config."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"disable-html",children:["Disable HTML",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-html",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"})," to ",(0,t.jsx)(n.code,{children:"false"})," can disable the built-in ",(0,t.jsx)(n.code,{children:"html-rspack-plugin"})," in Rsbuild, and no HTML files will be generated."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"modify-html-file-name",children:["Modify HTML File Name",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-html-file-name",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"filename"})," option can be used to modify the file name of the HTML output."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, in production mode, a ",(0,t.jsx)(n.code,{children:"hash"})," can be added to the file name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName }) {\n      if (process.env.NODE_ENV === 'production') {\n        config.filename = `${entryName}.[contenthash:8].html`;\n      }\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"html-minification",children:["HTML Minification",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-minification",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Rsbuild currently does not minify HTML files. If you need to minify HTML files, you can use the ",(0,t.jsx)(n.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-html-minifier-terser",target:"_blank",rel:"noopener noreferrer",children:"rsbuild-plugin-html-minifier-terser plugin"}),"."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let a=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfig%2Ftools%2Fhtml-plugin.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:2},{text:"Function Type",id:"function-type",depth:2},{text:"Disable HTML",id:"disable-html",depth:2},{text:"Example",id:"example",depth:2},{text:"Modify HTML File Name",id:"modify-html-file-name",depth:3},{text:"HTML Minification",id:"html-minification",depth:2}],title:"tools.htmlPlugin",frontmatter:{}}}}]);