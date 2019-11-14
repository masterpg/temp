import CompTreeNode from './comp-tree-node.vue';
import { CompTreeNodeData } from './types';
import CompTreeNodeItem from './comp-tree-node-item.vue';
import CompTreeView from './comp-tree-view.vue';
export declare namespace CompTreeViewUtils {
    /**
     * ノードを作成します。
     * @param treeView
     * @param nodeData
     */
    function newNode(treeView: CompTreeView, nodeData: CompTreeNodeData): CompTreeNode;
    /**
     * 指定されたノードの子孫を配列で取得します。
     * @param node
     */
    function getDescendants(node: CompTreeNode): CompTreeNode[];
    /**
     * 指定されたノードの子孫をマップで取得します。
     * @param node
     */
    function getDescendantMap(node: CompTreeNode): {
        [value: string]: CompTreeNode;
    };
    /**
     * ノードが追加された旨を通知するイベントを発火します。
     * @param node
     */
    function dispatchNodeAdded(node: CompTreeNode): void;
    /**
     * ノードが削除される直前を通知するイベントを発火します。
     * @param parent
     * @param child
     */
    function dispatchNodeBeforeRemoved(parent: CompTreeView | CompTreeNode, child: CompTreeNode): void;
    /**
     * ノードが削除された旨を通知するイベントを発火します。
     * @param parent
     * @param child
     */
    function dispatchNodeRemoved(parent: CompTreeView | CompTreeNode, child: CompTreeNode): void;
    /**
     * ノードの選択が変更された旨を通知するイベントを発火します。
     * @param target
     */
    function dispatchSelectedChanged(target: CompTreeNode | CompTreeNodeItem): void;
    interface NodePropertyChangeDetail {
        property: 'value' | 'label';
        oldValue: any;
        newValue: any;
    }
    /**
     * ノードのプロパティが変更された旨を通知するイベントを発火します。
     * @param target
     * @param detail
     */
    function dispatchNodePropertyChanged(target: CompTreeNode | CompTreeNodeItem, detail: NodePropertyChangeDetail): void;
    /**
     * 文字列を浮動小数点数へ変換します。
     * @param value
     */
    function toFloat(value?: string): number;
    /**
     * 指定されたスタイルの幅を取得します。
     * @param style
     */
    function getElementWidth(style: CSSStyleDeclaration): number;
    /**
     * 指定された要素の幅を取得します。
     * @param element
     */
    function getElementWidth(element: Element): number;
    /**
     * 指定されたスタイルの枠の幅を取得します。
     * @param style
     */
    function getElementFrameWidth(style: CSSStyleDeclaration): number;
    /**
     * 指定された要素の枠の幅を取得します。
     * @param element
     */
    function getElementFrameWidth(element: Element): number;
    /**
     * 指定された要素の高さを取得します。
     * @param element
     */
    function getElementHeight(element: Element): number;
    /**
     * 指定されたスタイルの高さを取得します。
     * @param style
     */
    function getElementHeight(style: CSSStyleDeclaration): number;
    /**
     * 指定された要素の枠の高さを取得します。
     * @param element
     */
    function getElementFrameHeight(element: Element): number;
    /**
     * 指定されたスタイルの枠の高さを取得します。
     * @param style
     */
    function getElementFrameHeight(style: CSSStyleDeclaration): number;
}
