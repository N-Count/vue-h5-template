// 正式
let newApi = `${window.CONFIG.CLOUD_VUE_APP_API.replace(/\/$/g, '')}`
module.exports = {
  title: 'vue-h5-template',
  baseUrl: 'https://www.xxx.com/', // 正式项目地址
  baseApi: newApi, // 正式api请求地址
  APPID: 'xxx',
  APPSECRET: 'xxx',
  $cdn: 'https://www.sunniejs.cn/static'
}
