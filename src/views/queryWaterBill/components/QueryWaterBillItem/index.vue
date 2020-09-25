<template>
	<div class="queryWaterBillItem">
		<div class="switchWrapper"><van-switch v-if="data.finish" size="16" v-model="data.check" active-color="#07c160" inactive-color="#ee0a24" @click.stop /></div>
		<router-link :to="{ name: 'QueryWaterBillDetail', params: { keepAlive: $route.name } }" class="detailContainer">
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
	name: 'QueryWaterBillItem',
	props: ['data']
};
</script>

<style lang="scss" scoped>
.queryWaterBillItem {
	display: flex;
	align-items: center;
	.switchWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 34px;
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
					color: #333333;
					&.label {
						margin-right: 5px;
						width: 50px;
						height: 24px;
						line-height: 24px;
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
