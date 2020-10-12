<template>
	<div id="waterPrice" class="pageContainer">
		<Navbar>
			<p class="desc">
				水价信息
			</p>
		</Navbar>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="暂无水价信息" /></div>
			<div class="outletList" v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterPrice',
	data() {
		return {
			list: []
		};
	}
};
</script>

<style></style>
