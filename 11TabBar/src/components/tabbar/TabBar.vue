<!-- 抽取tabbar组件 -->
<!-- tabbar和tabbaritem的结构混乱,抽取tabbaritem组件 -->
<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'TabBar',

  }
</script>

<style>
  #tabbar{
    /* flex分布 */
    display: flex;

    /* 底部分布 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 元素组件的高度 */
    height: 49px;

    background-color: #f6f6f6;

    /* 过渡,参数的意义可以查看详情 */
    box-shadow: 0 -2px 5px rgba(100,100,100,0.2);
  }

</style>
