/**
 * Created by zhuangwei on 2018/1/2
 */
import Http from '@utils/Http'

// 测试
export const accountsInfo = (params) => Http.setPromise(`GET`, '/api/v1/accounts/info', params)

// 获取左侧菜单
export const menus = (params) => Http.setPromise(`GET`, `/static/json/menu.json`, params)

export const thread = (params) => Http.setPromise(`GET`, `/static/json/thread.json`, params)

export const setFlag = (params) => Http.setPromise(`GET`, `/static/json/set.json`, params)
