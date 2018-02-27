require.config({
  paths: {
    'vue': 'https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue',
    'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router',
    'xe-utils': 'https://cdn.jsdelivr.net/npm/xe-utils/dist/xe-utils',
    'vxe-utils': 'https://cdn.jsdelivr.net/npm/vxe-utils/dist/vxe-utils',
    'xe-ajax': 'https://cdn.jsdelivr.net/npm/xe-ajax/dist/xe-ajax',
    'vxe-ajax': 'https://cdn.jsdelivr.net/npm/vxe-ajax/dist/vxe-ajax',
    'xe-ajax-mock': 'https://cdn.jsdelivr.net/npm/xe-ajax-mock/dist/xe-ajax-mock',
    'text': 'static/require/require-text',

    'mock': 'mock/index',
    'mock-setup': 'mock/setup',
    'shopping-mock': 'mock/json/api/shopping/index',
    'user-mock': 'mock/json/api/user/index',
    'jsonp-user-mock': 'mock/jsonp/xuliangzhan.com/index',

    'router': 'router/index',
    'home': 'views/home'
  },
  shim: {
    mock: {
      deps: ['mock-setup']
    }
  }
})

define([
  'vue',
  'xe-ajax',
  'vxe-ajax',
  'xe-utils',
  'vxe-utils',
  'router'
].concat(location.hostname.indexOf('localhost') === 0 ? ['mock'] : []), function (Vue, XEAjax, VXEAjax, XEUtils, VXEUtils, router) {
  // 安装
  Vue.use(VXEAjax, XEAjax, true) // 如果第三个参数设置为true，则启动模拟 Promise 模式，通过 this.$ajax 发起的请求 this 默认指向当前vue实例。
  Vue.use(VXEUtils, XEUtils)

  // 设置默认参数
  XEAjax.setup({
    bodyType: 'FORM_DATA'// 默认已json方式提交，修改为form data方式提交,根据后台支持情况设置
  })

  XEAjax.interceptors.request.use(function (request, next) {
    // 请求之前拦截器
    next()
  })

  XEAjax.interceptors.response.use(function (response, next) {
    // 响应之后拦截器
    next()
  })

  return new Vue({
    el: '#app',
    router: router
  })
})
