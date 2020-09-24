<template>
	<div class="datePicker">
		<van-field readonly clickable :label="placeholder" :value="value" :name="name" :rules="rules" :placeholder="`选择${placeholder}`" @click="showPicker = true" />
		<van-popup v-model="showPicker" round position="bottom">
			<van-datetime-picker v-model="currentDate" type="date" :title="placeholder" @confirm="onConfirm" />
		</van-popup>
	</div>
</template>

<script>
import { formatTime } from 'js/utils';
export default {
	name: 'DatePicker',
	props: ['value', 'placeholder', 'name', 'rules', 'forward'],
	data() {
		return {
			currentDate: new Date(),
			showPicker: false
		};
	},
	created() {
		if (this.forward) {
			this.$emit('input', formatTime(this.forwardDate(this.forward)));
		} else {
			this.$emit('input', formatTime(this.currentDate));
		}
	},
	methods: {
		forwardDate(n) {
			let cur = new Date(),
				y = cur.getFullYear() - n,
				m = cur.getMonth(),
				d = cur.getDate();
			return new Date(y, m, d);
		},
		onConfirm(date) {
			this.$emit('input', formatTime(this.currentDate));
			this.showPicker = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.datePicker {
	position: relative;
	&:after {
		content: '';
		position: absolute;
		right: 16px;
		bottom: 0;
		left: 16px;
		border-bottom: 1px solid #ebedf0;
		transform: scaleY(0.5);
	}
}
</style>
