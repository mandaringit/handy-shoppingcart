<template>
	<div>
		<h3>카트 리스트</h3>
		<h2>TOTAL {{ totalPrice }} 원</h2>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">상품명</th>
					<th scope="col">개별 가격</th>
					<th scope="col">갯수</th>
					<th scope="col">총 가격</th>
					<th scope="col">#</th>
				</tr>
			</thead>
			<tbody>
				<CartItem
					v-for="(item, idx) in globalCarts"
					:key="idx"
					:item="item"
					:idx="idx"
				/>
			</tbody>
		</table>
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
