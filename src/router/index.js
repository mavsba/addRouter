import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Menus from '../components/menus'
import Resources from '../components/resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: (resolve) => require(['../components/404.vue'], resolve)
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
})
