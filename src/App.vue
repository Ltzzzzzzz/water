<template>
	<div id="app">
		<PageModel>
			<transition :name="pageAnimation">
				<keep-alive :include="keepAlive">
					<router-view />
				</keep-alive>
			</transition>
		</PageModel>
	</div>
</template>
<script>
export default {
	name: 'App',
	computed: {
		keepAlive() {
			return this.$store.getters['globel/keepAlive'];
		},
		pageAnimation() {
			return this.$route.name === 'home' ? 'slide-right' : this.$store.getters['globel/pageAnimation'];
		}
	}
};
</script>
<style lang="scss">
@import 'css/app.scss';
@import 'css/pageAnimation.scss';
</style>
