<template>
	<div class="form-group">
		<input
			class="form-control"
			type="text"
			v-model="item.name"
			placeholder="아이템 이름을 입력하세요"
		/>
		<input class="form-control" type="number" v-model="item.price" />
		<input class="form-control" type="number" v-model="item.count" />
		<button class="btn btn-sm btn-primary" @click="addItem">+</button>
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
