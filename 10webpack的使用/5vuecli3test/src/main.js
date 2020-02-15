import Vue from 'vue'
import App from './App.vue'

// build的时候可以添加提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// mount会检测是否挂载app,没有挂载就会去挂载