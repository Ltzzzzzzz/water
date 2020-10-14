<template>
	<div id="beforeHandle" class="pageContainer">
		<PageModel>
			<Navbar>
				<p class="desc">
					{{ $route.meta.desc }}
				</p>
			</Navbar>
			<div class="container">
				<ExChangeModel :showData="$route.meta.dataDownload" />
				<Notice v-model="agree" v-if="!$route.meta.direct" />
				<div class="buttonWrapper">
					<van-button block type="info" text="办理" @click="goExchangeForm" />
				</div>
			</div>
		</PageModel>
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
				vm.$router.replace(vm.$route.meta.replacePath);
			});
		}
	},
	methods: {
		goExchangeForm() {
			if (!this.agree && !this.$route.meta.direct) {
				this.$toast.fail('请阅读业务须知与合同条款并同意');
				return;
			}
			this.$router.replace({
				name: 'forms',
				params: {
					formTitle: this.$route.meta.title,
					formName: this.$route.name
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
