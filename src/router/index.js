import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    redirect: '/home',
    component: () => import('@/views/tabs'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
        redirect: '/home/recommend',
        children: [
          {
            path: '/home/recommend',
            component: () => import('@/views/home/children/recommend/index.vue')
          },
          {
            path: '/home/hotspot',
            component: () => import('@/views/home/children/hotspot')
          },
          {
            path: '/home/trailer',
            component: () => import('@/views/home/children/trailer')
          },
          {
            path: '/home/movie',
            component: () => import('@/views/home/children/movie')
          },
          {
            path: '/home/film',
            component: () => import('@/views/home/children/film')
          },
          {
            path: '/home/synthesis',
            component: () => import('@/views/home/children/synthesis')
          }
        ]
      },
      {
        path: '/film',
        name: 'film',
        component: () => import('@/views/film')
      },
      {
        path: '/perform',
        name: 'perform',
        component: () => import('@/views/perform')
      },
      {
        path: '/sports',
        name: 'sports',
        component: () => import('@/views/sports')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
