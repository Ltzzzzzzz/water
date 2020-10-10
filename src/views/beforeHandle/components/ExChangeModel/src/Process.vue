<template>
	<div class="process">
		<div class="step" v-for="(step, i) in steps" :key="i">{{ step }}</div>
	</div>
</template>

<script>
export default {
	name: 'Process',
	props: ['steps']
};
</script>

<style lang="scss" scoped>
.process {
	line-height: 44px;
	font-size: 14px;
	font-weight: bold;
	color: #ffffff;
	.step {
		position: relative;
		margin: 0 auto;
		margin-bottom: 4px;
		padding: 0 20px;
		text-align: center;
		background-color: #ffa200;
		border-radius: 8px;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			border: 12px solid transparent;
			border-top-color: #f7f8fa;
			transform: translateX(-12px);
		}
		&:after {
			content: '';
			position: absolute;
			bottom: -23px;
			left: 50%;
			border: 12px solid transparent;
			border-top-color: #ffa200;
			transform: translateX(-12px);
			z-index: 1;
		}
		&:nth-child(1):before,
		&:nth-last-child(1):after {
			display: none;
		}
	}
}
</style>
