<template>
	<div class="exchangeForm">
		<van-form @submit="onSubmit" :scroll-to-error="true">
			<div class="infoWrapper">
				<h4 class="title">填写表单信息</h4>
				<Picker ref="picker" :required="true" name="areaId" title="区域" placeholder="区域" v-model="areaId" code="area_ab" :rules="[{ required: true, message: '请选择区域' }]" />
				<van-field v-model="cardCode" type="digit" name="cardCode" label="户号" placeholder="户号" />
				<van-field v-model="cardName" name="cardName" label="用户名" placeholder="用户名" />
				<van-field required v-model="proposer" name="proposer" label="填报人" placeholder="填报人" :rules="[{ required: true, message: '请填填报人' }]" />
				<van-field
					required
					type="tel"
					v-model="mobile"
					name="mobile"
					label="手机号码"
					placeholder="手机号码"
					:rules="[
						{
							required: true,
							validator: phoneReg,
							message: mobile ? '请填正确的手机号码' : '请填写手机号码'
						}
					]"
				/>
				<van-field type="tel" v-model="phone" name="phone" label="联系电话" placeholder="联系电话" :rules="[{ validator: telReg, message: '请填正确的电话号码' }]" />
				<van-field required v-model="address" name="address" label="报漏地点" placeholder="报漏地点" :rules="[{ required: true, message: '请填报漏地点' }]">
					<!-- <template #button>
						<van-button block size="mini" type="primary" text="获取地点" native-type="button" />
					</template> -->
				</van-field>
				<van-field v-model="remarks" rows="2" name="remarks" autosize label="备注" type="textarea" maxlength="50" placeholder="备注" show-word-limit />
			</div>
			<div class="submit">
				<van-button size="small" block type="info" text="提交" native-type="submit" />
			</div>
		</van-form>
	</div>
</template>

<script>
import othersApi from 'api/others';
export default {
	name: 'report',
	data() {
		return {
			areaId: '',
			cardCode: '',
			cardName: '',
			proposer: '',
			mobile: '',
			phone: '',
			address: '',
			remarks: ''
		};
	},
	methods: {
		telReg(v) {
			if (v) {
				return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(v) || /^1[3456789]\d{9}$/.test(v);
			}
		},
		phoneReg(v) {
			if (v) {
				return /^1[3456789]\d{9}$/.test(v);
			}
		},
		async onSubmit(v) {
			const rs = await othersApi.repair(v);
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
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/exchangeForm.scss';
</style>
