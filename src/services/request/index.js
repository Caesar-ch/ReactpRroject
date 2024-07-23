import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"
import { createBrowserHistory, createHashHistory } from "history";
import utils from "../../utils"

const customHistory = createBrowserHistory();
const hash = createHashHistory()
const token = localStorage.getItem('token') || ''

class ChRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout })

    this.instance.interceptors.response.use((res) => {
      // 在这里判断如果返回的值中有code为401 则代表没有token校验成功需要重新登录跳转login
      console.log('响应劫持', res);
      if (res.data.code === 401) {
        hash.replace("/login")
        window.location.reload()
        return
      }
      return res.data
    }, err => {
      return err
    })

    this.instance.interceptors.request.use((config) => {
      config.headers.Authorization = 'Bearer' + ' ' + localStorage.getItem('token')
      return config
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    console.log(config);
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new ChRequest(BASE_URL, TIMEOUT)
