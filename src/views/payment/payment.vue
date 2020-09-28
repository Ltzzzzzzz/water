<template>
	<div id="payment" class="pageContainer">
		<Navbar>
			<p class="desc">
				尊敬的用户 <br />
				请选择您所需办理的业务
			</p>
		</Navbar>
		<Title :title="$route.meta.title" />
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item icon="orders-o" to="/queryWaterBill" text="查询缴费" />
					<van-grid-item icon="user-o" to="/user" text="客户档案" />
					<van-grid-item icon="balance-list-o" to="/waterBillList" text="水费清单" />
					<van-grid-item icon="points" to="/electronicInvoice" text="电子发票" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'payment'
};
</script>
