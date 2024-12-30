import type { DynamicConfigData } from "@/model";
import { cloneDeep } from "lodash-es";
export class DynamicConfig {
    private state:Record<string,any>
    private formData:Record<string,any> = {}
    constructor(state:Record<string,any>,formData?:Record<string,any>){
        this.state = state
        if(formData){
          this.formData = formData
        }
    }

    getValue(data:DynamicConfigData){
        const {staticValue,mode,dynExp } = data
        if(mode == 'static') return staticValue
        return this.resolveDynamicValue(dynExp)
    }

   /**
   * 解析动态值，支持表达式
   * @param {string} expression - 动态表达式，例如：'state.text == "1" ? "正常" : "异常"'
   * @returns {any} 返回解析后的值
   */
   private resolveDynamicValue(expression:string) {
    try {
      const func = new Function('state', `return ${expression}`);
      return func(this.state);  
    } catch (error) {
      console.error('Error evaluating dynamic expression:', error);
      return null; 
    }
  }

  isDynamicConfigData(obj: any): obj is DynamicConfigData {
      return typeof obj === 'object' && obj !== null &&
          typeof obj.staticValue === 'string' &&
          ['static', 'dynamic'].includes(obj.mode) &&  // check if 'mode' is a valid key of DyMode
          typeof obj.dynExp === 'string';
  }

  processObject(data: any): any {
      const obj = cloneDeep(data) 
      // 如果是数组，遍历数组中的每个元素
      if (Array.isArray(obj)) {
          return obj.map(item => this.processObject(item)); // 对数组元素递归处理
      } 
      // 如果是对象，遍历对象的每个键值对
      else if (typeof obj === 'object' && obj !== null) {
          const result: any = {};  // 新对象，用于存储结果
          for (const key in obj) {
              const value = obj[key];
              
              // 如果值符合 DynamicConfigData 接口，使用 getValue 处理
              if (this.isDynamicConfigData(value)) {
                  result[key] = this.getValue(value);  // 将处理后的值放入结果对象
              }
              // 如果值是对象或数组，递归处理
              else if (typeof value === 'object' && value !== null) {
                  result[key] = this.processObject(value);  // 递归处理嵌套对象或数组
              }
              // 对于其他类型，直接保留原值
              else {
                  result[key] = value;  
              }
          }
          return result;  // 返回新对象
      }

      else {
          return obj;
      }
  }
}