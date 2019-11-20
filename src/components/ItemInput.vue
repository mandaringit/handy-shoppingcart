<template>
	<div>
		<input type="text" v-model="item.name" />
		<input type="number" v-model="item.price" />
		<input type="number" v-model="item.count" />
		<button @click="addItem">+</button>
	</div>
</template>

<script>
export default {
	name: 'ItemInput',
	data() {
		return {
			item: {
				name: '',
				price: 1000,
				count: 1,
			},
		};
	},
	methods: {
		checkItem() {
			if (this.item.name.length < 2) return false;
			if (this.item.price < 0) return false;
			if (this.item.count < 1) return false;
			return true;
		},
		addItem() {
			if (this.checkItem()) {
				this.$store.dispatch('addingItemAction', this.item);
			}
		},
	},
};
</script>

<style></style>
