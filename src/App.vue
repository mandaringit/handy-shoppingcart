<template>
	<v-app>
		<h1 class="display-3 font-weight-bold">HANDY SHOPPING CART</h1>
		<v-content>
			<CartList />
			<BottomSheet />
		</v-content>
	</v-app>
</template>

<script>
import CartList from './components/CartList';
import BottomSheet from './components/BottomSheet';
export default {
	name: 'app',
	components: {
		CartList,
		BottomSheet,
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
