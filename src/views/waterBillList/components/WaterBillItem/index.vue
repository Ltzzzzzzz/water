<template>
	<div class="waterBillItem">
		<p class="date">
			抄表时间：2020-07-23至2020-09-21
		</p>
		<div class="moneyWrapper">
			<p class="money">57.2元</p>
			<p class="status finish">已销帐</p>
		</div>
		<div class="container">
			<div class="infoWrapper">
				<div class="info">
					<span class="label">水量</span>
					<span>20</span>
				</div>
				<div class="info">
					<span class="label">上期行至</span>
					<span>256</span>
				</div>
				<div class="info">
					<span class="label">本期行至</span>
					<span>276</span>
				</div>
			</div>
			<div class="ctrlWrapper">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WaterBillItem'
};
</script>

<style lang="scss" scoped>
.waterBillItem {
	margin-bottom: 20px;
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
	.date {
		padding: 5px 10px;
		color: #ffffff;
		background-color: #4199b4;
	}
	.moneyWrapper {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.money {
			font-size: 24px;
			color: #707070;
		}
		.status {
			color: #ee0a24;
			&.finish {
				color: #07c160;
			}
		}
	}
	.container {
		display: flex;
		align-items: center;
		padding-bottom: 10px !important;
		.infoWrapper {
			flex: 1;
			display: flex;
			flex-direction: column;
			.info {
				display: flex;
				line-height: 24px;
				height: 24px;
				font-size: 12px;
				span {
					flex: 1;
					color: #555555;
					&.label {
						display: inline-block;
						flex: 0 0 50px;
						margin-right: 8px;
						width: 50px;
						color: #707070;
						text-align: justify;
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
