<template>
	<div id="bindingOrder" class="pageContainer">
		<PageModel>
			<Navbar>
				<p class="desc">
					绑定工单号
				</p>
			</Navbar>
			<div class="container">
				<van-form @submit="submit">
					<div class="formWrapper">
						<van-field v-model="orderNo" name="orderNo" label="工单号" placeholder="工单号" left-icon="orders-o" :rules="rules.orderNo" />
						<van-field v-model="phoneNumber" name="phoneNumber" label="手机号" placeholder="需与工单号填写的手机号一致" left-icon="phone-o" :rules="rules.phoneNumber" />
					</div>
					<div class="button">
						<van-button size="small" text="绑定" round block type="info" native-type="submit" />
					</div>
				</van-form>
			</div>
		</PageModel>
	</div>
</template>

<script>
export default {
	name: 'bindingOrder',
	data() {
		return {
			orderNo: '',
			phoneNumber: '',
			rules: {
				orderNo: [{ required: true, message: '请填工单号' }],
				phoneNumber: [{ required: true, message: '请填手机号' }]
			}
		};
	},
	methods: {
		submit(v) {}
	}
};
</script>

<style lang="scss" scoped>
#bindingOrder {
	.formWrapper {
		border-radius: 8px;
		overflow: hidden;
	}
	.button {
		margin: 20px;
	}
}
</style>
