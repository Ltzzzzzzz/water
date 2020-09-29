// 自定义组件配置入口
import Vue from 'vue';
import Navbar from 'components/globel/Navbar';
import PageTitle from 'components/globel/PageTitle';
import PartTitle from 'components/globel/PartTitle';

const components = [Navbar, PageTitle, PartTitle];

components.forEach(component => {
	Vue.use(component);
});
