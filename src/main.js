import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import "./rem.js"
import _ from 'lodash'
import echarts from 'echarts'
import * as api from '@/utils/api'
import * as request from '@/utils/request'
import './style/font.less';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = request
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api
Vue.prototype.$replaceLoadingElement = function (instance) {
  const loading = ElementUI.Loading.service({
    target: instance.$el.querySelector('.el-message-box')
  })
  return loading
}
Vue.prototype.$widthCoefficient = document.documentElement.clientWidth / 1920 //widthCoefficient数字系数,用于组件中无法动态变化大小的情况
// Vue.prototype.$widthCoefficient = 1 //widthCoefficient数字系数,用于组件中无法动态变化大小的情况
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
