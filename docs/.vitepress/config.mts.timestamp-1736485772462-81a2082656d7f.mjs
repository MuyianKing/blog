// docs/.vitepress/config.mts
import { defineConfig } from "file:///G:/github/my-blog/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.18.0_@types+node@22.10.5_async-validator@4.2.5_postc_hwot5b2vhnwf2j5pb3bqfy4ekq/node_modules/vitepress/dist/node/index.js";
import Components from "file:///G:/github/my-blog/node_modules/.pnpm/unplugin-vue-components@28.0.0_@babel+parser@7.26.3_rollup@4.29.1_vue@3.5.13_typescript@5.7.3_/node_modules/unplugin-vue-components/dist/vite.js";
import { MuTableResolver } from "file:///G:/github/my-blog/node_modules/.pnpm/@muyianking+table@0.1.3_typescript@5.7.3/node_modules/@muyianking/table/index.js";
import AutoImport from "file:///G:/github/my-blog/node_modules/.pnpm/unplugin-auto-import@19.0.0_@vueuse+core@12.2.0_typescript@5.7.3__rollup@4.29.1/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///G:/github/my-blog/node_modules/.pnpm/unplugin-vue-components@28.0.0_@babel+parser@7.26.3_rollup@4.29.1_vue@3.5.13_typescript@5.7.3_/node_modules/unplugin-vue-components/dist/resolvers.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///G:/github/my-blog/node_modules/.pnpm/@sugarat+theme@0.5.3_@element-plus+icons-vue@2.3.1_vue@3.5.13_typescript@5.7.3___element-plus_kxaliuj2arqwwk5xcdwqwtzr7i/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 页脚
  footer: {
    version: false,
    copyright: {
      message: "",
      icon: false
    }
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "\u6155\u6613\u5B89",
  recommend: false,
  // 友链
  friend: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      des: "\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF",
      avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top"
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ]
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  vite: {
    plugins: [
      AutoImport({
        imports: ["vue"],
        eslintrc: {
          enabled: true
        }
      }),
      Components({
        directoryAsNamespace: true,
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass"
          }),
          MuTableResolver()
        ]
      })
    ]
  },
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: "zh-cn",
  base: "/blog/",
  title: "\u6155\u6613\u5B89",
  description: "\u6155\u6613\u5B89\u7684\u535A\u5BA2\u3001\u6587\u6863",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "https://avatars.githubusercontent.com/u/44827414?s=400&u=a926e3e9e5f77f818170491d8880959f6e570d70&v=4" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 4],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    darkModeSwitchLabel: "\u4E3B\u9898",
    // 设置logo
    logo: "https://avatars.githubusercontent.com/u/44827414?s=400&u=a926e3e9e5f77f818170491d8880959f6e570d70&v=4",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://github.com/MuyianKing" }
    ],
    sidebar: {
      // '/docs/table': [
      //   { text: '轮播1', link: '/docs/table/home' },
      //   { text: '轮播2', link: '/docs/table/home' },
      //   { text: '轮播3', link: '/docs/table/home' },
      // ],
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXGdpdGh1YlxcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9naXRodWIvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgTXVUYWJsZVJlc29sdmVyIH0gZnJvbSAnQG11eWlhbmtpbmcvdGFibGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG4vLyBcdTVCRkNcdTUxNjVcdTRFM0JcdTk4OThcdTc2ODRcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgYmxvZ1RoZW1lIH0gZnJvbSAnLi9ibG9nLXRoZW1lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB2aXRlOiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIGltcG9ydHM6IFsndnVlJ10sXHJcbiAgICAgICAgZXNsaW50cmM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIGRpcmVjdG9yeUFzTmFtZXNwYWNlOiB0cnVlLFxyXG4gICAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIE11VGFibGVSZXNvbHZlcigpXHJcbiAgICAgICAgXVxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIFx1N0VFN1x1NjI3Rlx1NTM1QVx1NUJBMlx1NEUzQlx1OTg5OChAc3VnYXJhdC90aGVtZSlcclxuICBleHRlbmRzOiBibG9nVGhlbWUsXHJcbiAgbGFuZzogJ3poLWNuJyxcclxuICBiYXNlOiAnL2Jsb2cvJyxcclxuICB0aXRsZTogJ1x1NjE1NVx1NjYxM1x1NUI4OScsXHJcbiAgZGVzY3JpcHRpb246ICdcdTYxNTVcdTY2MTNcdTVCODlcdTc2ODRcdTUzNUFcdTVCQTJcdTMwMDFcdTY1ODdcdTY4NjMnLFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIGhlYWQ6IFtcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDQ4Mjc0MTQ/cz00MDAmdT1hOTI2ZTNlOWU1Zjc3ZjgxODE3MDQ5MWQ4ODgwOTU5ZjZlNTcwZDcwJnY9NCcgfV1cclxuICBdLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogWyAyLCA0XSxcclxuICAgICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnXHJcbiAgICB9LFxyXG4gICAgLy8gXHU5RUQ4XHU4QkE0XHU2NTg3XHU2ODQ4XHU0RkVFXHU2NTM5XHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcclxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTAnLFxyXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU0RThFJyxcclxuICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6XCJcdTRFM0JcdTk4OThcIixcclxuICAgIC8vIFx1OEJCRVx1N0Y2RWxvZ29cclxuICAgIGxvZ286ICdodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDQ4Mjc0MTQ/cz00MDAmdT1hOTI2ZTNlOWU1Zjc3ZjgxODE3MDQ5MWQ4ODgwOTU5ZjZlNTcwZDcwJnY9NCcsXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RVx1NEY1Q1x1ODAwNScsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vTXV5aWFuS2luZycgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgLy8gJy9kb2NzL3RhYmxlJzogW1xyXG4gICAgICAvLyAgIHsgdGV4dDogJ1x1OEY2RVx1NjRBRDEnLCBsaW5rOiAnL2RvY3MvdGFibGUvaG9tZScgfSxcclxuICAgICAgLy8gICB7IHRleHQ6ICdcdThGNkVcdTY0QUQyJywgbGluazogJy9kb2NzL3RhYmxlL2hvbWUnIH0sXHJcbiAgICAgIC8vICAgeyB0ZXh0OiAnXHU4RjZFXHU2NEFEMycsIGxpbms6ICcvZG9jcy90YWJsZS9ob21lJyB9LFxyXG4gICAgICAvLyBdLFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXGdpdGh1YlxcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxibG9nLXRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9naXRodWIvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnXHJcblxyXG5cclxuLy8gXHU2MjQwXHU2NzA5XHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzOiBodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1xyXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XHJcblxyXG4gIC8vIFx1OTg3NVx1ODExQVxyXG4gIGZvb3Rlcjoge1xyXG4gICAgdmVyc2lvbjogZmFsc2UsXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgbWVzc2FnZTpcIlwiLFxyXG4gICAgICBpY29uOmZhbHNlXHJcbiAgICB9LFxyXG4gICAgLy8gaWNwUmVjb3JkOiB7XHJcbiAgICAvLyAgIG5hbWU6ICdcdTg3MDBJQ1BcdTU5MDcxOTAxMTcyNFx1NTNGNycsXHJcbiAgICAvLyAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcclxuICAgIC8vIH0sXHJcbiAgICAvLyBzZWN1cml0eVJlY29yZDoge1xyXG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxyXG4gICAgLy8gICBsaW5rOiAnaHR0cHM6Ly93d3cuYmVpYW4uZ292LmNuL3BvcnRhbC9pbmRleC5kbydcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU0RTNCXHU5ODk4XHU4MjcyXHU0RkVFXHU2NTM5XHJcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxyXG5cclxuICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcclxuICBhdXRob3I6ICdcdTYxNTVcdTY2MTNcdTVCODknLFxyXG5cclxuICByZWNvbW1lbmQ6IGZhbHNlLFxyXG5cclxuICAvLyBcdTUzQ0JcdTk0RkVcclxuICBmcmllbmQ6IFtcclxuICAgIHtcclxuICAgICAgbmlja25hbWU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxyXG4gICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxyXG4gICAgICBhdmF0YXI6XHJcbiAgICAgICAgJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxyXG4gICAgICBkZXM6ICdWaXRlICYgVnVlIFBvd2VyZWQgU3RhdGljIFNpdGUgR2VuZXJhdG9yJyxcclxuICAgICAgYXZhdGFyOlxyXG4gICAgICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5cclxuZXhwb3J0IHsgYmxvZ1RoZW1lIH1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLG9CQUFvQjtBQUNwVCxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHVCQUF1QjtBQUNoQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjs7O0FDSHBDLFNBQVMsc0JBQXNCO0FBSS9CLElBQU0sWUFBWSxlQUFlO0FBQUE7QUFBQSxFQUcvQixRQUFRO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsTUFDVCxTQUFRO0FBQUEsTUFDUixNQUFLO0FBQUEsSUFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNGO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQTtBQUFBLEVBR1osUUFBUTtBQUFBLEVBRVIsV0FBVztBQUFBO0FBQUEsRUFHWCxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsUUFDRTtBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxRQUNFO0FBQUEsTUFDRixLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUR4Q0QsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLEtBQUs7QUFBQSxRQUNmLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxzQkFBc0I7QUFBQSxRQUN0QixXQUFXO0FBQUEsVUFDVCxvQkFBb0I7QUFBQSxZQUNsQixhQUFhO0FBQUEsVUFDZixDQUFDO0FBQUEsVUFDRCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLHdHQUF3RyxDQUFDO0FBQUEsRUFDekk7QUFBQSxFQUNBLGFBQWE7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFFLEdBQUcsQ0FBQztBQUFBLE1BQ2IsT0FBTztBQUFBLElBQ1Q7QUFBQTtBQUFBLElBRUEsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsaUJBQWlCO0FBQUEsSUFDakIscUJBQW9CO0FBQUE7QUFBQSxJQUVwQixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsTUFDeEIsRUFBRSxNQUFNLDRCQUFRLE1BQU0sZ0NBQWdDO0FBQUEsSUFDeEQ7QUFBQSxJQUNBLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
