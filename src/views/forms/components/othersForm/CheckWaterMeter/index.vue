<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<van-field required v-model="clientNumber" name="clientNumber" label="户号" placeholder="户号" :rules="[{ required: true, message: '户号为必填项' }]" @change="handleRegion" />
				<van-field disabled v-model="area" name="area" label="区域" placeholder="区域" />
				<van-field disabled v-model="clientName" name="clientName" label="用户名" placeholder="用户名" />
				<van-field required disabled v-model="meterAddress" name="meterAddress" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<van-field v-model="meterNumber" disabled name="meterNumber" label="表身号" placeholder="表身号" />
				<van-field v-model="caliber" disabled name="caliber" label="水表口径" placeholder="水表口径" />
				<van-field v-model="currMeterReadQty" disabled type="number" name="currMeterReadQty" label="本期行至" placeholder="本期行至" />
				<van-field v-model="currMeterReadDate" disabled name="currMeterReadDate" label="本期抄表日" placeholder="本期抄表日" />
				<van-field required v-model="proposer" name="proposer" label="申请人" placeholder="申请人" />
				<van-field required type="tel" v-model="phone" name="phone" label="手机号码" placeholder="手机号码" :rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]" />
				<van-field type="tel" v-model="tbNumber" name="tbNumber" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
				<van-field
					required
					v-model="cause"
					rows="2"
					name="cause"
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
					name="idCardFronUrl"
					label="请添加《身份证》(正面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="positive"
					:maxcount="1"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(正面)的照片' }]"
				/>
				<PhotoUpload
					name="idCardReverseUrl"
					label="请添加《身份证》(反面)"
					placeholder="个人用户请上传户主身份证，单位用户请上传法人身份证"
					:image="back"
					:maxcount="1"
					:required="true"
					:rules="[{ required: true, message: '请添加身份证(反面)的照片' }]"
				/>
				<PhotoUpload name="idCardHandUrl" label="请添加《手持身份证照》" :image="photo" :maxcount="1" :required="true" :rules="[{ required: true, message: '请添加手持身份证的照片' }]" />
				<PhotoUpload name="businessLicenseUrl" label="请添加《营业执照》" placeholder="单位用户请提供原件照片" />
				<PhotoUpload name="withholdIdCardUrl" label="请添加《代扣人身份证》" placeholder="如代扣人与户主身份信息不同,请添加代扣人身份证正反面" />
				<PhotoUpload name="spotPictureUrl" label="请添加《现场图片》" placeholder="请添加《现场图片》" />
				<PhotoUpload name="otherPictureUrl" label="请添加《其他证件》" placeholder="其他相关证明、证件可在此添加" />
				<Signature :required="true" name="sign" label="请添加《个人签名》" :rules="[{ required: true, message: '请添加《个人签名》' }]" />
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
import othersApi from 'api/others';
import commonApi from 'api/common';
export default {
	name: 'checkWaterMeter',
	data() {
		return {
			positive,
			back,
			photo,
			clientNumber: '', // 户号
			area: '', // 区域
			clientName: '', // 户名
			meterAddress: '', // 水表地址
			meterNumber: '', // 表身号
			caliber: '', // 水表口径
			currMeterReadQty: '', // 本期读数
			currMeterReadDate: '', // 本期抄表日
			proposer: '',
			phone: '', // 手机
			tbNumber: '', // 联系电话
			cause: '' // 原因
		};
	},
	methods: {
		async handleRegion() {
			const rs = await commonApi.findByClientNumber({ clientNumber: this.clientNumber });
			if (rs.data && rs.code === 0) {
				const u = rs.data;
				this.area = u.area;
				this.clientName = u.clientName;
				this.meterAddress = u.meterAddress;
				this.meterNumber = u.meterNumber;
				this.caliber = u.caliber;
				this.currMeterReadQty = u.currMeterReadQty;
				this.currMeterReadDate = u.currMeterReadDate;
			} else {
				this.$toast.fail('没有查询到相关用户');
				this.area = '';
				this.clientName = '';
				this.meterAddress = '';
				this.meterNumber = '';
				this.caliber = '';
				this.currMeterReadQty = '';
				this.currMeterReadDate = '';
			}
		},
		async onSubmit(v) {
			const rs = await othersApi.applyMeterCheck(v);
			if (rs.code === 0 && rs.isSuccess) {
				this.$toast({
					type: 'success',
					message: rs.msg,
					forbidClick: true,
					onClose: () => {
						this.$router.go(-1);
					}
				});
			}
		},
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
