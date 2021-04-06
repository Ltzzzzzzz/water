import axiosApi from './axiosApi';

const apiList = {
	applyMeterCheck: {
		method: 'post',
		url: '/water/app/ApplyMeterCheck/save'
	},
	shuiZhiCheck: {
		method: 'post',
		url: '/water/app/shuiZhiCheck'
	},
	repair: {
		method: 'post',
		url: '/water/app/repair'
	}
};

let api = {};

Object.keys(apiList)
	.filter(x => !{ ...apiList[x] }.special)
	.forEach(x => {
		api[x] = data => {
			return axiosApi({
				...apiList[x],
				data
			});
		};
	});

export default api;
