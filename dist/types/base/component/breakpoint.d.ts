import Vue from 'vue';
export declare enum BreakpointName {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface BreakpointInfo {
    name: BreakpointName;
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xsOnly: boolean;
    smOnly: boolean;
    smAndDown: boolean;
    smAndUp: boolean;
    mdOnly: boolean;
    mdAndDown: boolean;
    mdAndUp: boolean;
    lgOnly: boolean;
    lgAndDown: boolean;
    lgAndUp: boolean;
    xlOnly: boolean;
    width: number;
    height: number;
}
export declare class Breakpoint extends Vue {
    readonly breakpoint: BreakpointInfo;
    readonly screenSize: {
        pc: boolean;
        tab: boolean;
        sp: boolean;
    };
    Breakpoint_clientWidth: number;
    Breakpoint_clientHeight: number;
    Breakpoint_resizeTimeout: number;
    protected Breakpoint_windowOnResize(): void;
    private Breakpoint_getClientDimensionsWidth;
    private Breakpoint_getClientDimensionsHeight;
}
