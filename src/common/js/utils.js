/**
 * Created by Exotic on 2017/5/26.
 */
import axios from 'axios'
import Vue from 'vue'
const CODE_OK = '000'

export class xhr {
  static _axios ({method = 'GET', url = '', responseType = 'application/json', requestData} = {}) {
    let vm = new Vue()
    return axios({method, url, responseType, requestData})
      .then(response => {
        if (response.data.code !== CODE_OK) {
          vm.$Message.warning(response.data.data)
        } else {
          return response.data.data
        }
      })
      .catch((data) => {
        vm.$Message.error(data.toString())
      })
  }
  static get (url) {
    return xhr._axios({url})
  }

  static post (url, requestData) {
    return xhr._axios({method: 'POST', url, requestData})
  }

  static put (url, requestData) {
    return xhr._axios({method: 'put', url, requestData})
  }

  static delete (url, requestData) {
    return xhr._axios({method: 'delete', url, requestData})
  }

  // 并发请求
  static all (...reqs) {
    let httpsArray = []
    for (let req of reqs) {
      httpsArray.push(xhr._axios({method: req.method, url: req.url, requestData: req.requestData}))
    }
    return axios.all(httpsArray)
      .then(axios.spread((...datas) => {
        return datas
      }))
  }

}
