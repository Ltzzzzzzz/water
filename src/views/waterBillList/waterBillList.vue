<template>
	<div id="waterBillList" class="pageContainer">
		<PageNav link="/Payment" :title="$route.meta.title"></PageNav>
		<div class="titleWrapper">
			<p>
				户名：<br />
				户号：<br />
				地址：<br />
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WaterBillList'
};
</script>

<style lang="scss" scoped>
@import 'css/waterBillList.scss';
</style>
