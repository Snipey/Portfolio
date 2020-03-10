<template>
	<div class="flex flex-col justify-between pt-6 border-r-2 border-purple-400 sidebar-bg md:flex-shrink-0">
		<div class="flex-1">
			<ul v-for="link in links" class="text-center">
				<g-link :to="link.path" class="block py-6 text-purple-300 hover:bg-purple-500 link-font hover:text-white transition-color transition-bg">
					<li class="">
						{{ link.name }}
					</li>
				</g-link>
			</ul>
		</div>
		<!-- Profile Picture -->
		<div class="p-4 pt-2 text-center flex-0">
			<img src="https://i.picsum.photos/id/893/200/200.jpg" class="w-2/3 mx-auto mb-4 border-4 border-purple-400 rounded-full hover:border-purple-600 transition-color transition-border-color" />
			<h2 class="pt-2 text-2xl font-light text-white transition-transform hover:underline name-font">Stephen Freerking</h2>
			<p class="text-white text-gray-300 text-md link-font">Full Stack Developer</p>
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