<template>
	<div class="pageNav">
		<div class="back" v-if="link">
			<router-link :to="link" replace>
				<div class="backWrapper">
					<van-icon name="arrow-left" color="#ffffff"></van-icon>
					<span>返回</span>
				</div>
			</router-link>
		</div>
		<h2 class="routeTitle">{{ title }}</h2>
		<div class="goHome" v-if="link">
			<router-link to="/" replace>
				<div class="goHomeWrapper">
					<van-icon name="wap-home-o" size="20" color="#ffffff"></van-icon>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageNav',
	props: ['link', 'title']
};
</script>

<style lang="scss" scoped>
.pageNav {
	position: relative;
	display: flex;
	align-items: center;
	background-image: linear-gradient(to right, #4199b4, #1d7eb8);
	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		background-image: linear-gradient(to right, #4199b4, #1d7eb8);
		transform: scaleY(0.5);
	}
	.back {
		position: absolute;
		top: 0;
		left: 0;
		padding: 15px;
		.backWrapper {
			display: flex;
			align-items: center;
			span {
				color: #ffffff;
			}
		}
	}
	.routeTitle {
		flex: 1;
		padding: 15px 0;
		text-align: center;
		font-weight: normal;
		color: #ffffff;
	}
	.goHome {
		position: absolute;
		top: 0;
		right: 0;
		width: 44px;
		height: 44px;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			.goHomeWrapper {
				padding: 5px 6px;
				background-color: #1974ab;
				border-radius: 50%;
			}
		}
	}
}
</style>
