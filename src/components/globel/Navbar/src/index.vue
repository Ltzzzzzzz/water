<template>
	<div id="navbar">
		<div class="titleWrapper">
			<div class="logoWrapper">
				<van-image width="100%" height="100%" :src="logoPng" />
			</div>
			<div class="goHome" v-if="$route.name !== 'Home'">
				<router-link to="/">
					<div class="goHomeWrapper">
						<van-icon name="wap-home-o" size="24" color="#ffffff"></van-icon>
					</div>
				</router-link>
			</div>
		</div>
		<div class="slotWrapper">
			<slot></slot>
		</div>
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
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 100%;
	min-height: 30vw;
	background-image: linear-gradient(to right, #4199b4, #1d7eb8);
	.titleWrapper {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logoWrapper {
			max-width: 80px;
			height: 20px;
		}
		.goHome {
			padding: 4px 5px;
			background-color: #1974ab;
			border-radius: 50%;
		}
	}
	.slotWrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}
}
</style>
