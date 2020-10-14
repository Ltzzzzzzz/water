import PageModel from './src';

const PageModelComponent = {
	install(Vue) {
		Vue.component(PageModel.name, PageModel);
	}
};

export default PageModelComponent;
