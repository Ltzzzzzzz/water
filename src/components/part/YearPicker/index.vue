<template>
	<div class="yearPicker">
		<div class="iconWrapper" @click="prevYear">
			<van-icon :color="prev ? '#4199b4' : '#707070'" name="arrow-left" />
		</div>
		<p>{{ years[currentIndex] }}年</p>
		<div class="iconWrapper" @click="nextYear">
			<van-icon :color="next ? '#4199b4' : '#707070'" name="arrow" />
		</div>
	</div>
</template>

<script>
import { throttle } from 'js/utils';
export default {
	name: 'YearPicker',
	data() {
		return {
			years: [new Date().getFullYear()],
			currentIndex: 0,
			next: false,
			prev: true
		};
	},
	created() {
		const currentYear = new Date().getFullYear();
		for (let i = 1; i <= 10; i++) {
			this.years.unshift(currentYear - i);
		}
		this.currentIndex = this.years.indexOf(currentYear);
	},
	watch: {
		currentIndex(n) {
			if (n === this.years.length - 1) {
				this.next = false;
			} else if (n === 0) {
				this.prev = false;
			} else {
				this.next = true;
				this.prev = true;
			}
		}
	},
	methods: {
		prevYear() {
			throttle(() => {
				if (this.prev) {
					this.currentIndex--;
				}
			}, 500)();
		},
		nextYear() {
			throttle(() => {
				if (this.next) {
					this.currentIndex++;
				}
			}, 500)();
		}
	}
};
</script>

<style lang="scss" scoped>
.yearPicker {
	display: flex;
	position: relative;
	&:before,
	&:after {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		transform: scaleY(0.5);
	}
	&:before {
		top: 0;
		border-top: 1px solid #eeeef0;
	}
	&:after {
		bottom: 0;
		border-bottom: 1px solid #eeeef0;
	}
	.iconWrapper {
		padding: 6px 10px;
		background: #eeeeee;
	}
	p {
		flex: 1;
		line-height: 2;
		font-size: 16px;
		text-align: center;
		color: #4199b4;
		background: #ffffff;
	}
}
</style>
