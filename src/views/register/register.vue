<template>
	<div id="register" class="pageContainer">
		<PageModel>
			<Navbar>
				<p class="desc">
					尊敬的用户 <br />
					注册
				</p>
			</Navbar>
			<div class="container">
				<van-form @submit="submit">
					<div class="formWrapper">
						<van-field v-model="accountNumber" name="accountNumber" label="户号" placeholder="户号" :rules="rules.accountNumber" />
						<van-field v-model="accountName" name="accountName" label="户名" placeholder="户名" :rules="rules.accountName" />
						<van-field v-model="address" name="address" label="地址" placeholder="地址" :rules="rules.address" />
					</div>
					<div class="button">
						<van-button size="small" text="提交" round block type="info" native-type="submit" />
					</div>
				</van-form>
			</div>
		</PageModel>
	</div>
</template>

<script>
export default {
	name: 'register',
	data() {
		return {
			accountNumber: '',
			accountName: '',
			address: '',
			rules: {
				accountNumber: [{ required: true, message: '请填写户号' }],
				accountName: [{ required: true, message: '请填写户名' }],
				address: [{ required: true, message: '请填写地址' }]
			}
		};
	},
	methods: {
		submit(v) {}
	}
};
</script>

<style lang="scss" scoped>
#register {
	.formWrapper {
		border-radius: 8px;
		overflow: hidden;
	}
	.button {
		margin: 20px;
	}
}
</style>
