import * as types from './types';

const mutations = {
	[types.SET_KEEPALIVE](state, keepAlive) {
		state.keepAlive = keepAlive;
	},
	[types.SET_SCROLLTOP](state, scrollTop) {
		state.scrollTop = scrollTop;
	}
};

export default mutations;
