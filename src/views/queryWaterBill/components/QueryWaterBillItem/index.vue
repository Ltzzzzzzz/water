<template>
	<div class="queryWaterBillItem">
		<div class="switchWrapper"><van-switch v-if="data.finish" size="16" v-model="data.check" active-color="#07c160" inactive-color="#ee0a24" @click.stop /></div>
		<div class="detailWrapper" @click="goDetail">
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
		<div class="goDetail" @click="goDetail">
			<van-icon name="arrow" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'QueryWaterBillItem',
	props: ['data'],
	methods: {
		goDetail() {
			this.$router.push('/QueryWaterBillDetail');
		}
	}
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
	.detailWrapper {
		flex: 1;
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
</style>
