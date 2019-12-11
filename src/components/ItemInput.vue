<template>
	<v-form>
		<v-container style="max-width:600px">
			<!-- 아이템 이름 -->
			<v-text-field
				class="form-control"
				type="text"
				v-model="item.name"
				required
				clearable
				label="아이템 이름"
			></v-text-field>
			<!-- 아이템 가격 -->

			<v-text-field label="개당 가격" prefix="₩" v-model="item.price" />

			<!-- 금액 증가 버튼 -->
			<v-row align="center" justify="center">
				<v-col cols="2.4">
					<v-btn color="teal darken-1 white--text" block @click="addMoney(10)">
						+ 10
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn color="teal darken-2 white--text" block @click="addMoney(100)">
						+ 100
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="teal darken-3 white--text"
						block
						@click="addMoney(1000)"
					>
						+ 1,000
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="teal darken-4 white--text"
						block
						@click="addMoney(5000)"
					>
						+ 5,000
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="teal darken-4 white--text"
						block
						@click="addMoney(10000)"
					>
						+ 10,000
					</v-btn>
				</v-col>
			</v-row>

			<!-- 금액 감소 버튼 -->
			<v-row align="center" justify="center">
				<v-col cols="2.4">
					<v-btn color="red darken-1 white--text" block @click="minusMoney(10)">
						- 10
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="red darken-2 white--text"
						block
						@click="minusMoney(100)"
					>
						- 100
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="red darken-3 white--text"
						block
						@click="minusMoney(1000)"
					>
						- 1,000
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="red darken-4 white--text"
						block
						@click="minusMoney(5000)"
					>
						- 5,000
					</v-btn>
				</v-col>
				<v-col cols="2.4">
					<v-btn
						color="red darken-4 white--text"
						block
						@click="minusMoney(10000)"
					>
						- 10,000
					</v-btn>
				</v-col>
			</v-row>

			<!-- 아이템 갯수 -->
			<v-row justify="center" align="center">
				<v-col cols="12" sm="2">
					<v-text-field
						type="number"
						label="개수"
						suffix="개"
						v-model="item.count"
					/>
				</v-col>
				<v-col cols="12" sm="10">
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
				</v-col>
			</v-row>
			<!-- 총 가격 -->
			<h1 class="mb-2 display-1">₩ {{ sumPrice | numbering }}</h1>
			<!-- 추가버튼 -->
			<v-btn color="primary" @click="addItem" :block="true" class="mb-5"
				>항목 추가</v-btn
			>
		</v-container>
	</v-form>
</template>

<script>
import numeral from 'numeral';
export default {
	name: 'ItemInput',
	data() {
		return {
			max: 20,
			min: 1,
			item: {
				name: '',
				price: 0,
				count: 1,
			},
		};
	},
	computed: {
		sumPrice() {
			return this.item.price * this.item.count;
		},
	},
	methods: {
		addMoney(amount) {
			this.item.price += amount;
		},
		minusMoney(amount) {
			if (this.item.price - amount >= 0) {
				this.item.price -= amount;
			} else {
				this.item.price = 0;
			}
		},
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
	filters: {
		numbering(value) {
			return numeral(value).format('0,0');
		},
	},
};
</script>

<style></style>
