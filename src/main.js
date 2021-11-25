import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VuePageTitle from 'vue-page-title'
// import Vue from 'vue'


// import css file
import '@/assets/css/nucleo-icons.css'
import '@/assets/css/nucleo-svg.css'
import '@/assets/css/soft-ui-dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css"

// import js
import "bootstrap"

// Vue.use(VuePageTitle, { router, suffix: '| OIT - โรงเรียนโพนงามพิทยานุกูล' })

// new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app')

createApp(App).use(store).use(router).mount('#app')
