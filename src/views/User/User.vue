<template>
	<div id="user" class="pageContainer">
		<PageNav link="/Payment" :title="$route.meta.title"></PageNav>
		<div class="titleWrapper">
			<p>
				尊敬的用户 <br />
				以下为您的客户详情列表
			</p>
		</div>
		<div class="container">
			<div class="tipWrapper" v-if="!list.length">
				<van-icon name="bulb-o" size="40" color="#ee0a24" />
				<h4>您还没有绑定，请绑定后查看</h4>
				<van-button round block size="small" type="info" text="登陆" to="/Login"></van-button>
			</div>
			<div class="userList" v-else>
				<div class="userListWrapper">
					<UserItem v-for="item in list" :key="item" @remove="removeItem" />
				</div>
				<div class="buttonWrapper">
					<van-button block plain type="info" text="绑定户号" to="/Login" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserItem from './components/UserItem';
export default {
	name: 'User',
	components: {
		UserItem
	},
	data() {
		return {
			list: [1]
		};
	},
	methods: {
		removeItem() {
			this.list.splice(0, 1);
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/user.scss';
</style>
