"use strict";(self.webpackChunkelectron_rspack_website=self.webpackChunkelectron_rspack_website||[]).push([["3756"],{8878:function(e,n,s){s.r(n),s.d(n,{default:function(){return a}});var i=s(651),r=s(6971);function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h2:"h2",blockquote:"blockquote",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlappicon",children:["html.appIcon",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlappicon",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type AppIconItem = {\n  src: string;\n  size: number;\n  target?: 'apple-touch-icon' | 'web-app-manifest';\n};\n\ntype AppIcon = {\n  name?: string;\n  icons: AppIconItem[];\n  filename?: string;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set the web application icons to display when added to the home screen of a mobile device:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate the web app manifest file and its ",(0,i.jsx)(n.code,{children:"icons"})," field."]}),"\n",(0,i.jsxs)(n.li,{children:["Generate the ",(0,i.jsx)(n.code,{children:"apple-touch-icon"})," and ",(0,i.jsx)(n.code,{children:"manifest"})," tags in the HTML file."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,i.jsx)(n.p,{children:"Refer to the following documents for more information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer",children:"MDN - Web app manifests"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs",target:"_blank",rel:"noopener noreferrer",children:"How to Favicon: Six files that fit most needs"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"For display on different devices, you will need to prepare several icons of different sizes."}),"\n",(0,i.jsxs)(n.p,{children:["The most commonly used icon sizes are ",(0,i.jsx)(n.code,{children:"192x192"})," and ",(0,i.jsx)(n.code,{children:"512x512"}),", and you can customize the icon sizes and quantities to suit your needs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    appIcon: {\n      name: 'My Website',\n      icons: [\n        { src: './src/assets/icon-192.png', size: 192 },\n        { src: './src/assets/icon-512.png', size: 512 },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"After compilation, the following tags will be automatically generated in the HTML:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<link rel="manifest" href="/manifest.webmanifest" />\n<link\n  rel="apple-touch-icon"\n  sizes="180x180"\n  href="/static/image/icon-192.png"\n/>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"manifest.webmanifest"})," is a JSON file that contains information about the application's name, icons, and other details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "My Website",\n  "icons": [\n    {\n      "src": "/static/image/icon-192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "/static/image/icon-512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Icon size"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["For Chromium, you must provide at least a 192x192 pixel icon and a 512x512 pixel icon. If only those two icon sizes are provided, Chrome automatically scales the icons to fit the device. If you'd prefer to scale your own icons, and adjust them for pixel-perfection, provide icons in increments of ",(0,i.jsx)(n.code,{children:"48dp"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"name",children:["name",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The name of the application that will be displayed when it is added to the home screen of the mobile device. If not set, the ",(0,i.jsx)(n.code,{children:"manifest.webmanifest"})," file will not be generated."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For more details, see ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/name",target:"_blank",rel:"noopener noreferrer",children:"Web app manifests - name"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"icons",children:["icons",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#icons",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"AppIconItem[]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The list of icons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"src"})," is the path of the icon, which can be a URL, an absolute file path, or a relative path to the project ",(0,i.jsx)(n.a,{href:"/config/root",children:"root"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"})," is the size of the icon in pixels."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"})," refers to the intended target for the icon, which can be either ",(0,i.jsx)(n.code,{children:"apple-touch-icon"})," or ",(0,i.jsx)(n.code,{children:"web-app-manifest"}),". If ",(0,i.jsx)(n.code,{children:"target"})," is not set, by default, the manifest file will include all icons, while the ",(0,i.jsx)(n.code,{children:"apple-touch-icon"})," tags will only include icons smaller than ",(0,i.jsx)(n.code,{children:"200x200"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example-1",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src"})," can be set to an absolute path:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'node:path';\n\nexport default {\n  html: {\n    appIcon: {\n      name: 'My Website',\n      icons: [\n        { src: path.resolve(__dirname, './assets/icon-192.png'), size: 192 },\n        { src: path.resolve(__dirname, './assets/icon-512.png'), size: 512 },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"target"})," to specify the target for the icon:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    appIcon: {\n      name: 'My Website',\n      icons: [\n        {\n          src: './src/assets/icon-180.png',\n          size: 180,\n          target: 'apple-touch-icon',\n        },\n        {\n          src: './src/assets/icon-192.png',\n          size: 192,\n          target: 'web-app-manifest',\n        },\n        {\n          src: './src/assets/icon-512.png',\n          size: 512,\n          target: 'web-app-manifest',\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"filename",children:["filename",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"'manifest.webmanifest'"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The filename of the manifest file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    appIcon: {\n      filename: 'manifest.json',\n    },\n  },\n};\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}let a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fconfig%2Fhtml%2Fapp-icon.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"name",id:"name",depth:2},{text:"icons",id:"icons",depth:2},{text:"Example",id:"example-1",depth:3},{text:"filename",id:"filename",depth:3}],title:"html.appIcon",frontmatter:{}}}}]);