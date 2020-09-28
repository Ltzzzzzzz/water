<template>
	<div id="app">
		<keep-alive :include="keepAlive">
			<router-view />
		</keep-alive>
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
#app {
	width: 100%;
	height: 100%;
	.pageContainer {
		width: 100%;
		height: 100%;
		.container {
			padding: 10px;
		}
	}
}
</style>
