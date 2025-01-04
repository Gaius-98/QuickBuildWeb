import * as Vue from 'vue'
import type { DefineComponent } from 'vue'
import type { LibItem, LibTree, LibTreeChild } from '@/model'
/**
 * Class representing a dynamic loader for libraries and components.
 */
export class DynamicLoader {
    /**
     * Array of library items or library trees.
     */
    libs: Array<LibItem | LibTree>;

    /**
     * Array of script URLs to be loaded.
     */
    scripts: string[] = [];

    /**
     * Array of style URLs to be loaded.
     */
    styles: string[] = [];

    /**
     * Map of component names to their corresponding library tree children or arrays of children.
     */
    componentsMap: Map<string, LibTreeChild | LibTreeChild[]> = new Map();

    /**
     * Record of component names to their corresponding Vue components.
     */
    components: Record<string, DefineComponent> = {};

    /**
     * Creates an instance of DynamicLoader.
     * @param libs - Array of library items or library trees.
     */
    constructor(libs: Array<LibItem | LibTree>) {
        this.libs = libs;
        this.init();
    }

    /**
     * Initializes the dynamic loader by setting up Vue on the window object and handling libraries and URLs.
     */
    init() {
        // cdn加载的方式需要在window上挂载Vue
        //@ts-ignore
        if (!window.Vue) {
            //@ts-ignore
            window.Vue = Vue;
        }
        this.handleLibs();
        this.handleUrls();
    }

    /**
     * Handles the URLs of the libraries, categorizing them into scripts and styles.
     */
    handleUrls() {
        const urls = this.libs.map(lib => lib.urls).flat();
        urls.forEach(url => {
            if (url.endsWith('js')) {
                this.scripts.push(url);
            } else if (url.endsWith('css')) {
                this.styles.push(url);
            }
        });
    }

    /**
     * Loads the scripts and styles, then registers the components.
     * @returns A promise that resolves to a record of component names to their corresponding Vue components.
     */
    load(): Promise<Record<string, DefineComponent>> {
        return new Promise((resolve, reject) => {
            Promise.allSettled([
                ...this.styles.map(url => this.loadStyle(url)),
                ...this.scripts.map(url => this.loadScript(url))
            ]).then(() => {
                this.registerComponents();
                resolve(this.components);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    /**
     * Registers the components by mapping their names to the corresponding Vue components on the window object.
     */
    registerComponents() {
        for (const [libName, componentItem] of this.componentsMap) {
            if (Array.isArray(componentItem)) {
                componentItem.forEach(component => {
                    //@ts-ignore
                    this.components[component.componentName] = window[libName][component.exportName];
                });
            } else {
                //@ts-ignore
                this.components[componentItem.componentName] = window[componentItem.exportName];
            }
        }
    }

    /**
     * Handles the children of a library tree, mapping their export names and component names.
     * @param data - The library tree data.
     */
    handleLibChildren(data: LibTree) {
        const childComponents = data.children.map(child => {
            return {
                exportName: child.exportName,
                componentName: child.componentName
            };
        });
        this.componentsMap.set(data.exportName, childComponents);
    }

    /**
     * Handles the libraries, mapping their export names and component names.
     * @param libs - Array of library items or library trees.
     */
    handleLibs(libs: Array<LibItem | LibTree> = this.libs) {
        libs.forEach(lib => {
            if (this.isLibTree(lib)) {
                this.handleLibChildren((lib as LibTree));
            } else {
                this.componentsMap.set(lib.exportName, {
                    exportName: lib.exportName,
                    componentName: lib.componentName
                });
            }
        });
    }

    /**
     * Checks if a library is a library tree.
     * @param lib - The library item or library tree.
     * @returns True if the library is a library tree, false otherwise.
     */
    isLibTree(lib: LibItem | LibTree): lib is LibTree {
        return 'children' in lib;
    }

    /**
     * Loads a script from a given URL.
     * @param url - The URL of the script.
     * @returns A promise that resolves when the script is loaded.
     */
    loadScript(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = false;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    /**
     * Loads a style from a given URL.
     * @param url - The URL of the style.
     * @returns A promise that resolves when the style is loaded.
     */
    loadStyle(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }
}