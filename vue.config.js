const { resolve } = require('path');
module.exports = {
	productionSourceMap: false,
	outputDir: 'Water',
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
	devServer: {
		host: '0.0.0.0',
		https: false,
		hot: true,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	chainWebpack: config => {
		// 保存格式化
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.loader('eslint-loader')
			.tap(options => {
				options.fix = true;
				return options;
			});
		// 配置路径别
		config.resolve.alias
			.set('@', resolve('src'))
			.set('images', resolve('src/assets/images'))
			.set('css', resolve('src/assets/css'))
			.set('js', resolve('src/assets/js'))
			.set('views', resolve('src/views'))
			.set('components', resolve('src/components'));
	}
};
