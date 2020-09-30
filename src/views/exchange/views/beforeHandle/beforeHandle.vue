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
	beforeRouteEnter(to, from, next) {
		if (!from.meta.keepAgree) {
			next(vm => {
				vm.agree = false;
			});
		} else {
			next(vm => {
				vm.$router.replace('/exchange');
			});
		}
	},
	methods: {
		goExchangeForm() {
			if (!this.agree) {
				this.$toast.fail('请阅读业务须知与合同条款并同意');
				return;
			}
			this.$router.push({
				name: 'exchangeForm',
				params: {
					formName: this.$route.meta.title,
					componentName: this.$route.name
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
