"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["3702"],{4131:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(651),a=t(6971);function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmltemplateparameters",children:["html.templateParameters",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltemplateparameters",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, unknown> | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  mountId: string; // the value of `html.mountId` config\n  entryName: string; // entry name\n  assetPrefix: string; // the value of dev.assetPrefix or output.assetPrefix configs\n  compilation: Compilation; // Compilation object of Rspack\n  rspackConfig: Rspack.Configuration; // Rspack config object\n  // generated by html-rspack-plugin\n  htmlPlugin: {\n    tags: {\n      headTags: HtmlTagObject[];\n      bodyTags: HtmlTagObject[];\n    };\n    files: {\n      publicPath: string;\n      js: Array<string>;\n      css: Array<string>;\n      favicon?: string;\n    };\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Define the parameters in the HTML template, corresponding to the ",(0,r.jsx)(n.code,{children:"templateParameters"})," config of ",(0,r.jsx)(n.a,{href:"https://github.com/rspack-contrib/html-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-rspack-plugin"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-usage",children:["Object Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-usage",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If the value of ",(0,r.jsx)(n.code,{children:"templateParameters"})," is an object, it will be merged with the default parameters using ",(0,r.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you need to use the ",(0,r.jsx)(n.code,{children:"foo"})," parameter in an HTML template, you can add the following settings:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, you can read the parameter in the HTML template using ",(0,r.jsx)(n.code,{children:"<%= foo %>"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  window.foo = '<%= foo %>';\n<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The compiled HTML code will be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  window.foo = 'bar';\n<\/script>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-usage",children:["Function Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-usage",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type TemplateParametersFunction = (\n  defaultValue: Record<string, unknown>,\n  utils: { entryName: string },\n) => Record<string, unknown> | void;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"html.templateParameters"})," is of type Function, the function receives two parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": Default ",(0,r.jsx)(n.code,{children:"templateParameters"})," configuration of Rsbuild."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"utils"}),": An object containing the ",(0,r.jsx)(n.code,{children:"entryName"})," field, corresponding to the name of the current entry."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the context of a multi-page application (MPA), you can set different ",(0,r.jsx)(n.code,{children:"templateParameters"})," based on the entry name:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters(defaultValue, { entryName }) {\n      const params = {\n        foo: {\n          ...defaultValue,\n          type: 'Foo',\n        },\n        bar: {\n          ...defaultValue,\n          type: 'Bar',\n          hello: 'world',\n        },\n      };\n      return params[entryName] || defaultValue;\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fhtml%2Ftemplate-parameters.mdx"]={toc:[{text:"Object Usage",id:"object-usage",depth:3},{text:"Function Usage",id:"function-usage",depth:3}],title:"html.templateParameters",frontmatter:{}}}}]);