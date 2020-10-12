<template>
	<div id="waterQuality" class="pageContainer">
		<Navbar>
			<p class="desc">
				水质公告
			</p>
		</Navbar>
		<div class="container">
			<div class="tip" v-if="!list.length"><van-empty description="暂无水质公告" /></div>
			<div class="outletList" v-else></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'waterQuality',
	data() {
		return {
			list: []
		};
	}
};
</script>

<style></style>
