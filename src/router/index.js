import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: '全部业务'
		},
		component: () => import(/* webpackChunkName: "Home" */ 'views/home/home')
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '用户绑定'
		},
		component: () => import(/* webpackChunkName: "Login" */ 'views/login/login')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/register/register')
	},
	/* ========== 水费查缴开始 ========== */
	{
		path: '/payment',
		name: 'payment',
		meta: {
			title: '水费查缴'
		},
		component: () => import(/* webpackChunkName: "Payment" */ 'views/payment/payment')
	},
	{
		path: '/queryWaterBill',
		name: 'queryWaterBill',
		meta: {
			title: '查询缴费'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/payment/views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/user',
		name: 'user',
		meta: {
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/payment/views/user/user')
	},
	{
		path: '/waterBillList',
		name: 'waterBillList',
		meta: {
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "WaterBillList" */ 'views/payment/views/waterBillList/waterBillList')
	},
	{
		path: '/electronicInvoice',
		name: 'electronicInvoice',
		meta: {
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "ElectronicInvoice" */ 'views/payment/views/electronicInvoice/electronicInvoice')
	},
	{
		path: '/userInfo',
		name: 'userInfo',
		meta: {
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "UserInfo" */ 'views/payment/views/userInfo/userInfo')
	},
	{
		path: '/queryWaterBillDetail',
		name: 'queryWaterBillDetail',
		meta: {
			title: '账单详情'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBillDetail" */ 'views/payment/views/queryWaterBillDetail/queryWaterBillDetail')
	},
	/* ========== 水费查缴结束 ========== */

	/* ========== 进度查询开始 ========== */
	
	/* ========== 进度查询结束 ========== */

	/* ========== 信息变更开始 ========== */
	{
		path: '/exchange',
		name: 'exchange',
		meta: {
			title: '信息变更'
		},
		component: () => import(/* webpackChunkName: "exchange" */ 'views/exchange/exchange')
	},
	{
		path: '/transfer',
		name: 'transfer',
		meta: {
			title: '过户',
			desc: '过户是指在用水地址、口径、性质不变，且无欠费的情况下，需要更改客户名称的业务', // 表单描述
			dataDownload: true, // 需要下载业务办理单
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'], // 办理须知步骤
			replacePath: '/exchange' // 返回路径
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBankCard',
		name: 'bankCard',
		meta: {
			title: '变更银行卡',
			desc: '如您需要变更代扣水费的银行信息，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBillInformation',
		name: 'billInformation',
		meta: {
			title: '变更开票信息',
			desc: '如您需要变更开票资料信息，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterContact',
		name: 'contact',
		meta: {
			title: '变更联系方式',
			desc: '如您需要变更联系人、手机号码等信息，可申请此项业务',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterNatureOfWater',
		name: 'natureOfWater',
		meta: {
			title: '变更用水性质',
			desc: '如您的用水性质发生变化时，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	/* ========== 信息变更结束 ========== */

	/* ========== 用水申请开始 ========== */
	{
		path: '/waterApplication',
		name: 'waterApplication',
		meta: {
			title: '用水申请'
		},
		component: () => import(/* webpackChunkName: "waterApplication" */ 'views/waterApplication/waterApplication')
	},
	{
		path: '/personalNew',
		name: 'personalNew',
		meta: {
			title: '个人新装表',
			desc: '个人新装表',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/personalSnap',
		name: 'personalSnap',
		meta: {
			title: '个人临时用水',
			desc: '个人临时用水',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/unitNew',
		name: 'unitNew',
		meta: {
			title: '单位新装表',
			desc: '单位新装表',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/unitSnap',
		name: 'unitSnap',
		meta: {
			title: '单位临时用水',
			desc: '单位临时用水',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/arrearsReinstall',
		name: 'arrearsReinstall',
		meta: {
			title: '欠费停水复装',
			desc: '如需暂停供水和恢复供水服务，应交清欠费等相关费用。（暂停供水超过3个月，还应新购水表；暂停供水超过12个月，按新装表手续办理并缴交相关费用后方可装表供水）',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/pauseReinstall',
		name: 'pauseReinstall',
		meta: {
			title: '暂停用水复装',
			desc: '如需暂停供水和恢复供水服务，应交清欠费等相关费用。（暂停供水超过3个月，还应新购水表；暂停供水超过12个月，按新装表手续办理并缴交相关费用后方可装表供水）',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	/* ========== 用水申请结束 ========== */
	{
		path: '/forms',
		name: 'forms',
		meta: {
			title: '提交办理',
			keepAgree: true
		},
		component: () => import(/* webpackChunkName: "Form" */ 'views/forms/forms')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	document.documentElement.scrollTop = 0;
	document.title = to.meta.title;
	next();
});

export default router;
