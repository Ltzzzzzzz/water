<template>
	<div id="home" class="pageContainer">
		<Banner></Banner>
		<!-- 模块路由 -->
		<div class="titleWrapper">
			<div class="title">
				<div class="line left"></div>
				<h4>网上营业厅</h4>
				<div class="line right"></div>
			</div>
		</div>
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item to="/Payment">
						<van-icon name="balance-list-o" size="28" />
						<h4>水费查缴</h4>
						<p>水费查询缴纳</p>
					</van-grid-item>
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
					<van-grid-item icon="question-o" text="未知模块" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from './components/Banner';
import ripplePng from 'images/ripple.png';
export default {
	name: 'Home',
	components: {
		Banner
	},
	data() {
		return {
			ripplePng
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'css/home.scss';
</style>
