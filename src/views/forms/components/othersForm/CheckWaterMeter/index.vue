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
				<van-field v-model="meterNo" disabled name="meterNo" label="表身号" placeholder="表身号" />
				<van-field v-model="caliber" disabled name="caliber" label="水表口径" placeholder="水表口径" />
				<van-field v-model="currentPeriod" disabled type="number" name="currentPeriod" label="本期行至" placeholder="本期行至" />
				<van-field v-model="currentPeriodDate" disabled name="currentPeriodDate" label="本期抄表日" placeholder="本期抄表日" />
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
				<van-field
					class="required"
					v-model="remark"
					rows="2"
					name="remark"
					autosize
					label="申请原因"
					type="textarea"
					maxlength="50"
					placeholder="申请原因"
					show-word-limit
					:rules="[{ required: true, message: '请填申请原因' }]"
				/>
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
				<PhotoUpload name="withholding" label="请添加《代扣人身份证》" placeholder="如代扣人与户主身份信息不同,请添加代扣人身份证正反面" />
				<PhotoUpload name="scene" label="请添加《现场图片》" placeholder="请添加《现场图片》" />
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
export default {
	name: 'checkWaterMeter',
	data() {
		return {
			positive,
			back,
			photo,
			accounts: ['12345678', '87654321', '34567893', '67890432'],
			accountNumber: '',
			region: '',
			userName: '',
			address: '',
			meterNo: '',
			caliber: '',
			currentPeriod: '',
			currentPeriodDate: '',
			applicant: '',
			phoneNumber: '',
			tellNumber: '',
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
