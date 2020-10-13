<template>
	<div id="waterPriceDetail" class="pageContainer">
		<Navbar>
			<p class="desc">水质公告详情</p>
		</Navbar>
		<div class="container">
			<div class="titleWrapper">
				<h4>城区水价信息</h4>
				<p class="info">2020-10-13 水价信息</p>
			</div>
			<div class="messageWrapper"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterPriceDetail'
};
</script>

<style lang="scss" scoped>
#waterPriceDetail {
	.titleWrapper {
		h4 {
			margin-bottom: 8px;
			line-height: 1.5;
			font-weight: normal;
			font-size: 14px;
		}
		.info {
			color: #707070;
			font-size: 12px;
		}
	}
}
</style>
