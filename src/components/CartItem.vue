<template>
	<tr>
		<td>{{ idx + 1 }}</td>
		<td>{{ item.name }}</td>
		<td>{{ item.price }} 원</td>
		<td>{{ item.count }}개</td>
		<td>{{ itemCountPrice }} 원</td>
		<td>
			<v-btn small color="error" @click="deleteItem">delete</v-btn>
		</td>
	</tr>
</template>

<script>
export default {
	name: 'CartItem',
	props: {
		idx: {
			type: Number,
		},
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
