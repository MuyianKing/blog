

export default {
  install(app) {
    const globModules = import.meta.glob('./components/*.vue', { eager: true })
    for (const key in globModules) {
      const name = /.\/components\/(?<comp>.*).vue/.exec(key)?.groups.comp
      if (name) {
        app.component(`Demo${name}`, globModules[key].default)
      }
    }
  },
}
