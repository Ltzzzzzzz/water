<template>
	<div id="home" class="pageContainer">
		<PageNav :title="$route.meta.title"></PageNav>
		<Banner></Banner>
		<!-- 模块路由 -->
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item to="/Payment">
						<van-icon name="balance-list-o" size="28" />
						<h4>水费查缴</h4>
						<p>水费查询缴纳</p>
					</van-grid-item>
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from './components/Banner';
export default {
	name: 'Home',
	components: {
		Banner
	}
};
</script>

<style lang="scss" scoped>
@import 'css/home.scss';
</style>
