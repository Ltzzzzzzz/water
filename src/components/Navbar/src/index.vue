<template>
	<div id="navbar">
		<div class="titleWrapper">
			<div class="logoWrapper">
				<van-image width="40" height="40" :src="logoPng" />
			</div>
			<div class="goHome" v-if="$route.name !== 'Home'">
				<router-link to="/">
					<div class="goHomeWrapper">
						<van-icon name="wap-home-o" size="20" color="#ffffff"></van-icon>
					</div>
				</router-link>
			</div>
		</div>

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
		display: flex;
		justify-content: space-between;
	}
}
</style>
