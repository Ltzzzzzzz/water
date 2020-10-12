const exchange = [
	{
		path: '/exchange',
		name: 'exchange',
		meta: {
			title: '信息变更'
		},
		component: () => import(/* webpackChunkName: "exchange" */ 'views/exchange/exchange')
	},
	{
		path: '/transfer',
		name: 'transfer',
		meta: {
			title: '过户',
			desc: '过户是指在用水地址、口径、性质不变，且无欠费的情况下，需要更改客户名称的业务', // 表单描述
			dataDownload: true, // 需要下载业务办理单
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'], // 办理须知步骤
			replacePath: '/exchange' // 返回路径
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBankCard',
		name: 'bankCard',
		meta: {
			title: '变更银行卡',
			desc: '如您需要变更代扣水费的银行信息，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterBillInformation',
		name: 'billInformation',
		meta: {
			title: '变更开票信息',
			desc: '如您需要变更开票资料信息，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterContact',
		name: 'contact',
		meta: {
			title: '变更联系方式',
			desc: '如您需要变更联系人、手机号码等信息，可申请此项业务',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/alterNatureOfWater',
		name: 'natureOfWater',
		meta: {
			title: '变更用水性质',
			desc: '如您的用水性质发生变化时，可申请此项业务',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办理', '服务评价'],
			replacePath: '/exchange'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	}
];

export default exchange;
