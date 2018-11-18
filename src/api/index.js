import axios from 'axios'
import Vue from 'vue'
import configs from './configs'

axios.defaults.baseURL = configs.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use((response) => {
  // Do something with response data
  return response
}, (error) => {
  console.log('request error ----> ', error)
  return Promise.reject(error)
})

const _handleResponse = (res) => {
  // const data = res.data
  const data = res
  return Promise.resolve(data.data)
}

export default Vue.prototype.$http = {
  get (url, query) {
    return axios.get(url, {
      params: query
    }).then(_handleResponse)
  },
  post (url, query) {
    return axios.post(url, query).then(_handleResponse)
  },
  put (url, body) {
    return axios.put(url, body).then(_handleResponse)
  },
  del (url, query) {
    return axios.delete(url, {
      params: query
    }).then(_handleResponse)
  }
}