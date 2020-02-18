import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// beforeEach是router内置的函数,参数是一个箭头函数,有三个参数,to from next
// 其中next是一个函数,必须调用,to和from是一个route对象,从from跳转到to
// router.beforeEach(function(to,from,next){
	
// })
router.beforeEach((to,from,next) => {
	console.log(to);
	// 路由嵌套的时候会找不到二级路由的标题
	// document.title = to.meta.title;
	// 解决路由嵌套的问题
	document.title = to.matched[0].meta.title;
	next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
