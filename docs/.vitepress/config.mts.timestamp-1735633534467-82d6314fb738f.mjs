// docs/.vitepress/config.mts
import { defineConfig } from "file:///G:/github/my-blog/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.18.0_async-validator@4.2.5_postcss@8.4.49_sass@1.83._rur6hkqlar4shammuwp54ag7ke/node_modules/vitepress/dist/node/index.js";
import Components from "file:///G:/github/my-blog/node_modules/.pnpm/unplugin-vue-components@0.28.0_@babel+parser@7.26.3_rollup@4.29.1_vue@3.5.12_typescript@5.7.2_/node_modules/unplugin-vue-components/dist/vite.js";
import { MuTableResolver } from "file:///G:/github/my-blog/node_modules/.pnpm/@muyianking+table@0.1.2_typescript@5.7.2/node_modules/@muyianking/table/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///G:/github/my-blog/node_modules/.pnpm/@sugarat+theme@0.5.3_@element-plus+icons-vue@2.3.1_vue@3.5.12_typescript@5.7.2___element-plus_cmnux66offqieoonveadz5t5ce/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 页脚
  footer: {
    copyright: "MIT License | \u7CA5\u91CC\u6709\u52FA\u7CD6"
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "\u6155\u6613\u5B89",
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
      Components({
        directoryAsNamespace: true,
        resolvers: [
          MuTableResolver()
        ]
      })
    ]
  },
  enhanceApp({ app }) {
    app.component(
      "DemoTable"
      /* ... */
    );
  },
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: "zh-cn",
  title: "\u6155\u6613\u5B89",
  description: "\u6155\u6613\u5B89\u7684\u535A\u5BA2\u3001\u6587\u6863",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置logo
    // logo: '/logo.png',
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://github.com/MuyianKing" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXGdpdGh1YlxcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9naXRodWIvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBNdVRhYmxlUmVzb2x2ZXIgfSBmcm9tICdAbXV5aWFua2luZy90YWJsZSdcblxuLy8gXHU1QkZDXHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tICcuL2Jsb2ctdGhlbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIE11VGFibGVSZXNvbHZlcigpLFxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gIH0sXG4gIGVuaGFuY2VBcHAoeyBhcHAgfSkge1xuICAgIC8vIFx1NkNFOFx1NTE4Q1x1ODFFQVx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1N0VDNFx1NEVGNlxuICAgIGFwcC5jb21wb25lbnQoJ0RlbW9UYWJsZScgLyogLi4uICovKVxuICB9LFxuICAvLyBcdTdFRTdcdTYyN0ZcdTUzNUFcdTVCQTJcdTRFM0JcdTk4OTgoQHN1Z2FyYXQvdGhlbWUpXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgbGFuZzogJ3poLWNuJyxcbiAgdGl0bGU6ICdcdTYxNTVcdTY2MTNcdTVCODknLFxuICBkZXNjcmlwdGlvbjogJ1x1NjE1NVx1NjYxM1x1NUI4OVx1NzY4NFx1NTM1QVx1NUJBMlx1MzAwMVx1NjU4N1x1Njg2MycsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV1cbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxldmVsOiBbMiwgM10sXG4gICAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NSdcbiAgICB9LFxuICAgIC8vIFx1OUVEOFx1OEJBNFx1NjU4N1x1Njg0OFx1NEZFRVx1NjUzOVxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTAnLFxuICAgIGxhc3RVcGRhdGVkVGV4dDogJ1x1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFx1NEU4RScsXG5cbiAgICAvLyBcdThCQkVcdTdGNkVsb2dvXG4gICAgLy8gbG9nbzogJy9sb2dvLnBuZycsXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RVx1NEY1Q1x1ODAwNScsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vTXV5aWFuS2luZycgfVxuICAgIF1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcZ2l0aHViXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxnaXRodWJcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovZ2l0aHViL215LWJsb2cvZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHNcIjsvLyBcdTRFM0JcdTk4OThcdTcyRUNcdTY3MDlcdTkxNERcdTdGNkVcbmltcG9ydCB7IGdldFRoZW1lQ29uZmlnIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUvbm9kZSdcblxuXG4vLyBcdTYyNDBcdTY3MDlcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjM6IGh0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XG5cbiAgLy8gXHU5ODc1XHU4MTFBXG4gIGZvb3Rlcjoge1xuICAgIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgfSxcblxuICAvLyBcdTRFM0JcdTk4OThcdTgyNzJcdTRGRUVcdTY1MzlcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxuXG4gIC8vIFx1NjU4N1x1N0FFMFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxuICBhdXRob3I6ICdcdTYxNTVcdTY2MTNcdTVCODknLFxuXG4gIC8vIFx1NTNDQlx1OTRGRVxuICBmcmllbmQ6IFtcbiAgICB7XG4gICAgICBuaWNrbmFtZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxuICAgICAgYXZhdGFyOlxuICAgICAgICAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxuICAgICAgZGVzOiAnVml0ZSAmIFZ1ZSBQb3dlcmVkIFN0YXRpYyBTaXRlIEdlbmVyYXRvcicsXG4gICAgICBhdmF0YXI6XG4gICAgICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXG4gICAgICB1cmw6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvJyxcbiAgICB9LFxuICBdLFxufSlcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUyxvQkFBb0I7QUFDcFQsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7OztBQ0RoQyxTQUFTLHNCQUFzQjtBQUkvQixJQUFNLFlBQVksZUFBZTtBQUFBO0FBQUEsRUFHL0IsUUFBUTtBQUFBLElBQ04sV0FBVztBQUFBLEVBQ2I7QUFBQTtBQUFBLEVBR0EsWUFBWTtBQUFBO0FBQUEsRUFHWixRQUFRO0FBQUE7QUFBQSxFQUdSLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxRQUNFO0FBQUEsTUFDRixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFFBQ0U7QUFBQSxNQUNGLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRDVCRCxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVCxzQkFBc0I7QUFBQSxRQUN0QixXQUFXO0FBQUEsVUFDVCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXLEVBQUUsSUFBSSxHQUFHO0FBRWxCLFFBQUk7QUFBQSxNQUFVO0FBQUE7QUFBQSxJQUFxQjtBQUFBLEVBQ3JDO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUFBLEVBQ2hEO0FBQUEsRUFDQSxhQUFhO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUNaLE9BQU87QUFBQSxJQUNUO0FBQUE7QUFBQSxJQUVBLGtCQUFrQjtBQUFBLElBQ2xCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxJQUlqQixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsTUFDeEIsRUFBRSxNQUFNLDRCQUFRLE1BQU0sZ0NBQWdDO0FBQUEsSUFDeEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
