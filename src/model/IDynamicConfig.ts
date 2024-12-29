export enum DyMode {
    static,
    dynamic
}
export interface DynamicConfigData{
    staticValue:string
    mode:keyof typeof DyMode
    dynExp:string
}