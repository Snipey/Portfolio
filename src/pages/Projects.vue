<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1 text-black">Projects</h1>
        <p class="text-black text-lg sm:text-3xl">Some projects I have worked on.</p>
      </header>
      <div class="flex flex-wrap justify-center mb-10">
        <div v-for="item in projects" class="mx-6">
          <div class="border-2 rounded-lg flex flex-col mt-6 py-6 px-16 bg-white">
            <span class="text-2xl max-w-full font-medium"><a :href="item.url">{{ item.title }}</a></span>
            <span class="text-md max-w-full type-font">{{ item.type }}</span>
            <p>{{ item.description }}</p>
          </div>
        </div>     
      </div>
      <site-footer class="mb-8 sm:my-8 bg-white py-2 px-6 inline-block rounded-lg" />
    </main>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap');
.type-font {
  font-family: 'Nunito', sans-serif;  
}
</style>
<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'

export default {
  components: {
    SiteFooter
  },
  data () {
    return {
      projects: [
        { 
          title: 'Odin Media Center',
          type: 'Software',
          url: 'https://github.com/OdinMedia',
          description: 'A media server for streaming media built in rust using WebAssembly'
        },
        {
          title: 'PulseJS - Docs',
          type: 'Documentation',
          url: 'https://github.com/pulse-framework/pulse-docs',
          description: 'Documentation for the Pulse framework'
        },
        {
          title: 'Sporkbot',
          type: 'Discord Bot',
          url: 'https://github.com/the-sporkening/Sporkbot',
          description: 'A general purpose bot build with discordjs and Akairo'
        },
      ]
    }
  },
  metaInfo () {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'A list of things I have worked on'
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'Projects' },
        { property: "og:description", content: 'A list of things I have worked on' },
        { property: "og:url", content: `${this.config.siteUrl}/projects/` },
        { property: "og:image", content: '/images/bleda-card.png' },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'Projects' },
        { name: "twitter:description", content: 'A list of things I have worked on' },
        { name: "twitter:site", content: "@SnipeyDev" },
        { name: "twitter:creator", content: "@SnipeyDev" },
        { name: "twitter:image", content: '/images/bleda-card.png' },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
  },
}
</script>
