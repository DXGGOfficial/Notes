import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DX's Notes",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023.4-${new Date().getFullYear()}.${new Date().getMonth() + 1}`,
    },
    lastUpdatedText: '更新日期',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    outlineTitle: '索引',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    editLink: {
      pattern: 'https://github.com/dxggofficial/Notes/edit/main/docs/:path',
      text: '在GitHub编辑此页',
    },
    nav: [
      { text: '主页', link: '/' }
    ],

    sidebar: [
      {
        text: 'Git',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '使用 GPG 签名你的 Git Commit', link: '/Git/使用 GPG 签名你的 Git Commit' },
          { text: '配置 SSH Key 免密登录', link: '/Git/配置 SSH Key 免密登录' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DXGGOfficial/Notes' }
    ]
  }
})
