<template>
	<div class="border-r-2 border-purple-400 pt-6 flex flex-col justify-between sidebar-bg">
		<div class="flex-1">
			<ul v-for="link in links" class="text-center">
				<g-link :to="link.path" class="block hover:bg-purple-500 py-6 link-font hover:text-white text-purple-300 transition-color transition-bg">
					<li class="">
						{{ link.name }}
					</li>
				</g-link>
			</ul>
		</div>
		<!-- Profile Picture -->
		<div class="flex-0 p-4 text-center pt-2">
			<img src="https://i.picsum.photos/id/893/200/200.jpg" class="rounded-full mx-auto mb-4 border-4 w-2/3 hover:border-purple-600 border-purple-400  transition-color transition-border-color" />
			<h2 class="text-white text-2xl font-light hover:underline pt-2 name-font transition-transform">Stephen Freerking</h2>
			<p class="text-white text-md link-font text-gray-300">Full Stack Developer</p>
			<Socials />
		</div>
	</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');
.name-font {

}
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