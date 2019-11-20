const state = {
	carts: {},
};

const mutations = {
	setCarts(state) {
		state.carts = JSON.parse(localStorage.getItem('handy-cart')) || {};
	},
};

const actions = {
	initialize(options) {
		options.commit('setCarts');
	},
};

const getters = {
	globalCarts(state) {
		return state.carts;
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
