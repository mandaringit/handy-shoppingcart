const state = {
	carts: [],
};

const mutations = {
	setCarts(state) {
		state.carts = JSON.parse(localStorage.getItem('handy-cart')) || [];
	},
	addItem(state, item) {
		let { carts } = state;
		carts.push(item);
		localStorage.setItem('handy-cart', JSON.stringify(carts));
		state.carts = carts;
	},
};

const actions = {
	initialize(options) {
		options.commit('setCarts');
	},
	addingItem(options, item) {
		options.commit('addItem', item);
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
