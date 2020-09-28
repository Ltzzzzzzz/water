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
		&:after {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			// background-image: url('./assets/images/bg.png') ;
			background-image: url('./assets/images/ripple.png');
			background-repeat: no-repeat;
			background-size: 100%;
			background-position: center bottom;
			background-color: #f7f8fa;
			opacity: 0.7;
			z-index: -1;
		}
		.container {
			padding: 10px;
			padding-bottom: 60px;
		}
	}
}
</style>
