<template>
  <div class="flex flex-wrap parent">
    <Navbar class="fixed max-w-full lg:hidden navigation" @click="menuToggle()"/>
    <Sidebar class="hidden w-1/6 sidebar lg:block"/>
    <div class="mx-auto mt-16 content">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.parent {
  height: 100%;
  overflow: hidden;
}
.sidebar {
  height: 100%;
  overflow: auto;
}
.navigation {
  width:100vw
}
.content {
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
</style>
<script>
import config from '~/.temp/config.js';
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Sidebar,
    Navbar
  },
  computed: {
    config () {
      return config
    }
  },
  functions: {
    menuToggle() {
      
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
