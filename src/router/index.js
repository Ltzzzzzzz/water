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
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/User',
		name: 'User',
		meta: {
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/user/user')
	},
	{
		path: '/WaterBillList',
		name: 'WaterBillList',
		meta: {
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "WaterBillList" */ 'views/waterBillList/waterBillList')
	},
	{
		path: '/ElectronicInvoice',
		name: 'ElectronicInvoice',
		meta: {
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "ElectronicInvoice" */ 'views/electronicInvoice/electronicInvoice')
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
		path: '/UserInfo',
		name: 'UserInfo',
		meta: {
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "UserInfo" */ 'views/userInfo/userInfo')
	},
	{
		path: '/Register',
		name: 'Register',
		meta: {
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/register/register')
	},
	{
		path: '/QueryWaterBillDetail',
		name: 'QueryWaterBillDetail',
		meta: {
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
	document.title = to.meta.title;
	next();
});

export default router;
