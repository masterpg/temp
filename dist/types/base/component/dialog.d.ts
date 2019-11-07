import { BaseComponent } from './base-component';
import { Resizable } from './resizable';
import Vue from 'vue';
/**
 * ダイアログのインタフェースです。
 */
export interface Dialog<PARAM = void, RESULT = void> extends Vue {
    open(param: PARAM): Promise<RESULT>;
    close(result: RESULT): void;
}
declare const BaseDialog_base: import("vue-class-component/lib/declarations").VueClass<BaseComponent & Resizable>;
/**
 * ダイアログの基底クラスです。
 */
export declare abstract class BaseDialog<PARAM = void, RESULT = void> extends BaseDialog_base implements Dialog<PARAM, RESULT> {
    protected opened: boolean;
    private m_dialogResolver;
    abstract open(param: PARAM): Promise<RESULT>;
    abstract close(result: RESULT): void;
    protected openProcess(param: PARAM): Promise<RESULT>;
    protected closeProcess(value: RESULT): void;
}
export {};
