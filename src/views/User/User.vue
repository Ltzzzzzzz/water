<template>
	<div id="user" class="pageContainer">
		<PageNav link="/Payment" :title="$route.meta.title"></PageNav>
		<div class="titleWrapper">
			<p>
				尊敬的用户 <br />
				以下为您的客户详情列表
			</p>
		</div>
		<div class="container">
			<div class="tipWrapper">
				<van-icon name="bulb-o" size="40" color="#ee0a24" />
				<h4>您还没有登陆，请登陆后查看</h4>
				<van-button round block size="small" type="info" text="登陆" to="/Login"></van-button>
			</div>
			<div class="userList" v-if="false">
				<van-pull-refresh v-model="refreshing" success-text="刷新成功" @refresh="onRefresh">
					<van-list v-model="loading" :finished="finished" error-text="请求失败，点击重新加载" finished-text="没有更多了" @load="onLoad">
						<van-cell v-for="item in list" :key="item" :title="`户名${item}`" :value="`户号${item}`" :label="`地址${item}`" />
					</van-list>
				</van-pull-refresh>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'User',
	data() {
		return {
			list: [],
			loading: false,
			finished: false,
			refreshing: false
		};
	},
	methods: {
		onLoad() {
			setTimeout(() => {
				if (this.refreshing) {
					this.list = [];
					this.refreshing = false;
				}
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1);
				}
				this.loading = false;
				if (this.list.length >= 40) {
					this.finished = true;
				}
			}, 1000);
		},
		onRefresh() {
			// 清空列表数据
			this.finished = false;
			// 重新加载数据
			// 将 loading 设置为 true，表示处于加载状态
			this.loading = true;
			this.onLoad();
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/user.scss';
</style>
