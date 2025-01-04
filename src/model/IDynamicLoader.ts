export interface LibItem {
    title:string
    package:string
    version:string
    description?:string
    exportName:string
    componentName:string
    urls:string[]
}
export interface  LibTreeChild extends Pick<LibItem,'componentName'|'exportName'> {}

export interface LibTree extends Omit<LibItem,'componentName'> {
   children:LibTreeChild[]
}

