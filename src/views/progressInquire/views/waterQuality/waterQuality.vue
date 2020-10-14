<template>
	<div id="waterQuality" class="pageContainer">
		<Navbar>
			<div class="infoWrapper">
				<div class="info">
					<Picker :custom="true" title="地区" v-model="area" :columns="areas" @change="hanlderChange" />
					<div class="iconWrapper">
						<van-icon size="14" name="arrow-down" />
					</div>
				</div>
				<p class="desc">水质公告</p>
			</div>
		</Navbar>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="暂无水质公告" /></div>
			<div class="list" v-else>
				<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
					<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
						<WaterQualityItem v-for="item in list" :key="item.id" :data="item" />
					</van-list>
				</van-pull-refresh>
			</div>
		</div>
	</div>
</template>

<script>
import WaterQualityItem from './components/WaterQualityItem';
export default {
	name: 'waterQuality',
	components: {
		WaterQualityItem
	},
	data() {
		return {
			areas: ['城区', '板芙', '东升', '东风', '阜沙', '港口', '古镇', '民众'],
			area: '城区',
			list: [],
			loading: false,
			finished: false,
			refreshing: false
		};
	},
	// 组件内路由钩子
	beforeRouteLeave(to, from, next) {
		// 进入详情页时候，缓存该路由
		const keepAlive = to.meta.keepAlive ? to.meta.keepAlive : '';
		if (!keepAlive) this.$destroy(); // 移除缓存
		this.$store.commit('globel/setKeepAlive', keepAlive);
		next();
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			const obj = {
				id: i,
				title: '中山城区管网水水质合格率(2020.09.21-2020.09.27)',
				author: '水质公告',
				upDate: '2020-10-13'
			};
			this.list.push(obj);
		}
	},
	methods: {
		hanlderChange() {},
		onLoad() {
			setTimeout(() => {
				if (this.refreshing) {
					this.list = [];
					this.refreshing = false;
				}

				for (let i = 0; i < 10; i++) {
					const obj = {
						id: this.list.length + 1,
						title: '中山城区管网水水质合格率(2020.09.21-2020.09.27)',
						author: '水质公告',
						upDate: '2020-10-13'
					};
					this.list.push(obj);
				}
				this.loading = false;

				if (this.list.length >= 20) {
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
@import 'css/waterQuality.scss';
</style>
