<template>
	<div>
		<h2>我是Profile</h2>
		<h4>我是Profile的内容</h4>
		<h4>{{$route.path}}</h4>
		<h4>{{$route.query}}</h4>
	</div>
</template>

<script>
	export default{
		name: "Profile",
	}
</script>

<style>
</style>
