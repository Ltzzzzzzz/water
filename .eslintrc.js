module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 200, // 超过最大值换行
				tabWidth: 4, // 缩进字节数
				useTabs: true, // 缩进使用tab
				semi: true, // 句尾添加分号
				singleQuote: true, // JS部分使用单引号代替双引号
				arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
				bracketSpacing: true // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off'
	}
};
