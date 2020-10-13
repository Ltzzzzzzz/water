<template>
	<div class="outlet">
		<div class="container">
			<h4>xx营业厅</h4>
			<div class="businessHours">
				<p class="label">营业时间：</p>
				<div class="hours">
					<p class="hour">周一至周五：08:00 - 17:00</p>
					<p class="hour">周六：09:00 - 16:00</p>
					<p class="hour">周日：休息</p>
				</div>
			</div>
			<div class="info">
				<p>地址：东区竹苑路银竹街23号</p>
				<p>电话：0760-123456</p>
			</div>
			<div class="contact">
				<div class="item">
					<van-icon name="location" color="#1e7fb8" size="20" />
					<p>到这里</p>
				</div>
				<a href="tel:0760-123456" class="item">
					<van-icon name="phone" color="#1e7fb8" size="20" />
					<p>打电话</p>
				</a>
				<div class="item" @click="watchMap">
					<van-icon name="map-marked" color="#1e7fb8" size="20" />
					<p>看地图</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Outlet',
	methods: {
		watchMap() {
			this.$router.push('/map');
		}
	}
};
</script>

<style lang="scss" scoped>
.outlet {
	margin-bottom: 10px;
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
	h4 {
		margin-bottom: 8px;
		font-size: 16px;
		color: #333333;
	}
	.businessHours {
		display: flex;
		color: #707070;
		font-size: 14px;
		.label {
			margin-right: 4px;
		}
		.hours {
			flex: 1;
			overflow: hidden;
			.hour {
				margin-bottom: 4px;
			}
		}
	}
	.info {
		font-size: 12px;
		color: #b4b4b4;
		p {
			line-height: 1.4;
		}
	}
	.contact {
		display: flex;
		margin: 10px -10px 0;
		padding: 10px 10px 0;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			box-sizing: border-box;
			pointer-events: none;
			top: 0;
			right: 0;
			left: 0;
			border-bottom: 1px solid #ebedf0;
			transform: scaleY(0.5);
		}
		.item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 12px;
			color: #555555;
			overflow: hidden;
			p {
				margin-left: 4px;
			}
		}
	}
}
</style>
