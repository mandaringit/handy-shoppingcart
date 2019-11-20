<template>
	<div>
		<h3>카트 리스트</h3>
		<CartItem v-for="item of globalCarts" :key="item.id" :item="item" />
		<h3>TOTAL {{ totalPrice }} 원</h3>
	</div>
</template>

<script>
import CartItem from './CartItem';
export default {
	name: 'CartList',
	components: {
		CartItem,
	},
	computed: {
		globalCarts() {
			return this.$store.getters.globalCarts;
		},
		totalPrice() {
			const total = this.globalCarts.reduce(
				(acc, item) => (acc += item.price * item.count),
				0
			);
			return total;
		},
	},
};
</script>

<style></style>
