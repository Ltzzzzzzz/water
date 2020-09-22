// 自定义组件配置入口
import Vue from 'vue';
import pageNav from 'components/pageNav';
import DatePicker from 'components/datePicker';
import Banner from 'components/banner';

const components = [pageNav, DatePicker, Banner];

components.forEach(component => {
	Vue.use(component);
});
