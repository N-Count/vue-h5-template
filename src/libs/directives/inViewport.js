import { debounce } from 'lodash'
// 防抖时长
const debounceTime = 300
// 设置元素进入可视窗口占比，占比达到设置的值就认为元素可见
const threshold = 0.15
// 设置元素距离可视窗口距离（用来控制当页面加载元素数据量太多通知元素可以做清除数据操作，避免导致页面崩溃）
const farthestPx = 5000
// 判断浏览器是否支持IntersectionObserver
const browserCompatible = () => {
  // 默认不兼容
  let flag = false
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    flag = true
  } else {
    flag = false
  }

  return flag
}

// IntersectionObserver 方案函数
const intersectionObserverProgram = (el, binding) => {
  let options = {
    rootMargin: '0px',
    threshold: threshold
  }
  const debounceCallback = debounce(state => {
    binding.value(state)
  }, debounceTime)
  const handleScroll = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素在可视窗口中
        debounceCallback(true)
      } else {
        // 元素不在可视窗口中
        debounceCallback(false)
      }
    })
  }
  let observer = new IntersectionObserver(handleScroll, options)
  observer.observe(el)

  // 在组件销毁时取消观察
  el._vueIntersectionObserver = observer
}

// getBoundingClientRect 方案
const getBoundingClientRectProgram = (el, binding) => {
  const debounceCallback = debounce(state => {
    binding.value(state)
  }, debounceTime)
  const handleScroll = () => {
    let { bottom, height } = el.getBoundingClientRect()
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight
    if (bottom && height && viewportHeight) {
      // 顶部偏差值，元素超出视口顶部后，在视口留出的可视高度偏差值
      let topDeviationVal = height * threshold
      // 底部偏差值，元素在进入视口底部后，在视口留出的可视高度偏差值
      let bottomDeviationVal = height * (1 - threshold)
      // 当前dom元素底部距离可视窗口顶部间距
      let domSpacing = bottom - bottomDeviationVal
      // 判断是否在可视范围内
      let isInViewport = domSpacing >= topDeviationVal && domSpacing <= viewportHeight
      debounceCallback(isInViewport)
    }
  }
  // 监听滚动事件和窗口调整大小事件
  document.addEventListener('scroll', handleScroll, true)
  document.addEventListener('resize', handleScroll, true)

  // 在组件销毁时移除事件监听
  el._vueInViewportListener = handleScroll
}

// 指令中bind钩子执行函数
const bindFun = (el, binding) => {
  let isCompatible = browserCompatible()
  el._browserCompatible = isCompatible
  if (isCompatible) {
    intersectionObserverProgram(el, binding)
  } else {
    getBoundingClientRectProgram(el, binding)
  }
}

// 指令中 unbind钩子执行函数
const unbindFun = el => {
  if (el._browserCompatible) {
    if (el._vueIntersectionObserver) {
      el._vueIntersectionObserver.disconnect()
      delete el._vueIntersectionObserver
    }
  } else {
    if (el._vueInViewportListener) {
      window.removeEventListener('scroll', el._vueInViewportListener)
      window.removeEventListener('resize', el._vueInViewportListener)
      delete el._vueInViewportListener
    }
  }
  delete el._browserCompatible
}

// 指令 判断当前元素是否在可视窗口内
const inViewport = {
  bind: function (el, binding) {
    bindFun(el, binding)
  },
  unbind: function (el) {
    unbindFun(el)
  }
}

// 判断是否满足距离条件
const meetConditions = (el, binding) => {
  const debounceCallback = debounce(state => {
    binding.value(state)
  }, debounceTime)
  const handleScroll = () => {
    let { bottom, height } = el.getBoundingClientRect()
    if (bottom > 0) {
      bottom = bottom - height
    }
    debounceCallback(Math.abs(bottom) > farthestPx)
  }
  // 监听滚动事件和窗口调整大小事件
  document.addEventListener('scroll', handleScroll, true)
  document.addEventListener('resize', handleScroll, true)

  // 在组件销毁时移除事件监听
  el._vueClearDomDataListener = handleScroll
}

// 指令 判断是否需要清除dom数据操作
const clearDomData = {
  bind: function (el, binding) {
    meetConditions(el, binding)
  },
  unbind: function (el) {
    if (el._vueClearDomDataListener) {
      window.removeEventListener('scroll', el._vueClearDomDataListener)
      window.removeEventListener('resize', el._vueClearDomDataListener)
      delete el._vueClearDomDataListener
    }
  }
}

export { inViewport, clearDomData }
