// 入口js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store // 一旦映射完store,所有组件对象都多了一个属性：$store
})
