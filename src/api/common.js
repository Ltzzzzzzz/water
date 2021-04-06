import axiosApi from './axiosApi';

const apiList = {
	// 上传文件
	upload: {
		method: 'post',
		url: '/file/app/file/upload_file',
		formData: true
	},
	// 获取下拉选项
	getOptions: {
		method: 'get',
		url: '/oauth/app/oauthApply/lists'
	},
	// 根据户号获取用户
	findByClientNumber: {
		method: 'get',
		url: '/water/app/ApplyMeterCheck/findByClientNumber'
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
