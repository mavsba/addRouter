<template>
 <div id="app">
    <h1>首页</h1>
    <router-link to="/home/menus">菜单</router-link>
    <router-link to="/home/resources">资料</router-link>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
}
</script>

<style  scoped>
#app{
  position: relative;
  width: 100%;
  height: 100%;
}
.zhanghao{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
