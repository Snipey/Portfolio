<template>
	<div class="border-r-2 border-purple-400 pt-6 flex flex-col justify-between sidebar-bg">
		<div class="flex-1">
			<ul v-for="link in links" class="text-black text-center">
				<g-link :to="link.path" class="block hover:text-white hover:bg-purple-500 py-6">
					<li class="link-font text-purple-300">
						{{ link.name }}
					</li>
				</g-link>
			</ul>
		</div>
		<!-- Profile Picture -->
		<div class="flex-0 p-4 text-center pt-2">
			<img src="https://i.picsum.photos/id/893/200/200.jpg" class="rounded-full mx-auto mb-4 border-4 w-2/3 hover:border-purple-600 border-purple-400" />
			<h2 class="text-white text-2xl font-light font-sans hover:underline pt-2">Stephen Freerking</h2>
			<p class="text-white text-md link-font text-gray-300">Full Stack Developer</p>
			<Socials />
		</div>
	</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');
.link-font {
	font-family: 'Poppins', sans-serif;
}
.sidebar-bg {
	background-color: #0d070f
}
</style>
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
				{ name: 'Blog', path: '/' },
				{ name: 'Projects', path: '/projects' },
			]
		}
	}	
}
</script>