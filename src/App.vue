<template>
	<v-app>
		<div class="overflow-hidden">
			<v-app-bar
				color="deep-purple accent-4"
				absoulute
				dark
				scroll-target="#app-contents"
				fixed
			>
				<v-toolbar-title>HANDY SHOPPING CART</v-toolbar-title>
				<v-spacer></v-spacer>
				<BottomSheet />
			</v-app-bar>
		</div>
		<v-sheet id="app-contents" class="over-flow-y-auto">
			<CartList />
		</v-sheet>
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
}
</style>
