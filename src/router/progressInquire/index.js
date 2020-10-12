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
		path: '/waterQuality',
		name: 'waterQuality',
		meta: {
			title: '水质公告'
		},
		component: () => import(/* webpackChunkName: "waterQuality" */ 'views/progressInquire/views/waterQuality/waterQuality')
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
