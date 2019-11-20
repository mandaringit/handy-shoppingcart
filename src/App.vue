<template>
	<div id="app">
		<h1>HANDY SHOPPING CART</h1>
		<CartList />
	</div>
</template>

<script>
import CartList from './components/CartList';
export default {
	name: 'app',
	components: {
		CartList,
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
