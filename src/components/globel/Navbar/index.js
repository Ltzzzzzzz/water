import Navbar from './src';

const NavbarComponent = {
	install(Vue) {
		Vue.component(Navbar.name, Navbar);
	}
};

export default NavbarComponent;
