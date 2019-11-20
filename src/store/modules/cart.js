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
		state.carts = carts;
		localStorage.setItem('handy-cart', JSON.stringify(carts));
	},
	deleteItem(state, item) {
		let { carts } = state;
		const ItemIdx = carts.findIndex(cartItem => cartItem === item);

		if (ItemIdx > -1) {
			carts.splice(ItemIdx, 1);
			state.carts = carts;
			localStorage.setItem('handy-cart', JSON.stringify(carts));
		}
	},
};

const actions = {
	initialize(options) {
		options.commit('setCarts');
	},
	addingItemAction(options, item) {
		options.commit('addItem', item);
	},
	deleteItemAction(options, item) {
		options.commit('deleteItem', item);
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
