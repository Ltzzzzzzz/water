<template>
	<div class="pageModel">
		<div class="pageWrapper clearfix">
			<slot />
		</div>
		<div class="footWrapper">
			<div class="logoWrapper">
				<div class="logo">
					<van-image width="100%" height="100%" :src="logoPng" />
				</div>
				<p>微信网上营业厅</p>
			</div>
			<p class="call">服务热线：0760-88389553</p>
		</div>
	</div>
</template>

<script>
import logoPng from 'images/logo.png';
export default {
	name: 'PageModel',
	data() {
		return {
			logoPng
		};
	}
};
</script>

<style lang="scss" scoped>
.pageModel {
	height: 100%;
	.pageWrapper {
		min-height: 100%;
		width: 100%;
		padding-bottom: 64px;
	}
	.footWrapper {
		margin-top: -64px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 64px;
		.logoWrapper {
			padding: 5px 0;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			.logo {
				margin-right: 4px;
				width: 60px;
				height: 15px;
			}
			p {
				font-size: 12px;
				color: #555555;
			}
		}
		.call {
			font-size: 12px;
			text-align: center;
			color: #707070;
		}
	}
}
</style>
