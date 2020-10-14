<template>
	<div id="others" class="pageContainer">
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
					<van-grid-item icon="todo-list-o" to="/checkWaterMeter" text="申请水表检定" />
					<van-grid-item icon="filter-o" to="/checkWaterQuality" text="申请水质检验" />
					<van-grid-item icon="records" to="/report" text="报漏报修" />
					<van-grid-item icon="envelop-o" to="/suggest" text="投诉建议" />
				</van-grid>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'others'
};
</script>
