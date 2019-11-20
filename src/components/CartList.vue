<template>
	<div>
		<h3>카트 리스트</h3>
		<h1>{{ globalCarts }}</h1>
	</div>
</template>

<script>
export default {
	name: 'CartList',
	computed: {
		globalCarts() {
			return this.$store.getters.globalCarts;
		},
	},
};
</script>

<style></style>
