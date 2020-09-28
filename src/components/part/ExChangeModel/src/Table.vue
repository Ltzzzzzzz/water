<template>
	<div class="table">
		<div class="notice">
			单位用户办理本业务时，请下载并填写<br />
			<span class="link" @click="showTemplate = true">《业务受理表》</span>
			，加盖公章后上传。
		</div>
		<div v-if="showTemplate" class="dataTemplate">
			<h4>资料模版</h4>
			<div class="template">
				<p>《受理表》</p>
				<div class="buttonWrapper">
					<van-button size="mini" type="info" text="样表下载" />
					<van-button size="mini" type="primary" text="表单下载" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Table',
	data() {
		return {
			showTemplate: false
		};
	}
};
</script>

<style lang="scss" scoped>
.table {
	.notice {
		margin: 0 auto;
		padding: 10px;
		line-height: 1.5;
		font-size: 14px;
		color: #ffffff;
		background-color: #ffa200;
		border-radius: 8px;
		text-align: center;
		.link {
			color: #576b95;
		}
	}
	.dataTemplate {
		color: #333333;
		margin-top: 10px;
		h4 {
			padding: 14px 10px;
			background-color: #eeeef0;
		}
		.template {
			padding: 14px 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
			p {
				font-size: 14px;
			}
		}
	}
}
</style>
