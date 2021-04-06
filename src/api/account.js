import axiosApi from './axiosApi';

const apiList = {
	register: {
		method: 'post',
		url: '/water/app/account'
	},
	bang: {
		method: 'post',
		url: '/water/app/account/bangDing',
		formData: true
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
