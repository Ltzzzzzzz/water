<template>
	<div id="login" class="pageContainer">
		<Navbar>
			<p class="desc">
				尊敬的用户 <br />
				绑定户号获取更多功能
			</p>
		</Navbar>
		<div class="container">
			<van-form @submit="submit">
				<div class="formWrapper">
					<van-field v-model="accountNumber" name="accountNumber" label="户号" placeholder="户号" :rules="rules.accountNumber" />
					<van-field v-model="accountName" name="accountName" label="户名" placeholder="户名" :rules="rules.accountName" />
				</div>
				<div class="button">
					<van-button size="small" text="绑定" round block type="info" native-type="submit" />
				</div>
			</van-form>
			<div class="button">
				<van-button size="small" text="注册" round block type="primary" to="/register" />
			</div>
		</div>
	</div>
</template>

<script>
import account from 'api/account.js';
export default {
	name: 'login',
	data() {
		return {
			accountNumber: '',
			accountName: '',
			rules: {
				accountNumber: [{ required: true, message: '请填写户号' }],
				accountName: [{ required: true, message: '请填写户名' }]
			}
		};
	},
	methods: {
		async submit(v) {
			let rs = await account.bang(v);
			console.log(rs);
		}
	}
};
</script>

<style lang="scss" scoped>
#login {
	.formWrapper {
		border-radius: 8px;
		overflow: hidden;
	}
	.button {
		margin: 20px;
	}
}
</style>
