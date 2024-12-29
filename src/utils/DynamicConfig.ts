import type { DynamicConfigData } from "@/model";

export class DynamicConfig {
    private state:Record<string,any>
    private formData:Record<string,any> = {}
    constructor(state:Record<string,any>,formData?:Record<string,any>){
        this.state = state
        if(formData){
          this.formData = formData
        }
    }

    getFieldValue(data:DynamicConfigData){
        const {staticValue,mode,dynExp } = data
        if(mode == 'static') return staticValue
        return this.resolveDynamicValue(dynExp)
    }

   /**
   * 解析动态值，支持表达式
   * @param {string} expression - 动态表达式，例如：'state.text == "1" ? "正常" : "异常"'
   * @returns {any} 返回解析后的值
   */
  resolveDynamicValue(expression:string) {
    try {
      const func = new Function('state', `return ${expression}`);
      return func(this.state);  
    } catch (error) {
      console.error('Error evaluating dynamic expression:', error);
      return null; 
    }
  }
}