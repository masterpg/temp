import { BaseComponent, Resizable } from '../../../base/component'
import { mixins } from 'vue-class-component'

export declare class HelloWorldOne extends mixins(BaseComponent, Resizable) {
  msg: string
}
