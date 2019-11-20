<template>
	<div>
		<span>{{ item.name }}</span>
		<span>{{ item.price }}</span>
		<span>{{ item.count }}개</span>
		<button @click="deleteItem(item)">delete</button>
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
		deleteItem(item) {
			this.$store.dispatch('deleteItemAction', item);
		},
	},
};
</script>

<style></style>
