<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker
					:required="true"
					name="accountNumber"
					title="户号"
					placeholder="户号"
					v-model="accountNumber"
					:columns="accounts"
					:rules="[{ required: true, message: '请选择户号' }]"
					@change="accountNumberChange"
				/>
				<van-field class="required" disabled v-model="region" name="region" label="区域" placeholder="区域" :rules="[{ required: true, message: '区域为必填项' }]" />
				<van-field disabled v-model="userName" name="userName" label="用户名" placeholder="用户名" />
				<van-field class="required" disabled v-model="address" name="address" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<van-field disabled v-model="userStatus" name="userStatus" label="用户状态" placeholder="用户状态" />
				<van-field class="required" v-model="contact" name="contact" label="联系人" placeholder="联系人" :rules="[{ required: true, message: '请填联系人' }]" />
				<van-field
					type="tel"
					class="required"
					v-model="phoneNumber"
					name="phoneNumber"
					label="手机号码"
					placeholder="手机号码"
					:rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]"
				/>
				<van-field type="tel" v-model="tell" name="tell" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
			</div>
			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
export default {
	name: 'arrearsReinstall',
	data() {
		return {
			accounts: ['12345678', '87654321', '34567893', '67890432'],
			accountNumber: '',
			region: '',
			userName: '',
			address: '',
			userStatus: '',
			contact: '',
			tell: '',
			phoneNumber: ''
		};
	},
	methods: {
		onSubmit(v) {},
		accountNumberChange() {},
		telReg(v) {
			if (v) {
				return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(v) || /^1[3456789]\d{9}$/.test(v);
			}
		},
		phoneReg(v) {
			if (v) {
				return /^1[3456789]\d{9}$/.test(v);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/exchangeForm.scss';
</style>
