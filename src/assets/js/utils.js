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

export { formatTime };
