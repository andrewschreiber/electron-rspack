"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["139"],{3836:function(s,e,n){n.r(e),n.d(e,{default:function(){return l}});var i=n(651),r=n(6971);function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",ul:"ul",li:"li",code:"code",blockquote:"blockquote",ol:"ol",pre:"pre",strong:"strong"},(0,r.ah)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"import-css-files",children:["Import CSS Files",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-css-files",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild provides out-of-the-box support for CSS, including PostCSS, CSS Modules, CSS preprocessors, CSS inlining, and CSS compression."}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild also provides several configurations that allow customization of the processing rules for CSS files."}),"\n",(0,i.jsxs)(e.h2,{id:"lightning-css",children:["Lightning CSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lightning-css",children:"#"})]}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(e.div,{className:"rspress-directive-content",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://lightningcss.dev",target:"_blank",rel:"noopener noreferrer",children:"Lightning CSS"})," is a high performance CSS parser, transformer and minifier written in Rust. It supports parsing and transforming many modern CSS features into syntax supported by target browsers, and also provides a better compression ratio.\n"]})})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild uses Rspack's built-in ",(0,i.jsx)(e.a,{href:"https://www.rspack.dev/guide/features/builtin-lightningcss-loader",target:"_blank",rel:"noopener noreferrer",children:"lightningcss-loader"})," to transform CSS code. It automatically reads the project's ",(0,i.jsx)(e.a,{href:"/guide/advanced/browserslist",children:"browserslist"})," config and converts the CSS code to syntax supported by target browsers."]}),"\n",(0,i.jsxs)(e.h3,{id:"features",children:["Features",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Lightning CSS automatically adds vendor prefixes like ",(0,i.jsx)(e.code,{children:"-webkit-"}),", ",(0,i.jsx)(e.code,{children:"-moz-"}),", ",(0,i.jsx)(e.code,{children:"-ms-"}),", etc., so you don't need to manually add prefixes or use the ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," plugin."]}),"\n",(0,i.jsx)(e.li,{children:"Lightning CSS automatically downgrades CSS syntax, allowing you to use modern CSS features such as CSS nesting and custom media queries in your code without worrying about browser compatibility issues."}),"\n",(0,i.jsxs)(e.li,{children:["You can use ",(0,i.jsx)(e.a,{href:"/config/tools/lightningcss-loader",children:"tools.lightningcssLoader"})," to customize the options for ",(0,i.jsx)(e.code,{children:"lightningcss-loader"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Rsbuild has enabled Lightning CSS by default since version ",(0,i.jsx)(e.code,{children:"1.0.1-beta.7"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"disabling-lightning-css",children:["Disabling Lightning CSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#disabling-lightning-css",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["If Lightning CSS does not meet your needs, you can disable Lightning CSS and use ",(0,i.jsx)(e.a,{href:"#using-postcss",children:"PostCSS"})," to transform your CSS code."]}),"\n",(0,i.jsx)(e.p,{children:"Steps:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Set ",(0,i.jsx)(e.a,{href:"/config/tools/lightningcss-loader",children:"tools.lightningcssLoader"})," to ",(0,i.jsx)(e.code,{children:"false"})," to disable the Lightning CSS loader."]}),"\n",(0,i.jsxs)(e.li,{children:["Use ",(0,i.jsx)(e.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-css-minimizer",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-css-minimizer"})," to switch the CSS minifier from Lightning CSS to cssnano or another CSS minifier."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';\n\nexport default {\n  plugins: [pluginCssMinimizer()],\n  tools: {\n    lightningcssLoader: false,\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["Refer to ",(0,i.jsx)(e.a,{href:"#using-postcss",children:"Using PostCSS"})," to configure the PostCSS plugins you need. Here are some commonly used PostCSS plugins:"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),": Adds vendor prefixes."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env",target:"_blank",rel:"noopener noreferrer",children:"postcss-preset-env"}),": Converts modern CSS into something most browsers can understand."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),": Supports CSS nesting."]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"css-minification",children:["CSS Minification",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-minification",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["When building for production, Rsbuild enables Rspack's built-in ",(0,i.jsx)(e.a,{href:"https://rspack.dev/plugins/rspack/lightning-css-minimizer-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"LightningCssMinimizerRspackPlugin"})," plugin to minify CSS assets for better transmission efficiency."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["You can disable CSS minification through the ",(0,i.jsx)(e.a,{href:"/config/output/minify",children:"output.minify"})," option or customize the options for ",(0,i.jsx)(e.code,{children:"LightningCssMinimizerRspackPlugin"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["You can use ",(0,i.jsx)(e.a,{href:"https://github.com/rspack-contrib/rsbuild-plugin-css-minimizer",target:"_blank",rel:"noopener noreferrer",children:"@rsbuild/plugin-css-minimizer"})," to customize the CSS minimizer, switching to ",(0,i.jsx)(e.a,{href:"https://github.com/cssnano/cssnano",target:"_blank",rel:"noopener noreferrer",children:"cssnano"})," or other CSS minimizer."]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"using-postcss",children:["Using PostCSS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild supports transforming CSS code through ",(0,i.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"}),". You can configure PostCSS in the following ways:"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Rsbuild uses ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/postcss-load-config",target:"_blank",rel:"noopener noreferrer",children:"postcss-load-config"})," to load the PostCSS configuration file in the root directory of the current project, such as ",(0,i.jsx)(e.code,{children:"postcss.config.js"}),":"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"module.exports = {\n  'postcss-px-to-viewport': {\n    viewportWidth: 375,\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Configure the postcss-loader through Rsbuild's ",(0,i.jsx)(e.a,{href:"/config/tools/postcss",children:"tools.postcss"})," option, which supports modifying the built-in configuration through a function, for example:"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: (opts) => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["When you configure both the ",(0,i.jsx)(e.code,{children:"postcss.config.js"})," file and the ",(0,i.jsx)(e.code,{children:"tools.postcss"})," option, both will take effect, and the ",(0,i.jsx)(e.code,{children:"tools.postcss"})," option will take precedence."]}),"\n",(0,i.jsxs)(e.li,{children:["If there is no ",(0,i.jsx)(e.code,{children:"postcss.config.js"})," file in the project and the ",(0,i.jsx)(e.code,{children:"tools.postcss"})," option is not configured, Rsbuild will not register ",(0,i.jsx)(e.code,{children:"postcss-loader"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"using-css-modules",children:["Using CSS Modules",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild supports CSS Modules by default, please read the ",(0,i.jsx)(e.a,{href:"/guide/basic/css-modules",children:"Using CSS Modules"})," chapter for the complete usage of CSS Modules."]}),"\n",(0,i.jsxs)(e.h2,{id:"using-css-preprocessors",children:["Using CSS preprocessors",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-preprocessors",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"Rsbuild supports popular CSS preprocessors through plugins, including Sass, Less and Stylus. See how to use them:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-sass",children:"Sass Plugin"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-less",children:"Less Plugin"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/plugins/list/plugin-stylus",children:"Stylus Plugin"})}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"css-in-js",children:["CSS-in-JS",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-in-js",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Please read the ",(0,i.jsx)(e.a,{href:"/guide/framework/react#css-in-js",children:"React - CSS-in-JS"})," section to learn how to use common CSS-in-JS libraries in Rsbuild."]}),"\n",(0,i.jsxs)(e.h2,{id:"inline-css-files",children:["Inline CSS Files",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#inline-css-files",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["By default, Rsbuild will extract CSS into a separate ",(0,i.jsx)(e.code,{children:".css"})," file and output it to the dist directory."]}),"\n",(0,i.jsxs)(e.p,{children:["If you want to inline styles into your JS file, you can set ",(0,i.jsx)(e.a,{href:"/config/output/inject-styles",children:"output.injectStyles"})," to true to disable CSS extraction logic. When the JS file is requested by the browser, JS dynamically inserts the ",(0,i.jsx)(e.code,{children:"<style>"})," tag into the Html to load the CSS styles."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"export default {\n  output: {\n    injectStyles: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"This will increase the size of your JS Bundle, so it is usually not recommended to disable the CSS extraction."}),"\n",(0,i.jsxs)(e.h2,{id:"import-css-in-node_modules",children:["Import CSS in node_modules",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-css-in-node_modules",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["Rsbuild supports importing CSS files in ",(0,i.jsx)(e.code,{children:"node_modules"}),"."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Import in a JS file:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="src/index.js"',children:"/* reference normalize.css */\n/* https://github.com/necolas/normalize.css */\nimport 'normalize.css';\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Import in a CSS file:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",meta:'title="src/index.css"',children:"@import 'normalize.css';\n\nbody {\n  /* */\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["In Sass and Less files, it is also allowed to add the ",(0,i.jsx)(e.code,{children:"~"})," prefix to resolve style files in ",(0,i.jsx)(e.code,{children:"node_modules"}),". However, this is a ",(0,i.jsx)(e.strong,{children:"deprecated feature"})," and it is recommended to remove the ",(0,i.jsx)(e.code,{children:"~"})," prefix from the code."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-scss",meta:'title="src/index.scss"',children:"@import 'normalize.css';\n"})})]})}function o(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(t,{...s})}):t(s)}let l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fcss-usage.mdx"]={toc:[{text:"Lightning CSS",id:"lightning-css",depth:2},{text:"Features",id:"features",depth:3},{text:"Disabling Lightning CSS",id:"disabling-lightning-css",depth:3},{text:"CSS Minification",id:"css-minification",depth:2},{text:"Using PostCSS",id:"using-postcss",depth:2},{text:"Using CSS Modules",id:"using-css-modules",depth:2},{text:"Using CSS preprocessors",id:"using-css-preprocessors",depth:2},{text:"CSS-in-JS",id:"css-in-js",depth:2},{text:"Inline CSS Files",id:"inline-css-files",depth:2},{text:"Import CSS in node_modules",id:"import-css-in-node_modules",depth:2}],title:"Import CSS Files",frontmatter:{}}}}]);