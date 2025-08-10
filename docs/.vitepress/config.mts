import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import { MuTableResolver } from '@muyianking/table'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 导入主题的配置
import { blogTheme } from './blog-theme'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: true,
    },
    plugins: [
      AutoImport({
        imports: ['vue'],
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        directoryAsNamespace: true,
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
          MuTableResolver()
        ]
      })
    ],
  },
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: 'zh-cn',
  base: '/blog/',
  title: '慕易安',
  description: '慕易安的博客、文档',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/44827414?s=400&u=a926e3e9e5f77f818170491d8880959f6e570d70&v=4' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 4],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    darkModeSwitchLabel: "主题",
    // 设置logo
    logo: 'https://avatars.githubusercontent.com/u/44827414?s=400&u=a926e3e9e5f77f818170491d8880959f6e570d70&v=4',
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/study/home' },
      { text: '关于作者', link: 'https://github.com/MuyianKing' }
    ],
    sidebar: {
      '/study': [
        // { text: '测试', link: '/study/test' },
      ],
    }
  }
})
