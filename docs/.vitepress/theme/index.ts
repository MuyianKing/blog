import BlogTheme from '@sugarat/theme'
import CodePreview from "../../../components/code-preview/Index.vue"
import TableDemo from "../../../components/table"

export default {
  ...BlogTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app
      .component("CodePreview", CodePreview)
      .use(TableDemo)

  },
}
