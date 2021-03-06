import { ChildrenSortFunc, CompTreeNodeData, CompTreeNodeEditData } from './types'
import { BaseComponent } from '../../../base/component'
import CompTreeBaseNodeItem from './comp-tree-base-node-item'

export declare class CompTreeView<NodeData extends CompTreeNodeData = any> extends BaseComponent {
  /**
   * 指定されたノードデータからノードツリーを構築します。
   * @param nodeDataList ノードツリーを構築するためのデータ
   * @param insertIndex ノード挿入位置
   */
  buildTree(nodeDataList: NodeData[], insertIndex?: number): void

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
  addChild(child: NodeData | CompTreeNode, options?: { parent?: string; insertIndex?: number | null; sortFunc?: ChildrenSortFunc }): CompTreeNode

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
  isEldest: boolean = false

  /**
   * アイコン名です。
   * https://material.io/tools/icons/?style=baseline
   */
  icon: string = ''

  /**
   * アイコンの色を指定します。
   * 例: primary, indigo-8
   */
  iconColor: string = ''

  private m_opened: boolean = false

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
  readonly extraEventNames: string[]

  /**
   * ノードの最小幅です。
   */
  readonly minWidth: number
}

export declare class CompTreeNodeItem<NodeData extends CompTreeNodeData = any> extends BaseComponent {
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
   */
  unselectable: boolean

  /**
   * 選択されているか否かです。
   */
  selected: boolean

  /**
   * ノードアイテムが発火する標準のイベントとは別に、独自で発火するイベント名のリストです。
   * CompTreeNodeItemを拡張し、そのノードアイテムで独自イベントを発火するよう実装した場合、
   * このプロパティをオーバーライドし、イベント名の配列を返すよう実装してください。
   */
  readonly extraEventNames: string[]

  init(nodeData: NodeData): void

  /**
   * ノードを編集するためのデータを設定します。
   * @param editData
   */
  setEditData(editData: CompTreeNodeEditData): void

  /**
   * CompTreeNodeItemを拡張する際、初期化時に独自処理が必要な場合のプレースホルダーです。
   * 独自処理が必要な場合はこのメソッドをオーバーライドしてください。
   * @param nodeData
   */
  protected initPlaceholder(nodeData: NodeData): void {}

  protected itemOnClick(e)
}

export declare class CompTreeCheckboxNodeItem extends CompTreeNodeItem<CompTreeCheckboxNodeData> {
  checked: boolean
}
