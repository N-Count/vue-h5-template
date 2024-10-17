// 本地环境配置
const apiEnv = 'JY_API_ENV'
let newApi = ''
if (apiEnv) {
  newApi = `${newApi}/${apiEnv}`
} else {
  newApi = `${process.env.CLOUD_VUE_APP_API.replace(/\/$/g, '')}`
}
module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'http://localhost:9018', // 项目地址
  baseApi: newApi, // 本地api请求地址,注意：如果你使用了代理，请设置成'/'
  APPID: 'xxx',
  APPSECRET: 'xxx',
  $cdn: 'https://www.sunniejs.cn/static'
}
