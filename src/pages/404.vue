<template>
  <Layout class="content-bg">
    <main class="flex items-center h-screen">
      <div class="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-xs mx-auto px-6 md:px-0 relative">
        <span class="absolute -mt-10 text-5xl inset-x-0 text-center pointer-events-none">🧐</span>
        <section class="bg-gray-100 mx-auto px-8 py-6 rounded shadow-xl relative">
          <h1 class="text-2xl font-sans font-bold mb-4">Page Not Found</h1>
          <p class="font-serif mb-4 leading-normal text-black">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
          <g-link to="/" class="text-sm text-teal-400 hover:text-teal-600 font-sans transition-color">&larr; Back to our site</g-link>
        </section>
      </div>
    </main>
  </Layout>
</template>
<style scoped>
.content-bg {
  background-color: #0d070f;
}
</style>
<script>
export default {
  metaInfo () {
    return {
      title: `Page Not Found (404)`,
    }
  },
}
</script>

