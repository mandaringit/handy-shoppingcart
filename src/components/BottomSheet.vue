<template>
	<div class="text-center">
		<v-bottom-sheet v-model="sheet">
			<template #activator="{on}">
				<v-btn v-on="on">
					아이템 추가
				</v-btn>
			</template>
			<v-sheet class="text-center">
				<v-btn @click="closeSheet" class="mt-3" color="error">
					취소
				</v-btn>
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
