<template>
	<div>
		<h2>我是子组件</h2>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'我是子组件的name',
			}
		}
	}
</script>

<style>
</style>
