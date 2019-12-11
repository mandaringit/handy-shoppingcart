<template>
	<div class="text-center">
		<v-bottom-sheet v-model="sheet">
			<template #activator="{on}">
				<v-btn v-on="on" text icon color="red">
					<v-icon>
						mdi-plus
					</v-icon>
				</v-btn>
			</template>
			<v-sheet class="text-center">
				<div style="position:relative;height:4rem">
					<v-btn @click="closeSheet" class="mt-4" absolute right text>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</div>
				<ItemInput @itemAdded="closeSheet" />
			</v-sheet>
		</v-bottom-sheet>
	</div>
</template>

<script>
import ItemInput from './ItemInput';
export default {
	data() {
		return {
			sheet: false,
		};
	},
	components: {
		ItemInput,
	},
	methods: {
		closeSheet() {
			this.sheet = !this.sheet;
		},
	},
};
</script>

<style></style>
