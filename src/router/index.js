import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requireAuth: true
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) => {
  window.sessionStorage.getItem('Token')
  if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
      if (window.sessionStorage.getItem('Token')) { // vuex.state判断token是否存在
          next() // 已登录
      } else {
          next({
              path: '/login',
              query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  } else {
     next()
  }
})

export default router
