// 自定义组件配置入口
import Vue from 'vue';
import pageNav from 'components/PageNav';
import DatePicker from 'components/DatePicker';
import Picker from 'components/Picker';

const components = [pageNav, DatePicker, Picker];

components.forEach(component => {
	Vue.use(component);
});
