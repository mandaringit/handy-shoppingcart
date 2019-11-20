<template>
	<div>
		<span>{{ item.name }}</span>
		<span>{{ item.price }}</span>
		<span>{{ item.count }}개</span>
		<span>{{ itemCountPrice }}</span>
		<button @click="deleteItem">delete</button>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	props: {
		item: {
			type: Object,
		},
	},
	methods: {
		deleteItem() {
			this.$store.dispatch('deleteItemAction', this.item);
		},
	},
	computed: {
		itemCountPrice() {
			return this.item.price * this.item.count;
		},
	},
};
</script>

<style></style>
