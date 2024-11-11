import type { Obj } from '@/model'
import controlDefault from './ControlDefault'
import { cloneDeep } from 'lodash-es'
const createRandomField = () => {
  return 'field' + new Date().getTime().toString().slice(-4)
}
const initFormControl = (type: string, options?: Obj<any>) => {
  const cfg = controlDefault.find((e) => e.type === type)
  if (cfg) {
    const cloneCfg = cloneDeep(cfg)
    if (cloneCfg.formItemProp) {
      const field = createRandomField()
      cloneCfg.formItemProp.label = field
      cloneCfg.formItemProp.name = field
    }
    cloneCfg.id = new Date().getTime().toString()
    return {
      ...cloneCfg,
      ...options
    }
  } else {
    throw new Error(`ControlDefault中${type}不存在,加载配置失败。`)
  }
}
export default initFormControl
