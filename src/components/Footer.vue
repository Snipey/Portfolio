<template>
  <footer class="flex flex-wrap justify-between px-6 mx-auto text-sm leading-normal text-black sm:px-12">
    <div class="w-full sm:w-1/2 sm:mb-0">
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex -mx-2">
          <li class="mx-4 rounded hover:bg-purple-500 hover:text-white">
            <g-link to="/" class="px-4 py-2 border-b border-transparent hover:border-gray-400 transition-border-color">Home</g-link>
          </li>
          <li class="mx-4 rounded hover:bg-purple-500 hover:text-white">
            <g-link to="/about/" class="px-4 py-2 border-b border-transparent hover:border-gray-400 transition-border-color">About</g-link>
          </li>
          <li class="mx-4 rounded hover:bg-purple-500 hover:text-white">
            <a href="/sitemap.xml" class="px-4 py-2 border-b border-transparent hover:border-gray-400 transition-border-color">Sitemap</a>
          </li>
          <li class="mx-4 rounded hover:bg-purple-500 hover:text-white">
            <a href="/feed.xml" class="px-4 py-2 border-b border-transparent hover:border-gray-400 transition-border-color">RSS</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
