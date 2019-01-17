/**
 * Created by zhuangwei on 2018/1/2.
 */
import axios from 'axios'
export default class Http {
  static setPromise (method, url, data) {
    return new Promise((resolve, reject) => {
      switch (method.toUpperCase()) {
        case 'GET':
          axios.get(url, {
            params: data
          }).then((res) => {
            if (res) {
              resolve(res.data)
            } else {
              reject(new Error())
            }
          })
          break
        case 'POST':
        case 'PUT':
          axios({
            method: method,
            url: url,
            data: data
          }).then((res) => {
            if (res) {
              resolve(res.data)
            } else {
              reject(new Error())
            }
          })
          break
        case 'DELETE':
          axios.delete(url, {
            data: data
          }).then((res) => { // 后台已RequestBody接收
            if (res) {
              resolve(res.data)
            } else {
              reject(new Error())
            }
          })
          break
      }
    })
  };
}
