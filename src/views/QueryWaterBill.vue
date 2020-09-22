<template>
	<div id="queryWaterBill" class="pageContainer">
		<PageNav link="/Payment" :title="$route.meta.title"></PageNav>
		<div class="container">
			<van-form @submit="submit">
				<div class="formWrapper">
					<van-field v-model="accountNumber" name="accountNumber" label="户号" placeholder="户号" :rules="rules.accountNumber" />
					<van-field v-model="accountName" name="accountName" label="户名" placeholder="户名" :rules="rules.accountName" />
					<DatePicker placeholder="开始时间" name="startDate" :rules="rules.startDate" v-model="startDate"></DatePicker>
					<DatePicker placeholder="结束时间" name="endDate" v-model="endDate"></DatePicker>
				</div>
				<div class="buttonWrapper">
					<van-button size="small" text="查询" round block type="info" native-type="submit" />
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QueryWaterBill',
	data() {
		return {
			accountNumber: '',
			accountName: '',
			startDate: '',
			endDate: '',
			rules: {
				accountNumber: [{ required: true, message: '请填写户号' }],
				accountName: [{ required: true, message: '请填写户名' }],
				startDate: [{ validator: this.startDateValidator, message: '开始时间不能大于结束时间' }]
			}
		};
	},
	methods: {
		submit(v) {
			console.log(v);
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
