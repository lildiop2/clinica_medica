import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Galeria from '../components/Galeria.vue'
import NovoEndereco from '../components/NovoEndereco.vue'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/novoendereco',
    name: 'NovoEndereco',
    component: NovoEndereco
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
