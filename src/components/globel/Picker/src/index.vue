<template>
	<div class="picker" :class="{ formItem: !custom }">
		<p v-if="custom" @click="showPicker = true">{{ currentItem }}</p>
		<van-field v-else :required="required" readonly clickable :label="placeholder" v-model="currentItem" :placeholder="`选择${placeholder}`" @click="showPicker = true" :rules="rules" />
		<van-field v-show="false" :value="value" :name="name" />
		<van-popup v-model="showPicker" round position="bottom">
			<van-picker show-toolbar :title="placeholder ? placeholder : title" v-model="currentItem" :columns="options" value-key="label" @confirm="onConfirm" @cancel="showPicker = false" />
		</van-popup>
	</div>
</template>

<script>
import commonApi from 'api/common';
export default {
	name: 'Picker',
	props: ['value', 'title', 'custom', 'placeholder', 'name', 'required', 'rules', 'code'],
	data() {
		return {
			currentItem: '',
			showPicker: false,
			options: []
		};
	},
	async created() {
		await this.getOptions();
	},
	methods: {
		onConfirm(v) {
			this.currentItem = v.label;
			this.$emit('input', v.value);
			this.$emit('change', v);
			this.showPicker = false;
		},
		async getOptions() {
			const rs = await commonApi.getOptions({ 'codes[]': this.code });
			if (rs.code === 0) {
				this.options = rs.data.area_ab;
			}
		},
		findOption(str) {
			const curr = this.options.filter(o => o.label === str)[0];
			curr && this.onConfirm(curr);
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
