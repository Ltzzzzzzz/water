<template>
	<div id="forms" class="pageContainer">
		<PageModel>
			<Navbar>
				<h2>{{ $route.params.formTitle }}</h2>
			</Navbar>
			<div class="container">
				<component :is="$route.params.formName" />
			</div>
		</PageModel>
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
		personalNew: () => import(/* webpackChunkName: "personalNew" */ './components/waterApplicationForm/PersonalNew'), // 个人新装表
		personalSnap: () => import(/* webpackChunkName: "personalSnap" */ './components/waterApplicationForm/PersonalSnap'), // 个人临时用水
		unitNew: () => import(/* webpackChunkName: "unitNew" */ './components/waterApplicationForm/UnitNew'), // 单位新装表
		unitSnap: () => import(/* webpackChunkName: "unitSnap" */ './components/waterApplicationForm/UnitSnap'), // 单位临时用水
		arrearsReinstall: () => import(/* webpackChunkName: "arrearsReinstall" */ './components/waterApplicationForm/ArrearsReinstall'), // 欠费停水复装
		pauseReinstall: () => import(/* webpackChunkName: "pauseReinstall" */ './components/waterApplicationForm/PauseReinstall'), // 暂停用水复装
		/*========== 用水申请表单结束 ==========*/

		/*========== 其他业务表单开始 ==========*/
		checkWaterMeter: () => import(/* webpackChunkName: "transfer" */ './components/othersForm/CheckWaterMeter'), // 申请水表检定
		checkWaterQuality: () => import(/* webpackChunkName: "bankCard" */ './components/othersForm/CheckWaterQuality'), // 申请水质检验
		report: () => import(/* webpackChunkName: "billInformation" */ './components/othersForm/Report'), // 报漏报修
		suggest: () => import(/* webpackChunkName: "contact" */ './components/othersForm/Suggest') // 投诉建议
		/*========== 其他业务表单结束 ==========*/
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			// 不是来自办理业务路由页面，直接返回上层路径
			if (!vm.$route.params.formTitle) {
				vm.$router.replace('/');
			}
		});
	},
	beforeRouteLeave(to, from, next) {
		this.$destroy();
		next();
	},
	mounted() {
		document.documentElement.scrollTop = 0;
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
