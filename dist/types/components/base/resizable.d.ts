import { Breakpoint } from './breakpoint';
export declare class Resizable extends Breakpoint {
    mounted(): void;
    destroyed(): void;
    /**
     * 自身のコンポーネントがアタッチされているかを示すフラグ
     */
    private Resizable_isAttached;
    /**
     * 子孫へのリサイズ通知が実行されているかを示すフラグ
     */
    private Resizable_notifyingDescendant;
    /**
     * 自身からみて子孫となるResizableのリスト
     */
    private Resizable_interestedResizables;
    private Resizable_parentResizableValue;
    private Resizable_parentResizable;
    /**
     * Resizableなコンポーネントにリサイズ通知を行います。
     */
    notifyResize(): void;
    /**
     * 自身と最も近いResizableな祖先との関連付けを行います。
     * @param parentResizable
     */
    assignParentResizable(parentResizable?: Resizable): void;
    /**
     * 自身から指定された子孫を削除し、
     * その子孫に登録されている自身のcomponent-resizeリスナを解除します。
     * @param target
     */
    stopResizeNotificationsFor(target: Resizable): void;
    /**
     * このメソッドはリサイズ通知を受け取るかを制御するために使用されます。
     * リサイズ通知の受け取りを制御したいコンポーネントはこのメソッドをオーバーライドして下さい。
     * trueを返すとtargetの子孫にリサイズ通知が行われます。
     * falseを返すとtargetの子孫にはリサイズ通知が行われません。
     * @param target リサイズ通知の受け取りの制御対象コンポーネントが渡されます。
     */
    resizerShouldNotify(target: Resizable): boolean;
    /**
     * 自身からみて祖先のResizableとの関連付けを要求/実行します。
     */
    private Resizable_requestResizeNotifications;
    /**
     * 自身からみて最も近い祖先のResizableを検索し、自身と祖先の関連付けを行います。
     */
    private Resizable_findParent;
    /**
     * 指定されたdescendantの子孫に対して再帰的にリサイズ通知を行います。
     * @param descendant
     */
    private Resizable_notifyDescendant;
    /**
     * component-resizeイベントを発火します。
     */
    Resizable_fireResize(): void;
    /**
     * target上のcomponent-resizeイベントに自身のリスナを登録します。
     * @param target
     */
    private Resizable_subscribeIronResize;
    /**
     * target上のcomponent-resizeイベントに登録されている自身のリスナを解除します。
     * @param target
     */
    private Resizable_unsubscribeIronResize;
    /**
     * iron-request-resize-notificationsイベントのリスナです。
     * このイベントは、子孫が祖先との関連付けを必要とした場合発火されます。
     * @param e
     */
    private Resizable_onIronRequestResizeNotifications;
    /**
     * component-resizeイベントのリスナです。
     * @param event
     */
    private Resizable_onDescendantIronResize;
}
