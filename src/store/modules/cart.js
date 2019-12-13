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
		let nextCarts = carts.filter(cartItem => cartItem.id !== item.id)

		state.carts = nextCarts
		localStorage.setItem('handy-cart', JSON.stringify(carts));
	},
	editItem(state, item) {
		let { carts } = state;
		let editedCarts = carts.map(cartItem => cartItem.id !== item.id ? cartItem : { ...item })
		state.carts = editedCarts
		localStorage.setItem('handy-cart', JSON.stringify(carts))
	},
	clearCarts(state) {
		state.carts = []
		localStorage.setItem('handy-cart', JSON.stringify(state.carts))
	}
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
	editItemAction(options, item) {
		options.commit('editItem', item)
	},
	clearCartsAction(options) {
		options.commit('clearCarts')
	}
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
