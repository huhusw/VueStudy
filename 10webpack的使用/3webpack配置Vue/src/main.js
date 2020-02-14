// 这个import并不管用,是什么问题呢?
import Vue from 'vue'

// 2.抽离的版本
// 4.移动到js文件中
// const App = {
// 	template:
// 	`
// 		<div>
// 			<h2>{{message}}</h2>
// 			<button type="button" @click="prin()">按钮</button>
// 		</div>
// 	`,
// 	data(){
// 		return{
// 			message:'hello world'
// 		}
// 	},
// 	methods:{
// 		prin(){
// 			console.log("print");
// 		}
// 	}
// }

// const app = new Vue({
// 1.可以直接进行new,这个是原始版本,原始版本过于臃肿,需要抽离代码
// new Vue({
// 	el: '#app',
// 	// template进行抽离
// 	template:
// 	`
// 		<div>
// 			<h2>{{message}}</h2>
// 			<button type="button" @click="prin()">按钮</button>
// 		</div>
// 	`,
// 	data:{
// 		message:'hello world'
// 	},
// 	methods:{
// 		prin(){
// 			console.log("print");
// 		}
// 	}
// })

// 依赖css文件
require('./css/normal.css')

// 6.导入app.js的组件,注意路径问题,还是可以使用
// import App from "./js/vue/app.js"
// 8.导入vue文件模板
import App from "./js/vue/App.vue";
// import Cpn from "./js/vue/Cpn.vue";
// 3.抽离代码后的版本,可以正常运行
new Vue({
	el: '#app',
	template: '<Apps></Apps>',
	components:{
		Apps:App,
	}
})