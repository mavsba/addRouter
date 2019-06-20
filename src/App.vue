<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let isLogin = sessionStorage.getItem('user');
    if(!isLogin){
      return this.$router.push({path:'/login'});
    }
  }
}
</script>

<style>

</style>
