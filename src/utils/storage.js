// 项目名
const projectName = process.env.VUE_APP_PROJECT_NAME;

const db = {
	/**
	 * 仓储存值
	 * @param { string } key - 键
	 * @param { * } val - 值
	 */
	save(key, val) {
		if (key && val) {
			localStorage.setItem(projectName + '_' + key, JSON.stringify(val));
		} else {
			console.error(`save 出错：key = ${key}, val = ${val}`);
		}
	},
	/**
	 * 仓储取值
	 * @param { string } key 键
	 * @return { * | null } 返回 key 对应的值或null
	 */
	get(key) {
		if (localStorage.getItem(projectName + '_' + key)) {
			return JSON.parse(localStorage.getItem(projectName + '_' + key));
		} else {
			return null;
		}
	},
	/**
	 * 仓储删值
	 * @param { string } key 键
	 */
	remove(key) {
		if (localStorage.getItem(projectName + '_' + key)) {
			localStorage.removeItem(projectName + '_' + key);
		} else {
			console.error(`remove 出错：key = ${key}, val = null`);
		}
	},
	/**
	 * 清空仓储
	 * @param { string[] } keys - 需要清空的键名数组
	 */
	clear(keys = []) {
		for (const key in localStorage) {
			if (key.indexOf(projectName) !== -1 && !keys.includes(key)) {
				localStorage.removeItem(key);
			}
		}
	}
};

export default db;
