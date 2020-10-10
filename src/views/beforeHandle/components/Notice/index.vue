<template>
	<div class="notice">
		<h4>阅读业务须知和合同条款</h4>
		<div class="container">
			<div class="pactWrapper">
				<div class="iconWrapper">
					<van-icon color="#faab0c" name="star" />
				</div>
				<a class="link" href="#">《供用水服务协议》</a>
			</div>
			<div class="agreeWrapper" @click="hanlderClick">
				<div class="iconWrapper" :class="{ isCheck: value }">
					<van-icon size="19" color="#ffffff" name="success" />
				</div>
				<p>我已阅读业务须知与合同条款，并同意</p>
			</div>
			<p class="tip">如对业务须知与合同条款内容有疑义可致电客服热线<a class="tel" href="tel:12345">12345</a></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Notice',
	props: ['value'],
	methods: {
		hanlderClick() {
			this.$emit('input', !this.value);
		}
	}
};
</script>

<style lang="scss" scoped>
.notice {
	margin: 20px 0;
	border-radius: 8px;
	background-color: #ffffff;
	overflow: hidden;
	h4 {
		padding: 10px 5px;
		color: #333333;
		font-size: 14px;
		background-color: #eeeef0;
	}
	.pactWrapper {
		padding: 10px 0;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			border-bottom: 1px solid #eeeef0;
			transform: translateY(0.5);
		}
		.link {
			margin-left: 2px;
			line-height: 24px;
			display: inline-block;
			color: #576b95;
		}
	}
	.agreeWrapper {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		color: #333333;
		.iconWrapper {
			line-height: 20px;
			width: 20px;
			height: 20px;
			text-align: center;
			border: 1px solid #323233;
			border-radius: 50%;
			transition: all 0.2s;
			&.isCheck {
				background-color: #1789fa;
				border-color: #1789fa;
			}
		}
		p {
			margin-left: 8px;
			line-height: 24px;
			font-size: 14px;
		}
	}
	.tip {
		font-size: 14px;
		color: #333333;
		.tel {
			color: #576b95;
		}
	}
}
</style>
