<template>
	<nav class="flex flex-wrap items-center justify-between p-4 bg-gray-900">
		<div class="flex items-center flex-shrink-0 mr-6 text-white">
			<span class="text-xl font-semibold tracking-tight">SnipeyDev</span>
		</div>
		<div class="block">
			<button @click="isOpen = !isOpen" class="flex items-center px-3 py-2 text-purple-200 border border-purple-400 rounded hover:text-white hover:border-white">
				<svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>
		<div v-show="isOpen" class="flex-grow block w-full">
			<div class="text-sm">
				<!-- <g-link :to="`${$page.post.author.path}/`">
                	<img :src="avatar" :alt="$page.post.author.title" @error="imageLoadError" width="100" class="p-4 rounded-full sm:p-0">
              	</g-link> -->
				<g-link to="/projects">
					<span class="inline-block mt-4 mr-4 text-purple-200 hover:text-white">Projects</span>
				</g-link>
				<g-link to="/" class="block mt-4 text-purple-200 hover:text-white">
					Blog
				</g-link>
			</div>
			<div>
				<Socials />
			</div>
		</div>
	</nav>
</template>
<style>

</style>
<script>
import Socials from '@/components/Socials'
export default {
	components: {
		Socials
	},
	data: () => {
		return {
			isOpen: false
		}
	},
    methods:{
        toggle: function(){
            this.isOpen = !this.isOpen
        }
    }
}

</script>