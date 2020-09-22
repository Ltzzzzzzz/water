import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			index: 1,
			title: '网上营业厅',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "Home" */ 'views/Home')
	},
	// 二级路由
	{
		path: '/Payment',
		name: 'Payment',
		meta: {
			index: 2,
			title: '水费查缴',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "Payment" */ 'views/Payment')
	},
	// 三级路由
	{
		path: '/QueryWaterBill',
		name: 'QueryWaterBill',
		meta: {
			index: 3,
			title: '查询缴费',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "QueryWaterBill" */ 'views/QueryWaterBill')
	},
	{
		path: '/User',
		name: 'User',
		meta: {
			index: 3,
			title: '客户档案',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "User" */ 'views/User/User')
	},
	// 四级路由
	{
		path: '/Login',
		name: 'Login',
		meta: {
			index: 4,
			title: '用户登陆',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/User/Login')
	},
	// 五级路由
	{
		path: '/Register',
		name: 'Register',
		meta: {
			index: 5,
			title: '用户注册',
			keepAlive: false
		},
		component: () => import(/* webpackChunkName: "Register" */ 'views/User/Register')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
