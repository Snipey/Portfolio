import DefaultLayout from '~/layouts/Default.vue'
// import PostLayout from '~/layouts/PostLayout.vue'
import VueDisqus from 'vue-disqus'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faGitlab, faTwitch } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faGitlab, faTwitch)

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  // Vue.component('PostLayout', PostLayout)
  Vue.use(VueDisqus)
  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-serif' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })
}
