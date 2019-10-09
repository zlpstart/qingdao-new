import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import 'lib-flexible'
import router from './router'
import axios from 'axios'
import vConsole from './assets/vsconsole'
// import vconsole from 'vconsole'
// import $ from 'jquery'
// import wxShare from 'weixin-js-sdk'


//vuex
import vuex from 'vuex'
Vue.use(vuex)
Vue.use(vConsole)


import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import store from './store'
require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.config.productionTip = false
Vue.prototype.$ajax = axios


// import VueWechatTitle from 'vue-wechat-title'
// Vue.use(VueWechatTitle)


// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
