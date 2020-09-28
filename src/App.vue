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
		.desc {
			padding-left: 10px;
			line-height: 1.5;
			color: #ffffff;
			font-size: 14px;
		}
		.container {
			padding: 10px;
			.routers {
				line-height: 1.5;
				color: #707070;
				border-radius: 8px;
				overflow: hidden;
				h4 {
					font-size: 12px;
				}
				p {
					font-size: 10px;
					color: #707070;
				}
			}
		}
	}
}
</style>
