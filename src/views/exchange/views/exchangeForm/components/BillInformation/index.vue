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
				<van-field class="required" v-model="applicant" name="applicant" label="申请人" placeholder="申请人" />
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
				<Picker
					:required="true"
					name="typeOfCertificate"
					title="证件类型"
					placeholder="证件类型"
					v-model="typeOfCertificate"
					:columns="certificates"
					:rules="[{ required: true, message: '请选择证件类型' }]"
				/>
				<van-field class="required" v-model="certificate" name="certificate" label="证件号码" placeholder="证件号码" :rules="[{ required: true, message: '请填证件号码' }]" />
				<Picker :required="true" name="invoice" title="票据类型" placeholder="票据类型" v-model="invoice" :columns="typeOfInvoice" :rules="[{ required: true, message: '请选择票据类型' }]" />
				<van-field class="required" v-model="invoiceName" name="invoiceName" label="税票名称" placeholder="税票名称" :rules="[{ required: true, message: '请填税票名称' }]" />
				<van-field v-model="invoiceId" name="invoiceId" label="纳税人识别号" placeholder="纳税人识别号" />
				<van-field v-model="invoiceAccount" name="invoiceAccount" label="税票账号" placeholder="税票账号" />
				<van-field v-model="invoiceBank" name="invoiceBank" label="税票开户行" placeholder="税票开户行" />
				<van-field v-model="invoiceAddress" name="invoiceAddress" label="税票地址" placeholder="税票地址" />
				<van-field v-model="invoiceTell" name="invoiceTell" label="税票电话" placeholder="税票电话" />
			</div>
			<div class="infoWrapper">
				<h4 class="title">所需资料证件上传</h4>
				<PhotoUpload
					name="idCardPositive"
					label="请添加《身份证》(正面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="positive"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(正面)的照片' }]"
				/>
				<PhotoUpload
					name="idCardBack"
					label="请添加《身份证》(反面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="back"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(反面)的照片' }]"
				/>
				<PhotoUpload name="holdIdCard" label="请添加《手持身份证照》" :image="photo" :required="true" :rules="[{ required: true, message: '请添加手持身份证的照片' }]" />
				<PhotoUpload name="businessLicense" label="请添加《营业执照》" placeholder="单位用户请提供原件照片" />
				<PhotoUpload name="businessForm" label="请添加《业务受理表》" placeholder="单位用户请上传加盖公章的业务受理表" />
				<PhotoUpload name="otherDocuments" label="请添加《其他证件》" placeholder="其他相关证明、证件可在此添加" />
				<Signature :required="true" name="signature" label="请添加《个人签名》" :rules="[{ required: true, message: '请添加《个人签名》' }]" />
			</div>

			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
import positive from 'images/positive.png';
import back from 'images/back.png';
import photo from 'images/photo.png';
import bankImage from 'images/bank.png';
export default {
	name: 'billInformation',
	data() {
		return {
			positive,
			back,
			photo,
			bankImage,
			accounts: ['12345678', '87654321', '34567893', '67890432'],
			certificates: ['身份证', '营业执照', '港澳通行证', '港澳身份证', '护照', '军官证', '其他证件'],
			typeOfInvoice: ['普票', '专票'],
			accountNumber: '',
			region: '',
			userName: '',
			address: '',
			applicant: '',
			typeOfCertificate: '',
			certificate: '',
			tellNumber: '',
			phoneNumber: '',
			invoice: '',
			invoiceName: '',
			invoiceId: '',
			invoiceAccount: '',
			invoiceBank: '',
			invoiceAddress: '',
			invoiceTell: ''
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
