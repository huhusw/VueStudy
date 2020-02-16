import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
//1.安装插件
vue.use(VueRouter)

// 2.新建vue-router对象
const router = new VueRouter({
	// 配置组件与url之间的映射关系
	routes:[
		// 一个对象是一个映射关系
		{
			path: '/home',
			component:Home
		},
		{
			path:'/about',
			component:About
		}
		
	]
})
// 3.挂载到vue实例中,开始起作用
export default router