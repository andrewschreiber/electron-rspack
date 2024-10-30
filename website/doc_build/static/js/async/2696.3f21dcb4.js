"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["2696"],{1022:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var t=n(651),s=n(6971);function a(e){let r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"outputcharset",children:["output.charset",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcharset",children:"#"})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Type:"})," ",(0,t.jsx)(r.code,{children:"'ascii' | 'utf8'"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"'utf8'"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"charset"})," config allows you to specify the ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Character_encoding",target:"_blank",rel:"noopener noreferrer",children:"character encoding"})," for output files to ensure they are displayed correctly in different environments."]}),"\n",(0,t.jsxs)(r.h2,{id:"utf8",children:["UTF8",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#utf8",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["By default, the output of Rsbuild is encoded in ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/UTF-8",target:"_blank",rel:"noopener noreferrer",children:"UTF-8"}),", which is the most commonly used character encoding in web applications."]}),"\n",(0,t.jsxs)(r.p,{children:["When your web server returns the resource, please ensure that it sends the correct ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type",target:"_blank",rel:"noopener noreferrer",children:"Content-Type"})," response header so that the browser can parse it correctly."]}),"\n",(0,t.jsxs)(r.h2,{id:"ascii",children:["ASCII",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ascii",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["If you want the output files to use ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/ASCII",target:"_blank",rel:"noopener noreferrer",children:"ASCII"})," encoding, you can set this in the config file like this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    charset: 'ascii',\n  },\n};\n"})}),"\n",(0,t.jsx)(r.p,{children:"When using ASCII encoding, all non-ASCII characters are escaped with backslashes, which may make the files slightly larger and harder to read."}),"\n",(0,t.jsxs)(r.h2,{id:"notes",children:["Notes",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Currently, the ",(0,t.jsx)(r.code,{children:"charset"})," option only affects files compiled with ",(0,t.jsx)(r.a,{href:"/guide/basic/configure-swc",children:"SWC"}),", which by default includes JavaScript and TypeScript files. However, HTML and CSS files are not affected by the ",(0,t.jsx)(r.code,{children:"charset"})," option."]}),"\n",(0,t.jsxs)(r.p,{children:["For HTML files, Rsbuild adds a ",(0,t.jsx)(r.code,{children:'<meta charset="utf-8">'})," tag by default. You can change this using the ",(0,t.jsx)(r.a,{href:"/config/html/meta",children:"html.meta"})," option."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfig%2Foutput%2Fcharset.mdx"]={toc:[{text:"UTF8",id:"utf8",depth:2},{text:"ASCII",id:"ascii",depth:2},{text:"Notes",id:"notes",depth:2}],title:"output.charset",frontmatter:{}}}}]);