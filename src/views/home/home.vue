<template>
	<div id="home" class="pageContainer">
		<Banner />
		<PageTitle title="网上营业厅" />
		<!-- 模块路由 -->
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item to="/payment">
						<div class="titleWrapper">
							<div class="title">
								<van-icon name="balance-list-o" color="#ee0a24" size="28" />
								<h4>水费查缴</h4>
							</div>
							<p>水费查询缴纳</p>
						</div>
					</van-grid-item>
					<van-grid-item to="/exchange">
						<div class="titleWrapper">
							<div class="title">
								<van-icon name="exchange" color="#576b95" size="28" />
								<h4>信息变更</h4>
							</div>
							<p>修改水卡信息</p>
						</div>
					</van-grid-item>
					<van-grid-item to="/waterApplication">
						<div class="titleWrapper">
							<div class="title">
								<van-icon name="cluster-o" color="#07c160" size="28" />
								<h4>用水申请</h4>
							</div>
							<p>用水报装业务</p>
						</div>
					</van-grid-item>
					<van-grid-item to="/progressInquire">
						<div class="titleWrapper">
							<div class="title">
								<van-icon name="underway-o" color="#ed6a0c" size="28" />
								<h4>进度查询</h4>
							</div>
							<p>进度查询、公共信息</p>
						</div>
					</van-grid-item>
					<van-grid-item to="/others">
						<div class="titleWrapper">
							<div class="title">
								<van-icon name="other-pay" color="#faab0c" size="28" />
								<h4>其他业务</h4>
							</div>
							<p>验表、水质检验、投诉</p>
						</div>
					</van-grid-item>
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from './components/Banner';
export default {
	name: 'home',
	components: {
		Banner
	}
};
</script>

<style lang="scss" scoped>
#home {
	.routers {
		/deep/.van-grid-item {
			height: 30vw;
		}
		.titleWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			.title {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			p {
				flex: 1;
			}
		}
	}
}
</style>
