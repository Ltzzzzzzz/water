<template>
	<div id="progressInquire" class="pageContainer">
		<PageModel>
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
						<van-grid-item icon="flag-o" to="/businessProgress" text="业务办理进度" />
						<van-grid-item icon="bulb-o" to="/waterOff" text="停水通知" />
						<van-grid-item icon="bullhorn-o" to="/waterQuality" text="水质公告" />
						<van-grid-item icon="gold-coin-o" to="/waterPrice" text="水价信息" />
						<van-grid-item icon="newspaper-o" to="/outlets" text="营业网点" />
					</van-grid>
				</div>
			</div>
		</PageModel>
	</div>
</template>

<script>
export default {
	name: 'progressInquire'
};
</script>
