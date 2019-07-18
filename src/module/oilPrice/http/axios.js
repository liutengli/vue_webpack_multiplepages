import axios from 'axios'
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})
let baseURL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/api'
export default {
  post(url, params) {
    return axios({
      method: 'post',
      url: baseURL + url,
      params: params.data,
      timeout: 50000
    }).then(response => {
      if (response.status === 200) {
        if (response.data) {
          if (response.data.code === 300129) {
            window.location.href = '/'
          } else if (response.data.code === 200) {
            typeof params.success === 'function' && params.success(response.data)
          } else {
            typeof params.error === 'function' && params.error(response.data.msg)
          }
        }
      } else {
        typeof params.error === 'function' && params.error('服务出错,请稍后重试')
      }
    }, err => {
      typeof params.error === 'function' && params.error(err)
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params: params.data,
      timeout: 10000
    }).then(response => {
      if (response.status === 200) { // 表示网络请求成功
        if (response.data) {
          if (response.data.code === 300129) {
            window.location.href = '/'
          } else if (response.data.code === 200) {
            typeof params.success === 'function' && params.success(response.data)
          } else {
            typeof params.error === 'function' && params.error(response.data.msg)
          }
        }
      } else {
        typeof params.error === 'function' && params.error('服务出错,请稍后重试')
        setTimeout(function () {
          window.location.href = '/'
        }, 1000)
      }
    })
  },
  downloadFile(url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params: params.data,
      timeout: 10000,
      responseType: 'arraybuffer'
    }).then(response => {
      if (response.status === 200) {
        if (response.data) {
          let headers = response.headers
          let blob = new Blob([response.data], {
            type: headers['content-type']
          })
          params.success({
            blob: blob,
            headers: headers
          })
        } else {
          params.error(response.data.code)
        }
      } else {
        typeof params.error === 'function' && params.error('服务出错,请稍后重试')
      }
    })
  }
}
