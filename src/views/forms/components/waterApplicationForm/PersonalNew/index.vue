<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker :required="true" name="region" title="区域" placeholder="区域" v-model="region" :columns="regions" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="userName" name="userName" label="用户名" placeholder="用户名" />
				<van-field required v-model="address" name="address" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<Picker :required="true" name="caliber" title="口径" placeholder="口径" v-model="caliber" :columns="calibers" :rules="[{ required: true, message: '请选择口径' }]" />
				<van-field required type="digit" v-model="applications" name="applications" label="申请户数" placeholder="申请户数" :rules="[{ required: true, message: '请填申请户数' }]" />
				<Picker :required="true" name="nature" title="用水性质" placeholder="用水性质" v-model="nature" :columns="natures" :rules="[{ required: true, message: '请选择用水性质' }]" />
				<Picker
					:required="true"
					name="typeOfCertificate"
					title="证件类型"
					placeholder="证件类型"
					v-model="typeOfCertificate"
					:columns="certificates"
					:rules="[{ required: true, message: '请选择证件类型' }]"
				/>
				<van-field required v-model="certificate" name="certificate" label="证件号码" placeholder="证件号码" :rules="[{ required: true, message: '请填证件号码' }]" />
				<Picker :required="true" name="bank" title="开户银行" placeholder="开户银行" v-model="bank" :columns="banks" :rules="[{ required: true, message: '请选择开户银行' }]" />
				<van-field required v-model="accountName" name="accountName" label="开户人名称" placeholder="开户人名称" :rules="[{ required: true, message: '请填开户人名称' }]" />
				<van-field required v-model="bankCode" type="digit" name="bankCode" label="银行账号" placeholder="银行账号" :rules="[{ required: true, message: '请填银行账号' }]" />

				<van-field required v-model="contact" name="contact" label="联系人" placeholder="联系人" :rules="[{ required: true, message: '请填联系人' }]" />
				<van-field type="tel" required v-model="phoneNumber" name="phoneNumber" label="手机号码" placeholder="手机号码" :rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]" />
				<van-field type="tel" v-model="tell" name="tell" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
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
				<PhotoUpload
					name="proofOfHouse"
					label="请添加《产权证明》"
					placeholder="如房产证、不动产证、土地证、备案表等，请提供原件照片"
					:required="true"
					:rules="[{ required: true, message: '请添加《产权证明》' }]"
				/>
				<PhotoUpload
					name="bankCard"
					label="请添加《银行卡》"
					placeholder="如选择银行代扣,请填写开户行，开户名，账号等信息，并上传银行卡照片"
					:image="bankImage"
					:required="true"
					:rules="[{ required: true, message: '请添加《银行卡》的照片' }]"
				/>
				<PhotoUpload name="withholding" label="请添加《代扣人身份证》" placeholder="如代扣人与户主身份信息不同,请添加代扣人身份证正反面" />
				<PhotoUpload name="drawing" label="请添加《图纸》" placeholder="口径≥DN40或集中安装≥5个需提供图纸，如红线图、地形图、消防设计图等" />
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
	name: 'personalNew',
	data() {
		return {
			positive,
			back,
			photo,
			bankImage,
			regions: ['石岐', '东区', '西区', '北区'],
			certificates: ['身份证', '营业执照', '港澳通行证', '港澳身份证', '护照', '军官证', '其他证件'],
			banks: ['农商银行', '广发银行', '建设银行', '工商银行', '交通银行', '农业银行', '中国银行', '交通银行', '邮政储蓄', '招商银行'],
			calibers: [15, 20, 25, 40, 50, 80, 100, 150, 200, 250, 300, 400, 500, 600, 800, 1200],
			natures: ['生活', '商业', '工业', '建筑', '学校', '机团', '特种', '公共'],
			region: '',
			userName: '',
			address: '',
			typeOfCertificate: '',
			certificate: '',
			contact: '',
			tell: '',
			phoneNumber: '',
			verificationCode: '',
			bank: '',
			bankCode: '',
			accountName: '',
			caliber: '',
			applications: 1,
			nature: ''
		};
	},
	methods: {
		onSubmit(v) {},
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
