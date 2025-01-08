export enum DyMode {
    static,
    dynamic
}
export interface DynamicConfigData{
    _value:string|number|boolean
    _mode:keyof typeof DyMode
    _dynExp:string
}