<template>
  <div class="tabbarItem" @click="itemCli">
    <!-- 使用到v-if等标签时,还是包装一层比较好 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 动态绑定style -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBarItem',
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      // 根据点击判断哪个是活跃的
      isActive(){
        // 当前的活跃路径跟path相同时就是活跃
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 动态决定字体的颜色
      activeStyle(){
        console.log(this.activeColor);
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    // 组件间通信
    props:{
      // 用于跳转的路径
      path:String,
      // 字体颜色
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      // 添加item的点击事件,修改显示的图片和字体颜色
      itemCli(){
        // 跳转url
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style>
  /* 均匀分布 */
  .tabbarItem{
    text-align: center;
    flex:1;
  }

  .tabbarItem img{
    height: 24px;
    weight: 24px;
  }

  .active{
    color: red;
  }
</style>
