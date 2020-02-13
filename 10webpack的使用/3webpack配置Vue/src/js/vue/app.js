// 5.默认导出,再main.js中导入使用
// 7.移植到App.vue进行代码分离
export default{
	template:
	`
		<div>
			<h2>{{message}}</h2>
			<button type="button" @click="prin()">按钮</button>
		</div>
	`,
	data(){
		return{
			message:'hello world'
		}
	},
	methods:{
		prin(){
			console.log("print");
		}
	}
}