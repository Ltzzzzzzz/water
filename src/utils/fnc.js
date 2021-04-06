/**
 * 防抖函数
 * @param { function } fn - 需要执行的函数
 * @param { int } wait - 间隔时间，单位：ms，默认300ms
 */
export const debounce = (fn, wait = 300) => {
	let timeout = null;
	return function() {
		let args = arguments;
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.call(this, args);
		}, wait);
	};
};
/**
 * 节流函数
 * @param { function } fn - 需要执行的函数
 * @param { int } wait - 间隔时间，单位：ms，默认300ms
 */
export const throttle = (fn, delay = 300) => {
	let prev = Date.now();
	return function() {
		let context = this;
		let args = arguments;
		let now = Date.now();
		if (now - prev >= delay) {
			fn.apply(context, args);
			prev = Date.now();
		}
	};
};
