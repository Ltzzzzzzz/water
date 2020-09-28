<template>
	<div class="electronicInvoiceItem">
		<div class="dateWrapper">
			<h4>抄表时间</h4>
			<p class="date">2020-07-23</p>
			至
			<p class="date">2020-09-21</p>
		</div>
		<div class="container">
			<p class="money">57.2元</p>
			<div class="statusWrapper finish">
				<div class="status">已销帐</div>
			</div>
			<div class="detailWrapper">
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
					<van-button plain type="info" text="开票" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ElectronicInvoiceItem'
};
</script>

<style lang="scss" scoped>
.electronicInvoiceItem {
	margin-bottom: 20px;
	display: flex;
	background-color: #ffffff;
	border-radius: 8px;
	overflow: hidden;
	.dateWrapper {
		padding: 5px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		background-color: #4199b4;
		font-size: 14px;
		.date {
			margin: 10px 0;
		}
	}
	.container {
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.money {
			margin-bottom: 10px;
			font-size: 24px;
			color: #333333;
		}
		.statusWrapper {
			position: absolute;
			top: 0;
			right: 0;
			border: 24px solid transparent;
			border-top-color: #ee0a24;
			border-right-color: #ee0a24;
			&.finish {
				border-top-color: #07c160;
				border-right-color: #07c160;
			}
			.status {
				position: absolute;
				top: 0;
				right: 0;
				font-size: 12px;
				font-weight: bold;
				color: #ffffff;
				transform: translate(24px, -12px) rotate(45deg);
				white-space: nowrap;
				z-index: 1;
			}
		}
		.detailWrapper {
			display: flex;
			align-items: flex-end;
			.infoWrapper {
				flex: 1;
				display: flex;
				flex-direction: column;
				overflow: hidden;
				.info {
					display: flex;
					line-height: 24px;
					height: 24px;
					font-size: 14px;
					span {
						flex: 1;
						color: #333333;
						&.label {
							display: inline-block;
							flex: 0 0 70px;
							margin-right: 10px;
							width: 70px;
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
}
</style>
