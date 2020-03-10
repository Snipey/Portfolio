<template>
  <article class="flex">
    <div class="w-3/4 px-4 py-4 mx-auto my-4 bg-white rounded-lg sm:px-6 md:px-10">
      <div class="py-2 sm:py-20">
        <header class="mb-8 text-center">
          <h2 class="mb-1 font-sans text-3xl leading-tight sm:text-4xl sm:mb-2">
            <g-link :to="`${post.path}/`" class="font-bold text-black">{{ post.title }}</g-link>
          </h2>
          <p class="text-sm leading-normal text-black sm:text-base">
            <span v-if="post.author">by <g-link :to="`${post.author.path}/`" class="text-black capitalize border-b border-transparent hover:border-gray-400 transition-border-color" v-if="post.author">{{ titleCase(post.author.title) }}</g-link></span>
            <span v-if="post.tags && post.tags.length > 0"> in <g-link :to="`${post.tags[0].path}/`" class="text-black capitalize border-b border-transparent hover:border-gray-400 transition-border-color">{{ titleCase(post.tags[0].title) }}</g-link></span>
            <span v-if="post.author || (post.tags && post.tags.length > 0)"> · </span>
            <span>{{ post.timeToRead }} min read</span>
            <time :datetime="post.datetime" class="pl-2 text-sm sm:text-base">{{ formatPublishDate(post.datetime) }}</time>
          </p>
        </header>
        <p class="text-lg leading-normal text-black " v-html="excerpt(post, 290, ' ...')"></p>
        <div class="mt-4">
          <g-link :to="`${post.path}/`" class="px-4 py-1 bg-purple-500 border-purple-500 rounded-lg border-1 hover:bg-purple-600 button">Read more &rarr;</g-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('DD MMMM, YYYY');
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY');
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>
