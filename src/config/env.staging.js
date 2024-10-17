const apiEnvKey = 'new_dev'
const apiEnv = localStorage.getItem(apiEnvKey) || ''
let newApi = ''
if (apiEnv) {
  newApi = `${newApi}/${apiEnv}`
} else {
  newApi = `${process.env.CLOUD_VUE_APP_API.replace(/\/$/g, '')}`
}
module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'http://localhost:9018', // 测试项目地址
  baseApi: newApi, // 测试api请求地址
  APPID: 'xxx',
  APPSECRET: 'xxx',
  $cdn: 'https://www.sunniejs.cn/static'
}
