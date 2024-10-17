import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import util from '@/utils/index'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

const methodGetParams = url => {
  let newUrl = `${url}?${new Date().getTime()}`
  return newUrl
}

let errorFlag = true
function errorDialog(message) {
  if (errorFlag) {
    errorFlag = false
    Toast(message, '提示', {
      // center: true,
      center: false,
      showClose: false
    }).then(() => {
      errorFlag = true
      store.dispatch('d2admin/account/logout', { confirm: false })
    })
  }
}

// 记录和显示错误
function errorLog(error) {
  // 添加到日志
  // store.dispatch('d2admin/log/push', {
  //   message: '数据请求异常',
  //   type: 'danger',
  //   meta: {
  //     error
  //   }
  // })
  // 打印到控制台
  // if (process.env.NODE_ENV === 'development') {
  //   util.log.danger('>>>>>> Error >>>>>>')
  //   console.log(error)
  // }
  // Message.closeAll()
  // 显示提示
  // 只有错误内容才会提示
  // if (error && error.message) {
  //   Message({
  //     message: error.message,
  //     type: 'error',
  //     duration: 4 * 1000,
  //     offset: 70
  //   })
  // }
}

// 创建一个错误
function errorCreate(msg, response) {
  const error = new Error(msg)
  errorLog(error)
  if (window.CONFIG?.CLOUD_VUE_APP_ENABLE_SENTRY && response?.config?.baseURL) {
    // msg中有error/异常/系统 或者code中有9999 则触发告警
    const warningWord = window.CONFIG.CLOUD_SENTRY_KEYWORDS || ['error', '异常', '系统', 'not found']
    if (warningWord.find(i => msg?.toLowerCase().includes(i)) || response?.data?.code.includes('9999')) {
      console.error(
        'userId = ' + store.state.d2admin?.user?.info?.userId,
        '\nrequest = ' + JSON.stringify(response.config.data),
        '\nresponse = ' + JSON.stringify(response.data)
      )
    }
  }

  throw error
}

// 接口请求埋点
const requestInterfaceGather = config => {
  let { method = '', data = '', params = {} } = config
  let reqParams = {}
  let requestParams = ''
  // 获取get/post入参
  if (method.toLowerCase() === 'get') {
    requestParams = JSON.stringify(params)
  }
  if (method.toLowerCase() === 'post') {
    requestParams = JSON.stringify(data)
  }
  let num = 0
  // 神策数据库最大存储长度为500
  while (requestParams.length > 500) {
    reqParams[num === 0 ? 'request_params' : `request_params${num}`] = requestParams.slice(0, 500)
    num++
    requestParams = requestParams.slice(500)
  }
  // 将剩余参数也存储上报
  if (requestParams.length > 0) {
    reqParams[`request_params${num++}`] = requestParams
  }
}

// 请求拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    // config.headers['token'] = util.cookies.get('token')
    // 设备类型
    // config.headers['deviceType'] = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)? 'PHONE' : 'PC'
    // 网络类型
    // config.headers['network'] = navigator.connection ? navigator.connection.effectiveType : ''
    // 浏览器版本
    // config.headers['browser'] = util.getBrowser()
    // 操作系统
    // config.headers['os'] = util.getOS()
    // 配合方舟项目增加参数
    // config.headers['feign-version'] = localStorage.getItem('cloud-portal-feign-version') || ''
    //  解决ie get请求缓存问题
    if (config.method === 'get') {
      config.url = methodGetParams(config.url)
    }
    config.requestStart = Date.now()
    // 接口请求埋点
    try {
      requestInterfaceGather(config)
    } catch (e) {
      console.log(e)
    }
    return config
  },
  error => {
    // 发送失败
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    console.log('00000', response)
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code } = dataAxios
    // 根据 code 进行判断
    if (code === undefined) {
      // 文件下载，如果远端返回了附件文件名，则使用后端文件名
      if (response.headers['content-disposition']?.startsWith('attachment;filename=')) {
        return {
          fileName: response.headers['content-disposition']
            ? decodeURIComponent(response.headers['content-disposition'].split(';')[1].split('=')[1])
            : new Date().getTime() + '.xlsx',
          blob: dataAxios
        }
      }

      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
      return dataAxios
    } else {
      // 判断是否需要自己处理业务错误
      let handlerBusinessError = false
      if (typeof response.config.data === 'string') {
        handlerBusinessError = JSON.parse(response.config.data).handlerBusinessError || false
      }

      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (code) {
        case '0000':
        case '00000000':
          // [ 示例 ] code === 0 代表没有错误
          return util.isEmpty(dataAxios.data) ? {} : dataAxios.data
        case '01020005':
          // 登录超时
          errorDialog('您的登录已失效，请重新登录')
          // return Promise.reject(dataAxios)
          return
        case '01020004':
          // 登录超时
          errorDialog('您的登录已失效，请重新登录')
          // return Promise.reject(dataAxios)
          return
        default:
          // 不是正确的 code
          if (handlerBusinessError) {
            // 前端处理的error code
            return Promise.reject(dataAxios)
          } else {
            // 后端返回的异常
            errorCreate(dataAxios.msg || dataAxios.message, response)
          }
          break
      }
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
    }
    errorLog(error)
    window.CONFIG.CLOUD_VUE_APP_ENABLE_SENTRY && window.$Sentry.captureException(error)
    return Promise.reject(error)
  }
)

export default service
