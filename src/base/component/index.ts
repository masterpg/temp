import { BaseDialog, Dialog } from './dialog'
import { BaseComponent } from './base-component'
import { Resizable } from './resizable'

/**
 * Mixinのサンプルです。
 * @param superclass
 */
export const SampleMixin = <T extends new (...args: any[]) => {}>(superclass: T) =>
  class extends superclass {
    constructor(...args: any[]) {
      super(args)
    }
  }

export { BaseComponent, BaseDialog, Dialog, Resizable }
