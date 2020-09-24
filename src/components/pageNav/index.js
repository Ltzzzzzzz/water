import pageNav from './src';

const PageNavComponent = {
	install(Vue) {
		Vue.component(pageNav.name, pageNav);
	}
};

export default PageNavComponent;
