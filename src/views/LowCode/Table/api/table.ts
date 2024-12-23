import request from '@/utils/request'
import type { PageParams, LowCodeTable, ResPage } from '@/model'

export default {
  getList: (params: PageParams) => {
    return request<ResPage<LowCodeTable[]>>({
      method: 'get',
      url: 'table/list',
      params
    })
  },
  getDetail: (id: string) => {
    return request<LowCodeTable>({
      method: 'get',
      url: 'table/detail',
      params: {
        id
      }
    })
  },
  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'table/remove',
      params: {
        id
      }
    })
  },
  add: (data: LowCodeTable) => {
    return request({
      method: 'post',
      url: 'table/add',
      data
    })
  },
  update: (data: LowCodeTable) => {
    return request({
      method: 'post',
      url: 'table/update',
      data
    })
  },

}
