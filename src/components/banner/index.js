import Banner from './src/banner';

const BannerComponent = {
	install(Vue) {
		Vue.component(Banner.name, Banner);
	}
};

export default BannerComponent;
