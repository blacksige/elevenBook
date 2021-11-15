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
    path: '/index',
    name: 'Index',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Index.vue')
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
  },
  {
    path: '/page1',
    name: 'Page1',
    component: () => import( '../views/demo/page1/index.vue')
  },{
    path: '/page2',
    name: 'Page2',
    component: () => import( '../views/demo/page2/index.vue')
  }, {
    path: '/page3',
    name: 'Page3',
    component: () => import( '../views/demo/page3/index.vue')
  }, {
    path: '/page4',
    name: 'Page4',
    component: () => import( '../views/demo/page4/index.vue')
  }, {
    path: '/page5',
    name: 'Page5',
    component: () => import( '../views/demo/page5/index.vue')
  }, {
    path: '/page6',
    name: 'Page6',
    component: () => import( '../views/demo/page6/index.vue')
  },{
    path: '/page7',
    name: 'Page7',
    component: () => import( '../views/demo/page7/index.vue')
  },{
    path: '/page8',
    name: 'Page8',
    component: () => import( '../views/demo/page8/index.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
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
