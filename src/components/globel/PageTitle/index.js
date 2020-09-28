import PageTitle from './src';

const PageTitleComponent = {
	install(Vue) {
		Vue.component(PageTitle.name, PageTitle);
	}
};

export default PageTitleComponent;
