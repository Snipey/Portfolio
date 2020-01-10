<template>
  <div class="max-h-full">
    <Sidebar class="md:w-1/3 lg:w-1/5 fixed" />
    <div class="flex flex-wrap">
      <slot class="md:w-2/3 lg:w-4/5 ml-64"/>
    </div>
  </div>
</template>

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
