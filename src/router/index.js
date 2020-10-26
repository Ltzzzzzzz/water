import Vue from 'vue';
import VueRouter from 'vue-router';
import payment from './payment'; // 水费查缴
import progressInquire from './progressInquire'; // 进度查询
import exchange from './exchange'; // 信息变更
import waterApplication from './waterApplication'; // 用水申请
import others from './others'; // 其他业务
import store from '@/store';

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
		meta: {},
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
	const ua = navigator.userAgent;
	let url = process.env.VUE_APP_REDIRECT_URI,
		appid = process.env.VUE_APP_WECHAT_APP_ID;

	if (String(navigator.userAgent.match(/MicroMessenger/i)) === 'MicroMessenger') {
		location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=200#wechat_redirect`;
	} else {
		// 设置路由动画
		if (from.meta.fromRoute && from.meta.fromRoute === to.name) {
			store.commit('globel/setPageAnimation', 'slide-right');
		} else {
			store.commit('globel/setPageAnimation', 'slide-left');
			setFromRoute(to, from);
		}
		if (to.meta.title) {
			document.title = to.meta.title;
		}
		next();
	}
});
// 设置当前路由来自哪个路由
function setFromRoute(toRoute, fromRoute) {
	if (toRoute.name === 'home') return;
	routes.some(route => {
		if (route.name === toRoute.name) {
			if (route.name === 'forms') {
				// 表单路由，设置为表单汇总的路由
				route.meta.fromRoute = fromRoute.meta.fromRoute;
			} else {
				route.meta.fromRoute = fromRoute.name;
			}
			return true;
		}
	});
}

export default router;
