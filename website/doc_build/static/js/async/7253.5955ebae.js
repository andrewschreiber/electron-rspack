"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["7253"],{1137:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var r=s(651),i=s(6971),t=s(183);function o(e){let n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",img:"img",strong:"strong",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"announcing-rsbuild-01",children:["Announcing Rsbuild 0.1",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#announcing-rsbuild-01",children:"#"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"November 22, 2023"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.rspack.dev/rsbuild/rsbuild-banner-v0-1.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["We are pleased to announce ",(0,r.jsx)(n.strong,{children:"the release of"})," ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/rsbuild",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})})," ",(0,r.jsx)(n.strong,{children:"0.1!"})]}),"\n",(0,r.jsxs)(n.p,{children:["Rsbuild is an Rspack-based build tool, designed to be ",(0,r.jsx)(n.strong,{children:"an enhanced Rspack"})," ",(0,r.jsx)(n.strong,{children:"CLI"})," that is both more user friendly and out-of-the-box. Rsbuild is the ideal solution for those looking to migrate from Webpack to Rspack. It significantly reduces configuration by 90% while offering a 10x build speed."]}),"\n",(0,r.jsxs)(n.h3,{id:"-performance",children:["\uD83D\uDE80 Performance",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-performance",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The build performance of Rsbuild is on par with native Rspack. Considering that Rsbuild includes more out-of-the-box features, its performance will be slightly lower than Rspack."}),"\n",(0,r.jsx)(n.p,{children:"This is the time it takes to build 1000 React components:"}),"\n","\n",(0,r.jsx)(t.r,{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The data is based on the benchmark built by the Farm team, more info in ",(0,r.jsx)(n.a,{href:"https://github.com/rspack-contrib/performance-compare",target:"_blank",rel:"noopener noreferrer",children:"performance-compare"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"-features",children:["\uD83D\uDD25 Features",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-features",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Rsbuild has the following features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Easy to Configure"}),": One of the goals of Rsbuild is to provide out-of-the-box build capabilities for Rspack users, allowing developers to start a web project with zero configuration. In addition, Rsbuild provides semantic build configuration to reduce the learning curve for Rspack configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance Oriented"}),": Rsbuild integrates high-performance Rust-based tools from the community, including ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),", ",(0,r.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," and ",(0,r.jsx)(n.a,{href:"https://lightningcss.dev/",target:"_blank",rel:"noopener noreferrer",children:"Lightning CSS"}),", to deliver top-notch build speed and development experience. Compared to webpack-based tools like Create React App and Vue CLI, Rsbuild provides 5 to 10 times faster build performance and lighter dependencies."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Plugin Ecosystem"}),": Rsbuild has a lightweight plugin system and includes a range of high-quality official plugins. Furthermore, Rsbuild is compatible with most webpack plugins and all Rspack plugins, allowing users to leverage existing community or in-house plugins in Rsbuild without the need for rewriting code."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Stable Artifacts"}),": Rsbuild is designed with a strong focus on the stability of build artifacts. It ensures high consistency between artifacts in the development and production builds, and automatically completes syntax downgrading and polyfill injection. Rsbuild also provides plugins for type checking and artifact syntax validation to prevent quality and compatibility issues in production code."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Framework Agnostic"}),": Rsbuild is not coupled with any front-end UI framework. It supports frameworks like React, Vue, Svelte, Solid and Preact through plugins, and plans to support more UI frameworks from the community in the future."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"-next-step",children:["\uD83D\uDCA1 Next Step",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-next-step",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Currently, Rsbuild is still evolving rapidly and plans to introduce many more powerful new features."}),"\n",(0,r.jsxs)(n.p,{children:["For example, we are developing ",(0,r.jsx)(n.strong,{children:"Rsdoctor"}),", a robust build analysis tool that can be used with all Rspack and Webpack projects. It will provide a visual user interface to help developers analyze build times, duplicate dependencies, code transformation processes, and more, making it easier to locate and resolve build issues."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.rspack.dev/rsbuild/assets/rsdoctor-preview.jpg",alt:"Rsdoctor preview"})}),"\n",(0,r.jsx)(n.p,{children:"We will be releasing the first working version of Rsdoctor soon. Thereafter, Rsbuild will iterate in sync with Rspack, with plans to release version 1.0 in the first half of 2024."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}let l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcommunity%2Freleases%2Fv0-1.mdx"]={toc:[{text:"\uD83D\uDE80 Performance",id:"-performance",depth:3},{text:"\uD83D\uDD25 Features",id:"-features",depth:3},{text:"\uD83D\uDCA1 Next Step",id:"-next-step",depth:3}],title:"Announcing Rsbuild 0.1",frontmatter:{published_at:"2023-11-22T08:00:00.000Z"}}}}]);