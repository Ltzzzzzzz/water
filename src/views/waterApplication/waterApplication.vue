<template>
	<div id="waterApplication" class="pageContainer">
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
						<van-grid-item icon="new-o" to="/personalNew" text="个人新装表" />
						<van-grid-item icon="new-o" to="/personalSnap" text="个人临时用水" />
						<van-grid-item icon="new-o" to="/arrearsReinstall" text="欠费停水复装" />
						<van-grid-item icon="new-o" to="/unitNew" text="单位新装表" />
						<van-grid-item icon="new-o" to="/unitSnap" text="单位临时用水" />
						<van-grid-item icon="new-o" to="/pauseReinstall" text="暂停用水复装" />
					</van-grid>
				</div>
			</div>
		</PageModel>
	</div>
</template>

<script>
export default {
	name: 'waterApplication'
};
</script>
