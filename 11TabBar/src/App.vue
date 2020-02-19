<template>
  <div id="app">
    <tabbar>
      <tabbaritem path="/home" activeColor='blue'>
        <img slot='item-icon' src="./assets/img/tarbar/home.svg"/>
        <img slot='item-icon-active' src="./assets/img/tarbar/home_activity.svg"/>
        <div slot='item-text'>首页</div>
      </tabbaritem>
      <tabbaritem path="/cate" activeColor='yellow'>
        <img slot='item-icon' src="./assets/img/tarbar/catetory.svg"/>
        <img slot='item-icon-active' src="./assets/img/tarbar/category_active.svg"/>
        <div slot='item-text'>分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor='#656565'>
        <img slot='item-icon' src="./assets/img/tarbar/cart.svg"/>
        <img slot='item-icon-active' src="./assets/img/tarbar/cart_activity.svg"/>
        <div slot='item-text'>购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor='green'>
        <img slot='item-icon' src="./assets/img/tarbar/profile.svg"/>
        <img slot='item-icon-active' src="./assets/img/tarbar/profile_activity.svg"/>
        <div slot='item-text'>我的</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/tabbar/TabBar.vue'
import tabbaritem from './components/tabbar/TabBarItem.vue'
export default {
  name: 'App',
  components:{

    tabbar,
    tabbaritem
  }
}
</script>

<style>
  /* 引入css文件 */
  @import url("./assets/css/base.css");

</style>
