<template>
	<div id="queryWaterBill" class="pageContainer">
		<Navbar>
			<p class="desc">
				尊敬的用户 <br />
				请输入您的信息进行查询
			</p>
		</Navbar>
		<div class="container">
			<van-form @submit="submit">
				<div class="formWrapper">
					<van-field v-model="accountNumber" name="accountNumber" label="户号" placeholder="户号" :rules="rules.accountNumber" />
					<van-field v-model="accountName" name="accountName" label="户名" placeholder="户名" :rules="rules.accountName" />
					<DatePicker placeholder="开始时间" name="startDate" forward="1" :rules="rules.startDate" v-model="startDate"></DatePicker>
					<DatePicker placeholder="结束时间" name="endDate" v-model="endDate"></DatePicker>
					<div class="buttonWrapper">
						<van-button size="small" text="查询" round block type="info" native-type="submit" />
					</div>
				</div>
			</van-form>
			<div class="tip" v-if="!list.length"><van-empty /></div>
			<div class="billList" v-else>
				<div class="ctrlWrapper">
					<div class="switchWrapper" @click="switchCheck = !switchCheck">
						<van-switch size="16" v-model="switchCheck" active-color="#07c160" inactive-color="#ee0a24" @click.stop /><span>全选</span>
					</div>
					<div class="buttonWrapper">
						<van-button block round size="mini" type="primary" text="缴 费" />
					</div>
				</div>
				<van-list v-model="loading" :finished="finished" error-text="请求失败，点击重新加载" finished-text="没有更多了" @load="onLoad">
					<QueryWaterBillItem v-for="item in list" :key="item.id" :data="item" />
				</van-list>
			</div>
		</div>
	</div>
</template>

<script>
import QueryWaterBillItem from './components/QueryWaterBillItem';
import DatePicker from 'components/part/DatePicker';
export default {
	name: 'queryWaterBill',
	components: {
		QueryWaterBillItem,
		DatePicker
	},
	data() {
		return {
			lastTimeVolume: 50, // 可删，模拟数据
			/* ==========组件控制 start========== */
			switchCheck: true,
			list: [],
			loading: false,
			finished: false,
			/* ==========组件控制 end========== */

			/* ==========表单参数绑定 start========== */
			accountNumber: '',
			accountName: '',
			startDate: '',
			endDate: '',
			rules: {
				accountNumber: [{ required: true, message: '请填写户号' }],
				accountName: [{ required: true, message: '请填写户名' }],
				startDate: [{ validator: this.startDateValidator, message: '开始时间不能大于结束时间' }]
			}
			/* ==========表单参数绑定 end========== */
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
	methods: {
		submit(v) {
			if (this.list.length) {
				this.list = [];
				this.finished = false;
			}
			for (let i = 1; i <= 10; i++) {
				const obj = {
					id: i,
					totalPrice: Math.round(Math.random() * 50 * 3 * 100) / 100,
					waterVolume: Math.floor(Math.random() * 100),
					lastTimeVolume: Math.ceil(this.lastTimeVolume + (this.list[this.list.length - 1] ? this.list[this.list.length - 1].waterVolume : 0)),
					finish: i < 9 ? true : false,
					check: !this.finish,
					metarDate: `2020-${i < 10 ? '0' + (i - 1) : i - 1}-20至2020-${i < 10 ? '0' + i : i}-19`
				};
				this.list.push(obj);
			}
			this.list.reverse();
		},
		// 上拉加载
		onLoad() {
			setTimeout(() => {
				for (let i = 1; i <= 10; i++) {
					const obj = {
						id: this.list.length + 1,
						totalPrice: Math.round(Math.random() * 50 * 3 * 100) / 100,
						waterVolume: Math.floor(Math.random() * 100),
						lastTimeVolume: Math.ceil(this.lastTimeVolume + (this.list[this.list.length - 1] ? this.list[this.list.length - 1].waterVolume : 0)),
						finish: true,
						check: !this.finish,
						metarDate: `2020-${i < 10 ? '0' + (i - 1) : i - 1}-20至2020-${i < 10 ? '0' + i : i}-19`
					};
					this.list.push(obj);
				}
				this.loading = false;
				if (this.list.length >= 20) {
					this.finished = true;
				}
			}, 1000);
		},
		startDateValidator(v) {
			return new Date(v) <= new Date(this.endDate);
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/queryWaterBill.scss';
</style>
