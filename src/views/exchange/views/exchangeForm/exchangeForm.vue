<template>
	<div id="exchangeForm" class="pageContainer">
		<Navbar>
			<h2>{{ $route.params.formTitle }}</h2>
		</Navbar>
		<div class="container">
			<component :is="$route.params.formName" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'exchangeForm',
	components: {
		transfer: () => import(/* webpackChunkName: "transfer" */ './components/Transfer')
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			// 不是来自办理业务路由页面，直接返回exchange
			if (!vm.$route.params.formTitle) {
				vm.$router.replace('/exchange');
			}
		});
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
