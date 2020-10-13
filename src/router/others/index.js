const others = [
	{
		path: '/others',
		name: 'others',
		meta: {
			title: '其他业务'
		},
		component: () => import(/* webpackChunkName: "others" */ 'views/others/others')
	},
	{
		path: '/checkWaterMeter',
		name: 'checkWaterMeter',
		meta: {
			title: '申请水表检定',
			desc: '如您对水表计量准确性有异议，需对水表准确性作检定，可申请此项业务', // 表单描述
			dataDownload: false, // 需要下载业务办理单
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'], // 办理须知步骤
			replacePath: '/others' // 返回路径
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/checkWaterQuality',
		name: 'checkWaterQuality',
		meta: {
			title: '申请水质检验',
			desc: '如您需对水质做检验，可申请此项业务',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/others'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/suggest',
		name: 'suggest',
		meta: {
			title: '投诉建议',
			desc: '欢迎您提出宝贵的意见、建议、举报、投诉与表扬，我们会尽快处理您反馈的信息。感谢您对我们供水工作的关心和支持！',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/others',
			direct: true // 不需勾选直接入表单
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/report',
		name: 'report',
		meta: {
			title: '报漏报修',
			desc: '如您在某地段发现爆管，漏水等情况，请在此项上报，以便我司尽快阻止维修',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/others',
			direct: true
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	}
];

export default others;
