<template>
	<div id="waterQualityDetail" class="pageContainer">
		<PageModel>
			<Navbar>
				<p class="desc">水质公告详情</p>
			</Navbar>
			<div class="container">
				<div class="titleWrapper">
					<h4>中山城区管网水水质合格率(2020.09.21-2020.09.27)</h4>
					<p class="info">2020-10-13 水质公告</p>
				</div>
				<div class="messageWrapper"></div>
			</div>
		</PageModel>
	</div>
</template>

<script>
export default {
	name: 'waterQualityDetail'
};
</script>

<style lang="scss" scoped>
#waterQualityDetail {
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
