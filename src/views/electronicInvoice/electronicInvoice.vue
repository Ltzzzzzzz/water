<template>
	<div id="electronicInvoice" class="pageContainer">
		<PageNav link="/Payment" :title="$route.meta.title"></PageNav>
		<div class="scrollContainer">
			<div class="titleWrapper">
				<p class="info">户名：袁敏棠</p>
				<div class="info">
					户号：
					<Picker :custom="true" title="户号" v-model="accountNumber" :columns="accountNumberList" />
					<div class="iconWrapper">
						<van-icon size="12" name="arrow-down" />
					</div>
				</div>
				<p class="info">地址：亨尾大街东区软件园3层314</p>
			</div>
			<div class="yearPickerWrapper">
				<YearPicker />
			</div>
			<div class="container">
				<div class="tip" v-if="!list.length">
					<div class="iconWrapper">
						<van-icon size="40" color="#707070" name="question-o" />
						<p class="desc">暂无数据</p>
					</div>
				</div>
				<div class="waterBillItemList" v-else>
					<WaterBillItem v-for="item in list" :key="item">
						<van-button plain type="info" text="开票" />
					</WaterBillItem>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import YearPicker from 'views/waterBillList/components/YearPicker';
import WaterBillItem from 'views/waterBillList/components/WaterBillItem';
export default {
	name: 'ElectronicInvoice',
	components: {
		YearPicker,
		WaterBillItem
	},
	data() {
		return {
			accountNumber: '1234567890',
			accountNumberList: ['1234567890', '0987654321'],
			list: []
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'css/electronicInvoice.scss';
</style>
