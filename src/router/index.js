import Vue from 'vue';
import VueRouter from 'vue-router';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			index: 1,
			title: '网上营业厅'
		},
		component: () => import(/* webpackChunkName: "Home" */ 'views/home/home')
	},
	/* ==========二级路由 start========== */
	{
		path: '/Payment',
		name: 'Payment',
		meta: {
			index: 2,
			title: '水费查缴'
		},
		component: () => import(/* webpackChunkName: "Payment" */ 'views/payment/payment')
	},
	/* ==========二级路由 end========== */

	/* ==========三级路由 start========== */
	{
		path: '/QueryWaterBill',
		name: 'QueryWaterBill',
		meta: {
			index: 3,
			title: '查询缴费'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/User',
		name: 'User',
		meta: {
			index: 3,
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/user/user')
	},
	{
		path: '/WaterBillList',
		name: 'WaterBillList',
		meta: {
			index: 3,
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "WaterBillList" */ 'views/waterBillList/waterBillList')
	},
	{
		path: '/ElectronicInvoice',
		name: 'ElectronicInvoice',
		meta: {
			index: 3,
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "ElectronicInvoice" */ 'views/electronicInvoice/electronicInvoice')
	},
	/* ==========三级路由 end========== */

	/* ==========四级路由 start========== */
	{
		path: '/Login',
		name: 'Login',
		meta: {
			index: 4,
			title: '用户绑定'
		},
		component: () => import(/* webpackChunkName: "Login" */ 'views/login/login')
	},
	{
		path: '/UserInfo',
		name: 'UserInfo',
		meta: {
			index: 4,
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "UserInfo" */ 'views/userInfo/userInfo')
	},
	/* ==========四级路由 end========== */

	/* ==========五级路由 start========== */
	{
		path: '/Register',
		name: 'Register',
		meta: {
			index: 5,
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/register/register')
	},
	/* ==========五级路由 end========== */

	/* ==========六级路由 start========== */
	{
		path: '/QueryWaterBillDetail',
		name: 'QueryWaterBillDetail',
		meta: {
			index: 6,
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "QueryWaterBillDetail" */ 'views/queryWaterBillDetail/queryWaterBillDetail')
	}
	/* ==========六级路由 end========== */
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
