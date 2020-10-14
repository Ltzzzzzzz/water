<template>
	<div id="businessProgress" class="pageContainer">
		<Navbar>
			<div class="infoWrapper">
				<p class="desc">
					尊敬的用户 <br />
					以下为您的业务办理进度
				</p>
				<router-link to="/bindingOrder" class="buttonWrapper">
					<button>绑定工单号</button>
				</router-link>
			</div>
		</Navbar>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="没有查询到已办理业务" /></div>
			<div class="waterBillItemList" v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'businessProgress',
	data() {
		return {
			list: []
		};
	}
};
</script>

<style lang="scss" scoped>
@import 'css/businessProgress.scss';
</style>
