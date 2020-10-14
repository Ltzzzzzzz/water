// 自定义组件配置入口
import Vue from 'vue';
import Navbar from 'components/globel/Navbar';
import PageTitle from 'components/globel/PageTitle';
import PartTitle from 'components/globel/PartTitle';
import PhotoUpload from 'components/globel/PhotoUpload';
import Signature from 'components/globel/Signature';
import Picker from 'components/globel/Picker';
import PageModel from 'components/globel/PageModel';

const components = [Navbar, PageTitle, PartTitle, PhotoUpload, Signature, Picker, PageModel];

components.forEach(component => {
	Vue.use(component);
});
