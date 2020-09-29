<template>
	<div id="beforeHandle" class="pageContainer">
		<Navbar>
			<p class="desc">
				{{ $route.meta.desc }}
			</p>
		</Navbar>
		<div class="container">
			<ExChangeModel :showData="$route.meta.dataDownload" />
			<Notice v-model="agree" />
			<div class="buttonWrapper">
				<van-button block type="info" text="办理" @click="goExchangeForm" />
			</div>
		</div>
	</div>
</template>

<script>
import ExChangeModel from './components/ExChangeModel';
import Notice from './components/Notice';
export default {
	name: 'beforeHandle',
	components: {
		ExChangeModel,
		Notice
	},
	data() {
		return {
			agree: false
		};
	},
	methods: {
		goExchangeForm() {
			this.$router.push({
				name: 'exchangeForm',
				params: {
					formName: this.$route.meta.title,
					formComponent: this.$route.name
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.buttonWrapper {
	margin: 10px;
}
</style>
