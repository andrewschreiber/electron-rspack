"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["4414"],{6563:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var r=s(651),a=s(6971);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",blockquote:"blockquote",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"upgrade-rsbuild",children:["Upgrade Rsbuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-rsbuild",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section explains how to upgrade the project's Rsbuild dependencies to the latest version."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Please see ",(0,r.jsx)(n.a,{href:"/community/releases/index",children:"Releases"})," to understand the Rsbuild release strategy."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"using-taze",children:["Using Taze",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-taze",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["We recommend using ",(0,r.jsx)(n.a,{href:"https://github.com/antfu-collective/taze",target:"_blank",rel:"noopener noreferrer",children:"Taze"})," to upgrade the Rsbuild version. Taze is a CLI tool for updating npm dependencies."]}),"\n",(0,r.jsxs)(n.h3,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to upgrade all dependencies that include ",(0,r.jsx)(n.code,{children:"rsbuild"})," in their names:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx taze --include /rsbuild/ -w\n"})}),"\n",(0,r.jsx)(n.p,{children:"The result will look similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rsbuild - 3 patch\n\n  @rsbuild/core               dev  ~2mo  ^0.6.0  →  ^0.6.15\n  @rsbuild/plugin-react       dev  ~2mo  ^0.6.0  →  ^0.6.15\n  @rsbuild/plugin-type-check  dev  ~2mo  ^0.6.0  →  ^0.6.15\n\nℹ changes written to package.json, run npm i to install updates.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also adjust the ",(0,r.jsx)(n.code,{children:"include"})," pattern to match specific packages, for example, to upgrade only packages under the ",(0,r.jsx)(n.code,{children:"@rsbuild"})," scope:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx taze --include /@rsbuild/ -w\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"options",children:["Options",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Here are some examples of using taze options."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In a monorepo, you can add the ",(0,r.jsx)(n.code,{children:"-r"})," option to upgrade recursively:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx taze --include /rsbuild/ -w -r\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"-l"})," to upgrade locked versions:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx taze --include /rsbuild/ -w -l\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To upgrade to a major version:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx taze major --include /rsbuild/ -w\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For more options, please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/antfu-collective/taze",target:"_blank",rel:"noopener noreferrer",children:"taze documentation"}),"."]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fupgrade-rsbuild.mdx"]={toc:[{text:"Using Taze",id:"using-taze",depth:2},{text:"Usage",id:"usage",depth:3},{text:"Options",id:"options",depth:3}],title:"Upgrade Rsbuild",frontmatter:{}}}}]);