<template>
	<div id="app">
		<PageModel>
			<keep-alive :include="keepAlive">
				<router-view />
			</keep-alive>
		</PageModel>
	</div>
</template>
<script>
export default {
	name: 'App',
	computed: {
		keepAlive() {
			return this.$store.getters['globel/keepAlive'];
		}
	}
};
</script>
<style lang="scss">
@import 'css/app.scss';
</style>
