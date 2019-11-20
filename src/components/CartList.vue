<template>
	<div>
		<h3>카트 리스트</h3>
		<CartItem v-for="item of globalCarts" :key="item.id" :item="item" />
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
	},
};
</script>

<style></style>
