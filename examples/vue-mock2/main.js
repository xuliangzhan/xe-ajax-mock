require.config({
  paths: {
    'vue': 'https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue',
    'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router',
    'xe-utils': 'https://cdn.jsdelivr.net/npm/xe-utils/dist/xe-utils',
    'xe-ajax': 'https://cdn.jsdelivr.net/npm/xe-ajax/dist/xe-ajax',
    'xe-ajax-mock': 'https://cdn.jsdelivr.net/npm/xe-ajax-mock/dist/xe-ajax-mock',
    'text': 'static/require/require-text',

    'mock': 'mock/index',
    'mock-setup': 'mock/setup',
    'mock-config': 'mock/error',
    'shopping-mock': 'mock/json/api/shopping/index',
    'user-mock': 'mock/json/api/user/index',
    'jsonp-user-mock': 'mock/jsonp/xuliangzhan.com/index',

    'router': 'router/index',
    'home': 'views/home'
  },
  shim: {
    mock: {
      deps: ['mock-setup']
    },
    'mock-config': {
      deps: ['shopping-mock', 'user-mock', 'jsonp-user-mock']
    }
  }
})

define([
  'vue',
  'xe-ajax',
  'router',
  'mock'
].concat(location.hostname.indexOf('localhost') === 0 ? ['mock'] : []), function (Vue, XEAjax, router) {
  // XEAjax 参数设置
  XEAjax.setup({
    bodyType: 'FORM_DATA',
    credentials: 'include'
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
