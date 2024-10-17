import dayjs from 'dayjs'
import { cloneDeep } from 'lodash'

const util = {}

/**
 * @description 节流 ：规定延迟时间（delay）内只执行最开始触发的函数
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 延迟的时间
 * @returns {Function}
 */
util.throttle = function (fn, delay) {
  var canRun = true
  return function () {
    var that = this
    var args = arguments
    if (!canRun) return // 注意，这里不能用timer来做标记，因为setTimeout会返回一个定时器id
    canRun = false
    fn.apply(that, args)
    setTimeout(function () {
      canRun = true
    }, delay)
  }
}

/**
 * @description 防抖：上个函数在规定延迟时间（delay）内未开始执行就接连触发的函数只执行最后触发的函数
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 延迟的时间
 * @returns {Function}
 */
util.decounce = function (fn, delay) {
  let timer = null
  return function () {
    let args = arguments
    if (timer !== null) {
      // 每次调用debounce函数都会将前一次的timer清空，确保只执行一次
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * @description 传入内容是否为空值
 * @param expect 传入值
 */
util.isEmpty = function (expect) {
  return (
    expect === undefined ||
    expect === 'undefined' ||
    expect === 'null' ||
    expect === null ||
    (typeof expect === 'string' && expect.trim() === '') ||
    (typeof expect === 'number' && expect.toString() === 'NaN') ||
    (expect.constructor === Object && Object.keys(expect).length === 0)
  )
}

/**
 * @description 传入内容是否不为空值
 * @param expect 传入值
 */
util.notEmpty = function (expect) {
  return !util.isEmpty(expect)
}

/**
 * 深拷贝
 * @param obj 需拷贝的内容
 * @returns
 */
util.deepClone = function (obj) {
  let _tmp = JSON.stringify(obj) // 将对象转换为json字符串形式
  let result = JSON.parse(_tmp) // 将转换而来的字符串转换为原生js对象
  return result
}

/**
 * 生成随机字符串
 * @param len 表示长度，默认32位
 * @returns
 */
util.randomString = function (len = 32) {
  const template = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
  let str = ''
  for (let i = 0; i < len; i++) {
    str += template.charAt(Math.floor(Math.random() * template.length))
  }
  return str
}

// 数字近似相等
util.nearlyEquals = function (a, b) {
  if (isNaN(a)) return false
  if (isNaN(b)) return false
  return Math.abs(Number(a) - Number(b)) < 1e-6
}

// 防抖
util.debounce = function (func, wait, immediate) {
  let timeout, args, context, timestamp, result
  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...arg) {
    args = arg
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

util.getChartType = {
  1: 'line',
  2: 'bar',
  3: 'radar',
  5: 'scatter', // 散点
  6: 'bar', // '堆叠柱状图'
  7: 'line', // 折线季节图
  10: 'bar',
  12: 'line'
}

// 指标频率
util.indicatorFrequency = {
  1: '日',
  2: '周',
  3: '月',
  4: '季',
  5: '年'
}

// 指标Y轴左右
util.chartAsis = {
  1: '左轴',
  2: '右轴'
}

util.thousands = function (thisVal, num, defaultVal, fmt) {
  if (util.isEmpty(thisVal) || util.isEmpty(Number(thisVal))) {
    return util.isEmpty(defaultVal) ? '--' : defaultVal
  }

  // 去掉可能的已经是千分位字符串中的逗号
  thisVal = (thisVal || '').toString().replace(/,/g, '')

  // 固定保留的小数位数
  num = typeof num === 'undefined' || num * 1 < 0 ? 2 : num

  var prefix = ''
  var strN = util.toFixed(thisVal * 1, num).toString()

  // 找出字符串中可能的负号
  if (strN.indexOf('-') === 0) {
    prefix = '-'
    strN = strN.substr(1)
  }

  var pindex = strN.indexOf('.')
  var suffix
  var result = ''
  suffix = pindex >= 0 ? strN.substr(pindex, strN.length) : ''
  strN = pindex >= 0 ? strN.substr(0, pindex) : strN
  while (strN.length > 3) {
    result = ',' + strN.slice(-3) + result
    strN = strN.slice(0, strN.length - 3)
  }

  result = prefix + strN + result + suffix

  if (!util.isEmpty(fmt)) {
    result = result + fmt
  }
  return result
}

/**
 * 解决chrome下toFixed当小数四舍五入精度后一位是5，导致四舍五入不准确的问题
 */
util.toFixed = function (num, n) {
  return (num + 1e-14).toFixed(n)
}

// downloadFilename   // 设置导出的文件名
util.blob2Excel = (res, downloadFilename, optType) => {
  let blob = new Blob([res]) // response.data为后端传的流文件
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // 兼容ie浏览器
    window.navigator.msSaveOrOpenBlob(blob, downloadFilename)
  } else {
    // 谷歌,火狐等浏览器
    // TODO 客户端预览pdf文件
    if (downloadFilename.endsWith('.pdf') && optType !== 'download') {
      // 预览pdf
      blob = new Blob([res], { type: 'application/pdf' })
      let href = window.URL.createObjectURL(blob)
      window.open(href, '_blank')
    } else {
      blob = new Blob([res], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      let url = window.URL.createObjectURL(blob)
      let downloadElement = document.createElement('a')
      downloadElement.style.display = 'none'
      downloadElement.href = url
      downloadElement.download = downloadFilename
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)
      window.URL.revokeObjectURL(url)
    }
  }
}

// 数组去重
util.unique = arr => {
  return Array.from(new Set(arr))
}

/**
 * 格式化日期  可以是单个日期也可以是起始日期
 * @param {原始日期数据} dates
 * @param {格式} format
 */
util.formatDate = (dates, format = 'YYYY-MM-DD') => {
  let res = ''
  if (Array.isArray(dates)) {
    res = []
    for (let i = 0; i < dates.length; i++) {
      let value = dates[i]
      res.push(dayjs(value).format(format))
    }
  } else {
    res = dayjs(dates).format(format)
  }
  return res
}

/**
 * 获取浏览器和版本号
 * @return {string}
 */
util.getBrowser = () => {
  let ua = navigator.userAgent.toLowerCase()
  const ie = ua.match(/msie ([\d.]+)/)
  const firefox = ua.match(/firefox\/([\d.]+)/)
  const chrome = ua.match(/chrome\/([\d.]+)/)
  const opera = ua.match(/opera.([\d.]+)/)
  const safari = ua.match(/version\/([\d.]+).*safari/)

  if (ie) return `ie: ${ie[1]}`
  if (firefox) return `firefox: ${firefox[1]}`
  if (chrome) return `chrome: ${chrome[1]}`
  if (opera) return `opera: ${opera[1]}`
  if (safari) return `safari: ${safari[1]}`
  return ''
}

/**
 * 获取操作系统
 * @return {string}
 */
util.getOS = () => {
  let sUserAgent = navigator.userAgent
  let isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows'
  let isMac =
    navigator.platform === 'Mac68K' ||
    navigator.platform === 'MacPPC' ||
    navigator.platform === 'Macintosh' ||
    navigator.platform === 'MacIntel'
  if (isMac) return 'Mac'
  let isUnix = navigator.platform === 'X11' && !isWin && !isMac
  if (isUnix) return 'Unix'
  let isLinux = String(navigator.platform).indexOf('Linux') > -1
  if (isLinux) return 'Linux'
  if (isWin) {
    let isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1
    if (isWin2K) return 'Win2000'
    let isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1
    if (isWinXP) return 'WinXP'
    let isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1
    if (isWin2003) return 'Win2003'
    let isWinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1
    if (isWinVista) return 'WinVista'
    let isWin7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1
    if (isWin7) return 'Win7'
    let isWin10 = sUserAgent.indexOf('Windows NT 10') > -1 || sUserAgent.indexOf('Windows 10') > -1
    if (isWin10) return 'Win10'
  }
  return 'other'
}

/**
 * 检测数据是否是满足条件的
 * @param {要校验的数字} num
 * @param {整数位长度} integerLen
 * @param {小数位长度} decimalLen
 * @param {整数位最大数值限制} integerLimit
 * @param {如果是整数，是否校验整数部分} isCheckInteger
 */
util.checkNum = (num, integerLen = 3, decimalLen = 2, integerLimit = 100, isCheckInteger = true) => {
  let res = {
    msg: '',
    num: ''
  }
  // 首先校验是否是一个有效的数字
  let regNum = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g
  if (!regNum.test(num)) {
    res.msg = '请输入有效的数字！'
  } else {
    // 判断是否是一个小数
    if (num.toString().includes('.')) {
      let [$1, $2] = num.toString().split('.')
      // 判断是否是负数
      if ($1.startsWith('-')) {
        $1 = $1.slice(1)
      }
      let newIntegerLimit = Number($2) > 0 ? integerLimit - 1 : integerLimit
      if (integerLen > 0 && Number($1) > newIntegerLimit) {
        res.msg = `正负最大不超过${integerLimit}！`
      } else if (decimalLen > 0 && $2.toString().length > decimalLen) {
        res.msg = `只能输入${decimalLen}位小数！`
      } else {
        res.num = Number(num)
      }
    } else {
      if (isCheckInteger) {
        // 判断是否是负数
        let compareNum = num
        if (num.toString().startsWith('-')) {
          compareNum = num.slice(1)
        }
        compareNum = num
        if (Number(compareNum) > integerLimit) {
          res.msg = `整数部位最大不超过正负${integerLimit}！`
        } else {
          res.num = Number(num)
        }
      } else {
        res.num = Number(num)
      }
    }
  }
  return res
}

// footer翻页计算滚动
util.hasScrollbar = that => {
  // footerDom.style.opacity = 0
  that.$nextTick(() => {
    setTimeout(() => {
      const footerDom = document.querySelector('.jy-flex-center-row')
      const contentDom = document.querySelector('.jy-frame-container')
      const boxDom = document.querySelector('.jy-frame-container-box')
      if (!footerDom || !contentDom || !boxDom) return
      if (parseInt(contentDom.clientHeight) < parseInt(boxDom.scrollHeight)) {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
          footerDom.style.width = 'calc(100% - 48px)'
          footerDom.style.left = '-16px'
        } else {
          footerDom.style.width = 'calc(100% - 50px)'
          footerDom.style.left = '-10px'
        }
      } else {
        footerDom.style.width = 'calc(100% -  40px)'
        footerDom.style.left = '0'
      }
    }, 500)
  })
}

/**
 *  十六进制转RGBA
 * @param {*} hex  16进制颜色值
 * @param {*} opacity  透明度
 */
util.hexToRgba = (hex, opacity) => {
  return (
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  )
}

/**
 * 根据页面名称判断当前页面是否需要隐藏  配合页面灰度测试使用
 * @param {页面名称} pageName
 */
util.pageNameExist = pageName => {
  let res = false
  let { HIDEPAGEENTRY: hidePageNameList = [] } = window.CONFIG
  if (hidePageNameList.length > 0) {
    res = hidePageNameList.includes(pageName)
  }
  return res
}
/**
 * @param article 文章段落
 * @param keyword 高亮词
 */
util.highKeywords = (article, keyword = '', classStyle = 'high-primary-text') => {
  let key = []
  const encode = (keyword, flag = true) => {
    // 特殊字符转义
    const regs = /\[|\(|\$|\^|\]|\.|\*|\?|\+|\{|\}|\)/gi
    return flag ? keyword.replace(/\\/gi, '') : keyword.replace(regs, key => `\\${key}`)
  }
  if (typeof keyword === 'string') {
    key.push(encode(keyword, false))
  } else {
    key = keyword
  }
  if (article) {
    key.forEach(item => {
      if (item) {
        const Reg = new RegExp(item, 'ig')
        const datas = cloneDeep(article)
        article = datas?.replace(Reg, `<span class="${classStyle}">${encode(item)}</span>`)
      }
    })
    return article
  }
}

//  文字换行
util.breakWord = val => {
  return val.replace(/\n/g, '<br/>')
}

// 根据文件名获取文件后缀
util.matchFileSuffixType = function (fileName) {
  // 后缀获取
  var suffix = ''
  // 获取类型结果
  var result = ''
  if (!fileName) return result
  try {
    var flieArr = fileName.split('.')
    suffix = flieArr[flieArr.length - 1]
  } catch (err) {
    suffix = ''
  }
  // fileName无后缀返回 false
  if (!suffix) {
    result = false
    return result
  }
  // 图片格式
  var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp']
  // 进行图片匹配
  result = imglist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'image'
    return result
  }
  // 匹配txt
  var txtlist = ['txt']
  result = txtlist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'txt'
    return result
  }
  // 匹配 excel
  var excelist = ['xls', 'xlsx']
  result = excelist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'excel'
    return result
  }
  // 匹配 word
  var wordlist = ['doc', 'docx']
  result = wordlist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'word'
    return result
  }
  // 匹配 pdf
  var pdflist = ['pdf']
  result = pdflist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'pdf'
    return result
  }
  // 匹配 ppt
  var pptlist = ['ppt']
  result = pptlist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'ppt'
    return result
  }
  // 匹配 视频
  var videolist = ['mp4', 'm2v', 'mkv']
  result = videolist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'video'
    return result
  }
  // 匹配 音频
  var radiolist = ['mp3', 'wav', 'wmv']
  result = radiolist.some(function (item) {
    return item === suffix
  })
  if (result) {
    result = 'radio'
    return result
  }
  // 其他 文件类型
  result = 'other'
  return result
}

/**
 * 解析URL中的参数
 * @param {String} url
 * @returns 返回解析后的参数对象
 */
util.parseUrlQuery = function (url) {
  let result = null
  let query = url.indexOf('?') ? url.slice(url.indexOf('?') + 1) : url
  if (query) {
    result = {}
    let params = query.split('&') // 分割成数组
    for (let i = 0, len = params.length; i < len; i++) {
      let item = params[i].split('=')
      let name = decodeURIComponent(item[0]) // 解码参数名
      let value = decodeURIComponent(item[1]) // 解码参数值
      result[name] = value
    }
  }
  return result
}

/**
 * 判断是否是有效的域名
 */
util.isDomainName = url => {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return pattern.test(url)
}

// pdf doc docx ppt ppt直接下载  {
util.downloadDocument = async function (blob, fileName = '') {
  if (!blob) return
  const extension = fileName.split('.').pop().toLowerCase()
  // 判断文档类型
  const supportedExtensions = ['pdf', 'doc', 'docx', 'ppt', 'pptx']
  if (!supportedExtensions.includes(extension)) {
    console.error('Unsupported document type')
    return
  }
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName // 不设置文件名，浏览器会使用默认的文件名
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href) // 释放内存
}

export default util
