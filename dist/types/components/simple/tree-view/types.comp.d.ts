import { ChildrenSortFunc, CompTreeNodeData, CompTreeNodeEditData } from './types'
import { BaseComponent } from '../../../base/component'
import CompTreeBaseNodeItem from './comp-tree-base-node-item'

export declare class CompTreeView extends BaseComponent {
  /**
   * ツリービューのトップレベルのノードです。
   */
  readonly children: CompTreeNode[]

  /**
   * 選択ノードです。
   */
  selectedNode: CompTreeNode | undefined

  /**
   * 指定されたノードデータからノードツリーを構築します。
   * @param nodeDataList ノードツリーを構築するためのデータ
   * @param insertIndex ノード挿入位置
   */
  buildTree<NodeData extends CompTreeNodeData = CompTreeNodeData>(nodeDataList: NodeData[], insertIndex?: number): void

  /**
   * 子ノードを追加します。
   * @param child ノード、またはノードを構築するためのデータ
   * @param options
   * <ul>
   *   <li>parent: 親ノードを特定するための値。</li>
   *   <li>insertIndex: ノード挿入位置。sortFuncと同時に指定することはできない。</li>
   *   <li>sortFunc: ノードをソートする関数。insertIndexと同時に指定することはできない。</li>
   * </ul>
   */
  addChild<NodeData extends CompTreeNodeData = CompTreeNodeData>(
    child: NodeData | CompTreeNode,
    options?: { parent?: string; insertIndex?: number | null; sortFunc?: ChildrenSortFunc }
  ): CompTreeNode

  /**
   * ノードを削除します。
   * @param value ノードを特定するための値
   */
  removeNode(value: string): CompTreeNode | undefined

  /**
   * ノードを特定するためのvalueと一致するノードを取得します。
   * @param value ノードを特定するための値
   */
  getNode(value: string): CompTreeNode | undefined
}

export declare class CompTreeNode<NodeItem extends CompTreeBaseNodeItem = CompTreeBaseNodeItem> extends BaseComponent {
  readonly treeView: CompTreeView

  readonly item: NodeItem

  /**
   * 自身が最年長のノードかを示すフラグです。
   */
  isEldest: boolean

  /**
   * アイコン名です。
   * https://material.io/tools/icons/?style=baseline
   */
  icon: string

  /**
   * アイコンの色を指定します。
   * 例: primary, indigo-8
   */
  iconColor: string

  /**
   * アイテムの開閉です。
   */
  readonly opened: boolean

  /**
   * ラベルです。
   */
  label: string

  /**
   * ノードを特定するための値です。
   */
  value: string

  /**
   * 選択不可フラグです。
   * true: 選択不可, false: 選択可
   */
  readonly unselectable: boolean

  /**
   * 選択されているか否かです。
   */
  selected: boolean

  /**
   * 親ノードです。
   */
  readonly parent: CompTreeNode | undefined

  /**
   * 子ノードです。
   */
  readonly children: CompTreeNode[]

  /**
   * 標準で発火するイベントとは別に、追加で発火するイベント名のリストです。
   */
  extraEventNames: string[]

  /**
   * ノードの最小幅です。
   */
  readonly minWidth: number

  /**
   * ノードの初期化を行います。
   * @param treeView
   * @param nodeData
   */
  init(treeView: CompTreeView, nodeData: CompTreeNodeData): void

  /**
   * 子ノードを追加します。
   * @param child ノード、またはノードを構築するためのデータ
   * @param options
   * <ul>
   *   <li>insertIndex: ノード挿入位置。sortFuncと同時に指定することはできない。</li>
   *   <li>sortFunc: ノードをソートする関数。insertIndexと同時に指定することはできない。</li>
   * </ul>
   */
  addChild<NodeData extends CompTreeNodeData = CompTreeNodeData>(
    child: NodeData | CompTreeNode,
    options?: { insertIndex?: number | null; sortFunc?: ChildrenSortFunc }
  ): CompTreeNode

  /**
   * 子ノードを削除します。
   * @param childNode
   */
  removeChild(childNode: CompTreeNode): void

  /**
   * 子ノードの開閉をトグルします。
   * @param animated
   */
  toggle(animated: boolean): void

  /**
   * 子ノードを展開します。
   * @param animated
   */
  open(animated: boolean): void

  /**
   * 子ノードを閉じます。
   * @param animated
   */
  close(animated: boolean): void

  /**
   * ルートノードを取得します。
   */
  getRootNode(): CompTreeNode

  /**
   * ノードを編集するためのデータを設定します。
   * @param editData
   */
  setEditData(editData: CompTreeNodeEditData): void
}

export declare class CompTreeNodeItem extends CompTreeBaseNodeItem {}

export declare class CompCheckboxNodeItem extends CompTreeBaseNodeItem {
  checked: boolean
}
