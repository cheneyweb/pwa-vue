import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Layout from './views/Layout.vue'
import Home from './views/Home.vue'
import Stat from './views/Stat.vue'
import Explore from './views/Explore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'stat',
          name: 'stat',
          component: Stat
        },
        {
          path: 'explore',
          name: 'explore',
          component: Explore
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
