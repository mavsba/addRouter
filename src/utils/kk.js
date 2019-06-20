// import Home from '../components/home'
// import Menus from '../components/menus'
// import Resources from '../components/resources'
var Home = require('../components/home.vue');
var Menus = require('../components/menus.vue');
var Resources = require('../components/resources.vue');

function kk (arr){
  var Arr = [...arr] 
  Arr.forEach((item,index) => {
      item.component = eval(item.component)
      console.log(item.component)
      if(item.children){
        kk(item.children)
      }
  });
  return Arr
}

export default kk