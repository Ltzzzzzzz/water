import Vue from 'vue';
import Vuex from 'vuex';
import globel from './globel'; // 全局状态

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		globel
	},
	strict: process.env.NODE_ENV !== 'production'
});
