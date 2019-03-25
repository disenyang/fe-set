/**
 * Created by gaoyang on 2019/03/25
 */
import Http from '@utils/Http'
// 组件操作
export const save = params =>
  Http.setPromise(`POST`, `/api/basiccom/add`, params)
