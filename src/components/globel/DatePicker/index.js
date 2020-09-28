import DatePicker from './src';

const DatePickerComponent = {
	install(Vue) {
		Vue.component(DatePicker.name, DatePicker);
	}
};

export default DatePickerComponent;
