export enum DyMode {
    static,
    dynamic
}
export interface DynamicConfigData{
    staticValue:string|number|boolean
    mode:keyof typeof DyMode
    dynExp:string
}