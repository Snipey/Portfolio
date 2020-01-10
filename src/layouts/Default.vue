<template>
  <div class="flex flex-wrap parent">
    <Sidebar class="sidebar w-1/6"/>
    <div class="mx-auto content">
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
.content {
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
</style>
<script>
import config from '~/.temp/config.js';
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  computed: {
    config () {
      return config
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
