import { BaseComponent, Resizable } from '../../base/component'
import { mixins } from 'vue-class-component'

export declare class HelloWorldTwo extends mixins(BaseComponent, Resizable) {
  msg: string
}
