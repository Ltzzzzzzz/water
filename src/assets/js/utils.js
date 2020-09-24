// 补零
const paddingZero = n => {
	n = n.toString();
	return n[1] ? n : '0' + n;
};

// 时间格式化
const formatTime = date => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return [year, month, day].map(paddingZero).join('/');
};

// 防抖
let timer;
const debounce = (fn, delay = 300) => {
	return () => {
		// 清除上一次延时器
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this);
		}, delay);
	};
};

// 节流函数
let lastTime;
const throttle = (fn, delay = 300) => {
	return function() {
		// 记录当前函数触发的时间
		const nowTime = Date.now();
		if (lastTime && nowTime - lastTime < delay) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				// 记录上一次函数触发的时间
				lastTime = nowTime;
				// 修正this指向问题
				fn.apply(this);
			}, delay);
		} else {
			lastTime = nowTime;
			fn.apply(this);
		}
	};
};

export { formatTime, debounce, throttle };
