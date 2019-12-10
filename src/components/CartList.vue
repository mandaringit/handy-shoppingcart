<template>
	<div>
		<h2 class="my-5">
			TOTAL <span class="cyan--text">{{ totalPrice }}</span> 원
		</h2>
		<v-container>
			<v-data-table
				:headers="headers"
				:items="globalCarts"
				:sort-by="['name', 'price', 'count']"
				hide-default-footer
				:dark="true"
			>
				<!-- 아이템 개별 총합 가격 -->
				<template #item.priceSum="{ item }">
					{{ sumPrice(item.price, item.count) }}
				</template>
				<!-- 아이템 액션 -->
				<template #item.action="{ item }">
					<v-btn small color="error" @click="deleteItem(item)">delete</v-btn>
				</template>
			</v-data-table>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'CartList',
	data() {
		return {
			headers: [
				{
					text: '상품명',
					value: 'name',
					align: 'center',
				},
				{
					text: '개별가격',
					value: 'price',
					align: 'center',
				},
				{
					text: '갯수',
					value: 'count',
					align: 'center',
				},
				{
					text: '총가격',
					value: 'priceSum',
					align: 'center',
					sortable: false,
				},
				{
					text: '액션',
					value: 'action',
					align: 'center',
					sortable: false,
				},
			],
		};
	},
	methods: {
		deleteItem(item) {
			this.$store.dispatch('deleteItemAction', item);
		},
	},
	computed: {
		globalCarts() {
			return this.$store.getters.globalCarts;
		},
		sumPrice() {
			return (count, price) => count * price;
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
