import Title from './src';

const TitleComponent = {
	install(Vue) {
		Vue.component(Title.name, Title);
	}
};

export default TitleComponent;
