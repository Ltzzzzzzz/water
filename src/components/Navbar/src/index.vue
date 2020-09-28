<template>
	<div id="navbar">
		<div class="titleWrapper">
			<div class="logoWrapper">
				<van-image width="40" height="40" :src="logoPng" />
			</div>
			<div class="goHome" v-if="$route.name !== 'Home'">
				<router-link to="/">
					<div class="goHomeWrapper">
						<van-icon name="wap-home-o" size="30" color="#ffffff"></van-icon>
					</div>
				</router-link>
			</div>
		</div>
		<h2 class="routeName">{{ $route.meta.title }}</h2>
		<slot></slot>
	</div>
</template>

<script>
import logoPng from 'images/logo.png';
export default {
	name: 'Navbar',
	data() {
		return {
			logoPng
		};
	}
};
</script>

<style lang="scss" scoped>
#navbar {
	padding: 10px;
	width: 100%;
	min-height: 40vw;
	background-image: linear-gradient(to right, #4199b4, #1d7eb8);
	.titleWrapper {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		.goHome {
			padding: 5px;
			background-color: #1974ab;
			border-radius: 50%;
		}
	}
	.routeName {
		margin-bottom: 10px;
		font-weight: normal;
		font-size: 16px;
		color: #ffffff;
	}
}
</style>
