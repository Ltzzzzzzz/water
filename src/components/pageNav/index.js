import pageNav from './src/pageNav.vue';

const PageNavComponent = {
	install(Vue) {
		Vue.component(pageNav.name, pageNav);
	}
};

export default PageNavComponent;
