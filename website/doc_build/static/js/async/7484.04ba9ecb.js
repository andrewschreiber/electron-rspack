"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["7484"],{9674:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var s=n(651),a=n(6971);function r(e){let t=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"htmltags",children:["html.tags",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltags",children:"#"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type TagsConfig = HtmlTag | HtmlTagHandler | Array<HtmlTag | HtmlTagHandler>;\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Default:"})," ",(0,s.jsx)(t.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Modifies the tags that are injected into the HTML page."}),"\n",(0,s.jsxs)(t.h2,{id:"tag-object",children:["Tag Object",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#tag-object",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type HtmlTag = {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /**\n   * Sets the insertion position of the current tag relative to the original tags.\n   * If set to `true` it will be inserted after the original tags, if set to `false` it will be inserted before the original tags.\n   * @default true\n   */\n  append?: boolean;\n  /**\n   * Whether to add tags to head\n   * Enable by default only for elements that are allowed to be included in the `head` tag.\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"A tag object can be used to describe the tag to be injected and the location of the injection can be controlled by the parameters."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://example.com/',\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It will add a ",(0,s.jsx)(t.code,{children:"script"})," tag to the end of the ",(0,s.jsx)(t.code,{children:"head"})," of the HTML:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<html>\n  <head>\n    \x3c!-- some other headTags... --\x3e\n    <script src="https://example.com/a.js?8327ec63"><\/script>\n  </head>\n  <body>\n    \x3c!-- some other bodyTags... --\x3e\n  </body>\n</html>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Fields in the tag that indicate the path to the external assets are affected by the ",(0,s.jsx)(t.code,{children:"publicPath"})," and ",(0,s.jsx)(t.code,{children:"hash"})," options. These fields include ",(0,s.jsx)(t.code,{children:"src"})," for the ",(0,s.jsx)(t.code,{children:"script"})," tag and ",(0,s.jsx)(t.code,{children:"href"})," for the ",(0,s.jsx)(t.code,{children:"link"})," tag."]}),"\n",(0,s.jsxs)(t.p,{children:["Enabling ",(0,s.jsx)(t.code,{children:"publicPath"})," will splice the ",(0,s.jsx)(t.a,{href:"/config/output/asset-prefix",children:"output.assetPrefix"})," field before the attribute representing the path in the tag. And the ",(0,s.jsx)(t.code,{children:"hash"})," field causes the filename to be followed by an additional hash query to control browser caching, with the same hash string as the HTML file product."]}),"\n",(0,s.jsx)(t.p,{children:"You can also pass functions to those fields to control the path joining."}),"\n",(0,s.jsxs)(t.h3,{id:"set-tag-insertion-position",children:["Set tag insertion position",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-tag-insertion-position",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["The final insertion position of the tag is determined by the ",(0,s.jsx)(t.code,{children:"head"})," and ",(0,s.jsx)(t.code,{children:"append"})," options, and two elements with the same configuration will be inserted into the same area and hold their relative positions to each other."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"append"}),": used to describe whether the tag is added to the end or beginning of the original tags"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"head"}),": used to describe whether to add this tag to the HTML ",(0,s.jsx)(t.code,{children:"<head>"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The final insertion position on the page is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    \x3c!-- tags with `{ head: true, append: false }` here. --\x3e\n    \x3c!-- some other headTags... --\x3e\n    \x3c!-- tags with `{ head: true, append: true }` here. --\x3e\n  </head>\n  <body>\n    \x3c!-- tags with `{ head: false, append: false }` here. --\x3e\n    \x3c!-- some other bodyTags... --\x3e\n    \x3c!-- tags with `{ head: false, append: true }` here. --\x3e\n  </body>\n</html>\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"tags-handler",children:["Tags Handler",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#tags-handler",children:"#"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type HtmlTagContext = {\n  hash: string;\n  entryName: string;\n  outputName: string;\n  publicPath: string;\n};\n\ntype HtmlTagHandler = (\n  tags: HtmlTag[],\n  context: HtmlTagContext,\n) => HtmlTag[] | void;\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"html.tags"})," can also accept functions that can arbitrarily modify tags by writing logic to the callback, often used to ensure the relative position of tags while inserting them."]}),"\n",(0,s.jsx)(t.p,{children:"The callback function accepts a tag list as an argument and needs to modify or return a new tag array directly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    tags: [\n      (tags) => [{ tag: 'script', attrs: { src: 'a.js' } }, ...tags],\n      (tags) => {\n        // Modify 'a.js' tag\n        const target = tags.find((tag) => tag.attrs?.src === 'a.js');\n        if (target) {\n          target.attrs!.defer = true;\n        }\n      },\n      (tags) => {\n        // Insert 'b.js' after 'a.js'\n        const targetIndex = tags.findIndex((tag) => tag.attrs?.src === 'a.js');\n\n        tags.splice(targetIndex + 1, 0, {\n          tag: 'script',\n          attrs: { src: 'd.js' },\n        });\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"The HTML file will look like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<html>\n  <head>\n    <script src="/a.js" defer><\/script>\n    <script src="/d.js"><\/script>\n    \x3c!-- some other headTags... --\x3e\n  </head>\n  <body>\n    \x3c!-- some bodyTags... --\x3e\n  </body>\n</html>\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"limitation",children:["Limitation",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["This configuration is used to modify the content of HTML files after Rsbuild completes building, and does not resolve or parse new modules. It cannot be used to import un-compiled source code files. Also cannot replace configurations such as ",(0,s.jsx)(t.a,{href:"/config/source/pre-entry",children:"source.preEntry"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For example, for the following project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"web-app\n├── src\n│   ├── index.tsx\n│   └── polyfill.ts\n└── rsbuild.config.ts\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default {\n  output: {\n    assetPrefix: 'https://example.com/',\n  },\n  html: {\n    tags: [{ tag: 'script', attrs: { src: './src/polyfill.ts' } }],\n  },\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The tag object here will be directly added to the HTML file after processing, but the ",(0,s.jsx)(t.code,{children:"polyfill.ts"})," will not be transpiled or bundled, so there will be a 404 error when processing this script in the application."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<body>\n  <script src="https://example.com/src/polyfill.ts"><\/script>\n</body>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Reasonable use cases include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Injecting static assets with ",(0,s.jsx)(t.strong,{children:"determined paths"})," on CDN."]}),"\n",(0,s.jsx)(t.li,{children:"Injecting inline scripts that need to be loaded on the first screen."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, the usage of the following example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"web-app\n├── src\n│   └── index.tsx\n├── public\n│   └── service-worker.js\n└── rsbuild.config.ts\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"function report() {\n  fetch('https://www.example.com/report');\n}\n\nexport default {\n  html: {\n    output: {\n      assetPrefix: 'https://example.com/',\n    },\n    tags: [\n      // Inject asset from the `public` directory.\n      { tag: 'script', attrs: { src: 'service-worker.js' } },\n      // Inject asset from other CDN url.\n      {\n        tag: 'script',\n        publicPath: false,\n        attrs: { src: 'https://cdn.example.com/foo.js' },\n      },\n      // Inject inline script.\n      {\n        tag: 'script',\n        children: report.toString() + '\\nreport()',\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"The result will seems like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<body>\n  <script src="https://example.com/service-worker.js"><\/script>\n  <script src="https://cdn.example.com/foo.js"><\/script>\n  <script>\n    function report() {\n      fetch(\'https://www.example.com/report\');\n    }\n    report();\n  <\/script>\n</body>\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfig%2Fhtml%2Ftags.mdx"]={toc:[{text:"Tag Object",id:"tag-object",depth:2},{text:"Set tag insertion position",id:"set-tag-insertion-position",depth:3},{text:"Tags Handler",id:"tags-handler",depth:2},{text:"Limitation",id:"limitation",depth:2}],title:"html.tags",frontmatter:{}}}}]);