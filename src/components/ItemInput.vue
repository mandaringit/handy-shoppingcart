<template>
	<v-form>
		<v-container>
			<!-- 아이템 이름 -->
			<v-text-field
				class="form-control"
				type="text"
				v-model="item.name"
				placeholder="아이템 이름을 입력하세요"
				required
				clearable
			></v-text-field>
			<!-- 아이템 가격 -->
			<v-text-field label="개당 가격" prefix="₩" v-model="item.price" />
			<!-- 아이템 갯수 -->
			<v-text-field
				type="number"
				label="갯수"
				suffix="개"
				v-model="item.count"
			/>
			<!-- 아이템 갯수 슬라이드바 -->
			<v-slider v-model="item.count" :min="min" :max="max">
				<template v-slot:prepend>
					<v-icon @click="decrement">
						mdi-minus
					</v-icon>
				</template>
				<template v-slot:append>
					<v-icon @click="increment">
						mdi-plus
					</v-icon>
				</template>
			</v-slider>
			<!-- 추가버튼 -->
			<v-btn color="primary" @click="addItem">+</v-btn>
		</v-container>
	</v-form>
</template>

<script>
export default {
	name: 'ItemInput',
	data() {
		return {
			max: 20,
			min: 1,
			item: {
				name: '',
				price: 1000,
				count: 1,
			},
		};
	},
	methods: {
		decrement() {
			if (this.item.count > this.min) {
				this.item.count -= 1;
			}
		},
		increment() {
			if (this.item.count < this.max) {
				this.item.count += 1;
			}
		},
		checkItem() {
			if (this.item.name.length < 2) return false;
			if (this.item.price < 0) return false;
			if (this.item.count < 1) return false;
			return true;
		},
		addItem() {
			if (this.checkItem()) {
				this.$store.dispatch('addingItemAction', this.item);
				this.item = {
					name: '',
					price: 1000,
					count: 1,
				};
				this.$emit('itemAdded');
			}
		},
	},
};
</script>

<style></style>
