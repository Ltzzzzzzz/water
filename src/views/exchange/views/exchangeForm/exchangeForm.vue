<template>
	<div id="exchangeForm" class="pageContainer">
		<Navbar>
			<h2>{{ $route.params.formName }}</h2>
		</Navbar>
		<div class="container"></div>
	</div>
</template>

<script>
export default {
	name: 'exchangeForm',
	created() {
		// 不是来自办理业务路由页面，直接返回exchange
		if (!this.$route.params.formName) this.$router.replace('/exchange');
	}
};
</script>

<style lang="scss" scoped>
#exchangeForm {
	h2 {
		margin-left: 20px;
		font-size: 24px;
		color: #ffffff;
	}
}
</style>
