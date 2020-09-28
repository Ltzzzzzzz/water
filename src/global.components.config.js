// 自定义组件配置入口
import Vue from 'vue';
import DatePicker from 'components/DatePicker';
import Picker from 'components/Picker';
import Navbar from 'components/Navbar';

const components = [DatePicker, Picker, Navbar];

components.forEach(component => {
	Vue.use(component);
});
