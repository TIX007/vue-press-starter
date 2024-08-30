import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
  
  bundler: viteBundler(),

  lang: 'zh-CN',
  title: '发票模版组件',
  description: '电子发票的vue预览模板，支持电子发票、机动车销售统一发票和二手车销售统一发票',

  theme: defaultTheme({
    lastUpdated: '最后一次更新',
    repo: 'TIX007/fengling-ui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    repoLabel: '查看源码',
    search: true,
    searchMaxSuggestions: 10,

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          collapsible: true,
          children: [
            ''
          ],
        },
        {
          text: '组件',
          collapsable: true,
          prefix: 'guide/',
          children: [
            '/guide/InvoiceCar/index.md',
            '/guide/InvoiceUsedCar/index.md',
            '/guide/loading/index.md',
          ],
        }
      ],
      '/': [
        {
          text: '组件',
          path: '/guide/',
        }
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "组件", prefix: "/guide/", children: ['/guide/InvoiceCar/index.md', '/guide/InvoiceUsedCar/index.md'], },
      {
        text: "外链",
        children: [
          { text: "Vue2组件库", link: "https://tix007.github.io/Vue2-FengLing-UI/" },
          { text: "Vue3组件库", link: "https://tix007.github.io/vue3-liuying-ui/" }
        ]
      }
    ],
    smoothScroll: true,
  }),
})
