const waterApplication = [
	{
		path: '/waterApplication',
		name: 'waterApplication',
		meta: {
			title: '用水申请'
		},
		component: () => import(/* webpackChunkName: "waterApplication" */ 'views/waterApplication/waterApplication')
	},
	{
		path: '/personalNew',
		name: 'personalNew',
		meta: {
			title: '个人新装表',
			desc: '个人新装表',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/personalSnap',
		name: 'personalSnap',
		meta: {
			title: '个人临时用水',
			desc: '个人临时用水',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/unitNew',
		name: 'unitNew',
		meta: {
			title: '单位新装表',
			desc: '单位新装表',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/unitSnap',
		name: 'unitSnap',
		meta: {
			title: '单位临时用水',
			desc: '单位临时用水',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '方案设计', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/arrearsReinstall',
		name: 'arrearsReinstall',
		meta: {
			title: '欠费停水复装',
			desc: '如需暂停供水和恢复供水服务，应交清欠费等相关费用。（暂停供水超过3个月，还应新购水表；暂停供水超过12个月，按新装表手续办理并缴交相关费用后方可装表供水）',
			dataDownload: false,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	},
	{
		path: '/pauseReinstall',
		name: 'pauseReinstall',
		meta: {
			title: '暂停用水复装',
			desc: '如需暂停供水和恢复供水服务，应交清欠费等相关费用。（暂停供水超过3个月，还应新购水表；暂停供水超过12个月，按新装表手续办理并缴交相关费用后方可装表供水）',
			dataDownload: true,
			steps: ['填报办理信息', '办理信息审核', '业务办结', '服务评价'],
			replacePath: '/waterApplication'
		},
		component: () => import(/* webpackChunkName: "beforeHandle" */ 'views/beforeHandle/beforeHandle')
	}
];

export default waterApplication;
