<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view />
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
	watch: {
		//使用watch 监听$router的变化
		$route(to, from) {
			//如果to索引大于from索引,判断为前进状态,反之则为后退状态
			if (to.meta.index > from.meta.index) {
				//设置动画名称
				this.transitionName = 'slide-left';
			} else {
				this.transitionName = 'slide-right';
			}
		}
	}
};
</script>
<style lang="scss">
@import 'css/animate.scss';
#app {
	width: 100%;
	min-height: 100%;
	&:after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: url('./assets/images/bg.png') no-repeat;
		background-size: 100%;
		background-position: left bottom;
		background-color: #f7f8fa;
		z-index: -1;
	}
	.pageContainer {
		width: 100%;
		height: 100%;
		.container {
			padding: 10px;
			padding-bottom: 60px;
		}
	}
}
</style>
