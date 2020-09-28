<template>
	<div class="queryWaterBillItem">
		<div class="switchWrapper" v-if="!data.finish">
			<van-switch size="16" v-model="data.check" active-color="#07c160" inactive-color="#ee0a24" @click.stop />
		</div>
		<div class="finishWrapper" v-else>
			<div class="finish"></div>
			<p>已缴清</p>
		</div>
		<router-link :to="{ name: 'queryWaterBillDetail', params: { keepAlive: $route.name } }" class="detailContainer">
			<div class="detailWrapper">
				<div class="infoWrapper">
					<span class="label">总金额</span>
					<span>{{ data.totalPrice }}元</span>
				</div>
				<div class="infoWrapper">
					<span class="label">水量</span>
					<span>{{ data.waterVolume }}</span>
				</div>
				<div class="infoWrapper">
					<span class="label">上期行至</span>
					<span>{{ data.lastTimeVolume }}</span>
				</div>
				<div class="infoWrapper">
					<span class="label">本期行至</span>
					<span>{{ data.lastTimeVolume + data.waterVolume }}</span>
				</div>
				<div class="infoWrapper block">
					<span class="label">抄表时间</span>
					<span>{{ data.metarDate }}</span>
				</div>
			</div>
			<van-icon color="#555555" name="arrow" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'queryWaterBillItem',
	props: ['data']
};
</script>

<style lang="scss" scoped>
.queryWaterBillItem {
	position: relative;
	padding: 10px;
	display: flex;
	background-color: #ffffff;
	&:after {
		content: '';
		position: absolute;
		right: 10px;
		bottom: 0;
		left: 10px;
		border-bottom: 1px solid #eeeef0;
		transform: scaleY(0.5);
	}
	.switchWrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 34px;
		width: 34px;
	}
	.finishWrapper {
		position: relative;
		flex: 0 0 34px;
		width: 34px;
		transform: translate(-10px, -10px);
		.finish {
			position: absolute;
			top: 0;
			left: 0;
			border: 24px solid transparent;
			border-top-color: #07c160;
			border-left-color: #07c160;
		}
		p {
			position: absolute;
			top: 0;
			left: 0;
			font-size: 12px;
			font-weight: bold;
			color: #ffffff;
			transform: translateY(12px) rotate(-45deg);
			white-space: nowrap;
		}
	}
	.detailContainer {
		flex: 1;
		display: flex;
		align-items: center;
		.detailWrapper {
			margin: 0 10px;
			display: flex;
			flex-wrap: wrap;
			font-size: 12px;
			.infoWrapper {
				flex: 0 0 50%;
				&.block {
					flex: 0 0 100%;
				}
				span {
					display: inline-block;
					vertical-align: top;
					line-height: 24px;
					color: #333333;
					height: 24px;
					&.label {
						margin-right: 5px;
						width: 50px;
						text-align: justify;
						color: #707070;
						&:after {
							content: '';
							display: inline-block;
							width: 100%;
						}
					}
				}
			}
		}
	}
}
</style>
