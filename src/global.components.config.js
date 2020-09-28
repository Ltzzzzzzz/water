// 自定义组件配置入口
import Vue from 'vue';
import DatePicker from 'components/globel/DatePicker';
import Picker from 'components/globel/Picker';
import Navbar from 'components/globel/Navbar';
import Title from 'components/globel/Title';

const components = [DatePicker, Picker, Navbar, Title];

components.forEach(component => {
	Vue.use(component);
});
