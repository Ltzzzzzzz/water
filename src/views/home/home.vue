<template>
	<div id="home" class="pageContainer">
		<Banner />
		<Title title="网上营业厅" />
		<!-- 模块路由 -->
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item to="/payment">
						<van-icon name="balance-list-o" size="28" />
						<h4>水费查缴</h4>
						<p>水费查询缴纳</p>
					</van-grid-item>
					<van-grid-item to="/exchange">
						<van-icon name="exchange" size="28" />
						<h4>信息变更</h4>
						<p>过户、修改水卡信息</p>
					</van-grid-item>
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
export default {
	name: 'home',
	components: {
		Banner
	}
};
</script>
