import { inViewport, clearDomData } from './inViewport'

const directives = {
  'in-viewport': inViewport,
  'clear-dom-data': clearDomData
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
