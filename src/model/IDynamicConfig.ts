export enum DyMode {
    static,
    dynamic
}
export interface DynamicConfigData{
    _value:string|number|boolean
    _mode:keyof typeof DyMode
    _dynExp:string
}

export enum ConfigSchemaType {
    input,
    select,
    radio,
    switch,
    object,
    array    
}
export interface ConfigSchemaBase {
    type: keyof typeof ConfigSchemaType
    label:string
}
export type ConfigSchemaProperty  = ConfigSchemaBase | ConfigSchemaObject | ConfigSchemaArray

export interface ConfigSchemaObject extends ConfigSchemaBase {
    type:'object' 
    properties:ConfigSchema
}
export interface ConfigSchemaArray extends ConfigSchemaBase { 
    type:'array'
    items:ConfigSchema
}
export interface ConfigSchema {
    [key:string]:ConfigSchemaProperty
}