const progressInquire = [
	{
		path: '/progressInquire',
		name: 'progressInquire',
		meta: {
			title: '进度查询'
		},
		component: () => import(/* webpackChunkName: "progressInquire" */ 'views/progressInquire/progressInquire')
	},
	{
		path: '/businessProgress',
		name: 'businessProgress',
		meta: {
			title: '业务办理进度'
		},
		component: () => import(/* webpackChunkName: "businessProgress" */ 'views/progressInquire/views/businessProgress/businessProgress')
	},
	{
		path: '/waterOff',
		name: 'waterOff',
		meta: {
			title: '停水通知'
		},
		component: () => import(/* webpackChunkName: "waterOff" */ 'views/progressInquire/views/waterOff/waterOff')
	},
	{
		path: '/waterCutOffDetail',
		name: 'waterCutOffDetail',
		meta: {
			title: '停水通知详情',
			keepAlive: 'waterOff'
		},
		component: () => import(/* webpackChunkName: "waterCutOffDetail" */ 'views/progressInquire/views/waterOff/views/waterCutOffDetail/waterCutOffDetail')
	},
	{
		path: '/waterQuality',
		name: 'waterQuality',
		meta: {
			title: '水质公告'
		},
		component: () => import(/* webpackChunkName: "waterQuality" */ 'views/progressInquire/views/waterQuality/waterQuality')
	},
	{
		path: '/waterQualityDetail',
		name: 'waterQualityDetail',
		meta: {
			title: '水质公告详情',
			keepAlive: 'waterQuality'
		},
		component: () => import(/* webpackChunkName: "waterQualityDetail" */ 'views/progressInquire/views/waterQuality/views/waterQualityDetail/waterQualityDetail')
	},
	{
		path: '/waterPrice',
		name: 'waterPrice',
		meta: {
			title: '水价信息'
		},
		component: () => import(/* webpackChunkName: "waterPrice" */ 'views/progressInquire/views/waterPrice/waterPrice')
	},
	{
		path: '/waterPriceDetail',
		name: 'waterPriceDetail',
		meta: {
			title: '水价信息',
			keepAlive: 'waterPrice'
		},
		component: () => import(/* webpackChunkName: "waterPriceDetail" */ 'views/progressInquire/views/waterPrice/views/waterPriceDetail/waterPriceDetail')
	},
	{
		path: '/outlets',
		name: 'outlets',
		meta: {
			title: '营业网点'
		},
		component: () => import(/* webpackChunkName: "outlets" */ 'views/progressInquire/views/outlets/outlets')
	},
	{
		path: '/bindingOrder',
		name: 'bindingOrder',
		meta: {
			title: '绑定工单号'
		},
		component: () => import(/* webpackChunkName: "bindingOrder" */ 'views/progressInquire/views/bindingOrder/bindingOrder')
	}
];

export default progressInquire;
