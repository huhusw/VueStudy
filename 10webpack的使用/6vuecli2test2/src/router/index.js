import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 不是懒加载
// import Home from '../components/Home.vue'
// import User from '../components/User.vue'
// import About from '../components/About.vue'
// 懒加载
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')

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
			component: Home,
			// 配置title属性
			meta:{
				title:'首页',
			},
			// 配置子路由
			children:[
				{
					path:'',
					redirect: '/home/news'
				},
				{
					path:'news',
					name:'news',
					component: HomeNews
				},
				{
					path:'message',
					name:'message',
					component: HomeMessage
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			// 配置title属性
			meta:{
				title:'关于',
			}
		},
		{
			// 这里的userId是在后面需要的,通过userId获取到url中的信息
			path: '/user/:userId',
			name: 'user',
			component: User,
			// 配置title属性
			meta:{
				title:'用户',
			}
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			// 配置title属性
			meta:{
				title:'档案',
			},
		}
  ],
  mode:'history',
})
