import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {oit} from '../db.js'

const suffix=" | OIT - โรงเรียนโพนงามพิทยานุกูล"

let routes = [
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

oit.forEach((value)=>{
  if(value.type=="inner-hypertext"){
    routes.push({
      path:value.target,
      name:value.target,
      component:Home,
      meta:{title:value.title}
    })
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  document.title=to.meta.title+suffix

  next()
})

export default router
