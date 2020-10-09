class Signature {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.isDrawing = false;
		this.offsetX = 0;
		this.offsetY = 0;
		this.top = canvas.getBoundingClientRect().top;
		this.left = canvas.getBoundingClientRect().left;
		this.lasTimeStamp = 0;
	}
	draw() {
		this.canvas.addEventListener(
			'touchstart',
			e => {
				if (e.touches.length > 1) {
					return;
				}
				e.preventDefault();
				const t = e.touches[0];
				this.isDrawing = true;
				this.offsetX = t.clientX - this.left;
				this.offsetY = t.clientY - this.top;
				// 线条样式
				this.ctx.lineCap = 'round';
				this.ctx.lineJoin = 'round';
				this.lasTimeStamp = new Date().getTime();
			},
			false
		);
		this.canvas.addEventListener(
			'touchmove',
			e => {
				if (this.isDrawing) {
					e.preventDefault();
					let t = e.touches[0],
						curTimeStamp = new Date().getTime(),
						time = curTimeStamp - this.lasTimeStamp,
						distance = calDistance({ x: this.offsetX, y: this.offsetY }, { x: t.clientX - this.left, y: t.clientY - this.top });

					this.ctx.lineWidth = calClientWidth(time, distance);
					this.ctx.beginPath();
					this.ctx.moveTo(this.offsetX, this.offsetY);
					this.ctx.lineTo(t.clientX - this.left, t.clientY - this.top);
					this.ctx.stroke();
					this.offsetX = t.clientX - this.left;
					this.offsetY = t.clientY - this.top;
					this.lasTimeStamp = curTimeStamp;
				}
			},
			false
		);
		this.canvas.addEventListener(
			'touchend',
			e => {
				e.preventDefault();
				this.ctx.closePath();
				this.isDrawing = false;
			},
			false
		);
	}
	reset() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	save() {
		let url = saveAsPNG(this.canvas),
			blob = dataURLtoBlob(url),
			file = blobToFile(blob, 'test');
		return {
			content: url,
			file
		};
	}
}

// 保存成png格式的图片
function saveAsPNG(canvas) {
	return canvas.toDataURL('image/png');
}
// 计算两点之间的距离
function calDistance(dot1, dot2) {
	return Math.sqrt(Math.pow(dot2.x - dot1.x, 2), Math.pow(dot2.y - dot1.y, 2));
}
// 计算画笔粗细
function calClientWidth(t, s) {
	let maxLineWidth = 3,
		minLineWidth = 0.5,
		maxLineSpeed = 2,
		minLineSpeed = 0.1,
		v = s / t,
		resultLineWidth = 0;

	if (v <= minLineSpeed) {
		resultLineWidth = maxLineWidth;
	} else if (v >= maxLineSpeed) {
		resultLineWidth = minLineWidth;
	} else {
		resultLineWidth = maxLineWidth - ((v - minLineSpeed) / (maxLineSpeed - minLineSpeed)) * (maxLineWidth - minLineWidth);
	}
	return resultLineWidth;
}
// base64转blob
function dataURLtoBlob(dataurl) {
	let arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], { type: mime });
}
// blob转file
function blobToFile(blob, fileName) {
	let file = new File([blob], fileName, { type: blob.type });
	return file;
}

export default Signature;
