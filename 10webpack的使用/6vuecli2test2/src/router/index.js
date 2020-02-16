import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
		// 默认路由
		{
			path: '/',
			// 重定向
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			// 这里的userId是在后面需要的,通过userId获取到url中的信息
			path: '/User/:userId',
			name: 'user',
			component: User
		}
  ],
  mode:'history',
})
