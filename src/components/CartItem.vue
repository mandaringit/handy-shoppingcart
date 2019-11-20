<template>
	<div>
		<span>{{ item.name }}</span>
		<span>{{ item.price }}</span>
		<span>{{ item.count }}개</span>
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
};
</script>

<style></style>
