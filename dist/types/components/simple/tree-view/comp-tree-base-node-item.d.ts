import { CompTreeNodeData, CompTreeNodeEditData } from './types';
import { BaseComponent } from '../../../base/component';
export default class CompTreeBaseNodeItem extends BaseComponent {
    private m_label;
    /**
     * ラベルです。
     */
    label: string;
    private m_value;
    /**
     * ノードを特定するための値です。
     */
    value: string;
    private m_unselectable;
    /**
     * 選択不可フラグです。
     */
    unselectable: boolean;
    private m_selected;
    /**
     * 選択されているか否かです。
     */
    selected: boolean;
    /**
     * ノードアイテムが発火する標準のイベントとは別に、独自で発火するイベント名のリストです。
     * CompTreeNodeItemを拡張し、そのノードアイテムで独自イベントを発火するよう実装した場合、
     * このプロパティをオーバーライドし、イベント名の配列を返すよう実装してください。
     */
    readonly extraEventNames: string[];
    init(nodeData: CompTreeNodeData): void;
    /**
     * ノードを編集するためのデータを設定します。
     * @param editData
     */
    setEditData(editData: CompTreeNodeEditData): void;
    /**
     * CompTreeNodeItemを拡張する際、初期化時に独自処理が必要な場合のプレースホルダーです。
     * 独自処理が必要な場合はこのメソッドをオーバーライドしてください。
     * @param nodeData
     */
    protected initPlaceholder(nodeData: CompTreeNodeData): void;
    /**
     * selectedの設定を行います。
     * @param value selectedの設定値を指定
     * @param initializing 初期化中か否かを指定
     */
    private m_setSelected;
    protected itemOnClick(e: any): void;
}
