<template>
	<div class="picker" :class="{ formItem: !custom, required }">
		<p v-if="custom" @click="showPicker = true">{{ value }}</p>
		<van-field v-else readonly clickable :label="placeholder" :value="value" :name="name" :placeholder="`选择${placeholder}`" @click="showPicker = true" :rules="rules" />
		<van-popup v-model="showPicker" round position="bottom">
			<van-picker show-toolbar :title="placeholder ? placeholder : title" v-model="currentItem" :columns="columns" @confirm="onConfirm" />
		</van-popup>
	</div>
</template>

<script>
export default {
	name: 'Picker',
	props: ['value', 'columns', 'title', 'custom', 'placeholder', 'name', 'required', 'rules'],
	data() {
		return {
			currentItem: '',
			showPicker: false
		};
	},
	methods: {
		onConfirm(v) {
			this.currentItem = v;
			this.$emit('input', this.currentItem);
			this.$emit('change');
			this.showPicker = false;
		}
	}
};
</script>

<style lang="scss">
.picker {
	position: relative;
	&.required:before {
		content: '*';
		position: absolute;
		top: 14px !important;
		left: 10px;
		font-size: 10px;
		color: #ee0a24;
		z-index: 1;
	}
	&.formItem:after {
		position: absolute;
		box-sizing: border-box;
		content: '';
		pointer-events: none;
		right: 16px;
		bottom: 0;
		left: 16px;
		border-bottom: 1px solid #ebedf0;
		transform: scaleY(0.5);
	}
}
</style>
