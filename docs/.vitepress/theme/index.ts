import BlogTheme from '@sugarat/theme'
import DemoTable from "../../../components/table/Table.vue"

export default {
    ...BlogTheme,
    enhanceApp({ app }) {
        // 注册自定义全局组件
        app.component("DemoTable", DemoTable)
    },
}
