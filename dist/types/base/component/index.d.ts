import { BaseDialog, Dialog } from './dialog';
import { BaseComponent } from './base-component';
import { Resizable } from './resizable';
/**
 * Mixinのサンプルです。
 * @param superclass
 */
export declare const SampleMixin: <T extends new (...args: any[]) => {}>(superclass: T) => {
    new (...args: any[]): {};
} & T;
export { BaseComponent, BaseDialog, Dialog, Resizable };
