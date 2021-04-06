<template>
	<div class="signatureBoard">
		<h4>签名</h4>
		<div class="canvasWrapper">
			<canvas id="canvas" ref="canvas" :width="canvasWidth" :height="canvasHeight" />
		</div>
		<PartTitle color="#ee0a24" title="温馨提示" />
		<p class="tip">本人已阅读《供水协议》，并同意。所填资料真实有效，若发现存在虚假，本人承担全部责任。</p>
		<div class="buttonWrapper">
			<button @click="cancel">取消</button>
			<button @click="reset">重签</button>
			<button class="confirm" @click="confirm">确认</button>
		</div>
	</div>
</template>

<script>
import Signature from './src';
import commonApi from 'api/common';
export default {
	name: 'SignatureBoard',
	props: ['visible', 'fileList'],
	data() {
		return {
			canvasWidth: 0,
			canvasHeight: 0,
			signature: null
		};
	},
	created() {
		this.canvasWidth = document.body.clientWidth - 30;
		this.canvasHeight = this.canvasWidth * 0.8;
	},
	mounted() {
		// 挂载签名
		this.signature = new Signature(this.$refs.canvas);
		this.signature.draw();
	},
	methods: {
		cancel() {
			this.$emit('update:visible', false);
		},
		reset() {
			this.signature.reset();
			this.$emit('update:file', {});
		},
		async confirm() {
			let canv = this.signature.save();
			const rs = await commonApi.upload({ file: canv.file });
			Object.assign(canv, { fileStr: rs.data });
			this.$emit('update:file', canv);
			this.cancel();
		}
	}
};
</script>

<style lang="scss" scoped>
.signatureBoard {
	h4 {
		padding-top: 10px;
		line-height: 20px;
		font-size: 14px;
		font-weight: normal;
		color: #333333;
		text-align: center;
	}
	.canvasWrapper {
		padding: 5px;
		#canvas {
			border: 1px solid #eeeef0;
		}
	}
	.tip {
		margin: 10px;
		line-height: 1.4;
		font-size: 12px;
		color: rgb(114, 114, 114);
	}
	.buttonWrapper {
		position: relative;
		display: flex;
		button {
			position: relative;
			flex: 1;
			padding: 15px 0;
			border: 0;
			font-size: 14px;
			color: #333333;
			background-color: #ffffff;
			&:before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				border-top: 1px solid #eeeef0;
				transform: scaleY(0.5);
			}
			&:after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				border-right: 1px solid #eeeef0;
				transform: scaleX(0.5);
			}
			&.confirm {
				color: rgb(90, 202, 255);
			}
			&:nth-last-child(1):after {
				display: none;
			}
		}
	}
}
</style>
