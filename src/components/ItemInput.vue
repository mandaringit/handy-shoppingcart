<template>
	<div>
		<input type="text" v-model="name" />
		<input type="number" v-model="price" />
		<input type="number" v-model="count" />
		<button @click="addItem">+</button>
	</div>
</template>

<script>
export default {
	name: 'ItemInput',
	data() {
		return {
			name: '',
			price: 1000,
			count: 1,
		};
	},
	methods: {
		checkItem() {
			if (this.name.length < 2) return false;
			if (this.price < 0) return false;
			if (this.count < 1) return false;
			return true;
		},
		addItem() {
			if (this.checkItem()) {
				const item = {
					name: this.name,
					price: this.price,
					count: this.count,
				};

				this.$store.dispatch('addingItemAction', item);
			}
		},
	},
};
</script>

<style></style>
