
import DemoTable from "./components/Table.vue"
import DemoTableStripe from "./components/TableStripe.vue"

export default {
  install(app) {
    app.component("DemoTable", DemoTable)
    .component("DemoTableStripe", DemoTableStripe)
  }
}