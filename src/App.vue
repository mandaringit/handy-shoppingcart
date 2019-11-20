<template>
	<div id="app">
		<h1>HANDY SHOPPING CART</h1>
		<div class="container">
			<ItemInput />
			<CartList />
		</div>
	</div>
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
	margin-top: 60px;
}
</style>
