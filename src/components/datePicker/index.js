import DatePicker from './src/datePicker';

const DatePickerComponent = {
	install(Vue) {
		Vue.component(DatePicker.name, DatePicker);
	}
};

export default DatePickerComponent;
