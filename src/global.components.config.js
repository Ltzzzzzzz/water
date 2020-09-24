// 自定义组件配置入口
import Vue from 'vue';
import pageNav from 'components/PageNav';
import DatePicker from 'components/DatePicker';

const components = [pageNav, DatePicker];

components.forEach(component => {
	Vue.use(component);
});
