<template>
	<div class="flex justify-center pt-2">
		<div v-for="item in socials">
			<a :href="item.link">
				<font-awesome class="icon text-purple-400 hover:text-purple-600" :icon="['fab', `${item.name}`]"/>
			</a>
		</div>
	</div>
</template>
<style scoped>
	.icon {
		width: 32px;
		height: 32px;
		margin-right: 4px;
	}
</style>
<script>
export default {
	data () {
		return {
			socials: [
				{ name: 'github', link: 'https://github.com/Snipey' },
				{ name: 'twitch', link: 'https://twitch.tv/SnipeyDev' },
				{ name: 'gitlab', link: 'https://gitlab.com/Snipey' },
				{ name: 'twitter', link: 'https://twitter.com/SnipeyDev' },
			]
		}
	}
}
</script>