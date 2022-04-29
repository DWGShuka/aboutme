import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: () => import('../components/page/Top')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/page/About')
  },
  {
    path: '/expriences',
    name: 'expriences',
    component: () => import('../components/page/Expriences')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/page/Products')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../components/page/Skills')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/page/Contact')
  },
  {
    path: '/contact/accepted',
    name: 'accepted',
    component: () => import('../components/page/Accepted')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
    scrollBehaivor () {
    return { x: 0, y: 0 }
  }
})

export default router
