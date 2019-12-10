<template>
	<v-app>
		<h1>HANDY SHOPPING CART</h1>
		<v-content>
			<ItemInput />
			<CartList />
		</v-content>
	</v-app>
</template>

<script>
import CartList from './components/CartList';
import ItemInput from './components/ItemInput';
export default {
	name: 'app',
	components: {
		CartList,
		ItemInput,
	},
	mounted() {
		this.$store.dispatch('initialize');
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding-top: 5rem;
}
</style>
