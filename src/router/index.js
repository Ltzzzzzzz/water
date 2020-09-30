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
			desc: '过户是指在用水地址、口径、性质不变，且无欠费的情况下，需要更改客户名称的业务',
			dataDownload: true
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/exchange/views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBankCard',
		name: 'bankCard',
		meta: {
			title: '变更银行卡',
			desc: '如您需要变更代扣水费的银行信息，可申请此项业务',
			dataDownload: true
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/exchange/views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBillInformation',
		name: 'billInformation',
		meta: {
			title: '变更开票信息',
			desc: '如您需要变更开票资料信息，可申请此项业务',
			dataDownload: true
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/exchange/views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterContact',
		name: 'contact',
		meta: {
			title: '变更联系方式',
			desc: '如您需要变更联系人、手机号码等信息，可申请此项业务',
			dataDownload: false
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/exchange/views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterNatureOfWater',
		name: 'natureOfWater',
		meta: {
			title: '变更用水性质',
			desc: '如您的用水性质发生变化时，可申请此项业务',
			dataDownload: true
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/exchange/views/beforeHandle/beforeHandle')
	},
	{
		path: '/exchangeForm',
		name: 'exchangeForm',
		meta: {
			title: '提交办理',
			keepAgree: true
		},
		component: () => import(/* webpackChunkName: "exchangeForm" */ 'views/exchange/views/exchangeForm/exchangeForm')
	}
	/* ========== 信息变更结束 ========== */
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
