import * as types from './types';

const mutations = {
	[types.SET_KEEPALIVE](state, keepAlive) {
		state.keepAlive = keepAlive;
	},
	[types.SET_SCROLLTOP](state, scrollTop) {
		state.scrollTop = scrollTop;
	},
	[types.SET_PAGE_ANIMATION](state, pageAnimation) {
		state.pageAnimation = pageAnimation;
	}
};

export default mutations;
