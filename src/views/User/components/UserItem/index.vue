<template>
	<div class="userItem">
		<div class="userInfo">
			<div class="userInfoWrapper">
				<van-icon size="20" color="#4199b4" name="flower-o" />
				<span class="userName">袁敏棠</span>
				<van-icon size="20" color="#ee0a24" name="cross" />
			</div>
		</div>
		<div class="userDetailInfo">
			<div class="userDetailInfoWrapper">
				<div class="infoWrapper">
					<span class="label">户号</span>
					<span>1234567890</span>
				</div>
				<div class="infoWrapper">
					<span class="label">地址</span>
					<span>亨尾大街东区软件园3层314</span>
				</div>
				<div class="infos">
					<div class="infosWrapper">
						<span class="label">余额</span>
						<span>¥ 0.00</span>
					</div>
					<div class="infosWrapper">
						<span class="label long">欠费金额</span>
						<span>¥ 0.00</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserItem'
};
</script>

<style lang="scss" scoped>
.userItem {
	padding: 10px;
	padding-right: 0;
	margin-bottom: 10px;
	background-color: #ffffff;
	border-radius: 8px;
	.userInfo {
		position: relative;
		margin-left: 10px;
		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			border-bottom: 1px solid #eeeef0;
			transform: scaleY(0.5);
		}
		.userInfoWrapper {
			padding: 2px;
			margin-right: 10px;
			display: flex;
			align-items: center;
			.userName {
				flex: 1;
				margin: 0 20px;
				font-size: 14px;
				color: #707070;
			}
		}
	}
	.userDetailInfo {
		margin-top: 8px;
		display: flex;
		align-items: center;
		.userDetailInfoWrapper {
			flex: 1;
			.infoWrapper {
				display: flex;
				span {
					flex: 1;
					line-height: 24px;
					font-size: 14px;
					&.label {
						margin-right: 5px;
						flex: 0 0 40px;
						width: 40px;
						height: 24px;
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
			.infos {
				display: flex;
				.infosWrapper {
					flex: 1;
					display: flex;
					span {
						flex: 1;
						line-height: 24px;
						font-size: 14px;
						&.label {
							margin-right: 5px;
							flex: 0 0 40px;
							width: 40px;
							height: 24px;
							text-align: justify;
							color: #707070;
							&:after {
								content: '';
								display: inline-block;
								width: 100%;
							}
							&.long {
								flex: 0 0 60px;
								width: 60px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
