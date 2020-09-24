<template>
	<div class="picker">
		<p v-if="custom" @click="showPicker = true">{{ value }}</p>
		<van-field v-else readonly clickable :label="placeholder" :value="value" :name="name" :placeholder="`选择${placeholder}`" @click="showPicker = true" />
		<van-popup v-model="showPicker" round position="bottom">
			<van-picker show-toolbar :title="placeholder ? placeholder : title" v-model="currentItem" :columns="columns" @confirm="onConfirm" />
		</van-popup>
	</div>
</template>

<script>
export default {
	name: 'Picker',
	props: ['value', 'columns', 'title', 'custom', 'placeholder', 'name'],
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
			this.showPicker = false;
		}
	}
};
</script>

<style></style>
