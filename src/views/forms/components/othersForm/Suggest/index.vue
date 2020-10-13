<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker :required="true" name="region" title="区域" placeholder="区域" v-model="region" :columns="regions" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="accountNumber" type="digit" name="accountNumber" label="户号" placeholder="户号" @change="accountNumberChange" />
				<van-field class="required" v-model="userName" name="userName" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填用户名' }]" />
				<van-field class="required" v-model="address" name="address" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<van-field class="required" v-model="contacter" name="contacter" label="联系人" placeholder="联系人" />
				<van-field
					class="required"
					type="tel"
					v-model="phoneNumber"
					name="phoneNumber"
					label="手机号码"
					placeholder="手机号码"
					:rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]"
				/>
				<van-field type="tel" v-model="tellNumber" name="tellNumber" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
				<van-field
					class="required"
					v-model="remark"
					rows="2"
					name="remark"
					autosize
					label="情况说明"
					type="textarea"
					maxlength="50"
					placeholder="情况说明"
					show-word-limit
					:rules="[{ required: true, message: '请填情况说明' }]"
				/>
			</div>
			<div class="infoWrapper">
				<h4 class="title">所需资料证件上传</h4>
				<PhotoUpload name="otherFiles" label="请添加《其他文件》" placeholder="其他相关文件可在此添加" />
			</div>

			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
export default {
	name: 'suggest',
	data() {
		return {
			regions: ['石岐', '东区', '西区', '北区'],
			region: '',
			accountNumber: '',
			userName: '',
			address: '',
			contacter: '',
			phoneNumber: '',
			remark: ''
		};
	},
	methods: {
		onSubmit(v) {
			console.log(v);
		},
		accountNumberChange() {
			console.log(1);
		},
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
