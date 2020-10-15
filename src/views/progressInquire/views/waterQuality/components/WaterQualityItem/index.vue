<template>
	<div class="waterQualityItem" @click="goDetail">
		<h4>{{ data.title }}</h4>
		<div class="infoWrapper">
			<p class="author">{{ data.author }}</p>
			<div class="infoItem">
				<p class="label">
					<van-icon name="underway-o" color="#ee0a24" />
					<span>更新时间</span>
				</p>
				<p class="info">{{ data.upDate }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WaterQualityItem',
	props: ['data'],
	methods: {
		goDetail() {
			this.$router.push({
				name: 'waterQualityDetail',
				params: {
					id: this.data.id
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.waterQualityItem {
	margin-bottom: 10px;
	padding: 10px;
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	h4 {
		margin-bottom: 8px;
		line-height: 1.2;
		font-size: 14px;
		font-weight: normal;
	}
	.infoWrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		.author {
			flex: 1;
			font-size: 12px;
			color: #707070;
		}
		.infoItem {
			flex: 1;
			display: flex;
			align-items: flex-start;
			p {
				line-height: 20px;
				font-size: 12px;
				&.label {
					display: flex;
					align-items: center;
					flex: 0 0 70px;
					span {
						margin-left: 4px;
						color: #707070;
					}
				}
				&.info {
					margin-left: 8px;
					color: #576b95;
					overflow: hidden;
				}
			}
		}
	}
}
</style>
