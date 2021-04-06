import axios from 'axios';
import db from 'utils/storage';
import { Toast } from 'vant';

// 请求拦截器
axios.interceptors.request.use(
	config => {
		if (db.get('Authorization')) {
			config.headers.Authorization = 'Bearer ' + db.get('Authorization');
		}
		config.headers.tenant = 'MDAwMA';
		return config;
	},
	err => Promise.reject(err)
);
// 相应拦截器
axios.interceptors.response.use(
	res => res,
	err => Promise.reject(err.message)
);
/**
 * http请求
 * @param { object } opts - axios 配置
 * @returns { Promise<unknown> }
 */
const httpServer = opts => {
	// baseURL
	// mock环境： / 				  // mockjs拦截http请求
	// 开发环境： /api                 // 开发环境在 vue.config.js 中有 devServer.proxy 代理
	// 生产环境： http://IP:PORT/api   // 生产环境中 代理失效， 故需要配置绝对路径
	const defaultOpts = {
		method: opts.method.toUpperCase(),
		// baseURL: process.env.NODE_ENV !== 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_PRO_REQUEST_URL + process.env.VUE_APP_BASE_API,
		baseURL: process.env.NODE_ENV !== 'production' ? process.env.VUE_APP_DEV_REQUEST_URL : process.env.VUE_APP_PRO_REQUEST_URL,
		url: opts.url,
		timeout: 24000,
		headers: {
			Accept: '*',
			'Content-Type': 'application/json; charset=UTF-8'
		}
	};

	if (['PUT', 'POST', 'PATCH'].includes(defaultOpts.method)) {
		defaultOpts.data = opts.data || {};
		// 删除自定义下拉产生的 undefined 键名
		defaultOpts.data.undefined && delete defaultOpts.data.undefined;
	} else {
		defaultOpts.params = { ...(opts.data || {}) };
	}
	if (opts.formData) {
		defaultOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8;';
		defaultOpts.transformRequest = [
			data => {
				const formData = new FormData();
				if (data) Object.entries(data).forEach(x => formData.append(x[0], x[1]));
				return formData;
			}
		];
	}

	return new Promise((resolve, reject) => {
		Toast.loading({
			message: '加载中...',
			forbidClick: true
		});
		axios(defaultOpts)
			.then(res => {
				Toast.clear();
				handleSuccess(res, resolve);
			})
			.catch(err => {
				Toast.clear();
				reject(err);
			});
	});
};
/**
 * 请求成功处理
 * @param { object } res - 请求成功的数据
 * @param { function } resolve - promise.resolve
 */
function handleSuccess(res, resolve) {
	if (res.data) {
		if (res.data.isError) {
			Toast(`ErrorCode：${res.data.code}\n${res.data.msg}`);
		}
	}
	resolve(res.data);
}

export default httpServer;
