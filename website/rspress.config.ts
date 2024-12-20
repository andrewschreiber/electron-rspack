import path from 'node:path';
import { pluginRss } from '@rspress/plugin-rss';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
import pluginSitemap from 'rspress-plugin-sitemap';
import { defineConfig } from 'rspress/config';
import { rsbuildPluginOverview } from './theme/rsbuildPluginOverview';

const siteUrl = 'https://electron-rspack.dev';

export default defineConfig({
  plugins: [
    pluginSitemap({
      domain: siteUrl,
    }),
    pluginFontOpenSans(),
    pluginRss({
      siteUrl,
      feed: [
        {
          id: 'releases-rss',
          test: '/community/releases/v',
          title: 'Rsbuild Releases',
          language: 'en',
          output: {
            type: 'rss',
            filename: 'releases-rss.xml',
          },
        },
        {
          id: 'releases-atom',
          test: '/community/releases/v',
          title: 'Rsbuild Releases',
          language: 'en',
          output: {
            type: 'atom',
          },
        },
        {
          id: 'releases-rss-zh',
          test: '/zh/community/releases/v',
          title: 'Rsbuild Releases',
          language: 'zh-CN',
          output: {
            type: 'rss',
            filename: 'releases-rss-zh.xml',
          },
        },
        {
          id: 'releases-atom-zh',
          test: '/zh/community/releases/v',
          title: 'Rsbuild Releases',
          language: 'zh-CN',
          output: {
            type: 'atom',
          },
        },
      ],
    }),
  ],
  root: path.join(__dirname, 'docs'),
  lang: 'en',
  base: '/',
  title: 'Electron-Rspack',
  icon: 'https://assets.rspack.dev/rsbuild/favicon-128x128.png',
  logo: {
    light: '/navbar-logo-light-electron-rspack.png',
    dark: '/navbar-logo-dark-electron-rspack.png',
  },
  ssg: {
    strict: true,
  },
  markdown: {
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
    // exclude document fragments from routes
    exclude: ['**/zh/shared/**', '**/en/shared/**', './theme', './src'],
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/andrewschreiber/electron-rspack',
      },
      {
        icon: 'x',
        mode: 'link',
        content: 'https://twitter.com/rspack_dev',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/XsaKEEk4mW',
      },
    ],
    locales: [
      {
        lang: 'en',
        label: 'English',
        title: 'Electron-Rspack',
        description: 'The Rspack-based build tool for the web',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/web-infra-dev/rsbuild/tree/main/website/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
      {
        lang: 'zh',
        label: '简体中文',
        title: 'Electron-Rspack',
        outlineTitle: '目录',
        prevPageText: '上一页',
        nextPageText: '下一页',
        description: '基于 Rspack 的 Web 构建工具',
        editLink: {
          docRepoBaseUrl:
            'https://github.com/web-infra-dev/rsbuild/tree/main/website/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
      },
    ],
  },
  builderConfig: {
    dev: {
      lazyCompilation: true,
    },
    plugins: [
      rsbuildPluginOverview,
      pluginGoogleAnalytics({ id: 'G-L6BZ6TKW4R' }),
      pluginOpenGraph({
        title: 'Electron-Rspack',
        type: 'website',
        url: siteUrl,
        image:
          'https://assets.rspack.dev/rsbuild/assets/rsbuild-og-image-v1-0.png',
        description: 'The Rspack-based build tool',
        twitter: {
          site: '@rspack_dev',
          card: 'summary_large_image',
        },
      }),
    ],
    source: {
      alias: {
        '@components': path.join(__dirname, '@components'),
        '@en': path.join(__dirname, 'docs/en'),
        '@zh': path.join(__dirname, 'docs/zh'),
        '@assets': path.join(__dirname, 'assets'),
      },
    },
    server: {
      open: 'http://localhost:<port>/',
    },
    html: {
      tags: [
        // for baidu SEO verification
        {
          tag: 'meta',
          attrs: {
            name: 'baidu-site-verification',
            content: 'codeva-mYbzBtlg6o',
          },
        },
      ],
      appIcon: {
        name: 'Electron-Rspack',
        icons: [
          {
            src: 'https://assets.rspack.dev/rsbuild/rsbuild-logo-192x192.png',
            size: 192,
          },
          {
            src: 'https://assets.rspack.dev/rsbuild/rsbuild-logo-512x512.png',
            size: 512,
          },
        ],
      },
    },
  },
});
