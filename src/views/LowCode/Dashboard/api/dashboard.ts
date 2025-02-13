import request from '@/utils/request'
import type { DashboardInfo, PageParams, LCFormCfg, ResPage } from '@/model'

export default {
  getList: (params: PageParams) => {
    return request<ResPage<DashboardInfo[]>>({
      method: 'get',
      url: 'dashboard/list',
      params
    })
  },
  getDetail: (id: string) => {
    return request<DashboardInfo>({
      method: 'get',
      url: 'dashboard/detail',
      params: {
        id
      }
    })
  },
  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'dashboard/remove',
      params: {
        id
      }
    })
  },
  add: (data: DashboardInfo) => {
    return request({
      method: 'post',
      url: 'dashboard/add',
      data
    })
  },
  update: (data: DashboardInfo) => {
    return request({
      method: 'post',
      url: 'dashboard/update',
      data
    })
  }
}
