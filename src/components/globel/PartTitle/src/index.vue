<template>
	<div class="partTitle">
		<div class="colorWrapper" :style="{ backgroundColor: color }"></div>
		<h4>{{ title }}</h4>
	</div>
</template>

<script>
export default {
	name: 'PartTitle',
	props: ['title', 'color']
};
</script>

<style lang="scss" scoped>
.partTitle {
	margin: 10px 0;
	display: flex;
	align-items: center;
	.colorWrapper {
		width: 4px;
		height: 20px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	h4 {
		margin-left: 10px;
		font-size: 14px;
		font-weight: normal;
		color: #333333;
	}
}
</style>
