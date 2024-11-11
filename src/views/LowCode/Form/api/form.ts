import request from '@/utils/request'
import type { LCFormItemCfg, ControlType, PageParams, LCFormCfg, ResPage } from '@/model'

export default {
  getList: (params: PageParams) => {
    return request<ResPage<LCFormCfg[]>>({
      method: 'get',
      url: 'form/list',
      params
    })
  },
  getDetail: (id: string) => {
    return request<LCFormCfg>({
      method: 'get',
      url: 'form/detail',
      params: {
        id
      }
    })
  },
  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'form/remove',
      params: {
        id
      }
    })
  },
  add: (data: LCFormCfg) => {
    return request({
      method: 'post',
      url: 'form/add',
      data
    })
  },
  update: (data: LCFormCfg) => {
    return request({
      method: 'post',
      url: 'form/update',
      data
    })
  },
  getTemplate: (id: string) => {
    return request<string>({
      method: 'get',
      url: '/form/template',
      params: {
        id
      }
    })
  }
}
