<template>
	<div class="border-r-2 flex flex-col justify-between">
		<div class="flex-1">
			<ul v-for="link in links" class="text-white text-center">
				<g-link :to="link.path" class="block hover:bg-purple-500 py-6">
					<li class="text-purple-300 hover:text-white">
						{{ link.name }}
					</li>
				</g-link>
			</ul>
		</div>
		<!-- Profile Picture -->
		<div class="flex-0 p-4 text-center pt-2">
			<img src="https://i.picsum.photos/id/893/200/200.jpg" class="rounded-full mx-auto border-4 border-purple-400" />
			<span class="text-white text-2xl font-semibold font-sans pt-2">Stephen Freerking</span>
			<Socials />
		</div>
	</div>
</template>

<script>
import Socials from '~/components/Socials'

export default {
	components: {
		Socials,
	},
	data () {
		return {
			links: [
				// { name: 'About', path: '/about' },
				{ name: 'Blog', path: '/blog' },
				{ name: 'Projects', path: '/projects' },
			]
		}
	}	
}
</script>