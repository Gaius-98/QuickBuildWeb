import type { LibItem, LibTree,LibTreeChild } from '@/model'
import * as Vue from 'vue'
import type { DefineComponent } from 'vue'
export class DynamicLoader {
    libs:Array<LibItem|LibTree>
    scripts:string[] = []
    styles:string[] = []
    componentsMap:Map<string,LibTreeChild|LibTreeChild[]> = new Map()
    components:Record<string,DefineComponent> = {}

    constructor(libs:Array<LibItem|LibTree>){
        this.libs = libs
        this.init()
    }

    init(){
        // cdn加载的方式需要在window上挂载Vue
        //@ts-ignore
        if(!window.Vue){
            //@ts-ignore
            window.Vue = Vue
        }
        this.handleLibs()
        this.handleUrls()
    }

    handleUrls(){
        const urls  = this.libs.map(lib=>lib.urls).flat()
        urls.forEach(url=>{
            if(url.endsWith('js')){
                this.scripts.push(url)
            }else if(url.endsWith('css')){
                this.styles.push(url)
            }
        })
    }

    load():Promise<Record<string,DefineComponent>>{
       return new Promise((resolve,reject)=>{
            Promise.allSettled([
                    ...this.styles.map(url=>this.loadStyle(url)),
                    ...this.scripts.map(url=>this.loadScript(url))
            ]).then(()=>{
                    this.registerComponents()
                    resolve(this.components)
            }).catch((e)=>{
                reject(e)
            })
       })

    }

    registerComponents(){
        for(const [libName,componentItem] of this.componentsMap){
            if(Array.isArray(componentItem)){
                componentItem.forEach(component=>{
                    //@ts-ignore
                    this.components[component.componentName] = window[libName][component.exportName]
                })
            }else{
                //@ts-ignore
                this.components[componentItem.componentName] = window[componentItem.exportName]

             }
        }
    }
    handleLibChildren(data:LibTree){
        const childComponents = data.children.map(child=>{
             return {
                exportName:child.exportName,
                componentName:child.componentName
             }
        })
        this.componentsMap.set(data.exportName,childComponents)
    }

    handleLibs(libs:Array<LibItem|LibTree> = this.libs){
      libs.forEach(lib=>{
            if(this.isLibTree(lib)){
                this.handleLibChildren((lib as LibTree))
            }else{
                this.componentsMap.set(lib.exportName,{
                    exportName:lib.exportName,
                    componentName:lib.componentName
                })
            }
        })
    }
    isLibTree(lib:LibItem|LibTree):lib is LibTree{
        return 'children' in lib
    }

    loadScript(url: string): Promise<any> { 
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = url
            script.async = false
            script.onload = resolve
            script.onerror = reject
            document.body.appendChild(script)
        })
    }

    loadStyle(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = url
            link.onload = resolve
            link.onerror = reject
            document.head.appendChild(link)
        })
    }
}