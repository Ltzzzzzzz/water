<template>
	<div class="titleWrapper">
		<div class="title">
			<div class="line left"></div>
			<h4>{{ title }}</h4>
			<div class="line right"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Title',
	props: ['title']
};
</script>

<style lang="scss" scoped>
.titleWrapper {
	padding-top: 20px;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	.title {
		display: flex;
		width: 100%;
		align-items: center;
		.line,
		h4 {
			flex: 1;
		}
		.line {
			margin: 0 5vw;
			height: 1px;
			opacity: 0.7;
			box-shadow: 0 0 0.42rem #1d7eb8;
			&.left {
				transform: scaleY(0.5) skewX(45deg);
				background: linear-gradient(to left, #1d7eb8, #4199b4);
			}
			&.right {
				transform: scaleY(0.5) skewX(-45deg);
				background: linear-gradient(to left, #4199b4, #1d7eb8);
			}
		}
		h4 {
			text-align: center;
			font-size: 16px;
			color: #555555;
			font-weight: normal;
		}
	}
}
</style>
