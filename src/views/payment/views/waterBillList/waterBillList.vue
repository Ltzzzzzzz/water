<template>
	<div id="waterBillList" class="pageContainer">
		<Navbar>
			<p class="info">户名：袁敏棠</p>
			<div class="info">
				户号：
				<Picker :custom="true" title="户号" v-model="accountNumber" :columns="accountNumberList" @change="hanlderChange" />
				<div class="iconWrapper">
					<van-icon size="12" name="arrow-down" />
				</div>
			</div>
			<p class="info">地址：亨尾大街东区软件园3层314</p>
		</Navbar>
		<div class="yearPickerWrapper">
			<YearPicker />
		</div>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="暂无数据" /></div>
			<div class="waterBillItemList" v-else>
				<WaterBillItem v-for="item in list" :key="item" />
			</div>
		</div>
	</div>
</template>

<script>
import YearPicker from 'components/part/YearPicker';
import WaterBillItem from './components/WaterBillItem';
export default {
	name: 'waterBillList',
	components: {
		YearPicker,
		WaterBillItem
	},
	data() {
		return {
			accountNumber: '1234567890',
			accountNumberList: ['1234567890', '0987654321'],
			list: [1, 2, 3, 4]
		};
	},
	methods: {
		hanlderChange() {}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/waterBillList.scss';
</style>
