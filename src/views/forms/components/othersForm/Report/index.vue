<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker :required="true" name="region" title="区域" placeholder="区域" v-model="region" :columns="regions" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="accountNumber" type="digit" name="accountNumber" label="户号" placeholder="户号" @change="accountNumberChange" />
				<van-field v-model="userName" name="userName" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填用户名' }]" />
				<van-field class="required" v-model="contacter" name="contacter" label="填报人" placeholder="填报人" />
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
				<van-field class="required" v-model="place" name="place" label="报漏地点" placeholder="报漏地点" :rules="[{ required: true, message: '请填报漏地点' }]">
					<template #button>
						<van-button block size="mini" type="primary" text="获取地点" native-type="button" />
					</template>
				</van-field>
				<van-field v-model="remark" rows="2" name="remark" autosize label="备注" type="textarea" maxlength="50" placeholder="备注" show-word-limit />
			</div>
			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
export default {
	name: 'report',
	data() {
		return {
			regions: ['石岐', '东区', '西区', '北区'],
			region: '',
			accountNumber: '',
			userName: '',
			contacter: '',
			phoneNumber: '',
			tellNumber: '',
			place: '',
			remark: ''
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'css/exchangeForm.scss';
</style>
