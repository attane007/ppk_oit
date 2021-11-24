import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import css file
import '@/assets/css/nucleo-icons.css'
import '@/assets/css/nucleo-svg.css'
import '@/assets/css/soft-ui-dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css"

// import js
require('@/assets/js/core/popper.min.js')
import "bootstrap"
// import '@/assets/js/plugins/perfect-scrollbar.min.js'
// import '@/assets/js/plugins/smooth-scrollbar.min.js'
// require('@/assets/js/plugins/chartjs.min.js')



createApp(App).use(store).use(router).mount('#app')
