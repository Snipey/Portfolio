<template>
  <footer class="text-black text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12">
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="mx-4">
            <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-border-color">Home</g-link>
          </li>
          <li class="mx-4">
            <g-link to="/about/" class="border-b border-transparent hover:border-gray-400 transition-border-color">About</g-link>
          </li>
          <li class="mx-4">
            <a href="/sitemap.xml" class="border-b border-transparent hover:border-gray-400 transition-border-color">Sitemap</a>
          </li>
          <li class="mx-4">
            <a href="/feed.xml" class="border-b border-transparent hover:border-gray-400 transition-border-color">RSS</a>
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
