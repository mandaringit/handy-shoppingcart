<template>
  <v-form>
    <v-container style="max-width:600px">
      <!-- 아이템 이름 -->
      <v-text-field
        type="text"
        v-model="item.name"
        required
        label="아이템 이름"
        clearable
        :rules="[rules.required,rules.min]"
      ></v-text-field>
      <!-- 아이템 가격 -->
      <v-input></v-input>
      <v-text-field
        type="number"
        pattern="[0-9]*"
        label="개당 가격"
        prefix="₩"
        v-model="item.price"
        min="1"
        clearable
        required
        :rules="[rules.minPrice]"
      />

      <!-- 금액 증가 버튼 -->
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-overflow-btn :items="addMoneyList" segmented label="+ 단위가격" color="teal"></v-overflow-btn>
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-overflow-btn :items="minusMoneyList" segmented label="- 단위가격" color="red"></v-overflow-btn>
        </v-col>
      </v-row>

      <!-- 아이템 갯수 -->
      <v-row justify="center" align="center">
        <v-col cols="12" sm="2">
          <v-text-field type="number" label="개수" suffix="개" v-model="item.count" />
        </v-col>
        <v-col cols="12" sm="10">
          <!-- 아이템 갯수 슬라이드바 -->
          <v-slider
            v-model="item.count"
            :min="min"
            :max="max"
            color="deep-purple accent-4"
            track-color="deep-purple lighten-4"
            track-fill-color="deep-purple darken-2"
          >
            <template v-slot:prepend>
              <v-btn icon>
                <v-icon @click="decrement" color="red accent-1">mdi-minus</v-icon>
              </v-btn>
            </template>
            <template v-slot:append>
              <v-btn icon>
                <v-icon @click="increment" @mousedown="increment" color="teal accent-3">mdi-plus</v-icon>
              </v-btn>
            </template>
          </v-slider>
        </v-col>
      </v-row>
      <!-- 총 가격 -->
      <h1 class="mb-4 display-1">
        <span class="orange--text">₩</span>
        {{ sumPrice | numbering }}
      </h1>
      <!-- 추가버튼 -->
      <v-btn class="white--text" color="deep-purple accent-2" @click="addItem" :block="true">추가</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import numeral from "numeral";
export default {
  name: "ItemInput",
  data() {
    return {
      min: 1,
      max: 100,
      item: {
        name: "",
        price: 0,
        count: 1
      },
      rules: {
        required: value => !!value || "필수입니다.",
        min: v => v.length >= 1 || "최소 한글자 이상이어야 합니다.",
        minPrice: v => parseInt(v) > 0 || "가격은 0원 이상이어야 합니다."
      },
      addMoneyList: [
        { text: "+ 100", callback: () => this.addMoney(100) },
        { text: "+ 1,000", callback: () => this.addMoney(1000) },
        { text: "+ 5,000", callback: () => this.addMoney(5000) },
        { text: "+ 10,000", callback: () => this.addMoney(10000) }
      ],
      minusMoneyList: [
        { text: "- 100", callback: () => this.minusMoney(100) },
        { text: "- 1,000", callback: () => this.minusMoney(1000) },
        { text: "- 5,000", callback: () => this.minusMoney(5000) },
        { text: "- 10,000", callback: () => this.minusMoney(10000) }
      ]
    };
  },
  computed: {
    sumPrice() {
      return this.item.price * this.item.count;
    }
  },
  methods: {
    addMoney(amount) {
      if (typeof this.item.price === "string") {
        let intPrice = this.item.price === "" ? 0 : parseInt(this.item.price);
        this.item.price = intPrice + amount;
      } else {
        this.item.price += amount;
      }
    },
    minusMoney(amount) {
      if (typeof this.item.price === "string") {
        let intPrice = this.item.price === "" ? 0 : parseInt(this.item.price);
        if (intPrice - amount >= 0) {
          this.item.price = intPrice - amount;
        } else {
          this.item.price = 0;
        }
      } else {
        if (this.item.price - amount >= 0) {
          this.item.price -= amount;
        } else {
          this.item.price = 0;
        }
      }
    },
    decrement() {
      if (this.item.count > this.min) {
        this.item.count -= 1;
      }
    },
    increment() {
      console.log("??");
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
        this.$store.dispatch("addingItemAction", this.item);
        this.item = {
          name: "",
          price: 1000,
          count: 1
        };
        this.$emit("itemAdded");
      }
    }
  },
  filters: {
    numbering(value) {
      return numeral(value).format("0,0");
    }
  }
};
</script>

<style></style>
