![Electron-Rspack Banner](https://github.com/user-attachments/assets/cb081787-9ab2-4615-87ad-3bb20e2936c1)

# electron-rspack

<p>
  <a href="https://discord.gg/XsaKEEk4mW"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat-square&logo=discord&colorA=564341&colorB=EDED91" alt="discord channel" /></a>
  <a href="https://npmjs.com/package/@rsbuild/core?activeTab=readme"><img src="https://img.shields.io/npm/v/@rsbuild/core?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a>
  <a href="https://npmcharts.com/compare/@rsbuild/core?minimal=true"><img src="https://img.shields.io/npm/dm/@rsbuild/core.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/@rsbuild/core.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="node version"></a>
  <a href="https://github.com/web-infra-dev/rsbuild/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" /></a>
</p>

English | [Portuguese](./README.pt-BR.md) | [简体中文](./README.zh-CN.md)

electron-rspack is a high-performance Electron build tool powered by Rspack. The easiest way to 10x the bundling speed of an Electron app on Webpack.

## 🚀 Features

electron-rspack offers the following features:

- **Electron-Optimized**: Built specifically for Electron applications, with separate configurations for main and renderer processes.

- **Powered by Rspack**: Leverages the high-performance Rust-based Rspack bundler for blazing fast builds.

- **Zero Configuration**: Start building your Electron application with minimal setup required.

- **TypeScript Support**: First-class support for TypeScript in both main and renderer processes.

- **Hot Module Replacement**: Fast development workflow with HMR support for the renderer process.

- **Production Ready**: Optimized production builds with proper code splitting and minification.

## 📚 Getting Started

To get started with electron-rspack, see the [Quick Start](https://electron-rspack.dev/guide/start/quick-start).

### Install

```bash
npm create electron-rspack@latest
```

## 🎯 Ecosystem

The following diagram illustrates the relationship between Electron-Rspack and other tools in the ecosystem:

![Rspack stack layers](/electron-rspack-stack-layers.png)

## 🦀 Links

- [Rspack](https://github.com/web-infra-dev/rspack): A fast Rust-based web bundler.
- [Rspress](https://github.com/web-infra-dev/rspress): A fast static site generator based on Electron-Rspack.
- [Rsdoctor](https://github.com/web-infra-dev/rsdoctor): A one-stop build analyzer for Rspack and webpack.
- [Rslib](https://github.com/web-infra-dev/rslib): The library build tool powered by Electron-Rspack.
- [Modern.js](https://github.com/web-infra-dev/modern.js): A progressive React framework based on Electron-Rspack.
- [awesome-rspack](https://github.com/web-infra-dev/awesome-rspack): A curated list of awesome things related to Rspack and Electron-Rspack.
- [rspack-examples](https://github.com/rspack-contrib/rspack-examples): Examples for Rspack, Electron-Rspack, Rspress and Rsdoctor.
- [storybook-rsbuild](https://github.com/rspack-contrib/storybook-rsbuild): Storybook builder powered by Electron-Rspack.
- [rsbuild-plugin-template](https://github.com/rspack-contrib/rsbuild-plugin-template)：Use this template to create your own Electron-Rspack plugin.
- [rstack-design-resources](https://github.com/rspack-contrib/rstack-design-resources)：Design resources for Rspack, Electron-Rspack, Rspress and Rsdoctor.

## 🤝 Contribution

> New contributors welcome!

Please read the [Contributing Guide](https://github.com/web-infra-dev/rsbuild/blob/main/CONTRIBUTING.md).

### Contributors

<a href="https://github.com/web-infra-dev/rsbuild/graphs/contributors" target="_blank">
  <table>
    <tr>
      <th colspan="2">
        <br/>
        <img src="https://contrib.rocks/image?repo=web-infra-dev/rsbuild&columns=16&max=96"><br/><br/>
      </th>
    </tr>
    <tr>
      <td>
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=2x3&color_scheme=dark"
          />
          <img 
            alt="Contributors of web-infra-dev/rsbuild" 
            src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=2x3&color_scheme=light"
          />
        </picture>
      </td>
      <td rowspan="2">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=new&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=4x7&color_scheme=dark">
          <img alt="New trends of web-infra-dev" src="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=new&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=4x7&color_scheme=light">
        </picture>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source 
            media="(prefers-color-scheme: dark)" 
            srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=2x3&color_scheme=dark"
          />
          <img 
            alt="Contributors of web-infra-dev/rsbuild" 
            src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_90_days&owner_id=87694465&repo_ids=701750420&image_size=2x3&color_scheme=light"
          />
        </picture>
      </td>
    </tr>
  </table>
</a>

### Code of Conduct

This repo has adopted the ByteDance Open Source Code of Conduct. Please check [Code of Conduct](./CODE_OF_CONDUCT.md) for more details.

## 🧑‍💻 Community

Come and chat with us on [Discord](https://discord.gg/XsaKEEk4mW)! The Rspack / Electron-Rspack team and users are active there, and we're always looking for contributions.

## 🌟 Quality

Electron-Rspack uses [Web Infra QoS](https://web-infra-qos.netlify.app?product=rsbuild&metrics=bundle-size) to observe the trend of key metrics, such as bundle size, compile speed and install size.

## 🙏 Credits

Some of the implementations of Electron-Rspack have drawn inspiration from outstanding projects in the community. We would like to express our gratitude to them:

- The implementation of some plugins is referenced from [create-react-app](https://github.com/facebook/create-react-app).
- Some utility functions are referenced from [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).
- The design of some APIs is referenced from [vite](https://github.com/vitejs/vite).

This Electron-Rspack website is powered by [Netlify](https://www.netlify.com/).

## 📖 License

Electron-Rspack is licensed under the [MIT License](https://github.com/web-infra-dev/rsbuild/blob/main/LICENSE).
