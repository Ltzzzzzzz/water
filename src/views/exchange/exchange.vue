<template>
	<div id="exchange" class="pageContainer">
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
					<van-grid-item icon="friends-o" to="/transfer" text="过户" />
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
