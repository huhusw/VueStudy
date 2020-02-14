<template>
	<div>
		<h2>{{message}}</h2>
		<button type="button" @click="prin()">按钮</button>
		<Cpns></Cpns>
	</div>
</template>

<script>
	import Cpn from "./Cpn"
	export default{
		// 不能加载name属性呀,会报错：sakdlalk is not defined at Module.<anonymous> (stem.js:1)
		// but why？
		// name:sakdlalk,
		data(){
			return{
				message:'hello world'
			}
		},
		methods:{
			prin(){
				console.log("print");
			}
		},
		// 注册子组件
		components:{
			Cpns:Cpn,
		}
	}
</script>

<style>
	
</style>
