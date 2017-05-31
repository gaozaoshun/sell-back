// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'               // 路由挂载
import iView from 'iview'
import 'iview/dist/styles/iview.css'  // 使用 CSS
import User from '@/components/menus/user'
import test from '@/components/menus/test'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)

// 路由配置
const router = new VueRouter({
  routes: [
    {path: '/user', component: User},
    {path: '/test', component: test}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
