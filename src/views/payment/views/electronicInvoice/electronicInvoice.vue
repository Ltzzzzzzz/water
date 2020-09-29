<template>
	<div id="electronicInvoice" class="pageContainer">
		<Navbar>
			<p class="info">户名：袁敏棠</p>
			<div class="info">
				户号：
				<Picker :custom="true" title="户号" v-model="accountNumber" :columns="accountNumberList" />
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
			<div class="electronicInvoiceItemList" v-else>
				<ElectronicInvoiceItem v-for="item in list" :key="item" />
			</div>
		</div>
	</div>
</template>

<script>
import YearPicker from 'components/part/YearPicker';
import ElectronicInvoiceItem from './components/ElectronicInvoiceItem';
import Picker from 'components/part/Picker';
export default {
	name: 'electronicInvoice',
	components: {
		YearPicker,
		ElectronicInvoiceItem,
		Picker
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
