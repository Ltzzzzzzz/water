<template>
	<div class="exChangeModel">
		<PartTitle color="#ee0a24" title="办理流程" />
		<div class="container">
			<Process :steps="$route.meta.steps" />
		</div>
		<PartTitle color="#ee0a24" title="业务须知" />
		<div class="container">
			<p class="notice">
				请确保所填资料真实有效，若发现存在虚假或如有因办理此业务产生的争议，我司有权恢复资料以及保留最终解释权。
			</p>
		</div>
		<PartTitle v-if="showData" color="#ee0a24" title="资料下载" />
		<div v-if="showData" class="container">
			<Table />
		</div>
	</div>
</template>

<script>
import Process from './src/Process';
export default {
	name: 'ExChangeModel',
	props: ['showData'],
	components: {
		Process,
		Table: () => import(/* webpackChunkName: "ExChangeModelTable" */ './src/Table')
	}
};
</script>

<style lang="scss" scoped>
.exChangeModel {
	.notice {
		margin: 0 auto;
		padding: 10px;
		line-height: 1.5;
		font-size: 14px;
		color: #ffffff;
		background-color: #ffa200;
		border-radius: 8px;
	}
}
</style>
