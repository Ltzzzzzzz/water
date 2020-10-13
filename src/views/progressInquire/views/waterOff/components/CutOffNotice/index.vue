<template>
	<div class="cutOffNotice" @click="goDetail">
		<div class="container">
			<h4>{{ data.title }}</h4>
			<div class="infoWrapper">
				<div class="infoItem">
					<p class="label">
						<van-icon name="location-o" color="#576b95" />
						<span>所需区域</span>
					</p>
					<p class="info">{{ data.area }}</p>
				</div>
				<div class="infoItem">
					<p class="label">
						<van-icon name="label-o" color="#ed6a0c" />
						<span>停水类型</span>
					</p>
					<p class="info">{{ data.project }}</p>
				</div>
				<div class="infoItem">
					<p class="label">
						<van-icon name="underway-o" color="#ee0a24" />
						<span>停水时间</span>
					</p>
					<p class="info">{{ data.cutOffDate }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CutOffNotice',
	props: ['data'],
	methods: {
		goDetail() {
			this.$router.push({
				name: 'waterCutOffDetail',
				params: {
					id: this.data.id
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.cutOffNotice {
	margin-bottom: 10px;
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	h4 {
		margin-bottom: 8px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 14px;
		font-weight: normal;
	}
	.infoWrapper {
		font-size: 14px;
		.infoItem {
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
