import * as types from './types';

const mutations = {
	[types.SET_KEEPALIVE](state, keepAlive) {
		state.keepAlive = keepAlive;
	}
};

export default mutations;
