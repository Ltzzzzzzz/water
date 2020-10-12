<template>
	<div id="waterOff" class="pageContainer">
		<Navbar>
			<p class="desc">
				停水通知
			</p>
		</Navbar>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="暂无停水通知" /></div>
			<div class="outletList" v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterOff',
	data() {
		return {
			list: []
		};
	}
};
</script>

<style></style>
