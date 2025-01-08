import { cloneDeep } from 'lodash-es';
import type { DynamicConfigData } from '@/model';

/**
 * 表示动态配置处理程序的类。
 */
/**
 * #TODO 动态数据结构设计不合理，应该参考ref通过特定函数包装，按照规则直接引用，而不是还包含特定的结构
  同时确保按照上述调整后，后端结构能保存对应的结构，保存不了的话，将结构调整为现在的结构：
    {
        _value: any;
        _mode: 'static' | 'dynamic';
        _dynExp: string;
    }
 */

export class DynamicConfig {
    private state: Record<string, any>;

    /**
     * 创建 DynamicConfig 的实例。
     * @param state - 初始状态对象。
     */
    constructor(state: Record<string, any>) {
        this.state = state;
    }

    /**
     * 根据提供的 DynamicConfigData 检索值。
     * @param data - 包含静态和动态配置的 DynamicConfigData 对象。
     * @returns 解析后的值，可以是静态值或动态值。
     */
    getValue(data: DynamicConfigData): any {
        const { _value, _mode, _dynExp } = data;
        if (_mode === 'static') return _value;
        return this.resolveDynamicValue(_dynExp);
    }

    /**
     * 根据提供的表达式解析动态值。
     * @param expression - 要评估的动态表达式。
     * @returns 表达式的评估结果，如果发生错误则返回 null。
     */
    private resolveDynamicValue(expression: string): any {
        try {
            const func = new Function('state', `return ${expression}`);
            return func(this.state);
        } catch (error) {
            console.error('评估动态表达式时出错:', error);
            return null;
        }
    }

    /**
     * 检查提供的对象是否为有效的 DynamicConfigData。
     * @param obj - 要检查的对象。
     * @returns 如果对象是 DynamicConfigData 则返回 true，否则返回 false。
     */
    isDynamicConfigData(obj: any): obj is DynamicConfigData {
        return typeof obj === 'object' && obj !== null &&
            ['string','number','boolean'].includes(typeof obj._value) &&
            ['static', 'dynamic'].includes(obj._mode);
    }

    /**
     * 处理对象，解析其中的任何动态配置数据。
     * @param data - 要处理的对象。
     * @returns 具有解析后的动态值的新对象。
     */
    processObject(data: any): any {
        const obj = cloneDeep(data);
        if (Array.isArray(obj)) {
            return obj.map(item => this.processObject(item));
        } else if (typeof obj === 'object' && obj !== null) {
            const result: any = {};
            for (const key in obj) {
                const value = obj[key];

                if (this.isDynamicConfigData(value)) {
                    result[key] = this.getValue(value);
                } else if (typeof value === 'object' && value !== null) {
                    result[key] = this.processObject(value);
                } else {
                    result[key] = value;
                }
            }
            return result;
        } else {
            return obj;
        }
    }
}
