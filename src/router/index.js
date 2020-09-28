import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			index: 1,
			title: '全部业务'
		},
		component: () => import(/* webpackChunkName: "Home" */ 'views/home/home')
	},
	{
		path: '/Payment',
		name: 'Payment',
		meta: {
			index: 0,
			title: '水费查缴'
		},
		component: () => import(/* webpackChunkName: "Payment" */ 'views/payment/payment')
	},
	{
		path: '/QueryWaterBill',
		name: 'QueryWaterBill',
		meta: {
			index: 0,
			title: '查询缴费'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/User',
		name: 'User',
		meta: {
			index: 0,
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/user/user')
	},
	{
		path: '/WaterBillList',
		name: 'WaterBillList',
		meta: {
			index: 0,
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "WaterBillList" */ 'views/waterBillList/waterBillList')
	},
	{
		path: '/ElectronicInvoice',
		name: 'ElectronicInvoice',
		meta: {
			index: 0,
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "ElectronicInvoice" */ 'views/electronicInvoice/electronicInvoice')
	},
	{
		path: '/Login',
		name: 'Login',
		meta: {
			index: 0,
			title: '用户绑定'
		},
		component: () => import(/* webpackChunkName: "Login" */ 'views/login/login')
	},
	{
		path: '/UserInfo',
		name: 'UserInfo',
		meta: {
			index: 0,
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "UserInfo" */ 'views/userInfo/userInfo')
	},
	{
		path: '/Register',
		name: 'Register',
		meta: {
			index: 0,
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/register/register')
	},
	{
		path: '/QueryWaterBillDetail',
		name: 'QueryWaterBillDetail',
		meta: {
			index: 0,
			title: '账单详情'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBillDetail" */ 'views/queryWaterBillDetail/queryWaterBillDetail')
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
