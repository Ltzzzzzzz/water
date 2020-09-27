<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive :include="keepAlive">
				<router-view />
			</keep-alive>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			transitionName: ''
		};
	},
	computed: {
		keepAlive() {
			return this.$store.getters['globel/keepAlive'];
		}
	},
	watch: {
		//使用watch 监听$router的变化
		$route(to, from) {
			let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
			if (to.path === '/') {
				isBack = true;
			}
			if (isBack) {
				this.transitionName = 'slide-right';
			} else {
				this.transitionName = 'slide-left';
			}
			this.$router.isBack = false;
		}
	}
};
</script>
<style lang="scss">
@import 'css/animate.scss';
#app {
	width: 100%;
	height: 100%;
	.pageContainer {
		width: 100%;
		height: 100%;
		overflow: hidden;
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
