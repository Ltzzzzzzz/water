// 自定义组件配置入口
import Vue from 'vue';
import DatePicker from 'components/globel/DatePicker';
import Picker from 'components/globel/Picker';
import Navbar from 'components/globel/Navbar';
import PageTitle from 'components/globel/PageTitle';
import PartTitle from 'components/globel/PartTitle';

const components = [DatePicker, Picker, Navbar, PageTitle, PartTitle];

components.forEach(component => {
	Vue.use(component);
});
