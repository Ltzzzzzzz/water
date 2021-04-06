// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';
//path引入
const { resolve } = require('path');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// URI前缀
const base = process.env.VUE_APP_BASE_API;
// 代理目标链接
const target = process.env.VUE_APP_DEV_REQUEST_URL;
/**
 * 开发环境配置
 * @type { object } devServer
 * @type { string } devServer.host - ip地址
 * @type { boolean } devServer.https - 是否开启https
 * @type { boolean } devServer.hot - 热更新
 * @type { boolean } devServer.open - 自动打开浏览器
 * @type { { warnings: boolean, errors: boolean } } devServer.overlay - 警告和报错弹出遮罩
 */
const devServer = {
	host: '0.0.0.0',
	https: false,
	hot: true,
	open: true,
	overlay: {
		warnings: true,
		errors: true
	}
};
/**
 * 处于非mock下的开发环境时配置跨域
 * @type { object } proxy
 * @type { { target: string, changeOrigin: boolean } } proxy.[base] - 代理前缀
 */
const proxy = {
	/**
	 * @type { string } target - 需代理的目标链接
	 * @type { boolean } changeOrigin - 是否更改源
	 */
	[base]: {
		target,
		changeOrigin: true
	}
};

module.exports = {
	productionSourceMap: false,
	outputDir: 'water',
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 [outputDir]/index.html 的输出
			filename: 'index.html',
			title: '水务系统'
		}
	},
	// devServer: isProduction ? devServer : Object.assign(devServer, { proxy }),
	configureWebpack: config => {
		// 生产环境相关配置
		if (isProduction) {
			// ============gzip压缩 start============
			const productionGzipExtensions = ['html', 'js', 'css'];
			config.plugins.push(
				new CompressionWebpackPlugin({
					filename: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240, // 只有大小大于该值的资源会被处理 10240
					minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
					deleteOriginalAssets: false // 删除原文件
				})
			);
			// ============gzip压缩 end============
		}
	},
	chainWebpack: config => {
		// ============保存格式化 start============
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.loader('eslint-loader')
			.tap(options => {
				options.fix = true;
				return options;
			});
		// ============保存格式化 end============

		// ============配置文件路径 start============
		config.resolve.alias
			.set('@', resolve('src'))
			.set('images', resolve('src/assets/images'))
			.set('css', resolve('src/assets/css'))
			.set('js', resolve('src/assets/js'))
			.set('api', resolve('src/api'))
			.set('views', resolve('src/views'))
			.set('utils', resolve('src/utils'))
			.set('components', resolve('src/components'));
		// ============配置文件路径 end============
	}
};
