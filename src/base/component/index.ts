import { BaseDialog, Dialog } from '@/base/component/dialog'
import { BaseComponent } from '@/base/component/base-component'
import { Resizable } from '@/base/component/resizable'

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
