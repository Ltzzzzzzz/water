<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker ref="picker" :required="true" name="areaId" title="区域" placeholder="区域" v-model="areaId" code="area_ab" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="cardCode" type="digit" name="cardCode" label="户号" placeholder="户号" @change="cardCodeChange" />
				<van-field required v-model="cardName" name="cardName" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填用户名' }]" />
				<van-field required v-model="address" name="address" label="用水地址" placeholder="用水地址" :rules="[{ required: true, message: '请填用水地址' }]" />
				<van-field required v-model="proposer" name="proposer" label="申请人" placeholder="申请人" />
				<van-field required type="tel" v-model="mobile" name="mobile" label="手机号码" placeholder="手机号码" :rules="[{ validator: phoneReg, message: '请填正确的手机号码' }]" />
				<van-field type="tel" v-model="phone" name="phone" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
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
				<Signature :required="true" name="sign" label="请添加《个人签名》" :rules="[{ required: true, message: '请添加《个人签名》' }]" />
			</div>

			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
import commonApi from 'api/common';
import othersApi from 'api/others';
export default {
	name: 'checkWaterQuality',
	data() {
		return {
			areaId: '',
			cardCode: '',
			cardName: '',
			address: '',
			proposer: '',
			mobile: '',
			phone: '',
			cause: ''
		};
	},
	methods: {
		async onSubmit(v) {
			const rs = await othersApi.shuiZhiCheck(v);
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
		async cardCodeChange() {
			const rs = await commonApi.findByClientNumber({ clientNumber: this.cardCode });
			if (rs.data && rs.code === 0) {
				const u = rs.data;
				this.cardName = u.clientName;
				this.address = u.meterAddress;
				u.area && this.$refs.picker.findOption(u.area);
			} else {
				this.$toast.fail('没有查询到相关用户');
				this.cardName = '';
				this.address = '';
			}
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
