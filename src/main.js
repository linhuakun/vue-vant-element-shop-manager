import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment';
import './plugins/element.js'
import '@/plugins/mint.js'

import request from '@/network/request';
import VueBus from 'vue-bus'
import VueLazyload from 'vue-lazyload'
import echarts from 'echarts'

Vue.use(VueBus)

moment.locale('zh-cn');

Vue.prototype.$moment=moment;

// 引入echarts
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false


//公共请求头
Vue.prototype.$http=request;


Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.svg')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
