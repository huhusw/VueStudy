<template>
	<div>
		<h2>{{message}}</h2>
		<button type="button" @click="prin()">按钮</button>
	</div>
</template>

<script>
	export default{
		// 不能加载name属性呀,会报错：sakdlalk is not defined at Module.<anonymous> (stem.js:1)
		// but why
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
		}
	}
</script>

<style>
	
</style>
