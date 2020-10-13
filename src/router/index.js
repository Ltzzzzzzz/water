import Vue from 'vue';
import VueRouter from 'vue-router';
import payment from './payment'; // 水费查缴
import progressInquire from './progressInquire'; // 进度查询
import exchange from './exchange'; // 信息变更
import waterApplication from './waterApplication'; // 用水申请
import others from './others'; // 其他业务

if (!window.VueRouter) Vue.use(VueRouter);
// 基本路由
let routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: '全部业务'
		},
		component: () => import(/* webpackChunkName: "home" */ 'views/home/home')
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '用户绑定'
		},
		component: () => import(/* webpackChunkName: "login" */ 'views/login/login')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: '用户注册'
		},
		component: () => import(/* webpackChunkName: "register" */ 'views/register/register')
	},
	{
		path: '/map',
		name: 'map',
		component: () => import(/* webpackChunkName: "map" */ 'views/map/map')
	},
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

// 路由表连接
routes = routes.concat(payment, progressInquire, exchange, waterApplication, others);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;
