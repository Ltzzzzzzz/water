import picker from './src';

const PickerComponent = {
	install(Vue) {
		Vue.component(picker.name, picker);
	}
};

export default PickerComponent;
