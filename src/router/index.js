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
			title: '过户'
		},
		component: () => import(/* webpackChunkName: "transfer" */ 'views/exchange/views/transfer/transfer')
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
