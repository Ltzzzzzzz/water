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
				<Picker
					:required="true"
					name="typeOfCertificate"
					title="新证件类型"
					placeholder="新证件类型"
					v-model="typeOfCertificate"
					:columns="certificates"
					:rules="[{ required: true, message: '请选择证件类型' }]"
				/>
				<van-field class="required" v-model="certificate" name="certificate" label="证件号码" placeholder="证件号码" :rules="[{ required: true, message: '请填证件号码' }]" />

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
				<van-field v-model="remark" rows="2" name="remark" autosize label="备注" type="textarea" maxlength="50" placeholder="备注" show-word-limit />
			</div>
			<div class="infoWrapper">
				<h4 class="title">所需资料证件上传</h4>
				<PhotoUpload
					name="idCardPositive"
					label="请添加《身份证》(正面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="positive"
					:maxcount="1"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(正面)的照片' }]"
				/>
				<PhotoUpload
					name="idCardBack"
					label="请添加《身份证》(反面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="back"
					:maxcount="1"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(反面)的照片' }]"
				/>
				<PhotoUpload name="holdIdCard" label="请添加《手持身份证照》" :image="photo" :maxcount="1" :required="true" :rules="[{ required: true, message: '请添加手持身份证的照片' }]" />
				<PhotoUpload name="businessLicense" label="请添加《营业执照》" placeholder="单位用户请提供原件照片" />
				<PhotoUpload name="businessForm" label="请添加《业务受理表》" placeholder="单位用户请上传加盖公章的业务受理表" />
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
export default {
	name: 'pauseReinstall',
	data() {
		return {
			positive,
			back,
			photo,
			accounts: ['12345678', '87654321', '34567893', '67890432'],
			certificates: ['身份证', '营业执照', '港澳通行证', '港澳身份证', '护照', '军官证', '其他证件'],
			accountNumber: '',
			region: '',
			userName: '',
			address: '',
			userStatus: '',
			typeOfCertificate: '',
			certificate: '',
			contact: '',
			tell: '',
			phoneNumber: '',
			remark: ''
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
