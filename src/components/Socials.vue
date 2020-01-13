<template>
	<div class="flex justify-center pt-2">
		<div v-for="item in socials">
			<a :href="item.link" class="mx-1">
				<font-awesome class="icon text-purple-400 hover:text-purple-600 transition-color" :icon="['fab', `${item.name}`]"/>
			</a>
		</div>
	</div>
</template>
<style scoped>
	.icon {
		width: 32px;
		height: 32px;
	}
</style>
<script>
export default {
	data () {
		return {
			socials: [
				{ name: 'github', link: 'https://github.com/Snipey' },
				{ name: 'gitlab', link: 'https://gitlab.com/Snipey' },
				{ name: 'twitter', link: 'https://twitter.com/SnipeyDev' },
			]
		}
	}
}
</script>