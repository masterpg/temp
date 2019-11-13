import * as components from './components'
import { PluginObject } from 'vue'
import { Vue as _Vue } from 'vue-property-decorator'

export default {
  install(Vue: typeof _Vue, options?: any): void {
    for (const [name, c] of Object.entries(components)) {
      console.log(`${name}`)
      Vue.component(name, c)
    }
  },
} as PluginObject<any>

export * from './base/component'

export * from './config'

export * from './components/index.modules'
