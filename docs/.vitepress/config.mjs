import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题和描述
  title: "刘承奕的技术博客",
  description: "记录学习C++、计算机和生活的日常",

  // 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'C++学习笔记', link: '/cpp-notes' },
      { text: '生活随笔', link: '/life-notes' }
    ],

    // 侧边栏（根据不同分类展示文章）
    sidebar: {
      '/cpp-notes/': [
        {
          text: 'C++ 基础入门',
          items: [
            { text: '环境搭建', link: '/cpp-notes/01-setup' },
            { text: 'Hello World', link: '/cpp-notes/02-hello' }
          ]
        }
      ],
      '/life-notes/': [
        {
          text: '生活记录',
          items: [
            { text: '第一次部署博客', link: '/life-notes/01-deploy-blog' }
          ]
        }
      ]
    },

    // 社交链接（可选）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengyi314' }
    ]
  }
})