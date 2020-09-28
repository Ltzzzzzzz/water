import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: '全部业务'
		},
		component: () => import(/* webpackChunkName: "Home" */ 'views/home/home')
	},
	{
		path: '/Login',
		name: 'Login',
		meta: {
			title: '用户绑定'
		},
		component: () => import(/* webpackChunkName: "Login" */ 'views/login/login')
	},
	{
		path: '/Register',
		name: 'Register',
		meta: {
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/register/register')
	},
	/* ========== 水费查缴开始 ========== */
	{
		path: '/Payment',
		name: 'Payment',
		meta: {
			title: '水费查缴'
		},
		component: () => import(/* webpackChunkName: "Payment" */ 'views/payment/payment')
	},
	{
		path: '/QueryWaterBill',
		name: 'QueryWaterBill',
		meta: {
			title: '查询缴费'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/payment/views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/User',
		name: 'User',
		meta: {
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/payment/views/user/user')
	},
	{
		path: '/WaterBillList',
		name: 'WaterBillList',
		meta: {
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "WaterBillList" */ 'views/payment/views/waterBillList/waterBillList')
	},
	{
		path: '/ElectronicInvoice',
		name: 'ElectronicInvoice',
		meta: {
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "ElectronicInvoice" */ 'views/payment/views/electronicInvoice/electronicInvoice')
	},
	{
		path: '/UserInfo',
		name: 'UserInfo',
		meta: {
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "UserInfo" */ 'views/payment/views/userInfo/userInfo')
	},
	{
		path: '/QueryWaterBillDetail',
		name: 'QueryWaterBillDetail',
		meta: {
			title: '账单详情'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBillDetail" */ 'views/payment/views/queryWaterBillDetail/queryWaterBillDetail')
	}
	/* ========== 水费查缴结束 ========== */
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
