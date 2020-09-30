<template>
	<div class="transfer">
		<van-form @submit="onSubmit">
			<Picker name="区域" title="区域" placeholder="区域" v-model="region" :columns="regions" />
			<van-field v-model="accountNumber" name="户号" label="户号" placeholder="户号" />
			<van-field v-model="originUserName" name="原用户名" label="原用户名" placeholder="原用户名" :rules="[{ required: true, message: '请填原用户名' }]" />
			<van-field v-model="address" name="用水地址" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />

			<van-button size="small" block type="info" text="提交" native-type="submit" />
		</van-form>
	</div>
</template>

<script>
import Picker from 'components/part/Picker';
export default {
	name: 'Transfer',
	components: {
		Picker
	},
	data() {
		return {
			regions: ['石岐', '东区', '西区', '北区'],
			region: '石岐',
			accountNumber: '',
			originUserName: '',
			address: ''
		};
	},
	methods: {
		onSubmit() {}
	}
};
</script>

<style></style>
