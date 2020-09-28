<template>
	<div id="contact" class="pageContainer">
		<Navbar>
			<p class="desc">
				如您需要变更联系人、手机号码等信息，可申请此项业务
			</p>
		</Navbar>
		<div class="container">
			<ExChangeModel />
			<div class="buttonWrapper">
				<van-button block type="info" text="办理" />
			</div>
		</div>
	</div>
</template>

<script>
import ExChangeModel from 'components/part/ExChangeModel';
export default {
	name: 'contact',
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
