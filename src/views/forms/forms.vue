<template>
	<div id="forms" class="pageContainer">
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
	name: 'forms',
	components: {
		/*========== 变更信息表单开始 ==========*/
		transfer: () => import(/* webpackChunkName: "transfer" */ './components/exchangeForm/Transfer'), // 过户
		bankCard: () => import(/* webpackChunkName: "bankCard" */ './components/exchangeForm/BankCard'), // 变更银行卡
		billInformation: () => import(/* webpackChunkName: "billInformation" */ './components/exchangeForm/BillInformation'), // 变更开票信息
		contact: () => import(/* webpackChunkName: "contact" */ './components/exchangeForm/Contact'), // 变更联系方式
		natureOfWater: () => import(/* webpackChunkName: "natureOfWater" */ './components/exchangeForm/NatureOfWater'), // 变更用水性质
		/*========== 变更信息表单结束 ==========*/

		/*========== 用水申请表单开始 ==========*/
		personalNew: () => import(/* webpackChunkName: "personalNew" */ './components/waterApplication/PersonalNew'), // 个人新装表
		personalSnap: () => import(/* webpackChunkName: "personalSnap" */ './components/waterApplication/PersonalSnap'), // 个人临时用水
		unitNew: () => import(/* webpackChunkName: "unitNew" */ './components/waterApplication/UnitNew'), // 单位新装表
		unitSnap: () => import(/* webpackChunkName: "unitSnap" */ './components/waterApplication/UnitSnap'), // 单位临时用水
		arrearsReinstall: () => import(/* webpackChunkName: "arrearsReinstall" */ './components/waterApplication/ArrearsReinstall'), // 欠费停水复装
		pauseReinstall: () => import(/* webpackChunkName: "pauseReinstall" */ './components/waterApplication/PauseReinstall') // 暂停用水复装
		/*========== 用水申请表单结束 ==========*/
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			// 不是来自办理业务路由页面，直接返回上层路径
			if (!vm.$route.params.formTitle) {
				vm.$router.replace('/');
			}
		});
	}
};
</script>

<style lang="scss" scoped>
#forms {
	h2 {
		margin-left: 20px;
		font-size: 24px;
		color: #ffffff;
	}
}
</style>
