<template>
	<div id="billInformation" class="pageContainer">
		<Navbar>
			<p class="desc">
				如您需要变更开票资料信息，可申请此项业务
			</p>
		</Navbar>
		<div class="container">
			<ExChangeModel :showData="true" />
			<div class="buttonWrapper">
				<van-button block type="info" text="办理" />
			</div>
		</div>
	</div>
</template>

<script>
import ExChangeModel from 'components/part/ExChangeModel';
export default {
	name: 'billInformation',
	components: {
		ExChangeModel
	}
};
</script>

<style lang="scss" scoped>
.buttonWrapper {
	margin: 10px;
}
</style>
