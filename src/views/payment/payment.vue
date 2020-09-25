<template>
	<div id="payment" class="pageContainer">
		<PageNav link="/" :title="$route.meta.title"></PageNav>
		<div class="titleWrapper">
			<p>
				尊敬的用户 <br />
				请选择您所需办理的业务
			</p>
		</div>
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item icon="orders-o" to="/QueryWaterBill" text="水费查缴" />
					<van-grid-item icon="user-o" to="/User" text="客户档案" />
					<van-grid-item icon="balance-list-o" to="/WaterBillList" text="水费清单" />
					<van-grid-item icon="points" to="/ElectronicInvoice" text="电子发票" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
					<van-grid-item icon="setting-o" text="选项" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Payment',
	methods: {
		back() {
			this.$router.go(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
@import 'css/payment.scss';
</style>
