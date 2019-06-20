<template>
 <div id="app">
    <div class="zhanghao">
      <label for="user">账号</label><input id="user" type="text"><br> 
      <label for="pwd">密码</label><input id="pwd" type="text"><br> 
      <button @click="login">登陆</button>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
// import Home from '../components/home'
// import Menus from '../components/menus'
// import Resources from '../components/resources'

import kk  from '../utils/kk'
var Home = require('../components/home');
var Menus = require('../components/menus');
var Resources = require('../components/resources');
export default {
  methods:{
    async login(){
     const {data} = await axios.get("https://www.easy-mock.com/mock/5cd68a0256d2704f0aaf17a2/login")
    console.log(data.data)
    // sessionStorage.setItem('menus',JSON.stringify(data.data));
    // sessionStorage.setItem('menus',JSON.stringify(data.data));
    //动态添加路由
 
    
    let router = kk(data.data)
      console.log(router)
    this.$router.addRoutes(router);  


    //跳转到应用界面
    this.$router.push('/home');
    }
  }
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
