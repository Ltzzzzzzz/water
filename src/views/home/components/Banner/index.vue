<template>
	<van-swipe class="banner" :autoplay="3000" indicator-color="white">
		<van-swipe-item>
			<van-image width="100%" height="100%" :src="banner1" />
		</van-swipe-item>
		<van-swipe-item>
			<van-image width="100%" height="100%" :src="banner2" />
		</van-swipe-item>
		<van-swipe-item>
			<van-image width="100%" height="100%" :src="banner3" />
		</van-swipe-item>
	</van-swipe>
</template>

<script>
export default {
	name: 'Banner',
	data() {
		return {
			banner1: require('images/banner1.jpg'),
			banner2: require('images/banner2.jpg'),
			banner3: require('images/banner3.jpg')
		};
	}
};
</script>

<style lang="scss" scoped>
.banner {
	overflow: hidden;
	.van-swipe-item {
		color: #fff;
		font-size: 20px;
		height: 50vw;
		text-align: center;
		background-color: #39a9ed;
	}
}
</style>
