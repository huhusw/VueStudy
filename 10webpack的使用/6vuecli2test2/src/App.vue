<template>
  <div id="app">
	<!-- 需要注意的是要带上to属性 -->
	<router-link to="/home" tag="button" replace>首页</router-link>
	<router-link to="/about" replace>关于</router-link>
	<!-- v-bind绑定数据,动态改变路由url -->
	<router-link :to="'/user/' + userId" replace>用户</router-link>
	<!-- 可以使用对象传参,例如path,query等 -->
	<router-link :to="{path:'/profile',query:{name:'张三',age:17}}" replace>档案</router-link>
<!-- 	<button @click="userCli">用户</button>
	<button @click="profileCli">档案</button> -->
<!-- 	<button @click="homeCli">首页</button>
	<button @click="aboutCli">关于</button> -->
	<!-- 使用的是组件的name属性 -->
	<keep-alive exclude="Profile">
		<router-view></router-view>
	</keep-alive>
	<!-- $route是当前huoyue的路由url, 后面的userId是在path: '/User/:userId'中的定义,但是获取到的是下面顶顶的userId -->
	{{$route.params.userId}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
	  return {
		  userId:'zhanghan',
	  }
  },
  methods:{
	  // homeCli(){
		 //  // $router是内置的属性,可以直接调用,得到的是我们创建的vue-router对象
		 //  // push使用的是pushState,浏览器可以使用自己的前进后退按钮,但是浏览器会报error,虽然不影响使用
		 //  // this.$router.push('/home');
		 //  // replace会使浏览器的按钮禁用,一样会报uncaught的错误
		 //  this.$router.replace('/home');
		 //  console.log("home click");
	  // },
	  // aboutCli(){
		 //  // this.$router.push('/about');
		 //  this.$router.replace('/about');
		 //  console.log("about click");
	  // }
		// 不同的传参方式
		// userCli(){
		// 	this.$router.push('/user/'+this.userId);
		// },
		// // 跟上对象传参
		// profileCli(){
		// 	this.$router.push({
		// 		path:'/profile',
		// 		query:{
		// 			name:'lisi',
		// 			age:18
		// 		}
		// 	});
		// }
  }
}
</script>

<style>
</style>
