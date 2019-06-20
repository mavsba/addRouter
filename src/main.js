// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

let localRoutes = sessionStorage.getItem('menus');
if(localRoutes){
   router.addRoutes(JSON.parse(localRoutes))
}


  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
