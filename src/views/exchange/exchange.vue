<template>
	<div id="exchange" class="pageContainer">
		<Navbar>
			<p class="desc">
				尊敬的用户 <br />
				请选择您所需办理的业务
			</p>
		</Navbar>
		<PageTitle :title="$route.meta.title" />
		<div class="container">
			<div class="routers">
				<van-grid clickable :column-num="3">
					<van-grid-item icon="friends-o" to="/transfer" text="过户" />
					<van-grid-item icon="credit-pay" to="/changeBankCard" text="变更银行卡" />
					<van-grid-item icon="records" to="/changeBillInformation" text="变更开票信息" />
					<van-grid-item icon="phone-o" to="/changeContact" text="变更联系方式" />
					<van-grid-item icon="question-o" to="/changeNatureOfWater" text="变更用水性质" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'exchange'
};
</script>
