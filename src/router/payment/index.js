const payment = [
	{
		path: '/payment',
		name: 'payment',
		meta: {
			title: '水费查缴'
		},
		component: () => import(/* webpackChunkName: "payment" */ 'views/payment/payment')
	},
	{
		path: '/queryWaterBill',
		name: 'queryWaterBill',
		meta: {
			title: '查询缴费'
		},
		component: () => import(/* webpackChunkName: "queryWaterBill" */ 'views/payment/views/queryWaterBill/queryWaterBill')
	},
	{
		path: '/queryWaterBillDetail',
		name: 'queryWaterBillDetail',
		meta: {
			title: '账单详情',
			keepAlive: 'queryWaterBill'
		},
		component: () => import(/* webpackChunkName: "queryWaterBillDetail" */ 'views/payment/views/queryWaterBillDetail/queryWaterBillDetail')
	},
	{
		path: '/user',
		name: 'user',
		meta: {
			title: '客户档案'
		},
		component: () => import(/* webpackChunkName: "user" */ 'views/payment/views/user/user')
	},
	{
		path: '/waterBillList',
		name: 'waterBillList',
		meta: {
			title: '水费清单'
		},
		component: () => import(/* webpackChunkName: "waterBillList" */ 'views/payment/views/waterBillList/waterBillList')
	},
	{
		path: '/electronicInvoice',
		name: 'electronicInvoice',
		meta: {
			title: '电子发票'
		},
		component: () => import(/* webpackChunkName: "electronicInvoice" */ 'views/payment/views/electronicInvoice/electronicInvoice')
	},
	{
		path: '/userInfo',
		name: 'userInfo',
		meta: {
			title: '客户详情'
		},
		component: () => import(/* webpackChunkName: "userInfo" */ 'views/payment/views/userInfo/userInfo')
	}
];

export default payment;
