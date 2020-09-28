<template>
	<div id="natureOfWater" class="pageContainer">
		<Navbar>
			<p class="desc">
				如您的用水性质发生变化时，可申请此项业务
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
	name: 'natureOfWater',
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
