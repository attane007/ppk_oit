import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const suffix=" | OIT - โรงเรียนโพนงามพิทยานุกูล"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'หน้าแรก' },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title+suffix

  next()
})

export default router
