<template>
  <div id="nav">
    <div class="g-sidenav-show bg-gray-100">
      <Sidebar/>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components:{
    Sidebar
  }
}
</script>

