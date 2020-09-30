<template>
	<div class="transfer">
		<van-form @submit="onSubmit">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker :required="true" name="region" title="区域" placeholder="区域" v-model="region" :columns="regions" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="accountNumber" name="accountNumber" label="户号" placeholder="户号" />
				<van-field class="required" v-model="originUserName" name="originUserName" label="原用户名" placeholder="原用户名" :rules="[{ required: true, message: '请填原用户名' }]" />
				<van-field class="required" v-model="address" name="address" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<van-field v-model="currentPeriod" name="currentPeriod" label="本期行至" placeholder="本期行至" />
				<van-field v-model="currentPeriodDate" name="currentPeriodDate" label="本期抄表日" placeholder="本期抄表日" />
				<van-field class="required" v-model="newUserName" name="newUserName" label="新用户名" placeholder="新用户名" :rules="[{ required: true, message: '请填新用户名' }]" />
				<Picker
					:required="true"
					name="typeOfCertificate"
					title="新证件类型"
					placeholder="新证件类型"
					v-model="typeOfCertificate"
					:columns="certificates"
					:rules="[{ required: true, message: '请选择证件类型' }]"
				/>
				<van-field class="required" v-model="newContact" name="newContact" label="新联系人" placeholder="新联系人" :rules="[{ required: true, message: '请填新联系人' }]" />
				<van-field v-model="newTell" name="newTell" label="新联系电话" placeholder="新联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
				<div class="phoneCode">
					<van-field
						class="required"
						v-model="newPhoneNumber"
						name="newPhoneNumber"
						label="新手机号码"
						placeholder="新手机号码"
						:rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]"
					/>
					<div class="getCode">
						<van-button block size="small" type="info" text="获取验证码" native-type="button" />
					</div>
				</div>
				<van-field class="required" v-model="verificationCode" name="verificationCode" label="验证码" placeholder="验证码" :rules="[{ required: true, message: '请填验证码' }]" />
				<Picker :required="true" name="bank" title="新开户银行" placeholder="新开户银行" v-model="bank" :columns="banks" :rules="[{ required: true, message: '请选择新开户银行' }]" />
				<van-field class="required" v-model="bankCode" name="bankCode" label="新银行账号" placeholder="新银行账号" :rules="[{ required: true, message: '请填新银行账号' }]" />
				<van-field class="required" v-model="newAccountName" name="newAccountName" label="新开户人名称" placeholder="新开户人名称" :rules="[{ required: true, message: '请填新开户人名称' }]" />
				<van-field v-model="remark" rows="2" name="remark" autosize label="备注" type="textarea" maxlength="50" placeholder="备注" show-word-limit />
			</div>
			<div class="infoWrapper">
				<h4 class="title">所需资料证件上传</h4>
				<PhotoUpload
					v-model="idCardPositive"
					name="idCardPositive"
					label="请添加《身份证》(正面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="positive"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(正面)的照片' }]"
				/>
				<PhotoUpload
					v-model="idCardBack"
					name="idCardBack"
					label="请添加《身份证》(反面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="back"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(反面)的照片' }]"
				/>
				<PhotoUpload v-model="holdIdCard" name="holdIdCard" label="请添加《手持身份证照》" :image="photo" :required="true" :rules="[{ required: true, message: '请添加手持身份证的照片' }]" />
				<PhotoUpload
					v-model="proofOfHouse"
					name="proofOfHouse"
					label="请添加《产权证明》"
					placeholder="如房产证、不动产证、土地证、备案表等，请提供原件照片"
					:required="true"
					:rules="[{ required: true, message: '请添加《产权证明》' }]"
				/>
				<PhotoUpload
					v-model="bankCard"
					name="bankCard"
					label="请添加《银行卡》"
					placeholder="如选择银行代扣,请填写开户行，开户名，账号等信息，并上传银行卡照片"
					:image="bankImage"
					:required="true"
					:rules="[{ required: true, message: '请添加《银行卡》的照片' }]"
				/>
				<PhotoUpload v-model="businessLicense" name="businessLicense" label="请添加《营业执照》" placeholder="单位用户请提供原件照片" />
				<PhotoUpload v-model="businessLicense" name="businessLicense" label="请添加《代扣人身份证》" placeholder="如代扣人与户主身份信息不同,请添加代扣人身份证正反面" />
				<PhotoUpload v-model="businessForm" name="businessForm" label="请添加《业务受理表》" placeholder="单位用户请上传加盖公章的业务受理表" />
				<PhotoUpload v-model="otherDocuments" name="otherDocuments" label="请添加《其他证件》" placeholder="其他相关证明、证件可在此添加" />
			</div>

			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
import Picker from 'components/part/Picker';
import PhotoUpload from '../PhotoUpload';
import positive from 'images/positive.png';
import back from 'images/back.png';
import photo from 'images/photo.png';
import bankImage from 'images/bank.png';
export default {
	name: 'transfer',
	components: {
		Picker,
		PhotoUpload
	},
	data() {
		return {
			positive,
			back,
			photo,
			bankImage,
			regions: ['石岐', '东区', '西区', '北区'],
			certificates: ['身份证', '营业执照', '港澳通行证', '港澳身份证', '护照', '军官证', '其他证件'],
			banks: ['农商银行', '广发银行', '建设银行', '工商银行', '交通银行', '农业银行', '中国银行', '交通银行', '邮政储蓄', '招商银行'],
			region: '',
			accountNumber: '',
			originUserName: '',
			address: '',
			currentPeriod: '',
			currentPeriodDate: '',
			newUserName: '',
			typeOfCertificate: '',
			newContact: '',
			newTell: '',
			newPhoneNumber: '',
			verificationCode: '',
			bank: '',
			bankCode: '',
			newAccountName: '',
			remark: '',
			idCardPositive: null,
			idCardBack: null,
			holdIdCard: null,
			proofOfHouse: null,
			bankCard: null,
			businessLicense: null,
			withholdingId: null,
			businessForm: null,
			otherDocuments: null,
			signature: null
		};
	},
	methods: {
		onSubmit(v) {
			console.log(v);
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
.transfer {
	.infoWrapper {
		margin-bottom: 10px;
		border-radius: 8px;
		overflow: hidden;
		.title {
			padding: 10px;
			background-color: #eeeef0;
			text-align: center;
			font-weight: normal;
		}
		.phoneCode {
			display: flex;
			align-items: center;
			.getCode {
				margin-left: 10px;
				flex: 0 0 100px;
				background-color: #ffffff;
			}
		}
	}
	.required {
		&:before {
			content: '*';
			position: absolute;
			top: 8px;
			left: 10px;
			font-size: 10px;
			color: #ee0a24;
		}
	}
	.submit {
		margin: 16px 0;
	}
}
</style>
